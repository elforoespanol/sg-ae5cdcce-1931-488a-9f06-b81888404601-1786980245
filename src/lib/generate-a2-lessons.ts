import type { LessonData, RegionalVocabItem, GrammarItem, DialogueScenario, QuizQuestion, FlashcardItem } from "./lessons-data";

const A2_LESSONS = {
  "a2-01-small-talk": {
    title: "Small Talk & Casual Conversation",
    description: "Master casual conversation starters and small talk in both Spain and Mexico",
    vocabulary: [
      { word: "How was your day?", spainVariant: "¿Qué tal tu día?", latamVariant: "¿Cómo estuvo tu día?", phoneticSpain: "[keh tahl too DEE-ah]", phoneticLatam: "[KOH-mo es-TOO-vo too DEE-ah]", english: "How was your day?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué tal tu día en el trabajo?", exampleSentenceLatam: "¿Cómo estuvo tu día en la escuela?" },
      { word: "It was good", spainVariant: "Fue bien", latamVariant: "Estuvo bien", phoneticSpain: "[foo-EH bee-EHN]", phoneticLatam: "[es-TOO-vo bee-EHN]", english: "It was good", partOfSpeech: "phrase", exampleSentenceSpain: "Fue bien, gracias.", exampleSentenceLatam: "Estuvo bien, gracias." },
      { word: "Not bad", spainVariant: "Bien, bien", latamVariant: "Bien, bien", phoneticSpain: "[bee-EHN, bee-EHN]", phoneticLatam: "[bee-EHN, bee-EHN]", english: "Not bad", partOfSpeech: "phrase", exampleSentenceSpain: "Bien, bien, sin quejas.", exampleSentenceLatam: "Bien, bien, todo tranquilo." },
      { word: "Did you do anything fun?", spainVariant: "¿Hiciste algo divertido?", latamVariant: "¿Hiciste algo divertido?", phoneticSpain: "[ee-SIS-teh AHL-go dee-ver-TEE-do]", phoneticLatam: "[ee-SIS-teh AHL-go dee-ver-TEE-do]", english: "Did you do anything fun?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Hiciste algo divertido el fin de semana?", exampleSentenceLatam: "¿Hiciste algo divertido?" },
      { word: "Yes, I went to...", spainVariant: "Sí, fui a...", latamVariant: "Sí, fui a...", phoneticSpain: "[see, foo-EE ah]", phoneticLatam: "[see, foo-EE ah]", english: "Yes, I went to...", partOfSpeech: "phrase", exampleSentenceSpain: "Sí, fui a la playa.", exampleSentenceLatam: "Sí, fui al cine." },
      { word: "That sounds nice", spainVariant: "Suena bien", latamVariant: "Suena bien", phoneticSpain: "[soo-EH-nah bee-EHN]", phoneticLatam: "[soo-EH-nah bee-EHN]", english: "That sounds nice", partOfSpeech: "phrase", exampleSentenceSpain: "Suena bien, me gustaría ir.", exampleSentenceLatam: "Suena bien, ¡qué padre!" },
      { word: "What about you?", spainVariant: "¿Y tú?", latamVariant: "¿Y tú?", phoneticSpain: "[ee too]", phoneticLatam: "[ee too]", english: "What about you?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Y tú qué hiciste?", exampleSentenceLatam: "¿Y tú, qué hiciste?" },
      { word: "I'm tired", spainVariant: "Estoy cansado/a", latamVariant: "Estoy cansado/a", phoneticSpain: "[es-TOY kahn-SAH-do]", phoneticLatam: "[es-TOY kahn-SAH-do]", english: "I'm tired", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy cansado de trabajar.", exampleSentenceLatam: "Estoy cansada hoy." },
      { word: "I'm excited", spainVariant: "Estoy emocionado/a", latamVariant: "Estoy emocionado/a", phoneticSpain: "[es-TOY eh-mo-see-o-NAH-do]", phoneticLatam: "[es-TOY eh-mo-see-o-NAH-do]", english: "I'm excited", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy emocionado por las vacaciones.", exampleSentenceLatam: "Estoy emocionada de verte." },
      { word: "Same here", spainVariant: "Yo también", latamVariant: "Yo también", phoneticSpain: "[yo tam-bee-EHN]", phoneticLatam: "[yo tam-bee-EHN]", english: "Same here", partOfSpeech: "phrase", exampleSentenceSpain: "Yo también estoy cansado.", exampleSentenceLatam: "Yo también, hermano." },
      { word: "Really?", spainVariant: "¿De verdad?", latamVariant: "¿De verdad?", phoneticSpain: "[deh ver-DAHD]", phoneticLatam: "[deh ver-DAHD]", english: "Really?", partOfSpeech: "interjection", exampleSentenceSpain: "¿De verdad? No me lo esperaba.", exampleSentenceLatam: "¿De verdad? ¡Qué interesante!" },
      { word: "That's cool", spainVariant: "Qué guay", latamVariant: "Qué padre", phoneticSpain: "[keh GWAI]", phoneticLatam: "[keh PAH-dreh]", english: "That's cool", partOfSpeech: "phrase", exampleSentenceSpain: "¡Qué guay! Me encanta.", exampleSentenceLatam: "¡Qué padre! Me encantaría." },
      { word: "I totally agree", spainVariant: "Totalmente de acuerdo", latamVariant: "Totalmente de acuerdo", phoneticSpain: "[to-tahl-MEN-teh deh ah-KWER-do]", phoneticLatam: "[to-tahl-MEN-teh deh ah-KWER-do]", english: "I totally agree", partOfSpeech: "phrase", exampleSentenceSpain: "Totalmente de acuerdo contigo.", exampleSentenceLatam: "Totalmente de acuerdo." },
      { word: "You're right", spainVariant: "Tienes razón", latamVariant: "Tienes razón", phoneticSpain: "[tee-EH-nes rah-SOHN]", phoneticLatam: "[tee-EH-nes rah-SOHN]", english: "You're right", partOfSpeech: "phrase", exampleSentenceSpain: "Tienes razón, no lo había pensado.", exampleSentenceLatam: "Tienes razón, es verdad." },
      { word: "I don't think so", spainVariant: "No creo", latamVariant: "No creo", phoneticSpain: "[no KREH-o]", phoneticLatam: "[no KREH-o]", english: "I don't think so", partOfSpeech: "phrase", exampleSentenceSpain: "No creo, me parece diferente.", exampleSentenceLatam: "No creo, pienso diferente." },
      { word: "What do you think?", spainVariant: "¿Qué piensas?", latamVariant: "¿Qué piensas?", phoneticSpain: "[keh pee-EHN-sas]", phoneticLatam: "[keh pee-EHN-sas]", english: "What do you think?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué piensas de esto?", exampleSentenceLatam: "¿Qué opinas?" },
      { word: "It depends", spainVariant: "Depende", latamVariant: "Depende", phoneticSpain: "[deh-PEN-deh]", phoneticLatam: "[deh-PEN-deh]", english: "It depends", partOfSpeech: "phrase", exampleSentenceSpain: "Depende de la situación.", exampleSentenceLatam: "Depende, no es tan simple." },
      { word: "Interesting", spainVariant: "Interesante", latamVariant: "Interesante", phoneticSpain: "[in-teh-reh-SAHN-teh]", phoneticLatam: "[in-teh-reh-SAHN-teh]", english: "Interesting", partOfSpeech: "adjective", exampleSentenceSpain: "Eso es muy interesante.", exampleSentenceLatam: "¡Qué interesante!" },
      { word: "I understand", spainVariant: "Entiendo", latamVariant: "Entiendo", phoneticSpain: "[en-tee-EHN-do]", phoneticLatam: "[en-tee-EHN-do]", english: "I understand", partOfSpeech: "phrase", exampleSentenceSpain: "Entiendo perfectamente.", exampleSentenceLatam: "Entiendo lo que quieres decir." },
      { word: "Tell me more", spainVariant: "Cuéntame más", latamVariant: "Cuéntame más", phoneticSpain: "[KWEN-tah-meh MAHS]", phoneticLatam: "[KWEN-tah-meh MAHS]", english: "Tell me more", partOfSpeech: "phrase", exampleSentenceSpain: "Cuéntame más de eso.", exampleSentenceLatam: "¡Cuéntame más, me encanta!" }
    ]
  },
  "a2-02-daily-routines": {
    title: "Daily Routines & Habits",
    description: "Talk about your daily schedule and regular activities with confidence",
    vocabulary: [
      { word: "Wake up", spainVariant: "Despertarse", latamVariant: "Despertarse", phoneticSpain: "[des-per-TAR-seh]", phoneticLatam: "[des-per-TAR-seh]", english: "Wake up", partOfSpeech: "verb", exampleSentenceSpain: "Me despierto a las 7.", exampleSentenceLatam: "Me despierto temprano." },
      { word: "Go to bed", spainVariant: "Acostarse", latamVariant: "Acostarse", phoneticSpain: "[ah-kos-TAR-seh]", phoneticLatam: "[ah-kos-TAR-seh]", english: "Go to bed", partOfSpeech: "verb", exampleSentenceSpain: "Me acuesto a las 11.", exampleSentenceLatam: "Me acuesto tarde." },
      { word: "Breakfast", spainVariant: "Desayunar", latamVariant: "Desayunar", phoneticSpain: "[deh-sah-yoo-NAHR]", phoneticLatam: "[deh-sah-yoo-NAHR]", english: "Have breakfast", partOfSpeech: "verb", exampleSentenceSpain: "Desayuno a las 8.", exampleSentenceLatam: "Desayuno con café." },
      { word: "Work", spainVariant: "Trabajar", latamVariant: "Trabajar", phoneticSpain: "[trah-bah-HAHR]", phoneticLatam: "[trah-bah-HAHR]", english: "Work", partOfSpeech: "verb", exampleSentenceSpain: "Trabajo en una oficina.", exampleSentenceLatam: "Trabajo en casa." },
      { word: "Exercise", spainVariant: "Hacer ejercicio", latamVariant: "Hacer ejercicio", phoneticSpain: "[ah-SER eh-her-SEE-see-o]", phoneticLatam: "[ah-SER eh-her-SEE-see-o]", english: "Exercise", partOfSpeech: "phrase", exampleSentenceSpain: "Hago ejercicio tres veces a la semana.", exampleSentenceLatam: "Hago ejercicio en la mañana." },
      { word: "Shower", spainVariant: "Duchar", latamVariant: "Duchar", phoneticSpain: "[doo-CHAHR]", phoneticLatam: "[doo-CHAHR]", english: "Shower", partOfSpeech: "verb", exampleSentenceSpain: "Me ducho después del trabajo.", exampleSentenceLatam: "Me ducho en la noche." },
      { word: "Lunch", spainVariant: "Comer", latamVariant: "Almorzar", phoneticSpain: "[ko-MER]", phoneticLatam: "[ahl-mor-SAHR]", english: "Have lunch", partOfSpeech: "verb", exampleSentenceSpain: "Como a las 2.", exampleSentenceLatam: "Almuerzo al mediodía." },
      { word: "Dinner", spainVariant: "Cenar", latamVariant: "Cenar", phoneticSpain: "[seh-NAHR]", phoneticLatam: "[seh-NAHR]", english: "Have dinner", partOfSpeech: "verb", exampleSentenceSpain: "Ceno a las 9.", exampleSentenceLatam: "Ceno temprano." },
      { word: "Watch TV", spainVariant: "Ver la tele", latamVariant: "Ver la tele", phoneticSpain: "[ver lah TEH-leh]", phoneticLatam: "[ver lah TEH-leh]", english: "Watch TV", partOfSpeech: "phrase", exampleSentenceSpain: "Veo la tele por la noche.", exampleSentenceLatam: "Veo televisión." },
      { word: "Read", spainVariant: "Leer", latamVariant: "Leer", phoneticSpain: "[leh-EHR]", phoneticLatam: "[leh-EHR]", english: "Read", partOfSpeech: "verb", exampleSentenceSpain: "Leo un libro antes de dormir.", exampleSentenceLatam: "Leo el periódico." },
      { word: "Everyday", spainVariant: "Todos los días", latamVariant: "Todos los días", phoneticSpain: "[TOH-dos los DEE-ahs]", phoneticLatam: "[TOH-dos los DEE-ahs]", english: "Everyday", partOfSpeech: "phrase", exampleSentenceSpain: "Voy al gimnasio todos los días.", exampleSentenceLatam: "Como sano todos los días." },
      { word: "Usually", spainVariant: "Normalmente", latamVariant: "Normalmente", phoneticSpain: "[nor-mahl-MEN-teh]", phoneticLatam: "[nor-mahl-MEN-teh]", english: "Usually", partOfSpeech: "adverb", exampleSentenceSpain: "Normalmente me despierto temprano.", exampleSentenceLatam: "Normalmente trabajo de 9 a 5." },
      { word: "Sometimes", spainVariant: "A veces", latamVariant: "A veces", phoneticSpain: "[ah VEH-ses]", phoneticLatam: "[ah VEH-ses]", english: "Sometimes", partOfSpeech: "adverb", exampleSentenceSpain: "A veces salgo con amigos.", exampleSentenceLatam: "A veces como fuera." },
      { word: "Never", spainVariant: "Nunca", latamVariant: "Nunca", phoneticSpain: "[NOON-kah]", phoneticLatam: "[NOON-kah]", english: "Never", partOfSpeech: "adverb", exampleSentenceSpain: "Nunca llego tarde.", exampleSentenceLatam: "Nunca salto el desayuno." },
      { word: "Always", spainVariant: "Siempre", latamVariant: "Siempre", phoneticSpain: "[see-EHM-preh]", phoneticLatam: "[see-EHM-preh]", english: "Always", partOfSpeech: "adverb", exampleSentenceSpain: "Siempre me cepillo los dientes.", exampleSentenceLatam: "Siempre llego a tiempo." },
      { word: "Morning routine", spainVariant: "Rutina matutina", latamVariant: "Rutina de la mañana", phoneticSpain: "[roo-TEE-nah mah-too-TEE-nah]", phoneticLatam: "[roo-TEE-nah deh lah mahn-YAH-nah]", english: "Morning routine", partOfSpeech: "noun", exampleSentenceSpain: "Mi rutina matutina es rápida.", exampleSentenceLatam: "Mi rutina de la mañana toma una hora." },
      { word: "Evening routine", spainVariant: "Rutina nocturna", latamVariant: "Rutina de la noche", phoneticSpain: "[roo-TEE-nah nok-TUR-nah]", phoneticLatam: "[roo-TEE-nah deh lah NOH-cheh]", english: "Evening routine", partOfSpeech: "noun", exampleSentenceSpain: "Mi rutina nocturna es relajante.", exampleSentenceLatam: "Mi rutina nocturna es importante." },
      { word: "Busy day", spainVariant: "Día ocupado", latamVariant: "Día ocupado", phoneticSpain: "[DEE-ah o-koo-PAH-do]", phoneticLatam: "[DEE-ah o-koo-PAH-do]", english: "Busy day", partOfSpeech: "phrase", exampleSentenceSpain: "Hoy fue un día ocupado.", exampleSentenceLatam: "Fue un día muy ocupado." },
      { word: "Relaxing day", spainVariant: "Día relajante", latamVariant: "Día tranquilo", phoneticSpain: "[DEE-ah reh-lah-HAHN-teh]", phoneticLatam: "[DEE-ah trahn-KEE-lo]", english: "Relaxing day", partOfSpeech: "phrase", exampleSentenceSpain: "Hoy fue un día relajante.", exampleSentenceLatam: "¡Qué día tan tranquilo!" },
      { word: "Free time", spainVariant: "Tiempo libre", latamVariant: "Tiempo libre", phoneticSpain: "[tee-EHM-po LEE-breh]", phoneticLatam: "[tee-EHM-po LEE-breh]", english: "Free time", partOfSpeech: "noun", exampleSentenceSpain: "En mi tiempo libre leo.", exampleSentenceLatam: "Uso mi tiempo libre para relajarme." }
    ]
  }
};

function buildA2Lesson(slug: string): LessonData {
  const lessonDef = A2_LESSONS[slug as keyof typeof A2_LESSONS];
  if (!lessonDef) {
    throw new Error(`A2 lesson ${slug} not found`);
  }

  const slughyphen = slug.split("-");
  const order = parseInt(slughyphen[2]) || 1;

  const grammarSection: GrammarItem[] = [
    {
      title: "Vosotros vs Ustedes",
      spainContent: `In Spain, "vosotros/vosotras" is used to address a group of friends informally. Example: "¿Vosotros estáis bien?"`,
      latamContent: `In Latin America, "ustedes" serves for both formal and informal groups. Example: "¿Ustedes están bien?"`,
      note: "This is the most fundamental structural difference between Spain and Latin American Spanish.",
    },
    {
      title: `${lessonDef.title} Structures`,
      spainContent: `Key grammatical patterns for this lesson in Peninsular Spanish.`,
      latamContent: `Key grammatical patterns for this lesson in Mexican/Latin American Spanish.`,
      note: "Pay close attention to how each region naturally constructs sentences.",
    },
  ];

  const dialogues: DialogueScenario[] = [];

  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-spain-${i + 1}`,
      title: `${lessonDef.title} - Spain Scene ${i + 1}`,
      region: "SPAIN",
      setting: `Spain setting for ${lessonDef.title}`,
      lines: [
        { speaker: "Ana", text: lessonDef.vocabulary[i]?.exampleSentenceSpain || "Hola.", region: "SPAIN", setting: `Spain setting for ${lessonDef.title}` },
        { speaker: "Carlos", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceSpain || "¡Hola!", region: "SPAIN", setting: `Spain setting for ${lessonDef.title}` },
        { speaker: "Ana", text: "Gracias.", region: "SPAIN", setting: `Spain setting for ${lessonDef.title}` },
      ],
    });
  }

  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-latam-${i + 1}`,
      title: `${lessonDef.title} - Mexico Scene ${i + 1}`,
      region: "LATAM",
      setting: `Mexico setting for ${lessonDef.title}`,
      lines: [
        { speaker: "María", text: lessonDef.vocabulary[i]?.exampleSentenceLatam || "Hola, ¿qué onda?", region: "LATAM", setting: `Mexico setting for ${lessonDef.title}` },
        { speaker: "Diego", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceLatam || "¡Qué tal!", region: "LATAM", setting: `Mexico setting for ${lessonDef.title}` },
        { speaker: "María", text: "Bien.", region: "LATAM", setting: `Mexico setting for ${lessonDef.title}` },
      ],
    });
  }

  const quiz: QuizQuestion[] = [
    {
      questionId: "q1",
      type: "multiple-choice",
      questionText: `What is the key difference between Spain and Latin America in this lesson?`,
      options: ["Grammar", "Vocabulary choice", "Regional expressions", "All of the above"],
      correctAnswer: "Regional expressions",
      explanation: "This lesson focuses on regional variations in how people naturally speak in Spain vs Latin America.",
    },
    {
      questionId: "q2",
      type: "multiple-choice",
      questionText: `In Spain, what is used to address a group of friends informally?`,
      options: ["Ustedes", "Vosotros", "Ellos", "Vosotras"],
      correctAnswer: "Vosotros",
      explanation: "In Spain, 'vosotros' is the informal plural 'you' for groups of friends.",
    },
    {
      questionId: "q3",
      type: "multiple-choice",
      questionText: `What does '¿Qué onda?' mean in Mexican Spanish?`,
      options: ["What's wrong?", "What's up?", "Where are you?", "What time is it?"],
      correctAnswer: "What's up?",
      explanation: "'¿Qué onda?' is a very casual Mexican greeting meaning 'What's up?' or 'How's it going?'",
    },
    {
      questionId: "q4",
      type: "multiple-choice",
      questionText: `Why is learning regional expressions important?`,
      options: ["They're fun", "Native speakers use them constantly", "It's required", "All of the above"],
      correctAnswer: "Native speakers use them constantly",
      explanation: "Native speakers use regional expressions naturally, so learning them helps you communicate authentically.",
    },
    {
      questionId: "q5",
      type: "multiple-choice",
      questionText: `What's a key element of A2 lessons?`,
      options: ["Only grammar", "Only vocabulary", "Regional variants + vocabulary + grammar", "Only dialogues"],
      correctAnswer: "Regional variants + vocabulary + grammar",
      explanation: "A2 lessons integrate regional Spanish variants, practical vocabulary, and grammar structures.",
    },
  ];

  const flashcards: FlashcardItem[] = lessonDef.vocabulary.map((v, idx) => ({
    id: `fc-${slug}-${idx + 1}`,
    frontSpain: v.spainVariant,
    frontLatam: v.latamVariant,
    backEnglish: v.english,
    variantDifferenceNote: v.spainVariant !== v.latamVariant ? `Spain: "${v.spainVariant}", Mexico: "${v.latamVariant}"` : "Same in both regions",
    exampleSentenceSpain: v.exampleSentenceSpain || "",
    exampleSentenceLatam: v.exampleSentenceLatam || "",
    partOfSpeech: v.partOfSpeech,
  }));

  return {
    id: `lesson-${slug}`,
    slug,
    title: lessonDef.title,
    description: lessonDef.description,
    level: "A2",
    difficulty: "ELEMENTARY",
    order,
    imageUrl: null,
    durationMinutes: 25,
    isPublished: true,
    vocabularyTable: lessonDef.vocabulary,
    grammarSection,
    dialogues,
    quiz,
    flashcards,
    vocabularyJson: lessonDef.vocabulary.map((v) => ({
      word: v.word,
      translation: `${v.spainVariant} / ${v.latamVariant}`,
      partOfSpeech: v.partOfSpeech,
      example: v.exampleSentenceSpain,
    })),
    grammarJson: grammarSection.map((g) => ({
      title: g.title,
      content: `${g.spainContent} | ${g.latamContent}`,
    })),
    content: `# ${lessonDef.title}\n\n${lessonDef.description}\n\nThis A2 lesson covers regional vocabulary, grammar patterns, and natural speech. Study the vocabulary, learn the dialogues, and master the quiz.`,
  };
}

export function generateA2Lessons(): LessonData[] {
  const a2Slugs = Object.keys(A2_LESSONS);
  return a2Slugs.map((slug) => buildA2Lesson(slug));
}