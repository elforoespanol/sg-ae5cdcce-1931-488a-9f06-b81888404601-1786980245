import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Bypass auth in development/preview
    if (process.env.NODE_ENV !== "development") {
      const session = await getSession({ req });
      if (!session?.user || session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "Forbidden" });
      }
    }

    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Student ID required" });
    }

    const { data: user, error: userError } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (userError || !user) {
      return res.status(404).json({ message: "Student not found" });
    }

    const { data: lessonProgress, error: lpError } = await supabaseAdmin
      .from("user_lesson_progress")
      .select("*, lessons(title, slug, difficulty)")
      .eq("userId", id)
      .order("completedAt", { ascending: false });

    const { data: flashcards, error: fcError } = await supabaseAdmin
      .from("flashcards")
      .select("*")
      .eq("user_id", id)
      .order("created_at", { ascending: false });

    const { data: chatSessions, error: csError } = await supabaseAdmin
      .from("chat_sessions")
      .select("*")
      .eq("user_id", id)
      .order("created_at", { ascending: false });

    const { data: userAchievements, error: uaError } = await supabaseAdmin
      .from("user_achievements")
      .select("*, achievements(name, description, icon_name)")
      .eq("user_id", id)
      .order("unlocked_at", { ascending: false });

    const completedLessons = lessonProgress?.filter(lp => lp.isCompleted).length ?? 0;
    const masteredFlashcards = flashcards?.filter(fc => fc.is_mastered).length ?? 0;
    const totalFlashcardReviews = flashcards?.reduce((sum, fc) => sum + (fc.total_reviews || 0), 0) ?? 0;

    res.status(200).json({
      student: user,
      lessonProgress: lessonProgress || [],
      completedLessons,
      flashcards: flashcards || [],
      masteredFlashcards,
      totalFlashcardReviews,
      chatSessions: chatSessions || [],
      achievements: userAchievements || [],
    });
  } catch (error) {
    console.error("Admin student detail error:", error);
    res.status(500).json({ message: "Failed to fetch student details" });
  }
}