import type { LessonData, RegionalVocabItem, GrammarItem, DialogueScenario, QuizQuestion, FlashcardItem } from "./lessons-data";

// Lesson topics and structure per the scope document
const LESSON_STRUCTURE = {
  A1: [
    {
      title: "Greetings & Goodbyes",
      slug: "a1-01-greetings",
      description: "Everyday greetings from casual ¡Hola! to warm Buenas noches",
      flashcardCount: 15,
    },
    {
      title: "Introductions",
      slug: "a1-02-introductions",
      description: "Introduce yourself and get to know someone",
      flashcardCount: 20,
    },
    {
      title: "Politeness & Classroom Basics",
      slug: "a1-03-politeness",
      description: "Polite words and classroom phrases you'll use every day",
      flashcardCount: 20,
    },
    {
      title: "Numbers, Time & Dates",
      slug: "a1-04-numbers-time",
      description: "Tell the time, talk about days and dates, phone numbers",
      flashcardCount: 20,
    },
    {
      title: "Family & People",
      slug: "a1-05-family",
      description: "Introduce your family, describe people, talk about relationships",
      flashcardCount: 20,
    },
    {
      title: "Food, Restaurants & Cafés",
      slug: "a1-06-food",
      description: "Order like a local and handle restaurants with confidence",
      flashcardCount: 20,
    },
    {
      title: "Shopping",
      slug: "a1-07-shopping",
      description: "Ask prices, negotiate, and handle any store like a local",
      flashcardCount: 20,
    },
    {
      title: "Transportation & Directions",
      slug: "a1-08-transportation",
      description: "Find your way and get around with confidence",
      flashcardCount: 20,
    },
    {
      title: "Hotels & Travel",
      slug: "a1-09-hotels",
      description: "Check in, ask about your room, handle your whole hotel stay",
      flashcardCount: 20,
    },
    {
      title: "Everyday Survival",
      slug: "a1-10-survival",
      description: "Go-anywhere phrases for bathrooms, wifi, emergencies",
      flashcardCount: 20,
    },
  ],
  A2: [
    {
      title: "Small Talk",
      slug: "a2-01-small-talk",
      description: "Break the ice with greetings and catch-up phrases",
      flashcardCount: 20,
    },
    {
      title: "Daily Routines",
      slug: "a2-02-daily-routines",
      description: "Talk about your everyday life in natural Mexican Spanish",
      flashcardCount: 20,
    },
    {
      title: "Hobbies & Free Time",
      slug: "a2-03-hobbies",
      description: "Talk about your hobbies, interests, and what you love",
      flashcardCount: 20,
    },
    {
      title: "Making Plans",
      slug: "a2-04-plans",
      description: "Invite friends out and set a time and place",
      flashcardCount: 20,
    },
    {
      title: "Phone Calls & Texting",
      slug: "a2-05-phone",
      description: "Answer calls the Mexican way and handle bad signal",
      flashcardCount: 20,
    },
    {
      title: "Weather & Seasons",
      slug: "a2-06-weather",
      description: "Chat about the weather and seasons",
      flashcardCount: 20,
    },
    {
      title: "Work & School",
      slug: "a2-07-work-school",
      description: "Talk about studies, homework, job, meetings, coworkers",
      flashcardCount: 20,
    },
    {
      title: "Emotions & Feelings",
      slug: "a2-08-emotions",
      description: "Express how you feel and check in on others",
      flashcardCount: 20,
    },
    {
      title: "Mexican Fillers & Conversation Builders",
      slug: "a2-09-fillers",
      description: "Sound natural with fillers and connectors Mexicans use",
      flashcardCount: 20,
    },
    {
      title: "Everyday Mexican Expressions",
      slug: "a2-10-expressions",
      description: "Classic go-to phrases you'll hear all day in Mexico",
      flashcardCount: 20,
    },
  ],
  B1: [
    {
      title: "Friends & Social Life",
      slug: "b1-01-friends",
      description: "Talk about friendships, parties, and hanging out",
      flashcardCount: 20,
    },
    {
      title: "Dating & Relationships",
      slug: "b1-02-dating",
      description: "Navigate flirting, dating, and relationships naturally",
      flashcardCount: 20,
    },
    {
      title: "Storytelling",
      slug: "b1-03-storytelling",
      description: "Tell engaging stories with natural connectors",
      flashcardCount: 20,
    },
    {
      title: "Opinions & Discussions",
      slug: "b1-04-opinions",
      description: "Share opinions, agree, disagree, and discuss naturally",
      flashcardCount: 20,
    },
    {
      title: "Giving Advice",
      slug: "b1-05-advice",
      description: "Ask for and give advice naturally",
      flashcardCount: 20,
    },
    {
      title: "Problems & Complaints",
      slug: "b1-06-problems",
      description: "Report problems and make complaints effectively",
      flashcardCount: 20,
    },
    {
      title: "Work & Adult Life",
      slug: "b1-07-adult-life",
      description: "Handle real adult life—errands, paperwork, money, work",
      flashcardCount: 20,
    },
    {
      title: "Chisme — Gossip",
      slug: "b1-08-gossip",
      description: "Share and react to gossip like a local",
      flashcardCount: 20,
    },
    {
      title: "Mexican Idioms",
      slug: "b1-09-idioms",
      description: "Speak like a local with Mexico's most-loved idioms",
      flashcardCount: 20,
    },
    {
      title: "More Natural Conversation",
      slug: "b1-10-natural-conversation",
      description: "Connectors and fillers for effortless Mexican Spanish",
      flashcardCount: 20,
    },
  ],
  B2: [
    {
      title: "Everyday Slang",
      slug: "b2-01-slang",
      description: "Everyday slang Mexicans really use—chido, chamba, lana",
      flashcardCount: 20,
    },
    {
      title: "Stronger Slang",
      slug: "b2-02-strong-slang",
      description: "Bolder, rougher Mexican slang for close friends",
      flashcardCount: 20,
    },
    {
      title: "Humor & Sarcasm",
      slug: "b2-03-humor",
      description: "Read between the lines—Mexican sarcasm and comebacks",
      flashcardCount: 20,
    },
    {
      title: "Arguments & Conflict",
      slug: "b2-04-conflict",
      description: "Handle disagreements with confidence",
      flashcardCount: 20,
    },
    {
      title: "Texting & Internet Spanish",
      slug: "b2-05-texting",
      description: "Chat like a local—texting shorthand and online expressions",
      flashcardCount: 20,
    },
    {
      title: "Mexican Reactions",
      slug: "b2-06-reactions",
      description: "React like a Mexican with punchy expressions",
      flashcardCount: 20,
    },
    {
      title: "Expressive Mexican Spanish",
      slug: "b2-07-expressive",
      description: "Say it with feeling—emphatic and emotional expressions",
      flashcardCount: 20,
    },
    {
      title: "Cursing & Adult Language",
      slug: "b2-08-cursing",
      description: "Strong, mature Mexican slang for adults",
      flashcardCount: 20,
    },
    {
      title: "Regional & Cultural Expressions",
      slug: "b2-09-cultural",
      description: "Sound like you belong—regional slang and hospitality",
      flashcardCount: 20,
    },
    {
      title: "Native-Level Conversation",
      slug: "b2-10-native",
      description: "Discourse markers native speakers use",
      flashcardCount: 20,
    },
  ],
  C1: [
    {
      title: "Nuanced Opinions & Arguments",
      slug: "c1-01-nuanced-opinions",
      description: "Express judgments and push back with diplomacy",
      flashcardCount: 20,
    },
    {
      title: "Persuasion & Negotiation",
      slug: "c1-02-persuasion",
      description: "Propose, concede, and close deals like a native",
      flashcardCount: 20,
    },
    {
      title: "Advanced Storytelling",
      slug: "c1-03-advanced-storytelling",
      description: "Set scenes, build suspense, land the punchline",
      flashcardCount: 20,
    },
    {
      title: "Subtext, Indirectness & Hidden Meaning",
      slug: "c1-04-subtext",
      description: "Read between the lines—very Mexican phrases",
      flashcardCount: 20,
    },
    {
      title: "Humor, Irony & Mexican Wordplay",
      slug: "c1-05-wordplay",
      description: "Land jokes and sarcasm like a native",
      flashcardCount: 20,
    },
    {
      title: "Professional Mexican Spanish",
      slug: "c1-06-professional",
      description: "Sound polished at work in professional settings",
      flashcardCount: 20,
    },
    {
      title: "News, Society & Public Issues",
      slug: "c1-07-news",
      description: "Discuss current events and social debates",
      flashcardCount: 20,
    },
    {
      title: "Complex Emotions & Relationships",
      slug: "c1-08-complex-emotions",
      description: "Put feelings into words naturally",
      flashcardCount: 20,
    },
    {
      title: "Mexican Sayings, Proverbs & Cultural Wisdom",
      slug: "c1-09-sayings",
      description: "Drop dichos that carry generations of wisdom",
      flashcardCount: 20,
    },
    {
      title: "Register, Tone & Style-Shifting",
      slug: "c1-10-register",
      description: "Say the same thing formally, neutrally, or casually",
      flashcardCount: 20,
    },
  ],
  C2: [
    {
      title: "Sophisticated Political & Philosophical Discourse",
      slug: "c2-01-political-discourse",
      description: "Debate complex political and philosophical topics",
      flashcardCount: 20,
    },
    {
      title: "Literary & Poetic Spanish",
      slug: "c2-02-literary",
      description: "Understand and use literary devices and poetic language",
      flashcardCount: 20,
    },
    {
      title: "Advanced Academic Spanish",
      slug: "c2-03-academic",
      description: "Master academic discourse and research presentations",
      flashcardCount: 20,
    },
    {
      title: "Business & Legal Spanish",
      slug: "c2-04-business-legal",
      description: "Navigate contracts, negotiations, and legal documents",
      flashcardCount: 20,
    },
    {
      title: "Media & Broadcasting",
      slug: "c2-05-media",
      description: "Understand news analysis, opinion pieces, and broadcasts",
      flashcardCount: 20,
    },
    {
      title: "Cultural Nuances & Dialects",
      slug: "c2-06-dialects",
      description: "Master regional dialects beyond Mexican Spanish",
      flashcardCount: 20,
    },
    {
      title: "Advanced Idiomatic Mastery",
      slug: "c2-07-idioms",
      description: "Use idioms, proverbs, and cultural references natively",
      flashcardCount: 20,
    },
    {
      title: "Sociolinguistic Code-Switching",
      slug: "c2-08-code-switching",
      description: "Switch seamlessly between registers and dialects",
      flashcardCount: 20,
    },
    {
      title: "Contemporary Mexican Culture & Trends",
      slug: "c2-09-contemporary",
      description: "Stay current with slang, memes, and cultural trends",
      flashcardCount: 20,
    },
    {
      title: "Mastery Milestone: Native-Level Expression",
      slug: "c2-10-mastery",
      description: "Express yourself with native-level authenticity",
      flashcardCount: 20,
    },
  ],
};

// Sample vocabulary data generator
function generateVocabulary(lessonTitle: string, count: number): RegionalVocabItem[] {
  const vocab: RegionalVocabItem[] = [];
  const vocabularyExamples: Record<string, RegionalVocabItem[]> = {
    "Greetings & Goodbyes": [
      {
        word: "Hello",
        spainVariant: "Hola",
        latamVariant: "Hola",
        phoneticSpain: "[OH-lah]",
        phoneticLatam: "[OH-lah]",
        english: "Hello",
        partOfSpeech: "Greeting",
        exampleSentenceSpain: "¡Hola! ¿Cómo estás?",
        exampleSentenceLatam: "¡Hola! ¿Cómo estás?",
      },
      {
        word: "Good morning",
        spainVariant: "Buenos días",
        latamVariant: "Buenos días",
        phoneticSpain: "[BWEH-nos DEE-ahs]",
        phoneticLatam: "[BWEH-nos DEE-ahs]",
        english: "Good morning",
        partOfSpeech: "Greeting",
        exampleSentenceSpain: "Buenos días, ¿qué tal?",
        exampleSentenceLatam: "Buenos días, ¿qué tal?",
      },
      {
        word: "Good afternoon",
        spainVariant: "Buenas tardes",
        latamVariant: "Buenas tardes",
        phoneticSpain: "[BWEH-nas TAR-dehs]",
        phoneticLatam: "[BWEH-nas TAR-dehs]",
        english: "Good afternoon",
        partOfSpeech: "Greeting",
        exampleSentenceSpain: "Buenas tardes, encantado",
        exampleSentenceLatam: "Buenas tardes, encantado",
      },
      {
        word: "Good evening",
        spainVariant: "Buenas noches",
        latamVariant: "Buenas noches",
        phoneticSpain: "[BWEH-nas NOH-ches]",
        phoneticLatam: "[BWEH-nas NOH-ches]",
        english: "Good evening",
        partOfSpeech: "Greeting",
        exampleSentenceSpain: "Buenas noches, hasta mañana",
        exampleSentenceLatam: "Buenas noches, hasta mañana",
      },
      {
        word: "Goodbye",
        spainVariant: "Adiós",
        latamVariant: "Adiós",
        phoneticSpain: "[ah-dee-OHS]",
        phoneticLatam: "[ah-dee-OHS]",
        english: "Goodbye",
        partOfSpeech: "Goodbye",
        exampleSentenceSpain: "¡Adiós! Que tengas un buen día.",
        exampleSentenceLatam: "¡Adiós! Que tengas un buen día.",
      },
    ],
  };

  const defaults = vocabularyExamples[lessonTitle] || [];
  for (let i = 0; i < count; i++) {
    if (i < defaults.length) {
      vocab.push(defaults[i]);
    } else {
      vocab.push({
        word: `Word ${i + 1}`,
        spainVariant: `Palabra ${i + 1} (España)`,
        latamVariant: `Palabra ${i + 1} (Latinoamérica)`,
        phoneticSpain: `[pah-LAH-brah]`,
        phoneticLatam: `[pah-LAH-brah]`,
        english: `Word ${i + 1}`,
        partOfSpeech: "noun",
        exampleSentenceSpain: `Ejemplo en España ${i + 1}`,
        exampleSentenceLatam: `Ejemplo en Latinoamérica ${i + 1}`,
      });
    }
  }
  return vocab;
}

// Generate grammar section
function generateGrammarSection(lessonTitle: string): GrammarItem[] {
  return [
    {
      title: "Regional Grammar Differences",
      spainContent: `In Spain, we use "vosotros/vosotras" for addressing groups of friends. The verb conjugation differs: "¿Vosotros estáis bien?"`,
      latamContent: `In Latin America, "ustedes" is used for both formal and informal groups. The conjugation is: "¿Ustedes están bien?"`,
      note: "This is a key structural difference between Spain and Latin American Spanish.",
    },
    {
      title: `${lessonTitle} Grammar Focus`,
      spainContent: `Key grammatical patterns specific to this lesson in Peninsular Spanish.`,
      latamContent: `Key grammatical patterns specific to this lesson in Mexican/Latin American Spanish.`,
      note: "Pay attention to verb conjugations and syntax differences.",
    },
  ];
}

// Generate dialogue scenarios
function generateDialogues(lessonTitle: string): DialogueScenario[] {
  const dialogues: DialogueScenario[] = [];

  // 3 Spain dialogues
  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-spain-${i + 1}`,
      title: `${lessonTitle} - Scene ${i + 1} (Spain)`,
      region: "SPAIN",
      setting: `Madrid setting ${i + 1}`,
      lines: [
        {
          speaker: "Person A",
          text: `Hola, ¿cómo estás? (Spain variant ${i + 1})`,
          region: "SPAIN",
          setting: `Madrid setting ${i + 1}`,
        },
        {
          speaker: "Person B",
          text: `¡Muy bien! ¿Y vosotros? (Spain variant ${i + 1})`,
          region: "SPAIN",
          setting: `Madrid setting ${i + 1}`,
        },
        {
          speaker: "Person A",
          text: `Excelente, gracias por preguntar. (Spain variant ${i + 1})`,
          region: "SPAIN",
          setting: `Madrid setting ${i + 1}`,
        },
      ],
    });
  }

  // 3 LATAM dialogues
  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-latam-${i + 1}`,
      title: `${lessonTitle} - Scene ${i + 1} (LATAM)`,
      region: "LATAM",
      setting: `Mexico City setting ${i + 1}`,
      lines: [
        {
          speaker: "Person A",
          text: `Hola, ¿cómo estás? (Mexico variant ${i + 1})`,
          region: "LATAM",
          setting: `Mexico City setting ${i + 1}`,
        },
        {
          speaker: "Person B",
          text: `¡Muy bien, gracias! ¿Y ustedes? (Mexico variant ${i + 1})`,
          region: "LATAM",
          setting: `Mexico City setting ${i + 1}`,
        },
        {
          speaker: "Person A",
          text: `Excelente, ¡qué bueno! (Mexico variant ${i + 1})`,
          region: "LATAM",
          setting: `Mexico City setting ${i + 1}`,
        },
      ],
    });
  }

  return dialogues;
}

// Generate quiz questions
function generateQuiz(lessonTitle: string): QuizQuestion[] {
  return [
    {
      questionId: "q1",
      type: "multiple-choice",
      questionText: `What is the correct greeting in Spain? (${lessonTitle})`,
      options: ["Hola", "Buenos días", "Buenas noches", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All are correct greetings, used depending on time of day.",
    },
    {
      questionId: "q2",
      type: "multiple-choice",
      questionText: `In Mexico, which form do you use to address a group of friends? (${lessonTitle})`,
      options: ["vosotros", "ustedes", "tú", "yo"],
      correctAnswer: "ustedes",
      explanation: "In Mexico, 'ustedes' is used for both formal and informal groups.",
    },
    {
      questionId: "q3",
      type: "multiple-choice",
      questionText: `How do you say 'car' in Spain vs Mexico? (${lessonTitle})`,
      options: ["coche vs carro", "auto vs máquina", "vehículo vs coche", "máquina vs auto"],
      correctAnswer: "coche vs carro",
      explanation: "Spain uses 'coche', Mexico uses 'carro' or 'máquina'.",
    },
    {
      questionId: "q4",
      type: "multiple-choice",
      questionText: `What does 'chido' mean in Mexican Spanish? (${lessonTitle})`,
      options: ["Bad", "Cool/Nice", "Sad", "Angry"],
      correctAnswer: "Cool/Nice",
      explanation: "'Chido' is Mexican slang meaning cool, nice, or awesome.",
    },
    {
      questionId: "q5",
      type: "multiple-choice",
      questionText: `How do you distinguish between 'z' and 'c' pronunciation in Spain? (${lessonTitle})`,
      options: ["They sound the same", "Z is pronounced like 'th'", "C is always hard", "Z is silent"],
      correctAnswer: "Z is pronounced like 'th'",
      explanation: "In Spain, 'z' and 'c' before 'e' or 'i' make a 'th' sound (distinción).",
    },
  ];
}

// Generate flashcards
function generateFlashcards(lessonTitle: string, count: number): FlashcardItem[] {
  const flashcards: FlashcardItem[] = [];
  for (let i = 0; i < count; i++) {
    flashcards.push({
      id: `fc-${lessonTitle.toLowerCase().replace(/ /g, "-")}-${i + 1}`,
      frontSpain: `Spain Vocab ${i + 1} (${lessonTitle})`,
      frontLatam: `Mexico Vocab ${i + 1} (${lessonTitle})`,
      backEnglish: `English Translation ${i + 1}`,
      variantDifferenceNote: `This word differs between Spain and Mexico variants.`,
      exampleSentenceSpain: `Example sentence in Spanish (Spain) ${i + 1}`,
      exampleSentenceLatam: `Example sentence in Spanish (Mexico) ${i + 1}`,
      partOfSpeech: "noun",
    });
  }
  return flashcards;
}

// Main generator function
export function generateAllLessons(): LessonData[] {
  const lessons: LessonData[] = [];
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  levels.forEach((level) => {
    const levelStructure = LESSON_STRUCTURE[level as keyof typeof LESSON_STRUCTURE];
    if (!levelStructure) return;

    levelStructure.forEach((lesson, index) => {
      const vocabCount =
        level === "A1" ? 15 + index * 0 : index < 5 ? 20 + index : 20;
      const flashcardCount = lesson.flashcardCount;

      const newLesson: LessonData = {
        id: `lesson-${lesson.slug}`,
        slug: lesson.slug,
        title: lesson.title,
        description: lesson.description,
        level: level as "A1" | "A2" | "B1" | "B2" | "C1" | "C2",
        difficulty:
          level === "A1"
            ? "BEGINNER"
            : level === "A2"
              ? "ELEMENTARY"
              : level === "B1"
                ? "INTERMEDIATE"
                : level === "B2"
                  ? "UPPER_INTERMEDIATE"
                  : level === "C1"
                    ? "ADVANCED"
                    : "MASTERY",
        order: index + 1,
        imageUrl: `/generated/hero-${lesson.slug}.png`,
        durationMinutes: 20,
        isPublished: true,
        vocabularyTable: generateVocabulary(lesson.title, vocabCount),
        grammarSection: generateGrammarSection(lesson.title),
        dialogues: generateDialogues(lesson.title),
        quiz: generateQuiz(lesson.title),
        flashcards: generateFlashcards(lesson.title, flashcardCount),
        vocabularyJson: generateVocabulary(lesson.title, vocabCount).map((v) => ({
          word: v.word,
          translation: `${v.spainVariant} / ${v.latamVariant}`,
          partOfSpeech: v.partOfSpeech,
          example: v.exampleSentenceSpain,
        })),
        grammarJson: generateGrammarSection(lesson.title).map((g) => ({
          title: g.title,
          content: `${g.spainContent} | ${g.latamContent}`,
        })),
        content: `# ${lesson.title}\n\n${lesson.description}\n\nThis lesson covers essential vocabulary and grammar structures for the ${level} level.`,
      };
      lessons.push(newLesson);
    });
  });

  return lessons;
}