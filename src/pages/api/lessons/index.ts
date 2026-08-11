import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { LESSONS_DATA } from "@/lib/lessons-data";

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
  
  // Fallback: check sslid_auth cookie
  const cookie = req.headers.cookie;
  if (cookie) {
    const match = cookie.match(/sslid_auth=([^;]+)/);
    if (match) {
      try {
        const auth = JSON.parse(decodeURIComponent(match[1]));
        return auth.id;
      } catch {
        // ignore parse error
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
  if (!supabase) {
    return res.status(200).json(LESSONS_FALLBACK);
  }

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { level, search } = req.query;

    let query = supabase
      .from("lessons")
      .select("id, title, slug, description, difficulty, level, order, imageUrl, durationMinutes, isPublished")
      .eq("isPublished", true)
      .order("order", { ascending: true });

    if (level && level !== "ALL") {
      query = query.eq("level", level);
    }

    const { data: lessons, error } = await query;

    if (error) throw error;

    let result = lessons || [];

    if (search && typeof search === "string") {
      const term = search.toLowerCase();
      result = result.filter(
        (l: any) =>
          l.title?.toLowerCase().includes(term) ||
          l.description?.toLowerCase().includes(term)
      );
    }

    // Deduplicate by slug and enrich with real content
    const seenSlugs = new Set<string>();
    result = result
      .filter((lesson: any) => {
        if (seenSlugs.has(lesson.slug)) return false;
        seenSlugs.add(lesson.slug);
        return true;
      })
      .map((lesson: any) => {
        const real = LESSONS_DATA.find((l) => l.slug === lesson.slug || l.id === lesson.id);
        if (!real) return lesson;
        const isPlaceholder = !lesson.content || lesson.content === "Lesson content here..." || lesson.content.length < 50;
        return {
          ...lesson,
          title: lesson.title || real.title,
          description: lesson.description || real.description,
          content: isPlaceholder ? real.content : lesson.content,
          vocabularyJson: lesson.vocabularyJson || real.vocabularyJson,
          grammarJson: lesson.grammarJson || real.grammarJson,
          exercisesJson: lesson.exercisesJson || real.exercisesJson,
          level: lesson.level || real.level,
          durationMinutes: lesson.durationMinutes || real.durationMinutes,
        };
      });

    // Fetch user progress if authenticated
    if (userId) {
      const { data: progress } = await supabase
        .from("user_lesson_progress")
        .select("lessonId, isCompleted, timeSpentMinutes, lastAccessedAt")
        .eq("userId", userId);

      const progressMap = new Map((progress || []).map((p: any) => [p.lessonId, p]));

      result = result.map((lesson: any) => ({
        ...lesson,
        userProgress: progressMap.has(lesson.id) ? [progressMap.get(lesson.id)] : [],
      }));
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return res.status(200).json(LESSONS_FALLBACK);
  }
}

const LESSONS_FALLBACK = LESSONS_DATA.map((l) => ({
  ...l,
  userProgress: [],
}));