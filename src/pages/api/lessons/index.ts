import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { LESSONS_DATA } from "@/lib/lessons-data";

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

  const session = await getSession({ req });
  (req as any).__session = session;
  const userId = getUserIdFromRequest(req);

  const { level, search } = req.query;

  // Start with real lesson data as the authoritative source
  let result = LESSONS_DATA.map((l) => ({
    ...l,
    userProgress: [] as any[],
  }));

  // Filter by level
  if (level && level !== "ALL") {
    result = result.filter((l) => l.level === level);
  }

  // Filter by search
  if (search && typeof search === "string") {
    const term = search.toLowerCase();
    result = result.filter(
      (l) =>
        l.title.toLowerCase().includes(term) ||
        l.description.toLowerCase().includes(term)
    );
  }

  // Merge user progress from Supabase if authenticated
  const supabase = getSupabaseAdmin();
  if (userId && supabase) {
    try {
      const { data: progress } = await supabase
        .from("user_lesson_progress")
        .select("lessonId, isCompleted, timeSpentMinutes, lastAccessedAt")
        .eq("userId", userId);

      const progressMap = new Map((progress || []).map((p: any) => [p.lessonId, p]));

      result = result.map((lesson) => ({
        ...lesson,
        userProgress: progressMap.has(lesson.id) ? [progressMap.get(lesson.id)] : [],
      }));
    } catch (err) {
      console.error("Error fetching user progress:", err);
    }
  }

  return res.status(200).json(result);
}