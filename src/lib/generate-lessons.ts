import type { LessonData, RegionalVocabItem, GrammarItem, DialogueScenario, QuizQuestion, FlashcardItem } from "./lessons-data";

const LESSON_STRUCTURE = {
  A1: [
    { title: "Greetings & Goodbyes", slug: "a1-01-greetings", description: "Everyday greetings from casual ¡Hola! to warm Buenas noches", cards: 15 },
    { title: "Introductions", slug: "a1-02-introductions", description: "Introduce yourself and get to know someone", cards: 20 },
    { title: "Politeness & Classroom Basics", slug: "a1-03-politeness", description: "Polite words and classroom phrases you'll use every day", cards: 20 },
    { title: "Numbers, Time & Dates", slug: "a1-04-numbers-time", description: "Tell the time, talk about days and dates, phone numbers", cards: 20 },
    { title: "Family & People", slug: "a1-05-family", description: "Introduce your family, describe people, talk about relationships", cards: 20 },
    { title: "Food, Restaurants & Cafés", slug: "a1-06-food", description: "Order like a local and handle restaurants with confidence", cards: 20 },
    { title: "Shopping", slug: "a1-07-shopping", description: "Ask prices, negotiate, and handle any store like a local", cards: 20 },
    { title: "Transportation & Directions", slug: "a1-08-transportation", description: "Find your way and get around with confidence", cards: 20 },
    { title: "Hotels & Travel", slug: "a1-09-hotels", description: "Check in, ask about your room, handle your whole hotel stay", cards: 20 },
    { title: "Everyday Survival", slug: "a1-10-survival", description: "Go-anywhere phrases for bathrooms, wifi, emergencies", cards: 20 },
  ],
  A2: [
    { title: "Small Talk", slug: "a2-01-small-talk", description: "Break the ice with greetings and catch-up phrases", cards: 20 },
    { title: "Daily Routines", slug: "a2-02-daily-routines", description: "Talk about your everyday life in natural Mexican Spanish", cards: 20 },
    { title: "Hobbies & Free Time", slug: "a2-03-hobbies", description: "Talk about your hobbies, interests, and what you love", cards: 20 },
    { title: "Making Plans", slug: "a2-04-plans", description: "Invite friends out and set a time and place", cards: 20 },
    { title: "Phone Calls & Texting", slug: "a2-05-phone", description: "Answer calls the Mexican way and handle bad signal", cards: 20 },
    { title: "Weather & Seasons", slug: "a2-06-weather", description: "Chat about the weather and seasons", cards: 20 },
    { title: "Work & School", slug: "a2-07-work-school", description: "Talk about studies, homework, job, meetings, coworkers", cards: 20 },
    { title: "Emotions & Feelings", slug: "a2-08-emotions", description: "Express how you feel and check in on others", cards: 20 },
    { title: "Mexican Fillers & Conversation Builders", slug: "a2-09-fillers", description: "Sound natural with fillers and connectors Mexicans use", cards: 20 },
    { title: "Everyday Mexican Expressions", slug: "a2-10-expressions", description: "Classic go-to phrases you'll hear all day in Mexico", cards: 20 },
  ],
  B1: [
    { title: "Friends & Social Life", slug: "b1-01-friends", description: "Talk about friendships, parties, and hanging out", cards: 20 },
    { title: "Dating & Relationships", slug: "b1-02-dating", description: "Navigate flirting, dating, and relationships naturally", cards: 20 },
    { title: "Storytelling", slug: "b1-03-storytelling", description: "Tell engaging stories with natural connectors", cards: 20 },
    { title: "Opinions & Discussions", slug: "b1-04-opinions", description: "Share opinions, agree, disagree, and discuss naturally", cards: 20 },
    { title: "Giving Advice", slug: "b1-05-advice", description: "Ask for and give advice naturally", cards: 20 },
    { title: "Problems & Complaints", slug: "b1-06-problems", description: "Report problems and make complaints effectively", cards: 20 },
    { title: "Work & Adult Life", slug: "b1-07-adult-life", description: "Handle real adult life—errands, paperwork, money, work", cards: 20 },
    { title: "Chisme — Gossip", slug: "b1-08-gossip", description: "Share and react to gossip like a local", cards: 20 },
    { title: "Mexican Idioms", slug: "b1-09-idioms", description: "Speak like a local with Mexico's most-loved idioms", cards: 20 },
    { title: "More Natural Conversation", slug: "b1-10-natural-conversation", description: "Connectors and fillers for effortless Mexican Spanish", cards: 20 },
  ],
  B2: [
    { title: "Everyday Slang", slug: "b2-01-slang", description: "Everyday slang Mexicans really use—chido, chamba, lana", cards: 20 },
    { title: "Stronger Slang", slug: "b2-02-strong-slang", description: "Bolder, rougher Mexican slang for close friends", cards: 20 },
    { title: "Humor & Sarcasm", slug: "b2-03-humor", description: "Read between the lines—Mexican sarcasm and comebacks", cards: 20 },
    { title: "Arguments & Conflict", slug: "b2-04-conflict", description: "Handle disagreements with confidence", cards: 20 },
    { title: "Texting & Internet Spanish", slug: "b2-05-texting", description: "Chat like a local—texting shorthand and online expressions", cards: 20 },
    { title: "Mexican Reactions", slug: "b2-06-reactions", description: "React like a Mexican with punchy expressions", cards: 20 },
    { title: "Expressive Mexican Spanish", slug: "b2-07-expressive", description: "Say it with feeling—emphatic and emotional expressions", cards: 20 },
    { title: "Cursing & Adult Language", slug: "b2-08-cursing", description: "Strong, mature Mexican slang for adults", cards: 20 },
    { title: "Regional & Cultural Expressions", slug: "b2-09-cultural", description: "Sound like you belong—regional slang and hospitality", cards: 20 },
    { title: "Native-Level Conversation", slug: "b2-10-native", description: "Discourse markers native speakers use", cards: 20 },
  ],
  C1: [
    { title: "Nuanced Opinions & Arguments", slug: "c1-01-nuanced-opinions", description: "Express judgments and push back with diplomacy", cards: 20 },
    { title: "Persuasion & Negotiation", slug: "c1-02-persuasion", description: "Propose, concede, and close deals like a native", cards: 20 },
    { title: "Advanced Storytelling", slug: "c1-03-advanced-storytelling", description: "Set scenes, build suspense, land the punchline", cards: 20 },
    { title: "Subtext, Indirectness & Hidden Meaning", slug: "c1-04-subtext", description: "Read between the lines—very Mexican phrases", cards: 20 },
    { title: "Humor, Irony & Mexican Wordplay", slug: "c1-05-wordplay", description: "Land jokes and sarcasm like a native", cards: 20 },
    { title: "Professional Mexican Spanish", slug: "c1-06-professional", description: "Sound polished at work in professional settings", cards: 20 },
    { title: "News, Society & Public Issues", slug: "c1-07-news", description: "Discuss current events and social debates", cards: 20 },
    { title: "Complex Emotions & Relationships", slug: "c1-08-complex-emotions", description: "Put feelings into words naturally", cards: 20 },
    { title: "Mexican Sayings, Proverbs & Cultural Wisdom", slug: "c1-09-sayings", description: "Drop dichos that carry generations of wisdom", cards: 20 },
    { title: "Register, Tone & Style-Shifting", slug: "c1-10-register", description: "Say the same thing formally, neutrally, or casually", cards: 20 },
  ],
  C2: [
    { title: "Sophisticated Political & Philosophical Discourse", slug: "c2-01-political", description: "Debate complex political and philosophical topics", cards: 20 },
    { title: "Literary & Poetic Spanish", slug: "c2-02-literary", description: "Understand and use literary devices and poetic language", cards: 20 },
    { title: "Advanced Academic Spanish", slug: "c2-03-academic", description: "Master academic discourse and research presentations", cards: 20 },
    { title: "Business & Legal Spanish", slug: "c2-04-business-legal", description: "Navigate contracts, negotiations, and legal documents", cards: 20 },
    { title: "Media & Broadcasting", slug: "c2-05-media", description: "Understand news analysis, opinion pieces, and broadcasts", cards: 20 },
    { title: "Cultural Nuances & Dialects", slug: "c2-06-dialects", description: "Master regional dialects beyond Mexican Spanish", cards: 20 },
    { title: "Advanced Idiomatic Mastery", slug: "c2-07-idioms", description: "Use idioms, proverbs, and cultural references natively", cards: 20 },
    { title: "Sociolinguistic Code-Switching", slug: "c2-08-code-switching", description: "Switch seamlessly between registers and dialects", cards: 20 },
    { title: "Contemporary Mexican Culture & Trends", slug: "c2-09-contemporary", description: "Stay current with slang, memes, and cultural trends", cards: 20 },
    { title: "Mastery Milestone: Native-Level Expression", slug: "c2-10-mastery", description: "Express yourself with native-level authenticity", cards: 20 },
  ],
};

const CORE_VOCABULARY: Record<string, RegionalVocabItem[]> = {
  "a1-01-greetings": [
    { word: "Hello", spainVariant: "Hola", latamVariant: "Hola", phoneticSpain: "[OH-lah]", phoneticLatam: "[OH-lah]", english: "Hello", partOfSpeech: "interjection", exampleSentenceSpain: "¡Hola! ¿Cómo te va?", exampleSentenceLatam: "¡Hola! ¿Qué onda?" },
    { word: "Good morning", spainVariant: "Buenos días", latamVariant: "Buenos días", phoneticSpain: "[BWEH-nos DEE-ahs]", phoneticLatam: "[BWEH-nos DEE-ahs]", english: "Good morning", partOfSpeech: "phrase", exampleSentenceSpain: "Buenos días, ¿qué tal el día?", exampleSentenceLatam: "Buenos días, ¿cómo amaneciste?" },
    { word: "Good afternoon", spainVariant: "Buenas tardes", latamVariant: "Buenas tardes", phoneticSpain: "[BWEH-nas TAR-dehs]", phoneticLatam: "[BWEH-nas TAR-dehs]", english: "Good afternoon", partOfSpeech: "phrase", exampleSentenceSpain: "Buenas tardes, encantado de verte", exampleSentenceLatam: "Buenas tardes, ¿cómo estás?" },
    { word: "Good evening", spainVariant: "Buenas noches", latamVariant: "Buenas noches", phoneticSpain: "[BWEH-nas NOH-ches]", phoneticLatam: "[BWEH-nas NOH-ches]", english: "Good evening/night", partOfSpeech: "phrase", exampleSentenceSpain: "Buenas noches, que duermas bien", exampleSentenceLatam: "Buenas noches, descansa" },
    { word: "Goodbye", spainVariant: "Adiós", latamVariant: "Adiós", phoneticSpain: "[ah-dee-OHS]", phoneticLatam: "[ah-dee-OHS]", english: "Goodbye", partOfSpeech: "interjection", exampleSentenceSpain: "¡Adiós! Hasta luego.", exampleSentenceLatam: "¡Adiós! Nos vemos." },
    { word: "See you later", spainVariant: "Hasta luego", latamVariant: "Hasta luego", phoneticSpain: "[AHS-tah loo-EH-go]", phoneticLatam: "[AHS-tah loo-EH-go]", english: "See you later", partOfSpeech: "phrase", exampleSentenceSpain: "Hasta luego, amigo.", exampleSentenceLatam: "Hasta luego, hermano." },
    { word: "See you tomorrow", spainVariant: "Hasta mañana", latamVariant: "Hasta mañana", phoneticSpain: "[AHS-tah mahn-YAH-nah]", phoneticLatam: "[AHS-tah mahn-YAH-nah]", english: "See you tomorrow", partOfSpeech: "phrase", exampleSentenceSpain: "Hasta mañana, descansa bien.", exampleSentenceLatam: "Hasta mañana, te veo." },
    { word: "How are you?", spainVariant: "¿Cómo estás?", latamVariant: "¿Cómo estás?", phoneticSpain: "[KOH-mo es-TAHS]", phoneticLatam: "[KOH-mo es-TAHS]", english: "How are you?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cómo estás hoy?", exampleSentenceLatam: "¿Cómo estás, qué onda?" },
    { word: "I'm fine", spainVariant: "Estoy bien", latamVariant: "Estoy bien", phoneticSpain: "[es-TOY bee-EHN]", phoneticLatam: "[es-TOY bee-EHN]", english: "I'm fine", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy bien, gracias por preguntar.", exampleSentenceLatam: "Estoy bien, ¿y tú?" },
    { word: "Thank you", spainVariant: "Gracias", latamVariant: "Gracias", phoneticSpain: "[GRAH-see-ahs]", phoneticLatam: "[GRAH-see-ahs]", english: "Thank you", partOfSpeech: "interjection", exampleSentenceSpain: "Gracias por todo.", exampleSentenceLatam: "Gracias, muy amable." },
    { word: "Please", spainVariant: "Por favor", latamVariant: "Por favor", phoneticSpain: "[por fah-VOR]", phoneticLatam: "[por fah-VOR]", english: "Please", partOfSpeech: "phrase", exampleSentenceSpain: "Un café, por favor.", exampleSentenceLatam: "Agua, por favor." },
    { word: "You're welcome", spainVariant: "De nada", latamVariant: "De nada", phoneticSpain: "[deh NAH-dah]", phoneticLatam: "[deh NAH-dah]", english: "You're welcome", partOfSpeech: "phrase", exampleSentenceSpain: "De nada, fue un placer.", exampleSentenceLatam: "De nada, ¿cuáles son tus noticias?" },
    { word: "Excuse me", spainVariant: "Disculpa", latamVariant: "Disculpa", phoneticSpain: "[dis-KOOL-pah]", phoneticLatam: "[dis-KOOL-pah]", english: "Excuse me", partOfSpeech: "interjection", exampleSentenceSpain: "Disculpa, ¿podrías ayudarme?", exampleSentenceLatam: "Disculpa, ¿dónde está el baño?" },
    { word: "Sorry", spainVariant: "Lo siento", latamVariant: "Lo siento", phoneticSpain: "[lo see-EHN-to]", phoneticLatam: "[lo see-EHN-to]", english: "Sorry", partOfSpeech: "phrase", exampleSentenceSpain: "Lo siento, fue mi culpa.", exampleSentenceLatam: "Lo siento, no quise ofenderte." },
    { word: "Nice to meet you", spainVariant: "Encantado/a de conocerte", latamVariant: "Encantado/a de conocerte", phoneticSpain: "[en-kahn-TAH-do deh ko-no-SER-teh]", phoneticLatam: "[en-kahn-TAH-do deh ko-no-SER-teh]", english: "Nice to meet you", partOfSpeech: "phrase", exampleSentenceSpain: "Encantado de conocerte, ¿cuál es tu nombre?", exampleSentenceLatam: "Encantado de verte, ¿cómo te llamas?" },
  ],
};

function generateVocabulary(slug: string, count: number): RegionalVocabItem[] {
  const cached = CORE_VOCABULARY[slug];
  if (cached) {
    return cached;
  }
  
  return Array(count).fill(null).map((_, i) => ({
    word: `Word ${i + 1}`,
    spainVariant: `Palabra ${i + 1} (España)`,
    latamVariant: `Palabra ${i + 1} (México)`,
    phoneticSpain: "[pal-AH-brah]",
    phoneticLatam: "[pal-AH-brah]",
    english: `Word ${i + 1}`,
    partOfSpeech: "noun",
    exampleSentenceSpain: `Ejemplo en España`,
    exampleSentenceLatam: `Ejemplo en México`,
  }));
}

function generateGrammarSection(title: string): GrammarItem[] {
  return [
    {
      title: "Vosotros vs Ustedes",
      spainContent: `In Spain, "vosotros/vosotras" is used to address a group of friends. Conjugation: "¿Vosotros estáis bien?" (Are you guys doing well?)`,
      latamContent: `In Latin America, "ustedes" serves for both formal and informal groups. Conjugation: "¿Ustedes están bien?" (Are you guys doing well?)`,
      note: "This is the most fundamental structural difference between Spain and Latin American Spanish."
    },
    {
      title: `${title} Structures`,
      spainContent: `Key grammatical patterns for this lesson in Peninsular Spanish, including verb conjugations and sentence construction typical of Spain.`,
      latamContent: `Key grammatical patterns for this lesson in Mexican/Latin American Spanish, reflecting natural speech patterns and regional preferences.`,
      note: "Pay close attention to how each region naturally constructs sentences.",
    },
  ];
}

function generateDialogues(title: string): DialogueScenario[] {
  const dialogues: DialogueScenario[] = [];
  
  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-spain-${i + 1}`,
      title: `${title} - Scene ${i + 1} (Spain)`,
      region: "SPAIN",
      setting: `Madrid café setting ${i + 1}`,
      lines: [
        { speaker: "Ana", text: `Hola, ¿cómo estás? ¿Qué tal el día? (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid café setting ${i + 1}` },
        { speaker: "Carlos", text: `¡Muy bien! ¿Y vosotros qué tal? (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid café setting ${i + 1}` },
        { speaker: "Ana", text: `Excelente, gracias por preguntar. (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid café setting ${i + 1}` },
      ],
    });
  }

  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-latam-${i + 1}`,
      title: `${title} - Scene ${i + 1} (Mexico)`,
      region: "LATAM",
      setting: `Mexico City café setting ${i + 1}`,
      lines: [
        { speaker: "María", text: `¡Hola, qué onda! ¿Cómo estás? (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City café setting ${i + 1}` },
        { speaker: "Diego", text: `¡Muy bien, gracias! ¿Y ustedes qué tal? (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City café setting ${i + 1}` },
        { speaker: "María", text: `Excelente, ¡qué bueno verlos! (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City café setting ${i + 1}` },
      ],
    });
  }

  return dialogues;
}

function generateQuiz(title: string): QuizQuestion[] {
  return [
    {
      questionId: "q1",
      type: "multiple-choice",
      questionText: `What is the correct formal greeting for morning in Spanish?`,
      options: ["Hola", "Buenos días", "¿Qué onda?", "Adiós"],
      correctAnswer: "Buenos días",
      explanation: "Buenos días is the formal greeting for the morning, used in both Spain and Latin America.",
    },
    {
      questionId: "q2",
      type: "multiple-choice",
      questionText: `In Spain, which form is used to address a group of friends?`,
      options: ["tú", "vosotros", "ustedes", "vos"],
      correctAnswer: "vosotros",
      explanation: "In Spain, 'vosotros/vosotras' is used for informal groups. In Latin America, 'ustedes' is used instead.",
    },
    {
      questionId: "q3",
      type: "multiple-choice",
      questionText: `How do you say 'Thank you' in Spanish?`,
      options: ["Por favor", "Gracias", "De nada", "Perdón"],
      correctAnswer: "Gracias",
      explanation: "Gracias is 'thank you'. De nada is 'you're welcome', and por favor is 'please'.",
    },
    {
      questionId: "q4",
      type: "multiple-choice",
      questionText: `Which is a common Mexican casual greeting?`,
      options: ["¿Qué tal?", "Hola", "¿Qué onda?", "Buenas"],
      correctAnswer: "¿Qué onda?",
      explanation: "'¿Qué onda?' is a very typical casual Mexican greeting meaning 'What's up?' or 'How's it going?'",
    },
    {
      questionId: "q5",
      type: "multiple-choice",
      questionText: `What does 'Hasta luego' mean?`,
      options: ["Hello", "Thank you", "See you later", "Good night"],
      correctAnswer: "See you later",
      explanation: "'Hasta luego' literally means 'until later' and is used as 'See you later' in both Spain and Latin America.",
    },
  ];
}

function generateFlashcards(title: string, count: number): FlashcardItem[] {
  return Array(count).fill(null).map((_, i) => ({
    id: `fc-${title.toLowerCase().replace(/ /g, "-")}-${i + 1}`,
    frontSpain: `Palabra ${i + 1} (España)`,
    frontLatam: `Palabra ${i + 1} (México)`,
    backEnglish: `English Word ${i + 1}`,
    variantDifferenceNote: `This word has regional usage variations between Spain and Mexico.`,
    exampleSentenceSpain: `Ejemplo español para palabra ${i + 1}`,
    exampleSentenceLatam: `Ejemplo mexicano para palabra ${i + 1}`,
    partOfSpeech: "noun",
  }));
}

export function generateAllLessons(): LessonData[] {
  const lessons: LessonData[] = [];
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  levels.forEach((level) => {
    const levelStructure = LESSON_STRUCTURE[level as keyof typeof LESSON_STRUCTURE];
    if (!levelStructure) return;

    levelStructure.forEach((lesson, index) => {
      const difficultyMap: Record<string, "BEGINNER" | "ELEMENTARY" | "INTERMEDIATE" | "UPPER_INTERMEDIATE" | "ADVANCED" | "MASTERY"> = {
        A1: "BEGINNER",
        A2: "ELEMENTARY",
        B1: "INTERMEDIATE",
        B2: "UPPER_INTERMEDIATE",
        C1: "ADVANCED",
        C2: "MASTERY",
      };

      const vocab = generateVocabulary(lesson.slug, lesson.cards);
      const newLesson: LessonData = {
        id: `lesson-${lesson.slug}`,
        slug: lesson.slug,
        title: lesson.title,
        description: lesson.description,
        level: level as "A1" | "A2" | "B1" | "B2" | "C1" | "C2",
        difficulty: difficultyMap[level],
        order: index + 1,
        imageUrl: null,
        durationMinutes: 20,
        isPublished: true,
        vocabularyTable: vocab,
        grammarSection: generateGrammarSection(lesson.title),
        dialogues: generateDialogues(lesson.title),
        quiz: generateQuiz(lesson.title),
        flashcards: generateFlashcards(lesson.title, lesson.cards),
        vocabularyJson: vocab.map((v) => ({
          word: v.word,
          translation: `${v.spainVariant} / ${v.latamVariant}`,
          partOfSpeech: v.partOfSpeech,
          example: v.exampleSentenceSpain,
        })),
        grammarJson: generateGrammarSection(lesson.title).map((g) => ({
          title: g.title,
          content: `${g.spainContent} | ${g.latamContent}`,
        })),
        content: `# ${lesson.title}\n\n${lesson.description}\n\nThis comprehensive lesson covers essential vocabulary, grammar structures, regional dialects, and interactive practice for the ${level} level. Work through the vocabulary table, study the grammar patterns, review the contextual dialogues, and practice with the interactive quiz.`,
      };
      lessons.push(newLesson);
    });
  });

  return lessons;
}