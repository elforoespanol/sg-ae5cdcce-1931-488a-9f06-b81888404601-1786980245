import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { id } = req.query;

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(503).json({ message: "Database not available" });
  }

  try {
    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("email", session.user.email)
      .single();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.method === "POST") {
      const { isCompleted, timeSpentMinutes, quizScore } = req.body;

      const { data: existing } = await supabase
        .from("user_lesson_progress")
        .select("*")
        .eq("userId", user.id)
        .eq("lessonId", id as string)
        .single();

      let progress;
      if (existing) {
        const { data: updated } = await supabase
          .from("user_lesson_progress")
          .update({
            isCompleted: isCompleted ?? existing.isCompleted,
            timeSpentMinutes: (existing.timeSpentMinutes || 0) + (timeSpentMinutes || 0),
            quizScore: quizScore ?? existing.quizScore,
            completedAt: isCompleted ? new Date().toISOString() : existing.completedAt,
            lastAccessedAt: new Date().toISOString(),
          })
          .eq("id", existing.id)
          .select()
          .single();
        progress = updated;
      } else {
        const { data: created } = await supabase
          .from("user_lesson_progress")
          .insert({
            userId: user.id,
            lessonId: id as string,
            isCompleted: isCompleted ?? false,
            timeSpentMinutes: timeSpentMinutes ?? 0,
            quizScore: quizScore ?? null,
            completedAt: isCompleted ? new Date().toISOString() : null,
            lastAccessedAt: new Date().toISOString(),
          })
          .select()
          .single();
        progress = created;
      }

      if (isCompleted && timeSpentMinutes) {
        await supabase.rpc("increment_study_minutes", {
          user_id: user.id,
          minutes: timeSpentMinutes,
        });
      }

      return res.status(200).json(progress);
    }

    if (req.method === "GET") {
      const { data: progress } = await supabase
        .from("user_lesson_progress")
        .select("*")
        .eq("userId", user.id)
        .eq("lessonId", id as string)
        .single();

      return res.status(200).json(progress || null);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Error updating progress:", error);
    return res.status(500).json({ message: "Failed to update progress" });
  }
}