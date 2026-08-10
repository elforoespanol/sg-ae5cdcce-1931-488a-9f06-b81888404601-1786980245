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
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  try {
    const session = await getSession({ req });
    (req as any).__session = session;
    const userId = getUserIdFromRequest(req);

    if (!userId) {
      return res.status(200).json({
        streak: 0, lastActiveDate: null, totalStudyMinutes: 0, level: "A1",
        lessonsCompleted: 0, chatMessages: 0, flashcardsReviewed: 0,
        flashcardsMastered: 0, dueFlashcards: 0, totalXp: 0,
        recentActivity: [], unlockedAchievements: [],
      });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return res.status(200).json({
        streak: 0, lastActiveDate: null, totalStudyMinutes: 0, level: "A1",
        lessonsCompleted: 0, chatMessages: 0, flashcardsReviewed: 0,
        flashcardsMastered: 0, dueFlashcards: 0, totalXp: 0,
        recentActivity: [], unlockedAchievements: [],
      });
    }

    const { data: user } = await supabase
      .from("users")
      .select("streak, totalStudyMinutes, lastActiveDate, level")
      .eq("id", userId)
      .single();

    const { count: lessonsCompleted } = await supabase
      .from("user_lesson_progress")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId)
      .eq("isCompleted", true);

    const { count: chatMessages } = await supabase
      .from("chat_messages")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId);

    const { count: flashcardsReviewed } = await supabase
      .from("flashcard_review_logs")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId);

    const { count: flashcardsMastered } = await supabase
      .from("flashcards")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId)
      .eq("isMastered", true);

    const { count: dueFlashcards } = await supabase
      .from("flashcards")
      .select("*", { count: "exact", head: true })
      .eq("userId", userId)
      .lte("nextReviewDate", new Date().toISOString());

    const { data: recentActivity } = await supabase
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
      streak: 0, lastActiveDate: null, totalStudyMinutes: 0, level: "A1",
      lessonsCompleted: 0, chatMessages: 0, flashcardsReviewed: 0,
      flashcardsMastered: 0, dueFlashcards: 0, totalXp: 0,
      recentActivity: [], unlockedAchievements: [],
    });
  }
}