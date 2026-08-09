import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session?.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { sessionId } = req.query;

  if (!sessionId || typeof sessionId !== "string") {
    return res.status(400).json({ message: "Session ID is required" });
  }

  try {
    // Verify session belongs to user
    const chatSession = await prisma.chatSession.findFirst({
      where: { id: sessionId, userId: session.user.id },
    });

    if (!chatSession) {
      return res.status(404).json({ message: "Session not found" });
    }

    const messages = await prisma.chatMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        role: true,
        content: true,
        hasCorrection: true,
        originalText: true,
        correctedText: true,
        explanation: true,
        createdAt: true,
      },
    });

    return res.status(200).json({ messages });
  } catch (error) {
    console.error("Fetch messages error:", error);
    return res.status(500).json({ message: "Failed to fetch messages" });
  }
}