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

const LESSONS_FALLBACK = [
  {
    id: "greetings-a1",
    title: "Greetings & Introductions",
    slug: "greetings-introductions",
    description: "Learn how to greet people, introduce yourself, and ask basic questions in Spanish.",
    difficulty: "BEGINNER",
    level: "A1",
    order: 1,
    imageUrl: null,
    durationMinutes: 15,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "numbers-a1",
    title: "Numbers & Counting",
    slug: "numbers-counting",
    description: "Master Spanish numbers from 0 to 100, learn to tell time, and handle basic transactions.",
    difficulty: "BEGINNER",
    level: "A1",
    order: 2,
    imageUrl: null,
    durationMinutes: 12,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "present-tense-a1",
    title: "Present Tense Verbs",
    slug: "present-tense-verbs",
    description: "Conjugate regular -ar, -er, and -ir verbs in the present tense.",
    difficulty: "BEGINNER",
    level: "A1",
    order: 3,
    imageUrl: null,
    durationMinutes: 20,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "family-a2",
    title: "Family & Relationships",
    slug: "family-relationships",
    description: "Talk about your family, describe people, and discuss relationships.",
    difficulty: "ELEMENTARY",
    level: "A2",
    order: 4,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "past-tense-a2",
    title: "Past Tense: Pretérito",
    slug: "past-tense-preterito",
    description: "Learn the preterito tense to talk about completed actions in the past.",
    difficulty: "ELEMENTARY",
    level: "A2",
    order: 5,
    imageUrl: null,
    durationMinutes: 22,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "future-b1",
    title: "Future Plans & Intentions",
    slug: "future-plans",
    description: "Express future plans using ir a + infinitive and the simple future tense.",
    difficulty: "INTERMEDIATE",
    level: "B1",
    order: 6,
    imageUrl: null,
    durationMinutes: 20,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "subjunctive-b2",
    title: "The Subjunctive Mood",
    slug: "subjunctive-mood",
    description: "Master the present subjunctive for expressing doubt, emotion, and possibility.",
    difficulty: "UPPER_INTERMEDIATE",
    level: "B2",
    order: 7,
    imageUrl: null,
    durationMinutes: 25,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "conditional-c1",
    title: "Conditional & Hypotheticals",
    slug: "conditional-hypotheticals",
    description: "Discuss hypothetical situations using the conditional and imperfect subjunctive.",
    difficulty: "ADVANCED",
    level: "C1",
    order: 8,
    imageUrl: null,
    durationMinutes: 22,
    isPublished: true,
    userProgress: [],
  },
  {
    id: "idioms-c2",
    title: "Idioms & Colloquialisms",
    slug: "idioms-colloquialisms",
    description: "Sound like a native with advanced idioms, slang, and regional expressions.",
    difficulty: "MASTERY",
    level: "C2",
    order: 9,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    userProgress: [],
  },
];