import { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Student ID required" });
  }

  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return res.status(200).json({
        student: null,
        completedLessons: 0,
        masteredFlashcards: 0,
        totalFlashcardReviews: 0,
        lessonProgress: [],
        flashcards: [],
        chatSessions: [],
        achievements: [],
      });
    }

    const { data: student } = await supabase
      .from("users")
      .select("id, name, email, level, streak, lastActiveDate, totalStudyMinutes, createdAt, subscription_type, image, role")
      .eq("id", id)
      .single();

    const { count: completedLessons } = await supabase
      .from("user_lesson_progress")
      .select("*", { count: "exact", head: true })
      .eq("userId", id)
      .eq("isCompleted", true);

    const { count: masteredFlashcards } = await supabase
      .from("flashcards")
      .select("*", { count: "exact", head: true })
      .eq("userId", id)
      .eq("isMastered", true);

    const { count: totalFlashcardReviews } = await supabase
      .from("flashcard_review_logs")
      .select("*", { count: "exact", head: true })
      .eq("userId", id);

    const { data: lessonProgress } = await supabase
      .from("user_lesson_progress")
      .select("id, isCompleted, completedAt, lessons(title, slug, difficulty)")
      .eq("userId", id)
      .order("lastAccessedAt", { ascending: false })
      .limit(10);

    const { data: flashcards } = await supabase
      .from("flashcards")
      .select("id, word, isMastered, totalReviews")
      .eq("userId", id)
      .order("totalReviews", { ascending: false })
      .limit(10);

    const { data: chatSessions } = await supabase
      .from("chat_sessions")
      .select("id, created_at, topic")
      .eq("userId", id)
      .order("created_at", { ascending: false })
      .limit(10);

    const { data: achievements } = await supabase
      .from("user_achievements")
      .select("id, unlocked_at, achievements(name, description, icon_name)")
      .eq("userId", id)
      .order("unlocked_at", { ascending: false });

    res.status(200).json({
      student: student || null,
      completedLessons: completedLessons || 0,
      masteredFlashcards: masteredFlashcards || 0,
      totalFlashcardReviews: totalFlashcardReviews || 0,
      lessonProgress: lessonProgress || [],
      flashcards: flashcards || [],
      chatSessions: chatSessions || [],
      achievements: achievements || [],
    });
  } catch (error) {
    console.error("Student detail error:", error);
    res.status(200).json({
      student: null,
      completedLessons: 0,
      masteredFlashcards: 0,
      totalFlashcardReviews: 0,
      lessonProgress: [],
      flashcards: [],
      chatSessions: [],
      achievements: [],
    });
  }
}