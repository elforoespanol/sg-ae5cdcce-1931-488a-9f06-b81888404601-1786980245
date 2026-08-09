import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  const session = await getSession({ req });
  if (!session?.user?.id) return res.status(401).json({ message: "Unauthorized" });

  try {
    const userId = session.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { streak: true, totalStudyMinutes: true, lastActiveDate: true, level: true },
    });

    const lessonsCompleted = await prisma.userLessonProgress.count({
      where: { userId, isCompleted: true },
    });

    const chatMessages = await prisma.chatMessage.count({
      where: { session: { userId } },
    });

    const flashcardsReviewed = await prisma.flashcardReviewLog.count({
      where: { userId },
    });

    const flashcardsMastered = await prisma.flashcard.count({
      where: { userId, isMastered: true },
    });

    const dueFlashcards = await prisma.flashcard.count({
      where: { userId, nextReviewDate: { lte: new Date() } },
    });

    const recentActivity = await prisma.userLessonProgress.findMany({
      where: { userId },
      orderBy: { lastAccessedAt: "desc" },
      take: 5,
      include: { lesson: { select: { title: true, slug: true, level: true } } },
    });

    const unlockedAchievements = await prisma.userAchievement.findMany({
      where: { userId },
      include: { achievement: true },
      orderBy: { unlockedAt: "desc" },
      take: 4,
    });

    const totalXp = Math.floor((user?.totalStudyMinutes || 0) * 2 + lessonsCompleted * 50 + flashcardsReviewed * 5);

    return res.status(200).json({
      streak: user?.streak || 0,
      lastActiveDate: user?.lastActiveDate,
      totalStudyMinutes: user?.totalStudyMinutes || 0,
      level: user?.level,
      lessonsCompleted,
      chatMessages,
      flashcardsReviewed,
      flashcardsMastered,
      dueFlashcards,
      totalXp,
      recentActivity,
      unlockedAchievements: unlockedAchievements.map((ua) => ({
        id: ua.achievement.id,
        name: ua.achievement.name,
        iconName: ua.achievement.iconName,
        category: ua.achievement.category,
        unlockedAt: ua.unlockedAt,
      })),
    });
  } catch (error) {
    console.error("Stats error:", error);
    return res.status(500).json({ message: "Failed to fetch stats" });
  }
}