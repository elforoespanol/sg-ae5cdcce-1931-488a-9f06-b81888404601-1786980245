export interface VocabularyItem {
  word: string;
  translation: string;
  partOfSpeech: string;
  example: string;
}

export interface GrammarItem {
  title: string;
  content: string;
}

export interface LessonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  difficulty: string;
  level: string;
  order: number;
  imageUrl: string | null;
  durationMinutes: number;
  isPublished: boolean;
  vocabularyJson: VocabularyItem[];
  grammarJson: GrammarItem[];
}

export const LESSONS_DATA: LessonData[] = [
  // A1 - Beginner
  {
    id: "greetings-a1",
    title: "Greetings & Introductions",
    slug: "greetings-introductions",
    description: "Learn how to greet people, introduce yourself, and ask basic questions in Spanish.",
    content: `# ¡Hola! Welcome to Spanish

Spanish greetings are essential for every conversation. Let's start with the basics.

**Hola** — Hello. The most universal greeting. Use it anytime.

**Buenos días** — Good morning. Use until around noon.

**Buenas tardes** — Good afternoon. Use from noon until evening.

**Buenas noches** — Good night / Good evening. Use after sunset.

## Introducing Yourself

**Me llamo...** — My name is...

**Soy de...** — I am from...

**Mucho gusto** — Nice to meet you.

**¿Cómo te llamas?** — What is your name?

## Formal vs. Informal

Use **tú** with friends, family, and peers. Use **usted** with strangers, elders, and in professional settings.

> In Spain, "vosotros" is used for informal plural "you." In Latin America, "ustedes" is used for both formal and informal plural.`,
    difficulty: "BEGINNER",
    level: "A1",
    order: 1,
    imageUrl: null,
    durationMinutes: 15,
    isPublished: true,
    vocabularyJson: [
      { word: "Hola", translation: "Hello", partOfSpeech: "interjection", example: "¡Hola! ¿Cómo estás?" },
      { word: "Adiós", translation: "Goodbye", partOfSpeech: "interjection", example: "Adiós, nos vemos mañana." },
      { word: "Gracias", translation: "Thank you", partOfSpeech: "interjection", example: "Gracias por tu ayuda." },
      { word: "Por favor", translation: "Please", partOfSpeech: "interjection", example: "Un café, por favor." },
      { word: "Buenos días", translation: "Good morning", partOfSpeech: "phrase", example: "¡Buenos días! ¿Cómo amaneciste?" },
      { word: "Mucho gusto", translation: "Nice to meet you", partOfSpeech: "phrase", example: "Mucho gusto, me llamo Carlos." },
    ],
    grammarJson: [
      { title: "Tú vs. Usted", content: "Tú is informal (friends, family). Usted is formal (strangers, professionals). The verb conjugation changes accordingly." },
      { title: "Question Marks", content: "Spanish uses inverted question marks at the beginning: ¿Cómo estás? This helps readers identify questions immediately." },
    ],
  },
  {
    id: "numbers-a1",
    title: "Numbers & Counting",
    slug: "numbers-counting",
    description: "Master Spanish numbers from 0 to 100, learn to tell time, and handle basic transactions.",
    content: `# Numbers 0–20

Memorize these foundational numbers:

| Number | Spanish |
|--------|---------|
| 0 | cero |
| 1 | uno |
| 2 | dos |
| 3 | tres |
| 4 | cuatro |
| 5 | cinco |
| 6 | seis |
| 7 | siete |
| 8 | ocho |
| 9 | nueve |
| 10 | diez |

## Tens (20–100)

| Number | Spanish |
|--------|---------|
| 20 | veinte |
| 30 | treinta |
| 40 | cuarenta |
| 50 | cincuenta |
| 60 | sesenta |
| 70 | setenta |
| 80 | ochenta |
| 90 | noventa |
| 100 | cien |

Combine tens and ones with **y**: 21 = **veintiuno**, 34 = **treinta y cuatro**.

## Telling Time

**¿Qué hora es?** — What time is it?

**Es la una.** — It's one o'clock.

**Son las dos.** — It's two o'clock.

**Son las tres y media.** — It's three thirty.

> Note: Use **la** for 1:00 only. All other hours use **las**.`,
    difficulty: "BEGINNER",
    level: "A1",
    order: 2,
    imageUrl: null,
    durationMinutes: 12,
    isPublished: true,
    vocabularyJson: [
      { word: "Cero", translation: "Zero", partOfSpeech: "number", example: "La temperatura es cero grados." },
      { word: "Uno", translation: "One", partOfSpeech: "number", example: "Tengo un hermano." },
      { word: "Diez", translation: "Ten", partOfSpeech: "number", example: "Son las diez de la mañana." },
      { word: "Cien", translation: "One hundred", partOfSpeech: "number", example: "El billete cuesta cien pesos." },
      { word: "Hora", translation: "Hour / Time", partOfSpeech: "noun", example: "¿Qué hora es?" },
      { word: "Minuto", translation: "Minute", partOfSpeech: "noun", example: "Faltan cinco minutos." },
    ],
    grammarJson: [
      { title: "Gender of Numbers", content: "Uno becomes un before masculine nouns (un libro) and una before feminine nouns (una mesa). Veintiuno also changes: veintún días, veintiuna noches." },
      { title: "Time Expressions", content: "Use 'y' for minutes past the hour: 2:15 = dos y cuarto. Use 'menos' for minutes to the hour: 2:45 = tres menos cuarto." },
    ],
  },
  {
    id: "colors-a1",
    title: "Colors & Descriptions",
    slug: "colors-descriptions",
    description: "Learn colors and basic descriptive adjectives to talk about the world around you.",
    content: `# Basic Colors

| Color | Spanish |
|-------|---------|
| Red | rojo |
| Blue | azul |
| Green | verde |
| Yellow | amarillo |
| Black | negro |
| White | blanco |
| Brown | marrón |
| Orange | naranja |
| Pink | rosa |
| Purple | morado |

## Adjective Agreement

Spanish adjectives must agree in gender and number with the noun they describe.

**El coche rojo** — The red car (masculine singular)

**La casa roja** — The red house (feminine singular)

**Los coches rojos** — The red cars (masculine plural)

**Las casas rojas** — The red houses (feminine plural)

## Common Descriptive Adjectives

**Grande** — Big (shortens to **gran** before singular nouns: un gran día)

**Pequeño** — Small

**Bonito** — Beautiful / Pretty

**Feo** — Ugly

**Nuevo** — New

**Viejo** — Old

> Most adjectives come AFTER the noun in Spanish: una mesa grande (a big table).`,
    difficulty: "BEGINNER",
    level: "A1",
    order: 3,
    imageUrl: null,
    durationMinutes: 12,
    isPublished: true,
    vocabularyJson: [
      { word: "Rojo", translation: "Red", partOfSpeech: "adjective", example: "La manzana es roja." },
      { word: "Azul", translation: "Blue", partOfSpeech: "adjective", example: "El cielo está azul." },
      { word: "Grande", translation: "Big", partOfSpeech: "adjective", example: "Vivo en una casa grande." },
      { word: "Pequeño", translation: "Small", partOfSpeech: "adjective", example: "Tengo un perro pequeño." },
      { word: "Bonito", translation: "Beautiful", partOfSpeech: "adjective", example: "Es un día muy bonito." },
      { word: "Color", translation: "Color", partOfSpeech: "noun", example: "¿Cuál es tu color favorito?" },
    ],
    grammarJson: [
      { title: "Adjective Agreement", content: "Adjectives ending in -o change to -a for feminine nouns. Add -s for plural. Adjectives ending in -e or consonants usually don't change for gender but add -s for plural." },
      { title: "Position of Adjectives", content: "Unlike English, Spanish adjectives typically follow the noun: 'una casa blanca' (a white house), not 'una blanca casa'." },
    ],
  },
  {
    id: "family-a1",
    title: "Family Members",
    slug: "family-members",
    description: "Talk about your family tree and describe relationships in Spanish.",
    content: `# Family Vocabulary

| English | Spanish |
|---------|---------|
| Mother | la madre / la mamá |
| Father | el padre / el papá |
| Brother | el hermano |
| Sister | la hermana |
| Son | el hijo |
| Daughter | la hija |
| Grandmother | la abuela |
| Grandfather | el abuelo |

## The Verb Tener

**Tener** means "to have" and is essential for talking about family.

| Subject | Conjugation |
|---------|-------------|
| Yo | tengo |
| Tú | tienes |
| Él/Ella | tiene |
| Nosotros | tenemos |
| Ellos | tienen |

**Tengo dos hermanos.** — I have two siblings.

**¿Tienes hijos?** — Do you have children?

## Possessive Adjectives

**Mi** — My (mi madre, mi padre)

**Tu** — Your (tu hermana)

**Su** — His/Her/Their (su abuelo)

**Nuestro/Nuestra** — Our (nuestro hijo, nuestra hija)

> Possessive adjectives agree with the possessed noun, not the owner: mis padres (my parents), mis hermanos (my siblings).`,
    difficulty: "BEGINNER",
    level: "A1",
    order: 4,
    imageUrl: null,
    durationMinutes: 15,
    isPublished: true,
    vocabularyJson: [
      { word: "Madre", translation: "Mother", partOfSpeech: "noun", example: "Mi madre es doctora." },
      { word: "Padre", translation: "Father", partOfSpeech: "noun", example: "Mi padre cocina muy bien." },
      { word: "Hermano", translation: "Brother", partOfSpeech: "noun", example: "Tengo un hermano mayor." },
      { word: "Abuela", translation: "Grandmother", partOfSpeech: "noun", example: "Mi abuela vive en Madrid." },
      { word: "Familia", translation: "Family", partOfSpeech: "noun", example: "Mi familia es muy grande." },
      { word: "Hijo", translation: "Son", partOfSpeech: "noun", example: "Tiene dos hijos." },
    ],
    grammarJson: [
      { title: "Tener (to have)", content: "Tener is an irregular verb. Key forms: yo tengo, tú tienes, él tiene. Use it to express age: 'Tengo veinte años' (I am 20 years old)." },
      { title: "Possessive Adjectives", content: "Mi, tu, su, nuestro/a agree with the noun they modify, not the owner. Use nuestros/nuestras for plural: nuestros padres." },
    ],
  },
  {
    id: "routines-a1",
    title: "Daily Routines",
    slug: "daily-routines",
    description: "Describe your daily schedule from morning to night using reflexive verbs.",
    content: `# Reflexive Verbs for Daily Routines

Reflexive verbs describe actions you do to yourself. They use **me, te, se, nos, se**.

## Morning Routine

**Me despierto** — I wake up

**Me levanto** — I get up

**Me ducho** — I shower

**Me visto** — I get dressed

**Desayuno** — I have breakfast

**Me cepillo los dientes** — I brush my teeth

## The Verb Ir (to go)

| Subject | Conjugation |
|---------|-------------|
| Yo | voy |
| Tú | vas |
| Él/Ella | va |
| Nosotros | vamos |
| Ellos | van |

**Voy al trabajo.** — I go to work.

**Vamos al cine.** — We go to the cinema.

## Time Expressions

**Por la mañana** — In the morning

**Por la tarde** — In the afternoon

**Por la noche** — At night

**Todos los días** — Every day

> Reflexive pronouns go before conjugated verbs: Me despierto a las siete. But after infinitives: Voy a despertarme temprano.`,
    difficulty: "BEGINNER",
    level: "A1",
    order: 5,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    vocabularyJson: [
      { word: "Despertar", translation: "To wake up", partOfSpeech: "verb", example: "Me despierto a las seis." },
      { word: "Ducharse", translation: "To shower", partOfSpeech: "verb", example: "Me ducho por la mañana." },
      { word: "Desayuno", translation: "Breakfast", partOfSpeech: "noun", example: "El desayuno está listo." },
      { word: "Trabajo", translation: "Work", partOfSpeech: "noun", example: "Voy al trabajo en autobús." },
      { word: "Cena", translation: "Dinner", partOfSpeech: "noun", example: "La cena es a las ocho." },
      { word: "Dormir", translation: "To sleep", partOfSpeech: "verb", example: "Me duermo a las once." },
    ],
    grammarJson: [
      { title: "Reflexive Verbs", content: "Use 'me' before conjugated verbs (me levanto). For infinitives, attach the pronoun: voy a levantarme. For commands: ¡Levántate temprano!" },
      { title: "Ir + a + infinitive", content: "This structure expresses future plans: 'Voy a comer' (I'm going to eat). It's the most common way to talk about the near future." },
    ],
  },
  {
    id: "food-a1",
    title: "Food & Dining",
    slug: "food-dining",
    description: "Order food at restaurants, name common dishes, and express preferences.",
    content: `# Food Vocabulary

| English | Spanish |
|---------|---------|
| Bread | el pan |
| Water | el agua |
| Coffee | el café |
| Milk | la leche |
| Meat | la carne |
| Fish | el pescado |
| Fruit | la fruta |
| Vegetable | la verdura |

## Ordering at a Restaurant

**La carta, por favor.** — The menu, please.

**Quisiera...** — I would like...

**Para mí...** — For me...

**¿Tiene...?** — Do you have...?

**La cuenta, por favor.** — The check, please.

## Expressing Preferences

**Me gusta...** — I like...

**No me gusta...** — I don't like...

**Prefiero...** — I prefer...

**Está delicioso.** — It's delicious.

**Está muy rico.** — It's very tasty.

> Use **el agua** even though agua is feminine. This is because agua starts with a stressed 'a' sound, so we use 'el' for easier pronunciation.`,
    difficulty: "BEGINNER",
    level: "A1",
    order: 6,
    imageUrl: null,
    durationMinutes: 15,
    isPublished: true,
    vocabularyJson: [
      { word: "Pan", translation: "Bread", partOfSpeech: "noun", example: "Quiero pan con mantequilla." },
      { word: "Agua", translation: "Water", partOfSpeech: "noun", example: "Un vaso de agua, por favor." },
      { word: "Café", translation: "Coffee", partOfSpeech: "noun", example: "Tomo café por la mañana." },
      { word: "Carne", translation: "Meat", partOfSpeech: "noun", example: "No como carne." },
      { word: "Fruta", translation: "Fruit", partOfSpeech: "noun", example: "Me gusta la fruta fresca." },
      { word: "Cuenta", translation: "Bill / Check", partOfSpeech: "noun", example: "La cuenta, por favor." },
    ],
    grammarJson: [
      { title: "Gustar (to like)", content: "Gustar works backwards: 'Me gusta el café' literally means 'Coffee pleases me.' Use 'me gustan' for plural: Me gustan las frutas." },
      { title: "Quisiera (I would like)", content: "Quisiera is the polite way to order. It comes from the verb querer (to want) in the conditional tense." },
    ],
  },
  // A2 - Elementary
  {
    id: "directions-a2",
    title: "Directions & Locations",
    slug: "directions-locations",
    description: "Ask for and give directions, describe locations, and navigate a city.",
    content: `# Asking for Directions

**¿Dónde está...?** — Where is...?

**¿Cómo llego a...?** — How do I get to...?

**¿Está lejos?** — Is it far?

**¿Está cerca?** — Is it near?

## Cardinal Directions

| Direction | Spanish |
|-----------|---------|
| North | el norte |
| South | el sur |
| East | el este |
| West | el oeste |

## Prepositions of Place

**A la derecha** — To the right

**A la izquierda** — To the left

**Todo recto** — Straight ahead

**En la esquina** — At the corner

**Al lado de** — Next to

**Enfrente de** — Across from / Opposite

**Detrás de** — Behind

**Delante de** — In front of

## The Verb Estar

Use **estar** (not ser) for location:

**El banco está al lado de la farmacia.** — The bank is next to the pharmacy.

**¿Dónde estás?** — Where are you?

> **Ser** = permanent characteristics. **Estar** = location, temporary states, emotions.`,
    difficulty: "ELEMENTARY",
    level: "A2",
    order: 7,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    vocabularyJson: [
      { word: "Derecha", translation: "Right", partOfSpeech: "noun", example: "Gira a la derecha." },
      { word: "Izquierda", translation: "Left", partOfSpeech: "noun", example: "La farmacia está a la izquierda." },
      { word: "Recto", translation: "Straight", partOfSpeech: "adverb", example: "Sigue todo recto." },
      { word: "Esquina", translation: "Corner", partOfSpeech: "noun", example: "En la esquina hay un café." },
      { word: "Cerca", translation: "Near", partOfSpeech: "adverb", example: "Está muy cerca." },
      { word: "Lejos", translation: "Far", partOfSpeech: "adverb", example: "El museo está lejos." },
    ],
    grammarJson: [
      { title: "Ser vs. Estar", content: "Use SER for identity, time, origin, profession. Use ESTAR for location, temporary states, emotions, and progressive actions." },
      { title: "Prepositions of Place", content: "Compound prepositions use 'de': al lado de, enfrente de, detrás de. Contract 'a + el' to 'al' and 'de + el' to 'del'." },
    ],
  },
  {
    id: "shopping-a2",
    title: "Shopping & Money",
    slug: "shopping-money",
    description: "Handle shopping situations, ask about prices, and make purchases.",
    content: `# Shopping Phrases

**¿Cuánto cuesta?** — How much does it cost?

**¿Tiene talla...?** — Do you have size...?

**¿Puedo probármelo?** — Can I try it on?

**Solo estoy mirando.** — I'm just looking.

**¿Aceptan tarjeta?** — Do you take cards?

## Numbers for Shopping

**Un euro / dos euros** — One euro / two euros

**Cincuenta centavos** — Fifty cents

**Demasiado caro** — Too expensive

**¿Tiene algo más barato?** — Do you have something cheaper?

## The Verb Querer

| Subject | Conjugation |
|---------|-------------|
| Yo | quiero |
| Tú | quieres |
| Él/Ella | quiere |
| Nosotros | queremos |
| Ellos | quieren |

**Quiero comprar una camisa.** — I want to buy a shirt.

**¿Quieres probártelo?** — Do you want to try it on?

## Clothing Vocabulary

| English | Spanish |
|---------|---------|
| Shirt | la camisa |
| Pants | los pantalones |
| Dress | el vestido |
| Shoes | los zapatos |
| Hat | el sombrero |
| Jacket | la chaqueta |

> In Spanish markets, bargaining is common. Try: **¿Me lo deja en...?** (Can you give it to me for...?)`,
    difficulty: "ELEMENTARY",
    level: "A2",
    order: 8,
    imageUrl: null,
    durationMinutes: 15,
    isPublished: true,
    vocabularyJson: [
      { word: "Cuesta", translation: "It costs", partOfSpeech: "verb", example: "¿Cuánto cuesta esta camisa?" },
      { word: "Caro", translation: "Expensive", partOfSpeech: "adjective", example: "Esto está muy caro." },
      { word: "Barato", translation: "Cheap", partOfSpeech: "adjective", example: "Busco algo más barato." },
      { word: "Talla", translation: "Size", partOfSpeech: "noun", example: "¿Tiene talla mediana?" },
      { word: "Camisa", translation: "Shirt", partOfSpeech: "noun", example: "Quiero una camisa blanca." },
      { word: "Zapatos", translation: "Shoes", partOfSpeech: "noun", example: "Necesito zapatos nuevos." },
    ],
    grammarJson: [
      { title: "Querer + Infinitive", content: "Querer followed by an infinitive expresses wants: 'Quiero comer' (I want to eat). Querer is stem-changing: quiero, quieres, quiere." },
      { title: "Direct Object Pronouns", content: "Use 'lo' for masculine things, 'la' for feminine: '¿La quieres?' (Do you want it - feminine item?). Attach to infinitives: 'Quiero probármelo'." },
    ],
  },
  {
    id: "weather-a2",
    title: "Weather & Seasons",
    slug: "weather-seasons",
    description: "Discuss weather, make plans based on conditions, and describe seasons.",
    content: `# Weather Expressions

**¿Qué tiempo hace?** — What's the weather like?

| Weather | Spanish |
|---------|---------|
| It's sunny | Hace sol |
| It's hot | Hace calor |
| It's cold | Hace frío |
| It's windy | Hace viento |
| It's raining | Está lloviendo |
| It's snowing | Está nevando |
| It's cloudy | Está nublado |

## Seasons

| Season | Spanish |
|--------|---------|
| Spring | la primavera |
| Summer | el verano |
| Autumn/Fall | el otoño |
| Winter | el invierno |

## Making Weather-Dependent Plans

**Si hace sol, vamos a la playa.** — If it's sunny, we'll go to the beach.

**Lleva un paraguas por si acaso.** — Take an umbrella just in case.

**Hace demasiado calor.** — It's too hot.

**¿Te gusta el frío?** — Do you like the cold?

> Weather uses both **hacer** and **estar**: Hace sol (general condition) vs. Está lloviendo (current action).`,
    difficulty: "ELEMENTARY",
    level: "A2",
    order: 9,
    imageUrl: null,
    durationMinutes: 12,
    isPublished: true,
    vocabularyJson: [
      { word: "Sol", translation: "Sun", partOfSpeech: "noun", example: "Hace mucho sol hoy." },
      { word: "Lluvia", translation: "Rain", partOfSpeech: "noun", example: "No me gusta la lluvia." },
      { word: "Frío", translation: "Cold", partOfSpeech: "noun", example: "Hace mucho frío en invierno." },
      { word: "Calor", translation: "Heat", partOfSpeech: "noun", example: "Hace mucho calor en verano." },
      { word: "Viento", translation: "Wind", partOfSpeech: "noun", example: "Hace mucho viento." },
      { word: "Paraguas", translation: "Umbrella", partOfSpeech: "noun", example: "No olvides el paraguas." },
    ],
    grammarJson: [
      { title: "Hacer vs. Estar for Weather", content: "Use 'hace' for general conditions: hace sol, hace frío. Use 'está' for current actions or states: está lloviendo, está nublado." },
      { title: "Si + Present, Future", content: "To make weather-dependent plans: 'Si hace buen tiempo, saldremos' (If the weather is good, we'll go out). Use present in the 'if' clause and future in the main clause." },
    ],
  },
  {
    id: "hobbies-a2",
    title: "Hobbies & Free Time",
    slug: "hobbies-free-time",
    description: "Talk about hobbies, sports, and leisure activities with friends.",
    content: `# Talking About Hobbies

**¿Qué te gusta hacer?** — What do you like to do?

**Me gusta...** — I like...

**Mi pasatiempo favorito es...** — My favorite hobby is...

**Los fines de semana...** — On weekends...

## Common Activities

| English | Spanish |
|---------|---------|
| To read | leer |
| To watch TV | ver la tele |
| To listen to music | escuchar música |
| To play sports | practicar deportes |
| To dance | bailar |
| To cook | cocinar |
| To travel | viajar |
| To swim | nadar |

## The Verb Hacer (to do/make)

| Subject | Conjugation |
|---------|-------------|
| Yo | hago |
| Tú | haces |
| Él/Ella | hace |
| Nosotros | hacemos |
| Ellos | hacen |

**Hago ejercicio todos los días.** — I exercise every day.

**¿Qué haces en tu tiempo libre?** — What do you do in your free time?

## Frequency Adverbs

**Siempre** — Always

**A menudo** — Often

**A veces** — Sometimes

**Nunca** — Never

> Frequency adverbs usually go before the verb: **Siempre leo antes de dormir.** (I always read before sleeping.)`,
    difficulty: "ELEMENTARY",
    level: "A2",
    order: 10,
    imageUrl: null,
    durationMinutes: 15,
    isPublished: true,
    vocabularyJson: [
      { word: "Pasatiempo", translation: "Hobby", partOfSpeech: "noun", example: "Mi pasatiempo favorito es leer." },
      { word: "Deporte", translation: "Sport", partOfSpeech: "noun", example: "Practico deportes los fines de semana." },
      { word: "Música", translation: "Music", partOfSpeech: "noun", example: "Escucho música todos los días." },
      { word: "Tiempo libre", translation: "Free time", partOfSpeech: "phrase", example: "En mi tiempo libre dibujo." },
      { word: "Fines de semana", translation: "Weekends", partOfSpeech: "phrase", example: "Viajo los fines de semana." },
      { word: "Cine", translation: "Cinema / Movies", partOfSpeech: "noun", example: "Me gusta ir al cine." },
    ],
    grammarJson: [
      { title: "Hacer (to do/make)", content: "Hacer is irregular: hago, haces, hace, hacemos, hacen. Use it for sports: 'hacer deporte', for plans: 'hacer planes', and for weather: 'hace frío'." },
      { title: "Frequency Adverbs", content: "Place frequency adverbs before the verb: 'Nunca como carne' (I never eat meat). After 'ser': 'Siempre soy puntual' (I'm always punctual)." },
    ],
  },
  // B1 - Intermediate
  {
    id: "past-experiences-b1",
    title: "Past Experiences",
    slug: "past-experiences",
    description: "Narrate past events using the preterite tense for completed actions.",
    content: `# The Preterite Tense

The preterite describes completed actions in the past. Think of it as a snapshot.

## Regular -ar Verbs

| Subject | Hablar (to speak) |
|---------|-------------------|
| Yo | hablé |
| Tú | hablaste |
| Él/Ella | habló |
| Nosotros | hablamos |
| Ellos | hablaron |

## Regular -er/-ir Verbs

| Subject | Comer (to eat) | Vivir (to live) |
|---------|----------------|-----------------|
| Yo | comí | viví |
| Tú | comiste | viviste |
| Él/Ella | comió | vivió |
| Nosotros | comimos | vivimos |
| Ellos | comieron | vivieron |

## Time Expressions for Past

**Ayer** — Yesterday

**La semana pasada** — Last week

**El mes pasado** — Last month

**El año pasado** — Last year

**Hace dos días** — Two days ago

> **Hace + time + que + preterite**: Hace dos años que estudié español. (I studied Spanish two years ago.)`,
    difficulty: "INTERMEDIATE",
    level: "B1",
    order: 11,
    imageUrl: null,
    durationMinutes: 20,
    isPublished: true,
    vocabularyJson: [
      { word: "Ayer", translation: "Yesterday", partOfSpeech: "adverb", example: "Ayer fui al mercado." },
      { word: "Pasado", translation: "Last / Past", partOfSpeech: "adjective", example: "La semana pasada viajé a Barcelona." },
      { word: "Experiencia", translation: "Experience", partOfSpeech: "noun", example: "Fue una experiencia increíble." },
      { word: "Viaje", translation: "Trip", partOfSpeech: "noun", example: "El viaje fue largo pero divertido." },
      { word: "Historia", translation: "Story / History", partOfSpeech: "noun", example: "Cuéntame tu historia." },
      { word: "Recuerdo", translation: "Memory", partOfSpeech: "noun", example: "Tengo buenos recuerdos de mi infancia." },
    ],
    grammarJson: [
      { title: "Preterite Endings", content: "-ar verbs: -é, -aste, -ó, -amos, -aron. -er/-ir verbs: -í, -iste, -ió, -imos, -ieron. The preterite describes completed actions with clear beginnings and ends." },
      { title: "Stem-Changing in Preterite", content: "Some -ir verbs stem-change in the third persons: dormir → durmió, durmieron. Preferir → prefirió, prefirieron." },
    ],
  },
  {
    id: "future-plans-b1",
    title: "Future Plans & Intentions",
    slug: "future-plans",
    description: "Express future plans using ir a + infinitive and the simple future tense.",
    content: `# Two Ways to Talk About the Future

## 1. Ir a + Infinitive (Near Future)

This is the most common way to express immediate plans.

**Voy a estudiar mañana.** — I'm going to study tomorrow.

**¿Vas a venir a la fiesta?** — Are you going to come to the party?

**No va a llover.** — It's not going to rain.

## 2. Simple Future Tense

Used for predictions, promises, and distant future.

| Subject | Ending |
|---------|--------|
| Yo | -é |
| Tú | -ás |
| Él/Ella | -á |
| Nosotros | -emos |
| Ellos | -án |

**Hablar** → hablaré, hablarás, hablará, hablaremos, hablarán

**Comer** → comeré, comerás, comerá, comeremos, comerán

**Vivir** → viviré, vivirás, vivirá, viviremos, vivirán

## Future Time Expressions

**Mañana** — Tomorrow

**La próxima semana** — Next week

**El próximo mes** — Next month

**En el futuro** — In the future

**Algún día** — Someday

> **Ir a + infinitive** = plans and intentions. **Future tense** = predictions and formal statements.`,
    difficulty: "INTERMEDIATE",
    level: "B1",
    order: 12,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    vocabularyJson: [
      { word: "Mañana", translation: "Tomorrow", partOfSpeech: "adverb", example: "Mañana tengo un examen." },
      { word: "Futuro", translation: "Future", partOfSpeech: "noun", example: "Pienso en el futuro." },
      { word: "Plan", translation: "Plan", partOfSpeech: "noun", example: "Mi plan es viajar por Europa." },
      { word: "Intención", translation: "Intention", partOfSpeech: "noun", example: "Mi intención es aprender español." },
      { word: "Predicción", translation: "Prediction", partOfSpeech: "noun", example: "Mi predicción es que ganaremos." },
      { word: "Próximo", translation: "Next", partOfSpeech: "adjective", example: "La próxima semana empiezo clases." },
    ],
    grammarJson: [
      { title: "Ir a + Infinitive", content: "The most common future expression in spoken Spanish. Formed with conjugated 'ir' + 'a' + infinitive: 'Voy a comer' (I'm going to eat)." },
      { title: "Simple Future", content: "Add endings to the infinitive: -é, -ás, -á, -emos, -án. Used for predictions: 'Lloverá mañana' (It will rain tomorrow) and promises." },
    ],
  },
  {
    id: "hypothetical-b1",
    title: "Hypothetical Situations",
    slug: "hypothetical-situations",
    description: "Express wishes and hypothetical scenarios using the subjunctive mood.",
    content: `# The Present Subjunctive

The subjunctive expresses wishes, doubts, emotions, and hypotheticals.

## Forming the Present Subjunctive

Take the **yo** form of the present indicative, drop the -o, and add subjunctive endings.

For -ar verbs: **-e, -es, -e, -emos, -en**

For -er/-ir verbs: **-a, -as, -a, -amos, -an**

| Verb | Yo Present | Subjunctive |
|------|-----------|-------------|
| Hablar | hablo | hable, hables, hable, hablemos, hablen |
| Comer | como | coma, comas, coma, comamos, coman |
| Vivir | vivo | viva, vivas, viva, vivamos, vivan |

## Common Triggers

**Quiero que...** — I want that... (wish)

**Espero que...** — I hope that... (hope)

**Es necesario que...** — It's necessary that... (necessity)

**Dudo que...** — I doubt that... (doubt)

**Ojalá...** — I hope... / If only... (wish)

> **Ojalá** is a magical word. It comes from Arabic "Inshallah" (God willing). Use it alone: **¡Ojalá!** (I hope so!)`,
    difficulty: "INTERMEDIATE",
    level: "B1",
    order: 13,
    imageUrl: null,
    durationMinutes: 22,
    isPublished: true,
    vocabularyJson: [
      { word: "Ojalá", translation: "I hope / If only", partOfSpeech: "interjection", example: "¡Ojalá ganemos el partido!" },
      { word: "Deseo", translation: "Wish", partOfSpeech: "noun", example: "Mi deseo es viajar por el mundo." },
      { word: "Duda", translation: "Doubt", partOfSpeech: "noun", example: "Tengo dudas sobre el examen." },
      { word: "Esperanza", translation: "Hope", partOfSpeech: "noun", example: "Tengo esperanza de que todo salga bien." },
      { word: "Posible", translation: "Possible", partOfSpeech: "adjective", example: "Es posible que llueva." },
      { word: "Necesario", translation: "Necessary", partOfSpeech: "adjective", example: "Es necesario que estudies más." },
    ],
    grammarJson: [
      { title: "Subjunctive Triggers", content: "WEIRDO acronym: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt/Denial, Ojalá. All trigger the subjunctive in the dependent clause." },
      { title: "Subjunctive vs. Indicative", content: "Use indicative for facts and certainty: 'Sé que él viene.' Use subjunctive for uncertainty: 'Dudo que él venga.'" },
    ],
  },
  {
    id: "work-b1",
    title: "Work & Career",
    slug: "work-career",
    description: "Discuss professional life, job applications, and workplace communication.",
    content: `# Professional Vocabulary

| English | Spanish |
|---------|---------|
| Job | el trabajo / el empleo |
| Company | la empresa |
| Boss | el jefe / la jefa |
| Colleague | el compañero / la compañera |
| Salary | el salario |
| CV / Resume | el currículum |
| Interview | la entrevista |
| Experience | la experiencia |

## Talking About Your Job

**Trabajo como...** — I work as...

**Soy...** — I am... (profession)

**Mi responsabilidad principal es...** — My main responsibility is...

**Llevo cinco años trabajando aquí.** — I've been working here for five years.

## The Present Perfect

**He trabajado** — I have worked

**Has vivido** — You have lived

**Ha estudiado** — He/She has studied

Formed with **haber** (he, has, ha, hemos, han) + past participle.

> Use the present perfect for recent past actions with present relevance: **He terminado el proyecto.** (I've finished the project.)`,
    difficulty: "INTERMEDIATE",
    level: "B1",
    order: 14,
    imageUrl: null,
    durationMinutes: 20,
    isPublished: true,
    vocabularyJson: [
      { word: "Empresa", translation: "Company", partOfSpeech: "noun", example: "Trabajo en una empresa de tecnología." },
      { word: "Entrevista", translation: "Interview", partOfSpeech: "noun", example: "Tengo una entrevista mañana." },
      { word: "Salario", translation: "Salary", partOfSpeech: "noun", example: "Mi salario es competitivo." },
      { word: "Currículum", translation: "Resume / CV", partOfSpeech: "noun", example: "Envié mi currículum ayer." },
      { word: "Experiencia", translation: "Experience", partOfSpeech: "noun", example: "Tengo mucha experiencia en ventas." },
      { word: "Responsabilidad", translation: "Responsibility", partOfSpeech: "noun", example: "Mi responsabilidad es gestionar el equipo." },
    ],
    grammarJson: [
      { title: "Present Perfect (Pretérito Perfecto)", content: "Formed with haber + past participle: he hablado, has comido, ha vivido. Used for recent past with present relevance." },
      { title: "Llevar + Time + Gerund", content: "'Llevo dos años trabajando aquí' (I've been working here for two years). Expresses ongoing duration of an activity." },
    ],
  },
  {
    id: "health-b1",
    title: "Health & Wellness",
    slug: "health-wellness",
    description: "Talk about health, body parts, symptoms, and visiting a doctor.",
    content: `# Body Parts

| English | Spanish |
|---------|---------|
| Head | la cabeza |
| Stomach | el estómago |
| Back | la espalda |
| Throat | la garganta |
| Arm | el brazo |
| Leg | la pierna |

## At the Doctor's

**Me duele...** — ...hurts. (literally: ...pains me)

**Me duele la cabeza.** — My head hurts. / I have a headache.

**Me duelen los ojos.** — My eyes hurt. (plural = duelen)

**Tengo fiebre.** — I have a fever.

**Tengo tos.** — I have a cough.

**Estoy resfriado/resfriada.** — I have a cold.

## The Verb Doler

**Doler** works like **gustar**. The thing hurting is the subject.

**Me duele el estómago.** — My stomach hurts.

**Te duele la garganta.** — Your throat hurts.

**Le duelen las muelas.** — His/Her teeth hurt.

> Use **duele** for singular subjects, **duelen** for plural.`,
    difficulty: "INTERMEDIATE",
    level: "B1",
    order: 15,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    vocabularyJson: [
      { word: "Dolor", translation: "Pain", partOfSpeech: "noun", example: "Tengo mucho dolor de cabeza." },
      { word: "Fiebre", translation: "Fever", partOfSpeech: "noun", example: "Tengo fiebre y me siento mal." },
      { word: "Garganta", translation: "Throat", partOfSpeech: "noun", example: "Me duele la garganta." },
      { word: "Estómago", translation: "Stomach", partOfSpeech: "noun", example: "Me duele el estómago." },
      { word: "Doctor", translation: "Doctor", partOfSpeech: "noun", example: "Voy al doctor mañana." },
      { word: "Medicina", translation: "Medicine", partOfSpeech: "noun", example: "Necesito tomar mi medicina." },
    ],
    grammarJson: [
      { title: "Doler (to hurt)", content: "Doler works like gustar: the body part is the subject. Singular: 'Me duele la cabeza.' Plural: 'Me duelen los ojos.'" },
      { title: "Reflexive for Illnesses", content: "Many illness expressions use reflexives: 'Me he resfriado' (I've caught a cold), 'Me he quemado' (I've burned myself)." },
    ],
  },
  // B2 - Upper Intermediate
  {
    id: "narratives-b2",
    title: "Complex Narratives",
    slug: "complex-narratives",
    description: "Master the difference between preterite and imperfect for rich storytelling.",
    content: `# Preterite vs. Imperfect

These two past tenses work together to tell rich stories.

## Preterite = The What

- Completed actions
- Specific moments
- Events that happened

**Ayer comí paella.** — Yesterday I ate paella. (completed)

**De repente, sonó el teléfono.** — Suddenly, the phone rang. (specific moment)

## Imperfect = The Background

- Ongoing situations
- Descriptions
- Habits in the past
- Time, age, weather

**Cuando era niño, vivía en Madrid.** — When I was a child, I lived in Madrid. (ongoing)

**Era un día soleado.** — It was a sunny day. (description)

**Siempre íbamos a la playa.** — We always went to the beach. (habit)

## Imperfect Endings

| Subject | -ar | -er/-ir |
|---------|-----|---------|
| Yo | -aba | -ía |
| Tú | -abas | -ías |
| Él/Ella | -aba | -ía |
| Nosotros | -ábamos | -íamos |
| Ellos | -aban | -ían |

**Hablar** → hablaba, hablabas, hablaba, hablábamos, hablaban

**Comer** → comía, comías, comía, comíamos, comían

> **Rule of thumb**: Preterite moves the story forward. Imperfect paints the background.`,
    difficulty: "UPPER_INTERMEDIATE",
    level: "B2",
    order: 16,
    imageUrl: null,
    durationMinutes: 25,
    isPublished: true,
    vocabularyJson: [
      { word: "Narrativa", translation: "Narrative", partOfSpeech: "noun", example: "La narrativa de García Márquez es mágica." },
      { word: "De repente", translation: "Suddenly", partOfSpeech: "adverb", example: "De repente, todo cambió." },
      { word: "Fondo", translation: "Background", partOfSpeech: "noun", example: "El fondo de la historia es triste." },
      { word: "Hábito", translation: "Habit", partOfSpeech: "noun", example: "Tenía el hábito de leer antes de dormir." },
      { word: "Cuento", translation: "Story", partOfSpeech: "noun", example: "Me gusta escribir cuentos." },
      { word: "Pasado", translation: "Past", partOfSpeech: "noun", example: "El pasado imperfecto es elegante." },
    ],
    grammarJson: [
      { title: "Preterite vs. Imperfect", content: "Preterite: completed actions, specific times, interruptions. Imperfect: descriptions, habits, ongoing actions, background. Together they create rich narratives." },
      { title: "Imperfect Progressive", content: "Use estar + gerund in imperfect for ongoing actions: 'Estaba comiendo cuando llamaste' (I was eating when you called)." },
    ],
  },
  {
    id: "opinions-b2",
    title: "Opinions & Debates",
    slug: "opinions-debates",
    description: "Express and defend opinions, agree and disagree, and debate topics.",
    content: `# Expressing Opinions

**En mi opinión...** — In my opinion...

**Creo que...** — I think that...

**Me parece que...** — It seems to me that...

**Desde mi punto de vista...** — From my point of view...

## Agreeing and Disagreeing

**Estoy de acuerdo.** — I agree.

**No estoy de acuerdo.** — I disagree.

**Tienes razón.** — You're right.

**No es así.** — That's not how it is.

**Por un lado... por otro lado...** — On one hand... on the other hand...

## Counter-Arguments

**Sin embargo...** — However...

**Aunque...** — Although...

**A pesar de que...** — Despite the fact that...

**No obstante...** — Nevertheless...

**Por el contrario...** — On the contrary...

## Advanced Structures

**No solo... sino también...** — Not only... but also...

**Tanto... como...** — Both... and...

**Cuanto más... más...** — The more... the more...

> Debating in Spanish requires confidence. Practice with topics you know well: technology, environment, education.`,
    difficulty: "UPPER_INTERMEDIATE",
    level: "B2",
    order: 17,
    imageUrl: null,
    durationMinutes: 20,
    isPublished: true,
    vocabularyJson: [
      { word: "Opinión", translation: "Opinion", partOfSpeech: "noun", example: "Respeto tu opinión." },
      { word: "Acuerdo", translation: "Agreement", partOfSpeech: "noun", example: "Estoy de acuerdo contigo." },
      { word: "Debate", translation: "Debate", partOfSpeech: "noun", example: "El debate fue muy interesante." },
      { word: "Argumento", translation: "Argument", partOfSpeech: "noun", example: "Tu argumento es convincente." },
      { word: "Perspectiva", translation: "Perspective", partOfSpeech: "noun", example: "Desde mi perspectiva, es una buena idea." },
      { word: "Conclusión", translation: "Conclusion", partOfSpeech: "noun", example: "En conclusión, debemos actuar ahora." },
    ],
    grammarJson: [
      { title: "Subjunctive with Opinions", content: "After expressions of opinion: 'Creo que es bueno' (indicative - certainty) vs. 'No creo que sea bueno' (subjunctive - doubt)." },
      { title: "Concessive Clauses", content: "Aunque + subjunctive = hypothetical: 'Aunque venga, no le hablaré.' Aunque + indicative = factual: 'Aunque está lloviendo, salgo.'" },
    ],
  },
  {
    id: "culture-b2",
    title: "Cultural Immersion",
    slug: "cultural-immersion",
    description: "Explore Spanish-speaking cultures, customs, festivals, and regional differences.",
    content: `# Spanish-Speaking World

Over 500 million people speak Spanish across 21 countries. Each has unique traditions.

## Regional Variations

| Country | Unique Feature |
|---------|---------------|
| Spain | Uses vosotros for informal plural |
| Mexico | Distinct cuisine (mole, tacos) |
| Argentina | Uses "vos" instead of "tú" |
| Colombia | Considered to have very clear Spanish |
| Peru | Rich indigenous heritage |

## Key Festivals

**La Tomatina** (Spain) — Giant tomato fight in Buñol

**Día de los Muertos** (Mexico) — Day of the Dead, honoring ancestors

**Carnaval** (Various) — Pre-Lenten celebrations

**Las Fallas** (Valencia) — Burning of giant sculptures

## Cultural Vocabulary

**La sobremesa** — The time spent chatting after a meal

**El tapeo** — Going from bar to bar eating tapas

**La siesta** — Afternoon rest

**El paseo** — Evening stroll

> **Sobremesa** has no English equivalent. It captures the Spanish value of slowing down and enjoying conversation.`,
    difficulty: "UPPER_INTERMEDIATE",
    level: "B2",
    order: 18,
    imageUrl: null,
    durationMinutes: 18,
    isPublished: true,
    vocabularyJson: [
      { word: "Cultura", translation: "Culture", partOfSpeech: "noun", example: "Me encanta la cultura española." },
      { word: "Tradición", translation: "Tradition", partOfSpeech: "noun", example: "Es una tradición muy antigua." },
      { word: "Festival", translation: "Festival", partOfSpeech: "noun", example: "El festival dura tres días." },
      { word: "Costumbre", translation: "Custom", partOfSpeech: "noun", example: "Es una costumbre local." },
      { word: "Patrimonio", translation: "Heritage", partOfSpeech: "noun", example: "Es patrimonio de la humanidad." },
      { word: "Identidad", translation: "Identity", partOfSpeech: "noun", example: "La identidad cultural es importante." },
    ],
    grammarJson: [
      { title: "Regional Pronouns", content: "Spain uses 'vosotros' (informal plural). Argentina uses 'vos' with distinct conjugations. Most of Latin America uses 'ustedes' for all plural 'you.'" },
      { title: "Ser for Origin", content: "Use ser to describe origin and cultural identity: 'Soy mexicano' (I am Mexican). 'España es famosa por su gastronomía.'" },
    ],
  },
  {
    id: "technical-b2",
    title: "Technical Spanish",
    slug: "technical-spanish",
    description: "Technology, business, and professional vocabulary for specialized contexts.",
    content: `# Technology Vocabulary

| English | Spanish |
|---------|---------|
| Computer | la computadora / el ordenador |
| Software | el software |
| Internet | internet (no article needed) |
| Password | la contraseña |
| Download | descargar |
| Upload | subir |
| Database | la base de datos |
| Algorithm | el algoritmo |

## Business Communication

**Quedo a la espera de sus comentarios.** — I look forward to your comments.

**Le adjunto el documento.** — Please find the document attached.

**Quedaríamos en...** — We would meet at...

**Le ruego que...** — I kindly ask you to...

## Passive Voice

The passive voice is common in formal writing.

**Se venden coches.** — Cars are sold. / Cars for sale.

**La carta fue escrita por Juan.** — The letter was written by Juan.

**Se dice que...** — It is said that...

> The **se pasiva** (passive se) is more common than the true passive: **Se habla español** (Spanish spoken here).`,
    difficulty: "UPPER_INTERMEDIATE",
    level: "B2",
    order: 19,
    imageUrl: null,
    durationMinutes: 20,
    isPublished: true,
    vocabularyJson: [
      { word: "Tecnología", translation: "Technology", partOfSpeech: "noun", example: "La tecnología cambia rápido." },
      { word: "Contraseña", translation: "Password", partOfSpeech: "noun", example: "Olvidé mi contraseña." },
      { word: "Descargar", translation: "To download", partOfSpeech: "verb", example: "Voy a descargar la aplicación." },
      { word: "Reunión", translation: "Meeting", partOfSpeech: "noun", example: "Tenemos una reunión a las diez." },
      { word: "Documento", translation: "Document", partOfSpeech: "noun", example: "Envíame el documento por correo." },
      { word: "Proyecto", translation: "Project", partOfSpeech: "noun", example: "El proyecto está en marcha." },
    ],
    grammarJson: [
      { title: "Passive Voice (Se Pasiva)", content: "Use 'se' + third-person verb for general statements: 'Se venden casas' (Houses for sale). Use ser + past participle for specific actions: 'Fue construido en 1990.'" },
      { title: "Formal Email Language", content: "Use conditional for politeness: 'Querría saber...' (I would like to know...). Use subjunctive after requests: 'Le ruego que me envíe...'" },
    ],
  },
  {
    id: "advanced-grammar-b2",
    title: "Advanced Grammar Structures",
    slug: "advanced-grammar",
    description: "Master complex grammatical structures for near-fluent communication.",
    content: `# Advanced Structures

## Conditional Sentences

**Type 2 (Unreal Present):**
Si + imperfect subjunctive, conditional

**Si tuviera dinero, viajaría por el mundo.** — If I had money, I would travel the world.

**Type 3 (Unreal Past):**
Si + pluperfect subjunctive, conditional perfect

**Si hubiera estudiado, habría aprobado.** — If I had studied, I would have passed.

## Imperfect Subjunctive

Formed from the third-person plural preterite, dropping -ron and adding:

| Subject | Ending |
|---------|--------|
| Yo | -ra |
| Tú | -ras |
| Él/Ella | -ra |
| Nosotros | -ramos |
| Ellos | -ran |

**Hablaron** → hablara, hablaras, hablara, habláramos, hablaran

**Comieron** → comiera, comieras, comiera, comiéramos, comieran

## Reported Speech

**Direct:** Ella dijo: "Voy al cine."

**Indirect:** Ella dijo que iba al cine.

> When reporting speech, tenses shift back in time. Present becomes imperfect, preterite becomes pluperfect.`,
    difficulty: "UPPER_INTERMEDIATE",
    level: "B2",
    order: 20,
    imageUrl: null,
    durationMinutes: 22,
    isPublished: true,
    vocabularyJson: [
      { word: "Condicional", translation: "Conditional", partOfSpeech: "noun", example: "El condicional expresa hipótesis." },
      { word: "Subjuntivo", translation: "Subjunctive", partOfSpeech: "noun", example: "El subjuntivo imperfecto es elegante." },
      { word: "Hipótesis", translation: "Hypothesis", partOfSpeech: "noun", example: "Es solo una hipótesis." },
      { word: "Reportar", translation: "To report", partOfSpeech: "verb", example: "Voy a reportar los resultados." },
      { word: "Estructura", translation: "Structure", partOfSpeech: "noun", example: "Esta estructura gramatical es compleja." },
      { word: "Complejo", translation: "Complex", partOfSpeech: "adjective", example: "Es un tema complejo." },
    ],
    grammarJson: [
      { title: "Imperfect Subjunctive", content: "Formed from 3rd person plural preterite: hablaron → hablara. Used in hypothetical if-clauses: 'Si pudiera, volaría.' (If I could, I would fly.)" },
      { title: "Reported Speech (Estilo Indirecto)", content: "Tenses shift back: present → imperfect, preterite → pluperfect, future → conditional. 'Dijo que vendría' (He said he would come)." },
    ],
  },
];