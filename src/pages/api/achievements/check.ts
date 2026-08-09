import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { ACHIEVEMENTS } from "@/lib/achievements";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const session = await getSession({ req });
  if (!session?.user?.id) return res.status(401).json({ message: "Unauthorized" });

  try {
    const userId = session.user.id;

    const user = await prisma.user.findUnique({ where: { id: userId } });
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
    const streak = user?.streak || 0;

    const unlocked = await prisma.userAchievement.findMany({
      where: { userId },
      select: { achievementId: true },
    });
    const unlockedIds = new Set(unlocked.map((u) => u.achievementId));

    const newlyUnlocked = [];

    for (const ach of ACHIEVEMENTS) {
      if (unlockedIds.has(ach.id)) continue;

      let earned = false;
      switch (ach.requirement.type) {
        case "lessons_completed":
          earned = lessonsCompleted >= ach.requirement.count;
          break;
        case "chat_messages":
          earned = chatMessages >= ach.requirement.count;
          break;
        case "flashcards_reviewed":
          earned = flashcardsReviewed >= ach.requirement.count;
          break;
        case "flashcards_mastered":
          earned = flashcardsMastered >= ach.requirement.count;
          break;
        case "streak_days":
          earned = streak >= ach.requirement.count;
          break;
        case "perfect_session":
          earned = false;
          break;
      }

      if (earned) {
        const ua = await prisma.userAchievement.create({
          data: { userId, achievementId: ach.id },
          include: { achievement: true },
        });
        newlyUnlocked.push(ua.achievement);
      }
    }

    return res.status(200).json({ newlyUnlocked });
  } catch (error) {
    console.error("Achievement check error:", error);
    return res.status(500).json({ message: "Failed to check achievements" });
  }
}