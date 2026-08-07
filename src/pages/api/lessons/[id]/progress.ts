import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { id } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.method === "POST") {
      const { isCompleted, timeSpentMinutes, quizScore } = req.body;

      const progress = await prisma.userLessonProgress.upsert({
        where: {
          userId_lessonId: {
            userId: user.id,
            lessonId: id as string,
          },
        },
        update: {
          isCompleted: isCompleted ?? undefined,
          timeSpentMinutes: timeSpentMinutes
            ? { increment: timeSpentMinutes }
            : undefined,
          quizScore: quizScore ?? undefined,
          completedAt: isCompleted ? new Date() : undefined,
          lastAccessedAt: new Date(),
        },
        create: {
          userId: user.id,
          lessonId: id as string,
          isCompleted: isCompleted ?? false,
          timeSpentMinutes: timeSpentMinutes ?? 0,
          quizScore: quizScore ?? null,
          completedAt: isCompleted ? new Date() : null,
        },
      });

      if (isCompleted) {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            totalStudyMinutes: { increment: timeSpentMinutes ?? 0 },
          },
        });
      }

      return res.status(200).json(progress);
    }

    if (req.method === "GET") {
      const progress = await prisma.userLessonProgress.findUnique({
        where: {
          userId_lessonId: {
            userId: user.id,
            lessonId: id as string,
          },
        },
      });

      return res.status(200).json(progress);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Error updating progress:", error);
    return res.status(500).json({ message: "Failed to update progress" });
  }
}