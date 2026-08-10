import { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return res.status(200).json({ students: [] });
    }

    const { data: students, error } = await supabase
      .from("users")
      .select("id, name, email, level, streak, lastActiveDate, totalStudyMinutes, createdAt, subscription_type")
      .eq("role", "STUDENT")
      .order("createdAt", { ascending: false });

    if (error) throw error;

    res.status(200).json({ students: students || [] });
  } catch (error) {
    console.error("Students list error:", error);
    res.status(200).json({ students: [] });
  }
}