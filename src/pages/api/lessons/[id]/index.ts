import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { LESSONS_DATA } from "@/lib/lessons-data";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function getUserIdFromRequest(req: NextApiRequest): string | undefined {
  const session = (req as any).__session;
  if (session?.user?.id) return session.user.id;
  
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    try {
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
      if (payload.sub) return payload.sub;
    } catch {
      // ignore
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
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Lesson ID required" });
  }

  // Find lesson in authoritative data source
  const lesson = LESSONS_DATA.find((l) => l.id === id || l.slug === id);
  if (!lesson) {
    return res.status(404).json({ message: "Lesson not found" });
  }

  const session = await getSession({ req });
  (req as any).__session = session;
  const userId = getUserIdFromRequest(req);

  // Fetch user progress from Supabase if authenticated
  let userProgress: any[] = [];
  const supabase = getSupabaseAdmin();
  if (userId && supabase) {
    try {
      const { data: progress } = await supabase
        .from("user_lesson_progress")
        .select("isCompleted, timeSpentMinutes, lastAccessedAt, quizScore")
        .eq("userId", userId)
        .eq("lessonId", lesson.id)
        .maybeSingle();

      if (progress) {
        userProgress = [progress];
      }
    } catch (err) {
      console.error("Error fetching user progress:", err);
    }
  }

  return res.status(200).json({
    ...lesson,
    userProgress,
  });
}