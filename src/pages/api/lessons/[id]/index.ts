import { NextApiRequest, NextApiResponse } from "next";
import { LESSONS_DATA } from "@/lib/lessons-data";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Lesson ID required" });
  }

  const supabase = getSupabaseAdmin();

  // Find real lesson data by slug or ID
  const realLesson = LESSONS_DATA.find((l) => l.id === id || l.slug === id);

  if (!supabase) {
    // No Supabase — return from real data or 404
    if (realLesson) {
      return res.status(200).json({
        ...realLesson,
        userProgress: [],
      });
    }
    return res.status(404).json({ message: "Lesson not found" });
  }

  try {
    const { data: lesson, error } = await supabase
      .from("lessons")
      .select("*, userProgress:user_lesson_progress(isCompleted, timeSpentMinutes, lastAccessedAt, quizScore)")
      .eq("id", id)
      .single();

    if (error || !lesson) {
      // Try to find by slug if ID lookup failed
      const { data: lessonBySlug } = await supabase
        .from("lessons")
        .select("*, userProgress:user_lesson_progress(isCompleted, timeSpentMinutes, lastAccessedAt, quizScore)")
        .eq("slug", id)
        .single();

      if (lessonBySlug) {
        // Enrich with real content if database has placeholders
        const enriched = enrichLesson(lessonBySlug, realLesson);
        return res.status(200).json(enriched);
      }

      // Return real data if available, else 404
      if (realLesson) {
        return res.status(200).json({
          ...realLesson,
          userProgress: [],
        });
      }
      return res.status(404).json({ message: "Lesson not found" });
    }

    // Enrich with real content if database has placeholders
    const enriched = enrichLesson(lesson, realLesson);
    return res.status(200).json(enriched);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    if (realLesson) {
      return res.status(200).json({
        ...realLesson,
        userProgress: [],
      });
    }
    return res.status(500).json({ message: "Failed to fetch lesson" });
  }
}

function enrichLesson(dbLesson: any, realLesson: any) {
  if (!realLesson) return dbLesson;

  const isPlaceholder =
    !dbLesson.content ||
    dbLesson.content === "Lesson content here..." ||
    dbLesson.content.length < 50;

  return {
    ...dbLesson,
    title: dbLesson.title || realLesson.title,
    description: dbLesson.description || realLesson.description,
    content: isPlaceholder ? realLesson.content : dbLesson.content,
    vocabularyJson: dbLesson.vocabularyJson || realLesson.vocabularyJson,
    grammarJson: dbLesson.grammarJson || realLesson.grammarJson,
    exercisesJson: dbLesson.exercisesJson || realLesson.exercisesJson,
    level: dbLesson.level || realLesson.level,
    durationMinutes: dbLesson.durationMinutes || realLesson.durationMinutes,
    isPublished: dbLesson.isPublished ?? true,
  };
}