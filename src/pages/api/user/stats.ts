import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  try {
    const session = await getSession({ req });

    // Dev bypass or require session
    const isDev = process.env.NODE_ENV === "development";
    if (!isDev && !session?.user?.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = session?.user?.id;

    // If no session in dev, return demo data
    if (!userId) {
      return res.status(200).json({
        streak: 0,
        lastActiveDate: null,
        totalStudyMinutes: 0,
        level: "A1",
        lessonsCompleted: 0,
        chatMessages: 0,
        flashcardsReviewed: 0,
        flashcardsMastered: 0,
        dueFlashcards: 0,
        totalXp: 0,
        recentActivity: [],
        unlockedAchievements: [],
      });
    }

    const { data: user } = await supabaseAdmin
      .from("users")
      .select("streak, totalStudyMinutes, lastActiveDate, level")
      .eq("id", userId)
      .single();

    const { count: lessonsCompleted } = await supabaseAdmin
      .from("user_lesson_progress")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId)
      .eq("isCompleted", true);

    const { count: chatMessages } = await supabaseAdmin
      .from("chat_messages")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId);

    const { count: flashcardsReviewed } = await supabaseAdmin
      .from("flashcard_review_logs")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId);

    const { count: flashcardsMastered } = await supabaseAdmin
      .from("flashcards")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId)
      .eq("isMastered", true);

    const { count: dueFlashcards } = await supabaseAdmin
      .from("flashcards")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId)
      .lte("nextReviewDate", new Date().toISOString());

    const { data: recentActivity } = await supabaseAdmin
      .from("user_lesson_progress")
      .select("*, lesson:lessons(title, slug, level)")
      .eq("userId", userId)
      .order("lastAccessedAt", { ascending: false })
      .limit(5);

    const totalXp = Math.floor((user?.totalStudyMinutes || 0) * 2 + (lessonsCompleted || 0) * 50 + (flashcardsReviewed || 0) * 5);

    return res.status(200).json({
      streak: user?.streak || 0,
      lastActiveDate: user?.lastActiveDate,
      totalStudyMinutes: user?.totalStudyMinutes || 0,
      level: user?.level,
      lessonsCompleted: lessonsCompleted || 0,
      chatMessages: chatMessages || 0,
      flashcardsReviewed: flashcardsReviewed || 0,
      flashcardsMastered: flashcardsMastered || 0,
      dueFlashcards: dueFlashcards || 0,
      totalXp,
      recentActivity: (recentActivity || []).map((a: any) => ({
        type: a.isCompleted ? "lesson_completed" : "lesson_started",
        description: a.lesson ? `${a.isCompleted ? "Completed" : "Started"} ${a.lesson.title}` : "Lesson activity",
        date: a.lastAccessedAt,
      })),
      unlockedAchievements: [],
    });
  } catch (error) {
    console.error("Stats error:", error);
    return res.status(200).json({
      streak: 0,
      totalStudyMinutes: 0,
      lessonsCompleted: 0,
      chatMessages: 0,
      flashcardsReviewed: 0,
      flashcardsMastered: 0,
      dueFlashcards: 0,
      totalXp: 0,
      recentActivity: [],
      unlockedAchievements: [],
    });
  }
}