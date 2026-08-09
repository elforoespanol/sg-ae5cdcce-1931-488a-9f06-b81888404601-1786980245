import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return res.status(500).json({
        message: "Missing Supabase environment variables",
        details: { hasUrl: !!supabaseUrl, hasServiceKey: !!serviceRoleKey },
      });
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Check tables exist
    const { error: healthError } = await supabaseAdmin
      .from("users")
      .select("count", { count: "exact", head: true });

    if (healthError && healthError.code === "42P01") {
      return res.status(500).json({
        message: "Database tables not found. Schema not pushed yet.",
        error: healthError.message,
      });
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("Admin123!", 12);

    const { data: existingAdmin } = await supabaseAdmin
      .from("users")
      .select("id")
      .eq("email", "admin@sslid.com")
      .maybeSingle();

    let adminId = existingAdmin?.id;

    if (!adminId) {
      const { data: newAdmin, error: createError } = await supabaseAdmin
        .from("users")
        .insert({
          email: "admin@sslid.com",
          name: "Admin",
          password: hashedPassword,
          level: "C2",
          role: "ADMIN",
          streak: 0,
          totalStudyMinutes: 0,
          dailyGoal: 20,
          preferredAccent: "Spain",
        })
        .select("id")
        .single();

      if (createError) {
        return res.status(500).json({
          message: "Failed to create admin user",
          error: createError.message,
          details: createError,
        });
      }
      adminId = newAdmin!.id;
    }

    // Seed achievements
    const achievements = [
      { name: "¡Primera Lección!", description: "Complete your first lesson", iconName: "BookOpen", category: "lessons", requirementJson: { type: "lessons_completed", count: 1 } },
      { name: "Estudiante Dedicado", description: "Complete 10 lessons", iconName: "GraduationCap", category: "lessons", requirementJson: { type: "lessons_completed", count: 10 } },
      { name: "¡Hola!", description: "Have your first AI conversation", iconName: "MessageCircle", category: "chat", requirementJson: { type: "chat_messages", count: 1 } },
      { name: "Maestro de Tarjetas", description: "Review 50 flashcards", iconName: "Layers", category: "flashcards", requirementJson: { type: "flashcards_reviewed", count: 50 } },
      { name: "Racha de Fuego", description: "Study 7 days in a row", iconName: "Flame", category: "streak", requirementJson: { type: "streak_days", count: 7 } },
      { name: "Dedicación Legendaria", description: "Study 30 days in a row", iconName: "Trophy", category: "streak", requirementJson: { type: "streak_days", count: 30 } },
      { name: "Sabio Español", description: "Master 100 flashcards", iconName: "Brain", category: "flashcards", requirementJson: { type: "flashcards_mastered", count: 100 } },
      { name: "¡Perfecto!", description: "Get all flashcards correct in a session", iconName: "Star", category: "special", requirementJson: { type: "perfect_session", count: 1 } },
    ];

    const { count: achCount } = await supabaseAdmin
      .from("achievements")
      .select("*", { count: "exact", head: true });

    if (!achCount || achCount === 0) {
      const { error: achError } = await supabaseAdmin
        .from("achievements")
        .insert(achievements);
      if (achError) {
        return res.status(500).json({
          message: "Failed to seed achievements",
          error: achError.message,
          details: achError,
        });
      }
    }

    // Seed lessons
    const lessons = [
      { title: "Greetings and Introductions", description: "Learn how to greet people and introduce yourself in Spanish", level: "A1", slug: "greetings-and-introductions", difficulty: "BEGINNER", order: 1, durationMinutes: 15, content: "Practice basic greetings like hola, buenos días, and introduce yourself.", vocabularyJson: [{ spanish: "hola", english: "hello" }, { spanish: "adiós", english: "goodbye" }], grammarJson: [{ topic: "Formal vs Informal", explanation: "Use tú for friends, usted for strangers." }] },
      { title: "Numbers 1-100", description: "Master counting in Spanish from one to one hundred", level: "A1", slug: "numbers-1-100", difficulty: "BEGINNER", order: 2, durationMinutes: 15, content: "Learn to count from uno to cien.", vocabularyJson: [{ spanish: "uno", english: "one" }, { spanish: "cien", english: "one hundred" }], grammarJson: [{ topic: "Number Agreement", explanation: "Uno becomes un or una before nouns." }] },
      { title: "Colors and Descriptions", description: "Describe the world around you with colors and adjectives", level: "A1", slug: "colors-and-descriptions", difficulty: "BEGINNER", order: 3, durationMinutes: 15, content: "Learn colors and how adjectives agree with nouns.", vocabularyJson: [{ spanish: "rojo", english: "red" }, { spanish: "azul", english: "blue" }], grammarJson: [{ topic: "Adjective Agreement", explanation: "Adjectives must match gender and number." }] },
      { title: "Family Members", description: "Talk about your family in Spanish", level: "A1", slug: "family-members", difficulty: "BEGINNER", order: 4, durationMinutes: 15, content: "Learn vocabulary for family relationships.", vocabularyJson: [{ spanish: "madre", english: "mother" }, { spanish: "padre", english: "father" }], grammarJson: [{ topic: "Possessive Adjectives", explanation: "mi, tu, su indicate possession." }] },
      { title: "Daily Routines", description: "Describe your daily activities in Spanish", level: "A1", slug: "daily-routines", difficulty: "BEGINNER", order: 5, durationMinutes: 15, content: "Talk about what you do every day.", vocabularyJson: [{ spanish: "despertar", english: "to wake up" }, { spanish: "dormir", english: "to sleep" }], grammarJson: [{ topic: "Reflexive Verbs", explanation: "Use se for actions done to oneself." }] },
      { title: "Food and Restaurants", description: "Order food and talk about meals in Spanish", level: "A2", slug: "food-and-restaurants", difficulty: "BEGINNER", order: 6, durationMinutes: 20, content: "Learn to order food and talk about meals.", vocabularyJson: [{ spanish: "restaurante", english: "restaurant" }, { spanish: "cuenta", english: "bill" }], grammarJson: [{ topic: "Ordering Food", explanation: "Use quisiera for polite requests." }] },
      { title: "Directions and Places", description: "Ask for and give directions in Spanish", level: "A2", slug: "directions-and-places", difficulty: "ELEMENTARY", order: 7, durationMinutes: 20, content: "Learn to ask for and give directions.", vocabularyJson: [{ spanish: "izquierda", english: "left" }, { spanish: "derecha", english: "right" }], grammarJson: [{ topic: "Imperatives", explanation: "Use command forms for directions." }] },
      { title: "Shopping and Clothes", description: "Navigate shopping and describe clothing", level: "A2", slug: "shopping-and-clothes", difficulty: "ELEMENTARY", order: 8, durationMinutes: 20, content: "Learn shopping vocabulary and phrases.", vocabularyJson: [{ spanish: "tienda", english: "store" }, { spanish: "camisa", english: "shirt" }], grammarJson: [{ topic: "Demonstratives", explanation: "este, ese, aquel for this, that, that over there." }] },
      { title: "Weather and Seasons", description: "Talk about weather and seasons in Spanish", level: "A2", slug: "weather-and-seasons", difficulty: "ELEMENTARY", order: 9, durationMinutes: 20, content: "Learn weather expressions and seasons.", vocabularyJson: [{ spanish: "sol", english: "sun" }, { spanish: "lluvia", english: "rain" }], grammarJson: [{ topic: "Weather Expressions", explanation: "Use hace for weather conditions." }] },
      { title: "Hobbies and Free Time", description: "Talk about what you do in your free time", level: "A2", slug: "hobbies-and-free-time", difficulty: "ELEMENTARY", order: 10, durationMinutes: 20, content: "Express likes and hobbies.", vocabularyJson: [{ spanish: "música", english: "music" }, { spanish: "deporte", english: "sport" }], grammarJson: [{ topic: "Gustar", explanation: "Use me gusta for singular, me gustan for plural." }] },
      { title: "Past Tense (Preterite)", description: "Talk about completed past actions", level: "B1", slug: "past-tense-preterite", difficulty: "INTERMEDIATE", order: 11, durationMinutes: 25, content: "Learn the preterite tense for completed actions.", vocabularyJson: [{ spanish: "ayer", english: "yesterday" }, { spanish: "anteayer", english: "day before yesterday" }], grammarJson: [{ topic: "Preterite Regular Verbs", explanation: "AR: -é, -aste, -ó, -amos. ER/IR: -í, -iste, -ió, -imos." }] },
      { title: "Past Tense (Imperfect)", description: "Describe ongoing past situations and habits", level: "B1", slug: "past-tense-imperfect", difficulty: "INTERMEDIATE", order: 12, durationMinutes: 25, content: "Learn the imperfect for habitual past actions.", vocabularyJson: [{ spanish: "siempre", english: "always" }, { spanish: "nunca", english: "never" }], grammarJson: [{ topic: "Imperfect vs Preterite", explanation: "Imperfect for ongoing/habitual; preterite for completed." }] },
      { title: "Future Plans", description: "Talk about future events and intentions", level: "B1", slug: "future-plans", difficulty: "INTERMEDIATE", order: 13, durationMinutes: 25, content: "Express future plans using ir a + infinitive.", vocabularyJson: [{ spanish: "mañana", english: "tomorrow" }, { spanish: "pronto", english: "soon" }], grammarJson: [{ topic: "Ir a + Infinitive", explanation: "Use ir a + verb for near future plans." }] },
      { title: "Giving Opinions", description: "Express opinions and preferences in Spanish", level: "B1", slug: "giving-opinions", difficulty: "INTERMEDIATE", order: 14, durationMinutes: 25, content: "Learn to agree, disagree, and give opinions.", vocabularyJson: [{ spanish: "opinión", english: "opinion" }, { spanish: "acuerdo", english: "agreement" }], grammarJson: [{ topic: "Expressing Opinions", explanation: "Use creo que, pienso que, me parece que." }] },
      { title: "Making Comparisons", description: "Compare people, places, and things in Spanish", level: "B1", slug: "making-comparisons", difficulty: "INTERMEDIATE", order: 15, durationMinutes: 25, content: "Learn comparatives and superlatives.", vocabularyJson: [{ spanish: "más", english: "more" }, { spanish: "menos", english: "less" }], grammarJson: [{ topic: "Comparatives", explanation: "más/menos + adjective + que." }] },
      { title: "Subjunctive Mood Introduction", description: "Express wishes, doubts, and possibilities", level: "B2", slug: "subjunctive-mood-introduction", difficulty: "UPPER_INTERMEDIATE", order: 16, durationMinutes: 30, content: "Introduction to the subjunctive mood.", vocabularyJson: [{ spanish: "ojalá", english: "hopefully" }, { spanish: "quizás", english: "perhaps" }], grammarJson: [{ topic: "Present Subjunctive", explanation: "Used after expressions of doubt, desire, or emotion." }] },
      { title: "Conditional Tense", description: "Talk about hypothetical situations", level: "B2", slug: "conditional-tense", difficulty: "UPPER_INTERMEDIATE", order: 17, durationMinutes: 30, content: "Learn the conditional for hypothetical situations.", vocabularyJson: [{ spanish: "si", english: "if" }, { spanish: "haría", english: "I would do" }], grammarJson: [{ topic: "Conditional Tense", explanation: "Add -ía, -ías, -ía to the infinitive." }] },
      { title: "Complex Sentence Structures", description: "Build complex and compound sentences", level: "B2", slug: "complex-sentence-structures", difficulty: "UPPER_INTERMEDIATE", order: 18, durationMinutes: 30, content: "Learn advanced connectors and sentence structures.", vocabularyJson: [{ spanish: "aunque", english: "although" }, { spanish: "sin embargo", english: "however" }], grammarJson: [{ topic: "Connecting Ideas", explanation: "Use conjunctions to link complex thoughts." }] },
      { title: "Business Spanish", description: "Professional communication in Spanish", level: "B2", slug: "business-spanish", difficulty: "UPPER_INTERMEDIATE", order: 19, durationMinutes: 30, content: "Learn formal business communication.", vocabularyJson: [{ spanish: "reunión", english: "meeting" }, { spanish: "contrato", english: "contract" }], grammarJson: [{ topic: "Formal Email Structure", explanation: "Use formal register with usted and formal expressions." }] },
      { title: "Cultural Topics: Spain", description: "Explore Spanish culture, history, and traditions", level: "B2", slug: "cultural-topics-spain", difficulty: "UPPER_INTERMEDIATE", order: 20, durationMinutes: 30, content: "Learn about Spanish festivals, gastronomy, and history.", vocabularyJson: [{ spanish: "fiesta", english: "festival" }, { spanish: "tradición", english: "tradition" }], grammarJson: [{ topic: "Passive Voice with Se", explanation: "Use se + third person verb for passive constructions." }] },
      { title: "Advanced Subjunctive", description: "Master complex subjunctive constructions", level: "C1", slug: "advanced-subjunctive", difficulty: "ADVANCED", order: 21, durationMinutes: 35, content: "Master advanced subjunctive triggers.", vocabularyJson: [{ spanish: "aun cuando", english: "even when" }, { spanish: "con tal de que", english: "provided that" }], grammarJson: [{ topic: "Advanced Subjunctive Triggers", explanation: "Conjunctions that always require subjunctive." }] },
      { title: "Literary Analysis Vocabulary", description: "Discuss literature with academic vocabulary", level: "C1", slug: "literary-analysis-vocabulary", difficulty: "ADVANCED", order: 22, durationMinutes: 35, content: "Learn vocabulary for literary analysis.", vocabularyJson: [{ spanish: "metáfora", english: "metaphor" }, { spanish: "símbolo", english: "symbol" }], grammarJson: [{ topic: "Academic Register", explanation: "Use formal vocabulary and complex structures." }] },
      { title: "Debate and Argumentation", description: "Participate in formal debates and discussions", level: "C1", slug: "debate-and-argumentation", difficulty: "ADVANCED", order: 23, durationMinutes: 35, content: "Learn formal debate expressions.", vocabularyJson: [{ spanish: "argumento", english: "argument" }, { spanish: "evidencia", english: "evidence" }], grammarJson: [{ topic: "Debate Expressions", explanation: "Formal phrases for academic discussion." }] },
      { title: "Professional Writing", description: "Write formal reports, essays, and correspondence", level: "C1", slug: "professional-writing", difficulty: "ADVANCED", order: 24, durationMinutes: 35, content: "Learn professional and academic writing.", vocabularyJson: [{ spanish: "informe", english: "report" }, { spanish: "ensayo", english: "essay" }], grammarJson: [{ topic: "Formal Connectors", explanation: "Advanced connectors for professional writing." }] },
      { title: "Cultural Topics: Latin America", description: "Explore the diversity of Latin American cultures", level: "C1", slug: "cultural-topics-latin-america", difficulty: "ADVANCED", order: 25, durationMinutes: 35, content: "Learn about Latin American cultural diversity.", vocabularyJson: [{ spanish: "diversidad", english: "diversity" }, { spanish: "identidad", english: "identity" }], grammarJson: [{ topic: "Cultural Expressions", explanation: "Discuss cultural topics with nuanced vocabulary." }] },
      { title: "Nuanced Expression", description: "Express subtle meanings and shades of opinion", level: "C2", slug: "nuanced-expression", difficulty: "MASTERY", order: 26, durationMinutes: 40, content: "Master hedging and softening in Spanish.", vocabularyJson: [{ spanish: "matiz", english: "nuance" }, { spanish: "sutil", english: "subtle" }], grammarJson: [{ topic: "Nuanced Language", explanation: "Use hedging for diplomatic communication." }] },
      { title: "Academic Spanish", description: "Write and present at university level", level: "C2", slug: "academic-spanish", difficulty: "MASTERY", order: 27, durationMinutes: 40, content: "Learn impersonal constructions and nominalization.", vocabularyJson: [{ spanish: "hipótesis", english: "hypothesis" }, { spanish: "metodología", english: "methodology" }], grammarJson: [{ topic: "Academic Register", explanation: "Use impersonal constructions and nominalization." }] },
      { title: "Poetry and Literature", description: "Analyze and appreciate Spanish poetry", level: "C2", slug: "poetry-and-literature", difficulty: "MASTERY", order: 28, durationMinutes: 40, content: "Learn to analyze Spanish poetry.", vocabularyJson: [{ spanish: "verso", english: "verse" }, { spanish: "estrofa", english: "stanza" }], grammarJson: [{ topic: "Poetic Language", explanation: "Understand archaic and poetic forms." }] },
      { title: "Historical Texts", description: "Read and analyze historical documents", level: "C2", slug: "historical-texts", difficulty: "MASTERY", order: 29, durationMinutes: 40, content: "Learn to read historical Spanish texts.", vocabularyJson: [{ spanish: "crónica", english: "chronicle" }, { spanish: "manuscrito", english: "manuscript" }], grammarJson: [{ topic: "Historical Grammar", explanation: "Recognize older grammatical forms." }] },
      { title: "Regional Dialects and Variations", description: "Understand Spanish dialectal diversity", level: "C2", slug: "regional-dialects-and-variations", difficulty: "MASTERY", order: 30, durationMinutes: 40, content: "Learn about regional dialects and voseo.", vocabularyJson: [{ spanish: "dialecto", english: "dialect" }, { spanish: "voseo", english: "voseo" }], grammarJson: [{ topic: "Voseo and Regional Forms", explanation: "Use of vos instead of tú in parts of Latin America." }] },
    ];

    let createdCount = 0;
    const errors: string[] = [];

    for (const lesson of lessons) {
      const { data: existing } = await supabaseAdmin
        .from("lessons")
        .select("id")
        .eq("title", lesson.title)
        .maybeSingle();

      if (!existing) {
        const { error } = await supabaseAdmin.from("lessons").insert(lesson);
        if (error) {
          errors.push(`${lesson.title}: ${error.message}`);
        } else {
          createdCount++;
        }
      }
    }

    // Get counts
    const { count: totalLessons } = await supabaseAdmin
      .from("lessons")
      .select("*", { count: "exact", head: true });

    const { count: totalAchievements } = await supabaseAdmin
      .from("achievements")
      .select("*", { count: "exact", head: true });

    res.status(200).json({
      message: "Seed completed successfully!",
      admin: "admin@sslid.com",
      lessonsCreated: createdCount,
      totalLessons,
      totalAchievements,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error("Seed error:", error);
    res.status(500).json({
      message: "Seed failed",
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}