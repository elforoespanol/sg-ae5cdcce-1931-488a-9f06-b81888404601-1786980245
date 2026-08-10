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
      const { SignJWT } = require("jose");
      // We can't verify async here easily, but we can decode the payload
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
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
    return res.status(200).json({ sessions: [] });
  }

  try {
    if (req.method === "POST") {
      const { title, lessonId } = req.body;
      const { data: newSession, error } = await supabase
        .from("chat_sessions")
        .insert({
          userId,
          title: title || "New Chat",
          lessonId: lessonId || null,
        })
        .select("id, title, lessonId, created_at")
        .single();

      if (error) throw error;
      return res.status(201).json({ session: newSession });
    }

    if (req.method === "GET") {
      const { data: sessions, error } = await supabase
        .from("chat_sessions")
        .select("id, title, lessonId, created_at, updated_at")
        .eq("userId", userId)
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return res.status(200).json({ sessions: sessions || [] });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Sessions API error:", error);
    return res.status(200).json({ sessions: [] });
  }
}