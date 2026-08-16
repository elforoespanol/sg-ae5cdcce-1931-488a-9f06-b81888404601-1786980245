import type {
  LessonData,
  RegionalVocabItem,
  GrammarItem,
  DialogueScenario,
  QuizQuestion,
  FlashcardItem,
} from "./lessons-data";

// ============================================================
// LESSON B2.01: Everyday Slang
// ============================================================

const b2_01_vocab: RegionalVocabItem[] = [
  { word: "Guy/Dude", spainVariant: "Tío", latamVariant: "Güey", phoneticSpain: "[ˈti.o]", phoneticLatam: "[ˈɣwej]", english: "Guy, dude, mate", partOfSpeech: "noun (masc.)" },
  { word: "Work/Job", spainVariant: "Curro", latamVariant: "Chamba", phoneticSpain: "[ˈku.ro]", phoneticLatam: "[ˈtʃam.ba]", english: "Work, job, hustle", partOfSpeech: "noun" },
  { word: "Money", spainVariant: "Pasta", latamVariant: "Lana", phoneticSpain: "[ˈpas.ta]", phoneticLatam: "[ˈla.na]", english: "Money, cash, dough", partOfSpeech: "noun" },
  { word: "Cool/Awesome", spainVariant: "Guay", latamVariant: "Chido", phoneticSpain: "[ɡˈwaj]", phoneticLatam: "[ˈtʃi.ðo]", english: "Cool, awesome, nice", partOfSpeech: "adjective" },
  { word: "Kid/Child", spainVariant: "Chaval", latamVariant: "Chamaco", phoneticSpain: "[tʃa.ˈβal]", phoneticLatam: "[tʃa.ˈma.ko]", english: "Kid, youngster", partOfSpeech: "noun" },
  { word: "Beer", spainVariant: "Caña", latamVariant: "Cheve", phoneticSpain: "[ˈka.ɲa]", phoneticLatam: "[ˈtʃe.βe]", english: "Beer (slang)", partOfSpeech: "noun" },
  { word: "Cigarette", spainVariant: "Pitillo", latamVariant: "Cigarro", phoneticSpain: "[pi.ˈti.ʝo]", phoneticLatam: "[si.ˈɣa.ro]", english: "Cigarette", partOfSpeech: "noun" },
  { word: "To leave", spainVariant: "Pirarse", latamVariant: "Largarse", phoneticSpain: "[pi.ˈɾar.se]", phoneticLatam: "[lar.ˈɣar.se]", english: "To leave, to split", partOfSpeech: "verb (reflexive)" },
  { word: "Crazy", spainVariant: "Chalado", latamVariant: "Chiflado", phoneticSpain: "[tʃa.ˈla.ðo]", phoneticLatam: "[tʃi.ˈfla.ðo]", english: "Crazy, nuts", partOfSpeech: "adjective" },
  { word: "To eat", spainVariant: "Mamporrar", latamVariant: "Chingar", phoneticSpain: "[mam.po.ˈɾar]", phoneticLatam: "[tʃin.ˈɣar]", english: "To eat greedily / to mess with", partOfSpeech: "verb" },
  { word: "Party", spainVariant: "Juerga", latamVariant: "Peda", phoneticSpain: "[ˈxweɾ.ɣa]", phoneticLatam: "[ˈpe.ða]", english: "Party, rager", partOfSpeech: "noun" },
  { word: "To sleep", spainVariant: "Sobarse", latamVariant: "Rajar", phoneticSpain: "[so.ˈβar.se]", phoneticLatam: "[ra.ˈxar]", english: "To sleep / to bail out", partOfSpeech: "verb (reflexive)" },
  { word: "Mess/Problem", spainVariant: "Follón", latamVariant: "Bronca", phoneticSpain: "[fo.ˈʝon]", phoneticLatam: "[ˈbɾoŋ.ka]", english: "Mess, problem, hassle", partOfSpeech: "noun" },
  { word: "To chat", spainVariant: "Cotillear", latamVariant: "Chismear", phoneticSpain: "[ko.ti.ˈʎear]", phoneticLatam: "[tʃis.ˈmear]", english: "To gossip, to chat", partOfSpeech: "verb" },
  { word: "Clothes", spainVariant: "Ropa", latamVariant: "Pinta", phoneticSpain: "[ˈro.pa]", phoneticLatam: "[ˈpin.ta]", english: "Clothes, outfit", partOfSpeech: "noun" },
  { word: "To annoy", spainVariant: "Tochar", latamVariant: "Hartar", phoneticSpain: "[ˈto.tʃar]", phoneticLatam: "[ar.ˈtar]", english: "To annoy, to bother", partOfSpeech: "verb" },
  { word: "Boring", spainVariant: "Soso", latamVariant: "Naco", phoneticSpain: "[ˈso.so]", phoneticLatam: "[ˈna.ko]", english: "Boring, dull / tacky", partOfSpeech: "adjective" },
  { word: "To understand", spainVariant: "Cachar", latamVariant: "Captar", phoneticSpain: "[ka.ˈtʃar]", phoneticLatam: "[kap.ˈtar]", english: "To get it, to catch on", partOfSpeech: "verb" },
  { word: "Alone", spainVariant: "Solo", latamVariant: "Solo", phoneticSpain: "[ˈso.lo]", phoneticLatam: "[ˈso.lo]", english: "Alone, by oneself", partOfSpeech: "adjective" },
  { word: "Girlfriend", spainVariant: "Novia", latamVariant: "Morra", phoneticSpain: "[ˈno.βja]", phoneticLatam: "[ˈmo.ra]", english: "Girlfriend", partOfSpeech: "noun" },
];

const b2_01_grammar: GrammarItem[] = [
  {
    title: "Diminutives and Affectionate Suffixes",
    spainContent: "In Spain, '-illo/-illa' is common: 'cervecilla' for a small beer. The suffix '-ín/-ina' appears in northern regions. These soften requests and show camaraderie among friends.",
    latamContent: "In Mexico, '-ito/-ita' dominates: 'cervecita' for a small beer. The double diminutive '-itito' adds extra affection: 'ahoritita' (right now, very soon). These are essential for polite social interaction.",
    note: "Spain tends toward '-illo/-in' while Mexico heavily favors '-ito/-ita'. Using the wrong suffix sounds foreign but not offensive.",
  },
  {
    title: "The Verb 'Quedar'",
    spainContent: "'Quedar' in Spain often means 'to meet up': '¿Quedamos esta tarde?' (Shall we meet this afternoon?). It can also mean 'to agree on': 'Hemos quedado en las cinco.'",
    latamContent: "In Mexico, 'quedar' means 'to be located/left over': '¿Dónde queda el banco?' (Where is the bank?). For meeting up, Mexicans use 'verse': '¿Nos vemos hoy?'",
    note: "This is a high-frequency verb with completely different primary meanings. Context is key.",
  },
];

const b2_01_dialogues: DialogueScenario[] = [
  {
    id: "b2-01-sp-1",
    title: "At a Madrid Tapas Bar",
    region: "SPAIN",
    setting: "Evening at a crowded tapas bar in La Latina, Madrid",
    lines: [
      { speaker: "Pablo", text: "¡Tío, qué pinta tiene esa caña! ¿Me la pasas?", region: "SPAIN", setting: "Madrid tapas bar" },
      { speaker: "Lucía", text: "Toma, pero no te piras luego sin pagar tu parte del curro.", region: "SPAIN", setting: "Madrid tapas bar" },
      { speaker: "Pablo", text: "¿Me tomas por un chalado? Claro que pago. ¡Qué guay este sitio!", region: "SPAIN", setting: "Madrid tapas bar" },
    ],
  },
  {
    id: "b2-01-sp-2",
    title: "Complaining About Work",
    region: "SPAIN",
    setting: "Coffee break at an office in Barcelona",
    lines: [
      { speaker: "Marcos", text: "Este curro me está tocando las narices, tío. No aguanto más.", region: "SPAIN", setting: "Barcelona office" },
      { speaker: "Elena", text: "Ya lo sé, es un follón. Pero piensa en la pasta del finde.", region: "SPAIN", setting: "Barcelona office" },
      { speaker: "Marcos", text: "Tienes razón. Vamos a sobar un rato y luego seguimos.", region: "SPAIN", setting: "Barcelona office" },
    ],
  },
  {
    id: "b2-01-sp-3",
    title: "Weekend Plans",
    region: "SPAIN",
    setting: "WhatsApp voice messages between friends in Seville",
    lines: [
      { speaker: "Ana", text: "¿Hay juerga este sábado? Llevo toda la semana esperando.", region: "SPAIN", setting: "Seville WhatsApp" },
      { speaker: "Carlos", text: "Claro, chaval. Trae a tu novia y unos pitillos. Va a ser guay.", region: "SPAIN", setting: "Seville WhatsApp" },
      { speaker: "Ana", text: "¡Genial! No falta ni una. Hasta luego, crack.", region: "SPAIN", setting: "Seville WhatsApp" },
    ],
  },
  {
    id: "b2-01-la-1",
    title: "At a Mexico City Taquería",
    region: "LATAM",
    setting: "Late night at a street taquería in Roma Norte, CDMX",
    lines: [
      { speaker: "Miguel", text: "¡Güey, estas tacos están bien chidos! ¿Me pasas la salsa?", region: "LATAM", setting: "CDMX taquería" },
      { speaker: "Sofía", text: "Toma, pero no te chingues toda la lana en cheves, ¿eh?", region: "LATAM", setting: "CDMX taquería" },
      { speaker: "Miguel", text: "¿Crees que soy chamaco? Tranqui, traigo para la peda.", region: "LATAM", setting: "CDMX taquería" },
    ],
  },
  {
    id: "b2-01-la-2",
    title: "Talking About a Bad Day",
    region: "LATAM",
    setting: "Phone call between coworkers in Guadalajara",
    lines: [
      { speaker: "Diego", text: "Esta chamba me tiene bien harto, güey. Es una bronca tras otra.", region: "LATAM", setting: "Guadalajara phone call" },
      { speaker: "Laura", text: "Ya cálmate. No te rajes, que mañana es día de pago.", region: "LATAM", setting: "Guadalajara phone call" },
      { speaker: "Diego", text: "Cierto. Mejor voy por unas cheves y dejo de chismear.", region: "LATAM", setting: "Guadalajara phone call" },
    ],
  },
  {
    id: "b2-01-la-3",
    title: "Making Plans",
    region: "LATAM",
    setting: "Group chat among university friends in Monterrey",
    lines: [
      { speaker: "Valeria", text: "¿Hay peda el finde? Traigo ganas de algo chido.", region: "LATAM", setting: "Monterrey group chat" },
      { speaker: "Jorge", text: "Claro, morra. Pasa la dirección y llevo mi propia pinta.", region: "LATAM", setting: "Monterrey group chat" },
      { speaker: "Valeria", text: "¡Órale pues! No faltes, que va a estar buena la fiesta.", region: "LATAM", setting: "Monterrey group chat" },
    ],
  },
];

const b2_01_quiz: QuizQuestion[] = [
  {
    questionId: "b2-01-q1",
    type: "multiple-choice",
    questionText: "In Spain, what does 'tío' mean in casual conversation?",
    options: ["Uncle only", "Dude, mate, guy", "Old man", "Boss"],
    correctAnswer: "Dude, mate, guy",
    explanation: "'Tío' in Peninsular Spanish is extremely common slang for 'dude' or 'mate', used among friends regardless of gender.",
  },
  {
    questionId: "b2-01-q2",
    type: "multiple-choice",
    questionText: "What is the Mexican equivalent of Spanish 'pasta' (money)?",
    options: ["Lana", "Chamba", "Cheve", "Güey"],
    correctAnswer: "Lana",
    explanation: "'Lana' (literally 'wool') is Mexican slang for money, just as 'pasta' is used in Spain.",
  },
  {
    questionId: "b2-01-q3",
    type: "multiple-choice",
    questionText: "If someone in Madrid says 'no te piras', they mean:",
    options: ["Don't steal", "Don't leave/bail", "Don't fall", "Don't get angry"],
    correctAnswer: "Don't leave/bail",
    explanation: "'Pirarse' in Spain means 'to leave' or 'to bail out' — similar to 'largarse' in LATAM.",
  },
  {
    questionId: "b2-01-q4",
    type: "multiple-choice",
    questionText: "What does 'chido' mean in Mexican Spanish?",
    options: ["Bad", "Cool/awesome", "Food", "Sleepy"],
    correctAnswer: "Cool/awesome",
    explanation: "'Chido' is quintessential Mexican slang for 'cool', 'awesome', or 'nice'.",
  },
  {
    questionId: "b2-01-q5",
    type: "multiple-choice",
    questionText: "In Mexico, 'chamba' refers to:",
    options: ["A dance", "Work/job", "A type of food", "A vehicle"],
    correctAnswer: "Work/job",
    explanation: "'Chamba' is Mexican slang for 'work' or 'job', equivalent to Spain's 'curro'.",
  },
];

const b2_01_flashcards: FlashcardItem[] = [
  { id: "b2-01-fc1", frontSpain: "Tío", frontLatam: "Güey", backEnglish: "Dude, guy, mate", variantDifferenceNote: "Spain uses 'tío' (also 'tía' for women); Mexico uses 'güey' (very informal, can be friendly or rude depending on tone).", exampleSentenceSpain: "¿Qué pasa, tío? ¿Todo bien?", exampleSentenceLatam: "¿Qué onda, güey? ¿Cómo estás?", partOfSpeech: "noun" },
  { id: "b2-01-fc2", frontSpain: "Curro", frontLatam: "Chamba", backEnglish: "Work, job", variantDifferenceNote: "'Curro' is very colloquial in Spain; 'chamba' is ubiquitous in Mexico across all social classes.", exampleSentenceSpain: "Tengo mucho curro esta semana.", exampleSentenceLatam: "Conseguí una buena chamba en el centro.", partOfSpeech: "noun" },
  { id: "b2-01-fc3", frontSpain: "Pasta", frontLatam: "Lana", backEnglish: "Money, cash", variantDifferenceNote: "'Pasta' in Spain; 'lana' (wool) in Mexico. Both are metaphorical slang.", exampleSentenceSpain: "No tengo ni pasta para el metro.", exampleSentenceLatam: "¿Me prestas un poco de lana?", partOfSpeech: "noun" },
  { id: "b2-01-fc4", frontSpain: "Guay", frontLatam: "Chido", backEnglish: "Cool, awesome", variantDifferenceNote: "'Guay' is universal in Spain; 'chido' is specifically Mexican and carries strong cultural identity.", exampleSentenceSpain: "¡Qué guay tu nueva moto!", exampleSentenceLatam: "Está bien chido tu coche nuevo.", partOfSpeech: "adjective" },
  { id: "b2-01-fc5", frontSpain: "Chaval", frontLatam: "Chamaco", backEnglish: "Kid, youngster", variantDifferenceNote: "'Chaval' is common in all of Spain; 'chamaco' is Mexican, though 'chavo' is also used in some regions.", exampleSentenceSpain: "Ese chaval es muy listo.", exampleSentenceLatam: "El chamaco ya aprendió a leer.", partOfSpeech: "noun" },
  { id: "b2-01-fc6", frontSpain: "Caña", frontLatam: "Cheve", backEnglish: "Beer (slang)", variantDifferenceNote: "'Caña' in Spain specifically means a small draft beer; 'cheve' is Mexican slang for any beer.", exampleSentenceSpain: "Vamos a tomar una caña después del curro.", exampleSentenceLatam: "¿Te invito una cheve?", partOfSpeech: "noun" },
  { id: "b2-01-fc7", frontSpain: "Pitillo", frontLatam: "Cigarro", backEnglish: "Cigarette", variantDifferenceNote: "'Pitillo' is very colloquial in Spain; 'cigarro' is the standard term in Mexico but used informally.", exampleSentenceSpain: "Se ha fumado todo el paquete de pitillos.", exampleSentenceLatam: "Fuma un cigarro después de comer.", partOfSpeech: "noun" },
  { id: "b2-01-fc8", frontSpain: "Pirarse", frontLatam: "Largarse", backEnglish: "To leave, to bail", variantDifferenceNote: "'Pirarse' is very informal Spain slang; 'largarse' is understood everywhere but especially common in Mexico.", exampleSentenceSpain: "Me piro, que llego tarde.", exampleSentenceLatam: "Me largo antes de que empiece la bronca.", partOfSpeech: "verb" },
  { id: "b2-01-fc9", frontSpain: "Chalado", frontLatam: "Chiflado", backEnglish: "Crazy, nuts", variantDifferenceNote: "'Chalado' is affectionate in Spain; 'chiflado' is similarly playful in Mexico.", exampleSentenceSpain: "Estás chalado, tío.", exampleSentenceLatam: "Ese viejito está bien chiflado.", partOfSpeech: "adjective" },
  { id: "b2-01-fc10", frontSpain: "Juerga", frontLatam: "Peda", backEnglish: "Party, rager", variantDifferenceNote: "'Juerga' in Spain implies a wild, all-night party; 'peda' in Mexico specifically means a drinking party.", exampleSentenceSpain: "Ana organizó una juerga increíble.", exampleSentenceLatam: "Hubo una peda épica en su casa.", partOfSpeech: "noun" },
  { id: "b2-01-fc11", frontSpain: "Sobarse", frontLatam: "Rajar", backEnglish: "To sleep / to bail", variantDifferenceNote: "'Sobarse' means 'to sleep' in Spain slang; 'rajar' in Mexico means 'to leave/bail out'.", exampleSentenceSpain: "Voy a sobar un rato, estoy reventado.", exampleSentenceLatam: "No te rajes, falta poco.", partOfSpeech: "verb" },
  { id: "b2-01-fc12", frontSpain: "Follón", frontLatam: "Bronca", backEnglish: "Mess, problem, hassle", variantDifferenceNote: "'Follón' is very colloquial in Spain; 'bronca' in Mexico can mean 'problem' or 'scolding'.", exampleSentenceSpain: "¿Por qué montas tanto follón?", exampleSentenceLatam: "Se armó una bronca en el bar.", partOfSpeech: "noun" },
  { id: "b2-01-fc13", frontSpain: "Cotillear", frontLatam: "Chismear", backEnglish: "To gossip, to chat", variantDifferenceNote: "'Cotillear' is used across Spain; 'chismear' is standard in Mexico and much of LATAM.", exampleSentenceSpain: "Me encanta cotillear con las vecinas.", exampleSentenceLatam: "Ella siempre está chismeando de todos.", partOfSpeech: "verb" },
  { id: "b2-01-fc14", frontSpain: "Ropa", frontLatam: "Pinta", backEnglish: "Clothes, outfit", variantDifferenceNote: "'Pinta' in Mexico means 'outfit/look' in slang; 'ropa' is the standard term everywhere.", exampleSentenceSpain: "Lleva ropa elegante a la entrevista.", exampleSentenceLatam: "Trae tu mejor pinta para la fiesta.", partOfSpeech: "noun" },
  { id: "b2-01-fc15", frontSpain: "Tochar", frontLatam: "Hartar", backEnglish: "To annoy, to bother", variantDifferenceNote: "'Tochar' is very informal Spain slang; 'hartar' in Mexico means 'to annoy' or 'to bore'.", exampleSentenceSpain: "Me toca mucho ese ruido constante.", exampleSentenceLatam: "Me harta su actitud presumida.", partOfSpeech: "verb" },
  { id: "b2-01-fc16", frontSpain: "Soso", frontLatam: "Naco", backEnglish: "Boring, dull / tacky", variantDifferenceNote: "'Soso' means 'bland/boring' in Spain; 'naco' in Mexico means 'tacky/uncultured' and can be offensive.", exampleSentenceSpain: "La película estuvo muy sosa.", exampleSentenceLatam: "No seas naco, respeta las normas.", partOfSpeech: "adjective" },
  { id: "b2-01-fc17", frontSpain: "Cachar", frontLatam: "Captar", backEnglish: "To get it, to understand", variantDifferenceNote: "'Cachar' is very colloquial in Spain; 'captar' is more standard but used informally in Mexico.", exampleSentenceSpain: "¿Cachas lo que te digo?", exampleSentenceLatam: "¿Captas la onda del jefe?", partOfSpeech: "verb" },
  { id: "b2-01-fc18", frontSpain: "Novia", frontLatam: "Morra", backEnglish: "Girlfriend", variantDifferenceNote: "'Novia' is standard everywhere; 'morra' is very informal Mexican slang, also used for 'girl' generally.", exampleSentenceSpain: "Mi novia estudia medicina.", exampleSentenceLatam: "Voy a ver a mi morra más tarde.", partOfSpeech: "noun" },
  { id: "b2-01-fc19", frontSpain: "Quedar", frontLatam: "Verse", backEnglish: "To meet up", variantDifferenceNote: "In Spain 'quedar' means 'to meet'; in Mexico 'quedar' means 'to be located', so 'verse' is used for meeting.", exampleSentenceSpain: "¿Quedamos mañana por la tarde?", exampleSentenceLatam: "¿Nos vemos mañana en el café?", partOfSpeech: "verb" },
  { id: "b2-01-fc20", frontSpain: "Cañón", frontLatam: "Cañón", backEnglish: "Great, cool / difficult", variantDifferenceNote: "Interestingly, 'cañón' in Mexico means 'great/cool' while in Spain it can mean 'intense/difficult'.", exampleSentenceSpain: "El examen estuvo cañón, casi no paso.", exampleSentenceLatam: "¡Qué cañón tu nuevo apartamento!", partOfSpeech: "adjective" },
];

export const LESSON_B2_01: LessonData = {
  id: "b2-01",
  title: "Everyday Slang",
  slug: "everyday-slang",
  description: "Master casual street lexicon across both variants of Spanish. Learn how Spaniards and Mexicans talk about money, work, friends, and fun using authentic slang.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 1,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_01_vocab,
  grammarSection: b2_01_grammar,
  dialogues: b2_01_dialogues,
  quiz: b2_01_quiz,
  flashcards: b2_01_flashcards,
  vocabularyJson: b2_01_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_01_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Everyday slang lesson covering Spain vs LATAM casual vocabulary.",
};

// ============================================================
// LESSON B2.02: Stronger Slang
// ============================================================

const b2_02_vocab: RegionalVocabItem[] = [
  { word: "Damn!", spainVariant: "Joder", latamVariant: "No manches", phoneticSpain: "[xo.ˈðeɾ]", phoneticLatam: "[no ˈman.tʃes]", english: "Damn! / No way! / You're kidding!", partOfSpeech: "exclamation" },
  { word: "Damn it!", spainVariant: "Hostia", latamVariant: "Chingado", phoneticSpain: "[ˈos.tja]", phoneticLatam: "[tʃin.ˈɣa.ðo]", english: "Damn it! / Hell!", partOfSpeech: "exclamation/noun" },
  { word: "Bastard/Jerk", spainVariant: "Cabrón", latamVariant: "Cabrón", phoneticSpain: "[ka.ˈβɾon]", phoneticLatam: "[ka.ˈβɾon]", english: "Bastard / jerk / dude (context-dependent)", partOfSpeech: "noun/adjective" },
  { word: "To screw up", spainVariant: "Joder la marrana", latamVariant: "Chingar la madre", phoneticSpain: "[xo.ˈðeɾ la ma.ˈra.ɲa]", phoneticLatam: "[tʃin.ˈɣar la ˈma.ðɾe]", english: "To really screw up / mess things up", partOfSpeech: "expression" },
  { word: "What the hell", spainVariant: "Qué cojones", latamVariant: "Qué chingados", phoneticSpain: "[ke ko.ˈxo.nes]", phoneticLatam: "[ke tʃin.ˈɣa.ðos]", english: "What the hell / What the f***", partOfSpeech: "expression" },
  { word: "Shut up", spainVariant: "Cierra el pico", latamVariant: "Cállate el hocico", phoneticSpain: "[ˈθje.ɾa el ˈpi.ko]", phoneticLatam: "[ˈka.ʝa.te el o.ˈsi.ko]", english: "Shut up (strong)", partOfSpeech: "command" },
  { word: "Crap", spainVariant: "Mierda", latamVariant: "Madres", phoneticSpain: "[ˈmjeɾ.ða]", phoneticLatam: "[ˈma.ðɾes]", english: "Crap / shit / stuff", partOfSpeech: "noun" },
  { word: "To bother", spainVariant: "Tochar los cojones", latamVariant: "Hartar la madre", phoneticSpain: "[ˈto.tʃar los ko.ˈxo.nes]", phoneticLatam: "[ar.ˈtar la ˈma.ðɾe]", english: "To really annoy someone", partOfSpeech: "expression" },
  { word: "Go to hell", spainVariant: "Vete a la mierda", latamVariant: "Vete a la chingada", phoneticSpain: "[ˈbe.te a la ˈmjeɾ.ða]", phoneticLatam: "[ˈbe.te a la tʃin.ˈɣa.ða]", english: "Go to hell / f*** off", partOfSpeech: "expression" },
  { word: "F***ing", spainVariant: "Jodido", latamVariant: "Pinche", phoneticSpain: "[xo.ˈði.ðo]", phoneticLatam: "[ˈpin.tʃe]", english: "F***ing / damn / annoying", partOfSpeech: "adjective" },
  { word: "Idiot", spainVariant: "Gilipollas", latamVariant: "Pendejo", phoneticSpain: "[xi.li.ˈpo.ʝas]", phoneticLatam: "[pen.ˈde.xo]", english: "Idiot / dumbass", partOfSpeech: "noun" },
  { word: "To steal", spainVariant: "Mangar", latamVariant: "Chorear", phoneticSpain: "[maŋ.ˈɣaɾ]", phoneticLatam: "[tʃo.ˈɾeaɾ]", english: "To steal, to swipe", partOfSpeech: "verb" },
  { word: "Drunk", spainVariant: "Borracho", latamVariant: "Pedo", phoneticSpain: "[bo.ˈra.tʃo]", phoneticLatam: "[ˈpe.ðo]", english: "Drunk / wasted", partOfSpeech: "adjective/noun" },
  { word: "To get drunk", spainVariant: "Ponerse hasta el culo", latamVariant: "Ponerse hasta la madre", phoneticSpain: "[po.ˈneɾ.se ˈas.ta el ˈku.lo]", phoneticLatam: "[po.ˈneɾ.se ˈas.ta la ˈma.ðɾe]", english: "To get absolutely wasted", partOfSpeech: "expression" },
  { word: "Fight", spainVariant: "Bronca", latamVariant: "Pleito", phoneticSpain: "[ˈbɾoŋ.ka]", phoneticLatam: "[ˈplej.to]", english: "Fight, argument", partOfSpeech: "noun" },
  { word: "To cheat", spainVariant: "Engañar", latamVariant: "Poner los cuernos", phoneticSpain: "[en.ɣa.ˈɲaɾ]", phoneticLatam: "[po.ˈneɾ los ˈkweɾ.nos]", english: "To cheat (on someone)", partOfSpeech: "verb/expression" },
  { word: "Stupid thing", spainVariant: "Chorrada", latamVariant: "Pendejada", phoneticSpain: "[tʃo.ˈra.ða]", phoneticLatam: "[pen.de.ˈxa.ða]", english: "Stupid thing / nonsense", partOfSpeech: "noun" },
  { word: "To be fed up", spainVariant: "Estar hasta los huevos", latamVariant: "Estar hasta la madre", phoneticSpain: "[es.ˈtaɾ ˈas.ta los ˈwe.βos]", phoneticLatam: "[es.ˈtaɾ ˈas.ta la ˈma.ðɾe]", english: "To be completely fed up", partOfSpeech: "expression" },
  { word: "Broke", spainVariant: "A dos velas", latamVariant: "En la quiebra", phoneticSpain: "[a ðos ˈbe.las]", phoneticLatam: "[en la ˈkje.βɾa]", english: "Broke, penniless", partOfSpeech: "expression" },
  { word: "To die", spainVariant: "Palmarla", latamVariant: "Pelar la papa", phoneticSpain: "[pal.ˈmaɾ.la]", phoneticLatam: "[pe.ˈlaɾ la ˈpa.pa]", english: "To die (slang)", partOfSpeech: "expression" },
];

const b2_02_grammar: GrammarItem[] = [
  {
    title: "Profanity as Intensifiers",
    spainContent: "In Spain, religious and anatomical profanity ('hostia', 'cojones', 'joder') are used casually among friends as intensifiers. 'Joder, qué calor' is equivalent to 'damn, it's hot' and is not considered shocking in most contexts.",
    latamContent: "In Mexico, 'madre' profanity is the strongest category. 'No manches' is the polite substitute for 'no mames' (literally 'don't suck'). Using 'chingar' derivatives marks speech as very informal and can be offensive to strangers.",
    note: "These words are for passive comprehension only. Using them incorrectly can cause serious offense, especially with strangers or elders.",
  },
  {
    title: "Context Determines Offensiveness",
    spainContent: "'Cabrón' among close friends in Spain is almost affectionate: '¡Eres un cabrón!' means 'You're a bastard!' but said with a laugh. The same word to a stranger is fighting words.",
    latamContent: "'Cabrón' in Mexico is extremely context-dependent. Among friends it can mean 'dude' or 'tough guy', but said seriously it is highly offensive. Tone and relationship matter more than the word itself.",
    note: "NEVER use these terms with strangers, in professional settings, or with elders until you have deep cultural fluency.",
  },
];

const b2_02_dialogues: DialogueScenario[] = [
  {
    id: "b2-02-sp-1",
    title: "Reacting to Bad News",
    region: "SPAIN",
    setting: "Two friends at a bar in Valencia hearing about a mutual friend",
    lines: [
      { speaker: "Sergio", text: "¿Sabes que Carlos se ha puesto hasta el culo anoche y palmó la cartera?", region: "SPAIN", setting: "Valencia bar" },
      { speaker: "Irene", text: "¡Joder! Ese tío es un gilipollas. ¿Le mangaron la cartera o la perdió?", region: "SPAIN", setting: "Valencia bar" },
      { speaker: "Sergio", text: "Ni idea, pero vaya follón. Estará hasta los huevos cuando se entere.", region: "SPAIN", setting: "Valencia bar" },
    ],
  },
  {
    id: "b2-02-sp-2",
    title: "Friend Banter",
    region: "SPAIN",
    setting: "Flatshare kitchen in Madrid on a Sunday morning",
    lines: [
      { speaker: "Raúl", text: "¡Hostia, qué resaca! Me puse hasta el culo de cañas.", region: "SPAIN", setting: "Madrid flatshare" },
      { speaker: "Natalia", text: "Eres un cabrón, me dejaste sola en la juerga. ¿Qué cojones hiciste?", region: "SPAIN", setting: "Madrid flatshare" },
      { speaker: "Raúl", text: "Lo siento, tío. No era mi intención joder la marrana.", region: "SPAIN", setting: "Madrid flatshare" },
    ],
  },
  {
    id: "b2-02-sp-3",
    title: "Complaining About Work",
    region: "SPAIN",
    setting: "Lunch break conversation in a park in Barcelona",
    lines: [
      { speaker: "Andrés", text: "Mi jefe me toca los cojones todo el día con chorradas. Estoy a dos velas.", region: "SPAIN", setting: "Barcelona park" },
      { speaker: "Carmen", text: "Vete a la mierda de ese curro, hombre. No te merece.", region: "SPAIN", setting: "Barcelona park" },
      { speaker: "Andrés", text: "Ya lo sé, pero si palmara ahora, ¿cómo pagaría el piso?", region: "SPAIN", setting: "Barcelona park" },
    ],
  },
  {
    id: "b2-02-la-1",
    title: "Shocking News Reaction",
    region: "LATAM",
    setting: "Friends at a cantina in Guadalajara after work",
    lines: [
      { speaker: "Roberto", text: "¿Oíste que Pedro se puso hasta la madre y se llevó a la novia del jefe?", region: "LATAM", setting: "Guadalajara cantina" },
      { speaker: "Diana", text: "¡No manches! Ese güey es bien pendejo. ¿Ya lo corrieron?", region: "LATAM", setting: "Guadalajara cantina" },
      { speaker: "Roberto", text: "Ni idea, pero va a haber un pleito bien cabrón cuando se entere.", region: "LATAM", setting: "Guadalajara cantina" },
    ],
  },
  {
    id: "b2-02-la-2",
    title: "Morning After",
    region: "LATAM",
    setting: "Group breakfast at a diner in Mexico City",
    lines: [
      { speaker: "Fernando", text: "¡Ay, qué cruda! Anoche me puse hasta la madre de cheves.", region: "LATAM", setting: "CDMX diner" },
      { speaker: "Patricia", text: "Eres un cabrón, nos dejaste solos en la peda. ¿Qué chingados pasó?", region: "LATAM", setting: "CDMX diner" },
      { speaker: "Fernando", text: "Perdón, morra. No quería chingar la madre, pero me hartó la actitud de Luis.", region: "LATAM", setting: "CDMX diner" },
    ],
  },
  {
    id: "b2-02-la-3",
    title: "Work Frustration",
    region: "LATAM",
    setting: "Phone call between colleagues in Monterrey",
    lines: [
      { speaker: "Alejandro", text: "Este pinche jefe me harta la madre con sus pendejadas. Estoy hasta la madre.", region: "LATAM", setting: "Monterrey phone call" },
      { speaker: "Gabriela", text: "Cálmate, güey. No vayas a armar una bronca en la chamba.", region: "LATAM", setting: "Monterrey phone call" },
      { speaker: "Alejandro", text: "Tienes razón. Mejor me callo el hocico y aguanto.", region: "LATAM", setting: "Monterrey phone call" },
    ],
  },
];

const b2_02_quiz: QuizQuestion[] = [
  {
    questionId: "b2-02-q1",
    type: "multiple-choice",
    questionText: "What does 'no manches' mean in Mexican Spanish?",
    options: ["Don't stain", "No way! / You're kidding!", "Don't touch", "Be careful"],
    correctAnswer: "No way! / You're kidding!",
    explanation: "'No manches' is the polite form of 'no mames' and means 'no way!', 'you're kidding!', or 'damn!' depending on context.",
  },
  {
    questionId: "b2-02-q2",
    type: "multiple-choice",
    questionText: "In Spain, 'hostia' is most similar in usage to:",
    options: ["A blessing", "Damn it! / Hell!", "A type of bread", "Good morning"],
    correctAnswer: "Damn it! / Hell!",
    explanation: "'Hostia' (literally 'host/Eucharist') is one of the most common profanities in Spain, used similarly to 'damn it!' or 'hell!'",
  },
  {
    questionId: "b2-02-q3",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of Spanish 'jodido' (f***ing/annoying) is:",
    options: ["Pinche", "Chido", "Bueno", "Malo"],
    correctAnswer: "Pinche",
    explanation: "'Pinche' is the Mexican equivalent of 'f***ing' or 'damn' as an intensifier: 'este pinche tráfico' (this damn traffic).",
  },
  {
    questionId: "b2-02-q4",
    type: "multiple-choice",
    questionText: "In Spain, calling a close friend 'cabrón' is typically:",
    options: ["Always offensive", "Affectionate banter among friends", "Formal greeting", "Insulting to women"],
    correctAnswer: "Affectionate banter among friends",
    explanation: "Among close friends in Spain, 'cabrón' can be almost affectionate. Context and tone determine whether it's friendly or hostile.",
  },
  {
    questionId: "b2-02-q5",
    type: "multiple-choice",
    questionText: "What does 'estar hasta la madre' mean in Mexico?",
    options: ["To be very happy", "To be completely fed up", "To be drunk", "To be broke"],
    correctAnswer: "To be completely fed up",
    explanation: "'Estar hasta la madre' means to be completely fed up or at one's limit. It's similar to Spain's 'estar hasta los huevos'.",
  },
];

const b2_02_flashcards: FlashcardItem[] = [
  { id: "b2-02-fc1", frontSpain: "Joder", frontLatam: "No manches", backEnglish: "Damn! / No way!", variantDifferenceNote: "'Joder' is ubiquitous in Spain; 'no manches' is the polite Mexican form of 'no mames'.", exampleSentenceSpain: "¡Joder, qué calor hace hoy!", exampleSentenceLatam: "¡No manches, ganaste la lotería!", partOfSpeech: "exclamation" },
  { id: "b2-02-fc2", frontSpain: "Hostia", frontLatam: "Chingado", backEnglish: "Damn it! / Hell!", variantDifferenceNote: "'Hostia' is Spain's most versatile swear word; 'chingado' is Mexican and carries strong 'madre' profanity weight.", exampleSentenceSpain: "¡Hostia, se me olvidó el móvil!", exampleSentenceLatam: "Estoy bien chingado con este tráfico.", partOfSpeech: "exclamation" },
  { id: "b2-02-fc3", frontSpain: "Cabrón", frontLatam: "Cabrón", backEnglish: "Bastard / jerk / dude", variantDifferenceNote: "Same word, radically different connotations. In Spain it's milder among friends; in Mexico it's stronger but context-dependent.", exampleSentenceSpain: "¡Eres un cabrón, me has engañado!", exampleSentenceLatam: "Ese cabrón es bien listo para los negocios.", partOfSpeech: "noun" },
  { id: "b2-02-fc4", frontSpain: "Joder la marrana", frontLatam: "Chingar la madre", backEnglish: "To really screw up", variantDifferenceNote: "Both are vulgar expressions meaning 'to mess things up badly'. Use only with close friends.", exampleSentenceSpain: "Si llegas tarde otra vez, jodes la marrana.", exampleSentenceLatam: "No chingues la madre, llega a tiempo.", partOfSpeech: "expression" },
  { id: "b2-02-fc5", frontSpain: "Qué cojones", frontLatam: "Qué chingados", backEnglish: "What the hell / What the f***", variantDifferenceNote: "'Cojones' in Spain; 'chingados' in Mexico. Both express disbelief or frustration.", exampleSentenceSpain: "¿Qué cojones está pasando aquí?", exampleSentenceLatam: "¿Qué chingados quieres de mí?", partOfSpeech: "expression" },
  { id: "b2-02-fc6", frontSpain: "Cierra el pico", frontLatam: "Cállate el hocico", backEnglish: "Shut up (strong)", variantDifferenceNote: "Very rude ways to tell someone to be quiet. Use with extreme caution.", exampleSentenceSpain: "¡Cierra el pico de una vez!", exampleSentenceLatam: "Cállate el hocico, ya me hartaste.", partOfSpeech: "command" },
  { id: "b2-02-fc7", frontSpain: "Mierda", frontLatam: "Madres", backEnglish: "Crap / shit / stuff", variantDifferenceNote: "'Mierda' is standard across the Spanish-speaking world; 'madres' is Mexican slang for 'stuff' or 'nonsense'.", exampleSentenceSpain: "Me siento como la mierda hoy.", exampleSentenceLatam: "¿Qué madres estás haciendo?", partOfSpeech: "noun" },
  { id: "b2-02-fc8", frontSpain: "Tochar los cojones", frontLatam: "Hartar la madre", backEnglish: "To really annoy someone", variantDifferenceNote: "Both are vulgar expressions about being extremely annoying. Very informal.", exampleSentenceSpain: "Me toca los cojones cuando llega tarde.", exampleSentenceLatam: "Me harta la madre tu actitud.", partOfSpeech: "expression" },
  { id: "b2-02-fc9", frontSpain: "Vete a la mierda", frontLatam: "Vete a la chingada", backEnglish: "Go to hell / f*** off", variantDifferenceNote: "Extremely offensive. Never use with strangers or in formal contexts.", exampleSentenceSpain: "¡Vete a la mierda, no te aguanto más!", exampleSentenceLatam: "Vete a la chingada con tus problemas.", partOfSpeech: "expression" },
  { id: "b2-02-fc10", frontSpain: "Jodido", frontLatam: "Pinche", backEnglish: "F***ing / damn / annoying", variantDifferenceNote: "'Jodido' in Spain means 'difficult' or 'annoying'; 'pinche' in Mexico is a versatile intensifier.", exampleSentenceSpain: "Este problema está muy jodido.", exampleSentenceLatam: "Este pinche tráfico no se mueve.", partOfSpeech: "adjective" },
  { id: "b2-02-fc11", frontSpain: "Gilipollas", frontLatam: "Pendejo", backEnglish: "Idiot / dumbass", variantDifferenceNote: "'Gilipollas' is very common in Spain; 'pendejo' is Mexican. Both are insults but used among friends too.", exampleSentenceSpain: "No seas gilipollas, es obvio.", exampleSentenceLatam: "Eres un pendejo si crees eso.", partOfSpeech: "noun" },
  { id: "b2-02-fc12", frontSpain: "Mangar", frontLatam: "Chorear", backEnglish: "To steal, to swipe", variantDifferenceNote: "'Mangar' is very colloquial Spain slang; 'chorear' is Mexican slang for stealing.", exampleSentenceSpain: "Me han mangado la cartera en el metro.", exampleSentenceLatam: "Le chorearon el celular en el mercado.", partOfSpeech: "verb" },
  { id: "b2-02-fc13", frontSpain: "Borracho", frontLatam: "Pedo", backEnglish: "Drunk / wasted", variantDifferenceNote: "'Borracho' is standard everywhere; 'pedo' in Mexico means 'drunk' in slang ('estar pedo').", exampleSentenceSpain: "Se puso borracho en la fiesta.", exampleSentenceLatam: "Anoche terminé bien pedo.", partOfSpeech: "adjective" },
  { id: "b2-02-fc14", frontSpain: "Ponerse hasta el culo", frontLatam: "Ponerse hasta la madre", backEnglish: "To get absolutely wasted", variantDifferenceNote: "Both mean 'to get extremely drunk'. Very vulgar expressions.", exampleSentenceSpain: "Se puso hasta el culo de vino.", exampleSentenceLatam: "Se puso hasta la madre de tequila.", partOfSpeech: "expression" },
  { id: "b2-02-fc15", frontSpain: "Bronca", frontLatam: "Pleito", backEnglish: "Fight, argument", variantDifferenceNote: "'Bronca' in Spain means 'fight/trouble'; in Mexico it can also mean 'scolding'. 'Pleito' is Mexican for 'fight'.", exampleSentenceSpain: "Hubo una bronca en el bar anoche.", exampleSentenceLatam: "Se armó un pleito en la fiesta.", partOfSpeech: "noun" },
  { id: "b2-02-fc16", frontSpain: "Engañar", frontLatam: "Poner los cuernos", backEnglish: "To cheat (on someone)", variantDifferenceNote: "'Poner los cuernos' is the Mexican expression (literally 'to put horns on'); 'engañar' is more general.", exampleSentenceSpain: "Su novio la engañó con otra.", exampleSentenceLatam: "Le puso los cuernos con su mejor amiga.", partOfSpeech: "verb/expression" },
  { id: "b2-02-fc17", frontSpain: "Chorrada", frontLatam: "Pendejada", backEnglish: "Stupid thing / nonsense", variantDifferenceNote: "'Chorrada' is common in Spain; 'pendejada' is Mexican and stronger.", exampleSentenceSpain: "No digas chorradas, eso es imposible.", exampleSentenceLatam: "Deja de hacer pendejadas y ponte a trabajar.", partOfSpeech: "noun" },
  { id: "b2-02-fc18", frontSpain: "Estar hasta los huevos", frontLatam: "Estar hasta la madre", backEnglish: "To be completely fed up", variantDifferenceNote: "Both mean 'to be at one's limit'. Extremely vulgar — use with close friends only.", exampleSentenceSpain: "Estoy hasta los huevos de este curro.", exampleSentenceLatam: "Estoy hasta la madre de tus excusas.", partOfSpeech: "expression" },
  { id: "b2-02-fc19", frontSpain: "A dos velas", frontLatam: "En la quiebra", backEnglish: "Broke, penniless", variantDifferenceNote: "'A dos velas' is Spanish idiom; 'en la quiebra' is more standard Mexican.", exampleSentenceSpain: "Estoy a dos velas, no puedo salir.", exampleSentenceLatam: "Ando en la quiebra, préstame lana.", partOfSpeech: "expression" },
  { id: "b2-02-fc20", frontSpain: "Palmarla", frontLatam: "Pelar la papa", backEnglish: "To die (slang)", variantDifferenceNote: "Both are slang for dying. 'Palmarla' is common in Spain; 'pelar la papa' is Mexican slang.", exampleSentenceSpain: "Si sigue fumando así, va a palmarla joven.", exampleSentenceLatam: "El viejito ya peló la papa.", partOfSpeech: "expression" },
];

export const LESSON_B2_02: LessonData = {
  id: "b2-02",
  title: "Stronger Slang",
  slug: "stronger-slang",
  description: "Navigate high-affinity slang for close friends. Learn the nuanced usage of stronger expressions in Spain and Mexico, with explicit safety constraints for appropriate contexts.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 2,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_02_vocab,
  grammarSection: b2_02_grammar,
  dialogues: b2_02_dialogues,
  quiz: b2_02_quiz,
  flashcards: b2_02_flashcards,
  vocabularyJson: b2_02_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_02_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Stronger slang lesson with safety constraints for Spain vs LATAM contexts.",
};

// ============================================================
// LESSON B2.03: Humor & Sarcasm
// ============================================================

const b2_03_vocab: RegionalVocabItem[] = [
  { word: "To joke", spainVariant: "Bromear", latamVariant: "Vacilar", phoneticSpain: "[bro.ˈmeaɾ]", phoneticLatam: "[ba.si.ˈlaɾ]", english: "To joke, to tease", partOfSpeech: "verb" },
  { word: "Sarcastic", spainVariant: "Sarcástico", latamVariant: "Ácido", phoneticSpain: "[saɾ.ˈkas.ti.ko]", phoneticLatam: "[ˈa.si.ðo]", english: "Sarcastic, cutting", partOfSpeech: "adjective" },
  { word: "Funny", spainVariant: "Gracioso", latamVariant: "Cómico", phoneticSpain: "[ɣɾa.ˈθjo.so]", phoneticLatam: "[ˈko.mi.ko]", english: "Funny, amusing", partOfSpeech: "adjective" },
  { word: "To mock", spainVariant: "Mofarse", latamVariant: "Burlarse", phoneticSpain: "[mo.ˈfaɾ.se]", phoneticLatam: "[buɾ.ˈlaɾ.se]", english: "To mock, to make fun of", partOfSpeech: "verb (reflexive)" },
  { word: "Irony", spainVariant: "Ironía", latamVariant: "Ironía", phoneticSpain: "[i.ˈɾo.nja]", phoneticLatam: "[i.ˈɾo.nja]", english: "Irony", partOfSpeech: "noun" },
  { word: "Wit", spainVariant: "Ingenio", latamVariant: "Ocurrencia", phoneticSpain: "[in.ˈxe.njo]", phoneticLatam: "[o.kuɾ.ˈɾen.θja]", english: "Wit, clever remark", partOfSpeech: "noun" },
  { word: "Deadpan", spainVariant: "Serio", latamVariant: "Frio", phoneticSpain: "[ˈse.ɾjo]", phoneticLatam: "[ˈfɾi.o]", english: "Deadpan, straight-faced", partOfSpeech: "adjective" },
  { word: "Banter", spainVariant: "Cachondeo", latamVariant: "Relajo", phoneticSpain: "[ka.tʃon.ˈde.o]", phoneticLatam: "[ɾe.ˈla.xo]", english: "Banter, playful teasing", partOfSpeech: "noun" },
  { word: "Playful", spainVariant: "Travieso", latamVariant: "Picaro", phoneticSpain: "[tɾa.ˈβje.so]", phoneticLatam: "[ˈpi.ka.ɾo]", english: "Playful, mischievous", partOfSpeech: "adjective" },
  { word: "To exaggerate", spainVariant: "Exagerar", latamVariant: "Hacerla de pedo", phoneticSpain: "[ek.sa.xe.ˈɾaɾ]", phoneticLatam: "[a.ˈseɾ.la ðe ˈpe.ðo]", english: "To exaggerate, to make a big deal", partOfSpeech: "verb/expression" },
  { word: "Funny guy", spainVariant: "Payaso", latamVariant: "Payaso", phoneticSpain: "[pa.ˈʝa.so]", phoneticLatam: "[pa.ˈʝa.so]", english: "Clown, funny guy", partOfSpeech: "noun" },
  { word: "To tease", spainVariant: "Tomar el pelo", latamVariant: "Dar coba", phoneticSpain: "[to.ˈmaɾ el ˈpe.lo]", phoneticLatam: "[ˈdaɾ ˈko.βa]", english: "To tease, to pull someone's leg", partOfSpeech: "expression" },
  { word: "Punchline", spainVariant: "Remate", latamVariant: "Chiste", phoneticSpain: "[ɾe.ˈma.te]", phoneticLatam: "[ˈtʃis.te]", english: "Punchline, joke", partOfSpeech: "noun" },
  { word: "To laugh", spainVariant: "Partirse", latamVariant: "Morirse", phoneticSpain: "[paɾ.ˈtiɾ.se]", phoneticLatam: "[mo.ˈɾiɾ.se]", english: "To laugh hard (literally: to break/die laughing)", partOfSpeech: "verb (reflexive)" },
  { word: "Humor style", spainVariant: "Chispa", latamVariant: "Ácido", phoneticSpain: "[ˈtʃis.pa]", phoneticLatam: "[ˈa.si.ðo]", english: "Spark / acid humor", partOfSpeech: "noun/adjective" },
  { word: "To pretend", spainVariant: "Fingir", latamVariant: "Hacerse", phoneticSpain: "[fin.ˈxiɾ]", phoneticLatam: "[a.ˈseɾ.se]", english: "To pretend, to fake", partOfSpeech: "verb" },
  { word: "Reaction", spainVariant: "Flipar", latamVariant: "Alucinar", phoneticSpain: "[fli.ˈpaɾ]", phoneticLatam: "[a.lu.θi.ˈnaɾ]", english: "To be amazed / to freak out", partOfSpeech: "verb" },
  { word: "Tone", spainVariant: "Tono", latamVariant: "Onda", phoneticSpain: "[ˈto.no]", phoneticLatam: "[ˈon.da]", english: "Tone, vibe", partOfSpeech: "noun" },
  { word: "To be serious", spainVariant: "Ir en serio", latamVariant: "Irle al quite", phoneticSpain: "[iɾ en se.ˈɾjo]", phoneticLatam: "[ˈiɾ.le al ˈki.te]", english: "To be serious / to mean business", partOfSpeech: "expression" },
  { word: "Comedian", spainVariant: "Humorista", latamVariant: "Comediante", phoneticSpain: "[u.mo.ˈɾis.ta]", phoneticLatam: "[ko.me.ˈðjan.te]", english: "Comedian", partOfSpeech: "noun" },
];

const b2_03_grammar: GrammarItem[] = [
  {
    title: "Sarcasm Markers in Speech",
    spainContent: "Spanish sarcasm relies heavily on exaggerated intonation and the use of 'claro que sí', 'como no', and 'por supuesto' with a drawn-out, melodic rise. Facial expression is minimal — the deadpan delivery makes the irony land harder. 'Vaya, qué sorpresa' (Wow, what a surprise) said flatly is peak Spanish sarcasm.",
    latamContent: "Mexican sarcasm uses 'sí, claro', 'no manches', and 'qué padre' with exaggerated enthusiasm that drops sharply at the end. Mexicans often use 'a poco' (really?) as a sarcastic challenge. The tone is more animated than Spanish sarcasm, with broader facial expressions.",
    note: "Sarcasm is culturally learned. What sounds sarcastic to a Spaniard may sound sincere to a Mexican and vice versa. Always observe reactions carefully.",
  },
  {
    title: "Teasing vs. Mocking",
    spainContent: "'Tomar el pelo' (to pull someone's leg) is affectionate teasing among friends. 'Cachondeo' implies everyone is laughing together. However, 'mofarse' is more mocking and can turn hostile if the target isn't laughing. The boundary is whether the teased person is included in the laughter.",
    latamContent: "'Dar coba' is gentle teasing in Mexico. 'Relajo' means playful banter where everyone participates. 'Burlarse' is mocking and considered rude unless the relationship is very close. Mexican humor tends to be more inclusive — leaving someone out of the joke is seen as mean-spirited.",
    note: "When in doubt, follow the lead of native speakers. If they tease you, it's a sign of acceptance. Tease back gently to show you can handle it.",
  },
];

const b2_03_dialogues: DialogueScenario[] = [
  {
    id: "b2-03-sp-1",
    title: "Office Sarcasm",
    region: "SPAIN",
    setting: "Open-plan office in Madrid on a Monday morning",
    lines: [
      { speaker: "Eva", text: "¿Viste el email del jefe? Quiere el informe para ayer.", region: "SPAIN", setting: "Madrid office" },
      { speaker: "Tomás", text: "Vaya, qué sorpresa. Nunca lo habría imaginado. Claro que sí, con gusto.", region: "SPAIN", setting: "Madrid office" },
      { speaker: "Eva", text: "No te pases de listo, que te oye. Pero sí, un poco de cachondeo no viene mal.", region: "SPAIN", setting: "Madrid office" },
    ],
  },
  {
    id: "b2-03-sp-2",
    title: "Friend Banter",
    region: "SPAIN",
    setting: "Terrace café in Barcelona on a warm afternoon",
    lines: [
      { speaker: "Lucas", text: "¿Has visto el nuevo coche de Pedro? Es una castaña.", region: "SPAIN", setting: "Barcelona café" },
      { speaker: "Marta", text: "¡Cómo no! Seguro que le costó una pasta. No seas envidioso, payaso.", region: "SPAIN", setting: "Barcelona café" },
      { speaker: "Lucas", text: "Yo envidioso, ¿yo? Me parto. Es broma, tío, no te lo tomes en serio.", region: "SPAIN", setting: "Barcelona café" },
    ],
  },
  {
    id: "b2-03-sp-3",
    title: "Deadpan Humor",
    region: "SPAIN",
    setting: "Dinner party among close friends in Seville",
    lines: [
      { speaker: "Sofía", text: "He cocinado paella para diez personas. Espero que tengáis hambre.", region: "SPAIN", setting: "Seville dinner party" },
      { speaker: "Diego", text: "Claro, porque normalmente como como un pajarito. Qué detalle, Sofía.", region: "SPAIN", setting: "Seville dinner party" },
      { speaker: "Sofía", text: "Veo que la ironía no se te da mal. Toma, sirve tú que tienes mejor mano.", region: "SPAIN", setting: "Seville dinner party" },
    ],
  },
  {
    id: "b2-03-la-1",
    title: "Workplace Banter",
    region: "LATAM",
    setting: "Coworkers at a taco stand during lunch break in CDMX",
    lines: [
      { speaker: "Renata", text: "El jefe quiere que terminemos el proyecto hoy. ¿Qué onda?", region: "LATAM", setting: "CDMX taco stand" },
      { speaker: "Hugo", text: "¡Sí, claro! Y yo soy Superman. No manches, ¿en qué onda va?", region: "LATAM", setting: "CDMX taco stand" },
      { speaker: "Renata", text: "Jajaja, tranquilo, es broma. Pero sí, hay que darle duro.", region: "LATAM", setting: "CDMX taco stand" },
    ],
  },
  {
    id: "b2-03-la-2",
    title: "Friendly Teasing",
    region: "LATAM",
    setting: "Group of friends at a rooftop bar in Guadalajara",
    lines: [
      { speaker: "Camila", text: "¿Vieron que Luis ya tiene nueva novia? Otra vez.", region: "LATAM", setting: "Guadalajara rooftop" },
      { speaker: "Daniel", text: "¡A poco! Ese güey no se cansa. Qué padre por él, ¿no? Jajaja.", region: "LATAM", setting: "Guadalajara rooftop" },
      { speaker: "Camila", text: "Ay, no seas ácido. Es tu amigo, dale coba nomás.", region: "LATAM", setting: "Guadalajara rooftop" },
    ],
  },
  {
    id: "b2-03-la-3",
    title: "Playful Argument",
    region: "LATAM",
    setting: "Family dinner in Monterrey",
    lines: [
      { speaker: "Abuela", text: "¿Otra vez llegaste tarde? Tu hermano ya cenó.", region: "LATAM", setting: "Monterrey family dinner" },
      { speaker: "Carlos", text: "Es que el tráfico estaba horrible, abuela. No me haga la de pedo.", region: "LATAM", setting: "Monterrey family dinner" },
      { speaker: "Abuela", text: "No me vengas con ocurrencias. Siéntate y come antes de que se enfríe.", region: "LATAM", setting: "Monterrey family dinner" },
    ],
  },
];

const b2_03_quiz: QuizQuestion[] = [
  {
    questionId: "b2-03-q1",
    type: "multiple-choice",
    questionText: "In Spain, 'tomar el pelo' means:",
    options: ["To cut hair", "To pull someone's leg / tease", "To drink beer", "To be serious"],
    correctAnswer: "To pull someone's leg / tease",
    explanation: "'Tomar el pelo' literally means 'to take the hair' but is used figuratively for gentle teasing among friends.",
  },
  {
    questionId: "b2-03-q2",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of Spanish 'partirse de risa' (to laugh hard) is:",
    options: ["Llorar", "Morirse de risa", "Dormirse", "Enojarse"],
    correctAnswer: "Morirse de risa",
    explanation: "Both 'partirse' (Spain) and 'morirse' (Mexico) mean 'to laugh hard' when combined with 'de risa' — literally 'to break' or 'to die' laughing.",
  },
  {
    questionId: "b2-03-q3",
    type: "multiple-choice",
    questionText: "Spanish sarcasm often uses a ______ delivery, while Mexican sarcasm tends to be more ______.",
    options: ["Animated / deadpan", "Deadpan / animated", "Loud / quiet", "Formal / casual"],
    correctAnswer: "Deadpan / animated",
    explanation: "Spanish sarcasm is typically deadpan with minimal facial expression, while Mexican sarcasm uses more animated tones and broader expressions.",
  },
  {
    questionId: "b2-03-q4",
    type: "multiple-choice",
    questionText: "In Mexico, 'dar coba' means:",
    options: ["To give a gift", "To tease gently", "To work hard", "To cook food"],
    correctAnswer: "To tease gently",
    explanation: "'Dar coba' is Mexican slang for gentle teasing or pulling someone's leg, similar to Spain's 'tomar el pelo'.",
  },
  {
    questionId: "b2-03-q5",
    type: "multiple-choice",
    questionText: "'Vaya, qué sorpresa' said with a flat, deadpan tone in Spain typically means:",
    options: ["Genuine surprise", "Sarcasm — the opposite of surprise", "Confusion", "Happiness"],
    correctAnswer: "Sarcasm — the opposite of surprise",
    explanation: "Said deadpan, 'vaya, qué sorpresa' is peak Spanish sarcasm meaning 'wow, what a surprise' when something was completely expected.",
  },
];

const b2_03_flashcards: FlashcardItem[] = [
  { id: "b2-03-fc1", frontSpain: "Bromear", frontLatam: "Vacilar", backEnglish: "To joke, to tease", variantDifferenceNote: "'Bromear' is standard in Spain; 'vacilar' in Mexico means 'to tease/joke' rather than 'to hesitate'.", exampleSentenceSpain: "Me encanta bromear con mis amigos.", exampleSentenceLatam: "No te enojes, solo estoy vacilando.", partOfSpeech: "verb" },
  { id: "b2-03-fc2", frontSpain: "Sarcástico", frontLatam: "Ácido", backEnglish: "Sarcastic, cutting", variantDifferenceNote: "'Sarcástico' is used everywhere; 'ácido' (acid) is specifically Mexican slang for cutting/sarcastic humor.", exampleSentenceSpain: "Su comentario fue muy sarcástico.", exampleSentenceLatam: "Ese güey tiene un humor muy ácido.", partOfSpeech: "adjective" },
  { id: "b2-03-fc3", frontSpain: "Gracioso", frontLatam: "Cómico", backEnglish: "Funny, amusing", variantDifferenceNote: "'Gracioso' in Spain; 'cómico' in Mexico. Both mean 'funny' but 'cómico' can also mean 'comedian'.", exampleSentenceSpain: "Ese chaval es muy gracioso.", exampleSentenceLatam: "Tu hermano es bien cómico.", partOfSpeech: "adjective" },
  { id: "b2-03-fc4", frontSpain: "Mofarse", frontLatam: "Burlarse", backEnglish: "To mock, to make fun of", variantDifferenceNote: "'Mofarse' is more formal/literary in Spain; 'burlarse' is the standard term in Mexico.", exampleSentenceSpain: "No te mofes de los demás.", exampleSentenceLatam: "Es feo burlarse de la gente.", partOfSpeech: "verb" },
  { id: "b2-03-fc5", frontSpain: "Ironía", frontLatam: "Ironía", backEnglish: "Irony", variantDifferenceNote: "Same word, but expressed differently. Spain uses deadpan delivery; Mexico uses exaggerated tone.", exampleSentenceSpain: "Su ironía es muy sutil.", exampleSentenceLatam: "Le encanta la ironía en sus chistes.", partOfSpeech: "noun" },
  { id: "b2-03-fc6", frontSpain: "Ingenio", frontLatam: "Ocurrencia", backEnglish: "Wit, clever remark", variantDifferenceNote: "'Ingenio' is the quality of being witty in Spain; 'ocurrencia' is a specific witty remark in Mexico.", exampleSentenceSpain: "Tiene mucho ingenio para los chistes.", exampleSentenceLatam: "Qué buena ocurrencia, me reí mucho.", partOfSpeech: "noun" },
  { id: "b2-03-fc7", frontSpain: "Serio (deadpan)", frontLatam: "Frio", backEnglish: "Deadpan, straight-faced", variantDifferenceNote: "'Serio' in Spain describes deadpan humor; 'frío' in Mexico can describe cold/dry humor.", exampleSentenceSpain: "Lo dijo muy serio, pero era broma.", exampleSentenceLatam: "Su humor es muy frío, casi no se ríe.", partOfSpeech: "adjective" },
  { id: "b2-03-fc8", frontSpain: "Cachondeo", frontLatam: "Relajo", backEnglish: "Banter, playful teasing", variantDifferenceNote: "'Cachondeo' in Spain implies mutual laughter; 'relajo' in Mexico means playful, relaxed joking.", exampleSentenceSpain: "Entre amigos hay mucho cachondeo.", exampleSentenceLatam: "Aquí hay buen relajo, todos se llevan bien.", partOfSpeech: "noun" },
  { id: "b2-03-fc9", frontSpain: "Travieso", frontLatam: "Pícaro", backEnglish: "Playful, mischievous", variantDifferenceNote: "'Travieso' in Spain; 'pícaro' in Mexico. 'Pícaro' also has literary connotations (picaresque novel).", exampleSentenceSpain: "El niño es muy travieso pero adorable.", exampleSentenceLatam: "Ese pícaro siempre anda con sus bromas.", partOfSpeech: "adjective" },
  { id: "b2-03-fc10", frontSpain: "Exagerar", frontLatam: "Hacerla de pedo", backEnglish: "To exaggerate, to make a big deal", variantDifferenceNote: "'Exagerar' is standard; 'hacerla de pedo' is very Mexican slang for making a fuss.", exampleSentenceSpain: "No exageres, no es para tanto.", exampleSentenceLatam: "No le hagas de pedo, fue sin querer.", partOfSpeech: "verb/expression" },
  { id: "b2-03-fc11", frontSpain: "Payaso", frontLatam: "Payaso", backEnglish: "Clown, funny guy", variantDifferenceNote: "Same word. Used affectionately among friends in both regions, but can be insulting if said seriously.", exampleSentenceSpain: "Eres un payaso, me haces reír mucho.", exampleSentenceLatam: "No seas payaso, estamos en serio.", partOfSpeech: "noun" },
  { id: "b2-03-fc12", frontSpain: "Tomar el pelo", frontLatam: "Dar coba", backEnglish: "To tease, to pull someone's leg", variantDifferenceNote: "'Tomar el pelo' in Spain; 'dar coba' in Mexico. Both mean gentle teasing among friends.", exampleSentenceSpain: "No te enfades, te estoy tomando el pelo.", exampleSentenceLatam: "Te doy coba porque te quiero, güey.", partOfSpeech: "expression" },
  { id: "b2-03-fc13", frontSpain: "Remate", frontLatam: "Chiste", backEnglish: "Punchline, joke", variantDifferenceNote: "'Remate' in Spain is the punchline/delivery; 'chiste' in Mexico is the joke itself.", exampleSentenceSpain: "El remate del chiste fue genial.", exampleSentenceLatam: "Cuéntame un chiste bueno.", partOfSpeech: "noun" },
  { id: "b2-03-fc14", frontSpain: "Partirse (de risa)", frontLatam: "Morirse (de risa)", backEnglish: "To laugh hard", variantDifferenceNote: "'Partirse' (to break) in Spain; 'morirse' (to die) in Mexico. Both mean laughing very hard.", exampleSentenceSpain: "Me partí con tu imitación del jefe.", exampleSentenceLatam: "Me morí de risa con ese video.", partOfSpeech: "verb" },
  { id: "b2-03-fc15", frontSpain: "Chispa", frontLatam: "Ácido", backEnglish: "Spark / acid humor", variantDifferenceNote: "'Chispa' (spark) describes witty humor in Spain; 'ácido' (acid) describes cutting humor in Mexico.", exampleSentenceSpain: "Tiene mucha chispa en sus comentarios.", exampleSentenceLatam: "Su estilo de humor es muy ácido.", partOfSpeech: "noun/adjective" },
  { id: "b2-03-fc16", frontSpain: "Fingir", frontLatam: "Hacerse", backEnglish: "To pretend, to fake", variantDifferenceNote: "'Fingir' is standard everywhere; 'hacerse' in Mexico is used for pretending to be something.", exampleSentenceSpain: "No finjas que no entiendes.", exampleSentenceLatam: "Se hace el que no sabe.", partOfSpeech: "verb" },
  { id: "b2-03-fc17", frontSpain: "Flipar", frontLatam: "Alucinar", backEnglish: "To be amazed / to freak out", variantDifferenceNote: "'Flipar' is very common in Spain; 'alucinar' is used in Mexico for being amazed or hallucinating.", exampleSentenceSpain: "Flipé cuando vi el precio.", exampleSentenceLatam: "Aluciné con el concierto, estuvo increíble.", partOfSpeech: "verb" },
  { id: "b2-03-fc18", frontSpain: "Tono", frontLatam: "Onda", backEnglish: "Tone, vibe", variantDifferenceNote: "'Tono' in Spain refers to tone; 'onda' in Mexico means 'vibe' or 'wave' (as in 'good vibes').", exampleSentenceSpain: "Cambió el tono de la conversación.", exampleSentenceLatam: "Esa morra tiene buena onda.", partOfSpeech: "noun" },
  { id: "b2-03-fc19", frontSpain: "Ir en serio", frontLatam: "Irle al quite", backEnglish: "To be serious / to mean business", variantDifferenceNote: "'Ir en serio' is standard; 'irle al quite' is Mexican slang for being serious or confronting something.", exampleSentenceSpain: "Esto va en serio, no es broma.", exampleSentenceLatam: "Le voy al quite, no me rajé.", partOfSpeech: "expression" },
  { id: "b2-03-fc20", frontSpain: "Humorista", frontLatam: "Comediante", backEnglish: "Comedian", variantDifferenceNote: "'Humorista' in Spain; 'comediante' in Mexico. Both refer to professional comedy performers.", exampleSentenceSpain: "Mi humorista favorito es Eugenio.", exampleSentenceLatam: "Los comediantes mexicanos son muy buenos.", partOfSpeech: "noun" },
];

export const LESSON_B2_03: LessonData = {
  id: "b2-03",
  title: "Humor & Sarcasm",
  slug: "humor-sarcasm",
  description: "Learn to read between the lines, understand banter, and recognize deadpan tone markers across Spanish and Mexican cultures.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 3,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_03_vocab,
  grammarSection: b2_03_grammar,
  dialogues: b2_03_dialogues,
  quiz: b2_03_quiz,
  flashcards: b2_03_flashcards,
  vocabularyJson: b2_03_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_03_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Humor and sarcasm lesson covering Spain vs LATAM comedic styles.",
};

// ============================================================
// LESSON B2.04: Arguments & Conflict
// ============================================================

const b2_04_vocab: RegionalVocabItem[] = [
  { word: "To argue", spainVariant: "Discutir", latamVariant: "Reñir", phoneticSpain: "[dis.ku.ˈtiɾ]", phoneticLatam: "[re.ˈɲiɾ]", english: "To argue, to quarrel", partOfSpeech: "verb" },
  { word: "To get angry", spainVariant: "Enfadarse", latamVariant: "Enojarse", phoneticSpain: "[en.fa.ˈðaɾ.se]", phoneticLatam: "[e.no.ˈxaɾ.se]", english: "To get angry, to be upset", partOfSpeech: "verb (reflexive)" },
  { word: "Sorry", spainVariant: "Lo siento", latamVariant: "Perdón", phoneticSpain: "[lo ˈsjen.to]", phoneticLatam: "[peɾ.ˈðon]", english: "I'm sorry / excuse me", partOfSpeech: "expression" },
  { word: "To apologize", spainVariant: "Pedir perdón", latamVariant: "Disculparse", phoneticSpain: "[pe.ˈðiɾ peɾ.ˈðon]", phoneticLatam: "[dis.kul.ˈpaɾ.se]", english: "To apologize", partOfSpeech: "expression/verb" },
  { word: "Problem", spainVariant: "Problema", latamVariant: "Bronca", phoneticSpain: "[pɾo.ˈble.ma]", phoneticLatam: "[ˈbɾoŋ.ka]", english: "Problem, issue", partOfSpeech: "noun" },
  { word: "To calm down", spainVariant: "Calmarse", latamVariant: "Tranquilizarse", phoneticSpain: "[kal.ˈmaɾ.se]", phoneticLatam: "[tɾan.ki.li.ˈθaɾ.se]", english: "To calm down", partOfSpeech: "verb (reflexive)" },
  { word: "Fault", spainVariant: "Culpa", latamVariant: "Culpa", phoneticSpain: "[ˈkul.pa]", phoneticLatam: "[ˈkul.pa]", english: "Fault, blame", partOfSpeech: "noun" },
  { word: "To understand", spainVariant: "Entender", latamVariant: "Captar", phoneticSpain: "[en.ten.ˈðeɾ]", phoneticLatam: "[kap.ˈtaɾ]", english: "To understand, to get", partOfSpeech: "verb" },
  { word: "Boundary", spainVariant: "Límite", latamVariant: "Límite", phoneticSpain: "[ˈli.mi.te]", phoneticLatam: "[ˈli.mi.te]", english: "Boundary, limit", partOfSpeech: "noun" },
  { word: "To fix", spainVariant: "Arreglar", latamVariant: "Compensar", phoneticSpain: "[a.ɾe.ˈɣlaɾ]", phoneticLatam: "[kom.pen.ˈsaɾ]", english: "To fix, to make up for", partOfSpeech: "verb" },
  { word: "Tension", spainVariant: "Tensión", latamVariant: "Fregadero", phoneticSpain: "[ten.ˈsjon]", phoneticLatam: "[fɾe.ɣa.ˈðe.ɾo]", english: "Tension / mess (slang)", partOfSpeech: "noun" },
  { word: "To give in", spainVariant: "Ceder", latamVariant: "Dar el brazo a torcer", phoneticSpain: "[ˈθe.ðeɾ]", phoneticLatam: "[ˈdaɾ el ˈbɾa.θo a toɾ.ˈθeɾ]", english: "To give in, to concede", partOfSpeech: "verb/expression" },
  { word: "Hurtful", spainVariant: "Doloroso", latamVariant: "Gacho", phoneticSpain: "[do.lo.ˈɾo.so]", phoneticLatam: "[ˈga.tʃo]", english: "Hurtful, unpleasant", partOfSpeech: "adjective" },
  { word: "To raise voice", spainVariant: "Alzar la voz", latamVariant: "Levantar la voz", phoneticSpain: "[al.ˈθaɾ la ˈβoθ]", phoneticLatam: "[le.βan.ˈtaɾ la ˈβos]", english: "To raise one's voice", partOfSpeech: "expression" },
  { word: "To listen", spainVariant: "Escuchar", latamVariant: "Hacer caso", phoneticSpain: "[es.ku.ˈtʃaɾ]", phoneticLatam: "[a.ˈθeɾ ˈka.so]", english: "To listen, to pay attention", partOfSpeech: "verb/expression" },
  { word: "Respect", spainVariant: "Respeto", latamVariant: "Respeto", phoneticSpain: "[res.ˈpe.to]", phoneticLatam: "[res.ˈpe.to]", english: "Respect", partOfSpeech: "noun" },
  { word: "To de-escalate", spainVariant: "Bajar el tono", latamVariant: "Bajarle dos", phoneticSpain: "[ba.ˈxaɾ el ˈto.no]", phoneticLatam: "[ba.ˈxaɾ.le ðos]", english: "To de-escalate, calm down", partOfSpeech: "expression" },
  { word: "Agreement", spainVariant: "Acuerdo", latamVariant: "Trato", phoneticSpain: "[a.ˈkweɾ.ðo]", phoneticLatam: "[ˈtɾa.to]", english: "Agreement, deal", partOfSpeech: "noun" },
  { word: "To move on", spainVariant: "Página siguiente", latamVariant: "Dar vuelta a la página", phoneticSpain: "[ˈpa.xi.na sje.ˈɣjen.te]", phoneticLatam: "[ˈdaɾ ˈβwel.ta a la ˈpa.xi.na]", english: "To move on, turn the page", partOfSpeech: "expression" },
  { word: "Peace", spainVariant: "Paz", latamVariant: "Paz", phoneticSpain: "[ˈpaθ]", phoneticLatam: "[ˈpas]", english: "Peace", partOfSpeech: "noun" },
];

const b2_04_grammar: GrammarItem[] = [
  {
    title: "De-escalation Phrases",
    spainContent: "In Spain, de-escalation starts with 'vamos a calmarnos' (let's calm down) and 'bajemos el tono' (let's lower the tone). Using 'tío/tía' even in conflict softens confrontation: 'Tía, no te enfades' (Come on, don't get mad). Spaniards often use humor to defuse tension mid-argument.",
    latamContent: "In Mexico, 'tranquilo/a' and 'bájale dos' (calm down / lower it) are common de-escalators. Adding '-ito/-ita' to requests softens them: 'Dime la verdad, no te enojes' vs. 'Dime la verdad, no te enojecitas' (the latter is much softer). Family metaphors are used: 'somos familia' or 'no vale la pena'.",
    note: "De-escalation is culturally specific. What sounds dismissive in one culture may sound reasonable in another. 'Bajemos el tono' works in Spain; 'bájale dos' works in Mexico.",
  },
  {
    title: "Apology Structures",
    spainContent: "Spanish apologies are direct but not overly effusive. 'Lo siento mucho' is sufficient for most situations. 'Me equivoqué' (I was wrong) shows accountability. Offering a concrete fix: 'Te invito a cenar para compensar' (I'll buy you dinner to make up for it).",
    latamContent: "Mexican apologies often include more emotional language. 'Perdóname, de verdad' (Forgive me, truly) and 'No fue mi intención hacerte daño' (I didn't mean to hurt you) are common. Physical gestures matter — a hug or pat on the back often accompanies verbal apologies.",
    note: "Spanish apologies are shorter and more action-oriented. Mexican apologies are longer and more emotionally expressive. Neither is 'better' — they reflect different cultural values around emotional display.",
  },
];

const b2_04_dialogues: DialogueScenario[] = [
  {
    id: "b2-04-sp-1",
    title: "Roommate Conflict",
    region: "SPAIN",
    setting: "Shared apartment living room in Madrid, Sunday evening",
    lines: [
      { speaker: "Ana", text: "Tía, estoy hasta el moño. Llevas dos semanas sin fregar los platos.", region: "SPAIN", setting: "Madrid apartment" },
      { speaker: "Laura", text: "Lo siento, he tenido mucho curro. No te enfades, por favor.", region: "SPAIN", setting: "Madrid apartment" },
      { speaker: "Ana", text: "Vamos a calmarnos. Si limpias hoy, olvidamos el tema. ¿Trato?", region: "SPAIN", setting: "Madrid apartment" },
    ],
  },
  {
    id: "b2-04-sp-2",
    title: "Workplace Disagreement",
    region: "SPAIN",
    setting: "Meeting room in a Barcelona tech company",
    lines: [
      { speaker: "Miguel", text: "No estoy de acuerdo con tu propuesta. Es un follón y lo sabes.", region: "SPAIN", setting: "Barcelona office" },
      { speaker: "Elena", text: "Bajemos el tono, Miguel. Escúchame primero y luego discutimos.", region: "SPAIN", setting: "Barcelona office" },
      { speaker: "Miguel", text: "Tienes razón, me equivoqué al alzar la voz. Adelante, te escucho.", region: "SPAIN", setting: "Barcelona office" },
    ],
  },
  {
    id: "b2-04-sp-3",
    title: "Making Up After a Fight",
    region: "SPAIN",
    setting: "Coffee shop in Seville where two friends meet to reconcile",
    lines: [
      { speaker: "Pedro", text: "Tío, lo siento mucho. Lo dije sin pensar y fue una chorrada.", region: "SPAIN", setting: "Seville coffee shop" },
      { speaker: "Sofía", text: "Yo también me equivoqué. No debería haberme enfadado tanto.", region: "SPAIN", setting: "Seville coffee shop" },
      { speaker: "Pedro", text: "¿Pasamos página? Te invito a una caña y olvidamos el follón.", region: "SPAIN", setting: "Seville coffee shop" },
    ],
  },
  {
    id: "b2-04-la-1",
    title: "Couple's Argument",
    region: "LATAM",
    setting: "Living room of an apartment in Mexico City",
    lines: [
      { speaker: "Luis", text: "Me enojé porque llegaste tarde otra vez. ¿No captas que me preocupo?", region: "LATAM", setting: "CDMX apartment" },
      { speaker: "Mariana", text: "Perdóname, de verdad. El tráfico estuvo horrible y no te avisé.", region: "LATAM", setting: "CDMX apartment" },
      { speaker: "Luis", text: "Está bien, bájale dos. Pero la próxima mándame mensaje, ¿sí?", region: "LATAM", setting: "CDMX apartment" },
    ],
  },
  {
    id: "b2-04-la-2",
    title: "Friendship Tension",
    region: "LATAM",
    setting: "Park bench in Guadalajara on a weekday afternoon",
    lines: [
      { speaker: "Diego", text: "Me hiciste quedar mal con tu comentario. Eso estuvo muy gacho.", region: "LATAM", setting: "Guadalajara park" },
      { speaker: "Carmen", text: "No fue mi intención. Discúlpame, no sabía que te afectaría tanto.", region: "LATAM", setting: "Guadalajara park" },
      { speaker: "Diego", text: "Tranqui, ya pasó. Pero avísame la próxima vez antes de decir esas cosas.", region: "LATAM", setting: "Guadalajara park" },
    ],
  },
  {
    id: "b2-04-la-3",
    title: "Family Dispute",
    region: "LATAM",
    setting: "Family dinner table in Monterrey",
    lines: [
      { speaker: "Abuela", text: "¿Por qué discuten tanto? Somos familia, no vale la pena.", region: "LATAM", setting: "Monterrey dinner" },
      { speaker: "Juan", text: "Tiene razón, abuela. Perdón por levantar la voz, hermano.", region: "LATAM", setting: "Monterrey dinner" },
      { speaker: "Carlos", text: "Yo también pido perdón. Vamos a hacer las paces y cenar en paz.", region: "LATAM", setting: "Monterrey dinner" },
    ],
  },
];

const b2_04_quiz: QuizQuestion[] = [
  {
    questionId: "b2-04-q1",
    type: "multiple-choice",
    questionText: "In Spain, what does 'bajemos el tono' mean in an argument?",
    options: ["Sing quieter", "Let's lower the tone / calm down", "Turn down the music", "Speak faster"],
    correctAnswer: "Let's lower the tone / calm down",
    explanation: "'Bajemos el tono' literally means 'let's lower the tone' and is used to de-escalate an argument in Spain.",
  },
  {
    questionId: "b2-04-q2",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of 'lo siento mucho' (I'm very sorry) is typically:",
    options: ["Perdóname, de verdad", "No importa", "Está bien", "Lo sé"],
    correctAnswer: "Perdóname, de verdad",
    explanation: "Mexican apologies tend to be more emotionally expressive. 'Perdóname, de verdad' (Forgive me, truly) carries more emotional weight.",
  },
  {
    questionId: "b2-04-q3",
    type: "multiple-choice",
    questionText: "In Mexico, 'bájale dos' means:",
    options: ["Lower the volume twice", "Calm down / de-escalate", "Reduce the price", "Slow down driving"],
    correctAnswer: "Calm down / de-escalate",
    explanation: "'Bájale dos' (literally 'lower it by two') is Mexican slang for calming down or de-escalating a situation.",
  },
  {
    questionId: "b2-04-q4",
    type: "multiple-choice",
    questionText: "Which phrase shows accountability in Spain?",
    options: ["No es mi culpa", "Me equivoqué", "Tú empezaste", "No me importa"],
    correctAnswer: "Me equivoqué",
    explanation: "'Me equivoqué' (I was wrong) is a direct admission of fault commonly used in Spanish apologies.",
  },
  {
    questionId: "b2-04-q5",
    type: "multiple-choice",
    questionText: "In Mexico, adding '-ito/-ita' to a request during conflict serves to:",
    options: ["Make it more formal", "Soften the tone", "Add urgency", "Show anger"],
    correctAnswer: "Soften the tone",
    explanation: "Diminutives like '-ito/-ita' soften requests and make them sound less confrontational: 'no te enojes' vs 'no te enojecitas'.",
  },
];

const b2_04_flashcards: FlashcardItem[] = [
  { id: "b2-04-fc1", frontSpain: "Discutir", frontLatam: "Reñir", backEnglish: "To argue, to quarrel", variantDifferenceNote: "'Discutir' is standard in Spain; 'reñir' is more common in Mexico for quarreling.", exampleSentenceSpain: "Discutieron por dinero otra vez.", exampleSentenceLatam: "Los hermanos reñieron por la herencia.", partOfSpeech: "verb" },
  { id: "b2-04-fc2", frontSpain: "Enfadarse", frontLatam: "Enojarse", backEnglish: "To get angry, to be upset", variantDifferenceNote: "'Enfadarse' in Spain; 'enojarse' in Mexico. Both mean 'to get angry'.", exampleSentenceSpain: "Se enfadó cuando le dije la verdad.", exampleSentenceLatam: "Se enojó mucho con mi comentario.", partOfSpeech: "verb" },
  { id: "b2-04-fc3", frontSpain: "Lo siento", frontLatam: "Perdón", backEnglish: "I'm sorry / excuse me", variantDifferenceNote: "'Lo siento' is more common in Spain; 'perdón' is more common in Mexico for apologies.", exampleSentenceSpain: "Lo siento mucho, no quise hacerte daño.", exampleSentenceLatam: "Perdón por llegar tarde, hubo tráfico.", partOfSpeech: "expression" },
  { id: "b2-04-fc4", frontSpain: "Pedir perdón", frontLatam: "Disculparse", backEnglish: "To apologize", variantDifferenceNote: "'Pedir perdón' in Spain; 'disculparse' in Mexico. Both are formal ways to apologize.", exampleSentenceSpain: "Tuve que pedirle perdón a mi jefe.", exampleSentenceLatam: "Se disculpó por su comportamiento.", partOfSpeech: "expression/verb" },
  { id: "b2-04-fc5", frontSpain: "Problema", frontLatam: "Bronca", backEnglish: "Problem, issue", variantDifferenceNote: "'Problema' is standard; 'bronca' is Mexican slang for a problem or conflict.", exampleSentenceSpain: "Tenemos un problema serio que resolver.", exampleSentenceLatam: "Se armó una bronca en la reunión.", partOfSpeech: "noun" },
  { id: "b2-04-fc6", frontSpain: "Calmarse", frontLatam: "Tranquilizarse", backEnglish: "To calm down", variantDifferenceNote: "'Calmarse' is common in Spain; 'tranquilizarse' is more formal but used in Mexico.", exampleSentenceSpain: "Cálmate, no vale la pena enfadarse.", exampleSentenceLatam: "Tranquilízate, todo se va a arreglar.", partOfSpeech: "verb" },
  { id: "b2-04-fc7", frontSpain: "Culpa", frontLatam: "Culpa", backEnglish: "Fault, blame", variantDifferenceNote: "Same word in both regions. 'Es mi culpa' is universally understood.", exampleSentenceSpain: "La culpa fue mía, no la tuya.", exampleSentenceLatam: "No tiene la culpa de lo que pasó.", partOfSpeech: "noun" },
  { id: "b2-04-fc8", frontSpain: "Entender", frontLatam: "Captar", backEnglish: "To understand, to get", variantDifferenceNote: "'Entender' is standard; 'captar' is Mexican slang for 'to get it'.", exampleSentenceSpain: "No entiendo por qué te enfadaste.", exampleSentenceLatam: "¿Captas lo que te estoy diciendo?", partOfSpeech: "verb" },
  { id: "b2-04-fc9", frontSpain: "Límite", frontLatam: "Límite", backEnglish: "Boundary, limit", variantDifferenceNote: "Same word. Setting boundaries uses 'poner límites' in both regions.", exampleSentenceSpain: "Tienes que poner límites claros.", exampleSentenceLatam: "Me pasé del límite y lo reconozco.", partOfSpeech: "noun" },
  { id: "b2-04-fc10", frontSpain: "Arreglar", frontLatam: "Compensar", backEnglish: "To fix, to make up for", variantDifferenceNote: "'Arreglar' in Spain means 'to fix'; 'compensar' in Mexico means 'to make up for'.", exampleSentenceSpain: "Vamos a arreglar las cosas entre nosotros.", exampleSentenceLatam: "Te compensaré por el daño causado.", partOfSpeech: "verb" },
  { id: "b2-04-fc11", frontSpain: "Bajar el tono", frontLatam: "Bajarle dos", backEnglish: "To de-escalate, calm down", variantDifferenceNote: "'Bajar el tono' in Spain; 'bajarle dos' (lower it by two) in Mexico. Both mean 'calm down'.", exampleSentenceSpain: "Por favor, bajemos el tono de la discusión.", exampleSentenceLatam: "Bájale dos, no vale la pena enojarse.", partOfSpeech: "expression" },
  { id: "b2-04-fc12", frontSpain: "Ceder", frontLatam: "Dar el brazo a torcer", backEnglish: "To give in, to concede", variantDifferenceNote: "'Ceder' is standard; 'dar el brazo a torcer' is the Mexican idiom for conceding.", exampleSentenceSpain: "Al final tuve que ceder para hacer las paces.", exampleSentenceLatam: "No le gusta dar el brazo a torcer.", partOfSpeech: "verb/expression" },
  { id: "b2-04-fc13", frontSpain: "Doloroso", frontLatam: "Gacho", backEnglish: "Hurtful, unpleasant", variantDifferenceNote: "'Doloroso' is standard; 'gacho' is Mexican slang for 'bad/unpleasant'.", exampleSentenceSpain: "Fue un comentario muy doloroso.", exampleSentenceLatam: "Eso estuvo muy gacho de tu parte.", partOfSpeech: "adjective" },
  { id: "b2-04-fc14", frontSpain: "Alzar la voz", frontLatam: "Levantar la voz", backEnglish: "To raise one's voice", variantDifferenceNote: "'Alzar la voz' in Spain; 'levantar la voz' in Mexico. Both mean raising one's voice in anger.", exampleSentenceSpain: "No me gusta alzar la voz, pero me enfadé.", exampleSentenceLatam: "Levantó la voz y asustó a los niños.", partOfSpeech: "expression" },
  { id: "b2-04-fc15", frontSpain: "Escuchar", frontLatam: "Hacer caso", backEnglish: "To listen, to pay attention", variantDifferenceNote: "'Escuchar' is standard; 'hacer caso' means 'to pay attention to' in Mexico.", exampleSentenceSpain: "Escúchame antes de juzgarme.", exampleSentenceLatam: "Hazme caso, sé lo que digo.", partOfSpeech: "verb/expression" },
  { id: "b2-04-fc16", frontSpain: "Respeto", frontLatam: "Respeto", backEnglish: "Respect", variantDifferenceNote: "Same word. 'Falta de respeto' (lack of respect) is understood everywhere.", exampleSentenceSpain: "El respeto es fundamental en toda relación.", exampleSentenceLatam: "Se perdió el respeto mutuo.", partOfSpeech: "noun" },
  { id: "b2-04-fc17", frontSpain: "Me equivoqué", frontLatam: "Me equivoqué", backEnglish: "I was wrong", variantDifferenceNote: "Same phrase. Taking accountability is valued in both cultures, though expressed differently.", exampleSentenceSpain: "Me equivoqué y te pido perdón.", exampleSentenceLatam: "Me equivoqué, no fue mi intención.", partOfSpeech: "expression" },
  { id: "b2-04-fc18", frontSpain: "Acuerdo", frontLatam: "Trato", backEnglish: "Agreement, deal", variantDifferenceNote: "'Acuerdo' is standard; 'trato' in Mexico means 'deal' as in 'we have a deal'.", exampleSentenceSpain: "Llegamos a un acuerdo justo.", exampleSentenceLatam: "Es un trato, lo hacemos así.", partOfSpeech: "noun" },
  { id: "b2-04-fc19", frontSpain: "Pasar página", frontLatam: "Dar vuelta a la página", backEnglish: "To move on, turn the page", variantDifferenceNote: "'Pasar página' in Spain; 'dar vuelta a la página' in Mexico. Both mean moving on from conflict.", exampleSentenceSpain: "Ya pasamos página, olvidemos el pasado.", exampleSentenceLatam: "Hay que darle vuelta a la página y seguir.", partOfSpeech: "expression" },
  { id: "b2-04-fc20", frontSpain: "Paz", frontLatam: "Paz", backEnglish: "Peace", variantDifferenceNote: "Same word. 'Hacer las paces' (to make peace) is used in both regions.", exampleSentenceSpain: "Hagamos las paces y sigamos adelante.", exampleSentenceLatam: "Necesitamos paz en esta casa.", partOfSpeech: "noun" },
];

export const LESSON_B2_04: LessonData = {
  id: "b2-04",
  title: "Arguments & Conflict",
  slug: "arguments-conflict",
  description: "Learn to navigate disagreements, de-escalate tension, set boundaries, and repair relationships using authentic Spanish and Mexican phrasing.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 4,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_04_vocab,
  grammarSection: b2_04_grammar,
  dialogues: b2_04_dialogues,
  quiz: b2_04_quiz,
  flashcards: b2_04_flashcards,
  vocabularyJson: b2_04_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_04_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Arguments and conflict resolution lesson for Spain vs LATAM contexts.",
};

// ============================================================
// LESSON B2.05: Texting & Internet Spanish
// ============================================================

const b2_05_vocab: RegionalVocabItem[] = [
  { word: "LOL", spainVariant: "JAJAJA", latamVariant: "JAJAJA", phoneticSpain: "[xa.xa.xa]", phoneticLatam: "[xa.xa.xa]", english: "Laughing out loud (text)", partOfSpeech: "interjection" },
  { word: "OMG", spainVariant: "Ostras", latamVariant: "No manches", phoneticSpain: "[ˈos.tɾas]", phoneticLatam: "[no ˈman.tʃes]", english: "Oh my gosh / No way", partOfSpeech: "exclamation" },
  { word: "BRB", spainVariant: "Ahora vuelvo", latamVariant: "Ya vengo", phoneticSpain: "[a.ˈo.ɾa ˈβwel.βo]", phoneticLatam: "[ˈʝa ˈβeŋ.ɣo]", english: "Be right back", partOfSpeech: "expression" },
  { word: "IDK", spainVariant: "Ni idea", latamVariant: "Ni idea", phoneticSpain: "[ni i.ˈðe.a]", phoneticLatam: "[ni i.ˈðe.a]", english: "I don't know", partOfSpeech: "expression" },
  { word: "To ghost", spainVariant: "Dejar en visto", latamVariant: "Dejar en visto", phoneticSpain: "[de.ˈxaɾ em ˈbis.to]", phoneticLatam: "[de.ˈxaɾ em ˈbis.to]", english: "To leave on read / ghost", partOfSpeech: "expression" },
  { word: "Meme", spainVariant: "Meme", latamVariant: "Momazo", phoneticSpain: "[ˈme.me]", phoneticLatam: "[mo.ˈma.so]", english: "Meme / viral image", partOfSpeech: "noun" },
  { word: "Sticker", spainVariant: "Pegatina", latamVariant: "Sticker", phoneticSpain: "[pe.ɣa.ˈti.na]", phoneticLatam: "[ˈsti.keɾ]", english: "Sticker (digital)", partOfSpeech: "noun" },
  { word: "Reply", spainVariant: "Responder", latamVariant: "Contestar", phoneticSpain: "[res.pon.ˈdeɾ]", phoneticLatam: "[kon.tes.ˈtaɾ]", english: "To reply", partOfSpeech: "verb" },
  { word: "Group chat", spainVariant: "Grupo de wasap", latamVariant: "Grupo de Whats", phoneticSpain: "[ˈɡɾu.po ðe ˈwa.sap]", phoneticLatam: "[ˈɡɾu.po ðe ˈwats]", english: "WhatsApp group", partOfSpeech: "noun" },
  { word: "To block", spainVariant: "Bloquear", latamVariant: "Bloquear", phoneticSpain: "[blo.ke.ˈaɾ]", phoneticLatam: "[blo.ke.ˈaɾ]", english: "To block (someone)", partOfSpeech: "verb" },
  { word: "Viral", spainVariant: "Viral", latamVariant: "Viral", phoneticSpain: "[bi.ˈɾal]", phoneticLatam: "[bi.ˈɾal]", english: "Viral", partOfSpeech: "adjective" },
  { word: "Troll", spainVariant: "Troll", latamVariant: "Troll", phoneticSpain: "[ˈtɾol]", phoneticLatam: "[ˈtɾol]", english: "Troll / provocateur", partOfSpeech: "noun" },
  { word: "Screenshot", spainVariant: "Captura", latamVariant: "Screenshot", phoneticSpain: "[kap.ˈtu.ɾa]", phoneticLatam: "[ˈskɾin.ʃot]", english: "Screenshot", partOfSpeech: "noun" },
  { word: "DM", spainVariant: "Privado", latamVariant: "DM", phoneticSpain: "[pɾi.ˈβa.ðo]", phoneticLatam: "[ˈde ˈe.me]", english: "Direct message", partOfSpeech: "noun" },
  { word: "Hashtag", spainVariant: "Etiqueta", latamVariant: "Hashtag", phoneticSpain: "[e.ti.ˈke.ta]", phoneticLatam: "[ˈas.tag]", english: "Hashtag", partOfSpeech: "noun" },
  { word: "Story", spainVariant: "Historia", latamVariant: "Historia", phoneticSpain: "[is.ˈto.ɾja]", phoneticLatam: "[is.ˈto.ɾja]", english: "Social media story", partOfSpeech: "noun" },
  { word: "To tag", spainVariant: "Etiquetar", latamVariant: "Etiquetar", phoneticSpain: "[e.ti.ke.ˈtaɾ]", phoneticLatam: "[e.ti.ke.ˈtaɾ]", english: "To tag (someone)", partOfSpeech: "verb" },
  { word: "Emoji", spainVariant: "Emoticono", latamVariant: "Emoji", phoneticSpain: "[e.mo.ti.ˈko.no]", phoneticLatam: "[ˈe.mo.xi]", english: "Emoji", partOfSpeech: "noun" },
  { word: "Typing", spainVariant: "Escribiendo...", latamVariant: "Escribiendo...", phoneticSpain: "[es.kɾi.ˈβjen.do]", phoneticLatam: "[es.kɾi.ˈβjen.do]", english: "Typing indicator", partOfSpeech: "noun" },
  { word: "Online", spainVariant: "En línea", latamVariant: "En línea", phoneticSpain: "[en ˈli.ne.a]", phoneticLatam: "[en ˈli.ne.a]", english: "Online", partOfSpeech: "adjective" },
];

const b2_05_grammar: GrammarItem[] = [
  {
    title: "Read-Receipt Etiquette",
    spainContent: "In Spain, 'dejar en visto' (leaving on read) is a clear social signal. If someone reads your message and doesn't reply within a few hours, it typically means disinterest or annoyance. Double blue ticks on WhatsApp are interpreted as intentional silence. Spaniards often send voice notes to avoid the 'visto' trap.",
    latamContent: "In Mexico, 'dejar en visto' is also significant but more context-dependent. Mexicans are more likely to send a quick 'jaja' or emoji to acknowledge receipt without committing to a full conversation. The 'visto' is less of a statement and more of a pause. However, leaving a direct question on 'visto' is universally rude.",
    note: "When messaging native speakers, match their response speed. If they reply quickly, do the same. If they take hours, don't panic — but don't leave them on 'visto' for days.",
  },
  {
    title: "Digital Shorthand",
    spainContent: "Spanish texting uses 'k' for 'que', 'xq' for 'porque/porqué', 'tb' for 'también', 'bn' for 'bien'. Numbers replace syllables: '100pre' for 'siempre', '2' for 'tu'. These originated in the SMS era and persist in casual chats among younger speakers.",
    latamContent: "Mexican texting uses 'k' for 'que', 'xk' for 'porque', 'q' for 'que', 'msj' for 'mensaje'. The shorthand is more aggressive: 'q haces' instead of '¿Qué haces?'. Punctuation is often omitted entirely. Voice messages (notas de voz) are extremely popular and can replace entire text conversations.",
    note: "Digital shorthand is generational. Older speakers may find 'k' and 'q' lazy or uneducated. Use full spelling with professional contacts and elders.",
  },
];

const b2_05_dialogues: DialogueScenario[] = [
  {
    id: "b2-05-sp-1",
    title: "Ghosted on WhatsApp",
    region: "SPAIN",
    setting: "Two friends texting about weekend plans in Madrid",
    lines: [
      { speaker: "Laura", text: "¿Nos vemos el sábado? Llevo dos horas esperando respuesta.", region: "SPAIN", setting: "Madrid WhatsApp" },
      { speaker: "Marta", text: "Perdona, te dejé en visto sin querer. Sí, claro, quedamos a las 8.", region: "SPAIN", setting: "Madrid WhatsApp" },
      { speaker: "Laura", text: "Jajaja, pensaba que me estabas ghosteando. No me hagas eso.", region: "SPAIN", setting: "Madrid WhatsApp" },
    ],
  },
  {
    id: "b2-05-sp-2",
    title: "Meme Culture",
    region: "SPAIN",
    setting: "Group chat among university friends in Barcelona",
    lines: [
      { speaker: "Carlos", text: "¿Viste el meme del profesor? Se ha hecho viral en el grupo.", region: "SPAIN", setting: "Barcelona group chat" },
      { speaker: "Ana", text: "JAJAJA, es brutal. Lo voy a capturar y subir a mi historia.", region: "SPAIN", setting: "Barcelona group chat" },
      { speaker: "Carlos", text: "Ojo, que si lo etiquetas se va a enfadar. Mejor envíalo por privado.", region: "SPAIN", setting: "Barcelona group chat" },
    ],
  },
  {
    id: "b2-05-sp-3",
    title: "Read Receipt Drama",
    region: "SPAIN",
    setting: "Late night conversation between partners in Seville",
    lines: [
      { speaker: "Pedro", text: "¿Por qué me dejas en visto? Llevo tres días esperando que contestes.", region: "SPAIN", setting: "Seville late night chat" },
      { speaker: "Sofía", text: "Lo siento, he estado liada. No era mi intención hacerte sentir mal.", region: "SPAIN", setting: "Seville late night chat" },
      { speaker: "Pedro", text: "Vale, pero la próxima mándame un emoji o algo. No me dejes colgado.", region: "SPAIN", setting: "Seville late night chat" },
    ],
  },
  {
    id: "b2-05-la-1",
    title: "Texting Shorthand",
    region: "LATAM",
    setting: "Friends chatting on WhatsApp in Mexico City",
    lines: [
      { speaker: "Miguel", text: "Oye, q haces? Tengo un momazo para el grupo de was.", region: "LATAM", setting: "CDMX WhatsApp" },
      { speaker: "Valeria", text: "Jajaja, mándalo. Pero ojo, q el profe está en el grupo.", region: "LATAM", setting: "CDMX WhatsApp" },
      { speaker: "Miguel", text: "Ni pedo, ya lo mandé. Si se enoja, le mando un sticker tierno.", region: "LATAM", setting: "CDMX WhatsApp" },
    ],
  },
  {
    id: "b2-05-la-2",
    title: "Voice Note Etiquette",
    region: "LATAM",
    setting: "Coworkers coordinating lunch via WhatsApp in Guadalajara",
    lines: [
      { speaker: "Renata", text: "Te mandé una nota de voz de 5 min. Escúchala cuando puedas.", region: "LATAM", setting: "Guadalajara WhatsApp" },
      { speaker: "Hugo", text: "No manches, 5 min? Resúmeme porfa, ando en la chamba.", region: "LATAM", setting: "Guadalajara WhatsApp" },
      { speaker: "Renata", text: "Jajaja, ok. En resumen: vamos por tacos a la 1. ¿Va?", region: "LATAM", setting: "Guadalajara WhatsApp" },
    ],
  },
  {
    id: "b2-05-la-3",
    title: "Social Media Drama",
    region: "LATAM",
    setting: "Instagram DMs between friends in Monterrey",
    lines: [
      { speaker: "Daniel", text: "¿Viste que María subió historia con su nuevo novio? Un momazo.", region: "LATAM", setting: "Monterrey Instagram" },
      { speaker: "Camila", text: "Sí, claro. Ya le di like y le dejé un comentario sarcástico.", region: "LATAM", setting: "Monterrey Instagram" },
      { speaker: "Daniel", text: "Ojo, no la etiquetes. La última vez me bloqueó por eso.", region: "LATAM", setting: "Monterrey Instagram" },
    ],
  },
];

const b2_05_quiz: QuizQuestion[] = [
  {
    questionId: "b2-05-q1",
    type: "multiple-choice",
    questionText: "What does 'dejar en visto' mean in both Spain and Mexico?",
    options: ["To send a voice note", "To leave on read / not reply", "To block someone", "To post a story"],
    correctAnswer: "To leave on read / not reply",
    explanation: "'Dejar en visto' means to read a message (showing the blue checkmarks) but not reply — effectively 'ghosting' momentarily.",
  },
  {
    questionId: "b2-05-q2",
    type: "multiple-choice",
    questionText: "In Spain, 'xq' in a text message typically stands for:",
    options: ["Extra quality", "Porque / porqué", "Excuse me", "Exact"],
    correctAnswer: "Porque / porqué",
    explanation: "'xq' is Spanish texting shorthand for 'porque' (because) or 'porqué' (why).",
  },
  {
    questionId: "b2-05-q3",
    type: "multiple-choice",
    questionText: "The Mexican slang term for a great meme is:",
    options: ["Meme", "Momazo", "Viral", "Captura"],
    correctAnswer: "Momazo",
    explanation: "'Momazo' is Mexican slang for an excellent or particularly funny meme.",
  },
  {
    questionId: "b2-05-q4",
    type: "multiple-choice",
    questionText: "In Mexico, sending long voice notes is:",
    options: ["Considered rude", "Very common and accepted", "Only for emergencies", "Illegal"],
    correctAnswer: "Very common and accepted",
    explanation: "Voice notes (notas de voz) are extremely popular in Mexico and often replace entire text conversations.",
  },
  {
    questionId: "b2-05-q5",
    type: "multiple-choice",
    questionText: "What does 'tb' mean in Spanish texting?",
    options: ["To be", "También (also/too)", "Text back", "Too bad"],
    correctAnswer: "También (also/too)",
    explanation: "'tb' is shorthand for 'también' (also/too) in Spanish texting, especially in Spain.",
  },
];

const b2_05_flashcards: FlashcardItem[] = [
  { id: "b2-05-fc1", frontSpain: "JAJAJA", frontLatam: "JAJAJA", backEnglish: "LOL (text laughter)", variantDifferenceNote: "Same in both regions. 'JAJAJA' is the standard text representation of laughter in Spanish.", exampleSentenceSpain: "JAJAJA, eso estuvo buenísimo.", exampleSentenceLatam: "JAJAJA, no manches, qué gracioso.", partOfSpeech: "interjection" },
  { id: "b2-05-fc2", frontSpain: "Ostras", frontLatam: "No manches", backEnglish: "OMG / No way", variantDifferenceNote: "'Ostras' is a mild Spain exclamation; 'no manches' is the Mexican equivalent.", exampleSentenceSpain: "¡Ostras, cuánta gente hay aquí!", exampleSentenceLatam: "¡No manches, qué bonito está!", partOfSpeech: "exclamation" },
  { id: "b2-05-fc3", frontSpain: "Ahora vuelvo", frontLatam: "Ya vengo", backEnglish: "BRB (be right back)", variantDifferenceNote: "'Ahora vuelvo' in Spain; 'ya vengo' in Mexico. Both mean 'be right back'.", exampleSentenceSpain: "Ahora vuelvo, voy al baño.", exampleSentenceLatam: "Ya vengo, no cuelgues.", partOfSpeech: "expression" },
  { id: "b2-05-fc4", frontSpain: "Ni idea", frontLatam: "Ni idea", backEnglish: "IDK (I don't know)", variantDifferenceNote: "Same in both regions. 'Ni idea' is the standard way to say 'I don't know' in text.", exampleSentenceSpain: "¿Dónde queda? Ni idea, pregúntale a él.", exampleSentenceLatam: "¿Quién ganó? Ni idea, no vi el partido.", partOfSpeech: "expression" },
  { id: "b2-05-fc5", frontSpain: "Dejar en visto", frontLatam: "Dejar en visto", backEnglish: "To leave on read / ghost", variantDifferenceNote: "Same expression. The social implications vary slightly by culture but the meaning is identical.", exampleSentenceSpain: "Me dejó en visto y ya no respondió.", exampleSentenceLatam: "No me dejes en visto, responde algo.", partOfSpeech: "expression" },
  { id: "b2-05-fc6", frontSpain: "Meme", frontLatam: "Momazo", backEnglish: "Meme / viral image", variantDifferenceNote: "'Meme' is standard; 'momazo' is Mexican slang for an excellent meme.", exampleSentenceSpain: "Ese meme está muy bueno.", exampleSentenceLatam: "Ese momazo se volvió viral.", partOfSpeech: "noun" },
  { id: "b2-05-fc7", frontSpain: "Pegatina", frontLatam: "Sticker", backEnglish: "Sticker (digital)", variantDifferenceNote: "'Pegatina' in Spain; 'sticker' (anglicism) in Mexico and much of LATAM.", exampleSentenceSpain: "Mándame una pegatina de un gatito.", exampleSentenceLatam: "Tiene un sticker muy divertido.", partOfSpeech: "noun" },
  { id: "b2-05-fc8", frontSpain: "Responder", frontLatam: "Contestar", backEnglish: "To reply", variantDifferenceNote: "'Responder' in Spain; 'contestar' in Mexico. Both mean 'to reply/answer'.", exampleSentenceSpain: "Responde cuando puedas, no hay prisa.", exampleSentenceLatam: "Contéstame el mensaje, por favor.", partOfSpeech: "verb" },
  { id: "b2-05-fc9", frontSpain: "Grupo de wasap", frontLatam: "Grupo de Whats", backEnglish: "WhatsApp group", variantDifferenceNote: "'Wasap' in Spain; 'Whats' in Mexico. Both are colloquial shortenings of WhatsApp.", exampleSentenceSpain: "Te añadí al grupo de wasap de la clase.", exampleSentenceLatam: "Mándalo al grupo de Whats.", partOfSpeech: "noun" },
  { id: "b2-05-fc10", frontSpain: "Bloquear", frontLatam: "Bloquear", backEnglish: "To block (someone)", variantDifferenceNote: "Same word. 'Me bloqueó' means 'they blocked me' in both regions.", exampleSentenceSpain: "Me bloqueó en todas las redes.", exampleSentenceLatam: "Si sigue así, lo voy a bloquear.", partOfSpeech: "verb" },
  { id: "b2-05-fc11", frontSpain: "Viral", frontLatam: "Viral", backEnglish: "Viral", variantDifferenceNote: "Same word, same meaning. Pronounced with a Spanish 'v' sound.", exampleSentenceSpain: "El video se hizo viral en horas.", exampleSentenceLatam: "Su tweet se volvió viral.", partOfSpeech: "adjective" },
  { id: "b2-05-fc12", frontSpain: "Troll", frontLatam: "Troll", backEnglish: "Troll / provocateur", variantDifferenceNote: "Same borrowed word. Used for internet provocateurs in both regions.", exampleSentenceSpain: "No le hagas caso, es un troll.", exampleSentenceLatam: "Ese troll siempre anda de malas.", partOfSpeech: "noun" },
  { id: "b2-05-fc13", frontSpain: "Captura", frontLatam: "Screenshot", backEnglish: "Screenshot", variantDifferenceNote: "'Captura' in Spain; 'screenshot' (anglicism) in Mexico. Both widely understood.", exampleSentenceSpain: "Te envío una captura del chat.", exampleSentenceLatam: "Mándame screenshot de eso.", partOfSpeech: "noun" },
  { id: "b2-05-fc14", frontSpain: "Privado", frontLatam: "DM", backEnglish: "Direct message", variantDifferenceNote: "'Privado' in Spain; 'DM' (direct message) in Mexico. Both mean private messaging.", exampleSentenceSpain: "Háblame por privado para los detalles.", exampleSentenceLatam: "Te mandé DM con la dirección.", partOfSpeech: "noun" },
  { id: "b2-05-fc15", frontSpain: "Etiqueta", frontLatam: "Hashtag", backEnglish: "Hashtag", variantDifferenceNote: "'Etiqueta' is the literal translation in Spain; 'hashtag' is used in Mexico.", exampleSentenceSpain: "Pon la etiqueta del evento.", exampleSentenceLatam: "Usa el hashtag oficial.", partOfSpeech: "noun" },
  { id: "b2-05-fc16", frontSpain: "Historia", frontLatam: "Historia", backEnglish: "Social media story", variantDifferenceNote: "Same word. 'Subir una historia' means 'to post a story' in both regions.", exampleSentenceSpain: "Subí una historia en Instagram.", exampleSentenceLatam: "Vi tu historia de Facebook.", partOfSpeech: "noun" },
  { id: "b2-05-fc17", frontSpain: "Etiquetar", frontLatam: "Etiquetar", backEnglish: "To tag (someone)", variantDifferenceNote: "Same word. 'Me etiquetaste' means 'you tagged me'.", exampleSentenceSpain: "No me etiquetes en esas fotos.", exampleSentenceLatam: "Etiquétame cuando subas el video.", partOfSpeech: "verb" },
  { id: "b2-05-fc18", frontSpain: "Emoticono", frontLatam: "Emoji", backEnglish: "Emoji", variantDifferenceNote: "'Emoticono' in Spain; 'emoji' in Mexico. Both refer to digital emoticons.", exampleSentenceSpain: "Mándame un emoticono de corazón.", exampleSentenceLatam: "Le puse un emoji de risa.", partOfSpeech: "noun" },
  { id: "b2-05-fc19", frontSpain: "Escribiendo...", frontLatam: "Escribiendo...", backEnglish: "Typing indicator", variantDifferenceNote: "Same. The '...' indicator shows someone is typing.", exampleSentenceSpain: "Lleva cinco minutos en 'escribiendo...'", exampleSentenceLatam: "Se quedó en 'escribiendo...' y nada.", partOfSpeech: "noun" },
  { id: "b2-05-fc20", frontSpain: "En línea", frontLatam: "En línea", backEnglish: "Online", variantDifferenceNote: "Same. 'Está en línea' means 'they're online' in both regions.", exampleSentenceSpain: "Vi que estaba en línea y no me respondió.", exampleSentenceLatam: "Dice que está en línea pero no contesta.", partOfSpeech: "adjective" },
];

export const LESSON_B2_05: LessonData = {
  id: "b2-05",
  title: "Texting & Internet Spanish",
  slug: "texting-internet-spanish",
  description: "Master digital shorthand, read-receipt etiquette, ghosting terms, and meme language as used in Spain and Mexico.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 5,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_05_vocab,
  grammarSection: b2_05_grammar,
  dialogues: b2_05_dialogues,
  quiz: b2_05_quiz,
  flashcards: b2_05_flashcards,
  vocabularyJson: b2_05_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_05_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Texting and internet Spanish lesson covering digital culture in Spain vs LATAM.",
};

// ============================================================
// LESSON B2.06: Regional Reactions
// ============================================================

const b2_06_vocab: RegionalVocabItem[] = [
  { word: "Wow!", spainVariant: "¡Qué fuerte!", latamVariant: "¡Neta!", phoneticSpain: "[ke ˈfweɾ.te]", phoneticLatam: "[ˈne.ta]", english: "Wow! / Really! / No way!", partOfSpeech: "exclamation" },
  { word: "Amazing!", spainVariant: "¡Flipo!", latamVariant: "¡Órale!", phoneticSpain: "[ˈfli.po]", phoneticLatam: "[ˈo.ɾa.le]", english: "I can't believe it! / Wow!", partOfSpeech: "exclamation" },
  { word: "Really?", spainVariant: "¿En serio?", latamVariant: "¿De veras?", phoneticSpain: "[en ˈse.ɾjo]", phoneticLatam: "[ðe ˈβe.ɾas]", english: "Really? / Seriously?", partOfSpeech: "question" },
  { word: "No way!", spainVariant: "¡Anda ya!", latamVariant: "¡No manches!", phoneticSpain: "[ˈan.da ˈʝa]", phoneticLatam: "[no ˈman.tʃes]", english: "No way! / Come on!", partOfSpeech: "exclamation" },
  { word: "Cool!", spainVariant: "¡Guay!", latamVariant: "¡Chido!", phoneticSpain: "[ɡˈwaj]", phoneticLatam: "[ˈtʃi.ðo]", english: "Cool! / Awesome!", partOfSpeech: "exclamation" },
  { word: "Incredible", spainVariant: "Increíble", latamVariant: "Padre", phoneticSpain: "[in.kɾe.ˈi.βle]", phoneticLatam: "[ˈpa.ðɾe]", english: "Incredible / great", partOfSpeech: "adjective" },
  { word: "Crazy", spainVariant: "Loco", latamVariant: "Loco", phoneticSpain: "[ˈlo.ko]", phoneticLatam: "[ˈlo.ko]", english: "Crazy / wild", partOfSpeech: "adjective" },
  { word: "Surprised", spainVariant: "Alucinado", latamVariant: "Sorprendido", phoneticSpain: "[a.lu.θi.ˈna.ðo]", phoneticLatam: "[so.pɾen.ˈði.ðo]", english: "Amazed / surprised", partOfSpeech: "adjective" },
  { word: "Unbelievable", spainVariant: "Increíble", latamVariant: "Cabrón", phoneticSpain: "[in.kɾe.ˈi.βle]", phoneticLatam: "[ka.ˈβɾon]", english: "Unbelievable / intense", partOfSpeech: "adjective" },
  { word: "Excited", spainVariant: "Emocionado", latamVariant: "Emocionado", phoneticSpain: "[e.mo.θjo.ˈna.ðo]", phoneticLatam: "[e.mo.sjo.ˈna.ðo]", english: "Excited / moved", partOfSpeech: "adjective" },
  { word: "Shocked", spainVariant: "Flipado", latamVariant: "Alucinado", phoneticSpain: "[fli.ˈpa.ðo]", phoneticLatam: "[a.lu.θi.ˈna.ðo]", english: "Shocked / blown away", partOfSpeech: "adjective" },
  { word: "Hyped", spainVariant: "Motivado", latamVariant: "Encendido", phoneticSpain: "[mo.ti.ˈβa.ðo]", phoneticLatam: "[en.θen.ˈði.ðo]", english: "Hyped / fired up", partOfSpeech: "adjective" },
  { word: "Disbelief", spainVariant: "Desconcierto", latamVariant: "Desconcierto", phoneticSpain: "[des.kon.ˈθjeɾ.to]", phoneticLatam: "[des.kon.ˈsjeɾ.to]", english: "Disbelief / confusion", partOfSpeech: "noun" },
  { word: "To react", spainVariant: "Reaccionar", latamVariant: "Reaccionar", phoneticSpain: "[re.ak.θjo.ˈnaɾ]", phoneticLatam: "[re.ak.sjo.ˈnaɾ]", english: "To react", partOfSpeech: "verb" },
  { word: "Expression", spainVariant: "Expresión", latamVariant: "Expresión", phoneticSpain: "[eks.pɾe.ˈsjon]", phoneticLatam: "[eks.pɾe.ˈsjon]", english: "Expression", partOfSpeech: "noun" },
  { word: "Gesture", spainVariant: "Gesto", latamVariant: "Gesto", phoneticSpain: "[ˈxes.to]", phoneticLatam: "[ˈxes.to]", english: "Gesture", partOfSpeech: "noun" },
  { word: "Tone", spainVariant: "Tono", latamVariant: "Tono", phoneticSpain: "[ˈto.no]", phoneticLatam: "[ˈto.no]", english: "Tone", partOfSpeech: "noun" },
  { word: "Exaggeration", spainVariant: "Exageración", latamVariant: "Exageración", phoneticSpain: "[ek.sa.xe.ˈɾa.θjon]", phoneticLatam: "[ek.sa.xe.ˈɾa.sjon]", english: "Exaggeration", partOfSpeech: "noun" },
  { word: "Vibe", spainVariant: "Ambiente", latamVariant: "Onda", phoneticSpain: "[am.ˈbjen.te]", phoneticLatam: "[ˈon.da]", english: "Vibe / atmosphere", partOfSpeech: "noun" },
  { word: "Hype", spainVariant: "Expectación", latamVariant: "Hype", phoneticSpain: "[eks.pek.ta.ˈθjon]", phoneticLatam: "[ˈjai.pe]", english: "Hype / anticipation", partOfSpeech: "noun" },
];

const b2_06_grammar: GrammarItem[] = [
  {
    title: "Exclamatory Structures",
    spainContent: "Spanish reactions use 'qué + adjective' for emphasis: '¡Qué fuerte!' (How intense!), '¡Qué pasada!' (How amazing!). 'Flipar' and its variants ('flipado', 'flipante') dominate informal reactions. The structure '¡Anda!' expresses mild surprise, while '¡Anda ya!' expresses disbelief.",
    latamContent: "Mexican reactions favor 'qué + noun': '¡Qué onda!' (What's up!), '¡Qué padre!' (How cool!). 'Órale' is the ultimate versatile reaction — it can mean surprise, encouragement, or agreement depending on intonation. 'Neta' serves as both a question ('¿Neta?') and affirmation ('¡Es neta!').",
    note: "The exclamatory 'qué' is universal, but what follows it varies dramatically. 'Qué fuerte' in Spain is shock; 'qué padre' in Mexico is delight.",
  },
  {
    title: "Intonation Patterns",
    spainContent: "Peninsular surprise uses a sharp rise-fall intonation: '¡NO!' (rising sharply then falling). Disbelief uses a melodic, drawn-out pattern. Sarcastic surprise flattens the intonation entirely. Hand gestures are minimal for verbal reactions but eyebrow movement is significant.",
    latamContent: "Mexican surprise uses a sustained high pitch with a final drop: '¡NO MANCHES!' (high and sustained). 'Órale' has at least three distinct intonation patterns: rising (surprise), falling (agreement), and flat (skepticism). Mexicans use more head movement and facial animation when reacting.",
    note: "Intonation carries more meaning than the words themselves. 'Órale' with rising intonation means 'wow'; with falling intonation it means 'okay'.",
  },
];

const b2_06_dialogues: DialogueScenario[] = [
  {
    id: "b2-06-sp-1",
    title: "Hearing Shocking News",
    region: "SPAIN",
    setting: "Friends at a terrace bar in Madrid",
    lines: [
      { speaker: "Pablo", text: "¿Sabes que María se ha ido a vivir a Bali de la noche a la mañana?", region: "SPAIN", setting: "Madrid terrace bar" },
      { speaker: "Lucía", text: "¡Qué fuerte! ¿En serio? Me cuesta creerlo.", region: "SPAIN", setting: "Madrid terrace bar" },
      { speaker: "Pablo", text: "Sí, flipa. Dejó el curro y todo. ¡Anda ya!", region: "SPAIN", setting: "Madrid terrace bar" },
    ],
  },
  {
    id: "b2-06-sp-2",
    title: "Reacting to a Surprise",
    region: "SPAIN",
    setting: "Birthday party in Barcelona where the guest of honor arrives unexpectedly",
    lines: [
      { speaker: "Marcos", text: "¡Sorpresa! ¿Te esperabas esta fiesta?", region: "SPAIN", setting: "Barcelona birthday" },
      { speaker: "Elena", text: "¡Qué pasada! Estoy alucinada. No me lo esperaba para nada.", region: "SPAIN", setting: "Barcelona birthday" },
      { speaker: "Marcos", text: "¡Guay! Me alegro de que te guste. A disfrutar, tía.", region: "SPAIN", setting: "Barcelona birthday" },
    ],
  },
  {
    id: "b2-06-sp-3",
    title: "Sports Reaction",
    region: "SPAIN",
    setting: "Friends watching football at a pub in Seville",
    lines: [
      { speaker: "Ana", text: "¡Gol! ¡Gol! ¡Qué golazo acaba de meter!", region: "SPAIN", setting: "Seville football pub" },
      { speaker: "Carlos", text: "¡Flipo! Eso ha sido increíble. ¡Anda ya, qué barbaridad!", region: "SPAIN", setting: "Seville football pub" },
      { speaker: "Ana", text: "Estoy flipando. Este partido es una pasada.", region: "SPAIN", setting: "Seville football pub" },
    ],
  },
  {
    id: "b2-06-la-1",
    title: "Amazing News",
    region: "LATAM",
    setting: "Friends at a café in Mexico City",
    lines: [
      { speaker: "Miguel", text: "Adivina qué: me dieron la beca para estudiar en el extranjero.", region: "LATAM", setting: "CDMX café" },
      { speaker: "Sofía", text: "¡Órale! ¿Neta? ¡Qué padre, güey! Estoy bien emocionada por ti.", region: "LATAM", setting: "CDMX café" },
      { speaker: "Miguel", text: "Sí, es neta. No lo puedo creer todavía.", region: "LATAM", setting: "CDMX café" },
    ],
  },
  {
    id: "b2-06-la-2",
    title: "Surprise Party",
    region: "LATAM",
    setting: "Surprise celebration at a house in Guadalajara",
    lines: [
      { speaker: "Diego", text: "¡Feliz cumpleaños! ¿Te sorprendimos?", region: "LATAM", setting: "Guadalajara house" },
      { speaker: "Laura", text: "¡No manches! ¡Órale! No me esperaba nada de esto.", region: "LATAM", setting: "Guadalajara house" },
      { speaker: "Diego", text: "Es neta, te queríamos hacer algo chido. ¡A celebrar!", region: "LATAM", setting: "Guadalajara house" },
    ],
  },
  {
    id: "b2-06-la-3",
    title: "Watching a Game",
    region: "LATAM",
    setting: "Friends watching soccer at a cantina in Monterrey",
    lines: [
      { speaker: "Valeria", text: "¡Gooooool! ¡Qué golazo se acaba de aventar!", region: "LATAM", setting: "Monterrey cantina" },
      { speaker: "Jorge", text: "¡Órale! Ese cabrón juega bien chido. ¡Neta que sí!", region: "LATAM", setting: "Monterrey cantina" },
      { speaker: "Valeria", text: "Estoy bien encendida. Este partido está de locos.", region: "LATAM", setting: "Monterrey cantina" },
    ],
  },
];

const b2_06_quiz: QuizQuestion[] = [
  {
    questionId: "b2-06-q1",
    type: "multiple-choice",
    questionText: "In Spain, '¡Qué fuerte!' expresses:",
    options: ["Physical strength", "Shock / amazement", "Loud noise", "Bad weather"],
    correctAnswer: "Shock / amazement",
    explanation: "'¡Qué fuerte!' literally means 'how strong!' but is used to express shock, amazement, or disbelief at something intense.",
  },
  {
    questionId: "b2-06-q2",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of Spanish '¡Flipo!' (I can't believe it!) is:",
    options: ["¡Neta!", "¡Órale!", "¡Qué padre!", "¡No manches!"],
    correctAnswer: "¡Órale!",
    explanation: "'¡Órale!' is the versatile Mexican exclamation that can express surprise, encouragement, or agreement — similar to how 'flipar' works in Spain.",
  },
  {
    questionId: "b2-06-q3",
    type: "multiple-choice",
    questionText: "In Mexico, '¿Neta?' means:",
    options: ["What's your name?", "Really? / Seriously?", "Where are you?", "How much?"],
    correctAnswer: "Really? / Seriously?",
    explanation: "'¿Neta?' is Mexican slang for 'really?' or 'seriously?' It's used to express surprise or seek confirmation.",
  },
  {
    questionId: "b2-06-q4",
    type: "multiple-choice",
    questionText: "'¡Anda ya!' in Spain typically means:",
    options: ["Come here now", "No way! / I don't believe it!", "Walk faster", "Let's go"],
    correctAnswer: "No way! / I don't believe it!",
    explanation: "'¡Anda ya!' is used in Spain to express disbelief — similar to 'come on!' or 'no way!' in English.",
  },
  {
    questionId: "b2-06-q5",
    type: "multiple-choice",
    questionText: "In Mexico, 'qué padre' means:",
    options: ["What father", "How cool / awesome", "What a problem", "How boring"],
    correctAnswer: "How cool / awesome",
    explanation: "'Qué padre' is Mexican slang for 'how cool' or 'awesome'. 'Padre' in this context has nothing to do with fathers.",
  },
];

const b2_06_flashcards: FlashcardItem[] = [
  { id: "b2-06-fc1", frontSpain: "¡Qué fuerte!", frontLatam: "¡Neta!", backEnglish: "Wow! / Really! / No way!", variantDifferenceNote: "'Qué fuerte' in Spain expresses shock; 'neta' in Mexico seeks/affirms truth.", exampleSentenceSpain: "¿Se ha ido a vivir solo? ¡Qué fuerte!", exampleSentenceLatam: "¿Ganaste el premio? ¡Neta!", partOfSpeech: "exclamation" },
  { id: "b2-06-fc2", frontSpain: "¡Flipo!", frontLatam: "¡Órale!", backEnglish: "I can't believe it! / Wow!", variantDifferenceNote: "'Flipar' is very common in Spain; 'órale' is the ultimate versatile Mexican reaction.", exampleSentenceSpain: "¡Flipo con el precio de la vivienda!", exampleSentenceLatam: "¡Órale, qué rápido corriste!", partOfSpeech: "exclamation" },
  { id: "b2-06-fc3", frontSpain: "¿En serio?", frontLatam: "¿De veras?", backEnglish: "Really? / Seriously?", variantDifferenceNote: "'En serio' in Spain; 'de veras' in Mexico. Both seek confirmation.", exampleSentenceSpain: "¿En serio te vas mañana? ¡Qué pena!", exampleSentenceLatam: "¿De veras vas a venir? ¡Qué bueno!", partOfSpeech: "question" },
  { id: "b2-06-fc4", frontSpain: "¡Anda ya!", frontLatam: "¡No manches!", backEnglish: "No way! / Come on!", variantDifferenceNote: "'Anda ya' in Spain; 'no manches' in Mexico. Both express disbelief.", exampleSentenceSpain: "¿Ganó el equipo? ¡Anda ya, no me lo creo!", exampleSentenceLatam: "¿Te dieron el trabajo? ¡No manches!", partOfSpeech: "exclamation" },
  { id: "b2-06-fc5", frontSpain: "¡Guay!", frontLatam: "¡Chido!", backEnglish: "Cool! / Awesome!", variantDifferenceNote: "'Guay' in Spain; 'chido' in Mexico. Both express delight.", exampleSentenceSpain: "¡Guay! Me encanta tu nueva casa.", exampleSentenceLatam: "¡Chido! Tu carro está bien padre.", partOfSpeech: "exclamation" },
  { id: "b2-06-fc6", frontSpain: "Increíble", frontLatam: "Padre", backEnglish: "Incredible / great", variantDifferenceNote: "'Increíble' is standard; 'padre' in Mexico means 'cool/great' in slang.", exampleSentenceSpain: "Es increíble lo que ha conseguido.", exampleSentenceLatam: "Está padre tu idea, me gusta.", partOfSpeech: "adjective" },
  { id: "b2-06-fc7", frontSpain: "Loco", frontLatam: "Loco", backEnglish: "Crazy / wild", variantDifferenceNote: "Same word. 'Está loco' means 'it's crazy' in both regions.", exampleSentenceSpain: "Este tío está loco, hace cosas imposibles.", exampleSentenceLatam: "Está loco ese precio, no lo pagaría.", partOfSpeech: "adjective" },
  { id: "b2-06-fc8", frontSpain: "Alucinado", frontLatam: "Sorprendido", backEnglish: "Amazed / surprised", variantDifferenceNote: "'Alucinar' in Spain; 'sorprender' in Mexico. Both mean to be amazed.", exampleSentenceSpain: "Estoy alucinado con el espectáculo.", exampleSentenceLatam: "Estoy sorprendido por tu talento.", partOfSpeech: "adjective" },
  { id: "b2-06-fc9", frontSpain: "Increíble", frontLatam: "Cabrón", backEnglish: "Unbelievable / intense", variantDifferenceNote: "'Increíble' is standard; 'cabrón' in Mexican slang can mean 'intense/unbelievable'.", exampleSentenceSpain: "Fue un momento increíble.", exampleSentenceLatam: "Ese gol estuvo bien cabrón.", partOfSpeech: "adjective" },
  { id: "b2-06-fc10", frontSpain: "Emocionado", frontLatam: "Emocionado", backEnglish: "Excited / moved", variantDifferenceNote: "Same word. 'Estoy emocionado' means 'I'm excited/moved' everywhere.", exampleSentenceSpain: "Estoy emocionado por el concierto.", exampleSentenceLatam: "Estoy bien emocionado por verte.", partOfSpeech: "adjective" },
  { id: "b2-06-fc11", frontSpain: "Flipado", frontLatam: "Alucinado", backEnglish: "Shocked / blown away", variantDifferenceNote: "'Flipado' in Spain; 'alucinado' in Mexico. Both mean 'blown away'.", exampleSentenceSpain: "Estoy flipado con tu progreso.", exampleSentenceLatam: "Estoy alucinado con este lugar.", partOfSpeech: "adjective" },
  { id: "b2-06-fc12", frontSpain: "Motivado", frontLatam: "Encendido", backEnglish: "Hyped / fired up", variantDifferenceNote: "'Motivado' in Spain; 'encendido' (lit. 'on fire') in Mexico.", exampleSentenceSpain: "Estoy muy motivado para el proyecto.", exampleSentenceLatam: "Estoy bien encendido para la fiesta.", partOfSpeech: "adjective" },
  { id: "b2-06-fc13", frontSpain: "Desconcierto", frontLatam: "Desconcierto", backEnglish: "Disbelief / confusion", variantDifferenceNote: "Same word. 'Me causa desconcierto' means 'it confuses me'.", exampleSentenceSpain: "Su reacción me causó desconcierto.", exampleSentenceLatam: "Hay desconcierto entre los participantes.", partOfSpeech: "noun" },
  { id: "b2-06-fc14", frontSpain: "Reaccionar", frontLatam: "Reaccionar", backEnglish: "To react", variantDifferenceNote: "Same word. 'Cómo reaccionó?' means 'how did they react?'", exampleSentenceSpain: "Reaccionó de forma inesperada.", exampleSentenceLatam: "Reaccionó bien a la noticia.", partOfSpeech: "verb" },
  { id: "b2-06-fc15", frontSpain: "Expresión", frontLatam: "Expresión", backEnglish: "Expression", variantDifferenceNote: "Same word. Refers to both facial expressions and verbal phrases.", exampleSentenceSpain: "Su expresión lo decía todo.", exampleSentenceLatam: "Es una expresión muy común aquí.", partOfSpeech: "noun" },
  { id: "b2-06-fc16", frontSpain: "Gesto", frontLatam: "Gesto", backEnglish: "Gesture", variantDifferenceNote: "Same word. Non-verbal communication is essential in both cultures.", exampleSentenceSpain: "Hizo un gesto de sorpresa.", exampleSentenceLatam: "Su gesto mostró descontento.", partOfSpeech: "noun" },
  { id: "b2-06-fc17", frontSpain: "Tono", frontLatam: "Tono", backEnglish: "Tone", variantDifferenceNote: "Same word. Intonation carries significant meaning in reactions.", exampleSentenceSpain: "Cambió el tono al escuchar la noticia.", exampleSentenceLatam: "Su tono denotaba emoción.", partOfSpeech: "noun" },
  { id: "b2-06-fc18", frontSpain: "Exageración", frontLatam: "Exageración", backEnglish: "Exaggeration", variantDifferenceNote: "Same word. Both cultures use exaggeration in emotional reactions.", exampleSentenceSpain: "Es una exageración, no es para tanto.", exampleSentenceLatam: "Sin exageración, fue lo mejor.", partOfSpeech: "noun" },
  { id: "b2-06-fc19", frontSpain: "Ambiente", frontLatam: "Onda", backEnglish: "Vibe / atmosphere", variantDifferenceNote: "'Ambiente' in Spain; 'onda' (wave/vibe) in Mexico.", exampleSentenceSpain: "El ambiente estaba muy animado.", exampleSentenceLatam: "Buena onda en esta fiesta.", partOfSpeech: "noun" },
  { id: "b2-06-fc20", frontSpain: "Expectación", frontLatam: "Hype", backEnglish: "Hype / anticipation", variantDifferenceNote: "'Expectación' in Spain; 'hype' (anglicism) in Mexico.", exampleSentenceSpain: "Hay mucha expectación por el estreno.", exampleSentenceLatam: "El hype por el concierto es real.", partOfSpeech: "noun" },
];

export const LESSON_B2_06: LessonData = {
  id: "b2-06",
  title: "Regional Reactions",
  slug: "regional-reactions",
  description: "Master vocalizing surprise, hype, and amazement natively. Learn how Spaniards and Mexicans react to shocking, exciting, and unbelievable situations.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 6,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_06_vocab,
  grammarSection: b2_06_grammar,
  dialogues: b2_06_dialogues,
  quiz: b2_06_quiz,
  flashcards: b2_06_flashcards,
  vocabularyJson: b2_06_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_06_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Regional reactions lesson covering Spain vs LATAM exclamations and emotional responses.",
};

// ============================================================
// LESSON B2.07: Expressive Moods
// ============================================================

const b2_07_vocab: RegionalVocabItem[] = [
  { word: "Happy", spainVariant: "Contento", latamVariant: "Feliz", phoneticSpain: "[kon.ˈten.to]", phoneticLatam: "[fe.ˈlis]", english: "Happy, content", partOfSpeech: "adjective" },
  { word: "Sad", spainVariant: "Triste", latamVariant: "Triste", phoneticSpain: "[ˈtɾis.te]", phoneticLatam: "[ˈtɾis.te]", english: "Sad", partOfSpeech: "adjective" },
  { word: "Angry", spainVariant: "Cabreado", latamVariant: "Encabronado", phoneticSpain: "[ka.ˈβɾe.a.ðo]", phoneticLatam: "[en.ka.βɾo.ˈna.ðo]", english: "Angry, pissed off", partOfSpeech: "adjective" },
  { word: "Tired", spainVariant: "Hecho polvo", latamVariant: "Hecho mierda", phoneticSpain: "[ˈe.tʃo ˈpol.βo]", phoneticLatam: "[ˈe.tʃo ˈmjeɾ.ða]", english: "Exhausted, wiped out", partOfSpeech: "expression" },
  { word: "Bored", spainVariant: "Aburrido", latamVariant: "Huevón", phoneticSpain: "[a.bu.ˈɾi.ðo]", phoneticLatam: "[we.ˈβon]", english: "Bored / lazy", partOfSpeech: "adjective" },
  { word: "Nervous", spainVariant: "Nervioso", latamVariant: "Nervioso", phoneticSpain: "[neɾ.ˈbjo.so]", phoneticLatam: "[neɾ.ˈbjo.so]", english: "Nervous", partOfSpeech: "adjective" },
  { word: "Excited", spainVariant: "Ilusionado", latamVariant: "Emocionado", phoneticSpain: "[i.lu.sjo.ˈna.ðo]", phoneticLatam: "[e.mo.sjo.ˈna.ðo]", english: "Excited, thrilled", partOfSpeech: "adjective" },
  { word: "Worried", spainVariant: "Preocupado", latamVariant: "Preocupado", phoneticSpain: "[pɾe.o.ku.ˈpa.ðo]", phoneticLatam: "[pɾe.o.ku.ˈpa.ðo]", english: "Worried", partOfSpeech: "adjective" },
  { word: "Relaxed", spainVariant: "Tranquilo", latamVariant: "Relajado", phoneticSpain: "[tɾaŋ.ˈki.lo]", phoneticLatam: "[re.la.ˈxa.ðo]", english: "Relaxed, calm", partOfSpeech: "adjective" },
  { word: "Stressed", spainVariant: "Estresado", latamVariant: "Estresado", phoneticSpain: "[es.tɾe.ˈsa.ðo]", phoneticLatam: "[es.tɾe.ˈsa.ðo]", english: "Stressed", partOfSpeech: "adjective" },
  { word: "Disappointed", spainVariant: "Decepcionado", latamVariant: "Decepcionado", phoneticSpain: "[de.θep.θjo.ˈna.ðo]", phoneticLatam: "[de.sep.sjo.ˈna.ðo]", english: "Disappointed", partOfSpeech: "adjective" },
  { word: "Proud", spainVariant: "Orgulloso", latamVariant: "Orgulloso", phoneticSpain: "[oɾ.ɣu.ˈʝo.so]", phoneticLatam: "[oɾ.ɣu.ˈʝo.so]", english: "Proud", partOfSpeech: "adjective" },
  { word: "Jealous", spainVariant: "Celoso", latamVariant: "Celoso", phoneticSpain: "[θe.ˈlo.so]", phoneticLatam: "[se.ˈlo.so]", english: "Jealous", partOfSpeech: "adjective" },
  { word: "Grateful", spainVariant: "Agradecido", latamVariant: "Agradecido", phoneticSpain: "[a.ɣɾa.ðe.ˈθi.ðo]", phoneticLatam: "[a.ɣɾa.ðe.ˈsi.ðo]", english: "Grateful", partOfSpeech: "adjective" },
  { word: "Confused", spainVariant: "Perplejo", latamVariant: "Confundido", phoneticSpain: "[peɾ.ˈple.xo]", phoneticLatam: "[kon.fun.ˈði.ðo]", english: "Confused", partOfSpeech: "adjective" },
  { word: "Hopeful", spainVariant: "Esperanzado", latamVariant: "Ilusionado", phoneticSpain: "[es.pe.ɾan.ˈθa.ðo]", phoneticLatam: "[i.lu.sjo.ˈna.ðo]", english: "Hopeful", partOfSpeech: "adjective" },
  { word: "Overwhelmed", spainVariant: "Agobiado", latamVariant: "Agobiado", phoneticSpain: "[a.ɣo.ˈβja.ðo]", phoneticLatam: "[a.ɣo.ˈβja.ðo]", english: "Overwhelmed", partOfSpeech: "adjective" },
  { word: "Lonely", spainVariant: "Solo", latamVariant: "Solo", phoneticSpain: "[ˈso.lo]", phoneticLatam: "[ˈso.lo]", english: "Lonely", partOfSpeech: "adjective" },
  { word: "In love", spainVariant: "Enamorado", latamVariant: "Enamorado", phoneticSpain: "[e.na.mo.ˈɾa.ðo]", phoneticLatam: "[e.na.mo.ˈɾa.ðo]", english: "In love", partOfSpeech: "adjective" },
  { word: "Hurt", spainVariant: "Dolido", latamVariant: "Dolido", phoneticSpain: "[do.ˈli.ðo]", phoneticLatam: "[do.ˈli.ðo]", english: "Hurt", partOfSpeech: "adjective" },
];

const b2_07_grammar: GrammarItem[] = [
  {
    title: "Emphatic Intensification",
    spainContent: "Spaniards intensify emotions with 'que' + adjective structure: 'estoy que no puedo más' (I'm at my limit), 'me pone que suba por las paredes' (it drives me up the wall). The verb 'poner' is used extensively for emotional causation: 'me pone nervioso' (it makes me nervous), 'me pone triste' (it makes me sad).",
    latamContent: "Mexicans intensify emotions with 'bien' + adjective: 'estoy bien emocionado' (I'm really excited), 'estoy bien encabronado' (I'm really pissed). The adverb 'bien' functions as an intensifier rather than meaning 'well'. 'Me da' is used for emotional causation: 'me da coraje' (it makes me angry), 'me da tristeza' (it makes me sad).",
    note: "'Bien' as an intensifier is uniquely Mexican. In Spain, 'bien' means 'well' and doesn't intensify adjectives. 'Me da' vs 'me pone' for emotional causation is a key difference.",
  },
  {
    title: "Hyperbolic Expressions",
    spainContent: "Spanish emotional hyperbole uses death metaphors: 'me muero de risa' (I'm dying laughing — though this is standard), 'estoy muerto de cansancio' (I'm dead tired). 'No puedo más' (I can't take anymore) is the universal expression of being overwhelmed. 'Me da igual' expresses indifference.",
    latamContent: "Mexican emotional hyperbole uses 'madre' constructions: 'me vale madre' (I don't care at all — very vulgar), 'me importa un comino' (I don't care a bit). 'Estoy hasta la madre' expresses being at one's limit. 'Qué padre' and 'qué oso' (how embarrassing) are mood descriptors.",
    note: "Hyperbole is culturally specific. Spanish hyperbole tends toward understatement in serious contexts; Mexican hyperbole is consistently exaggerated across all emotional registers.",
  },
];

const b2_07_dialogues: DialogueScenario[] = [
  {
    id: "b2-07-sp-1",
    title: "Sharing Good News",
    region: "SPAIN",
    setting: "Coffee shop in Madrid where a friend got a promotion",
    lines: [
      { speaker: "Eva", text: "¡Tía, me han ascendido! Estoy ilusionadísima.", region: "SPAIN", setting: "Madrid coffee shop" },
      { speaker: "Tomás", text: "¡Qué guay! Me alegro mucho por ti. Te lo mereces.", region: "SPAIN", setting: "Madrid coffee shop" },
      { speaker: "Eva", text: "Gracias, tío. Estoy que no quepo en mí de la emoción.", region: "SPAIN", setting: "Madrid coffee shop" },
    ],
  },
  {
    id: "b2-07-sp-2",
    title: "Expressing Frustration",
    region: "SPAIN",
    setting: "Phone call between coworkers in Barcelona after a bad meeting",
    lines: [
      { speaker: "Marta", text: "Estoy cabreada con el jefe. Me pone que suba por las paredes.", region: "SPAIN", setting: "Barcelona phone call" },
      { speaker: "Lucas", text: "Vaya, qué mala onda. Cálmate, no vale la pena.", region: "SPAIN", setting: "Barcelona phone call" },
      { speaker: "Marta", text: "Lo sé, pero estoy hecha polvo. Necesito un día libre.", region: "SPAIN", setting: "Barcelona phone call" },
    ],
  },
  {
    id: "b2-07-sp-3",
    title: "Heartbreak",
    region: "SPAIN",
    setting: "Park bench in Seville where a friend is confiding in another",
    lines: [
      { speaker: "Sofía", text: "Estoy triste. Me dejó y no sé qué hacer.", region: "SPAIN", setting: "Seville park bench" },
      { speaker: "Diego", text: "Lo siento mucho, tía. Estoy aquí para lo que necesites.", region: "SPAIN", setting: "Seville park bench" },
      { speaker: "Sofía", text: "Gracias, tío. Me pone triste solo de pensarlo.", region: "SPAIN", setting: "Seville park bench" },
    ],
  },
  {
    id: "b2-07-la-1",
    title: "Celebration",
    region: "LATAM",
    setting: "Restaurant in Mexico City where someone announced their engagement",
    lines: [
      { speaker: "Renata", text: "¡Güey, me voy a casar! Estoy bien emocionada.", region: "LATAM", setting: "CDMX restaurant" },
      { speaker: "Hugo", text: "¡Órale! ¡Neta! Estoy bien feliz por ti, morra.", region: "LATAM", setting: "CDMX restaurant" },
      { speaker: "Renata", text: "Gracias, güey. Estoy bien ilusionada con todo.", region: "LATAM", setting: "CDMX restaurant" },
    ],
  },
  {
    id: "b2-07-la-2",
    title: "Venting",
    region: "LATAM",
    setting: "Car ride in Guadalajara where a friend is complaining",
    lines: [
      { speaker: "Camila", text: "Estoy bien encabronada con mi jefa. Me da mucho coraje.", region: "LATAM", setting: "Guadalajara car ride" },
      { speaker: "Daniel", text: "Bájale dos, morra. No vale la pena enojarse.", region: "LATAM", setting: "Guadalajara car ride" },
      { speaker: "Camila", text: "Lo sé, pero estoy bien harta. Necesito vacaciones.", region: "LATAM", setting: "Guadalajara car ride" },
    ],
  },
  {
    id: "b2-07-la-3",
    title: "Sad Moment",
    region: "LATAM",
    setting: "Living room in Monterrey where friends are comforting each other",
    lines: [
      { speaker: "Valeria", text: "Estoy bien triste, güey. Terminé con mi novio.", region: "LATAM", setting: "Monterrey living room" },
      { speaker: "Jorge", text: "No manches, morra. Lo siento mucho. ¿Qué pasó?", region: "LATAM", setting: "Monterrey living room" },
      { speaker: "Valeria", text: "Me dio mucha tristeza, pero creo que fue lo mejor.", region: "LATAM", setting: "Monterrey living room" },
    ],
  },
];

const b2_07_quiz: QuizQuestion[] = [
  {
    questionId: "b2-07-q1",
    type: "multiple-choice",
    questionText: "In Spain, 'me pone nervioso' means:",
    options: ["They place me nervously", "It makes me nervous", "I put on nervousness", "They are nervous"],
    correctAnswer: "It makes me nervous",
    explanation: "'Me pone' + adjective is a common Spanish structure meaning 'it makes me [adjective]'. 'Me pone nervioso' = 'it makes me nervous'.",
  },
  {
    questionId: "b2-07-q2",
    type: "multiple-choice",
    questionText: "In Mexico, 'estoy bien emocionado' uses 'bien' as:",
    options: ["An adverb meaning 'well'", "An intensifier meaning 'very/really'", "A greeting", "A farewell"],
    correctAnswer: "An intensifier meaning 'very/really'",
    explanation: "In Mexican Spanish, 'bien' often functions as an intensifier: 'bien emocionado' = 'really excited', 'bien padre' = 'really cool'.",
  },
  {
    questionId: "b2-07-q3",
    type: "multiple-choice",
    questionText: "'Estoy hecho polvo' in Spain means:",
    options: ["I'm covered in dust", "I'm exhausted / wiped out", "I'm making powder", "I'm cleaning"],
    correctAnswer: "I'm exhausted / wiped out",
    explanation: "'Hecho polvo' (made into dust) is Spanish slang for being completely exhausted or wiped out.",
  },
  {
    questionId: "b2-07-q4",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of 'me pone triste' (it makes me sad) is:",
    options: ["Me da tristeza", "Me pone feliz", "Me da coraje", "Me pone nervioso"],
    correctAnswer: "Me da tristeza",
    explanation: "In Mexico, 'me da' + noun is used for emotional causation: 'me da tristeza' = 'it makes me sad', 'me da coraje' = 'it makes me angry'.",
  },
  {
    questionId: "b2-07-q5",
    type: "multiple-choice",
    questionText: "In Spain, 'no puedo más' expresses:",
    options: ["Physical inability", "Being overwhelmed / at one's limit", "Lack of money", "No more food"],
    correctAnswer: "Being overwhelmed / at one's limit",
    explanation: "'No puedo más' (I can't anymore) is the universal Spanish expression for being overwhelmed, exhausted, or at one's breaking point.",
  },
];

const b2_07_flashcards: FlashcardItem[] = [
  { id: "b2-07-fc1", frontSpain: "Contento", frontLatam: "Feliz", backEnglish: "Happy, content", variantDifferenceNote: "'Contento' in Spain; 'feliz' in Mexico. Both mean happy but 'contento' is milder.", exampleSentenceSpain: "Estoy contento con el resultado.", exampleSentenceLatam: "Estoy bien feliz por ti.", partOfSpeech: "adjective" },
  { id: "b2-07-fc2", frontSpain: "Triste", frontLatam: "Triste", backEnglish: "Sad", variantDifferenceNote: "Same word. Universally understood across all Spanish-speaking regions.", exampleSentenceSpain: "Estoy triste por la noticia.", exampleSentenceLatam: "Me siento triste hoy.", partOfSpeech: "adjective" },
  { id: "b2-07-fc3", frontSpain: "Cabreado", frontLatam: "Encabronado", backEnglish: "Angry, pissed off", variantDifferenceNote: "'Cabreado' in Spain; 'encabronado' in Mexico. Both are vulgar slang for very angry.", exampleSentenceSpain: "Estoy cabreado con este tráfico.", exampleSentenceLatam: "Estoy bien encabronado con el jefe.", partOfSpeech: "adjective" },
  { id: "b2-07-fc4", frontSpain: "Hecho polvo", frontLatam: "Hecho mierda", backEnglish: "Exhausted, wiped out", variantDifferenceNote: "'Hecho polvo' (made dust) in Spain; 'hecho mierda' in Mexico. Both mean completely exhausted.", exampleSentenceSpain: "Estoy hecho polvo después del viaje.", exampleSentenceLatam: "Estoy hecho mierda, no dormí nada.", partOfSpeech: "expression" },
  { id: "b2-07-fc5", frontSpain: "Aburrido", frontLatam: "Huevón", backEnglish: "Bored / lazy", variantDifferenceNote: "'Aburrido' is standard; 'huevón' is Mexican slang that can mean lazy or as a mild insult.", exampleSentenceSpain: "Estoy aburrido en casa.", exampleSentenceLatam: "No seas huevón, ponte a trabajar.", partOfSpeech: "adjective" },
  { id: "b2-07-fc6", frontSpain: "Nervioso", frontLatam: "Nervioso", backEnglish: "Nervous", variantDifferenceNote: "Same word. 'Me pone nervioso' in Spain; 'me da nervios' in Mexico.", exampleSentenceSpain: "Estoy nervioso por la entrevista.", exampleSentenceLatam: "Me da nervios hablar en público.", partOfSpeech: "adjective" },
  { id: "b2-07-fc7", frontSpain: "Ilusionado", frontLatam: "Emocionado", backEnglish: "Excited, thrilled", variantDifferenceNote: "'Ilusionado' in Spain; 'emocionado' in Mexico. Both mean excited but 'ilusionado' implies hopeful excitement.", exampleSentenceSpain: "Estoy ilusionado con el viaje.", exampleSentenceLatam: "Estoy bien emocionado por el concierto.", partOfSpeech: "adjective" },
  { id: "b2-07-fc8", frontSpain: "Preocupado", frontLatam: "Preocupado", backEnglish: "Worried", variantDifferenceNote: "Same word. 'Estoy preocupado por ti' is understood everywhere.", exampleSentenceSpain: "Estoy preocupado por los resultados.", exampleSentenceLatam: "No te preocupes, todo estará bien.", partOfSpeech: "adjective" },
  { id: "b2-07-fc9", frontSpain: "Tranquilo", frontLatam: "Relajado", backEnglish: "Relaxed, calm", variantDifferenceNote: "'Tranquilo' in Spain; 'relajado' in Mexico. Both describe a calm state.", exampleSentenceSpain: "Estoy tranquilo después de la siesta.", exampleSentenceLatam: "Estoy relajado en la playa.", partOfSpeech: "adjective" },
  { id: "b2-07-fc10", frontSpain: "Estresado", frontLatam: "Estresado", backEnglish: "Stressed", variantDifferenceNote: "Same word. 'Estoy estresado' is used in both regions.", exampleSentenceSpain: "Estoy estresado con el trabajo.", exampleSentenceLatam: "El tráfico me tiene estresado.", partOfSpeech: "adjective" },
  { id: "b2-07-fc11", frontSpain: "Decepcionado", frontLatam: "Decepcionado", backEnglish: "Disappointed", variantDifferenceNote: "Same word. Note: 'decepcionado' means disappointed, not 'deceived'.", exampleSentenceSpain: "Estoy decepcionado con su actitud.", exampleSentenceLatam: "Me siento decepcionado por lo que pasó.", partOfSpeech: "adjective" },
  { id: "b2-07-fc12", frontSpain: "Orgulloso", frontLatam: "Orgulloso", backEnglish: "Proud", variantDifferenceNote: "Same word. 'Estoy orgulloso de ti' is universally understood.", exampleSentenceSpain: "Estoy orgulloso de tu esfuerzo.", exampleSentenceLatam: "Me siento orgulloso de mi familia.", partOfSpeech: "adjective" },
  { id: "b2-07-fc13", frontSpain: "Celoso", frontLatam: "Celoso", backEnglish: "Jealous", variantDifferenceNote: "Same word. 'Poner celoso' means 'to make jealous' everywhere.", exampleSentenceSpain: "Se puso celoso sin razón.", exampleSentenceLatam: "No seas celoso, es solo un amigo.", partOfSpeech: "adjective" },
  { id: "b2-07-fc14", frontSpain: "Agradecido", frontLatam: "Agradecido", backEnglish: "Grateful", variantDifferenceNote: "Same word. 'Te estoy agradecido' expresses gratitude in both regions.", exampleSentenceSpain: "Estoy agradecido por tu ayuda.", exampleSentenceLatam: "Te quedo agradecido por todo.", partOfSpeech: "adjective" },
  { id: "b2-07-fc15", frontSpain: "Perplejo", frontLatam: "Confundido", backEnglish: "Confused", variantDifferenceNote: "'Perplejo' in Spain; 'confundido' in Mexico. Both mean confused.", exampleSentenceSpain: "Estoy perplejo por su reacción.", exampleSentenceLatam: "Estoy confundido con las instrucciones.", partOfSpeech: "adjective" },
  { id: "b2-07-fc16", frontSpain: "Esperanzado", frontLatam: "Ilusionado", backEnglish: "Hopeful", variantDifferenceNote: "'Esperanzado' in Spain; 'ilusionado' in Mexico for hopeful/optimistic.", exampleSentenceSpain: "Estoy esperanzado con el futuro.", exampleSentenceLatam: "Estoy ilusionado con las nuevas oportunidades.", partOfSpeech: "adjective" },
  { id: "b2-07-fc17", frontSpain: "Agobiado", frontLatam: "Agobiado", backEnglish: "Overwhelmed", variantDifferenceNote: "Same word. 'Estoy agobiado' means 'I'm overwhelmed' everywhere.", exampleSentenceSpain: "Estoy agobiado con tantas tareas.", exampleSentenceLatam: "Me siento agobiado por la presión.", partOfSpeech: "adjective" },
  { id: "b2-07-fc18", frontSpain: "Solo", frontLatam: "Solo", backEnglish: "Lonely", variantDifferenceNote: "Same word. Context determines whether it means 'alone' or 'lonely'.", exampleSentenceSpain: "Me siento solo en esta ciudad.", exampleSentenceLatam: "A veces me siento solo aunque haya gente.", partOfSpeech: "adjective" },
  { id: "b2-07-fc19", frontSpain: "Enamorado", frontLatam: "Enamorado", backEnglish: "In love", variantDifferenceNote: "Same word. 'Estoy enamorado' is universal.", exampleSentenceSpain: "Estoy enamorado de ella.", exampleSentenceLatam: "Estoy bien enamorado, güey.", partOfSpeech: "adjective" },
  { id: "b2-07-fc20", frontSpain: "Dolido", frontLatam: "Dolido", backEnglish: "Hurt", variantDifferenceNote: "Same word. 'Me siento dolido' means 'I feel hurt'.", exampleSentenceSpain: "Estoy dolido por sus palabras.", exampleSentenceLatam: "Me siento dolido por lo que pasó.", partOfSpeech: "adjective" },
];

export const LESSON_B2_07: LessonData = {
  id: "b2-07",
  title: "Expressive Moods",
  slug: "expressive-moods",
  description: "Learn to express hyper-emotional states, exaggerated praise, and distaste using authentic Spanish and Mexican phrasing.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 7,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_07_vocab,
  grammarSection: b2_07_grammar,
  dialogues: b2_07_dialogues,
  quiz: b2_07_quiz,
  flashcards: b2_07_flashcards,
  vocabularyJson: b2_07_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_07_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Expressive moods lesson covering emotional intensity in Spain vs LATAM.",
};

// ============================================================
// LESSON B2.08: Cursing & Adult Language
// ============================================================

const b2_08_vocab: RegionalVocabItem[] = [
  { word: "F***", spainVariant: "Joder", latamVariant: "Chingar", phoneticSpain: "[xo.ˈðeɾ]", phoneticLatam: "[tʃin.ˈɣaɾ]", english: "To f*** / to screw", partOfSpeech: "verb" },
  { word: "S***", spainVariant: "Mierda", latamVariant: "Madre", phoneticSpain: "[ˈmjeɾ.ða]", phoneticLatam: "[ˈma.ðɾe]", english: "S*** / damn", partOfSpeech: "noun" },
  { word: "Bastard", spainVariant: "Cabrón", latamVariant: "Cabrón", phoneticSpain: "[ka.ˈβɾon]", phoneticLatam: "[ka.ˈβɾon]", english: "Bastard / jerk", partOfSpeech: "noun" },
  { word: "Damn", spainVariant: "Hostia", latamVariant: "Chingado", phoneticSpain: "[ˈos.tja]", phoneticLatam: "[tʃin.ˈɣa.ðo]", english: "Damn / f***ing", partOfSpeech: "exclamation" },
  { word: "A**hole", spainVariant: "Gilipollas", latamVariant: "Pendejo", phoneticSpain: "[xi.li.ˈpo.ʝas]", phoneticLatam: "[pen.ˈde.xo]", english: "Idiot / a**hole", partOfSpeech: "noun" },
  { word: "S***ty", spainVariant: "Jodido", latamVariant: "Pinche", phoneticSpain: "[xo.ˈði.ðo]", phoneticLatam: "[ˈpin.tʃe]", english: "S***ty / damn", partOfSpeech: "adjective" },
  { word: "To piss off", spainVariant: "Tochar", latamVariant: "Hartar", phoneticSpain: "[ˈto.tʃar]", phoneticLatam: "[ar.ˈtar]", english: "To piss off / annoy", partOfSpeech: "verb" },
  { word: "Go to hell", spainVariant: "Vete a la mierda", latamVariant: "Vete a la chingada", phoneticSpain: "[ˈbe.te a la ˈmjeɾ.ða]", phoneticLatam: "[ˈbe.te a la tʃin.ˈɣa.ða]", english: "Go to hell / f*** off", partOfSpeech: "expression" },
  { word: "WTF", spainVariant: "Qué cojones", latamVariant: "Qué chingados", phoneticSpain: "[ke ko.ˈxo.nes]", phoneticLatam: "[ke tʃin.ˈɣa.ðos]", english: "What the f***", partOfSpeech: "expression" },
  { word: "Dumbass", spainVariant: "Imbécil", latamVariant: "Pendejo", phoneticSpain: "[im.ˈbe.θil]", phoneticLatam: "[pen.ˈde.xo]", english: "Dumbass / idiot", partOfSpeech: "noun" },
  { word: "To screw up", spainVariant: "Joder la marrana", latamVariant: "Chingar la madre", phoneticSpain: "[xo.ˈðeɾ la ma.ˈra.ɲa]", phoneticLatam: "[tʃin.ˈɣar la ˈma.ðɾe]", english: "To really screw up", partOfSpeech: "expression" },
  { word: "Pissed", spainVariant: "Cabreado", latamVariant: "Encabronado", phoneticSpain: "[ka.ˈβɾe.a.ðo]", phoneticLatam: "[en.ka.βɾo.ˈna.ðo]", english: "Pissed off", partOfSpeech: "adjective" },
  { word: "Crap", spainVariant: "Mierda", latamVariant: "Madres", phoneticSpain: "[ˈmjeɾ.ða]", phoneticLatam: "[ˈma.ðɾes]", english: "Crap / stuff", partOfSpeech: "noun" },
  { word: "Son of a b****", spainVariant: "Hijo de puta", latamVariant: "Hijo de la chingada", phoneticSpain: "[ˈi.xo ðe ˈpu.ta]", phoneticLatam: "[ˈi.xo ðe la tʃin.ˈɣa.ða]", english: "Son of a b****", partOfSpeech: "noun" },
  { word: "A**", spainVariant: "Culo", latamVariant: "Nalga", phoneticSpain: "[ˈku.lo]", phoneticLatam: "[ˈnal.ɣa]", english: "A** / butt", partOfSpeech: "noun" },
  { word: "Balls", spainVariant: "Cojones", latamVariant: "Huevos", phoneticSpain: "[ko.ˈxo.nes]", phoneticLatam: "[ˈwe.βos]", english: "Balls / guts", partOfSpeech: "noun" },
  { word: "Whore", spainVariant: "Puta", latamVariant: "Puta", phoneticSpain: "[ˈpu.ta]", phoneticLatam: "[ˈpu.ta]", english: "Whore / b****", partOfSpeech: "noun" },
  { word: "To f*** up", spainVariant: "Cagarla", latamVariant: "Cagarla", phoneticSpain: "[ka.ˈɣaɾ.la]", phoneticLatam: "[ka.ˈɣaɾ.la]", english: "To f*** up / mess up", partOfSpeech: "verb" },
  { word: "Stupid", spainVariant: "Tonto", latamVariant: "Pendejo", phoneticSpain: "[ˈton.to]", phoneticLatam: "[pen.ˈde.xo]", english: "Stupid / dumb", partOfSpeech: "adjective" },
];

const b2_08_grammar: GrammarItem[] = [
  {
    title: "Profanity Grammar Notes",
    spainContent: "In Spain, profanity is grammatically flexible. 'Joder' functions as a verb, noun, and exclamation. 'Hostia' can be singular or plural ('hostias'). 'Cojones' appears in dozens of fixed expressions: 'tener cojones' (to have guts), 'a cojones' (by force), 'ni de coña' (no way). The word 'puta' serves as an intensifier: 'puto amo' (f***ing master).",
    latamContent: "In Mexico, 'chingar' is the most grammatically versatile profanity. It appears as a verb ('chingar'), noun ('la chingada'), adjective ('chingado'), and in countless expressions: 'chinga tu madre' (f*** you), 'no me chingues' (don't f*** with me), 'ya chingué' (I f***ed up / I won). The 'madre' word family is equally productive: 'madreado' (beaten up), 'madriza' (beating), 'a toda madre' (f***ing awesome).",
    note: "These words are for PASSIVE COMPREHENSION ONLY. Using them incorrectly can cause serious physical or social harm. NEVER use with strangers.",
  },
  {
    title: "Context Safety",
    spainContent: "Spanish profanity among close friends is almost punctuation — 'joder' appears multiple times per sentence. However, the same words to a stranger, elder, or authority figure are fighting words. The line is relationship, not setting. You can say 'hostia' at a family dinner if your grandmother also says it.",
    latamContent: "Mexican profanity is more setting-dependent. 'Chingar' derivatives are common among young male friends but rarely used in mixed company or with women. 'Madre' profanity is extremely strong and avoided in polite company entirely. The rule: if women or elders are present, keep it clean unless they initiate.",
    note: "When in doubt, don't use it. Understanding profanity protects you from being offended or manipulated; using it incorrectly can ruin relationships.",
  },
];

const b2_08_dialogues: DialogueScenario[] = [
  {
    id: "b2-08-sp-1",
    title: "Football Frustration",
    region: "SPAIN",
    setting: "Friends watching a match at a bar in Madrid",
    lines: [
      { speaker: "Pablo", text: "¡Hostia, qué penalti más claro! ¡Arbitro hijo de puta!", region: "SPAIN", setting: "Madrid bar" },
      { speaker: "Lucía", text: "Cálmate, tío. Ya está, no lo van a cambiar.", region: "SPAIN", setting: "Madrid bar" },
      { speaker: "Pablo", text: "Lo sé, pero me toca los cojones que siempre nos perjudiquen.", region: "SPAIN", setting: "Madrid bar" },
    ],
  },
  {
    id: "b2-08-sp-2",
    title: "Work Mishap",
    region: "SPAIN",
    setting: "Office kitchen in Barcelona after someone spills coffee",
    lines: [
      { speaker: "Marcos", text: "¡Joder! He cagado el informe entero. Soy un imbécil.", region: "SPAIN", setting: "Barcelona office" },
      { speaker: "Elena", text: "No digas eso. Todos cometemos errores. No es para tanto.", region: "SPAIN", setting: "Barcelona office" },
      { speaker: "Marcos", text: "Tienes razón, pero estoy hasta los huevos de joderla siempre.", region: "SPAIN", setting: "Barcelona office" },
    ],
  },
  {
    id: "b2-08-sp-3",
    title: "Traffic Rage",
    region: "SPAIN",
    setting: "Driver stuck in traffic in Seville",
    lines: [
      { speaker: "Andrés", text: "¡Qué cojones! Llevo una hora aquí parado. ¡Vete a la mierda!", region: "SPAIN", setting: "Seville traffic" },
      { speaker: "Carmen", text: "Andrés, bájale. No vale la pena enfadarse tanto.", region: "SPAIN", setting: "Seville traffic" },
      { speaker: "Andrés", text: "Lo sé, pero este tráfico me pone cabreado. Joder.", region: "SPAIN", setting: "Seville traffic" },
    ],
  },
  {
    id: "b2-08-la-1",
    title: "Soccer Disappointment",
    region: "LATAM",
    setting: "Friends watching a game at a cantina in Mexico City",
    lines: [
      { speaker: "Miguel", text: "¡No manches, qué gol tan culero! ¿Qué chingados hace el portero?", region: "LATAM", setting: "CDMX cantina" },
      { speaker: "Sofía", text: "Cálmate, güey. Ya pasó, no vale la pena.", region: "LATAM", setting: "CDMX cantina" },
      { speaker: "Miguel", text: "Lo sé, pero me da coraje que siempre la caguen así.", region: "LATAM", setting: "CDMX cantina" },
    ],
  },
  {
    id: "b2-08-la-2",
    title: "Messing Up",
    region: "LATAM",
    setting: "Office in Guadalajara after a presentation goes wrong",
    lines: [
      { speaker: "Diego", text: "Chingué la presentación, güey. Soy bien pendejo.", region: "LATAM", setting: "Guadalajara office" },
      { speaker: "Laura", text: "No digas eso. Fue un error, no más. Todos la cagamos.", region: "LATAM", setting: "Guadalajara office" },
      { speaker: "Diego", text: "Gracias, morra. Pero estoy hasta la madre de fallar.", region: "LATAM", setting: "Guadalajara office" },
    ],
  },
  {
    id: "b2-08-la-3",
    title: "Road Rage",
    region: "LATAM",
    setting: "Stuck in traffic in Monterrey",
    lines: [
      { speaker: "Roberto", text: "¡Qué pinche tráfico! Llevo dos horas aquí. ¡Chinga tu madre!", region: "LATAM", setting: "Monterrey traffic" },
      { speaker: "Diana", text: "Roberto, bájale dos. No te enojes, no lo puedes cambiar.", region: "LATAM", setting: "Monterrey traffic" },
      { speaker: "Roberto", text: "Tienes razón. Mejor pongo música y me relajo.", region: "LATAM", setting: "Monterrey traffic" },
    ],
  },
];

const b2_08_quiz: QuizQuestion[] = [
  {
    questionId: "b2-08-q1",
    type: "multiple-choice",
    questionText: "In Spain, 'tener cojones' means:",
    options: ["To be angry", "To have guts / courage", "To be stupid", "To be tired"],
    correctAnswer: "To have guts / courage",
    explanation: "'Tener cojones' literally means 'to have balls' and is used to express having guts or courage in Spain.",
  },
  {
    questionId: "b2-08-q2",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of Spanish 'joder' is:",
    options: ["Chingar", "Querer", "Amar", "Odiar"],
    correctAnswer: "Chingar",
    explanation: "'Chingar' is the most versatile Mexican profanity, equivalent to 'joder' in Spain but considered stronger in most contexts.",
  },
  {
    questionId: "b2-08-q3",
    type: "multiple-choice",
    questionText: "In Mexico, 'a toda madre' means:",
    options: ["Very bad", "F***ing awesome / great", "Very sad", "Very tired"],
    correctAnswer: "F***ing awesome / great",
    explanation: "'A toda madre' is Mexican slang meaning 'f***ing awesome' or 'great' — the opposite of what literal translation suggests.",
  },
  {
    questionId: "b2-08-q4",
    type: "multiple-choice",
    questionText: "Which of these is STRONGEST in Mexico?",
    options: ["Pendejo", "Chingar", "Cabrón", "Estúpido"],
    correctAnswer: "Chingar",
    explanation: "'Chingar' and its derivatives are considered the strongest category of profanity in Mexico due to their 'madre' associations.",
  },
  {
    questionId: "b2-08-q5",
    type: "multiple-choice",
    questionText: "In Spain, 'ni de coña' means:",
    options: ["No way! / Not a chance!", "Very funny", "Very angry", "Very tired"],
    correctAnswer: "No way! / Not a chance!",
    explanation: "'Ni de coña' (not even as a joke) means 'no way' or 'not a chance' in Spain. 'Coña' means joke.",
  },
];

const b2_08_flashcards: FlashcardItem[] = [
  { id: "b2-08-fc1", frontSpain: "Joder", frontLatam: "Chingar", backEnglish: "To f*** / to screw", variantDifferenceNote: "'Joder' in Spain; 'chingar' in Mexico. Both are versatile profanities but 'chingar' is stronger.", exampleSentenceSpain: "Joder, qué mal rato.", exampleSentenceLatam: "No chingues, en serio.", partOfSpeech: "verb" },
  { id: "b2-08-fc2", frontSpain: "Mierda", frontLatam: "Madre", backEnglish: "S*** / damn", variantDifferenceNote: "'Mierda' is standard; 'madre' in Mexican slang replaces it in many expressions.", exampleSentenceSpain: "¡Mierda, se me olvidó!", exampleSentenceLatam: "¿Qué madres quieres?", partOfSpeech: "noun" },
  { id: "b2-08-fc3", frontSpain: "Cabrón", frontLatam: "Cabrón", backEnglish: "Bastard / jerk", variantDifferenceNote: "Same word, context-dependent. Milder among friends in Spain; stronger in Mexico.", exampleSentenceSpain: "Eres un cabrón, pero te quiero.", exampleSentenceLatam: "Ese cabrón me debe lana.", partOfSpeech: "noun" },
  { id: "b2-08-fc4", frontSpain: "Hostia", frontLatam: "Chingado", backEnglish: "Damn / f***ing", variantDifferenceNote: "'Hostia' is Spain's go-to; 'chingado' is Mexican. Both express frustration.", exampleSentenceSpain: "¡Hostia, qué susto!", exampleSentenceLatam: "Estoy chingado con este calor.", partOfSpeech: "exclamation" },
  { id: "b2-08-fc5", frontSpain: "Gilipollas", frontLatam: "Pendejo", backEnglish: "Idiot / a**hole", variantDifferenceNote: "'Gilipollas' in Spain; 'pendejo' in Mexico. Both insults used among friends too.", exampleSentenceSpain: "No seas gilipollas.", exampleSentenceLatam: "Eres un pendejo a veces.", partOfSpeech: "noun" },
  { id: "b2-08-fc6", frontSpain: "Jodido", frontLatam: "Pinche", backEnglish: "S***ty / damn", variantDifferenceNote: "'Jodido' in Spain; 'pinche' in Mexico. Both are adjectival intensifiers.", exampleSentenceSpain: "Día jodido el de hoy.", exampleSentenceLatam: "Este pinche tráfico.", partOfSpeech: "adjective" },
  { id: "b2-08-fc7", frontSpain: "Tochar", frontLatam: "Hartar", backEnglish: "To piss off / annoy", variantDifferenceNote: "'Tochar' in Spain; 'hartar' in Mexico. Both mean to annoy severely.", exampleSentenceSpain: "Me toca que llegue tarde.", exampleSentenceLatam: "Me harta su actitud.", partOfSpeech: "verb" },
  { id: "b2-08-fc8", frontSpain: "Vete a la mierda", frontLatam: "Vete a la chingada", backEnglish: "Go to hell / f*** off", variantDifferenceNote: "Extremely offensive in both regions. Never use with strangers.", exampleSentenceSpain: "¡Vete a la mierda!", exampleSentenceLatam: "Vete a la chingada.", partOfSpeech: "expression" },
  { id: "b2-08-fc9", frontSpain: "Qué cojones", frontLatam: "Qué chingados", backEnglish: "What the f***", variantDifferenceNote: "'Cojones' in Spain; 'chingados' in Mexico. Express disbelief.", exampleSentenceSpain: "¿Qué cojones haces?", exampleSentenceLatam: "¿Qué chingados quieres?", partOfSpeech: "expression" },
  { id: "b2-08-fc10", frontSpain: "Imbécil", frontLatam: "Pendejo", backEnglish: "Dumbass / idiot", variantDifferenceNote: "'Imbécil' is standard; 'pendejo' is Mexican slang.", exampleSentenceSpain: "No seas imbécil.", exampleSentenceLatam: "No seas pendejo.", partOfSpeech: "noun" },
  { id: "b2-08-fc11", frontSpain: "Joder la marrana", frontLatam: "Chingar la madre", backEnglish: "To really screw up", variantDifferenceNote: "Both vulgar expressions for messing up badly.", exampleSentenceSpain: "Siempre jodes la marrana.", exampleSentenceLatam: "No chingues la madre.", partOfSpeech: "expression" },
  { id: "b2-08-fc12", frontSpain: "Cabreado", frontLatam: "Encabronado", backEnglish: "Pissed off", variantDifferenceNote: "'Cabreado' in Spain; 'encabronado' in Mexico. Both mean very angry.", exampleSentenceSpain: "Estoy cabreado.", exampleSentenceLatam: "Estoy encabronado.", partOfSpeech: "adjective" },
  { id: "b2-08-fc13", frontSpain: "Mierda", frontLatam: "Madres", backEnglish: "Crap / stuff", variantDifferenceNote: "'Madres' in Mexico is a euphemism for 'mierda'.", exampleSentenceSpain: "Qué mierda de día.", exampleSentenceLatam: "¿Qué madres pasa aquí?", partOfSpeech: "noun" },
  { id: "b2-08-fc14", frontSpain: "Hijo de puta", frontLatam: "Hijo de la chingada", backEnglish: "Son of a b****", variantDifferenceNote: "'Puta' in Spain; 'chingada' in Mexico. Extremely offensive.", exampleSentenceSpain: "Ese hijo de puta me robó.", exampleSentenceLatam: "Ese hijo de la chingada.", partOfSpeech: "noun" },
  { id: "b2-08-fc15", frontSpain: "Culo", frontLatam: "Nalga", backEnglish: "A** / butt", variantDifferenceNote: "'Culo' in Spain; 'nalga' in Mexico (more polite).", exampleSentenceSpain: "Me duele el culo de sentarme.", exampleSentenceLatam: "Me duele la nalga.", partOfSpeech: "noun" },
  { id: "b2-08-fc16", frontSpain: "Cojones", frontLatam: "Huevos", backEnglish: "Balls / guts", variantDifferenceNote: "'Cojones' in Spain; 'huevos' in Mexico. Both anatomical slang.", exampleSentenceSpain: "Tiene cojones para hacer eso.", exampleSentenceLatam: "Tiene huevos para decirle eso.", partOfSpeech: "noun" },
  { id: "b2-08-fc17", frontSpain: "Puta", frontLatam: "Puta", backEnglish: "Whore / b****", variantDifferenceNote: "Same word. Used as an intensifier in Spain ('puto amo').", exampleSentenceSpain: "Es un puto genio.", exampleSentenceLatam: "Esa puta me robó.", partOfSpeech: "noun" },
  { id: "b2-08-fc18", frontSpain: "Cagarla", frontLatam: "Cagarla", backEnglish: "To f*** up / mess up", variantDifferenceNote: "Same expression. 'La cagué' means 'I f***ed up'.", exampleSentenceSpain: "La cagué en el examen.", exampleSentenceLatam: "La cagué con mi comentario.", partOfSpeech: "verb" },
  { id: "b2-08-fc19", frontSpain: "Tonto", frontLatam: "Pendejo", backEnglish: "Stupid / dumb", variantDifferenceNote: "'Tonto' in Spain; 'pendejo' in Mexico. 'Tonto' is milder.", exampleSentenceSpain: "No seas tonto.", exampleSentenceLatam: "No seas pendejo.", partOfSpeech: "adjective" },
  { id: "b2-08-fc20", frontSpain: "Ni de coña", frontLatam: "Ni madres", backEnglish: "No way! / Not a chance!", variantDifferenceNote: "'Ni de coña' in Spain; 'ni madres' in Mexico. Both mean 'absolutely not'.", exampleSentenceSpain: "¿Vienes? ¡Ni de coña!", exampleSentenceLatam: "¿Lo harás? ¡Ni madres!", partOfSpeech: "expression" },
];

export const LESSON_B2_08: LessonData = {
  id: "b2-08",
  title: "Cursing & Adult Language",
  slug: "cursing-adult-language",
  description: "Explicit profanity and rough street jargon from Spain and Mexico for passive comprehension only. Strict safety constraints included.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 8,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_08_vocab,
  grammarSection: b2_08_grammar,
  dialogues: b2_08_dialogues,
  quiz: b2_08_quiz,
  flashcards: b2_08_flashcards,
  vocabularyJson: b2_08_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_08_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Cursing and adult language lesson for passive comprehension in Spain vs LATAM.",
};

// ============================================================
// LESSON B2.09: Regional & Cultural Nuances
// ============================================================

const b2_09_vocab: RegionalVocabItem[] = [
  { word: "Greeting", spainVariant: "¿Qué tal?", latamVariant: "¿Qué onda?", phoneticSpain: "[ke ˈtal]", phoneticLatam: "[ke ˈon.da]", english: "What's up? / How's it going?", partOfSpeech: "expression" },
  { word: "Friend", spainVariant: "Colega", latamVariant: "Carnal", phoneticSpain: "[ko.ˈle.ɣa]", phoneticLatam: "[kaɾ.ˈnal]", english: "Friend, buddy", partOfSpeech: "noun" },
  { word: "Food", spainVariant: "Comida", latamVariant: "Guiso", phoneticSpain: "[ko.ˈmi.ða]", phoneticLatam: "[ˈɣi.so]", english: "Food / meal", partOfSpeech: "noun" },
  { word: "House", spainVariant: "Piso", latamVariant: "Casa", phoneticSpain: "[ˈpi.so]", phoneticLatam: "[ˈka.sa]", english: "House / apartment", partOfSpeech: "noun" },
  { word: "Street", spainVariant: "Calle", latamVariant: "Callejón", phoneticSpain: "[ˈka.ʝe]", phoneticLatam: "[ka.ʝe.ˈxon]", english: "Street / alley", partOfSpeech: "noun" },
  { word: "Music", spainVariant: "Música", latamVariant: "Rola", phoneticSpain: "[ˈmu.si.ka]", phoneticLatam: "[ˈro.la]", english: "Music / song", partOfSpeech: "noun" },
  { word: "Dance", spainVariant: "Baile", latamVariant: "Jarabe", phoneticSpain: "[ˈbaɪ.le]", phoneticLatam: "[xa.ˈɾa.βe]", english: "Dance", partOfSpeech: "noun" },
  { word: "Family", spainVariant: "Familia", latamVariant: "Familia", phoneticSpain: "[fa.ˈmi.lja]", phoneticLatam: "[fa.ˈmi.lja]", english: "Family", partOfSpeech: "noun" },
  { word: "Work", spainVariant: "Curro", latamVariant: "Chamba", phoneticSpain: "[ˈku.ro]", phoneticLatam: "[ˈtʃam.ba]", english: "Work, job", partOfSpeech: "noun" },
  { word: "Money", spainVariant: "Pasta", latamVariant: "Lana", phoneticSpain: "[ˈpas.ta]", phoneticLatam: "[ˈla.na]", english: "Money", partOfSpeech: "noun" },
  { word: "Drink", spainVariant: "Copa", latamVariant: "Cheve", phoneticSpain: "[ˈko.pa]", phoneticLatam: "[ˈtʃe.βe]", english: "Drink (alcoholic)", partOfSpeech: "noun" },
  { word: "Party", spainVariant: "Juerga", latamVariant: "Peda", phoneticSpain: "[ˈxweɾ.ɣa]", phoneticLatam: "[ˈpe.ða]", english: "Party", partOfSpeech: "noun" },
  { word: "Cool", spainVariant: "Guay", latamVariant: "Chido", phoneticSpain: "[ɡˈwaj]", phoneticLatam: "[ˈtʃi.ðo]", english: "Cool, awesome", partOfSpeech: "adjective" },
  { word: "Guy", spainVariant: "Tío", latamVariant: "Güey", phoneticSpain: "[ˈti.o]", phoneticLatam: "[ˈɣwej]", english: "Guy, dude", partOfSpeech: "noun" },
  { word: "Kid", spainVariant: "Chaval", latamVariant: "Chamaco", phoneticSpain: "[tʃa.ˈβal]", phoneticLatam: "[tʃa.ˈma.ko]", english: "Kid, youngster", partOfSpeech: "noun" },
  { word: "Boss", spainVariant: "Jefe", latamVariant: "Jefe", phoneticSpain: "[ˈxe.fe]", phoneticLatam: "[ˈxe.fe]", english: "Boss", partOfSpeech: "noun" },
  { word: "Car", spainVariant: "Coche", latamVariant: "Carro", phoneticSpain: "[ˈko.tʃe]", phoneticLatam: "[ˈka.ro]", english: "Car", partOfSpeech: "noun" },
  { word: "Bus", spainVariant: "Autobús", latamVariant: "Camión", phoneticSpain: "[aw.to.ˈβus]", phoneticLatam: "[ka.ˈmjon]", english: "Bus", partOfSpeech: "noun" },
  { word: "Metro", spainVariant: "Metro", latamVariant: "Metro", phoneticSpain: "[ˈme.tɾo]", phoneticLatam: "[ˈme.tɾo]", english: "Subway", partOfSpeech: "noun" },
  { word: "Beach", spainVariant: "Playa", latamVariant: "Playa", phoneticSpain: "[ˈpla.ʝa]", phoneticLatam: "[ˈpla.ʝa]", english: "Beach", partOfSpeech: "noun" },
];

const b2_09_grammar: GrammarItem[] = [
  {
    title: "Geographic Phrasing",
    spainContent: "Andalusian Spanish drops final consonants: 'pescao' for 'pescado', 'mahón' for 'marrón'. Madrilenians use 'colega' for everyone and favor 'tú' even in service contexts. Catalans may mix Catalan words into Spanish sentences. The north uses 'vosotros' consistently; the south uses it with softer 's' sounds.",
    latamContent: "CDMX Spanish is the broadcast standard but uses ' güey' constantly. Northern Mexico (Monterrey) has a rhythmic, almost singing intonation and uses 'rove' for 'carro'. Coastal areas (Veracruz, Acapulco) have Caribbean-influenced rhythms. Southern Mexico (Oaxaca, Chiapas) preserves more indigenous vocabulary.",
    note: "Regional variation within each country is as significant as Spain-Mexico differences. A Spaniard from Galicia and one from Andalusia may have more trouble understanding each other than a Madrileño and a Chilango.",
  },
  {
    title: "Hospitality Customs",
    spainContent: "Spanish hospitality is direct and schedule-driven. Dinner invitations specify times precisely: 'ven a cenar a las diez' (come for dinner at 10). Guests bring wine or dessert. Leaving early is acceptable with 'me tengo que ir' (I have to go). The host typically pays in restaurants unless it's agreed to 'ir a dutch' (split the bill).",
    latamContent: "Mexican hospitality is warm and flexible. 'Mi casa es tu casa' is literal — guests are expected to treat the home as their own. Dinner times are suggestions; arriving 30 minutes late is normal. Guests bring flowers or sweets. The host never lets guests help with dishes. 'No es molestia' (it's no bother) is the standard response to any thanks.",
    note: "In Spain, punctuality is valued even for social events. In Mexico, arriving exactly on time can make you seem overly eager or even rude.",
  },
];

const b2_09_dialogues: DialogueScenario[] = [
  {
    id: "b2-09-sp-1",
    title: "Andalusian Accent",
    region: "SPAIN",
    setting: "Fish market in Cádiz, southern Spain",
    lines: [
      { speaker: "Pescadero", text: "¿Qué pasa, colega? ¿Te pongo un pescao fresco?", region: "SPAIN", setting: "Cádiz fish market" },
      { speaker: "Cliente", text: "Sí, dame un kilo de boquerone. ¿A cuánto está?", region: "SPAIN", setting: "Cádiz fish market" },
      { speaker: "Pescadero", text: "A diez pavo. Te lo pongo bien mahón, que está de muerte.", region: "SPAIN", setting: "Cádiz fish market" },
    ],
  },
  {
    id: "b2-09-sp-2",
    title: "Madrid Social Norms",
    region: "SPAIN",
    setting: "Dinner invitation at a Madrid apartment",
    lines: [
      { speaker: "Ana", text: "Ven a cenar a las diez. Trae algo de beber si quieres.", region: "SPAIN", setting: "Madrid dinner" },
      { speaker: "Pedro", text: "Genial, llevo una botella de rioja. ¿Necesito llevar algo más?", region: "SPAIN", setting: "Madrid dinner" },
      { speaker: "Ana", text: "No, tía, tú ven y ya está. No te compliques.", region: "SPAIN", setting: "Madrid dinner" },
    ],
  },
  {
    id: "b2-09-sp-3",
    title: "Catalan Mix",
    region: "SPAIN",
    setting: "Coffee shop in Barcelona",
    lines: [
      { speaker: "Jordi", text: "Vale, quedamos en la plaça. Trae el coche, que es lejos.", region: "SPAIN", setting: "Barcelona coffee shop" },
      { speaker: "Marta", text: "Genial, colega. Llevo la cena y tú llevas el vi.", region: "SPAIN", setting: "Barcelona coffee shop" },
      { speaker: "Jordi", text: "Perfecte, així quedem. Ens veiem a les nou.", region: "SPAIN", setting: "Barcelona coffee shop" },
    ],
  },
  {
    id: "b2-09-la-1",
    title: "CDMX Slang",
    region: "LATAM",
    setting: "Street food stall in Mexico City",
    lines: [
      { speaker: "Vendedor", text: "¿Qué onda, güey? ¿Unos tacos al pastor o de suadero?", region: "LATAM", setting: "CDMX street food" },
      { speaker: "Cliente", text: "Dame tres al pastor, con todo. ¿Cuánto es?", region: "LATAM", setting: "CDMX street food" },
      { speaker: "Vendedor", text: "Son treinta pesos, güey. Aquí tienes, que estén chidos.", region: "LATAM", setting: "CDMX street food" },
    ],
  },
  {
    id: "b2-09-la-2",
    title: "Northern Mexico Intonation",
    region: "LATAM",
    setting: "Car dealership in Monterrey",
    lines: [
      { speaker: "Vendedor", text: "¿Qué tal, jefe? ¿Te interesa este rove? Está bien cuidado.", region: "LATAM", setting: "Monterrey dealership" },
      { speaker: "Cliente", text: "Sí, me late. ¿Me lo puedes dejar en quince mil?", region: "LATAM", setting: "Monterrey dealership" },
      { speaker: "Vendedor", text: "No manches, jefe. Eso está muy bajo. Dime en dieciocho.", region: "LATAM", setting: "Monterrey dealership" },
    ],
  },
  {
    id: "b2-09-la-3",
    title: "Mexican Hospitality",
    region: "LATAM",
    setting: "Family dinner in Oaxaca",
    lines: [
      { speaker: "Tía", text: "Pasa, pasa. Mi casa es tu casa. ¿Quieres más mole?", region: "LATAM", setting: "Oaxaca family dinner" },
      { speaker: "Visitante", text: "Muchas gracias, todo está delicioso. No quiero ser molestia.", region: "LATAM", setting: "Oaxaca family dinner" },
      { speaker: "Tía", text: "No es molestia, mijito. Come todo lo que quieras.", region: "LATAM", setting: "Oaxaca family dinner" },
    ],
  },
];

const b2_09_quiz: QuizQuestion[] = [
  {
    questionId: "b2-09-q1",
    type: "multiple-choice",
    questionText: "In Andalusia, 'pescao' is a colloquial form of:",
    options: ["Pescadero", "Pescado", "Pescar", "Pesca"],
    correctAnswer: "Pescado",
    explanation: "Andalusian Spanish often drops final consonants, so 'pescado' becomes 'pescao'.",
  },
  {
    questionId: "b2-09-q2",
    type: "multiple-choice",
    questionText: "In Mexico, arriving exactly on time to a social event can be seen as:",
    options: ["Very polite", "Overly eager or slightly rude", "Expected", "Mandatory"],
    correctAnswer: "Overly eager or slightly rude",
    explanation: "In Mexican culture, arriving 15-30 minutes late to social events is normal and expected. Being exactly on time can seem overly eager.",
  },
  {
    questionId: "b2-09-q3",
    type: "multiple-choice",
    questionText: "In Spain, guests typically bring ______ to a dinner invitation.",
    options: ["Nothing", "Wine or dessert", "Money", "Flowers"],
    correctAnswer: "Wine or dessert",
    explanation: "Spanish dinner etiquette expects guests to bring wine, dessert, or something to drink when invited to dinner.",
  },
  {
    questionId: "b2-09-q4",
    type: "multiple-choice",
    questionText: "In Northern Mexico, 'rove' is slang for:",
    options: ["Road", "Carro (car)", "Robbery", "Rover (brand)"],
    correctAnswer: "Carro (car)",
    explanation: "Northern Mexican Spanish has unique slang; 'rove' is a local variant of 'carro' (car).",
  },
  {
    questionId: "b2-09-q5",
    type: "multiple-choice",
    questionText: "The Mexican phrase 'mi casa es tu casa' means:",
    options: ["I live in your house", "Make yourself at home", "We share a house", "Visit me soon"],
    correctAnswer: "Make yourself at home",
    explanation: "'Mi casa es tu casa' (my house is your house) is the quintessential Mexican hospitality expression, meaning guests should feel completely at home.",
  },
];

const b2_09_flashcards: FlashcardItem[] = [
  { id: "b2-09-fc1", frontSpain: "¿Qué tal?", frontLatam: "¿Qué onda?", backEnglish: "What's up? / How's it going?", variantDifferenceNote: "'Qué tal' in Spain; 'qué onda' in Mexico. Both are casual greetings.", exampleSentenceSpain: "¿Qué tal, colega? ¿Todo bien?", exampleSentenceLatam: "¿Qué onda, güey? ¿Cómo estás?", partOfSpeech: "expression" },
  { id: "b2-09-fc2", frontSpain: "Colega", frontLatam: "Carnal", backEnglish: "Friend, buddy", variantDifferenceNote: "'Colega' in Spain; 'carnal' in Mexico (literally 'brother').", exampleSentenceSpain: "Ese colega es de confianza.", exampleSentenceLatam: "Mi carnal me ayudó con la chamba.", partOfSpeech: "noun" },
  { id: "b2-09-fc3", frontSpain: "Comida", frontLatam: "Guiso", backEnglish: "Food / meal", variantDifferenceNote: "'Comida' is standard; 'guiso' in Mexico refers to a specific stew/dish.", exampleSentenceSpain: "La comida está lista.", exampleSentenceLatam: "El guiso de mi abuela es delicioso.", partOfSpeech: "noun" },
  { id: "b2-09-fc4", frontSpain: "Piso", frontLatam: "Casa", backEnglish: "House / apartment", variantDifferenceNote: "'Piso' in Spain means 'apartment/flat'; 'casa' in Mexico means 'house'.", exampleSentenceSpain: "Vivo en un piso pequeño en el centro.", exampleSentenceLatam: "Mi casa tiene jardín.", partOfSpeech: "noun" },
  { id: "b2-09-fc5", frontSpain: "Calle", frontLatam: "Callejón", backEnglish: "Street / alley", variantDifferenceNote: "'Calle' is standard; 'callejón' in Mexico is a narrow alley.", exampleSentenceSpain: "Vivo en esta calle desde niño.", exampleSentenceLatam: "El callejón está oscuro de noche.", partOfSpeech: "noun" },
  { id: "b2-09-fc6", frontSpain: "Música", frontLatam: "Rola", backEnglish: "Music / song", variantDifferenceNote: "'Música' is standard; 'rola' is Mexican slang for a song.", exampleSentenceSpain: "La música española es muy diversa.", exampleSentenceLatam: "Esa rola está bien chida.", partOfSpeech: "noun" },
  { id: "b2-09-fc7", frontSpain: "Baile", frontLatam: "Jarabe", backEnglish: "Dance", variantDifferenceNote: "'Baile' is standard; 'jarabe' is a traditional Mexican dance (Jarabe Tapatío).", exampleSentenceSpain: "El baile flamenco es apasionante.", exampleSentenceLatam: "El jarabe es el baile nacional.", partOfSpeech: "noun" },
  { id: "b2-09-fc8", frontSpain: "Familia", frontLatam: "Familia", backEnglish: "Family", variantDifferenceNote: "Same word. Both cultures value family highly but express it differently.", exampleSentenceSpain: "La familia es lo primero.", exampleSentenceLatam: "La familia lo es todo.", partOfSpeech: "noun" },
  { id: "b2-09-fc9", frontSpain: "Curro", frontLatam: "Chamba", backEnglish: "Work, job", variantDifferenceNote: "'Curro' in Spain; 'chamba' in Mexico. Both slang for work.", exampleSentenceSpain: "Tengo mucho curro esta semana.", exampleSentenceLatam: "Conseguí una buena chamba.", partOfSpeech: "noun" },
  { id: "b2-09-fc10", frontSpain: "Pasta", frontLatam: "Lana", backEnglish: "Money", variantDifferenceNote: "'Pasta' in Spain; 'lana' in Mexico. Both slang for money.", exampleSentenceSpain: "No tengo pasta para salir.", exampleSentenceLatam: "¿Me prestas un poco de lana?", partOfSpeech: "noun" },
  { id: "b2-09-fc11", frontSpain: "Copa", frontLatam: "Cheve", backEnglish: "Drink (alcoholic)", variantDifferenceNote: "'Copa' in Spain; 'cheve' in Mexico. Both refer to alcoholic drinks.", exampleSentenceSpain: "Vamos a tomar una copa.", exampleSentenceLatam: "¿Te invito una cheve?", partOfSpeech: "noun" },
  { id: "b2-09-fc12", frontSpain: "Juerga", frontLatam: "Peda", backEnglish: "Party", variantDifferenceNote: "'Juerga' in Spain; 'peda' in Mexico. Both mean party.", exampleSentenceSpain: "Ana organizó una juerga increíble.", exampleSentenceLatam: "Hubo una peda épica.", partOfSpeech: "noun" },
  { id: "b2-09-fc13", frontSpain: "Guay", frontLatam: "Chido", backEnglish: "Cool, awesome", variantDifferenceNote: "'Guay' in Spain; 'chido' in Mexico. Both express approval.", exampleSentenceSpain: "¡Qué guay tu nuevo coche!", exampleSentenceLatam: "Está bien chido tu apartamento.", partOfSpeech: "adjective" },
  { id: "b2-09-fc14", frontSpain: "Tío", frontLatam: "Güey", backEnglish: "Guy, dude", variantDifferenceNote: "'Tío' in Spain; 'güey' in Mexico. Both casual terms for friends.", exampleSentenceSpain: "¿Qué pasa, tío?", exampleSentenceLatam: "¿Qué onda, güey?", partOfSpeech: "noun" },
  { id: "b2-09-fc15", frontSpain: "Chaval", frontLatam: "Chamaco", backEnglish: "Kid, youngster", variantDifferenceNote: "'Chaval' in Spain; 'chamaco' in Mexico. Both mean kid.", exampleSentenceSpain: "Ese chaval es muy listo.", exampleSentenceLatam: "El chamaco ya aprendió a leer.", partOfSpeech: "noun" },
  { id: "b2-09-fc16", frontSpain: "Jefe", frontLatam: "Jefe", backEnglish: "Boss", variantDifferenceNote: "Same word. 'Jefe' is used everywhere for boss.", exampleSentenceSpain: "Mi jefe me ascendió.", exampleSentenceLatam: "El jefe quiere que trabajemos más.", partOfSpeech: "noun" },
  { id: "b2-09-fc17", frontSpain: "Coche", frontLatam: "Carro", backEnglish: "Car", variantDifferenceNote: "'Coche' in Spain; 'carro' in Mexico. Both mean car.", exampleSentenceSpain: "Mi coche es nuevo.", exampleSentenceLatam: "Tu carro está bien padre.", partOfSpeech: "noun" },
  { id: "b2-09-fc18", frontSpain: "Autobús", frontLatam: "Camión", backEnglish: "Bus", variantDifferenceNote: "'Autobús' in Spain; 'camión' in Mexico. Both mean bus.", exampleSentenceSpain: "El autobús llega en cinco minutos.", exampleSentenceLatam: "Tomé el camión para ir al centro.", partOfSpeech: "noun" },
  { id: "b2-09-fc19", frontSpain: "Metro", frontLatam: "Metro", backEnglish: "Subway", variantDifferenceNote: "Same word. 'Metro' is used in both regions for subway.", exampleSentenceSpain: "El metro está lleno a esta hora.", exampleSentenceLatam: "El metro de CDMX es enorme.", partOfSpeech: "noun" },
  { id: "b2-09-fc20", frontSpain: "Playa", frontLatam: "Playa", backEnglish: "Beach", variantDifferenceNote: "Same word. Both Spain and Mexico have beautiful beaches.", exampleSentenceSpain: "La playa de Barcelona es urbana.", exampleSentenceLatam: "Las playas de Cancún son paradisíacas.", partOfSpeech: "noun" },
];

export const LESSON_B2_09: LessonData = {
  id: "b2-09",
  title: "Regional & Cultural Nuances",
  slug: "regional-cultural-nuances",
  description: "Explore geographically specific phrasing from Andalusia/Madrid vs CDMX/El Norte, plus hospitality customs and social norms.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 9,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_09_vocab,
  grammarSection: b2_09_grammar,
  dialogues: b2_09_dialogues,
  quiz: b2_09_quiz,
  flashcards: b2_09_flashcards,
  vocabularyJson: b2_09_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_09_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Regional and cultural nuances lesson covering geographic variations and hospitality customs.",
};

// ============================================================
// LESSON B2.10: Native-Level Conversation
// ============================================================

const b2_10_vocab: RegionalVocabItem[] = [
  { word: "Well...", spainVariant: "Pues...", latamVariant: "Pues...", phoneticSpain: "[pwez]", phoneticLatam: "[pwez]", english: "Well... (filler)", partOfSpeech: "filler" },
  { word: "You know", spainVariant: "¿Sabes?", latamVariant: "¿Ves?", phoneticSpain: "[ˈsa.βes]", phoneticLatam: "[ˈβes]", english: "You know / you see", partOfSpeech: "filler" },
  { word: "Actually", spainVariant: "En realidad", latamVariant: "En realidad", phoneticSpain: "[en re.a.li.ˈðað]", phoneticLatam: "[en re.a.li.ˈðað]", english: "Actually / in reality", partOfSpeech: "adverb" },
  { word: "I mean", spainVariant: "Es decir", latamVariant: "O sea", phoneticSpain: "[es de.ˈθiɾ]", phoneticLatam: "[o ˈse.a]", english: "I mean / that is", partOfSpeech: "filler" },
  { word: "Anyway", spainVariant: "En fin", latamVariant: "Total", phoneticSpain: "[en ˈfin]", phoneticLatam: "[to.ˈtal]", english: "Anyway / in short", partOfSpeech: "filler" },
  { word: "Honestly", spainVariant: "A ver", latamVariant: "La neta", phoneticSpain: "[a ˈβeɾ]", phoneticLatam: "[la ˈne.ta]", english: "Honestly / let's see", partOfSpeech: "filler" },
  { word: "Right?", spainVariant: "¿Vale?", latamVariant: "¿Va?", phoneticSpain: "[ˈba.le]", phoneticLatam: "[ˈba]", english: "Right? / Okay?", partOfSpeech: "tag question" },
  { word: "Look", spainVariant: "Mira", latamVariant: "Oye", phoneticSpain: "[ˈmi.ɾa]", phoneticLatam: "[ˈo.ʝe]", english: "Look / hey", partOfSpeech: "filler" },
  { word: "So", spainVariant: "Así que", latamVariant: "Entonces", phoneticSpain: "[a.ˈsi ke]", phoneticLatam: "[en.ˈton.ses]", english: "So / therefore", partOfSpeech: "conjunction" },
  { word: "Maybe", spainVariant: "A lo mejor", latamVariant: "Tal vez", phoneticSpain: "[a lo mo.ˈxoɾ]", phoneticLatam: "[tal ˈβeθ]", english: "Maybe / perhaps", partOfSpeech: "adverb" },
  { word: "Of course", spainVariant: "Claro", latamVariant: "Claro que sí", phoneticSpain: "[ˈkla.ɾo]", phoneticLatam: "[ˈkla.ɾo ke ˈsi]", english: "Of course", partOfSpeech: "expression" },
  { word: "Whatever", spainVariant: "Da igual", latamVariant: "Me da igual", phoneticSpain: "[da i.ˈɣwal]", phoneticLatam: "[me ða i.ˈɣwal]", english: "Whatever / I don't care", partOfSpeech: "expression" },
  { word: "Exactly", spainVariant: "Exacto", latamVariant: "Exactamente", phoneticSpain: "[ek.ˈsak.to]", phoneticLatam: "[ek.sak.ta.ˈmen.te]", english: "Exactly", partOfSpeech: "adverb" },
  { word: "At least", spainVariant: "Por lo menos", latamVariant: "Al menos", phoneticSpain: "[poɾ lo ˈme.nos]", phoneticLatam: "[al ˈme.nos]", english: "At least", partOfSpeech: "expression" },
  { word: "By the way", spainVariant: "Por cierto", latamVariant: "Por cierto", phoneticSpain: "[poɾ ˈθjeɾ.to]", phoneticLatam: "[poɾ ˈsjeɾ.to]", english: "By the way", partOfSpeech: "expression" },
  { word: "In the end", spainVariant: "Al final", latamVariant: "Al final de cuentas", phoneticSpain: "[al fi.ˈnal]", phoneticLatam: "[al fi.ˈnal ðe ˈkwen.tas]", english: "In the end", partOfSpeech: "expression" },
  { word: "Depends", spainVariant: "Depende", latamVariant: "Depende", phoneticSpain: "[de.ˈpen.de]", phoneticLatam: "[de.ˈpen.de]", english: "It depends", partOfSpeech: "expression" },
  { word: "For sure", spainVariant: "Seguro", latamVariant: "Segurísimo", phoneticSpain: "[se.ˈɣu.ɾo]", phoneticLatam: "[se.ɣu.ˈɾi.si.mo]", english: "For sure", partOfSpeech: "adverb" },
  { word: "Suddenly", spainVariant: "De repente", latamVariant: "De repente", phoneticSpain: "[de re.ˈpen.te]", phoneticLatam: "[de re.ˈpen.te]", english: "Suddenly", partOfSpeech: "adverb" },
  { word: "Basically", spainVariant: "Básicamente", latamVariant: "Básicamente", phoneticSpain: "[ˈba.si.ka.men.te]", phoneticLatam: "[ˈba.si.ka.men.te]", english: "Basically", partOfSpeech: "adverb" },
];

const b2_10_grammar: GrammarItem[] = [
  {
    title: "Discourse Markers",
    spainContent: "Spaniards use 'pues' and 'bueno' extensively as conversational bridges. 'A ver' serves as both 'let's see' and 'honestly'. 'Es que' introduces explanations or excuses. 'Vamos' softens requests: 'Vamos a ver' (let's see). These markers make speech sound natural and unhurried.",
    latamContent: "Mexicans favor 'o sea' as the universal clarification marker, sometimes used multiple times per sentence. 'La neta' introduces honest opinions. '¿Va?' at the end of statements seeks confirmation. 'Pues' is also common but often shortened to 'ps' in speech. 'A ver' is less frequent than in Spain.",
    note: "Discourse markers are the glue of native speech. Without them, even grammatically perfect Spanish sounds robotic. Master these before worrying about complex grammar.",
  },
  {
    title: "Hedges and Softeners",
    spainContent: "Spanish hedging uses conditional and subjunctive: 'podría ser' (it could be), 'quizás' (perhaps), 'a lo mejor' (maybe). 'Un poco' and 'bastante' soften adjectives: 'un poco complicado' (a bit complicated). The phrase 'no sé si...' (I don't know if...) introduces gentle disagreement.",
    latamContent: "Mexican hedging is more direct but uses 'como que' frequently: 'como que no me convence' (like, I'm not convinced). 'Más o menos' (more or less) is the universal hedge. 'Al rato' (later) is deliberately vague. 'Ahorita' can mean anything from 'right now' to 'sometime today' depending on context.",
    note: "Hedges are essential for politeness. Direct statements without hedging sound aggressive or childish in both cultures. 'Quizás' (Spain) and 'como que' (Mexico) are your go-to softeners.",
  },
];

const b2_10_dialogues: DialogueScenario[] = [
  {
    id: "b2-10-sp-1",
    title: "Casual Catch-Up",
    region: "SPAIN",
    setting: "Two friends meeting for coffee in Madrid",
    lines: [
      { speaker: "Pablo", text: "Pues mira, te cuento. Al final no fui al curro ayer.", region: "SPAIN", setting: "Madrid café" },
      { speaker: "Lucía", text: "¿Sí? ¿Qué pasó? Es que no me dijiste nada.", region: "SPAIN", setting: "Madrid café" },
      { speaker: "Pablo", text: "Vamos a ver, estaba un poco cansado y decidí quedarme. ¿Sabes cómo es?", region: "SPAIN", setting: "Madrid café" },
    ],
  },
  {
    id: "b2-10-sp-2",
    title: "Making Plans",
    region: "SPAIN",
    setting: "Phone call between friends in Barcelona",
    lines: [
      { speaker: "Marta", text: "Oye, ¿quedamos este finde o qué? A ver, tengo tiempo libre.", region: "SPAIN", setting: "Barcelona phone call" },
      { speaker: "Carlos", text: "Pues en realidad pensaba ir a la playa. ¿Te apetece?", region: "SPAIN", setting: "Barcelona phone call" },
      { speaker: "Marta", text: "Vale, pero es que no sé si hará buen tiempo. Quizás mejor el sábado.", region: "SPAIN", setting: "Barcelona phone call" },
    ],
  },
  {
    id: "b2-10-sp-3",
    title: "Expressing Uncertainty",
    region: "SPAIN",
    setting: "Office conversation in Seville",
    lines: [
      { speaker: "Andrés", text: "En fin, el proyecto está bastante complicado. No sé si lo terminaremos a tiempo.", region: "SPAIN", setting: "Seville office" },
      { speaker: "Elena", text: "A lo mejor si pedimos ayuda... Es decir, no estamos solos en esto.", region: "SPAIN", setting: "Seville office" },
      { speaker: "Andrés", text: "Tienes razón. Por lo menos podríamos intentarlo, ¿no?", region: "SPAIN", setting: "Seville office" },
    ],
  },
  {
    id: "b2-10-la-1",
    title: "Casual Conversation",
    region: "LATAM",
    setting: "Friends at a park in Mexico City",
    lines: [
      { speaker: "Miguel", text: "Oye, güey, la neta no fui a la chamba ayer. O sea, estaba bien cansado.", region: "LATAM", setting: "CDMX park" },
      { speaker: "Sofía", text: "¿No manches? ¿Y qué te dijo el jefe? ¿Va?", region: "LATAM", setting: "CDMX park" },
      { speaker: "Miguel", text: "Pues, o sea, ni me dijo nada. Total, ahorita ya ni importa.", region: "LATAM", setting: "CDMX park" },
    ],
  },
  {
    id: "b2-10-la-2",
    title: "Planning Weekend",
    region: "LATAM",
    setting: "WhatsApp voice messages between friends in Guadalajara",
    lines: [
      { speaker: "Diego", text: "Oye, ¿qué onda el finde? ¿Vamos a la playa o qué?", region: "LATAM", setting: "Guadalajara WhatsApp" },
      { speaker: "Laura", text: "Pues la neta tenía pensado descansar. O sea, estoy bien agotada.", region: "LATAM", setting: "Guadalajara WhatsApp" },
      { speaker: "Diego", text: "Va, entonces al rato. Como que mejor otro día, ¿no?", region: "LATAM", setting: "Guadalajara WhatsApp" },
    ],
  },
  {
    id: "b2-10-la-3",
    title: "Work Discussion",
    region: "LATAM",
    setting: "Team meeting in Monterrey",
    lines: [
      { speaker: "Valeria", text: "O sea, el proyecto está complicado, ¿va? Pues como que no sé si demos a tiempo.", region: "LATAM", setting: "Monterrey meeting" },
      { speaker: "Jorge", text: "La neta, si pedimos ayuda... Total, no estamos solos.", region: "LATAM", setting: "Monterrey meeting" },
      { speaker: "Valeria", text: "Tienes razón. Al menos podemos intentarlo. ¿Va que va?", region: "LATAM", setting: "Monterrey meeting" },
    ],
  },
];

const b2_10_quiz: QuizQuestion[] = [
  {
    questionId: "b2-10-q1",
    type: "multiple-choice",
    questionText: "In Spain, 'a ver' is commonly used as:",
    options: ["To see visually", "A conversational filler meaning 'let's see' or 'honestly'", "To watch TV", "To verify facts"],
    correctAnswer: "A conversational filler meaning 'let's see' or 'honestly'",
    explanation: "'A ver' is one of Spain's most common discourse markers, used to pause, soften, or introduce a new thought.",
  },
  {
    questionId: "b2-10-q2",
    type: "multiple-choice",
    questionText: "The Mexican equivalent of Spanish 'es decir' (I mean/that is) is:",
    options: ["Por eso", "O sea", "Porque", "Así que"],
    correctAnswer: "O sea",
    explanation: "'O sea' is the quintessential Mexican clarification marker, used similarly to 'es decir' in Spain but much more frequently.",
  },
  {
    questionId: "b2-10-q3",
    type: "multiple-choice",
    questionText: "In Mexico, '¿Va?' at the end of a sentence means:",
    options: ["Go away", "Right? / Okay?", "How much?", "Where?"],
    correctAnswer: "Right? / Okay?",
    explanation: "'¿Va?' is a Mexican tag question seeking confirmation, similar to '¿vale?' in Spain.",
  },
  {
    questionId: "b2-10-q4",
    type: "multiple-choice",
    questionText: "'La neta' in Mexican Spanish introduces:",
    options: ["A lie", "An honest opinion or truth", "A question", "A command"],
    correctAnswer: "An honest opinion or truth",
    explanation: "'La neta' is Mexican slang for 'the truth' or 'honestly'. It introduces frank, unfiltered opinions.",
  },
  {
    questionId: "b2-10-q5",
    type: "multiple-choice",
    questionText: "In Spain, 'en fin' is used to:",
    options: ["End a conversation", "Transition or summarize ('anyway/in short')", "Ask a question", "Express anger"],
    correctAnswer: "Transition or summarize ('anyway/in short')",
    explanation: "'En fin' is a Spanish discourse marker used to transition topics or summarize a point, similar to 'anyway' in English.",
  },
];

const b2_10_flashcards: FlashcardItem[] = [
  { id: "b2-10-fc1", frontSpain: "Pues...", frontLatam: "Pues...", backEnglish: "Well... (filler)", variantDifferenceNote: "Same word. 'Pues' is the universal Spanish conversational bridge.", exampleSentenceSpain: "Pues mira, te cuento lo que pasó.", exampleSentenceLatam: "Pues, la neta no sé qué decirte.", partOfSpeech: "filler" },
  { id: "b2-10-fc2", frontSpain: "¿Sabes?", frontLatam: "¿Ves?", backEnglish: "You know / you see", variantDifferenceNote: "'¿Sabes?' in Spain; '¿Ves?' in Mexico. Both seek engagement.", exampleSentenceSpain: "Es difícil, ¿sabes?", exampleSentenceLatam: "Es complicado, ¿ves?", partOfSpeech: "filler" },
  { id: "b2-10-fc3", frontSpain: "En realidad", frontLatam: "En realidad", backEnglish: "Actually / in reality", variantDifferenceNote: "Same phrase. Used to introduce a correction or clarification.", exampleSentenceSpain: "En realidad, no es tan difícil.", exampleSentenceLatam: "En realidad, yo no sabía.", partOfSpeech: "adverb" },
  { id: "b2-10-fc4", frontSpain: "Es decir", frontLatam: "O sea", backEnglish: "I mean / that is", variantDifferenceNote: "'Es decir' in Spain; 'o sea' in Mexico. Both clarify meaning.", exampleSentenceSpain: "Es decir, no podemos ir.", exampleSentenceLatam: "O sea, no podemos ir.", partOfSpeech: "filler" },
  { id: "b2-10-fc5", frontSpain: "En fin", frontLatam: "Total", backEnglish: "Anyway / in short", variantDifferenceNote: "'En fin' in Spain; 'total' in Mexico. Both transition topics.", exampleSentenceSpain: "En fin, olvidemos el pasado.", exampleSentenceLatam: "Total, ya ni importa.", partOfSpeech: "filler" },
  { id: "b2-10-fc6", frontSpain: "A ver", frontLatam: "La neta", backEnglish: "Honestly / let's see", variantDifferenceNote: "'A ver' in Spain; 'la neta' in Mexico. Both introduce frank talk.", exampleSentenceSpain: "A ver, dime la verdad.", exampleSentenceLatam: "La neta, no me gustó.", partOfSpeech: "filler" },
  { id: "b2-10-fc7", frontSpain: "¿Vale?", frontLatam: "¿Va?", backEnglish: "Right? / Okay?", variantDifferenceNote: "'¿Vale?' in Spain; '¿Va?' in Mexico. Both seek confirmation.", exampleSentenceSpain: "Nos vemos mañana, ¿vale?", exampleSentenceLatam: "Nos vemos mañana, ¿va?", partOfSpeech: "tag question" },
  { id: "b2-10-fc8", frontSpain: "Mira", frontLatam: "Oye", backEnglish: "Look / hey", variantDifferenceNote: "'Mira' in Spain; 'oye' in Mexico. Both get attention.", exampleSentenceSpain: "Mira, necesito hablar contigo.", exampleSentenceLatam: "Oye, necesito hablar contigo.", partOfSpeech: "filler" },
  { id: "b2-10-fc9", frontSpain: "Así que", frontLatam: "Entonces", backEnglish: "So / therefore", variantDifferenceNote: "'Así que' in Spain; 'entonces' in Mexico. Both mean 'so'.", exampleSentenceSpain: "Así que decidí quedarme.", exampleSentenceLatam: "Entonces decidí quedarme.", partOfSpeech: "conjunction" },
  { id: "b2-10-fc10", frontSpain: "A lo mejor", frontLatam: "Tal vez", backEnglish: "Maybe / perhaps", variantDifferenceNote: "'A lo mejor' in Spain; 'tal vez' in Mexico. Both express uncertainty.", exampleSentenceSpain: "A lo mejor mañana tengo tiempo.", exampleSentenceLatam: "Tal vez mañana tenga tiempo.", partOfSpeech: "adverb" },
  { id: "b2-10-fc11", frontSpain: "Claro", frontLatam: "Claro que sí", backEnglish: "Of course", variantDifferenceNote: "'Claro' in Spain; 'claro que sí' in Mexico. Both affirm strongly.", exampleSentenceSpain: "Claro, cuenta conmigo.", exampleSentenceLatam: "Claro que sí, ahí estamos.", partOfSpeech: "expression" },
  { id: "b2-10-fc12", frontSpain: "Da igual", frontLatam: "Me da igual", backEnglish: "Whatever / I don't care", variantDifferenceNote: "'Da igual' in Spain; 'me da igual' in Mexico. Both express indifference.", exampleSentenceSpain: "Da igual, elige tú.", exampleSentenceLatam: "Me da igual, tú decides.", partOfSpeech: "expression" },
  { id: "b2-10-fc13", frontSpain: "Exacto", frontLatam: "Exactamente", backEnglish: "Exactly", variantDifferenceNote: "'Exacto' in Spain; 'exactamente' in Mexico. Both agree precisely.", exampleSentenceSpain: "¡Exacto! Eso es lo que quería decir.", exampleSentenceLatam: "¡Exactamente! Así es.", partOfSpeech: "adverb" },
  { id: "b2-10-fc14", frontSpain: "Por lo menos", frontLatam: "Al menos", backEnglish: "At least", variantDifferenceNote: "'Por lo menos' in Spain; 'al menos' in Mexico. Both mean 'at least'.", exampleSentenceSpain: "Por lo menos lo intentamos.", exampleSentenceLatam: "Al menos lo intentamos.", partOfSpeech: "expression" },
  { id: "b2-10-fc15", frontSpain: "Por cierto", frontLatam: "Por cierto", backEnglish: "By the way", variantDifferenceNote: "Same phrase. Used to introduce a tangential topic.", exampleSentenceSpain: "Por cierto, ¿cómo está tu hermana?", exampleSentenceLatam: "Por cierto, ¿ya viste la película?", partOfSpeech: "expression" },
  { id: "b2-10-fc16", frontSpain: "Al final", frontLatam: "Al final de cuentas", backEnglish: "In the end", variantDifferenceNote: "'Al final' in Spain; 'al final de cuentas' in Mexico. Both conclude.", exampleSentenceSpain: "Al final, todo salió bien.", exampleSentenceLatam: "Al final de cuentas, ganamos.", partOfSpeech: "expression" },
  { id: "b2-10-fc17", frontSpain: "Depende", frontLatam: "Depende", backEnglish: "It depends", variantDifferenceNote: "Same word. The universal non-committal response.", exampleSentenceSpain: "Depende del día que sea.", exampleSentenceLatam: "Depende de cómo me sienta.", partOfSpeech: "expression" },
  { id: "b2-10-fc18", frontSpain: "Seguro", frontLatam: "Segurísimo", backEnglish: "For sure", variantDifferenceNote: "'Seguro' in Spain; 'segurísimo' in Mexico. Both express certainty.", exampleSentenceSpain: "Seguro que sí, no te preocupes.", exampleSentenceLatam: "Segurísimo, cuenta con eso.", partOfSpeech: "adverb" },
  { id: "b2-10-fc19", frontSpain: "De repente", frontLatam: "De repente", backEnglish: "Suddenly", variantDifferenceNote: "Same phrase. Used for unexpected events.", exampleSentenceSpain: "De repente, empezó a llover.", exampleSentenceLatam: "De repente, se fue la luz.", partOfSpeech: "adverb" },
  { id: "b2-10-fc20", frontSpain: "Básicamente", frontLatam: "Básicamente", backEnglish: "Basically", variantDifferenceNote: "Same word. Used to simplify complex ideas.", exampleSentenceSpain: "Básicamente, es lo mismo.", exampleSentenceLatam: "Básicamente, sí estoy de acuerdo.", partOfSpeech: "adverb" },
];

export const LESSON_B2_10: LessonData = {
  id: "b2-10",
  title: "Native-Level Conversation",
  slug: "native-level-conversation",
  description: "Master subtle discourse markers, hedges, and structural linguistic polish to sound like a native speaker in both Spain and Mexico.",
  difficulty: "Upper-Intermediate",
  level: "B2",
  order: 10,
  imageUrl: null,
  durationMinutes: 20,
  isPublished: true,
  vocabularyTable: b2_10_vocab,
  grammarSection: b2_10_grammar,
  dialogues: b2_10_dialogues,
  quiz: b2_10_quiz,
  flashcards: b2_10_flashcards,
  vocabularyJson: b2_10_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: b2_10_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Native-level conversation lesson covering discourse markers and hedges in Spain vs LATAM.",
};

// ============================================================
// FINAL EXPORTS
// ============================================================

export const B2_LESSONS: LessonData[] = [
  LESSON_B2_01,
  LESSON_B2_02,
  LESSON_B2_03,
  LESSON_B2_04,
  LESSON_B2_05,
  LESSON_B2_06,
  LESSON_B2_07,
  LESSON_B2_08,
  LESSON_B2_09,
  LESSON_B2_10,
];