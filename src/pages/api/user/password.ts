import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { compare, hash } from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.id) return res.status(401).json({ message: "Unauthorized" });

  if (req.method === "POST") {
    try {
      const { currentPassword, newPassword } = req.body;
      if (!currentPassword || !newPassword || newPassword.length < 8) {
        return res.status(400).json({ message: "Invalid input" });
      }

      const user = await prisma.user.findUnique({ where: { id: session.user.id } });
      if (!user?.password) return res.status(400).json({ message: "No password set" });

      const valid = await compare(currentPassword, user.password);
      if (!valid) return res.status(400).json({ message: "Current password is incorrect" });

      const hashed = await hash(newPassword, 12);
      await prisma.user.update({ where: { id: session.user.id }, data: { password: hashed } });
      return res.status(200).json({ message: "Password changed" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to change password" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}