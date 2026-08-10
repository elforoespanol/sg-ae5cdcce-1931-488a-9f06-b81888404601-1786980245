import { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return res.status(200).json({
        totalUsers: 0,
        totalLessons: 0,
        totalFlashcards: 0,
        totalChats: 0,
        totalAchievements: 0,
        activeToday: 0,
        newThisWeek: 0,
        avgStudyTime: 0,
      });
    }

    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const { data: users, error: usersError } = await supabase
      .from("users")
      .select("totalStudyMinutes, lastActiveDate, createdAt");

    if (usersError) throw usersError;

    const { count: totalLessons } = await supabase
      .from("lessons")
      .select("*", { count: "exact", head: true });

    const { count: totalFlashcards } = await supabase
      .from("flashcards")
      .select("*", { count: "exact", head: true });

    const { count: totalChats } = await supabase
      .from("chat_sessions")
      .select("*", { count: "exact", head: true });

    const { count: totalAchievements } = await supabase
      .from("achievements")
      .select("*", { count: "exact", head: true });

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
    res.status(200).json({
      totalUsers: 0,
      totalLessons: 0,
      totalFlashcards: 0,
      totalChats: 0,
      totalAchievements: 0,
      activeToday: 0,
      newThisWeek: 0,
      avgStudyTime: 0,
    });
  }
}