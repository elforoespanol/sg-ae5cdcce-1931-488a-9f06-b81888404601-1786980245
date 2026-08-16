import type { LessonData } from "./lessons-data";

const LESSON_A1_01: LessonData = {
  id: "a1-01",
  slug: "greetings-introductions",
  title: "Greetings & Introductions",
  description: "Learn how to greet people and introduce yourself in formal and informal contexts across Spain and Latin America.",
  level: "A1",
  difficulty: "Beginner",
  order: 1,
  imageUrl: null,
  durationMinutes: 45,
  isPublished: true,
  vocabularyTable: [
    { word: "hola", spainVariant: "hola", latamVariant: "hola", phoneticSpain: "OH-lah", phoneticLatam: "OH-lah", english: "Hello", partOfSpeech: "interjection", exampleSentenceSpain: "¡Hola! ¿Cómo estás?", exampleSentenceLatam: "¡Hola! ¿Cómo estás?" },
    { word: "buenos días", spainVariant: "buenos días", latamVariant: "buenos días", phoneticSpain: "bweh-nos DEE-ahs", phoneticLatam: "bweh-nos DEE-ahs", english: "Good morning", partOfSpeech: "phrase", exampleSentenceSpain: "Buenos días, María.", exampleSentenceLatam: "Buenos días, Carlos." },
    { word: "buenas tardes", spainVariant: "buenas tardes", latamVariant: "buenas tardes", phoneticSpain: "bweh-nahs TAR-dehs", phoneticLatam: "bweh-nahs TAR-dehs", english: "Good afternoon", partOfSpeech: "phrase", exampleSentenceSpain: "Buenas tardes, señor.", exampleSentenceLatam: "Buenas tardes, jefe." },
    { word: "buenas noches", spainVariant: "buenas noches", latamVariant: "buenas noches", phoneticSpain: "bweh-nahs NOH-ches", phoneticLatam: "bweh-nahs NOH-ches", english: "Good evening/night", partOfSpeech: "phrase", exampleSentenceSpain: "Buenas noches a todos.", exampleSentenceLatam: "Buenas noches, familia." },
    { word: "adiós", spainVariant: "adiós", latamVariant: "adiós", phoneticSpain: "ah-dee-OHS", phoneticLatam: "ah-dee-OHS", english: "Goodbye", partOfSpeech: "interjection", exampleSentenceSpain: "¡Adiós! Hasta mañana.", exampleSentenceLatam: "¡Adiós! Nos vemos." },
    { word: "me llamo", spainVariant: "me llamo", latamVariant: "me llamo", phoneticSpain: "meh YAH-moh", phoneticLatam: "meh YAH-moh", english: "My name is", partOfSpeech: "phrase", exampleSentenceSpain: "Me llamo Juan.", exampleSentenceLatam: "Me llamo Rosa." },
    { word: "mucho gusto", spainVariant: "mucho gusto", latamVariant: "mucho gusto", phoneticSpain: "MOO-choh GOOS-toh", phoneticLatam: "MOO-choh GOOS-toh", english: "Nice to meet you", partOfSpeech: "phrase", exampleSentenceSpain: "Mucho gusto, encantado.", exampleSentenceLatam: "Mucho gusto, es un placer." },
    { word: "¿cómo te llamas?", spainVariant: "¿cómo te llamas?", latamVariant: "¿cómo te llamas?", phoneticSpain: "KOH-moh teh YAH-mahs", phoneticLatam: "KOH-moh teh YAH-mahs", english: "What is your name?", partOfSpeech: "question", exampleSentenceSpain: "¿Cómo te llamas, amigo?", exampleSentenceLatam: "¿Cómo te llamas, hermano?" },
    { word: "¿cómo estás?", spainVariant: "¿cómo estás?", latamVariant: "¿cómo estás?", phoneticSpain: "KOH-moh es-TAHS", phoneticLatam: "KOH-moh es-TAHS", english: "How are you?", partOfSpeech: "question", exampleSentenceSpain: "¿Cómo estás hoy?", exampleSentenceLatam: "¿Cómo estás, compa?" },
    { word: "estoy bien", spainVariant: "estoy bien", latamVariant: "estoy bien", phoneticSpain: "es-TOY bee-EHN", phoneticLatam: "es-TOY bee-EHN", english: "I am well", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy bien, gracias.", exampleSentenceLatam: "Estoy bien, ¿y tú?" },
    { word: "gracias", spainVariant: "gracias", latamVariant: "gracias", phoneticSpain: "GRAH-see-ahs", phoneticLatam: "GRAH-see-ahs", english: "Thank you", partOfSpeech: "interjection", exampleSentenceSpain: "Gracias por tu ayuda.", exampleSentenceLatam: "Gracias, muy amable." },
    { word: "de nada", spainVariant: "de nada", latamVariant: "de nada", phoneticSpain: "deh NAH-dah", phoneticLatam: "deh NAH-dah", english: "You're welcome", partOfSpeech: "phrase", exampleSentenceSpain: "De nada, no es nada.", exampleSentenceLatam: "De nada, para eso estamos." },
    { word: "por favor", spainVariant: "por favor", latamVariant: "por favor", phoneticSpain: "por fah-VOR", phoneticLatam: "por fah-VOR", english: "Please", partOfSpeech: "phrase", exampleSentenceSpain: "Café, por favor.", exampleSentenceLatam: "Agua, por favor." },
    { word: "disculpa", spainVariant: "disculpa", latamVariant: "disculpa", phoneticSpain: "dees-KOOL-pah", phoneticLatam: "dees-KOOL-pah", english: "Excuse me/Sorry", partOfSpeech: "interjection", exampleSentenceSpain: "Disculpa, ¿me ayudas?", exampleSentenceLatam: "Disculpa, no entendí." },
    { word: "señor/señora", spainVariant: "señor/señora", latamVariant: "señor/señora", phoneticSpain: "sen-YOR/sen-YOH-rah", phoneticLatam: "sen-YOR/sen-YOH-rah", english: "Mr./Mrs.", partOfSpeech: "noun", exampleSentenceSpain: "El señor García es profesor.", exampleSentenceLatam: "La señora López es muy amable." },
    { word: "joven", spainVariant: "joven", latamVariant: "joven", phoneticSpain: "HOH-ven", phoneticLatam: "HOH-ven", english: "Young person", partOfSpeech: "noun", exampleSentenceSpain: "El joven trabaja aquí.", exampleSentenceLatam: "La joven es estudiante." },
    { word: "amigo/amiga", spainVariant: "amigo/amiga", latamVariant: "amigo/amiga", phoneticSpain: "ah-MEE-goh/ah-MEE-gah", phoneticLatam: "ah-MEE-goh/ah-MEE-gah", english: "Friend", partOfSpeech: "noun", exampleSentenceSpain: "Mi amigo es de Madrid.", exampleSentenceLatam: "Mi amiga es de México." },
    { word: "encantado", spainVariant: "encantado/encantada", latamVariant: "encantado/encantada", phoneticSpain: "en-kahn-TAH-doh", phoneticLatam: "en-kahn-TAH-doh", english: "Delighted/Charmed", partOfSpeech: "adjective", exampleSentenceSpain: "Encantado de conocerte.", exampleSentenceLatam: "Encantada, mucho gusto." },
    { word: "¿de dónde eres?", spainVariant: "¿de dónde eres?", latamVariant: "¿de dónde eres?", phoneticSpain: "deh DOHN-deh EH-res", phoneticLatam: "deh DOHN-deh EH-res", english: "Where are you from?", partOfSpeech: "question", exampleSentenceSpain: "¿De dónde eres, Juan?", exampleSentenceLatam: "¿De dónde eres, hermano?" },
    { word: "soy de", spainVariant: "soy de", latamVariant: "soy de", phoneticSpain: "soy deh", phoneticLatam: "soy deh", english: "I am from", partOfSpeech: "phrase", exampleSentenceSpain: "Soy de Barcelona.", exampleSentenceLatam: "Soy de Guadalajara." },
  ],
  grammarSection: [
    {
      title: "Present Tense of 'Ser' (To Be)",
      spainContent: "Ser conjugates: yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos son. Used for identity, origin, profession. Example: 'Yo soy Juan, soy de España.'",
      latamContent: "Ser conjugates: yo soy, tú eres, él/ella es, nosotros somos, ustedes son, ellos son. LATAM uses 'ustedes' instead of 'vosotros'. Example: 'Yo soy Carlos, soy de México.'",
      note: "Vosotros (Spain only) for informal plural; LATAM uses ustedes for all formal/informal plural.",
    },
    {
      title: "Asking & Answering Questions",
      spainContent: "Question words: ¿Cómo? (How?), ¿Quién? (Who?), ¿De dónde? (Where from?). Invert subject-verb: ¿Cómo estás? ¿De dónde eres?",
      latamContent: "Same question words and inversion rules apply. Example: ¿Cómo estás? ¿De dónde eres? Both regions follow identical syntax.",
      note: "Both regions use identical question formation; no regional variation in basic interrogatives.",
    },
  ],
  dialogues: [
    {
      id: "a1-01-dial-01",
      title: "Madrid Metro - Morning Encounter",
      region: "SPAIN",
      setting: "Madrid Metro platform, morning",
      lines: [
        { speaker: "Miguel", text: "¡Hola! Buenos días.", region: "SPAIN", setting: "metro" },
        { speaker: "Ana", text: "Buenos días, ¿cómo estás?", region: "SPAIN", setting: "metro" },
        { speaker: "Miguel", text: "Estoy bien, gracias. Me llamo Miguel, ¿y tú?", region: "SPAIN", setting: "metro" },
        { speaker: "Ana", text: "Me llamo Ana. Mucho gusto, Miguel.", region: "SPAIN", setting: "metro" },
        { speaker: "Miguel", text: "Mucho gusto, Ana. ¿De dónde eres?", region: "SPAIN", setting: "metro" },
        { speaker: "Ana", text: "Soy de Barcelona, ¿y tú?", region: "SPAIN", setting: "metro" },
      ],
    },
    {
      id: "a1-01-dial-02",
      title: "Barcelona Café - Casual Meeting",
      region: "SPAIN",
      setting: "Café in Barcelona",
      lines: [
        { speaker: "Pedro", text: "¡Hola, joven! ¿Cómo te llamas?", region: "SPAIN", setting: "café" },
        { speaker: "Laura", text: "Me llamo Laura. ¿Y tú, señor?", region: "SPAIN", setting: "café" },
        { speaker: "Pedro", text: "Me llamo Pedro. Encantado, Laura.", region: "SPAIN", setting: "café" },
        { speaker: "Laura", text: "Encantada, Pedro. ¿Cómo estás?", region: "SPAIN", setting: "café" },
        { speaker: "Pedro", text: "Estoy bien. Gracias por preguntar.", region: "SPAIN", setting: "café" },
        { speaker: "Laura", text: "De nada. ¡Hasta luego!", region: "SPAIN", setting: "café" },
      ],
    },
    {
      id: "a1-01-dial-03",
      title: "Valencia Office - Formal Introduction",
      region: "SPAIN",
      setting: "Office, Valencia",
      lines: [
        { speaker: "Señora Gómez", text: "Buenos días, señor. Me llamo Rosa Gómez.", region: "SPAIN", setting: "office" },
        { speaker: "Señor López", text: "Buenos días, señora. Me llamo Carlos López. Mucho gusto.", region: "SPAIN", setting: "office" },
        { speaker: "Señora Gómez", text: "Mucho gusto, señor López. ¿Cómo estás?", region: "SPAIN", setting: "office" },
        { speaker: "Señor López", text: "Estoy bien, gracias. ¿De dónde eres?", region: "SPAIN", setting: "office" },
        { speaker: "Señora Gómez", text: "Soy de Valencia, ¿y tú?", region: "SPAIN", setting: "office" },
        { speaker: "Señor López", text: "Soy de Madrid. Encantado de conocerte.", region: "SPAIN", setting: "office" },
      ],
    },
    {
      id: "a1-01-dial-04",
      title: "Mexico City Street - Friendly Hello",
      region: "LATAM",
      setting: "Mexico City street, afternoon",
      lines: [
        { speaker: "Diego", text: "¡Hola! ¿Cómo estás?", region: "LATAM", setting: "street" },
        { speaker: "Sofia", text: "¡Hola, Diego! Estoy bien, ¿y tú?", region: "LATAM", setting: "street" },
        { speaker: "Diego", text: "Estoy muy bien. Me llamo Diego, ¿y tú?", region: "LATAM", setting: "street" },
        { speaker: "Sofia", text: "Me llamo Sofía. Mucho gusto.", region: "LATAM", setting: "street" },
        { speaker: "Diego", text: "Mucho gusto, Sofía. ¿De dónde eres?", region: "LATAM", setting: "street" },
        { speaker: "Sofia", text: "Soy de Guadalajara, ¿y tú?", region: "LATAM", setting: "street" },
      ],
    },
    {
      id: "a1-01-dial-05",
      title: "Buenos Aires Cafe - Meeting a Friend",
      region: "LATAM",
      setting: "Café in Buenos Aires",
      lines: [
        { speaker: "Martín", text: "¡Hola, hermano! ¿Cómo estás?", region: "LATAM", setting: "café" },
        { speaker: "Lucía", text: "¡Hola, Martín! Estoy bien. Me llamo Lucía.", region: "LATAM", setting: "café" },
        { speaker: "Martín", text: "Encantado, Lucía. Yo soy Martín.", region: "LATAM", setting: "café" },
        { speaker: "Lucía", text: "Mucho gusto. ¿De dónde eres?", region: "LATAM", setting: "café" },
        { speaker: "Martín", text: "Soy de Buenos Aires, ¿y tú?", region: "LATAM", setting: "café" },
        { speaker: "Lucía", text: "Soy de Lima. ¡Mucho gusto, Martín!", region: "LATAM", setting: "café" },
      ],
    },
    {
      id: "a1-01-dial-06",
      title: "Colombia University - Student Introduction",
      region: "LATAM",
      setting: "University classroom, Bogotá",
      lines: [
        { speaker: "Profesor García", text: "Buenos días, estudiantes. Me llamo García.", region: "LATAM", setting: "classroom" },
        { speaker: "Javier", text: "Buenos días, profesor. Me llamo Javier, ¿cómo estás?", region: "LATAM", setting: "classroom" },
        { speaker: "Profesor García", text: "Estoy bien, gracias. ¿De dónde eres, Javier?", region: "LATAM", setting: "classroom" },
        { speaker: "Javier", text: "Soy de Bogotá. Mucho gusto, profesor.", region: "LATAM", setting: "classroom" },
        { speaker: "Mariana", text: "Hola, me llamo Mariana. ¿Cómo estás, profesor?", region: "LATAM", setting: "classroom" },
        { speaker: "Profesor García", text: "Encantado, Mariana. Bienvenida a la clase.", region: "LATAM", setting: "classroom" },
      ],
    },
  ],
  quiz: [
    {
      questionId: "a1-01-q01",
      type: "multiple-choice",
      questionText: "What is the correct greeting for morning in Spanish?",
      options: ["Buenas noches", "Buenos días", "Buenas tardes", "¡Adiós!"],
      correctAnswer: "Buenos días",
      explanation: "Buenos días means 'Good morning' and is used from sunrise until midday.",
    },
    {
      questionId: "a1-01-q02",
      type: "multiple-choice",
      questionText: "How do you say 'Nice to meet you' in Spanish?",
      options: ["¿Cómo estás?", "Me llamo", "Mucho gusto", "Adiós"],
      correctAnswer: "Mucho gusto",
      explanation: "Mucho gusto literally means 'Much pleasure' and is the standard greeting when meeting someone new.",
    },
    {
      questionId: "a1-01-q03",
      type: "multiple-choice",
      questionText: "Which word means 'Hello'?",
      options: ["Adiós", "Hola", "Gracias", "Disculpa"],
      correctAnswer: "Hola",
      explanation: "Hola is the basic Spanish greeting equivalent to 'Hello' in English.",
    },
    {
      questionId: "a1-01-q04",
      type: "multiple-choice",
      questionText: "What does 'De nada' mean?",
      options: ["Thank you", "You're welcome", "Hello", "Goodbye"],
      correctAnswer: "You're welcome",
      explanation: "'De nada' (literally 'of nothing') is the Spanish response to 'Thank you'.",
    },
    {
      questionId: "a1-01-q05",
      type: "multiple-choice",
      questionText: "Which phrase means 'I am from'?",
      options: ["Me llamo", "Soy de", "¿De dónde?", "¿Cómo estás?"],
      correctAnswer: "Soy de",
      explanation: "'Soy de' literally means 'I am from' and is used to state your origin or hometown.",
    },
  ],
  flashcards: [
    { id: "a1-01-fc01", frontSpain: "hola", frontLatam: "hola", backEnglish: "Hello", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "¡Hola! ¿Cómo estás?", exampleSentenceLatam: "¡Hola, compa!", partOfSpeech: "interjection" },
    { id: "a1-01-fc02", frontSpain: "buenos días", frontLatam: "buenos días", backEnglish: "Good morning", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Buenos días, María.", exampleSentenceLatam: "Buenos días, amigo.", partOfSpeech: "phrase" },
    { id: "a1-01-fc03", frontSpain: "buenas tardes", frontLatam: "buenas tardes", backEnglish: "Good afternoon", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Buenas tardes, señor.", exampleSentenceLatam: "Buenas tardes, jefe.", partOfSpeech: "phrase" },
    { id: "a1-01-fc04", frontSpain: "buenas noches", frontLatam: "buenas noches", backEnglish: "Good evening/night", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Buenas noches a todos.", exampleSentenceLatam: "Buenas noches, familia.", partOfSpeech: "phrase" },
    { id: "a1-01-fc05", frontSpain: "adiós", frontLatam: "adiós", backEnglish: "Goodbye", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "¡Adiós! Hasta luego.", exampleSentenceLatam: "¡Adiós, nos vemos!", partOfSpeech: "interjection" },
    { id: "a1-01-fc06", frontSpain: "me llamo", frontLatam: "me llamo", backEnglish: "My name is", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Me llamo Juan.", exampleSentenceLatam: "Me llamo Rosa.", partOfSpeech: "phrase" },
    { id: "a1-01-fc07", frontSpain: "mucho gusto", frontLatam: "mucho gusto", backEnglish: "Nice to meet you", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Mucho gusto, encantado.", exampleSentenceLatam: "Mucho gusto, amigo.", partOfSpeech: "phrase" },
    { id: "a1-01-fc08", frontSpain: "¿cómo estás?", frontLatam: "¿cómo estás?", backEnglish: "How are you?", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "¿Cómo estás hoy?", exampleSentenceLatam: "¿Cómo estás, hermano?", partOfSpeech: "question" },
    { id: "a1-01-fc09", frontSpain: "estoy bien", frontLatam: "estoy bien", backEnglish: "I am well", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Estoy bien, gracias.", exampleSentenceLatam: "Estoy bien, ¿y tú?", partOfSpeech: "phrase" },
    { id: "a1-01-fc10", frontSpain: "gracias", frontLatam: "gracias", backEnglish: "Thank you", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Gracias por tu ayuda.", exampleSentenceLatam: "Gracias, muy amable.", partOfSpeech: "interjection" },
    { id: "a1-01-fc11", frontSpain: "de nada", frontLatam: "de nada", backEnglish: "You're welcome", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "De nada, no es nada.", exampleSentenceLatam: "De nada, para eso estamos.", partOfSpeech: "phrase" },
    { id: "a1-01-fc12", frontSpain: "por favor", frontLatam: "por favor", backEnglish: "Please", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Café, por favor.", exampleSentenceLatam: "Agua, por favor.", partOfSpeech: "phrase" },
    { id: "a1-01-fc13", frontSpain: "disculpa", frontLatam: "disculpa", backEnglish: "Excuse me/Sorry", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Disculpa, ¿me ayudas?", exampleSentenceLatam: "Disculpa, ¿me prestas esto?", partOfSpeech: "interjection" },
    { id: "a1-01-fc14", frontSpain: "señor/señora", frontLatam: "señor/señora", backEnglish: "Mr./Mrs.", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "El señor García es profesor.", exampleSentenceLatam: "La señora López es doctora.", partOfSpeech: "noun" },
    { id: "a1-01-fc15", frontSpain: "amigo/amiga", frontLatam: "amigo/amiga", backEnglish: "Friend", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Mi amigo es de Madrid.", exampleSentenceLatam: "Mi amiga es de Guadalajara.", partOfSpeech: "noun" },
    { id: "a1-01-fc16", frontSpain: "encantado", frontLatam: "encantado", backEnglish: "Delighted/Charmed", variantDifferenceNote: "Identical across regions; feminine: encantada", exampleSentenceSpain: "Encantado de conocerte.", exampleSentenceLatam: "Encantada, mucho gusto.", partOfSpeech: "adjective" },
    { id: "a1-01-fc17", frontSpain: "¿de dónde eres?", frontLatam: "¿de dónde eres?", backEnglish: "Where are you from?", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "¿De dónde eres, Juan?", exampleSentenceLatam: "¿De dónde eres, hermano?", partOfSpeech: "question" },
    { id: "a1-01-fc18", frontSpain: "soy de", frontLatam: "soy de", backEnglish: "I am from", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Soy de Barcelona.", exampleSentenceLatam: "Soy de Guadalajara.", partOfSpeech: "phrase" },
    { id: "a1-01-fc19", frontSpain: "yo soy", frontLatam: "yo soy", backEnglish: "I am", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "Yo soy Maria.", exampleSentenceLatam: "Yo soy Carlos.", partOfSpeech: "verb" },
    { id: "a1-01-fc20", frontSpain: "eres", frontLatam: "eres", backEnglish: "You are (informal)", variantDifferenceNote: "Identical across regions", exampleSentenceSpain: "¿De dónde eres?", exampleSentenceLatam: "¿Quién eres tú?", partOfSpeech: "verb" },
  ],
  vocabularyJson: [],
  grammarJson: [],
  content: "A1.01 Greetings & Introductions",
};

const LESSON_A1_02: LessonData = { id: "a1-02", slug: "basic-numbers", title: "Basic Numbers 0-20", description: "Learn numbers from zero to twenty in Spanish and basic counting.", level: "A1", difficulty: "Beginner", order: 2, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [{ word: "cero", spainVariant: "cero", latamVariant: "cero", phoneticSpain: "SER-oh", phoneticLatam: "SER-oh", english: "Zero", partOfSpeech: "number", exampleSentenceSpain: "El número cero.", exampleSentenceLatam: "Cero errores." }, { word: "uno", spainVariant: "uno", latamVariant: "uno", phoneticSpain: "OO-noh", phoneticLatam: "OO-noh", english: "One", partOfSpeech: "number", exampleSentenceSpain: "Uno y uno son dos.", exampleSentenceLatam: "Tengo uno." }, { word: "dos", spainVariant: "dos", latamVariant: "dos", phoneticSpain: "dohs", phoneticLatam: "dohs", english: "Two", partOfSpeech: "number", exampleSentenceSpain: "Dos gatos.", exampleSentenceLatam: "Dos hermanos." }, { word: "tres", spainVariant: "tres", latamVariant: "tres", phoneticSpain: "trehs", phoneticLatam: "trehs", english: "Three", partOfSpeech: "number", exampleSentenceSpain: "Tres personas.", exampleSentenceLatam: "Tres amigos." }, { word: "cuatro", spainVariant: "cuatro", latamVariant: "cuatro", phoneticSpain: "KOO-ah-troh", phoneticLatam: "KOO-ah-troh", english: "Four", partOfSpeech: "number", exampleSentenceSpain: "Cuatro manzanas.", exampleSentenceLatam: "Cuatro libros." }, { word: "cinco", spainVariant: "cinco", latamVariant: "cinco", phoneticSpain: "SEEN-koh", phoneticLatam: "SEEN-koh", english: "Five", partOfSpeech: "number", exampleSentenceSpain: "Cinco dedos.", exampleSentenceLatam: "Cinco dólares." }, { word: "seis", spainVariant: "seis", latamVariant: "seis", phoneticSpain: "sayss", phoneticLatam: "sayss", english: "Six", partOfSpeech: "number", exampleSentenceSpain: "Seis horas.", exampleSentenceLatam: "Seis minutos." }, { word: "siete", spainVariant: "siete", latamVariant: "siete", phoneticSpain: "see-EH-teh", phoneticLatam: "see-EH-teh", english: "Seven", partOfSpeech: "number", exampleSentenceSpain: "Siete días.", exampleSentenceLatam: "Siete semanas." }, { word: "ocho", spainVariant: "ocho", latamVariant: "ocho", phoneticSpain: "OH-choh", phoneticLatam: "OH-choh", english: "Eight", partOfSpeech: "number", exampleSentenceSpain: "Ocho patas.", exampleSentenceLatam: "Ocho años." }, { word: "nueve", spainVariant: "nueve", latamVariant: "nueve", phoneticSpain: "noo-EH-veh", phoneticLatam: "noo-EH-veh", english: "Nine", partOfSpeech: "number", exampleSentenceSpain: "Nueve gatos.", exampleSentenceLatam: "Nueve meses." }, { word: "diez", spainVariant: "diez", latamVariant: "diez", phoneticSpain: "dee-EHS", phoneticLatam: "dee-EHS", english: "Ten", partOfSpeech: "number", exampleSentenceSpain: "Diez euros.", exampleSentenceLatam: "Diez pesos." }, { word: "once", spainVariant: "once", latamVariant: "once", phoneticSpain: "OHN-seh", phoneticLatam: "OHN-seh", english: "Eleven", partOfSpeech: "number", exampleSentenceSpain: "Once personas.", exampleSentenceLatam: "Once horas." }, { word: "doce", spainVariant: "doce", latamVariant: "doce", phoneticSpain: "DOH-seh", phoneticLatam: "DOH-seh", english: "Twelve", partOfSpeech: "number", exampleSentenceSpain: "Doce meses.", exampleSentenceLatam: "Doce punto." }, { word: "trece", spainVariant: "trece", latamVariant: "trece", phoneticSpain: "TREH-seh", phoneticLatam: "TREH-seh", english: "Thirteen", partOfSpeech: "number", exampleSentenceSpain: "Trece años.", exampleSentenceLatam: "Trece pesos." }, { word: "catorce", spainVariant: "catorce", latamVariant: "catorce", phoneticSpain: "kah-TOR-seh", phoneticLatam: "kah-TOR-seh", english: "Fourteen", partOfSpeech: "number", exampleSentenceSpain: "Catorce días.", exampleSentenceLatam: "Catorce libros." }, { word: "quince", spainVariant: "quince", latamVariant: "quince", phoneticSpain: "KEEN-seh", phoneticLatam: "KEEN-seh", english: "Fifteen", partOfSpeech: "number", exampleSentenceSpain: "Quince minutos.", exampleSentenceLatam: "Quince dólares." }, { word: "dieciséis", spainVariant: "dieciséis", latamVariant: "dieciséis", phoneticSpain: "dee-eh-see-SAYS", phoneticLatam: "dee-eh-see-SAYS", english: "Sixteen", partOfSpeech: "number", exampleSentenceSpain: "Dieciséis años.", exampleSentenceLatam: "Dieciséis horas." }, { word: "diecisiete", spainVariant: "diecisiete", latamVariant: "diecisiete", phoneticSpain: "dee-eh-see-see-EH-teh", phoneticLatam: "dee-eh-see-see-EH-teh", english: "Seventeen", partOfSpeech: "number", exampleSentenceSpain: "Diecisiete personas.", exampleSentenceLatam: "Diecisiete años." }, { word: "dieciocho", spainVariant: "dieciocho", latamVariant: "dieciocho", phoneticSpain: "dee-eh-see-OH-choh", phoneticLatam: "dee-eh-see-OH-choh", english: "Eighteen", partOfSpeech: "number", exampleSentenceSpain: "Dieciocho meses.", exampleSentenceLatam: "Dieciocho semanas." }, { word: "diecinueve", spainVariant: "diecinueve", latamVariant: "diecinueve", phoneticSpain: "dee-eh-see-noo-EH-veh", phoneticLatam: "dee-eh-see-noo-EH-veh", english: "Nineteen", partOfSpeech: "number", exampleSentenceSpain: "Diecinueve gatos.", exampleSentenceLatam: "Diecinueve años." }, { word: "veinte", spainVariant: "veinte", latamVariant: "veinte", phoneticSpain: "VAYN-teh", phoneticLatam: "VAYN-teh", english: "Twenty", partOfSpeech: "number", exampleSentenceSpain: "Veinte euros.", exampleSentenceLatam: "Veinte pesos." }], grammarSection: [{ title: "Counting in Spanish", spainContent: "Spanish numbers 0-20 have unique names. Repeat: cero, uno, dos, tres... veinte. Used for ages, prices, time.", latamContent: "Same numbering system across LATAM. Pronunciation identical. Regional variation minimal.", note: "No significant regional variation in basic number vocabulary." }, { title: "Gender Agreement with Numbers", spainContent: "Only 'uno' changes with gender: un libro (masculine), una casa (feminine). All other numbers stay same. Examples: dos gatos, tres niñas.", latamContent: "Identical gender agreement rules across LATAM. Uno becomes 'un' or 'una' depending on noun gender.", note: "Both regions follow identical number-gender agreement patterns." }], dialogues: [{ id: "a1-02-dial-01", title: "Barcelona Shop - Counting Items", region: "SPAIN", setting: "Small shop, Barcelona", lines: [{ speaker: "Vendedor", text: "¿Cuántas manzanas quieres?", region: "SPAIN", setting: "shop" }, { speaker: "Cliente", text: "Quiero cinco manzanas, por favor.", region: "SPAIN", setting: "shop" }, { speaker: "Vendedor", text: "Cinco manzanas. ¿Algo más?", region: "SPAIN", setting: "shop" }, { speaker: "Cliente", text: "Sí, dos panes y tres quesos.", region: "SPAIN", setting: "shop" }, { speaker: "Vendedor", text: "Dos panes y tres quesos. Son diez euros.", region: "SPAIN", setting: "shop" }, { speaker: "Cliente", text: "Perfecto. Gracias.", region: "SPAIN", setting: "shop" }] }, { id: "a1-02-dial-02", title: "Madrid School - Teacher Counting", region: "SPAIN", setting: "School classroom, Madrid", lines: [{ speaker: "Profesor", text: "¿Cuántos estudiantes hay hoy?", region: "SPAIN", setting: "classroom" }, { speaker: "Alumna", text: "Hay quince estudiantes, profesor.", region: "SPAIN", setting: "classroom" }, { speaker: "Profesor", text: "Quince, bien. ¿Faltan algunos?", region: "SPAIN", setting: "classroom" }, { speaker: "Alumna", text: "Faltan tres estudiantes.", region: "SPAIN", setting: "classroom" }, { speaker: "Profesor", text: "Entonces son dieciocho hoy.", region: "SPAIN", setting: "classroom" }, { speaker: "Alumna", text: "Exacto, profesor.", region: "SPAIN", setting: "classroom" }] }, { id: "a1-02-dial-03", title: "Seville Market - Price Negotiation", region: "SPAIN", setting: "Market stall, Seville", lines: [{ speaker: "Vendedor", text: "Tres euros por manzana. ¿Cuántas quieres?", region: "SPAIN", setting: "market" }, { speaker: "Comprador", text: "Quiero seis manzanas.", region: "SPAIN", setting: "market" }, { speaker: "Vendedor", text: "Son dieciocho euros.", region: "SPAIN", setting: "market" }, { speaker: "Comprador", text: "¿Dieciocho? ¿Nada más?", region: "SPAIN", setting: "market" }, { speaker: "Vendedor", text: "Sí, dieciocho euros. ¡Buen precio!", region: "SPAIN", setting: "market" }, { speaker: "Comprador", text: "Está bien. Gracias.", region: "SPAIN", setting: "market" }] }, { id: "a1-02-dial-04", title: "Mexico City Market - Fruit Shopping", region: "LATAM", setting: "Market, Mexico City", lines: [{ speaker: "Vendedor", text: "¿Cuántos plátanos quieres?", region: "LATAM", setting: "market" }, { speaker: "Cliente", text: "Quiero ocho plátanos, por favor.", region: "LATAM", setting: "market" }, { speaker: "Vendedor", text: "Ocho plátanos. ¿Algo más?", region: "LATAM", setting: "market" }, { speaker: "Cliente", text: "Sí, cinco naranjas y dos piñas.", region: "LATAM", setting: "market" }, { speaker: "Vendedor", text: "Eso es quince pesos total.", region: "LATAM", setting: "market" }, { speaker: "Cliente", text: "Perfecto, gracias.", region: "LATAM", setting: "market" }] }, { id: "a1-02-dial-05", title: "Argentina Restaurant - Counting Guests", region: "LATAM", setting: "Restaurant, Buenos Aires", lines: [{ speaker: "Mesero", text: "¿Cuántas personas somos?", region: "LATAM", setting: "restaurant" }, { speaker: "Cliente", text: "Somos seis personas.", region: "LATAM", setting: "restaurant" }, { speaker: "Mesero", text: "Seis personas. Una mesa grande entonces.", region: "LATAM", setting: "restaurant" }, { speaker: "Cliente", text: "Sí, por favor. ¿Tienes mesa para seis?", region: "LATAM", setting: "restaurant" }, { speaker: "Mesero", text: "Sí, aquí hay una mesa para seis.", region: "LATAM", setting: "restaurant" }, { speaker: "Cliente", text: "Gracias, muy amable.", region: "LATAM", setting: "restaurant" }] }, { id: "a1-02-dial-06", title: "Colombia Bank - Account Numbers", region: "LATAM", setting: "Bank, Bogotá", lines: [{ speaker: "Banquero", text: "¿Cuál es tu cuenta?", region: "LATAM", setting: "bank" }, { speaker: "Cliente", text: "Ciento veinte y tres.", region: "LATAM", setting: "bank" }, { speaker: "Banquero", text: "¿Ciento veinte y tres? Repite, por favor.", region: "LATAM", setting: "bank" }, { speaker: "Cliente", text: "Uno, dos, tres. Número ciento veintitrés.", region: "LATAM", setting: "bank" }, { speaker: "Banquero", text: "Perfecto. Ciento veintitrés.", region: "LATAM", setting: "bank" }, { speaker: "Cliente", text: "Exacto. Gracias.", region: "LATAM", setting: "bank" }] }], quiz: [{ questionId: "a1-02-q01", type: "multiple-choice", questionText: "What is the number 5 in Spanish?", options: ["Cuatro", "Cinco", "Seis", "Tres"], correctAnswer: "Cinco", explanation: "Cinco is the Spanish word for the number 5." }, { questionId: "a1-02-q02", type: "multiple-choice", questionText: "How many are 'dos' plus 'tres'?", options: ["Cinco", "Cuatro", "Tres", "Seis"], correctAnswer: "Cinco", explanation: "Dos (2) + tres (3) = cinco (5)." }, { questionId: "a1-02-q03", type: "multiple-choice", questionText: "What is the number 15 in Spanish?", options: ["Catorce", "Dieciséis", "Quince", "Trece"], correctAnswer: "Quince", explanation: "Quince is the Spanish word for 15." }, { questionId: "a1-02-q04", type: "multiple-choice", questionText: "What is 'veinte' in English?", options: ["Ten", "Fifteen", "Twenty", "Twelve"], correctAnswer: "Twenty", explanation: "Veinte means 20 in English." }, { questionId: "a1-02-q05", type: "multiple-choice", questionText: "How many are 'diez' plus 'diez'?", options: ["Quince", "Veinte", "Dieciséis", "Dieciocho"], correctAnswer: "Veinte", explanation: "Diez (10) + diez (10) = veinte (20)." }], flashcards: [{ id: "a1-02-fc01", frontSpain: "cero", frontLatam: "cero", backEnglish: "Zero", variantDifferenceNote: "Identical", exampleSentenceSpain: "Cero errores.", exampleSentenceLatam: "Cero pesos.", partOfSpeech: "number" }, { id: "a1-02-fc02", frontSpain: "uno", frontLatam: "uno", backEnglish: "One", variantDifferenceNote: "Identical", exampleSentenceSpain: "Uno y uno son dos.", exampleSentenceLatam: "Tengo uno.", partOfSpeech: "number" }, { id: "a1-02-fc03", frontSpain: "dos", frontLatam: "dos", backEnglish: "Two", variantDifferenceNote: "Identical", exampleSentenceSpain: "Dos gatos.", exampleSentenceLatam: "Dos hermanos.", partOfSpeech: "number" }, { id: "a1-02-fc04", frontSpain: "tres", frontLatam: "tres", backEnglish: "Three", variantDifferenceNote: "Identical", exampleSentenceSpain: "Tres personas.", exampleSentenceLatam: "Tres amigos.", partOfSpeech: "number" }, { id: "a1-02-fc05", frontSpain: "cuatro", frontLatam: "cuatro", backEnglish: "Four", variantDifferenceNote: "Identical", exampleSentenceSpain: "Cuatro manzanas.", exampleSentenceLatam: "Cuatro libros.", partOfSpeech: "number" }, { id: "a1-02-fc06", frontSpain: "cinco", frontLatam: "cinco", backEnglish: "Five", variantDifferenceNote: "Identical", exampleSentenceSpain: "Cinco dedos.", exampleSentenceLatam: "Cinco dólares.", partOfSpeech: "number" }, { id: "a1-02-fc07", frontSpain: "seis", frontLatam: "seis", backEnglish: "Six", variantDifferenceNote: "Identical", exampleSentenceSpain: "Seis horas.", exampleSentenceLatam: "Seis minutos.", partOfSpeech: "number" }, { id: "a1-02-fc08", frontSpain: "siete", frontLatam: "siete", backEnglish: "Seven", variantDifferenceNote: "Identical", exampleSentenceSpain: "Siete días.", exampleSentenceLatam: "Siete semanas.", partOfSpeech: "number" }, { id: "a1-02-fc09", frontSpain: "ocho", frontLatam: "ocho", backEnglish: "Eight", variantDifferenceNote: "Identical", exampleSentenceSpain: "Ocho patas.", exampleSentenceLatam: "Ocho años.", partOfSpeech: "number" }, { id: "a1-02-fc10", frontSpain: "nueve", frontLatam: "nueve", backEnglish: "Nine", variantDifferenceNote: "Identical", exampleSentenceSpain: "Nueve gatos.", exampleSentenceLatam: "Nueve meses.", partOfSpeech: "number" }, { id: "a1-02-fc11", frontSpain: "diez", frontLatam: "diez", backEnglish: "Ten", variantDifferenceNote: "Identical", exampleSentenceSpain: "Diez euros.", exampleSentenceLatam: "Diez pesos.", partOfSpeech: "number" }, { id: "a1-02-fc12", frontSpain: "once", frontLatam: "once", backEnglish: "Eleven", variantDifferenceNote: "Identical", exampleSentenceSpain: "Once personas.", exampleSentenceLatam: "Once horas.", partOfSpeech: "number" }, { id: "a1-02-fc13", frontSpain: "doce", frontLatam: "doce", backEnglish: "Twelve", variantDifferenceNote: "Identical", exampleSentenceSpain: "Doce meses.", exampleSentenceLatam: "Doce puntos.", partOfSpeech: "number" }, { id: "a1-02-fc14", frontSpain: "trece", frontLatam: "trece", backEnglish: "Thirteen", variantDifferenceNote: "Identical", exampleSentenceSpain: "Trece años.", exampleSentenceLatam: "Trece pesos.", partOfSpeech: "number" }, { id: "a1-02-fc15", frontSpain: "catorce", frontLatam: "catorce", backEnglish: "Fourteen", variantDifferenceNote: "Identical", exampleSentenceSpain: "Catorce días.", exampleSentenceLatam: "Catorce libros.", partOfSpeech: "number" }, { id: "a1-02-fc16", frontSpain: "quince", frontLatam: "quince", backEnglish: "Fifteen", variantDifferenceNote: "Identical", exampleSentenceSpain: "Quince minutos.", exampleSentenceLatam: "Quince dólares.", partOfSpeech: "number" }, { id: "a1-02-fc17", frontSpain: "dieciséis", frontLatam: "dieciséis", backEnglish: "Sixteen", variantDifferenceNote: "Identical", exampleSentenceSpain: "Dieciséis años.", exampleSentenceLatam: "Dieciséis horas.", partOfSpeech: "number" }, { id: "a1-02-fc18", frontSpain: "diecisiete", frontLatam: "diecisiete", backEnglish: "Seventeen", variantDifferenceNote: "Identical", exampleSentenceSpain: "Diecisiete personas.", exampleSentenceLatam: "Diecisiete años.", partOfSpeech: "number" }, { id: "a1-02-fc19", frontSpain: "dieciocho", frontLatam: "dieciocho", backEnglish: "Eighteen", variantDifferenceNote: "Identical", exampleSentenceSpain: "Dieciocho meses.", exampleSentenceLatam: "Dieciocho semanas.", partOfSpeech: "number" }, { id: "a1-02-fc20", frontSpain: "veinte", frontLatam: "veinte", backEnglish: "Twenty", variantDifferenceNote: "Identical", exampleSentenceSpain: "Veinte euros.", exampleSentenceLatam: "Veinte pesos.", partOfSpeech: "number" }], vocabularyJson: [], grammarJson: [], content: "A1.02 Basic Numbers 0-20" };

const LESSON_A1_03 = { id: "a1-03", slug: "basic-phrases", title: "Basic Phrases & Politeness", description: "Essential polite expressions and common phrases for daily interaction.", level: "A1", difficulty: "Beginner", order: 3, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.03" };

const LESSON_A1_04 = { id: "a1-04", slug: "family-members", title: "Family Members", description: "Learn vocabulary for family relationships in Spanish.", level: "A1", difficulty: "Beginner", order: 4, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.04" };

const LESSON_A1_05 = { id: "a1-05", slug: "colors-basic", title: "Colors & Basic Descriptions", description: "Learn colors and simple descriptive adjectives.", level: "A1", difficulty: "Beginner", order: 5, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.05" };

const LESSON_A1_06 = { id: "a1-06", slug: "body-parts", title: "Body Parts", description: "Vocabulary for parts of the human body.", level: "A1", difficulty: "Beginner", order: 6, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.06" };

const LESSON_A1_07 = { id: "a1-07", slug: "food-drinks", title: "Food & Drinks", description: "Common food and beverage vocabulary.", level: "A1", difficulty: "Beginner", order: 7, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.07" };

const LESSON_A1_08 = { id: "a1-08", slug: "clothing", title: "Clothing & Accessories", description: "Vocabulary for clothes and accessories.", level: "A1", difficulty: "Beginner", order: 8, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.08" };

const LESSON_A1_09 = { id: "a1-09", slug: "places-locations", title: "Places & Locations", description: "Basic vocabulary for places and directions.", level: "A1", difficulty: "Beginner", order: 9, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.09" };

const LESSON_A1_10 = { id: "a1-10", slug: "daily-activities", title: "Daily Activities", description: "Common verbs and daily routine vocabulary.", level: "A1", difficulty: "Beginner", order: 10, imageUrl: null, durationMinutes: 45, isPublished: true, vocabularyTable: [], grammarSection: [], dialogues: [], quiz: [], flashcards: [], vocabularyJson: [], grammarJson: [], content: "A1.10" };

export const A1_LESSONS = [
  LESSON_A1_01,
  LESSON_A1_02,
  LESSON_A1_03,
  LESSON_A1_04,
  LESSON_A1_05,
  LESSON_A1_06,
  LESSON_A1_07,
  LESSON_A1_08,
  LESSON_A1_09,
  LESSON_A1_10,
];