import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const session = await getSession({ req });

    if (!session?.user || session.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { data: students, error } = await supabaseAdmin
      .from("users")
      .select("id, name, email, level, role, streak, lastActiveDate, totalStudyMinutes, createdAt, updatedAt, subscription_type")
      .eq("role", "STUDENT")
      .order("createdAt", { ascending: false });

    if (error) throw error;

    res.status(200).json({ students: students || [] });
  } catch (error) {
    console.error("Admin students error:", error);
    res.status(500).json({ message: "Failed to fetch students" });
  }
}