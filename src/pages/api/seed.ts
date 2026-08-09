import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash("Admin123!", 12);

    const { data: existingAdmin, error: findError } = await supabaseAdmin
      .from("users")
      .select("id")
      .eq("email", "admin@sslid.com")
      .maybeSingle();

    if (findError) throw findError;

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
          total_study_minutes: 0,
          daily_goal: 20,
          preferred_accent: "Spain",
        })
        .select("id")
        .single();

      if (createError) throw createError;
      adminId = newAdmin!.id;
    }

    // Seed achievements
    const achievements = [
      { name: "¡Primera Lección!", description: "Complete your first lesson", icon_name: "BookOpen", category: "lessons", requirement_json: { type: "lessons_completed", count: 1 } },
      { name: "Estudiante Dedicado", description: "Complete 10 lessons", icon_name: "GraduationCap", category: "lessons", requirement_json: { type: "lessons_completed", count: 10 } },
      { name: "¡Hola!", description: "Have your first AI conversation", icon_name: "MessageCircle", category: "chat", requirement_json: { type: "chat_messages", count: 1 } },
      { name: "Maestro de Tarjetas", description: "Review 50 flashcards", icon_name: "Layers", category: "flashcards", requirement_json: { type: "flashcards_reviewed", count: 50 } },
      { name: "Racha de Fuego", description: "Study 7 days in a row", icon_name: "Flame", category: "streak", requirement_json: { type: "streak_days", count: 7 } },
      { name: "Dedicación Legendaria", description: "Study 30 days in a row", icon_name: "Trophy", category: "streak", requirement_json: { type: "streak_days", count: 30 } },
      { name: "Sabio Español", description: "Master 100 flashcards", icon_name: "Brain", category: "flashcards", requirement_json: { type: "flashcards_mastered", count: 100 } },
      { name: "¡Perfecto!", description: "Get all flashcards correct in a session", icon_name: "Star", category: "special", requirement_json: { type: "perfect_session", count: 1 } },
    ];

    const { count: achCount } = await supabaseAdmin
      .from("achievements")
      .select("*", { count: "exact", head: true });

    if (!achCount || achCount === 0) {
      for (const a of achievements) {
        await supabaseAdmin.from("achievements").insert(a);
      }
    }

    // Seed lessons
    const lessons = [
      { title: "Greetings and Introductions", description: "Learn how to greet people and introduce yourself in Spanish", level: "A1", slug: "greetings-and-introductions", difficulty: "BEGINNER", order: 1, duration_minutes: 15, content: "Practice basic greetings like hola, buenos días, and introduce yourself.", vocabulary_json: [{ spanish: "hola", english: "hello" }, { spanish: "adiós", english: "goodbye" }], grammar_json: [{ topic: "Formal vs Informal", explanation: "Use tú for friends, usted for strangers." }] },
      { title: "Numbers 1-100", description: "Master counting in Spanish from one to one hundred", level: "A1", slug: "numbers-1-100", difficulty: "BEGINNER", order: 2, duration_minutes: 15, content: "Learn to count from uno to cien.", vocabulary_json: [{ spanish: "uno", english: "one" }, { spanish: "cien", english: "one hundred" }], grammar_json: [{ topic: "Number Agreement", explanation: "Uno becomes un or una before nouns." }] },
      { title: "Colors and Descriptions", description: "Describe the world around you with colors and adjectives", level: "A1", slug: "colors-and-descriptions", difficulty: "BEGINNER", order: 3, duration_minutes: 15, content: "Learn colors and how adjectives agree with nouns.", vocabulary_json: [{ spanish: "rojo", english: "red" }, { spanish: "azul", english: "blue" }], grammar_json: [{ topic: "Adjective Agreement", explanation: "Adjectives must match gender and number." }] },
      { title: "Family Members", description: "Talk about your family in Spanish", level: "A1", slug: "family-members", difficulty: "BEGINNER", order: 4, duration_minutes: 15, content: "Learn vocabulary for family relationships.", vocabulary_json: [{ spanish: "madre", english: "mother" }, { spanish: "padre", english: "father" }], grammar_json: [{ topic: "Possessive Adjectives", explanation: "mi, tu, su indicate possession." }] },
      { title: "Daily Routines", description: "Describe your daily activities in Spanish", level: "A1", slug: "daily-routines", difficulty: "BEGINNER", order: 5, duration_minutes: 15, content: "Talk about what you do every day.", vocabulary_json: [{ spanish: "despertar", english: "to wake up" }, { spanish: "dormir", english: "to sleep" }], grammar_json: [{ topic: "Reflexive Verbs", explanation: "Use se for actions done to oneself." }] },
      { title: "Food and Restaurants", description: "Order food and talk about meals in Spanish", level: "A2", slug: "food-and-restaurants", difficulty: "BEGINNER", order: 6, duration_minutes: 20, content: "Learn to order food and talk about meals.", vocabulary_json: [{ spanish: "restaurante", english: "restaurant" }, { spanish: "cuenta", english: "bill" }], grammar_json: [{ topic: "Ordering Food", explanation: "Use quisiera for polite requests." }] },
      { title: "Directions and Places", description: "Ask for and give directions in Spanish", level: "A2", slug: "directions-and-places", difficulty: "ELEMENTARY", order: 7, duration_minutes: 20, content: "Learn to ask for and give directions.", vocabulary_json: [{ spanish: "izquierda", english: "left" }, { spanish: "derecha", english: "right" }], grammar_json: [{ topic: "Imperatives", explanation: "Use command forms for directions." }] },
      { title: "Shopping and Clothes", description: "Navigate shopping and describe clothing", level: "A2", slug: "shopping-and-clothes", difficulty: "ELEMENTARY", order: 8, duration_minutes: 20, content: "Learn shopping vocabulary and phrases.", vocabulary_json: [{ spanish: "tienda", english: "store" }, { spanish: "camisa", english: "shirt" }], grammar_json: [{ topic: "Demonstratives", explanation: "este, ese, aquel for this, that, that over there." }] },
      { title: "Weather and Seasons", description: "Talk about weather and seasons in Spanish", level: "A2", slug: "weather-and-seasons", difficulty: "ELEMENTARY", order: 9, duration_minutes: 20, content: "Learn weather expressions and seasons.", vocabulary_json: [{ spanish: "sol", english: "sun" }, { spanish: "lluvia", english: "rain" }], grammar_json: [{ topic: "Weather Expressions", explanation: "Use hace for weather conditions." }] },
      { title: "Hobbies and Free Time", description: "Talk about what you do in your free time", level: "A2", slug: "hobbies-and-free-time", difficulty: "ELEMENTARY", order: 10, duration_minutes: 20, content: "Express likes and hobbies.", vocabulary_json: [{ spanish: "música", english: "music" }, { spanish: "deporte", english: "sport" }], grammar_json: [{ topic: "Gustar", explanation: "Use me gusta for singular, me gustan for plural." }] },
      { title: "Past Tense (Preterite)", description: "Talk about completed past actions", level: "B1", slug: "past-tense-preterite", difficulty: "INTERMEDIATE", order: 11, duration_minutes: 25, content: "Learn the preterite tense for completed actions.", vocabulary_json: [{ spanish: "ayer", english: "yesterday" }, { spanish: "anteayer", english: "day before yesterday" }], grammar_json: [{ topic: "Preterite Regular Verbs", explanation: "AR: -é, -aste, -ó, -amos. ER/IR: -í, -iste, -ió, -imos." }] },
      { title: "Past Tense (Imperfect)", description: "Describe ongoing past situations and habits", level: "B1", slug: "past-tense-imperfect", difficulty: "INTERMEDIATE", order: 12, duration_minutes: 25, content: "Learn the imperfect for habitual past actions.", vocabulary_json: [{ spanish: "siempre", english: "always" }, { spanish: "nunca", english: "never" }], grammar_json: [{ topic: "Imperfect vs Preterite", explanation: "Imperfect for ongoing/habitual; preterite for completed." }] },
      { title: "Future Plans", description: "Talk about future events and intentions", level: "B1", slug: "future-plans", difficulty: "INTERMEDIATE", order: 13, duration_minutes: 25, content: "Express future plans using ir a + infinitive.", vocabulary_json: [{ spanish: "mañana", english: "tomorrow" }, { spanish: "pronto", english: "soon" }], grammar_json: [{ topic: "Ir a + Infinitive", explanation: "Use ir a + verb for near future plans." }] },
      { title: "Giving Opinions", description: "Express opinions and preferences in Spanish", level: "B1", slug: "giving-opinions", difficulty: "INTERMEDIATE", order: 14, duration_minutes: 25, content: "Learn to agree, disagree, and give opinions.", vocabulary_json: [{ spanish: "opinión", english: "opinion" }, { spanish: "acuerdo", english: "agreement" }], grammar_json: [{ topic: "Expressing Opinions", explanation: "Use creo que, pienso que, me parece que." }] },
      { title: "Making Comparisons", description: "Compare people, places, and things in Spanish", level: "B1", slug: "making-comparisons", difficulty: "INTERMEDIATE", order: 15, duration_minutes: 25, content: "Learn comparatives and superlatives.", vocabulary_json: [{ spanish: "más", english: "more" }, { spanish: "menos", english: "less" }], grammar_json: [{ topic: "Comparatives", explanation: "más/menos + adjective + que." }] },
      { title: "Subjunctive Mood Introduction", description: "Express wishes, doubts, and possibilities", level: "B2", slug: "subjunctive-mood-introduction", difficulty: "UPPER_INTERMEDIATE", order: 16, duration_minutes: 30, content: "Introduction to the subjunctive mood.", vocabulary_json: [{ spanish: "ojalá", english: "hopefully" }, { spanish: "quizás", english: "perhaps" }], grammar_json: [{ topic: "Present Subjunctive", explanation: "Used after expressions of doubt, desire, or emotion." }] },
      { title: "Conditional Tense", description: "Talk about hypothetical situations", level: "B2", slug: "conditional-tense", difficulty: "UPPER_INTERMEDIATE", order: 17, duration_minutes: 30, content: "Learn the conditional for hypothetical situations.", vocabulary_json: [{ spanish: "si", english: "if" }, { spanish: "haría", english: "I would do" }], grammar_json: [{ topic: "Conditional Tense", explanation: "Add -ía, -ías, -ía to the infinitive." }] },
      { title: "Complex Sentence Structures", description: "Build complex and compound sentences", level: "B2", slug: "complex-sentence-structures", difficulty: "UPPER_INTERMEDIATE", order: 18, duration_minutes: 30, content: "Learn advanced connectors and sentence structures.", vocabulary_json: [{ spanish: "aunque", english: "although" }, { spanish: "sin embargo", english: "however" }], grammar_json: [{ topic: "Connecting Ideas", explanation: "Use conjunctions to link complex thoughts." }] },
      { title: "Business Spanish", description: "Professional communication in Spanish", level: "B2", slug: "business-spanish", difficulty: "UPPER_INTERMEDIATE", order: 19, duration_minutes: 30, content: "Learn formal business communication.", vocabulary_json: [{ spanish: "reunión", english: "meeting" }, { spanish: "contrato", english: "contract" }], grammar_json: [{ topic: "Formal Email Structure", explanation: "Use formal register with usted and formal expressions." }] },
      { title: "Cultural Topics: Spain", description: "Explore Spanish culture, history, and traditions", level: "B2", slug: "cultural-topics-spain", difficulty: "UPPER_INTERMEDIATE", order: 20, duration_minutes: 30, content: "Learn about Spanish festivals, gastronomy, and history.", vocabulary_json: [{ spanish: "fiesta", english: "festival" }, { spanish: "tradición", english: "tradition" }], grammar_json: [{ topic: "Passive Voice with Se", explanation: "Use se + third person verb for passive constructions." }] },
      { title: "Advanced Subjunctive", description: "Master complex subjunctive constructions", level: "C1", slug: "advanced-subjunctive", difficulty: "ADVANCED", order: 21, duration_minutes: 35, content: "Master advanced subjunctive triggers.", vocabulary_json: [{ spanish: "aun cuando", english: "even when" }, { spanish: "con tal de que", english: "provided that" }], grammar_json: [{ topic: "Advanced Subjunctive Triggers", explanation: "Conjunctions that always require subjunctive." }] },
      { title: "Literary Analysis Vocabulary", description: "Discuss literature with academic vocabulary", level: "C1", slug: "literary-analysis-vocabulary", difficulty: "ADVANCED", order: 22, duration_minutes: 35, content: "Learn vocabulary for literary analysis.", vocabulary_json: [{ spanish: "metáfora", english: "metaphor" }, { spanish: "símbolo", english: "symbol" }], grammar_json: [{ topic: "Academic Register", explanation: "Use formal vocabulary and complex structures." }] },
      { title: "Debate and Argumentation", description: "Participate in formal debates and discussions", level: "C1", slug: "debate-and-argumentation", difficulty: "ADVANCED", order: 23, duration_minutes: 35, content: "Learn formal debate expressions.", vocabulary_json: [{ spanish: "argumento", english: "argument" }, { spanish: "evidencia", english: "evidence" }], grammar_json: [{ topic: "Debate Expressions", explanation: "Formal phrases for academic discussion." }] },
      { title: "Professional Writing", description: "Write formal reports, essays, and correspondence", level: "C1", slug: "professional-writing", difficulty: "ADVANCED", order: 24, duration_minutes: 35, content: "Learn professional and academic writing.", vocabulary_json: [{ spanish: "informe", english: "report" }, { spanish: "ensayo", english: "essay" }], grammar_json: [{ topic: "Formal Connectors", explanation: "Advanced connectors for professional writing." }] },
      { title: "Cultural Topics: Latin America", description: "Explore the diversity of Latin American cultures", level: "C1", slug: "cultural-topics-latin-america", difficulty: "ADVANCED", order: 25, duration_minutes: 35, content: "Learn about Latin American cultural diversity.", vocabulary_json: [{ spanish: "diversidad", english: "diversity" }, { spanish: "identidad", english: "identity" }], grammar_json: [{ topic: "Cultural Expressions", explanation: "Discuss cultural topics with nuanced vocabulary." }] },
      { title: "Nuanced Expression", description: "Express subtle meanings and shades of opinion", level: "C2", slug: "nuanced-expression", difficulty: "MASTERY", order: 26, duration_minutes: 40, content: "Master hedging and softening in Spanish.", vocabulary_json: [{ spanish: "matiz", english: "nuance" }, { spanish: "sutil", english: "subtle" }], grammar_json: [{ topic: "Nuanced Language", explanation: "Use hedging for diplomatic communication." }] },
      { title: "Academic Spanish", description: "Write and present at university level", level: "C2", slug: "academic-spanish", difficulty: "MASTERY", order: 27, duration_minutes: 40, content: "Learn impersonal constructions and nominalization.", vocabulary_json: [{ spanish: "hipótesis", english: "hypothesis" }, { spanish: "metodología", english: "methodology" }], grammar_json: [{ topic: "Academic Register", explanation: "Use impersonal constructions and nominalization." }] },
      { title: "Poetry and Literature", description: "Analyze and appreciate Spanish poetry", level: "C2", slug: "poetry-and-literature", difficulty: "MASTERY", order: 28, duration_minutes: 40, content: "Learn to analyze Spanish poetry.", vocabulary_json: [{ spanish: "verso", english: "verse" }, { spanish: "estrofa", english: "stanza" }], grammar_json: [{ topic: "Poetic Language", explanation: "Understand archaic and poetic forms." }] },
      { title: "Historical Texts", description: "Read and analyze historical documents", level: "C2", slug: "historical-texts", difficulty: "MASTERY", order: 29, duration_minutes: 40, content: "Learn to read historical Spanish texts.", vocabulary_json: [{ spanish: "crónica", english: "chronicle" }, { spanish: "manuscrito", english: "manuscript" }], grammar_json: [{ topic: "Historical Grammar", explanation: "Recognize older grammatical forms." }] },
      { title: "Regional Dialects and Variations", description: "Understand Spanish dialectal diversity", level: "C2", slug: "regional-dialects-and-variations", difficulty: "MASTERY", order: 30, duration_minutes: 40, content: "Learn about regional dialects and voseo.", vocabulary_json: [{ spanish: "dialecto", english: "dialect" }, { spanish: "voseo", english: "voseo" }], grammar_json: [{ topic: "Voseo and Regional Forms", explanation: "Use of vos instead of tú in parts of Latin America." }] },
    ];

    let createdCount = 0;
    for (const lesson of lessons) {
      const { data: existing } = await supabaseAdmin
        .from("lessons")
        .select("id")
        .eq("title", lesson.title)
        .maybeSingle();

      if (!existing) {
        const { error } = await supabaseAdmin.from("lessons").insert(lesson);
        if (error) {
          console.error("Lesson insert error:", error);
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
    });
  } catch (error) {
    console.error("Seed error:", error);
    res.status(500).json({
      message: "Seed failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}