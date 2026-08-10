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

    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const { data: users, error: usersError } = await supabaseAdmin
      .from("users")
      .select("totalStudyMinutes, lastActiveDate, createdAt");

    if (usersError) throw usersError;

    const { count: totalLessons, error: lessonsError } = await supabaseAdmin
      .from("lessons")
      .select("*", { count: "exact", head: true });

    if (lessonsError) throw lessonsError;

    const { count: totalFlashcards, error: flashcardsError } = await supabaseAdmin
      .from("flashcards")
      .select("*", { count: "exact", head: true });

    if (flashcardsError) throw flashcardsError;

    const { count: totalChats, error: chatsError } = await supabaseAdmin
      .from("chat_sessions")
      .select("*", { count: "exact", head: true });

    if (chatsError) throw chatsError;

    const { count: totalAchievements, error: achievementsError } = await supabaseAdmin
      .from("achievements")
      .select("*", { count: "exact", head: true });

    if (achievementsError) throw achievementsError;

    const activeToday = users?.filter(u => u.lastActiveDate && new Date(u.lastActiveDate) > new Date(oneDayAgo)).length ?? 0;
    const newThisWeek = users?.filter(u => u.createdAt && new Date(u.createdAt) > new Date(oneWeekAgo)).length ?? 0;
    
    const totalStudyMinutes = users?.reduce((sum, u) => sum + (u.totalStudyMinutes || 0), 0) ?? 0;
    const avgStudyTime = users?.length ? Math.round(totalStudyMinutes / users.length) : 0;

    res.status(200).json({
      totalUsers: users?.length ?? 0,
      totalLessons: totalLessons ?? 0,
      totalFlashcards: totalFlashcards ?? 0,
      totalChats: totalChats ?? 0,
      totalAchievements: totalAchievements ?? 0,
      activeToday,
      newThisWeek,
      avgStudyTime,
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    res.status(500).json({ message: "Failed to fetch admin stats" });
  }
}