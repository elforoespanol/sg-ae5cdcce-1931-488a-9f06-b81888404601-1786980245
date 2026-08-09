import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({
      message: "Missing Supabase credentials. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment.",
    });
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    const passwordHash = "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";

    const { error: userError } = await adminClient.from("users").upsert(
      {
        id: "admin-seed-001",
        email: "admin@sslid.com",
        name: "Admin User",
        password: passwordHash,
        role: "ADMIN",
        level: "A1",
        streak: 0,
        totalStudyMinutes: 0,
        dailyGoal: 20,
        preferredAccent: "Spain",
        emailReminders: true,
        streakWarnings: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      { onConflict: "email" }
    );

    if (userError) {
      return res.status(500).json({
        message: "Failed to create admin user",
        details: userError,
      });
    }

    const lessons = [
      { title: "Greetings & Introductions", slug: "greetings-introductions", description: "Learn how to greet people and introduce yourself in Spanish. Essential phrases for meeting new people.", content: "Lesson content...", difficulty: "BEGINNER", level: "A1", order: 1 },
      { title: "Numbers & Counting", slug: "numbers-counting", description: "Master numbers from 0 to 100 in Spanish. Practice counting, prices, and telling time.", content: "Lesson content...", difficulty: "BEGINNER", level: "A1", order: 2 },
      { title: "Colors & Descriptions", slug: "colors-descriptions", description: "Learn colors and basic descriptive adjectives to talk about objects and people.", content: "Lesson content...", difficulty: "BEGINNER", level: "A1", order: 3 },
      { title: "Family Members", slug: "family-members", description: "Talk about your family tree using possessive adjectives and family vocabulary.", content: "Lesson content...", difficulty: "BEGINNER", level: "A1", order: 4 },
      { title: "Daily Routines", slug: "daily-routines", description: "Describe your daily schedule using reflexive verbs and time expressions.", content: "Lesson content...", difficulty: "BEGINNER", level: "A1", order: 5 },
      { title: "Food & Dining", slug: "food-dining", description: "Order food at restaurants and talk about meals using stem-changing verbs.", content: "Lesson content...", difficulty: "BEGINNER", level: "A1", order: 6 },
      { title: "Directions & Locations", slug: "directions-locations", description: "Ask for and give directions using estar and prepositions of place.", content: "Lesson content...", difficulty: "ELEMENTARY", level: "A2", order: 7 },
      { title: "Shopping & Money", slug: "shopping-money", description: "Handle shopping situations and talk about prices using demonstratives.", content: "Lesson content...", difficulty: "ELEMENTARY", level: "A2", order: 8 },
      { title: "Weather & Seasons", slug: "weather-seasons", description: "Discuss weather and make plans using the near future tense (ir a + infinitive).", content: "Lesson content...", difficulty: "ELEMENTARY", level: "A2", order: 9 },
      { title: "Hobbies & Free Time", slug: "hobbies-free-time", description: "Talk about hobbies using gustar and similar verbs. Compare activities with others.", content: "Lesson content...", difficulty: "ELEMENTARY", level: "A2", order: 10 },
      { title: "Past Experiences", slug: "past-experiences", description: "Narrate past events using the preterite tense. Talk about vacations and life experiences.", content: "Lesson content...", difficulty: "INTERMEDIATE", level: "B1", order: 11 },
      { title: "Future Plans", slug: "future-plans", description: "Discuss future plans using the simple future tense. Make predictions and set goals.", content: "Lesson content...", difficulty: "INTERMEDIATE", level: "B1", order: 12 },
      { title: "Hypothetical Situations", slug: "hypothetical-situations", description: "Express wishes and hypothetical scenarios using the subjunctive mood.", content: "Lesson content...", difficulty: "INTERMEDIATE", level: "B1", order: 13 },
      { title: "Work & Career", slug: "work-career", description: "Discuss professional life using formal register. Practice job interviews and workplace communication.", content: "Lesson content...", difficulty: "INTERMEDIATE", level: "B1", order: 14 },
      { title: "Health & Wellness", slug: "health-wellness", description: "Talk about health, body parts, and medical situations using stem-changing verbs.", content: "Lesson content...", difficulty: "INTERMEDIATE", level: "B1", order: 15 },
      { title: "Complex Narratives", slug: "complex-narratives", description: "Master the contrast between preterite and imperfect for rich storytelling.", content: "Lesson content...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 16 },
      { title: "Opinions & Debates", slug: "opinions-debates", description: "Express and defend opinions using advanced connectors and conditional sentences.", content: "Lesson content...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 17 },
      { title: "Cultural Immersion", slug: "cultural-immersion", description: "Explore Spanish-speaking cultures, traditions, and regional variations in language.", content: "Lesson content...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 18 },
      { title: "Technical Spanish", slug: "technical-spanish", description: "Learn vocabulary for technology, science, and professional fields in Spanish.", content: "Lesson content...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 19 },
      { title: "Advanced Grammar", slug: "advanced-grammar", description: "Master complex grammatical structures including compound tenses and advanced subjunctive.", content: "Lesson content...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 20 },
    ];

    let createdCount = 0;
    for (const lesson of lessons) {
      const { error } = await adminClient.from("lessons").upsert(
        { ...lesson, isPublished: true, durationMinutes: 15, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        { onConflict: "slug" }
      );
      if (!error) createdCount++;
    }

    const achievements = [
      { name: "First Steps", description: "Complete your first lesson", iconName: "Footprints", category: "lessons", requirementJson: { type: "lessons_completed", count: 1 } },
      { name: "Streak Starter", description: "Maintain a 3-day study streak", iconName: "Flame", category: "streak", requirementJson: { type: "streak_days", count: 3 } },
      { name: "Chat Beginner", description: "Send 10 messages to the AI tutor", iconName: "MessageCircle", category: "chat", requirementJson: { type: "messages_sent", count: 10 } },
      { name: "Flashcard Apprentice", description: "Review 50 flashcards", iconName: "Brain", category: "flashcards", requirementJson: { type: "flashcards_reviewed", count: 50 } },
      { name: "Level Up", description: "Complete all A1 lessons", iconName: "TrendingUp", category: "lessons", requirementJson: { type: "level_completed", level: "A1" } },
      { name: "Polyglot in Training", description: "Complete 10 lessons", iconName: "BookOpen", category: "lessons", requirementJson: { type: "lessons_completed", count: 10 } },
      { name: "Dedicated Learner", description: "Maintain a 7-day study streak", iconName: "Calendar", category: "streak", requirementJson: { type: "streak_days", count: 7 } },
      { name: "Vocabulary Master", description: "Learn 100 words in flashcards", iconName: "Library", category: "flashcards", requirementJson: { type: "flashcards_mastered", count: 100 } },
    ];

    let achCount = 0;
    for (const ach of achievements) {
      const { error } = await adminClient.from("achievements").upsert(
        { ...ach, createdAt: new Date().toISOString() },
        { onConflict: "name" }
      );
      if (!error) achCount++;
    }

    return res.status(200).json({
      success: true,
      message: "Database seeded successfully!",
      admin: "admin@sslid.com",
      lessonsCreated: createdCount,
      totalLessons: lessons.length,
      totalAchievements: achCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Seed failed",
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}