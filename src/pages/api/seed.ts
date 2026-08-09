import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, UserRole, SpanishLevel, Difficulty } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const lessons = [
  {
    title: "Greetings and Introductions",
    description: "Learn how to greet people and introduce yourself in Spanish",
    level: SpanishLevel.A1,
    slug: "greetings-and-introductions",
    difficulty: Difficulty.BEGINNER,
    order: 1,
    vocabularyJson: [
      { spanish: "hola", english: "hello", partOfSpeech: "interjection" },
      { spanish: "buenos días", english: "good morning", partOfSpeech: "phrase" },
      { spanish: "buenas tardes", english: "good afternoon", partOfSpeech: "phrase" },
      { spanish: "buenas noches", english: "good night", partOfSpeech: "phrase" },
      { spanish: "me llamo", english: "my name is", partOfSpeech: "phrase" },
      { spanish: "¿cómo estás?", english: "how are you?", partOfSpeech: "phrase" },
      { spanish: "mucho gusto", english: "nice to meet you", partOfSpeech: "phrase" },
      { spanish: "adiós", english: "goodbye", partOfSpeech: "interjection" },
    ],
    grammarJson: [
      {
        topic: "Formal vs Informal",
        explanation: "Use 'tú' for friends/family, 'usted' for strangers/authority",
        examples: ["¿Cómo estás? (tú)", "¿Cómo está usted? (formal)"],
      },
    ],
    content: `## Greetings in Spanish\n\nSpanish greetings vary by time of day and formality.\n\n### Basic Greetings\n- **Hola** — Hello (any time)\n- **Buenos días** — Good morning (until noon)\n- **Buenas tardes** — Good afternoon (noon to sunset)\n- **Buenas noches** — Good night (after sunset)\n\n### Introductions\n\`\`\`\nA: ¡Hola! Me llamo María.\nB: Mucho gusto, María. Yo soy Carlos.\nA: ¿Cómo estás, Carlos?\nB: Estoy bien, gracias. ¿Y tú?\n\`\`\`\n\n### Practice\nGreet three people using different times of day.`,
  },
  {
    title: "Numbers 1-100",
    description: "Master counting in Spanish from one to one hundred",
    level: SpanishLevel.A1,
    slug: "numbers-1-100",
    difficulty: Difficulty.BEGINNER,
    order: 2,
    vocabularyJson: [
      { spanish: "uno", english: "one", partOfSpeech: "number" },
      { spanish: "dos", english: "two", partOfSpeech: "number" },
      { spanish: "diez", english: "ten", partOfSpeech: "number" },
      { spanish: "veinte", english: "twenty", partOfSpeech: "number" },
      { spanish: "cien", english: "one hundred", partOfSpeech: "number" },
    ],
    grammarJson: [
      {
        topic: "Number Agreement",
        explanation: "Uno becomes 'un' or 'una' before nouns",
        examples: ["un libro", "una mesa"],
      },
    ],
    content: `## Spanish Numbers\n\n### 1-10\nuno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez\n\n### Tens\nveinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien\n\n### Examples\n- Tengo **veinticinco** años. (I'm 25 years old.)\n- El libro cuesta **treinta** euros. (The book costs 30 euros.)`,
  },
  {
    title: "Colors and Descriptions",
    description: "Describe the world around you with colors and adjectives",
    level: SpanishLevel.A1,
    slug: "colors-and-descriptions",
    difficulty: Difficulty.BEGINNER,
    order: 3,
    vocabularyJson: [
      { spanish: "rojo", english: "red", partOfSpeech: "adjective" },
      { spanish: "azul", english: "blue", partOfSpeech: "adjective" },
      { spanish: "verde", english: "green", partOfSpeech: "adjective" },
      { spanish: "amarillo", english: "yellow", partOfSpeech: "adjective" },
      { spanish: "grande", english: "big", partOfSpeech: "adjective" },
      { spanish: "pequeño", english: "small", partOfSpeech: "adjective" },
    ],
    grammarJson: [
      {
        topic: "Adjective Agreement",
        explanation: "Adjectives must match the gender and number of the noun",
        examples: ["la casa roja", "el coche rojo", "las casas rojas"],
      },
    ],
    content: `## Colors and Descriptions\n\nSpanish adjectives come **after** the noun and must agree in gender and number.\n\n### Common Colors\n- rojo/roja — red\n- azul — blue (no gender change)\n- verde — green\n- amarillo/amarilla — yellow\n\n### Size\n- grande — big\n- pequeño/pequeña — small\n\n### Example\n\`\`\`\nLa casa grande es roja.\nThe big house is red.\n\`\`\``,
  },
  {
    title: "Family Members",
    description: "Talk about your family in Spanish",
    level: SpanishLevel.A1,
    slug: "family-members",
    difficulty: Difficulty.BEGINNER,
    order: 4,
    vocabularyJson: [
      { spanish: "madre", english: "mother", partOfSpeech: "noun" },
      { spanish: "padre", english: "father", partOfSpeech: "noun" },
      { spanish: "hermano", english: "brother", partOfSpeech: "noun" },
      { spanish: "hermana", english: "sister", partOfSpeech: "noun" },
      { spanish: "abuela", english: "grandmother", partOfSpeech: "noun" },
      { spanish: "abuelo", english: "grandfather", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Possessive Adjectives",
        explanation: "mi (my), tu (your), su (his/her/their)",
        examples: ["mi madre", "tu hermano", "su abuela"],
      },
    ],
    content: `## Family Members\n\n### Nuclear Family\n- madre / padre — mother / father\n- hermano / hermana — brother / sister\n- hijo / hija — son / daughter\n\n### Extended Family\n- abuelo / abuela — grandfather / grandmother\n- tío / tía — uncle / aunt\n- primo / prima — cousin\n\n### Example\n\`\`\`\nMi familia es grande. Tengo dos hermanos y una hermana.\nMy family is big. I have two brothers and one sister.\n\`\`\``,
  },
  {
    title: "Daily Routines",
    description: "Describe your daily activities in Spanish",
    level: SpanishLevel.A1,
    slug: "daily-routines",
    difficulty: Difficulty.BEGINNER,
    order: 5,
    vocabularyJson: [
      { spanish: "despertar", english: "to wake up", partOfSpeech: "verb" },
      { spanish: "desayunar", english: "to have breakfast", partOfSpeech: "verb" },
      { spanish: "trabajar", english: "to work", partOfSpeech: "verb" },
      { spanish: "estudiar", english: "to study", partOfSpeech: "verb" },
      { spanish: "dormir", english: "to sleep", partOfSpeech: "verb" },
    ],
    grammarJson: [
      {
        topic: "Reflexive Verbs",
        explanation: "Use 'se' for actions done to oneself",
        examples: ["Me despierto a las siete.", "Se ducha por la mañana."],
      },
    ],
    content: `## Daily Routines\n\n### Morning\n- Me despierto a las siete. (I wake up at 7.)\n- Desayuno café y tostadas. (I have coffee and toast for breakfast.)\n\n### Afternoon\n- Trabajo de nueve a cinco. (I work from 9 to 5.)\n- Como en un restaurante. (I eat at a restaurant.)\n\n### Evening\n- Estudio español por la noche. (I study Spanish at night.)\n- Me acuesto a las once. (I go to bed at 11.)`,
  },
  {
    title: "Food and Restaurants",
    description: "Order food and talk about meals in Spanish",
    level: SpanishLevel.A2,
    slug: "food-and-restaurants",
    difficulty: Difficulty.BEGINNER,
    order: 6,
    vocabularyJson: [
      { spanish: "restaurante", english: "restaurant", partOfSpeech: "noun" },
      { spanish: "camarero", english: "waiter", partOfSpeech: "noun" },
      { spanish: "cuenta", english: "bill", partOfSpeech: "noun" },
      { spanish: "propina", english: "tip", partOfSpeech: "noun" },
      { spanish: "delicioso", english: "delicious", partOfSpeech: "adjective" },
    ],
    grammarJson: [
      {
        topic: "Ordering Food",
        explanation: "Use 'quisiera' (I would like) for polite requests",
        examples: ["Quisiera una paella, por favor.", "¿Me trae agua?"],
      },
    ],
    content: `## At the Restaurant\n\n### Ordering\n\`\`\`\nCamarero: ¿Qué desea usted?\nCliente: Quisiera la paella valenciana, por favor.\nCamarero: ¿Y para beber?\nCliente: Una cerveza, por favor.\n\`\`\`\n\n### Useful Phrases\n- La cuenta, por favor. — The bill, please.\n- Está delicioso. — It's delicious.\n- ¿Tienen menú vegetariano? — Do you have a vegetarian menu?`,
  },
  {
    title: "Directions and Places",
    description: "Ask for and give directions in Spanish",
    level: SpanishLevel.A2,
    slug: "directions-and-places",
    difficulty: Difficulty.ELEMENTARY,
    order: 7,
    vocabularyJson: [
      { spanish: "izquierda", english: "left", partOfSpeech: "noun" },
      { spanish: "derecha", english: "right", partOfSpeech: "noun" },
      { spanish: "recto", english: "straight", partOfSpeech: "adverb" },
      { spanish: "esquina", english: "corner", partOfSpeech: "noun" },
      { spanish: "calle", english: "street", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Imperatives for Directions",
        explanation: "Use command forms to give directions",
        examples: ["Gire a la izquierda.", "Siga recto.", "Cruce la calle."],
      },
    ],
    content: `## Asking for Directions\n\n### Key Questions\n- ¿Dónde está...? — Where is...?\n- ¿Cómo llego a...? — How do I get to...?\n- ¿Está lejos? — Is it far?\n\n### Giving Directions\n\`\`\`\nGire a la derecha en la esquina.\nSiga recto por dos cuadras.\nEl banco está a la izquierda.\n\`\`\``,
  },
  {
    title: "Shopping and Clothes",
    description: "Navigate shopping and describe clothing",
    level: SpanishLevel.A2,
    slug: "shopping-and-clothes",
    difficulty: Difficulty.ELEMENTARY,
    order: 8,
    vocabularyJson: [
      { spanish: "tienda", english: "store", partOfSpeech: "noun" },
      { spanish: "camisa", english: "shirt", partOfSpeech: "noun" },
      { spanish: "pantalones", english: "pants", partOfSpeech: "noun" },
      { spanish: "zapatos", english: "shoes", partOfSpeech: "noun" },
      { spanish: "talla", english: "size", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Demonstrative Adjectives",
        explanation: "este (this), ese (that), aquel (that over there)",
        examples: ["Esta camisa es bonita.", "Esos zapatos son caros."],
      },
    ],
    content: `## Shopping in Spanish\n\n### At the Store\n\`\`\`\nCliente: ¿Tiene esta camisa en talla mediana?\nVendedor: Sí, aquí la tiene.\nCliente: ¿Cuánto cuesta?\nVendedor: Cuesta veinticinco euros.\n\`\`\`\n\n### Clothing Vocabulary\n- camisa / camiseta — shirt / t-shirt\n- pantalones / vaqueros — pants / jeans\n- falda — skirt\n- abrigo — coat`,
  },
  {
    title: "Weather and Seasons",
    description: "Talk about weather and seasons in Spanish",
    level: SpanishLevel.A2,
    slug: "weather-and-seasons",
    difficulty: Difficulty.ELEMENTARY,
    order: 9,
    vocabularyJson: [
      { spanish: "sol", english: "sun", partOfSpeech: "noun" },
      { spanish: "lluvia", english: "rain", partOfSpeech: "noun" },
      { spanish: "nieve", english: "snow", partOfSpeech: "noun" },
      { spanish: "viento", english: "wind", partOfSpeech: "noun" },
      { spanish: "calor", english: "heat", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Weather Expressions",
        explanation: "Use 'hace' for weather conditions",
        examples: ["Hace sol.", "Hace frío.", "Hace viento."],
      },
    ],
    content: `## Weather Expressions\n\n### Using 'Hace'\n- Hace sol. — It's sunny.\n- Hace frío. — It's cold.\n- Hace calor. — It's hot.\n- Hace viento. — It's windy.\n\n### Using 'Está'\n- Está nublado. — It's cloudy.\n- Está lloviendo. — It's raining.\n\n### Seasons\n- primavera — spring\n- verano — summer\n- otoño — autumn\n- invierno — winter`,
  },
  {
    title: "Hobbies and Free Time",
    description: "Talk about what you do in your free time",
    level: SpanishLevel.A2,
    slug: "hobbies-and-free-time",
    difficulty: Difficulty.ELEMENTARY,
    order: 10,
    vocabularyJson: [
      { spanish: "hobby", english: "hobby", partOfSpeech: "noun" },
      { spanish: "música", english: "music", partOfSpeech: "noun" },
      { spanish: "deporte", english: "sport", partOfSpeech: "noun" },
      { spanish: "película", english: "movie", partOfSpeech: "noun" },
      { spanish: "viajar", english: "to travel", partOfSpeech: "verb" },
    ],
    grammarJson: [
      {
        topic: "Gustar with Activities",
        explanation: "Use 'me gusta' for singular, 'me gustan' for plural",
        examples: ["Me gusta leer.", "Me gustan los deportes."],
      },
    ],
    content: `## Hobbies and Free Time\n\n### Expressing Likes\n- Me gusta leer libros. — I like reading books.\n- Me gusta escuchar música. — I like listening to music.\n- No me gusta correr. — I don't like running.\n\n### Common Hobbies\n- ver la televisión — watch TV\n- salir con amigos — go out with friends\n- cocinar — cook\n- viajar — travel`,
  },
  {
    title: "Past Tense (Preterite)",
    description: "Talk about completed past actions using the preterite tense",
    level: SpanishLevel.B1,
    slug: "past-tense-preterite",
    difficulty: Difficulty.INTERMEDIATE,
    order: 11,
    vocabularyJson: [
      { spanish: "ayer", english: "yesterday", partOfSpeech: "adverb" },
      { spanish: "anteayer", english: "day before yesterday", partOfSpeech: "adverb" },
      { spanish: "la semana pasada", english: "last week", partOfSpeech: "phrase" },
      { spanish: "el año pasado", english: "last year", partOfSpeech: "phrase" },
    ],
    grammarJson: [
      {
        topic: "Preterite Regular Verbs",
        explanation: "AR verbs: -é, -aste, -ó, -amos, -asteis, -aron. ER/IR verbs: -í, -iste, -ió, -imos, -isteis, -ieron",
        examples: ["Hablé con María.", "Comí paella.", "Viví en Madrid."],
      },
    ],
    content: `## The Preterite Tense\n\nThe preterite describes **completed** past actions.\n\n### Regular Verbs\n| Person | Hablar | Comer | Vivir |\n|--------|--------|-------|-------|\n| yo | hablé | comí | viví |\n| tú | hablaste | comiste | viviste |\n| él/ella | habló | comió | vivió |\n\n### Example\n\`\`\`\nAyer comí en un restaurante italiano.\nPedí pasta y tomé vino tinto.\nFue una cena deliciosa.\n\`\`\``,
  },
  {
    title: "Past Tense (Imperfect)",
    description: "Describe ongoing past situations and habits",
    level: SpanishLevel.B1,
    slug: "past-tense-imperfect",
    difficulty: Difficulty.INTERMEDIATE,
    order: 12,
    vocabularyJson: [
      { spanish: "siempre", english: "always", partOfSpeech: "adverb" },
      { spanish: "nunca", english: "never", partOfSpeech: "adverb" },
      { spanish: "a menudo", english: "often", partOfSpeech: "phrase" },
      { spanish: "de niño", english: "as a child", partOfSpeech: "phrase" },
    ],
    grammarJson: [
      {
        topic: "Imperfect vs Preterite",
        explanation: "Imperfect for ongoing/habitual past; Preterite for completed actions",
        examples: ["Cuando era niño, jugaba fútbol. (imperfect)", "Ayer jugué fútbol. (preterite)"],
      },
    ],
    content: `## The Imperfect Tense\n\nThe imperfect describes **ongoing** or **habitual** past actions.\n\n### Regular Endings\n| Person | AR | ER/IR |\n|--------|-----|-------|\n| yo | -aba | -ía |\n| tú | -abas | -ías |\n| él/ella | -aba | -ía |\n\n### Example\n\`\`\`\nDe niño, vivía en Barcelona.\nTodos los veranos, íbamos a la playa.\nMi abuela siempre nos preparaba paella.\n\`\`\``,
  },
  {
    title: "Future Plans",
    description: "Talk about future events and intentions",
    level: SpanishLevel.B1,
    slug: "future-plans",
    difficulty: Difficulty.INTERMEDIATE,
    order: 13,
    vocabularyJson: [
      { spanish: "mañana", english: "tomorrow", partOfSpeech: "adverb" },
      { spanish: "pronto", english: "soon", partOfSpeech: "adverb" },
      { spanish: "el próximo año", english: "next year", partOfSpeech: "phrase" },
      { spanish: "planear", english: "to plan", partOfSpeech: "verb" },
    ],
    grammarJson: [
      {
        topic: "Ir a + Infinitive",
        explanation: "Use 'ir a' + verb for near future plans",
        examples: ["Voy a estudiar medicina.", "Vamos a viajar a España."],
      },
    ],
    content: `## Future Plans\n\n### Using 'Ir a + Infinitive'\n- Voy a estudiar español. — I'm going to study Spanish.\n- Vamos a comer fuera. — We're going to eat out.\n- ¿Vas a venir a la fiesta? — Are you going to come to the party?\n\n### Future Tense (Simple)\n- Estudiaré en la universidad. — I will study at university.\n- Viajaremos a México. — We will travel to Mexico.`,
  },
  {
    title: "Giving Opinions",
    description: "Express opinions and preferences in Spanish",
    level: SpanishLevel.B1,
    slug: "giving-opinions",
    difficulty: Difficulty.INTERMEDIATE,
    order: 14,
    vocabularyJson: [
      { spanish: "opinión", english: "opinion", partOfSpeech: "noun" },
      { spanish: "creer", english: "to believe", partOfSpeech: "verb" },
      { spanish: "pensar", english: "to think", partOfSpeech: "verb" },
      { spanish: "preferir", english: "to prefer", partOfSpeech: "verb" },
      { spanish: "acuerdo", english: "agreement", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Expressing Opinions",
        explanation: "Use 'creo que', 'pienso que', or 'me parece que'",
        examples: ["Creo que es una buena idea.", "Me parece que tienes razón."],
      },
    ],
    content: `## Giving Opinions\n\n### Expressing Agreement\n- Estoy de acuerdo. — I agree.\n- Tienes razón. — You're right.\n- Exactamente. — Exactly.\n\n### Expressing Disagreement\n- No estoy de acuerdo. — I don't agree.\n- No creo que sea así. — I don't think so.\n\n### Giving Your Opinion\n\`\`\`\nCreo que esta película es muy buena.\nMe parece que el libro es mejor que la película.\nPrefiero la comida italiana a la comida rápida.\n\`\`\``,
  },
  {
    title: "Making Comparisons",
    description: "Compare people, places, and things in Spanish",
    level: SpanishLevel.B1,
    slug: "making-comparisons",
    difficulty: Difficulty.INTERMEDIATE,
    order: 15,
    vocabularyJson: [
      { spanish: "más", english: "more", partOfSpeech: "adverb" },
      { spanish: "menos", english: "less", partOfSpeech: "adverb" },
      { spanish: "que", english: "than", partOfSpeech: "conjunction" },
      { spanish: "tan", english: "as", partOfSpeech: "adverb" },
      { spanish: "mejor", english: "better", partOfSpeech: "adjective" },
    ],
    grammarJson: [
      {
        topic: "Comparatives",
        explanation: "más/menos + adjective + que",
        examples: ["Madrid es más grande que Barcelona.", "El café es menos caro que el té."],
      },
    ],
    content: `## Making Comparisons\n\n### Comparatives\n- más... que — more... than\n- menos... que — less... than\n- tan... como — as... as\n\n### Examples\n\`\`\`\nMadrid es más grande que Barcelona.\nEsta película es menos interesante que la otra.\nJuan es tan alto como Pedro.\n\`\`\`\n\n### Superlatives\n- el/la más + adjective — the most...\n- Madrid es la ciudad más grande de España.`,
  },
  {
    title: "Subjunctive Mood Introduction",
    description: "Express wishes, doubts, and possibilities",
    level: SpanishLevel.B2,
    slug: "subjunctive-mood-introduction",
    difficulty: Difficulty.UPPER_INTERMEDIATE,
    order: 16,
    vocabularyJson: [
      { spanish: "ojalá", english: "hopefully", partOfSpeech: "adverb" },
      { spanish: "quizás", english: "perhaps", partOfSpeech: "adverb" },
      { spanish: "dudar", english: "to doubt", partOfSpeech: "verb" },
      { spanish: "esperar", english: "to hope", partOfSpeech: "verb" },
      { spanish: "quizá", english: "maybe", partOfSpeech: "adverb" },
    ],
    grammarJson: [
      {
        topic: "Present Subjunctive",
        explanation: "Used after expressions of doubt, desire, or emotion",
        examples: ["Espero que vengas.", "Dudo que sea verdad.", "Ojalá llueva."],
      },
    ],
    content: `## The Subjunctive Mood\n\nThe subjunctive expresses **subjectivity**: wishes, doubts, emotions, and possibilities.\n\n### Formation (Regular)\nTake the yo form of present indicative, drop -o, add:\n- -ar verbs: -e, -es, -e, -emos, -éis, -en\n- -er/-ir verbs: -a, -as, -a, -amos, -áis, -an\n\n### Triggers\n- Espero que... (I hope that...)\n- Es posible que... (It's possible that...)\n- Ojalá... (Hopefully...)\n- Es importante que... (It's important that...)\n\n### Example\n\`\`\`\nEspero que tengas un buen día.\nOjalá vengas a la fiesta.\nDudo que él sepa la respuesta.\n\`\`\``,
  },
  {
    title: "Conditional Tense",
    description: "Talk about hypothetical situations",
    level: SpanishLevel.B2,
    slug: "conditional-tense",
    difficulty: Difficulty.UPPER_INTERMEDIATE,
    order: 17,
    vocabularyJson: [
      { spanish: "si", english: "if", partOfSpeech: "conjunction" },
      { spanish: "haría", english: "I would do", partOfSpeech: "verb" },
      { spanish: "podría", english: "I could", partOfSpeech: "verb" },
      { spanish: "tendría", english: "I would have", partOfSpeech: "verb" },
    ],
    grammarJson: [
      {
        topic: "Conditional Tense",
        explanation: "Add endings to the infinitive: -ía, -ías, -ía, -íamos, -íais, -ían",
        examples: ["Viajaría a Japón.", "Compraría una casa.", "Estaría feliz."],
      },
    ],
    content: `## The Conditional Tense\n\nUsed for hypothetical situations and polite requests.\n\n### Formation\nAdd to infinitive: -ía, -ías, -ía, -íamos, -íais, -ían\n\n### Examples\n- Viajaría a Japón si tuviera dinero. — I would travel to Japan if I had money.\n- ¿Podrías ayudarme? — Could you help me?\n- Me gustaría un café. — I would like a coffee.\n\n### Hypothetical Sentences\n\`\`\`\nSi estudiara más, aprobaría el examen.\nSi fuera rico, compraría una isla.\n\`\`\``,
  },
  {
    title: "Complex Sentence Structures",
    description: "Build complex and compound sentences",
    level: SpanishLevel.B2,
    slug: "complex-sentence-structures",
    difficulty: Difficulty.UPPER_INTERMEDIATE,
    order: 18,
    vocabularyJson: [
      { spanish: "aunque", english: "although", partOfSpeech: "conjunction" },
      { spanish: "sin embargo", english: "however", partOfSpeech: "phrase" },
      { spanish: "por lo tanto", english: "therefore", partOfSpeech: "phrase" },
      { spanish: "además", english: "besides", partOfSpeech: "adverb" },
      { spanish: "mientras", english: "while", partOfSpeech: "conjunction" },
    ],
    grammarJson: [
      {
        topic: "Connecting Ideas",
        explanation: "Use conjunctions and connectors to link complex thoughts",
        examples: ["Aunque llueva, saldré.", "Estudié mucho, por lo tanto aprobé."],
      },
    ],
    content: `## Complex Sentences\n\n### Concessive\n- Aunque esté cansado, trabajaré. — Although I'm tired, I'll work.\n- A pesar de la lluvia, salimos. — Despite the rain, we went out.\n\n### Causal\n- Como estaba enfermo, no fui. — Since I was sick, I didn't go.\n- Debido al tráfico, llegamos tarde. — Due to traffic, we arrived late.\n\n### Consecutive\n- Hablaba tan rápido que no entendí. — He spoke so fast that I didn't understand.\n- Era tan bueno que ganó el premio. — It was so good that he won the prize.`,
  },
  {
    title: "Business Spanish",
    description: "Professional communication in Spanish",
    level: SpanishLevel.B2,
    slug: "business-spanish",
    difficulty: Difficulty.UPPER_INTERMEDIATE,
    order: 19,
    vocabularyJson: [
      { spanish: "reunión", english: "meeting", partOfSpeech: "noun" },
      { spanish: "negocio", english: "business", partOfSpeech: "noun" },
      { spanish: "contrato", english: "contract", partOfSpeech: "noun" },
      { spanish: "presupuesto", english: "budget", partOfSpeech: "noun" },
      { spanish: "cliente", english: "client", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Formal Email Structure",
        explanation: "Use formal register with usted and formal expressions",
        examples: ["Estimado señor/ señora:", "Le saluda atentamente,"],
      },
    ],
    content: `## Business Spanish\n\n### Formal Greetings\n- Estimado señor/señora: — Dear Sir/Madam:\n- Muy señor mío: — Dear Sir:\n- A quien corresponda: — To whom it may concern:\n\n### Email Phrases\n- Le escribo para... — I am writing to...\n- Quedo a la espera de... — I look forward to...\n- Le agradecería... — I would appreciate...\n\n### Meeting Vocabulary\n- la reunión — meeting\n- la agenda — agenda\n- el informe — report\n- la presentación — presentation`,
  },
  {
    title: "Cultural Topics: Spain",
    description: "Explore Spanish culture, history, and traditions",
    level: SpanishLevel.B2,
    slug: "cultural-topics-spain",
    difficulty: Difficulty.UPPER_INTERMEDIATE,
    order: 20,
    vocabularyJson: [
      { spanish: "fiesta", english: "festival/party", partOfSpeech: "noun" },
      { spanish: "tradición", english: "tradition", partOfSpeech: "noun" },
      { spanish: "historia", english: "history", partOfSpeech: "noun" },
      { spanish: "cultura", english: "culture", partOfSpeech: "noun" },
      { spanish: "gastronomía", english: "gastronomy", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Passive Voice with 'Se'",
        explanation: "Use 'se' + third person verb for passive constructions",
        examples: ["Se habla español.", "Se venden libros.", "Se dice que..."],
      },
    ],
    content: `## Spanish Culture\n\n### Festivals\n- **La Tomatina** — Tomato throwing festival in Buñol\n- **San Fermín** — Running of the bulls in Pamplona\n- **Las Fallas** — Fire festival in Valencia\n\n### Gastronomy\n- La paella valenciana — Traditional rice dish\n- Las tapas — Small plates for sharing\n- El jamón ibérico — Cured ham\n\n### History\n- España tiene una historia rica y diversa.\n- Los romanos, los árabes y los Reyes Católicos dejaron su huella.\n- Hoy, España es una democracia moderna.`,
  },
  {
    title: "Advanced Subjunctive",
    description: "Master complex subjunctive constructions",
    level: SpanishLevel.C1,
    slug: "advanced-subjunctive",
    difficulty: Difficulty.ADVANCED,
    order: 21,
    vocabularyJson: [
      { spanish: "aun cuando", english: "even when", partOfSpeech: "phrase" },
      { spanish: "con tal de que", english: "provided that", partOfSpeech: "phrase" },
      { spanish: "en caso de que", english: "in case", partOfSpeech: "phrase" },
      { spanish: "sin que", english: "without", partOfSpeech: "conjunction" },
    ],
    grammarJson: [
      {
        topic: "Advanced Subjunctive Triggers",
        explanation: "Conjunctions that always require subjunctive",
        examples: ["Aun cuando sea difícil, lo haré.", "Con tal de que vengas, estaré feliz."],
      },
    ],
    content: `## Advanced Subjunctive\n\n### Complex Triggers\n- **Aun cuando** — Even when (concessive)\n- **Con tal de que** — Provided that (conditional)\n- **En caso de que** — In case (hypothetical)\n- **Sin que** — Without (negative purpose)\n\n### Example\n\`\`\`\nAun cuando no me creas, te digo la verdad.\nCon tal de que estudies, aprobarás el examen.\nLo haré sin que nadie me lo pida.\n\`\`\``,
  },
  {
    title: "Literary Analysis Vocabulary",
    description: "Discuss literature with academic vocabulary",
    level: SpanishLevel.C1,
    slug: "literary-analysis-vocabulary",
    difficulty: Difficulty.ADVANCED,
    order: 22,
    vocabularyJson: [
      { spanish: "metáfora", english: "metaphor", partOfSpeech: "noun" },
      { spanish: "símbolo", english: "symbol", partOfSpeech: "noun" },
      { spanish: "trama", english: "plot", partOfSpeech: "noun" },
      { spanish: "personaje", english: "character", partOfSpeech: "noun" },
      { spanish: "narrador", english: "narrator", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Academic Register",
        explanation: "Use formal vocabulary and complex sentence structures",
        examples: ["La obra presenta una crítica social.", "El autor emplea el realismo mágico."],
      },
    ],
    content: `## Literary Analysis\n\n### Narrative Elements\n- el argumento / la trama — plot\n- los personajes — characters\n- el escenario — setting\n- el punto de vista — point of view\n\n### Literary Devices\n- la metáfora — metaphor\n- la analogía — analogy\n- la ironía — irony\n- el simbolismo — symbolism\n\n### Example Analysis\n\`\`\`\nEn 'Cien años de soledad', García Márquez utiliza\nel realismo mágico para representar la historia\nde Colombia a través de la familia Buendía.\n\`\`\``,
  },
  {
    title: "Debate and Argumentation",
    description: "Participate in formal debates and discussions",
    level: SpanishLevel.C1,
    slug: "debate-and-argumentation",
    difficulty: Difficulty.ADVANCED,
    order: 23,
    vocabularyJson: [
      { spanish: "argumento", english: "argument", partOfSpeech: "noun" },
      { spanish: "evidencia", english: "evidence", partOfSpeech: "noun" },
      { spanish: "refutar", english: "to refute", partOfSpeech: "verb" },
      { spanish: "persuadir", english: "to persuade", partOfSpeech: "verb" },
      { spanish: "conclusión", english: "conclusion", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Debate Expressions",
        explanation: "Formal phrases for academic discussion",
        examples: ["Me permito discrepar...", "En mi opinión...", "Los datos demuestran que..."],
      },
    ],
    content: `## Debate and Argumentation\n\n### Opening Statements\n- Me gustaría plantear que... — I would like to argue that...\n- Los datos demuestran que... — The data shows that...\n- Es innegable que... — It is undeniable that...\n\n### Counter-arguments\n- Me permito discrepar. — I beg to differ.\n- Eso no es del todo cierto. — That's not entirely true.\n- Sin embargo, hay que considerar... — However, one must consider...\n\n### Concluding\n- En conclusión... — In conclusion...\n- Por todo lo anterior... — For all the above reasons...\n- Queda demostrado que... — It has been demonstrated that...`,
  },
  {
    title: "Professional Writing",
    description: "Write formal reports, essays, and correspondence",
    level: SpanishLevel.C1,
    slug: "professional-writing",
    difficulty: Difficulty.ADVANCED,
    order: 24,
    vocabularyJson: [
      { spanish: "informe", english: "report", partOfSpeech: "noun" },
      { spanish: "redacción", english: "writing", partOfSpeech: "noun" },
      { spanish: "ensayo", english: "essay", partOfSpeech: "noun" },
      { spanish: "propuesta", english: "proposal", partOfSpeech: "noun" },
      { spanish: "análisis", english: "analysis", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Formal Connectors",
        explanation: "Advanced connectors for academic and professional writing",
        examples: ["Por consiguiente", "No obstante", "En consecuencia"],
      },
    ],
    content: `## Professional Writing\n\n### Report Structure\n1. **Introducción** — Introduction\n2. **Desarrollo** — Body/Development\n3. **Conclusiones** — Conclusions\n4. **Recomendaciones** — Recommendations\n\n### Formal Connectors\n- Por consiguiente — Consequently\n- No obstante — Nevertheless\n- En consecuencia — As a result\n- A modo de conclusión — By way of conclusion\n\n### Example Opening\n\`\`\`\nEl presente informe tiene como objetivo analizar\nlas tendencias actuales del mercado español...\n\`\`\``,
  },
  {
    title: "Cultural Topics: Latin America",
    description: "Explore the diversity of Latin American cultures",
    level: SpanishLevel.C1,
    slug: "cultural-topics-latin-america",
    difficulty: Difficulty.ADVANCED,
    order: 25,
    vocabularyJson: [
      { spanish: "diversidad", english: "diversity", partOfSpeech: "noun" },
      { spanish: "identidad", english: "identity", partOfSpeech: "noun" },
      { spanish: "tradición", english: "tradition", partOfSpeech: "noun" },
      { spanish: "globalización", english: "globalization", partOfSpeech: "noun" },
      { spanish: "patrimonio", english: "heritage", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Cultural Expressions",
        explanation: "Discuss cultural topics with nuanced vocabulary",
        examples: ["La diversidad cultural enriquece nuestra sociedad.", "El patrimonio histórico debe preservarse."],
      },
    ],
    content: `## Latin American Culture\n\n### Regional Diversity\nLatin America encompasses 20+ countries, each with unique:\n- **Gastronomía** — Mexican tacos, Peruvian ceviche, Argentine asado\n- **Música** — Salsa, tango, reggaetón, cumbia\n- **Literatura** — Boom latinoamericano, magical realism\n\n### Cultural Identity\n\`\`\`\nLa identidad latinoamericana se construye sobre\nla mezcla de culturas indígenas, europeas y africanas.\nEste mestizaje cultural es su mayor riqueza.\n\`\`\``,
  },
  {
    title: "Nuanced Expression",
    description: "Express subtle meanings and shades of opinion",
    level: SpanishLevel.C2,
    slug: "nuanced-expression",
    difficulty: Difficulty.MASTERY,
    order: 26,
    vocabularyJson: [
      { spanish: "matiz", english: "nuance", partOfSpeech: "noun" },
      { spanish: "sutil", english: "subtle", partOfSpeech: "adjective" },
      { spanish: "implicito", english: "implicit", partOfSpeech: "adjective" },
      { spanish: "entre líneas", english: "between the lines", partOfSpeech: "phrase" },
    ],
    grammarJson: [
      {
        topic: "Nuanced Language",
        explanation: "Use hedging and softening for diplomatic communication",
        examples: ["No es que no me guste, sino que...", "Podría argumentarse que...", "En cierto modo..."],
      },
    ],
    content: `## Nuanced Expression\n\n### Hedging\n- No es que... sino que... — It's not that... but rather...\n- En cierto modo... — In a certain way...\n- Podría argumentarse que... — One could argue that...\n\n### Softening Opinions\n- Personalmente, me inclino a pensar que... — Personally, I'm inclined to think that...\n- Si me permiten ser franco... — If I may be frank...\n- No pretendo ser pesimista, pero... — I don't mean to be pessimistic, but...`,
  },
  {
    title: "Academic Spanish",
    description: "Write and present at university level",
    level: SpanishLevel.C2,
    slug: "academic-spanish",
    difficulty: Difficulty.MASTERY,
    order: 27,
    vocabularyJson: [
      { spanish: "hipótesis", english: "hypothesis", partOfSpeech: "noun" },
      { spanish: "metodología", english: "methodology", partOfSpeech: "noun" },
      { spanish: "paradigma", english: "paradigm", partOfSpeech: "noun" },
      { spanish: "epistemología", english: "epistemology", partOfSpeech: "noun" },
      { spanish: "heurístico", english: "heuristic", partOfSpeech: "adjective" },
    ],
    grammarJson: [
      {
        topic: "Academic Register",
        explanation: "Use impersonal constructions and nominalization",
        examples: ["Se ha demostrado que...", "Resulta evidente que...", "Cabe señalar que..."],
      },
    ],
    content: `## Academic Spanish\n\n### Impersonal Constructions\n- Se ha demostrado que... — It has been demonstrated that...\n- Resulta evidente que... — It is evident that...\n- Cabe señalar que... — It is worth noting that...\n\n### Nominalization\n- El análisis de los datos revela... — The analysis of the data reveals...\n- La investigación propone... — The research proposes...\n- El estudio concluye que... — The study concludes that...`,
  },
  {
    title: "Poetry and Literature",
    description: "Analyze and appreciate Spanish poetry",
    level: SpanishLevel.C2,
    slug: "poetry-and-literature",
    difficulty: Difficulty.MASTERY,
    order: 28,
    vocabularyJson: [
      { spanish: "verso", english: "verse", partOfSpeech: "noun" },
      { spanish: "estrofa", english: "stanza", partOfSpeech: "noun" },
      { spanish: "rima", english: "rhyme", partOfSpeech: "noun" },
      { spanish: "métrica", english: "meter", partOfSpeech: "noun" },
      { spanish: "lírica", english: "lyric poetry", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Poetic Language",
        explanation: "Understand archaic and poetic forms",
        examples: ["Dulce memoria (Góngora)", "Verde que te quiero verde (García Lorca)"],
      },
    ],
    content: `## Poetry and Literature\n\n### Golden Age Poetry\n> *"En la mañana de oro,*\n> *cuando los prados sueñan,*\n> *va el agua dulce cantando*\n> *su canción de primavera."*\n> — Adapted from Garcilaso de la Vega\n\n### Modern Poetry\nFederico García Lorca revolutionized Spanish poetry:\n- **Romancero gitano** (1928)\n- **Poeta en Nueva York** (1940)\n\n### Analysis\n\`\`\`\nLorca utiliza la naturaleza como metáfora de\nla pasión humana. Sus imágenes sensoriales\ncrean un mundo poético único.\n\`\`\``,
  },
  {
    title: "Historical Texts",
    description: "Read and analyze historical documents",
    level: SpanishLevel.C2,
    slug: "historical-texts",
    difficulty: Difficulty.MASTERY,
    order: 29,
    vocabularyJson: [
      { spanish: "crónica", english: "chronicle", partOfSpeech: "noun" },
      { spanish: "manuscrito", english: "manuscript", partOfSpeech: "noun" },
      { spanish: "pergamino", english: "parchment", partOfSpeech: "noun" },
      { spanish: "arcaísmo", english: "archaism", partOfSpeech: "noun" },
      { spanish: " paleografía", english: "paleography", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Historical Grammar",
        explanation: "Recognize older grammatical forms in historical texts",
        examples: ["Fazed (haced)", "plaziere (place)", "ome (hombre)"],
      },
    ],
    content: `## Historical Texts\n\n### Medieval Spanish\nOld Spanish (12th-15th centuries) features:\n- **F** instead of **H**: *fer* instead of *hacer*\n- **SS** between vowels: *cassa* instead of *casa*\n- Different pronoun systems\n\n### Example from El Cantar de Mio Cid\n> *"De los sos ojos tan fuertemientre llorando"*\n> (From his eyes so strongly weeping)\n\n### Analysis\n\`\`\`\nEl texto muestra características del español\nmedieval: uso de 'sos' (sus), 'fuertemientre'\n(fuertemente), y estructuras sintácticas\npropias de la épica castellana.\n\`\`\``,
  },
  {
    title: "Regional Dialects and Variations",
    description: "Understand Spanish dialectal diversity",
    level: SpanishLevel.C2,
    slug: "regional-dialects-and-variations",
    difficulty: Difficulty.MASTERY,
    order: 30,
    vocabularyJson: [
      { spanish: "dialecto", english: "dialect", partOfSpeech: "noun" },
      { spanish: "acento", english: "accent", partOfSpeech: "noun" },
      { spanish: "jerga", english: "slang", partOfSpeech: "noun" },
      { spanish: "regionalismo", english: "regionalism", partOfSpeech: "noun" },
      { spanish: "voseo", english: "voseo", partOfSpeech: "noun" },
    ],
    grammarJson: [
      {
        topic: "Voseo and Regional Forms",
        explanation: "Use of 'vos' instead of 'tú' in parts of Latin America",
        examples: ["¿Cómo andás vos?", "Tenés razón."],
      },
    ],
    content: `## Regional Dialects\n\n### Major Varieties\n1. **Castilian** (Spain) — 'th' sound for z/c\n2. **Mexican** — Clear pronunciation, yeísmo\n3. **Rioplatense** (Argentina/Uruguay) — Voseo, sh sound for ll/y\n4. **Caribbean** — Aspiration of final /s/\n\n### Voseo Examples\n| Tú | Vos |\n|----|-----|\n| tú eres | vos sos |\n| tú tienes | vos tenés |\n| tú hablas | vos hablás |\n\n### Regional Vocabulary\n- **Spain**: coche, ordenador, jugo\n- **Mexico**: carro, computadora, jugo\n- **Argentina**: auto, computadora, jugo`,
  },
];

const achievements = [
  { id: "first_lesson", name: "¡Primera Lección!", description: "Complete your first lesson", iconName: "BookOpen", category: "lessons", requirementJson: { type: "lessons_completed", count: 1 } },
  { id: "ten_lessons", name: "Estudiante Dedicado", description: "Complete 10 lessons", iconName: "GraduationCap", category: "lessons", requirementJson: { type: "lessons_completed", count: 10 } },
  { id: "first_chat", name: "¡Hola!", description: "Have your first AI conversation", iconName: "MessageCircle", category: "chat", requirementJson: { type: "chat_messages", count: 1 } },
  { id: "fifty_flashcards", name: "Maestro de Tarjetas", description: "Review 50 flashcards", iconName: "Layers", category: "flashcards", requirementJson: { type: "flashcards_reviewed", count: 50 } },
  { id: "seven_day_streak", name: "Racha de Fuego", description: "Study 7 days in a row", iconName: "Flame", category: "streak", requirementJson: { type: "streak_days", count: 7 } },
  { id: "thirty_day_streak", name: "Dedicación Legendaria", description: "Study 30 days in a row", iconName: "Trophy", category: "streak", requirementJson: { type: "streak_days", count: 30 } },
  { id: "mastered_hundred", name: "Sabio Español", description: "Master 100 flashcards", iconName: "Brain", category: "flashcards", requirementJson: { type: "flashcards_mastered", count: 100 } },
  { id: "perfect_session", name: "¡Perfecto!", description: "Get all flashcards correct in a session", iconName: "Star", category: "special", requirementJson: { type: "perfect_session", count: 1 } },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash("Admin123!", 12);
    const adminUser = await prisma.user.upsert({
      where: { email: "admin@sslid.com" },
      update: {},
      create: {
        email: "admin@sslid.com",
        name: "Admin",
        password: hashedPassword,
        level: SpanishLevel.C2,
        role: UserRole.ADMIN,
        streak: 0,
        totalStudyMinutes: 0,
        dailyGoal: 20,
        preferredAccent: "Spain",
      },
    });

    // Seed achievements
    const achievementCount = await prisma.achievement.count();
    if (achievementCount === 0) {
      for (const a of achievements) {
        await prisma.achievement.create({ data: a as any });
      }
    }

    // Seed lessons
    let createdCount = 0;
    for (const lesson of lessons) {
      const existing = await prisma.lesson.findFirst({
        where: { title: lesson.title },
      });

      if (!existing) {
        await prisma.lesson.create({
          data: {
            title: lesson.title,
            description: lesson.description,
            level: lesson.level,
            slug: lesson.slug,
            difficulty: lesson.difficulty,
            order: lesson.order,
            vocabularyJson: lesson.vocabularyJson as any,
            grammarJson: lesson.grammarJson as any,
            content: lesson.content,
          },
        });
        createdCount++;
      }
    }

    res.status(200).json({
      message: "Seed completed successfully!",
      admin: adminUser.email,
      lessonsCreated: createdCount,
      totalLessons: await prisma.lesson.count(),
      totalAchievements: await prisma.achievement.count(),
    });
  } catch (error) {
    console.error("Seed error:", error);
    res.status(500).json({
      message: "Seed failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
}