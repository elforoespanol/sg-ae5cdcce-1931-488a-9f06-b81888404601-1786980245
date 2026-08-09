import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const session = await getSession({ req });

    if (!session?.user || session.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Forbidden" });
    }

    const [
      totalUsers,
      totalLessons,
      totalFlashcards,
      totalChats,
      totalAchievements,
      activeToday,
      newThisWeek,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.lesson.count(),
      prisma.flashcard.count(),
      prisma.chatSession.count(),
      prisma.achievement.count(),
      prisma.user.count({
        where: {
          lastActiveDate: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        },
      }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      }),
    ]);

    const studyStats = await prisma.user.aggregate({
      _avg: {
        totalStudyMinutes: true,
      },
    });

    res.status(200).json({
      totalUsers,
      totalLessons,
      totalFlashcards,
      totalChats,
      totalAchievements,
      activeToday,
      newThisWeek,
      avgStudyTime: Math.round(studyStats._avg.totalStudyMinutes ?? 0),
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    res.status(500).json({ message: "Failed to fetch admin stats" });
  }
}