import { NextApiRequest, NextApiResponse } from "next";
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
  if (!supabase) {
    // Demo lesson fallback
    const demoLessons: Record<string, any> = {
      "demo-1": {
        id: "demo-1",
        title: "Greetings & Introductions",
        slug: "greetings-introductions",
        description: "Learn how to greet people and introduce yourself in Spanish.",
        content: "¡Hola! Welcome to your first Spanish lesson...",
        difficulty: "BEGINNER",
        level: "A1",
        order: 1,
        imageUrl: null,
        durationMinutes: 15,
        isPublished: true,
        vocabulary: [
          { word: "Hola", translation: "Hello", example: "¡Hola! ¿Cómo estás?" },
          { word: "Adiós", translation: "Goodbye", example: "Adiós, nos vemos mañana." },
          { word: "Gracias", translation: "Thank you", example: "Gracias por tu ayuda." },
        ],
        userProgress: [],
      },
      "demo-2": {
        id: "demo-2",
        title: "Ordering at a Restaurant",
        slug: "ordering-restaurant",
        description: "Master the essential phrases for dining out.",
        content: "In this lesson, you will learn how to order food and drinks...",
        difficulty: "BEGINNER",
        level: "A1",
        order: 2,
        imageUrl: null,
        durationMinutes: 20,
        isPublished: true,
        vocabulary: [
          { word: "La cuenta", translation: "The bill", example: "La cuenta, por favor." },
          { word: "Delicioso", translation: "Delicious", example: "Está muy delicioso." },
        ],
        userProgress: [],
      },
    };
    return res.status(200).json(demoLessons[id] || demoLessons["demo-1"]);
  }

  try {
    const { data: lesson, error } = await supabase
      .from("lessons")
      .select("*, userProgress:user_lesson_progress(isCompleted, timeSpentMinutes, lastAccessedAt, quizScore)")
      .eq("id", id)
      .single();

    if (error || !lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    return res.status(200).json(lesson);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return res.status(500).json({ message: "Failed to fetch lesson" });
  }
}