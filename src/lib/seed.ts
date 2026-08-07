import { PrismaClient, SpanishLevel, Difficulty } from "@prisma/client";

const prisma = new PrismaClient();

const lessons = [
  {
    title: "Greetings and Introductions",
    slug: "greetings-and-introductions",
    description: "Learn the essential Spanish greetings and how to introduce yourself with confidence.",
    content: `# Greetings and Introductions

¡Bienvenido! Welcome to your first Spanish lesson.

## Basic Greetings

**¡Hola!** — Hello
**Buenos días** — Good morning
**Buenas tardes** — Good afternoon
**Buenas noches** — Good evening / Good night
**¿Cómo estás?** — How are you?
**Estoy bien, gracias** — I'm fine, thank you

## Introducing Yourself

**Me llamo...** — My name is...
**Soy de...** — I'm from...
**Mucho gusto** — Nice to meet you
**Encantado/a** — Delighted (to meet you)

## Example Dialogue

> **María:** ¡Hola! ¿Cómo estás?
> **Carlos:** Estoy bien, gracias. ¿Y tú?
> **María:** Muy bien. Me llamo María. ¿Cómo te llamas?
> **Carlos:** Me llamo Carlos. Mucho gusto.
> **María:** Encantada, Carlos.

## Practice Tip

Use these greetings every day. Even if you're practicing alone, say "Buenos días" when you wake up and "Buenas noches" before bed.`,
    difficulty: Difficulty.BEGINNER,
    level: SpanishLevel.A1,
    order: 1,
    durationMinutes: 15,
    isPublished: true,
    vocabularyJson: [
      { word: "hola", translation: "hello", partOfSpeech: "interjection", example: "¡Hola! ¿Cómo estás?" },
      { word: "buenos días", translation: "good morning", partOfSpeech: "phrase", example: "Buenos días, señor." },
      { word: "cómo estás", translation: "how are you", partOfSpeech: "phrase", example: "¿Cómo estás hoy?" },
      { word: "me llamo", translation: "my name is", partOfSpeech: "phrase", example: "Me llamo Ana." },
      { word: "mucho gusto", translation: "nice to meet you", partOfSpeech: "phrase", example: "Mucho gusto, Juan." },
    ],
    grammarJson: [
      { title: "Gender Agreement", content: "In Spanish, adjectives must agree in gender with the noun they describe. 'Encantado' is used by males, 'Encantada' by females." },
    ],
  },
  {
    title: "Numbers and Counting",
    slug: "numbers-and-counting",
    description: "Master Spanish numbers from 0 to 100 and learn how to use them in everyday situations.",
    content: `# Numbers and Counting

Learning numbers is essential for shopping, telling time, and daily conversations.

## Numbers 0-20

| Spanish | Number |
|---------|--------|
| cero | 0 |
| uno | 1 |
| dos | 2 |
| tres | 3 |
| cuatro | 4 |
| cinco | 5 |
| seis | 6 |
| siete | 7 |
| ocho | 8 |
| nueve | 9 |
| diez | 10 |
| once | 11 |
| doce | 12 |
| trece | 13 |
| catorce | 14 |
| quince | 15 |
| dieciséis | 16 |
| diecisiete | 17 |
| dieciocho | 18 |
| diecinueve | 19 |
| veinte | 20 |

## Tens (30-100)

| Spanish | Number |
|---------|--------|
| treinta | 30 |
| cuarenta | 40 |
| cincuenta | 50 |
| sesenta | 60 |
| setenta | 70 |
| ochenta | 80 |
| noventa | 90 |
| cien | 100 |

## Compound Numbers

21 = **veintiuno**
22 = **veintidós**
35 = **treinta y cinco**
47 = **cuarenta y siete**
99 = **noventa y nueve**

## Practical Example

> **Camarero:** ¿Cuántos años tienes?
> **Estudiante:** Tengo veintidós años.
> **Camarero:** Muy bien. Y ¿cuántas personas son?
> **Estudiante:** Somos cuatro personas.`,
    difficulty: Difficulty.BEGINNER,
    level: SpanishLevel.A1,
    order: 2,
    durationMinutes: 20,
    isPublished: true,
    vocabularyJson: [
      { word: "número", translation: "number", partOfSpeech: "noun", example: "¿Cuál es tu número de teléfono?" },
      { word: "años", translation: "years", partOfSpeech: "noun", example: "Tengo veinticinco años." },
      { word: "cuántos", translation: "how many", partOfSpeech: "adjective", example: "¿Cuántos hermanos tienes?" },
      { word: "personas", translation: "people", partOfSpeech: "noun", example: "Hay muchas personas aquí." },
      { word: "cero", translation: "zero", partOfSpeech: "number", example: "La temperatura es cero grados." },
    ],
    grammarJson: [
      { title: "Number Agreement", content: "When counting people or things, numbers remain invariable: 'tres personas', 'cinco libros'. Only 'uno' changes to 'un' before masculine nouns: 'un libro'." },
    ],
  },
  {
    title: "Describing People",
    slug: "describing-people",
    description: "Learn adjectives, colors, and physical descriptions to talk about friends and family.",
    content: `# Describing People

## Physical Appearance

**alto/a** — tall
**bajo/a** — short
**delgado/a** — thin / slim
**gordo/a** — fat / overweight
**fuerte** — strong
**joven** — young
**viejo/a** — old
**guapo/a** — handsome / beautiful

## Hair and Eyes

**pelo rubio** — blonde hair
**pelo moreno** — dark hair
**pelo rojo** — red hair
**ojos azules** — blue eyes
**ojos marrones** — brown eyes
**ojos verdes** — green eyes

## Personality Traits

**amable** — kind
**simpático/a** — nice / friendly
**gracioso/a** — funny
**serio/a** — serious
**tímido/a** — shy
**extrovertido/a** — outgoing

## Example Description

> Mi hermana se llama Laura. Es alta y delgada. Tiene pelo rubio y ojos azules. Es muy simpática y graciosa. Le gusta bailar y cantar.

## Practice Exercise

Describe yourself using at least 5 adjectives. Remember to match gender!

*Soy... (I am...)*
*Tengo... (I have...)*
*Me gusta... (I like...)*
*No me gusta... (I don't like...)*`,
    difficulty: Difficulty.ELEMENTARY,
    level: SpanishLevel.A2,
    order: 1,
    durationMinutes: 25,
    isPublished: true,
    vocabularyJson: [
      { word: "alto", translation: "tall", partOfSpeech: "adjective", example: "Mi hermano es muy alto." },
      { word: "pelo", translation: "hair", partOfSpeech: "noun", example: "Tiene pelo largo y negro." },
      { word: "ojos", translation: "eyes", partOfSpeech: "noun", example: "Sus ojos son muy expresivos." },
      { word: "simpático", translation: "nice/friendly", partOfSpeech: "adjective", example: "Pedro es muy simpático." },
      { word: "hermana", translation: "sister", partOfSpeech: "noun", example: "Mi hermana vive en Madrid." },
    ],
    grammarJson: [
      { title: "Adjective Agreement", content: "Spanish adjectives must agree in gender and number with the noun they modify. Most adjectives ending in -o change to -a for feminine: 'alto' → 'alta'. Adjectives ending in -e or consonants don't change: 'inteligente' stays the same." },
    ],
  },
  {
    title: "Past Tense Stories",
    slug: "past-tense-stories",
    description: "Master the preterite and imperfect tenses to tell captivating stories about your past.",
    content: `# Past Tense Stories

The past tense in Spanish opens up a world of storytelling possibilities.

## Preterite vs Imperfect

| Preterite (Pretérito) | Imperfect (Imperfecto) |
|----------------------|----------------------|
| Completed actions | Ongoing/habitual actions |
| Specific time | Background descriptions |
| **Ayer comí** — Yesterday I ate | **Comía todos los días** — I used to eat every day |
| **Fue una fiesta** — It was a party (event) | **Era feliz** — I was happy (description) |

## Regular Preterite Endings

| | -ar verbs | -er/-ir verbs |
|---|-----------|---------------|
| yo | -é | -í |
| tú | -aste | -iste |
| él/ella | -ó | -ió |
| nosotros | -amos | -imos |
| ellos | -aron | -ieron |

## Example Story

> **El Verano Pasado**
>
> El año pasado fui a España con mis amigos. El viaje fue increíble. Visitamos Barcelona, Madrid y Sevilla. En Barcelona, caminamos por Las Ramblas y comimos tapas deliciosas. El tiempo era perfecto — hacía sol todos los días. Los españoles eran muy amables. Nunca olvidaré ese verano.

## Key Verbs in Preterite

| Infinitive | Preterite | Meaning |
|------------|-----------|---------|
| ir | fui | I went |
| ser | fui | I was |
| tener | tuve | I had |
| hacer | hice | I did/made |
| decir | dije | I said |
| estar | estuve | I was (location) |
| poder | pude | I could |

## Practice

Tell a story about your last vacation using at least 5 preterite verbs and 3 imperfect verbs.`,
    difficulty: Difficulty.INTERMEDIATE,
    level: SpanishLevel.B1,
    order: 1,
    durationMinutes: 30,
    isPublished: true,
    vocabularyJson: [
      { word: "pretérito", translation: "preterite (past tense)", partOfSpeech: "noun", example: "El pretérito se usa para acciones completadas." },
      { word: "imperfecto", translation: "imperfect (past tense)", partOfSpeech: "noun", example: "El imperfecto describe acciones habituales." },
      { word: "viaje", translation: "trip/journey", partOfSpeech: "noun", example: "El viaje a Madrid fue fantástico." },
      { word: "olvidar", translation: "to forget", partOfSpeech: "verb", example: "Nunca olvidaré ese día." },
      { word: "delicioso", translation: "delicious", partOfSpeech: "adjective", example: "La paella estaba deliciosa." },
    ],
    grammarJson: [
      { title: "Pretérito vs Imperfecto", content: "Use pretérito for completed actions with a definite beginning and end. Use imperfecto for descriptions, habits, emotions, and ongoing actions in the past. Both can appear in the same sentence: 'Cuando era niño, fui a España' (When I was a child [imperfecto], I went to Spain [pretérito])." },
    ],
  },
  {
    title: "Subjunctive Mood",
    slug: "subjunctive-mood",
    description: "Unlock the subjunctive mood to express doubt, desire, emotion, and hypothetical situations.",
    content: `# The Subjunctive Mood

The subjunctive is the key to sounding like a native Spanish speaker. It expresses doubt, desire, emotion, and hypothetical situations.

## When to Use the Subjunctive

1. **Wishes and desires**: Quiero que vengas (I want you to come)
2. **Emotions**: Me alegro de que estés aquí (I'm glad you're here)
3. **Doubt**: Dudo que sea verdad (I doubt it's true)
4. **Recommendations**: Te recomiendo que descanses (I recommend you rest)
5. **Hypotheticals**: Si fuera rico, viajaría (If I were rich, I would travel)

## Present Subjunctive Formation

Take the **yo** form of present indicative, drop the -o, and add:

| | -ar verbs | -er/-ir verbs |
|---|-----------|---------------|
| yo | -e | -a |
| tú | -es | -as |
| él/ella | -e | -a |
| nosotros | -emos | -amos |
| ellos | -en | -an |

## Example: hablar (to speak)

| | Subjunctive |
|---|-------------|
| yo | hable |
| tú | hables |
| él/ella | hable |
| nosotros | hablemos |
| ellos | hablen |

## Complex Example

> **Espero que cuando llegues a Madrid, encuentres un apartamento que te guste y que tengas la oportunidad de conocer gente interesante.**

*Translation: I hope that when you arrive in Madrid, you find an apartment that you like and that you have the opportunity to meet interesting people.*

Notice three subjunctive verbs: **llegues**, **encuentres**, **guste**.

## Common Triggers

| Trigger | Example |
|---------|---------|
| esperar que | Espero que tengas suerte |
| querer que | Quiero que vengas |
| es importante que | Es importante que estudies |
| dudar que | Dudo que llueva |
| es posible que | Es posible que sea tarde |
| aunque | Aunque sea difícil, lo haré |

## Advanced Practice

Write 5 sentences about your future plans using the subjunctive with these triggers: esperar que, es necesario que, dudar que, es bueno que, aunque.`,
    difficulty: Difficulty.UPPER_INTERMEDIATE,
    level: SpanishLevel.B2,
    order: 1,
    durationMinutes: 35,
    isPublished: true,
    vocabularyJson: [
      { word: "subjuntivo", translation: "subjunctive mood", partOfSpeech: "noun", example: "El subjuntivo expresa duda y deseo." },
      { word: "dudar", translation: "to doubt", partOfSpeech: "verb", example: "Dudo que venga a la fiesta." },
      { word: "esperar", translation: "to hope/wait", partOfSpeech: "verb", example: "Espero que todo salga bien." },
      { word: "recomendar", translation: "to recommend", partOfSpeech: "verb", example: "Te recomiendo este restaurante." },
      { word: "aunque", translation: "although/even though", partOfSpeech: "conjunction", example: "Aunque llueva, saldré." },
    ],
    grammarJson: [
      { title: "Subjunctive Triggers", content: "The subjunctive is triggered by WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt/Denial, and Ojalá. If the main clause expresses certainty (sé que, es verdad que), use indicative instead." },
    ],
  },
];

async function main() {
  console.log("Seeding lessons...");

  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: { slug: lesson.slug },
      update: {},
      create: lesson,
    });
  }

  console.log(`Created ${lessons.length} lessons`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });