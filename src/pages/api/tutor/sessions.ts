import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const userId = session?.user?.id;

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