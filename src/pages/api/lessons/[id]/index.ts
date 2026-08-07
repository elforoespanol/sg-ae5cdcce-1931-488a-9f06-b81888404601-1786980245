import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { id } = req.query;

    const lesson = await prisma.lesson.findUnique({
      where: { id: id as string },
      include: {
        userProgress: {
          select: {
            isCompleted: true,
            timeSpentMinutes: true,
            lastAccessedAt: true,
            quizScore: true,
          },
        },
      },
    });

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    return res.status(200).json(lesson);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return res.status(500).json({ message: "Failed to fetch lesson" });
  }
}