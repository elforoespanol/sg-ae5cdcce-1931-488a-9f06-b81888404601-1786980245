import { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Student ID required" });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(503).json({ message: "Database not available" });
  }

  if (req.method === "GET") {
    try {
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
      res.status(500).json({ message: "Failed to fetch student details" });
    }
  } else if (req.method === "DELETE") {
    try {
      // Delete related records first to avoid foreign key constraint errors
      await supabase.from("user_lesson_progress").delete().eq("userId", id);
      await supabase.from("flashcards").delete().eq("userId", id);
      await supabase.from("flashcard_review_logs").delete().eq("userId", id);
      await supabase.from("chat_sessions").delete().eq("userId", id);
      await supabase.from("user_achievements").delete().eq("userId", id);
      await supabase.from("user_stats").delete().eq("userId", id);

      // Delete the user
      const { error } = await supabase.from("users").delete().eq("id", id);

      if (error) throw error;

      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      console.error("Delete student error:", error);
      res.status(500).json({ message: "Failed to delete student" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}