import { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Return demo lessons if Supabase is not configured
    return res.status(200).json([
      {
        id: "demo-1",
        title: "Greetings & Introductions",
        slug: "greetings-introductions",
        description: "Learn how to greet people and introduce yourself in Spanish.",
        difficulty: "BEGINNER",
        level: "A1",
        order: 1,
        imageUrl: null,
        durationMinutes: 15,
        isPublished: true,
        userProgress: [],
      },
      {
        id: "demo-2",
        title: "Ordering at a Restaurant",
        slug: "ordering-restaurant",
        description: "Master the essential phrases for dining out in Spanish-speaking countries.",
        difficulty: "BEGINNER",
        level: "A1",
        order: 2,
        imageUrl: null,
        durationMinutes: 20,
        isPublished: true,
        userProgress: [],
      },
      {
        id: "demo-3",
        title: "Asking for Directions",
        slug: "asking-directions",
        description: "Navigate any Spanish-speaking city with confidence.",
        difficulty: "BEGINNER",
        level: "A2",
        order: 3,
        imageUrl: null,
        durationMinutes: 18,
        isPublished: true,
        userProgress: [],
      },
      {
        id: "demo-4",
        title: "Past Tense Essentials",
        slug: "past-tense",
        description: "Learn the preterite tense to talk about past events.",
        difficulty: "INTERMEDIATE",
        level: "B1",
        order: 4,
        imageUrl: null,
        durationMinutes: 25,
        isPublished: true,
        userProgress: [],
      },
      {
        id: "demo-5",
        title: "Subjunctive Mood",
        slug: "subjunctive-mood",
        description: "Master the Spanish subjunctive for expressing doubt, desire, and emotion.",
        difficulty: "ADVANCED",
        level: "B2",
        order: 5,
        imageUrl: null,
        durationMinutes: 30,
        isPublished: true,
        userProgress: [],
      },
      {
        id: "demo-6",
        title: "Advanced Conversation",
        slug: "advanced-conversation",
        description: "Complex topics and nuanced expressions for fluent speakers.",
        difficulty: "EXPERT",
        level: "C1",
        order: 6,
        imageUrl: null,
        durationMinutes: 35,
        isPublished: true,
        userProgress: [],
      },
    ]);
  }

  try {
    const { level, search } = req.query;

    let query = supabase
      .from("lessons")
      .select("*, userProgress:user_lesson_progress(isCompleted, timeSpentMinutes, lastAccessedAt)")
      .eq("isPublished", true)
      .order("order", { ascending: true });

    if (level && level !== "ALL") {
      query = query.eq("level", level);
    }

    if (search) {
      const s = (search as string).toLowerCase();
      const { data: allLessons } = await query;
      const filtered = (allLessons || []).filter(
        (l: any) =>
          l.title?.toLowerCase().includes(s) ||
          l.description?.toLowerCase().includes(s)
      );
      return res.status(200).json(filtered);
    }

    const { data: lessons, error } = await query;

    if (error) throw error;

    return res.status(200).json(lessons || []);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return res.status(200).json([]);
  }
}