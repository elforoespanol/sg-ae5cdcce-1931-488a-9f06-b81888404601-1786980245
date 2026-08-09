import { PrismaClient, UserRole, SpanishLevel } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const lessons = [
  // A1 - Beginner
  {
    title: "Greetings and Introductions",
    description: "Learn how to greet people and introduce yourself in Spanish",
    level: SpanishLevel.A1,
    slug: "greetings-and-introductions",
    difficulty: "beginner",
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
    content: `## Greetings in Spanish

Spanish greetings vary by time of day and formality.

### Basic Greetings
- **Hola** — Hello (any time)
- **Buenos días** — Good morning (until noon)
- **Buenas tardes** — Good afternoon (noon to sunset)
- **Buenas noches** — Good night (after sunset)

### Introductions
\`\`\`
A: ¡Hola! Me llamo María.
B: Mucho gusto, María. Yo soy Carlos.
A: ¿Cómo estás, Carlos?
B: Estoy bien, gracias. ¿Y tú?
\`\`\`

### Practice
Greet three people using different times of day.`,
  },
  {
    title: "Numbers 1-100",
    description: "Master counting in Spanish from one to one hundred",
    level: SpanishLevel.A1,
    slug: "numbers-1-100",
    difficulty: "beginner",
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
    content: `## Spanish Numbers

### 1-10
uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez

### Tens
veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien

### Examples
- Tengo **veinticinco** años. (I'm 25 years old.)
- El libro cuesta **treinta** euros. (The book costs 30 euros.)`,
  },
  {
    title: "Colors and Descriptions",
    description: "Describe the world around you with colors and adjectives",
    level: SpanishLevel.A1,
    slug: "colors-and-descriptions",
    difficulty: "beginner",
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
    content: `## Colors and Descriptions

Spanish adjectives come **after** the noun and must agree in gender and number.

### Common Colors
- rojo/roja — red
- azul — blue (no gender change)
- verde — green
- amarillo/amarilla — yellow

### Size
- grande — big
- pequeño/pequeña — small

### Example
\`\`\`
La casa grande es roja.
The big house is red.
\`\`\``,
  },
  {
    title: "Family Members",
    description: "Talk about your family in Spanish",
    level: SpanishLevel.A1,
    slug: "family-members",
    difficulty: "beginner",
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
    content: `## Family Members

### Nuclear Family
- madre / padre — mother / father
- hermano / hermana — brother / sister
- hijo / hija — son / daughter

### Extended Family
- abuelo / abuela — grandfather / grandmother
- tío / tía — uncle / aunt
- primo / prima — cousin

### Example
\`\`\`
Mi familia es grande. Tengo dos hermanos y una hermana.
My family is big. I have two brothers and one sister.
\`\`\``,
  },
  {
    title: "Daily Routines",
    description: "Describe your daily activities in Spanish",
    level: SpanishLevel.A1,
    slug: "daily-routines",
    difficulty: "beginner",
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
    content: `## Daily Routines

### Morning
- Me despierto a las siete. (I wake up at 7.)
- Desayuno café y tostadas. (I have coffee and toast for breakfast.)

### Afternoon
- Trabajo de nueve a cinco. (I work from 9 to 5.)
- Como en un restaurante. (I eat at a restaurant.)

### Evening
- Estudio español por la noche. (I study Spanish at night.)
- Me acuesto a las once. (I go to bed at 11.)`,
  },

  // A2 - Elementary
  {
    title: "Food and Restaurants",
    description: "Order food and talk about meals in Spanish",
    level: SpanishLevel.A2,
    slug: "food-and-restaurants",
    difficulty: "beginner",
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
    content: `## At the Restaurant

### Ordering
\`\`\`
Camarero: ¿Qué desea usted?
Cliente: Quisiera la paella valenciana, por favor.
Camarero: ¿Y para beber?
Cliente: Una cerveza, por favor.
\`\`\`

### Useful Phrases
- La cuenta, por favor. — The bill, please.
- Está delicioso. — It's delicious.
- ¿Tienen menú vegetariano? — Do you have a vegetarian menu?`,
  },
  {
    title: "Directions and Places",
    description: "Ask for and give directions in Spanish",
    level: SpanishLevel.A2,
    slug: "directions-and-places",
    difficulty: "elementary",
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
    content: `## Asking for Directions

### Key Questions
- ¿Dónde está...? — Where is...?
- ¿Cómo llego a...? — How do I get to...?
- ¿Está lejos? — Is it far?

### Giving Directions
\`\`\`
Gire a la derecha en la esquina.
Siga recto por dos cuadras.
El banco está a la izquierda.
\`\`\``,
  },
  {
    title: "Shopping and Clothes",
    description: "Navigate shopping and describe clothing",
    level: SpanishLevel.A2,
    slug: "shopping-and-clothes",
    difficulty: "elementary",
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
    content: `## Shopping in Spanish

### At the Store
\`\`\`
Cliente: ¿Tiene esta camisa en talla mediana?
Vendedor: Sí, aquí la tiene.
Cliente: ¿Cuánto cuesta?
Vendedor: Cuesta veinticinco euros.
\`\`\`

### Clothing Vocabulary
- camisa / camiseta — shirt / t-shirt
- pantalones / vaqueros — pants / jeans
- falda — skirt
- abrigo — coat`,
  },
  {
    title: "Weather and Seasons",
    description: "Talk about weather and seasons in Spanish",
    level: SpanishLevel.A2,
    slug: "weather-and-seasons",
    difficulty: "elementary",
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
    content: `## Weather Expressions

### Using 'Hace'
- Hace sol. — It's sunny.
- Hace frío. — It's cold.
- Hace calor. — It's hot.
- Hace viento. — It's windy.

### Using 'Está'
- Está nublado. — It's cloudy.
- Está lloviendo. — It's raining.

### Seasons
- primavera — spring
- verano — summer
- otoño — autumn
- invierno — winter`,
  },
  {
    title: "Hobbies and Free Time",
    description: "Talk about what you do in your free time",
    level: SpanishLevel.A2,
    slug: "hobbies-and-free-time",
    difficulty: "elementary",
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
    content: `## Hobbies and Free Time

### Expressing Likes
- Me gusta leer libros. — I like reading books.
- Me gusta escuchar música. — I like listening to music.
- No me gusta correr. — I don't like running.

### Common Hobbies
- ver la televisión — watch TV
- salir con amigos — go out with friends
- cocinar — cook
- viajar — travel`,
  },

  // B1 - Intermediate
  {
    title: "Past Tense (Preterite)",
    description: "Talk about completed past actions using the preterite tense",
    level: SpanishLevel.B1,
    slug: "past-tense-preterite",
    difficulty: "intermediate",
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
    content: `## The Preterite Tense

The preterite describes **completed** past actions.

### Regular Verbs
| Person | Hablar | Comer | Vivir |
|--------|--------|-------|-------|
| yo | hablé | comí | viví |
| tú | hablaste | comiste | viviste |
| él/ella | habló | comió | vivió |

### Example
\`\`\`
Ayer comí en un restaurante italiano.
Pedí pasta y tomé vino tinto.
Fue una cena deliciosa.
\`\`\``,
  },
  {
    title: "Past Tense (Imperfect)",
    description: "Describe ongoing past situations and habits",
    level: SpanishLevel.B1,
    slug: "past-tense-imperfect",
    difficulty: "intermediate",
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
    content: `## The Imperfect Tense

The imperfect describes **ongoing** or **habitual** past actions.

### Regular Endings
| Person | AR | ER/IR |
|--------|-----|-------|
| yo | -aba | -ía |
| tú | -abas | -ías |
| él/ella | -aba | -ía |

### Example
\`\`\`
De niño, vivía en Barcelona.
Todos los veranos, íbamos a la playa.
Mi abuela siempre nos preparaba paella.
\`\`\``,
  },
  {
    title: "Future Plans",
    description: "Talk about future events and intentions",
    level: SpanishLevel.B1,
    slug: "future-plans",
    difficulty: "intermediate",
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
    content: `## Future Plans

### Using 'Ir a + Infinitive'
- Voy a estudiar español. — I'm going to study Spanish.
- Vamos a comer fuera. — We're going to eat out.
- ¿Vas a venir a la fiesta? — Are you going to come to the party?

### Future Tense (Simple)
- Estudiaré en la universidad. — I will study at university.
- Viajaremos a México. — We will travel to Mexico.`,
  },
  {
    title: "Giving Opinions",
    description: "Express opinions and preferences in Spanish",
    level: SpanishLevel.B1,
    slug: "giving-opinions",
    difficulty: "intermediate",
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
    content: `## Giving Opinions

### Expressing Agreement
- Estoy de acuerdo. — I agree.
- Tienes razón. — You're right.
- Exactamente. — Exactly.

### Expressing Disagreement
- No estoy de acuerdo. — I don't agree.
- No creo que sea así. — I don't think so.

### Giving Your Opinion
\`\`\`
Creo que esta película es muy buena.
Me parece que el libro es mejor que la película.
Prefiero la comida italiana a la comida rápida.
\`\`\``,
  },
  {
    title: "Making Comparisons",
    description: "Compare people, places, and things in Spanish",
    level: SpanishLevel.B1,
    slug: "making-comparisons",
    difficulty: "intermediate",
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
    content: `## Making Comparisons

### Comparatives
- más... que — more... than
- menos... que — less... than
- tan... como — as... as

### Examples
\`\`\`
Madrid es más grande que Barcelona.
Esta película es menos interesante que la otra.
Juan es tan alto como Pedro.
\`\`\`

### Superlatives
- el/la más + adjective — the most...
- Madrid es la ciudad más grande de España.`,
  },

  // B2 - Upper Intermediate
  {
    title: "Subjunctive Mood Introduction",
    description: "Express wishes, doubts, and possibilities",
    level: SpanishLevel.B2,
    slug: "subjunctive-mood-introduction",
    difficulty: "upper-intermediate",
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
    content: `## The Subjunctive Mood

The subjunctive expresses **subjectivity**: wishes, doubts, emotions, and possibilities.

### Formation (Regular)
Take the yo form of present indicative, drop -o, add:
- -ar verbs: -e, -es, -e, -emos, -éis, -en
- -er/-ir verbs: -a, -as, -a, -amos, -áis, -an

### Triggers
- Espero que... (I hope that...)
- Es posible que... (It's possible that...)
- Ojalá... (Hopefully...)
- Es importante que... (It's important that...)

### Example
\`\`\`
Espero que tengas un buen día.
Ojalá vengas a la fiesta.
Dudo que él sepa la respuesta.
\`\`\``,
  },
  {
    title: "Conditional Tense",
    description: "Talk about hypothetical situations",
    level: SpanishLevel.B2,
    slug: "conditional-tense",
    difficulty: "upper-intermediate",
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
    content: `## The Conditional Tense

Used for hypothetical situations and polite requests.

### Formation
Add to infinitive: -ía, -ías, -ía, -íamos, -íais, -ían

### Examples
- Viajaría a Japón si tuviera dinero. — I would travel to Japan if I had money.
- ¿Podrías ayudarme? — Could you help me?
- Me gustaría un café. — I would like a coffee.

### Hypothetical Sentences
\`\`\`
Si estudiara más, aprobaría el examen.
Si fuera rico, compraría una isla.
\`\`\``,
  },
  {
    title: "Complex Sentence Structures",
    description: "Build complex and compound sentences",
    level: SpanishLevel.B2,
    slug: "complex-sentence-structures",
    difficulty: "upper-intermediate",
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
    content: `## Complex Sentences

### Concessive
- Aunque esté cansado, trabajaré. — Although I'm tired, I'll work.
- A pesar de la lluvia, salimos. — Despite the rain, we went out.

### Causal
- Como estaba enfermo, no fui. — Since I was sick, I didn't go.
- Debido al tráfico, llegamos tarde. — Due to traffic, we arrived late.

### Consecutive
- Hablaba tan rápido que no entendí. — He spoke so fast that I didn't understand.
- Era tan bueno que ganó el premio. — It was so good that he won the prize.`,
  },
  {
    title: "Business Spanish",
    description: "Professional communication in Spanish",
    level: SpanishLevel.B2,
    slug: "business-spanish",
    difficulty: "upper-intermediate",
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
    content: `## Business Spanish

### Formal Greetings
- Estimado señor/señora: — Dear Sir/Madam:
- Muy señor mío: — Dear Sir:
- A quien corresponda: — To whom it may concern:

### Email Phrases
- Le escribo para... — I am writing to...
- Quedo a la espera de... — I look forward to...
- Le agradecería... — I would appreciate...

### Meeting Vocabulary
- la reunión — meeting
- la agenda — agenda
- el informe — report
- la presentación — presentation`,
  },
  {
    title: "Cultural Topics: Spain",
    description: "Explore Spanish culture, history, and traditions",
    level: SpanishLevel.B2,
    slug: "cultural-topics-spain",
    difficulty: "upper-intermediate",
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
    content: `## Spanish Culture

### Festivals
- **La Tomatina** — Tomato throwing festival in Buñol
- **San Fermín** — Running of the bulls in Pamplona
- **Las Fallas** — Fire festival in Valencia

### Gastronomy
- La paella valenciana — Traditional rice dish
- Las tapas — Small plates for sharing
- El jamón ibérico — Cured ham

### History
- España tiene una historia rica y diversa.
- Los romanos, los árabes y los Reyes Católicos dejaron su huella.
- Hoy, España es una democracia moderna.`,
  },

  // C1 - Advanced
  {
    title: "Advanced Subjunctive",
    description: "Master complex subjunctive constructions",
    level: SpanishLevel.C1,
    slug: "advanced-subjunctive",
    difficulty: "advanced",
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
    content: `## Advanced Subjunctive

### Complex Triggers
- **Aun cuando** — Even when (concessive)
- **Con tal de que** — Provided that (conditional)
- **En caso de que** — In case (hypothetical)
- **Sin que** — Without (negative purpose)

### Example
\`\`\`
Aun cuando no me creas, te digo la verdad.
Con tal de que estudies, aprobarás el examen.
Lo haré sin que nadie me lo pida.
\`\`\``,
  },
  {
    title: "Literary Analysis Vocabulary",
    description: "Discuss literature with academic vocabulary",
    level: SpanishLevel.C1,
    slug: "literary-analysis-vocabulary",
    difficulty: "advanced",
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
    content: `## Literary Analysis

### Narrative Elements
- el argumento / la trama — plot
- los personajes — characters
- el escenario — setting
- el punto de vista — point of view

### Literary Devices
- la metáfora — metaphor
- la analogía — analogy
- la ironía — irony
- el simbolismo — symbolism

### Example Analysis
\`\`\`
En 'Cien años de soledad', García Márquez utiliza
el realismo mágico para representar la historia
de Colombia a través de la familia Buendía.
\`\`\``,
  },
  {
    title: "Debate and Argumentation",
    description: "Participate in formal debates and discussions",
    level: SpanishLevel.C1,
    slug: "debate-and-argumentation",
    difficulty: "advanced",
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
    content: `## Debate and Argumentation

### Opening Statements
- Me gustaría plantear que... — I would like to argue that...
- Los datos demuestran que... — The data shows that...
- Es innegable que... — It is undeniable that...

### Counter-arguments
- Me permito discrepar. — I beg to differ.
- Eso no es del todo cierto. — That's not entirely true.
- Sin embargo, hay que considerar... — However, one must consider...

### Concluding
- En conclusión... — In conclusion...
- Por todo lo anterior... — For all the above reasons...
- Queda demostrado que... — It has been demonstrated that...`,
  },
  {
    title: "Professional Writing",
    description: "Write formal reports, essays, and correspondence",
    level: SpanishLevel.C1,
    slug: "professional-writing",
    difficulty: "advanced",
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
    content: `## Professional Writing

### Report Structure
1. **Introducción** — Introduction
2. **Desarrollo** — Body/Development
3. **Conclusiones** — Conclusions
4. **Recomendaciones** — Recommendations

### Formal Connectors
- Por consiguiente — Consequently
- No obstante — Nevertheless
- En consecuencia — As a result
- A modo de conclusión — By way of conclusion

### Example Opening
\`\`\`
El presente informe tiene como objetivo analizar
las tendencias actuales del mercado español...
\`\`\``,
  },
  {
    title: "Cultural Topics: Latin America",
    description: "Explore the diversity of Latin American cultures",
    level: SpanishLevel.C1,
    slug: "cultural-topics-latin-america",
    difficulty: "advanced",
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
    content: `## Latin American Culture

### Regional Diversity
Latin America encompasses 20+ countries, each with unique:
- **Gastronomía** — Mexican tacos, Peruvian ceviche, Argentine asado
- **Música** — Salsa, tango, reggaetón, cumbia
- **Literatura** — Boom latinoamericano, magical realism

### Cultural Identity
\`\`\`
La identidad latinoamericana se construye sobre
la mezcla de culturas indígenas, europeas y africanas.
Este mestizaje cultural es su mayor riqueza.
\`\`\``,
  },

  // C2 - Mastery
  {
    title: "Nuanced Expression",
    description: "Express subtle meanings and shades of opinion",
    level: SpanishLevel.C2,
    slug: "nuanced-expression",
    difficulty: "mastery",
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
    content: `## Nuanced Expression

### Hedging
- No es que... sino que... — It's not that... but rather...
- En cierto modo... — In a certain way...
- Podría argumentarse que... — One could argue that...

### Softening Opinions
- Personalmente, me inclino a pensar que... — Personally, I'm inclined to think that...
- Si me permiten ser franco... — If I may be frank...
- No pretendo ser pesimista, pero... — I don't mean to be pessimistic, but...`,
  },
  {
    title: "Academic Spanish",
    description: "Write and present at university level",
    level: SpanishLevel.C2,
    slug: "academic-spanish",
    difficulty: "mastery",
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
        examples: ["Se ha demostrado que...", "Resulta evidente que...", " cabe señalar que..."],
      },
    ],
    content: `## Academic Spanish

### Impersonal Constructions
- Se ha demostrado que... — It has been demonstrated that...
- Resulta evidente que... — It is evident that...
- Cabe señalar que... — It is worth noting that...

### Nominalization
- El análisis de los datos revela... — The analysis of the data reveals...
- La investigación propone... — The research proposes...
- El estudio concluye que... — The study concludes that...`,
  },
  {
    title: "Poetry and Literature",
    description: "Analyze and appreciate Spanish poetry",
    level: SpanishLevel.C2,
    slug: "poetry-and-literature",
    difficulty: "mastery",
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
    content: `## Poetry and Literature

### Golden Age Poetry
> *"En la mañana de oro,*
> *cuando los prados sueñan,*
> *va el agua dulce cantando*
> *su canción de primavera."*
> — Adapted from Garcilaso de la Vega

### Modern Poetry
Federico García Lorca revolutionized Spanish poetry:
- **Romancero gitano** (1928)
- **Poeta en Nueva York** (1940)

### Analysis
\`\`\`
Lorca utiliza la naturaleza como metáfora de
la pasión humana. Sus imágenes sensoriales
crean un mundo poético único.
\`\`\``,
  },
  {
    title: "Historical Texts",
    description: "Read and analyze historical documents",
    level: SpanishLevel.C2,
    slug: "historical-texts",
    difficulty: "mastery",
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
    content: `## Historical Texts

### Medieval Spanish
Old Spanish (12th-15th centuries) features:
- **F** instead of **H**: *fer* instead of *hacer*
- **SS** between vowels: *cassa* instead of *casa*
- Different pronoun systems

### Example from El Cantar de Mio Cid
> *"De los sos ojos tan fuertemientre llorando"*
> (From his eyes so strongly weeping)

### Analysis
\`\`\`
El texto muestra características del español
medieval: uso de 'sos' (sus), 'fuertemientre'
(fuertemente), y estructuras sintácticas
propias de la épica castellana.
\`\`\``,
  },
  {
    title: "Regional Dialects and Variations",
    description: "Understand Spanish dialectal diversity",
    level: SpanishLevel.C2,
    slug: "regional-dialects-and-variations",
    difficulty: "mastery",
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
    content: `## Regional Dialects

### Major Varieties
1. **Castilian** (Spain) — 'th' sound for z/c
2. **Mexican** — Clear pronunciation, yeísmo
3. **Rioplatense** (Argentina/Uruguay) — Voseo, sh sound for ll/y
4. **Caribbean** — Aspiration of final /s/

### Voseo Examples
| Tú | Vos |
|----|-----|
| tú eres | vos sos |
| tú tienes | vos tenés |
| tú hablas | vos hablás |

### Regional Vocabulary
- **Spain**: coche, ordenador, jugo
- **Mexico**: carro, computadora, jugo
- **Argentina**: auto, computadora, jugo`,
  },
];

async function main() {
  console.log("Starting seed...");

  // Create admin user for testing
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
  console.log("Created admin user:", adminUser.email);

  // Seed achievements if not already present
  const achievementCount = await prisma.achievement.count();
  if (achievementCount === 0) {
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

    for (const a of achievements) {
      await prisma.achievement.create({ data: a as any });
    }
    console.log("Created", achievements.length, "achievements");
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
          vocabularyJson: lesson.vocabularyJson,
          grammarJson: lesson.grammarJson,
          content: lesson.content,
        },
      });
      createdCount++;
    }
  }

  console.log(`Created ${createdCount} new lessons`);
  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });