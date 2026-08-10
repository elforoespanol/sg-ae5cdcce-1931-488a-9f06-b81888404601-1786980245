import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function getUserIdFromRequest(req: NextApiRequest): string | undefined {
  const session = (req as any).__session;
  if (session?.user?.id) return session.user.id;
  
  // Check Authorization header first (more reliable in preview)
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    try {
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
      if (payload.sub) return payload.sub;
    } catch {
      // ignore invalid token
    }
  }
  
  const cookie = req.headers.cookie;
  if (cookie) {
    const match = cookie.match(/sslid_auth=([^;]+)/);
    if (match) {
      try {
        const auth = JSON.parse(decodeURIComponent(match[1]));
        return auth.id;
      } catch {
        // ignore
      }
    }
  }
  return undefined;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  (req as any).__session = session;
  const userId = getUserIdFromRequest(req);

  const supabase = getSupabaseAdmin();
  if (!supabase || !userId) {
    return res.status(200).json({ messages: [] });
  }

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { sessionId } = req.query;
    if (!sessionId || typeof sessionId !== "string") {
      return res.status(400).json({ message: "Session ID required" });
    }

    const { data: chatSession } = await supabase
      .from("chat_sessions")
      .select("id")
      .eq("id", sessionId)
      .eq("userId", userId)
      .single();

    if (!chatSession) {
      return res.status(404).json({ message: "Session not found" });
    }

    const { data: messages, error } = await supabase
      .from("chat_messages")
      .select("id, role, content, hasCorrection, originalText, correctedText, explanation, createdAt")
      .eq("sessionId", sessionId)
      .order("createdAt", { ascending: true });

    if (error) throw error;

    return res.status(200).json({ messages: messages || [] });
  } catch (error) {
    console.error("Messages API error:", error);
    return res.status(200).json({ messages: [] });
  }
}