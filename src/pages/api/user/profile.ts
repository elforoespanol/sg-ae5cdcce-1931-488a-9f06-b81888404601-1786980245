import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.id) return res.status(401).json({ message: "Unauthorized" });

  if (req.method === "GET") {
    try {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { id: true, name: true, email: true, level: true, image: true, dailyGoal: true, preferredAccent: true, emailReminders: true, streakWarnings: true, streak: true, totalStudyMinutes: true, createdAt: true },
      });
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch profile" });
    }
  }

  if (req.method === "PATCH") {
    try {
      const { name, level, dailyGoal, preferredAccent, emailReminders, streakWarnings } = req.body;
      const updated = await prisma.user.update({
        where: { id: session.user.id },
        data: { name, level, dailyGoal, preferredAccent, emailReminders, streakWarnings, updatedAt: new Date() },
      });
      return res.status(200).json({ user: updated });
    } catch (error) {
      return res.status(500).json({ message: "Failed to update profile" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}