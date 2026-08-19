import type { LessonData, RegionalVocabItem, GrammarItem, DialogueScenario, QuizQuestion, FlashcardItem } from "./lessons-data";
import { generateA2Lessons } from "./generate-a2-lessons";
import { generateB1Lessons } from "./generate-b1-lessons";
import { generateB2Lessons } from "./generate-b2-lessons";

const A1_LESSONS = {
  "a1-01-greetings": {
    title: "Greetings & Goodbyes",
    description: "Master everyday greetings and goodbyes—from casual ¡Hola! to warm Buenas noches",
    vocabulary: [
      { word: "Hello", spainVariant: "Hola", latamVariant: "Hola", phoneticSpain: "[OH-lah]", phoneticLatam: "[OH-lah]", english: "Hello", partOfSpeech: "interjection", exampleSentenceSpain: "¡Hola! ¿Cómo te va?", exampleSentenceLatam: "¡Hola! ¿Qué onda?" },
      { word: "Good morning", spainVariant: "Buenos días", latamVariant: "Buenos días", phoneticSpain: "[BWEH-nos DEE-ahs]", phoneticLatam: "[BWEH-nos DEE-ahs]", english: "Good morning", partOfSpeech: "phrase", exampleSentenceSpain: "Buenos días, ¿qué tal el día?", exampleSentenceLatam: "Buenos días, ¿cómo amaneciste?" },
      { word: "Good afternoon", spainVariant: "Buenas tardes", latamVariant: "Buenas tardes", phoneticSpain: "[BWEH-nas TAR-dehs]", phoneticLatam: "[BWEH-nas TAR-dehs]", english: "Good afternoon", partOfSpeech: "phrase", exampleSentenceSpain: "Buenas tardes, encantado de verte", exampleSentenceLatam: "Buenas tardes, ¿cómo estás?" },
      { word: "Good evening/night", spainVariant: "Buenas noches", latamVariant: "Buenas noches", phoneticSpain: "[BWEH-nas NOH-ches]", phoneticLatam: "[BWEH-nas NOH-ches]", english: "Good evening/night", partOfSpeech: "phrase", exampleSentenceSpain: "Buenas noches, que duermas bien", exampleSentenceLatam: "Buenas noches, descansa" },
      { word: "Goodbye", spainVariant: "Adiós", latamVariant: "Adiós", phoneticSpain: "[ah-dee-OHS]", phoneticLatam: "[ah-dee-OHS]", english: "Goodbye", partOfSpeech: "interjection", exampleSentenceSpain: "¡Adiós! Hasta luego.", exampleSentenceLatam: "¡Adiós! Nos vemos." },
      { word: "See you later", spainVariant: "Hasta luego", latamVariant: "Hasta luego", phoneticSpain: "[AHS-tah loo-EH-go]", phoneticLatam: "[AHS-tah loo-EH-go]", english: "See you later", partOfSpeech: "phrase", exampleSentenceSpain: "Hasta luego, amigo.", exampleSentenceLatam: "Hasta luego, hermano." },
      { word: "See you tomorrow", spainVariant: "Hasta mañana", latamVariant: "Hasta mañana", phoneticSpain: "[AHS-tah mahn-YAH-nah]", phoneticLatam: "[AHS-tah mahn-YAH-nah]", english: "See you tomorrow", partOfSpeech: "phrase", exampleSentenceSpain: "Hasta mañana, descansa bien.", exampleSentenceLatam: "Hasta mañana, te veo." },
      { word: "How are you?", spainVariant: "¿Cómo estás?", latamVariant: "¿Cómo estás?", phoneticSpain: "[KOH-mo es-TAHS]", phoneticLatam: "[KOH-mo es-TAHS]", english: "How are you?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cómo estás hoy?", exampleSentenceLatam: "¿Cómo estás, qué onda?" },
      { word: "I'm fine", spainVariant: "Estoy bien", latamVariant: "Estoy bien", phoneticSpain: "[es-TOY bee-EHN]", phoneticLatam: "[es-TOY bee-EHN]", english: "I'm fine", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy bien, gracias por preguntar.", exampleSentenceLatam: "Estoy bien, ¿y tú?" },
      { word: "How's it going?", spainVariant: "¿Qué tal?", latamVariant: "¿Qué onda?", phoneticSpain: "[keh TAHL]", phoneticLatam: "[keh OHN-dah]", english: "How's it going?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué tal? Hace buen día.", exampleSentenceLatam: "¿Qué onda, hermano?" },
      { word: "Not bad", spainVariant: "Bien, bien", latamVariant: "Bien, bien", phoneticSpain: "[bee-EHN, bee-EHN]", phoneticLatam: "[bee-EHN, bee-EHN]", english: "Not bad", partOfSpeech: "phrase", exampleSentenceSpain: "Bien, bien, sin quejas.", exampleSentenceLatam: "Bien, bien, todo tranquilo." },
      { word: "Nice to meet you", spainVariant: "Encantado/a de conocerte", latamVariant: "Encantado/a de conocerte", phoneticSpain: "[en-kahn-TAH-do deh ko-no-SER-teh]", phoneticLatam: "[en-kahn-TAH-do deh ko-no-SER-teh]", english: "Nice to meet you", partOfSpeech: "phrase", exampleSentenceSpain: "Encantado de conocerte.", exampleSentenceLatam: "Encantado de verte." },
      { word: "The pleasure is mine", spainVariant: "El gusto es mío", latamVariant: "El gusto es mío", phoneticSpain: "[el GUS-to es MEE-oh]", phoneticLatam: "[el GUS-to es MEE-oh]", english: "The pleasure is mine", partOfSpeech: "phrase", exampleSentenceSpain: "El gusto es mío, igualmente.", exampleSentenceLatam: "El gusto es mío, de verdad." },
      { word: "Take care", spainVariant: "Cuídate", latamVariant: "Cuídate", phoneticSpain: "[koo-EE-dah-teh]", phoneticLatam: "[koo-EE-dah-teh]", english: "Take care", partOfSpeech: "phrase", exampleSentenceSpain: "¡Cuídate! Nos vemos pronto.", exampleSentenceLatam: "¡Cuídate! Que estés bien." },
      { word: "Good night", spainVariant: "Que duermas bien", latamVariant: "Que descanses", phoneticSpain: "[keh DWEHR-mas bee-EHN]", phoneticLatam: "[keh des-KAHN-ses]", english: "Good night", partOfSpeech: "phrase", exampleSentenceSpain: "Que duermas bien, hermano.", exampleSentenceLatam: "Que descanses, amigo." },
    ],
  },
  "a1-02-introductions": {
    title: "Introductions",
    description: "Introduce yourself and get to know someone—names, where you're from, and conversation starters",
    vocabulary: [
      { word: "What's your name?", spainVariant: "¿Cómo te llamas?", latamVariant: "¿Cómo te llamas?", phoneticSpain: "[KOH-mo teh YAH-mas]", phoneticLatam: "[KOH-mo teh YAH-mas]", english: "What's your name?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cómo te llamas tú?", exampleSentenceLatam: "¿Cómo te llamas?" },
      { word: "My name is...", spainVariant: "Me llamo...", latamVariant: "Me llamo...", phoneticSpain: "[meh YAH-mo]", phoneticLatam: "[meh YAH-mo]", english: "My name is...", partOfSpeech: "phrase", exampleSentenceSpain: "Me llamo Carlos.", exampleSentenceLatam: "Me llamo Diego." },
      { word: "Where are you from?", spainVariant: "¿De dónde eres?", latamVariant: "¿De dónde eres?", phoneticSpain: "[deh DOHN-deh EH-res]", phoneticLatam: "[deh DOHN-deh EH-res]", english: "Where are you from?", partOfSpeech: "phrase", exampleSentenceSpain: "¿De dónde eres tú?", exampleSentenceLatam: "¿De dónde eres?" },
      { word: "I'm from...", spainVariant: "Soy de...", latamVariant: "Soy de...", phoneticSpain: "[soy deh]", phoneticLatam: "[soy deh]", english: "I'm from...", partOfSpeech: "phrase", exampleSentenceSpain: "Soy de Madrid.", exampleSentenceLatam: "Soy de México." },
      { word: "Spain", spainVariant: "España", latamVariant: "España", phoneticSpain: "[es-PAHN-yah]", phoneticLatam: "[es-PAHN-yah]", english: "Spain", partOfSpeech: "noun", exampleSentenceSpain: "Soy de España.", exampleSentenceLatam: "He visitado España." },
      { word: "Mexico", spainVariant: "México", latamVariant: "México", phoneticSpain: "[MEH-hee-ko]", phoneticLatam: "[MEH-hee-ko]", english: "Mexico", partOfSpeech: "noun", exampleSentenceSpain: "He viajado a México.", exampleSentenceLatam: "Soy de México." },
      { word: "What do you do?", spainVariant: "¿A qué te dedicas?", latamVariant: "¿En qué trabajas?", phoneticSpain: "[ah keh teh deh-DEE-kas]", phoneticLatam: "[en keh trah-BAH-has]", english: "What do you do?", partOfSpeech: "phrase", exampleSentenceSpain: "¿A qué te dedicas profesionalmente?", exampleSentenceLatam: "¿En qué trabajas?" },
      { word: "I'm a...", spainVariant: "Soy...", latamVariant: "Soy...", phoneticSpain: "[soy]", phoneticLatam: "[soy]", english: "I'm a...", partOfSpeech: "phrase", exampleSentenceSpain: "Soy ingeniero.", exampleSentenceLatam: "Soy profesor." },
      { word: "Student", spainVariant: "Estudiante", latamVariant: "Estudiante", phoneticSpain: "[es-too-dee-AHN-teh]", phoneticLatam: "[es-too-dee-AHN-teh]", english: "Student", partOfSpeech: "noun", exampleSentenceSpain: "Soy estudiante de universidad.", exampleSentenceLatam: "Soy estudiante de bachillerato." },
      { word: "Teacher", spainVariant: "Profesor/a", latamVariant: "Profesor/a", phoneticSpain: "[pro-feh-SOR]", phoneticLatam: "[pro-feh-SOR]", english: "Teacher", partOfSpeech: "noun", exampleSentenceSpain: "Soy profesor de español.", exampleSentenceLatam: "Trabajo como profesor." },
      { word: "Doctor", spainVariant: "Médico/a", latamVariant: "Doctor/a", phoneticSpain: "[MEH-dee-ko]", phoneticLatam: "[dok-TOR]", english: "Doctor", partOfSpeech: "noun", exampleSentenceSpain: "Soy médico en el hospital.", exampleSentenceLatam: "Trabajo como doctor." },
      { word: "Engineer", spainVariant: "Ingeniero/a", latamVariant: "Ingeniero/a", phoneticSpain: "[in-heh-nee-EH-ro]", phoneticLatam: "[in-heh-nee-EH-ro]", english: "Engineer", partOfSpeech: "noun", exampleSentenceSpain: "Soy ingeniero de sistemas.", exampleSentenceLatam: "Trabajo como ingeniero." },
      { word: "How old are you?", spainVariant: "¿Cuántos años tienes?", latamVariant: "¿Cuántos años tienes?", phoneticSpain: "[KWAN-tos AHN-yos tee-EH-nes]", phoneticLatam: "[KWAN-tos AHN-yos tee-EH-nes]", english: "How old are you?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cuántos años tienes tú?", exampleSentenceLatam: "¿Cuántos años tienes?" },
      { word: "I'm ... years old", spainVariant: "Tengo ... años", latamVariant: "Tengo ... años", phoneticSpain: "[TEN-go AHN-yos]", phoneticLatam: "[TEN-go AHN-yos]", english: "I'm ... years old", partOfSpeech: "phrase", exampleSentenceSpain: "Tengo 25 años.", exampleSentenceLatam: "Tengo 30 años." },
      { word: "Nice to meet you", spainVariant: "Encantado/a", latamVariant: "Encantado/a", phoneticSpain: "[en-kahn-TAH-do]", phoneticLatam: "[en-kahn-TAH-do]", english: "Nice to meet you", partOfSpeech: "interjection", exampleSentenceSpain: "Encantado de conocerte.", exampleSentenceLatam: "Encantada de verte." },
      { word: "The pleasure is mine", spainVariant: "Igualmente", latamVariant: "Igualmente", phoneticSpain: "[ee-gwal-MEN-teh]", phoneticLatam: "[ee-gwal-MEN-teh]", english: "Likewise", partOfSpeech: "adverb", exampleSentenceSpain: "Igualmente, un placer.", exampleSentenceLatam: "Igualmente, amigo." },
      { word: "I live in...", spainVariant: "Vivo en...", latamVariant: "Vivo en...", phoneticSpain: "[VEE-vo en]", phoneticLatam: "[VEE-vo en]", english: "I live in...", partOfSpeech: "phrase", exampleSentenceSpain: "Vivo en Barcelona.", exampleSentenceLatam: "Vivo en la Ciudad de México." },
      { word: "City", spainVariant: "Ciudad", latamVariant: "Ciudad", phoneticSpain: "[see-oo-DAHD]", phoneticLatam: "[see-oo-DAHD]", english: "City", partOfSpeech: "noun", exampleSentenceSpain: "La ciudad de Madrid es muy grande.", exampleSentenceLatam: "Vivo en la ciudad." },
      { word: "Country", spainVariant: "País", latamVariant: "País", phoneticSpain: "[pah-EES]", phoneticLatam: "[pah-EES]", english: "Country", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es tu país?", exampleSentenceLatam: "¿Qué país es tu favorito?" },
    ],
  },
  "a1-03-politeness": {
    title: "Politeness & Classroom Basics",
    description: "Master polite expressions and classroom phrases you'll use every day",
    vocabulary: [
      { word: "Please", spainVariant: "Por favor", latamVariant: "Por favor", phoneticSpain: "[por fah-VOR]", phoneticLatam: "[por fah-VOR]", english: "Please", partOfSpeech: "phrase", exampleSentenceSpain: "Un café, por favor.", exampleSentenceLatam: "Agua, por favor." },
      { word: "Thank you", spainVariant: "Gracias", latamVariant: "Gracias", phoneticSpain: "[GRAH-see-ahs]", phoneticLatam: "[GRAH-see-ahs]", english: "Thank you", partOfSpeech: "interjection", exampleSentenceSpain: "Gracias por todo.", exampleSentenceLatam: "Gracias, muy amable." },
      { word: "You're welcome", spainVariant: "De nada", latamVariant: "De nada", phoneticSpain: "[deh NAH-dah]", phoneticLatam: "[deh NAH-dah]", english: "You're welcome", partOfSpeech: "phrase", exampleSentenceSpain: "De nada, fue un placer.", exampleSentenceLatam: "De nada, para eso estamos." },
      { word: "Excuse me", spainVariant: "Disculpa", latamVariant: "Disculpa", phoneticSpain: "[dis-KOOL-pah]", phoneticLatam: "[dis-KOOL-pah]", english: "Excuse me", partOfSpeech: "interjection", exampleSentenceSpain: "Disculpa, ¿podrías ayudarme?", exampleSentenceLatam: "Disculpa, ¿dónde está el baño?" },
      { word: "Sorry", spainVariant: "Lo siento", latamVariant: "Lo siento", phoneticSpain: "[lo see-EHN-to]", phoneticLatam: "[lo see-EHN-to]", english: "Sorry", partOfSpeech: "phrase", exampleSentenceSpain: "Lo siento, fue mi culpa.", exampleSentenceLatam: "Lo siento, no quise ofenderte." },
      { word: "I don't understand", spainVariant: "No entiendo", latamVariant: "No entiendo", phoneticSpain: "[no en-tee-EHN-do]", phoneticLatam: "[no en-tee-EHN-do]", english: "I don't understand", partOfSpeech: "phrase", exampleSentenceSpain: "No entiendo, ¿puedes repetir?", exampleSentenceLatam: "No entiendo, explica de nuevo." },
      { word: "Can you repeat?", spainVariant: "¿Puedes repetir?", latamVariant: "¿Puedes repetir?", phoneticSpain: "[PWEH-des reh-peh-TEER]", phoneticLatam: "[PWEH-des reh-peh-TEER]", english: "Can you repeat?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Puedes repetir más lentamente?", exampleSentenceLatam: "¿Puedes repetir, por favor?" },
      { word: "More slowly", spainVariant: "Más lentamente", latamVariant: "Más lentamente", phoneticSpain: "[mahs len-tah-MEN-teh]", phoneticLatam: "[mahs len-tah-MEN-teh]", english: "More slowly", partOfSpeech: "adverb", exampleSentenceSpain: "Habla más lentamente, por favor.", exampleSentenceLatam: "Más lentamente, por favor." },
      { word: "Help me", spainVariant: "Ayúdame", latamVariant: "Ayúdame", phoneticSpain: "[ah-YOO-dah-meh]", phoneticLatam: "[ah-YOO-dah-meh]", english: "Help me", partOfSpeech: "verb", exampleSentenceSpain: "¡Ayúdame con esto!", exampleSentenceLatam: "¿Me ayudas, por favor?" },
      { word: "Do you speak English?", spainVariant: "¿Hablas inglés?", latamVariant: "¿Hablas inglés?", phoneticSpain: "[AH-blas in-GLÉS]", phoneticLatam: "[AH-blas in-GLÉS]", english: "Do you speak English?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Hablas inglés?", exampleSentenceLatam: "¿Hablas inglés?" },
      { word: "I speak Spanish", spainVariant: "Hablo español", latamVariant: "Hablo español", phoneticSpain: "[AH-blo es-pahn-YOL]", phoneticLatam: "[AH-blo es-pahn-YOL]", english: "I speak Spanish", partOfSpeech: "phrase", exampleSentenceSpain: "Hablo español muy bien.", exampleSentenceLatam: "Hablo español e inglés." },
      { word: "What is this called?", spainVariant: "¿Cómo se llama esto?", latamVariant: "¿Cómo se llama esto?", phoneticSpain: "[KOH-mo seh YAH-mah ES-to]", phoneticLatam: "[KOH-mo seh YAH-mah ES-to]", english: "What is this called?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cómo se llama esto en español?", exampleSentenceLatam: "¿Qué se llama esto?" },
      { word: "Sorry, I don't know", spainVariant: "Perdona, no lo sé", latamVariant: "Perdón, no lo sé", phoneticSpain: "[per-DOH-nah, no lo seh]", phoneticLatam: "[per-DOHN, no lo seh]", english: "Sorry, I don't know", partOfSpeech: "phrase", exampleSentenceSpain: "Perdona, no lo sé.", exampleSentenceLatam: "Perdón, no tengo idea." },
      { word: "Thank you very much", spainVariant: "Muchas gracias", latamVariant: "Muchas gracias", phoneticSpain: "[MOO-chas GRAH-see-ahs]", phoneticLatam: "[MOO-chas GRAH-see-ahs]", english: "Thank you very much", partOfSpeech: "phrase", exampleSentenceSpain: "Muchas gracias por tu ayuda.", exampleSentenceLatam: "Muchas gracias, eres muy amable." },
      { word: "You're very kind", spainVariant: "Eres muy amable", latamVariant: "Eres muy amable", phoneticSpain: "[EH-res moo-ee ah-MAH-bleh]", phoneticLatam: "[EH-res moo-ee ah-MAH-bleh]", english: "You're very kind", partOfSpeech: "phrase", exampleSentenceSpain: "Eres muy amable, gracias.", exampleSentenceLatam: "Eres muy amable conmigo." },
      { word: "No problem", spainVariant: "Sin problema", latamVariant: "Sin problema", phoneticSpain: "[seen pro-BLEH-mah]", phoneticLatam: "[seen pro-BLEH-mah]", english: "No problem", partOfSpeech: "phrase", exampleSentenceSpain: "Sin problema, lo haré.", exampleSentenceLatam: "Sin problema, cuenta conmigo." },
    ],
  },
  "a1-04-numbers-time": {
    title: "Numbers, Time & Dates",
    description: "Tell the time, talk about days and dates, and share phone numbers with confidence",
    vocabulary: [
      { word: "Zero", spainVariant: "Cero", latamVariant: "Cero", phoneticSpain: "[SEH-ro]", phoneticLatam: "[SEH-ro]", english: "Zero", partOfSpeech: "noun", exampleSentenceSpain: "Cero es el inicio.", exampleSentenceLatam: "Empieza en cero." },
      { word: "One", spainVariant: "Uno", latamVariant: "Uno", phoneticSpain: "[OO-no]", phoneticLatam: "[OO-no]", english: "One", partOfSpeech: "noun", exampleSentenceSpain: "Tengo uno.", exampleSentenceLatam: "Solo uno, por favor." },
      { word: "Two", spainVariant: "Dos", latamVariant: "Dos", phoneticSpain: "[dos]", phoneticLatam: "[dos]", english: "Two", partOfSpeech: "noun", exampleSentenceSpain: "Son dos.", exampleSentenceLatam: "Dos es mi número favorito." },
      { word: "Three", spainVariant: "Tres", latamVariant: "Tres", phoneticSpain: "[tres]", phoneticLatam: "[tres]", english: "Three", partOfSpeech: "noun", exampleSentenceSpain: "Tres veces al día.", exampleSentenceLatam: "Cuéntame tres historias." },
      { word: "Four", spainVariant: "Cuatro", latamVariant: "Cuatro", phoneticSpain: "[KWAR-tro]", phoneticLatam: "[KWAR-tro]", english: "Four", partOfSpeech: "noun", exampleSentenceSpain: "Cuatro años.", exampleSentenceLatam: "Somos cuatro amigos." },
      { word: "Five", spainVariant: "Cinco", latamVariant: "Cinco", phoneticSpain: "[SEEN-ko]", phoneticLatam: "[SEEN-ko]", english: "Five", partOfSpeech: "noun", exampleSentenceSpain: "Las cinco en punto.", exampleSentenceLatam: "Son las cinco de la tarde." },
      { word: "Time", spainVariant: "Hora", latamVariant: "Hora", phoneticSpain: "[OH-rah]", phoneticLatam: "[OH-rah]", english: "Time/Hour", partOfSpeech: "noun", exampleSentenceSpain: "¿Qué hora es?", exampleSentenceLatam: "¿Qué hora tienes?" },
      { word: "What time is it?", spainVariant: "¿Qué hora es?", latamVariant: "¿Qué hora es?", phoneticSpain: "[keh OH-rah es]", phoneticLatam: "[keh OH-rah es]", english: "What time is it?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué hora es ahora?", exampleSentenceLatam: "¿Qué hora es?" },
      { word: "It's...", spainVariant: "Son las...", latamVariant: "Son las...", phoneticSpain: "[son lahs]", phoneticLatam: "[son lahs]", english: "It's...", partOfSpeech: "phrase", exampleSentenceSpain: "Son las tres.", exampleSentenceLatam: "Son las dos y media." },
      { word: "In the morning", spainVariant: "Por la mañana", latamVariant: "Por la mañana", phoneticSpain: "[por lah mahn-YAH-nah]", phoneticLatam: "[por lah mahn-YAH-nah]", english: "In the morning", partOfSpeech: "phrase", exampleSentenceSpain: "Por la mañana voy al trabajo.", exampleSentenceLatam: "En la mañana tomo café." },
      { word: "In the afternoon", spainVariant: "Por la tarde", latamVariant: "Por la tarde", phoneticSpain: "[por lah TAR-deh]", phoneticLatam: "[por lah TAR-deh]", english: "In the afternoon", partOfSpeech: "phrase", exampleSentenceSpain: "Por la tarde juego al fútbol.", exampleSentenceLatam: "En la tarde voy a la escuela." },
      { word: "In the evening", spainVariant: "Por la noche", latamVariant: "Por la noche", phoneticSpain: "[por lah NOH-cheh]", phoneticLatam: "[por lah NOH-cheh]", english: "In the evening", partOfSpeech: "phrase", exampleSentenceSpain: "Por la noche cenamos.", exampleSentenceLatam: "En la noche vemos películas." },
      { word: "Monday", spainVariant: "Lunes", latamVariant: "Lunes", phoneticSpain: "[LOO-nes]", phoneticLatam: "[LOO-nes]", english: "Monday", partOfSpeech: "noun", exampleSentenceSpain: "El lunes tengo clase.", exampleSentenceLatam: "El lunes es día de trabajo." },
      { word: "Tuesday", spainVariant: "Martes", latamVariant: "Martes", phoneticSpain: "[MAR-tes]", phoneticLatam: "[MAR-tes]", english: "Tuesday", partOfSpeech: "noun", exampleSentenceSpain: "El martes descanso.", exampleSentenceLatam: "El martes vamos al cine." },
      { word: "Wednesday", spainVariant: "Miércoles", latamVariant: "Miércoles", phoneticSpain: "[mee-EHR-ko-les]", phoneticLatam: "[mee-EHR-ko-les]", english: "Wednesday", partOfSpeech: "noun", exampleSentenceSpain: "El miércoles es mi día libre.", exampleSentenceLatam: "Nos vemos el miércoles." },
      { word: "Thursday", spainVariant: "Jueves", latamVariant: "Jueves", phoneticSpain: "[hoo-EH-ves]", phoneticLatam: "[hoo-EH-ves]", english: "Thursday", partOfSpeech: "noun", exampleSentenceSpain: "El jueves salimos temprano.", exampleSentenceLatam: "El jueves hay fiesta." },
      { word: "Friday", spainVariant: "Viernes", latamVariant: "Viernes", phoneticSpain: "[vee-EHR-nes]", phoneticLatam: "[vee-EHR-nes]", english: "Friday", partOfSpeech: "noun", exampleSentenceSpain: "¡Viernes al fin!", exampleSentenceLatam: "El viernes es día de fiesta." },
      { word: "Saturday", spainVariant: "Sábado", latamVariant: "Sábado", phoneticSpain: "[SAH-bah-do]", phoneticLatam: "[SAH-bah-do]", english: "Saturday", partOfSpeech: "noun", exampleSentenceSpain: "El sábado duermo más.", exampleSentenceLatam: "El sábado voy de compras." },
      { word: "Sunday", spainVariant: "Domingo", latamVariant: "Domingo", phoneticSpain: "[do-MEEN-go]", phoneticLatam: "[do-MEEN-go]", english: "Sunday", partOfSpeech: "noun", exampleSentenceSpain: "El domingo voy a la iglesia.", exampleSentenceLatam: "El domingo descanso en casa." },
      { word: "Date", spainVariant: "Fecha", latamVariant: "Fecha", phoneticSpain: "[FEH-chah]", phoneticLatam: "[FEH-chah]", english: "Date", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es la fecha?", exampleSentenceLatam: "¿Qué fecha es hoy?" },
    ],
  },
  "a1-05-family": {
    title: "Family & People",
    description: "Introduce your family, describe people, and talk about relationships naturally",
    vocabulary: [
      { word: "Family", spainVariant: "Familia", latamVariant: "Familia", phoneticSpain: "[fah-MEE-lee-ah]", phoneticLatam: "[fah-MEE-lee-ah]", english: "Family", partOfSpeech: "noun", exampleSentenceSpain: "Mi familia es grande.", exampleSentenceLatam: "Mi familia vive en México." },
      { word: "Father", spainVariant: "Padre", latamVariant: "Padre", phoneticSpain: "[PAH-dreh]", phoneticLatam: "[PAH-dreh]", english: "Father", partOfSpeech: "noun", exampleSentenceSpain: "Mi padre es ingeniero.", exampleSentenceLatam: "Mi papá trabaja en una empresa." },
      { word: "Mother", spainVariant: "Madre", latamVariant: "Madre", phoneticSpain: "[MAH-dreh]", phoneticLatam: "[MAH-dreh]", english: "Mother", partOfSpeech: "noun", exampleSentenceSpain: "Mi madre es doctora.", exampleSentenceLatam: "Mi mamá es muy trabajadora." },
      { word: "Brother", spainVariant: "Hermano", latamVariant: "Hermano", phoneticSpain: "[er-MAH-no]", phoneticLatam: "[er-MAH-no]", english: "Brother", partOfSpeech: "noun", exampleSentenceSpain: "Mi hermano es mayor que yo.", exampleSentenceLatam: "Mi hermano estudia medicina." },
      { word: "Sister", spainVariant: "Hermana", latamVariant: "Hermana", phoneticSpain: "[er-MAH-nah]", phoneticLatam: "[er-MAH-nah]", english: "Sister", partOfSpeech: "noun", exampleSentenceSpain: "Mi hermana es menor.", exampleSentenceLatam: "Mi hermana vive en Guadalajara." },
      { word: "Grandfather", spainVariant: "Abuelo", latamVariant: "Abuelo", phoneticSpain: "[ah-boo-EH-lo]", phoneticLatam: "[ah-boo-EH-lo]", english: "Grandfather", partOfSpeech: "noun", exampleSentenceSpain: "Mi abuelo es muy mayor.", exampleSentenceLatam: "Mi abuelo cuenta historias." },
      { word: "Grandmother", spainVariant: "Abuela", latamVariant: "Abuela", phoneticSpain: "[ah-boo-EH-lah]", phoneticLatam: "[ah-boo-EH-lah]", english: "Grandmother", partOfSpeech: "noun", exampleSentenceSpain: "Mi abuela cocina muy bien.", exampleSentenceLatam: "Mi abuela es muy cariñosa." },
      { word: "Son", spainVariant: "Hijo", latamVariant: "Hijo", phoneticSpain: "[EE-ho]", phoneticLatam: "[EE-ho]", english: "Son", partOfSpeech: "noun", exampleSentenceSpain: "Tengo un hijo de cinco años.", exampleSentenceLatam: "Mi hijo va a la escuela." },
      { word: "Daughter", spainVariant: "Hija", latamVariant: "Hija", phoneticSpain: "[EE-hah]", phoneticLatam: "[EE-hah]", english: "Daughter", partOfSpeech: "noun", exampleSentenceSpain: "Mi hija es inteligente.", exampleSentenceLatam: "Mi hija juega fútbol." },
      { word: "Husband", spainVariant: "Marido", latamVariant: "Esposo", phoneticSpain: "[mah-REE-do]", phoneticLatam: "[es-POH-so]", english: "Husband", partOfSpeech: "noun", exampleSentenceSpain: "Mi marido es muy amable.", exampleSentenceLatam: "Mi esposo trabaja lejos." },
      { word: "Wife", spainVariant: "Esposa", latamVariant: "Esposa", phoneticSpain: "[es-POH-sah]", phoneticLatam: "[es-POH-sah]", english: "Wife", partOfSpeech: "noun", exampleSentenceSpain: "Mi esposa es abogada.", exampleSentenceLatam: "Mi esposa es doctora." },
      { word: "Friend", spainVariant: "Amigo/a", latamVariant: "Amigo/a", phoneticSpain: "[ah-MEE-go]", phoneticLatam: "[ah-MEE-go]", english: "Friend", partOfSpeech: "noun", exampleSentenceSpain: "Mi amigo es muy divertido.", exampleSentenceLatam: "Mi amiga vive cerca." },
      { word: "Cousin", spainVariant: "Primo/a", latamVariant: "Primo/a", phoneticSpain: "[PREE-mo]", phoneticLatam: "[PREE-mo]", english: "Cousin", partOfSpeech: "noun", exampleSentenceSpain: "Mi primo está de visita.", exampleSentenceLatam: "Mi prima es doctora." },
      { word: "Aunt", spainVariant: "Tía", latamVariant: "Tía", phoneticSpain: "[TEE-ah]", phoneticLatam: "[TEE-ah]", english: "Aunt", partOfSpeech: "noun", exampleSentenceSpain: "Mi tía vive en Valencia.", exampleSentenceLatam: "Mi tía es muy amable." },
      { word: "Uncle", spainVariant: "Tío", latamVariant: "Tío", phoneticSpain: "[TEE-o]", phoneticLatam: "[TEE-o]", english: "Uncle", partOfSpeech: "noun", exampleSentenceSpain: "Mi tío es profesor.", exampleSentenceLatam: "Mi tío trabaja en la ciudad." },
      { word: "Tall", spainVariant: "Alto/a", latamVariant: "Alto/a", phoneticSpain: "[AHL-to]", phoneticLatam: "[AHL-to]", english: "Tall", partOfSpeech: "adjective", exampleSentenceSpain: "Mi padre es alto.", exampleSentenceLatam: "Es un hombre alto." },
      { word: "Short", spainVariant: "Bajo/a", latamVariant: "Bajo/a", phoneticSpain: "[BAH-ho]", phoneticLatam: "[BAH-ho]", english: "Short", partOfSpeech: "adjective", exampleSentenceSpain: "Mi hermana es baja.", exampleSentenceLatam: "Es una mujer baja." },
      { word: "Young", spainVariant: "Joven", latamVariant: "Joven", phoneticSpain: "[HO-ven]", phoneticLatam: "[HO-ven]", english: "Young", partOfSpeech: "adjective", exampleSentenceSpain: "Es una persona joven.", exampleSentenceLatam: "Es un chico joven." },
      { word: "Old", spainVariant: "Mayor/Viejo", latamVariant: "Mayor/Viejo", phoneticSpain: "[mah-YOR]", phoneticLatam: "[mah-YOR]", english: "Old", partOfSpeech: "adjective", exampleSentenceSpain: "Mi abuelo es mayor.", exampleSentenceLatam: "Es un señor viejo." },
      { word: "Beautiful", spainVariant: "Hermosa/o", latamVariant: "Hermosa/o", phoneticSpain: "[er-MOH-sah]", phoneticLatam: "[er-MOH-sah]", english: "Beautiful", partOfSpeech: "adjective", exampleSentenceSpain: "Es una mujer hermosa.", exampleSentenceLatam: "¡Qué día tan hermoso!" },
    ],
  },
  "a1-06-food": {
    title: "Food, Restaurants & Cafés",
    description: "Order like a local, get a table, and customize your food with confidence",
    vocabulary: [
      { word: "Food", spainVariant: "Comida", latamVariant: "Comida", phoneticSpain: "[ko-MEE-dah]", phoneticLatam: "[ko-MEE-dah]", english: "Food", partOfSpeech: "noun", exampleSentenceSpain: "La comida española es deliciosa.", exampleSentenceLatam: "¿Qué comida te gusta?" },
      { word: "Bread", spainVariant: "Pan", latamVariant: "Pan", phoneticSpain: "[pahn]", phoneticLatam: "[pahn]", english: "Bread", partOfSpeech: "noun", exampleSentenceSpain: "Quiero un pan de maíz.", exampleSentenceLatam: "El pan está delicioso." },
      { word: "Cheese", spainVariant: "Queso", latamVariant: "Queso", phoneticSpain: "[KEH-so]", phoneticLatam: "[KEH-so]", english: "Cheese", partOfSpeech: "noun", exampleSentenceSpain: "El queso manchego es famoso.", exampleSentenceLatam: "Queso fresco, por favor." },
      { word: "Chicken", spainVariant: "Pollo", latamVariant: "Pollo", phoneticSpain: "[POH-yoh]", phoneticLatam: "[POH-yoh]", english: "Chicken", partOfSpeech: "noun", exampleSentenceSpain: "Quiero pollo a la parrilla.", exampleSentenceLatam: "Pollo con arroz, por favor." },
      { word: "Fish", spainVariant: "Pescado", latamVariant: "Pescado", phoneticSpain: "[pes-KAH-do]", phoneticLatam: "[pes-KAH-do]", english: "Fish", partOfSpeech: "noun", exampleSentenceSpain: "El pescado está fresco.", exampleSentenceLatam: "Pescado a la veracruzana." },
      { word: "Beef", spainVariant: "Carne de vaca", latamVariant: "Carne de res", phoneticSpain: "[KAR-neh deh VAH-kah]", phoneticLatam: "[KAR-neh deh res]", english: "Beef", partOfSpeech: "noun", exampleSentenceSpain: "Carne de vaca asada.", exampleSentenceLatam: "Carne de res a la parrilla." },
      { word: "Vegetable", spainVariant: "Verdura", latamVariant: "Verdura", phoneticSpain: "[ver-DOO-rah]", phoneticLatam: "[ver-DOO-rah]", english: "Vegetable", partOfSpeech: "noun", exampleSentenceSpain: "Ensalada con verduras frescas.", exampleSentenceLatam: "Verduras al vapor." },
      { word: "Rice", spainVariant: "Arroz", latamVariant: "Arroz", phoneticSpain: "[ah-RROS]", phoneticLatam: "[ah-RROS]", english: "Rice", partOfSpeech: "noun", exampleSentenceSpain: "Arroz a la valenciana.", exampleSentenceLatam: "Arroz blanco, por favor." },
      { word: "Pasta", spainVariant: "Pasta", latamVariant: "Pasta", phoneticSpain: "[PAS-tah]", phoneticLatam: "[PAS-tah]", english: "Pasta", partOfSpeech: "noun", exampleSentenceSpain: "Spaghetti a la carbonara.", exampleSentenceLatam: "Pasta italiana." },
      { word: "Soup", spainVariant: "Sopa", latamVariant: "Sopa", phoneticSpain: "[SOH-pah]", phoneticLatam: "[SOH-pah]", english: "Soup", partOfSpeech: "noun", exampleSentenceSpain: "Sopa de marisco.", exampleSentenceLatam: "Caldo de pollo." },
      { word: "Salad", spainVariant: "Ensalada", latamVariant: "Ensalada", phoneticSpain: "[en-sah-LAH-dah]", phoneticLatam: "[en-sah-LAH-dah]", english: "Salad", partOfSpeech: "noun", exampleSentenceSpain: "Ensalada César.", exampleSentenceLatam: "Ensalada mixta." },
      { word: "Fruit", spainVariant: "Fruta", latamVariant: "Fruta", phoneticSpain: "[FROO-tah]", phoneticLatam: "[FROO-tah]", english: "Fruit", partOfSpeech: "noun", exampleSentenceSpain: "Fruta fresca de temporada.", exampleSentenceLatam: "Frutas tropicales." },
      { word: "Water", spainVariant: "Agua", latamVariant: "Agua", phoneticSpain: "[AH-gwah]", phoneticLatam: "[AH-gwah]", english: "Water", partOfSpeech: "noun", exampleSentenceSpain: "Agua con gas, por favor.", exampleSentenceLatam: "Agua natural." },
      { word: "Coffee", spainVariant: "Café", latamVariant: "Café", phoneticSpain: "[kah-FEH]", phoneticLatam: "[kah-FEH]", english: "Coffee", partOfSpeech: "noun", exampleSentenceSpain: "Un café con leche.", exampleSentenceLatam: "Café negro, por favor." },
      { word: "Beer", spainVariant: "Cerveza", latamVariant: "Cerveza", phoneticSpain: "[ther-VEH-sah]", phoneticLatam: "[ser-VEH-sah]", english: "Beer", partOfSpeech: "noun", exampleSentenceSpain: "Una cerveza fría.", exampleSentenceLatam: "Una cervecita." },
      { word: "Wine", spainVariant: "Vino", latamVariant: "Vino", phoneticSpain: "[VEE-no]", phoneticLatam: "[VEE-no]", english: "Wine", partOfSpeech: "noun", exampleSentenceSpain: "Vino tinto de la Rioja.", exampleSentenceLatam: "Vino blanco." },
      { word: "Delicious", spainVariant: "Delicioso/a", latamVariant: "Delicioso/a", phoneticSpain: "[deh-lee-see-OH-so]", phoneticLatam: "[deh-lee-see-OH-so]", english: "Delicious", partOfSpeech: "adjective", exampleSentenceSpain: "¡Está delicioso!", exampleSentenceLatam: "¡Qué delicioso!" },
      { word: "Expensive", spainVariant: "Caro/a", latamVariant: "Caro/a", phoneticSpain: "[KAH-ro]", phoneticLatam: "[KAH-ro]", english: "Expensive", partOfSpeech: "adjective", exampleSentenceSpain: "Este restaurante es caro.", exampleSentenceLatam: "Es muy caro." },
      { word: "Cheap", spainVariant: "Barato/a", latamVariant: "Barato/a", phoneticSpain: "[bah-RAH-to]", phoneticLatam: "[bah-RAH-to]", english: "Cheap", partOfSpeech: "adjective", exampleSentenceSpain: "La comida de mercado es barata.", exampleSentenceLatam: "Es barato." },
      { word: "How much?", spainVariant: "¿Cuánto cuesta?", latamVariant: "¿Cuánto cuesta?", phoneticSpain: "[KWAN-to KWES-tah]", phoneticLatam: "[KWAN-to KWES-tah]", english: "How much?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cuánto cuesta este plato?", exampleSentenceLatam: "¿Cuánto cuesta la comida?" },
    ],
  },
  "a1-07-shopping": {
    title: "Shopping",
    description: "Ask prices, negotiate, and handle any store or market like a local",
    vocabulary: [
      { word: "Shop/Store", spainVariant: "Tienda", latamVariant: "Tienda", phoneticSpain: "[tee-EHN-dah]", phoneticLatam: "[tee-EHN-dah]", english: "Shop/Store", partOfSpeech: "noun", exampleSentenceSpain: "Voy a la tienda.", exampleSentenceLatam: "¿Dónde está la tienda?" },
      { word: "Market", spainVariant: "Mercado", latamVariant: "Mercado", phoneticSpain: "[mer-KAH-do]", phoneticLatam: "[mer-KAH-do]", english: "Market", partOfSpeech: "noun", exampleSentenceSpain: "El mercado está lleno.", exampleSentenceLatam: "Vamos al mercado." },
      { word: "Price", spainVariant: "Precio", latamVariant: "Precio", phoneticSpain: "[PREH-see-o]", phoneticLatam: "[PREH-see-o]", english: "Price", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es el precio?", exampleSentenceLatam: "¿Cuál es el precio?" },
      { word: "How much?", spainVariant: "¿Cuánto cuesta?", latamVariant: "¿Cuánto cuesta?", phoneticSpain: "[KWAN-to KWES-tah]", phoneticLatam: "[KWAN-to KWES-tah]", english: "How much?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cuánto cuesta esto?", exampleSentenceLatam: "¿Cuánto cuesta?" },
      { word: "Expensive", spainVariant: "Caro/a", latamVariant: "Caro/a", phoneticSpain: "[KAH-ro]", phoneticLatam: "[KAH-ro]", english: "Expensive", partOfSpeech: "adjective", exampleSentenceSpain: "Es muy caro.", exampleSentenceLatam: "Está caro." },
      { word: "Cheap", spainVariant: "Barato/a", latamVariant: "Barato/a", phoneticSpain: "[bah-RAH-to]", phoneticLatam: "[bah-RAH-to]", english: "Cheap", partOfSpeech: "adjective", exampleSentenceSpain: "Es barato.", exampleSentenceLatam: "Está barato." },
      { word: "Money", spainVariant: "Dinero", latamVariant: "Dinero", phoneticSpain: "[dee-NEH-ro]", phoneticLatam: "[dee-NEH-ro]", english: "Money", partOfSpeech: "noun", exampleSentenceSpain: "No tengo dinero.", exampleSentenceLatam: "¿Traes dinero?" },
      { word: "Payment", spainVariant: "Pago", latamVariant: "Pago", phoneticSpain: "[PAH-go]", phoneticLatam: "[PAH-go]", english: "Payment", partOfSpeech: "noun", exampleSentenceSpain: "El pago es en efectivo.", exampleSentenceLatam: "¿Acepta pago con tarjeta?" },
      { word: "Card", spainVariant: "Tarjeta", latamVariant: "Tarjeta", phoneticSpain: "[tar-HEH-tah]", phoneticLatam: "[tar-HEH-tah]", english: "Card", partOfSpeech: "noun", exampleSentenceSpain: "Pago con tarjeta.", exampleSentenceLatam: "¿Aceptas tarjeta?" },
      { word: "Cash", spainVariant: "Efectivo", latamVariant: "Efectivo", phoneticSpain: "[eh-fek-TEE-vo]", phoneticLatam: "[eh-fek-TEE-vo]", english: "Cash", partOfSpeech: "noun", exampleSentenceSpain: "Pago en efectivo.", exampleSentenceLatam: "Pago con efectivo." },
      { word: "Clothes", spainVariant: "Ropa", latamVariant: "Ropa", phoneticSpain: "[ROH-pah]", phoneticLatam: "[ROH-pah]", english: "Clothes", partOfSpeech: "noun", exampleSentenceSpain: "La ropa es bonita.", exampleSentenceLatam: "¿Qué ropa buscas?" },
      { word: "Shirt", spainVariant: "Camisa", latamVariant: "Camisa", phoneticSpain: "[kah-MEE-sah]", phoneticLatam: "[kah-MEE-sah]", english: "Shirt", partOfSpeech: "noun", exampleSentenceSpain: "Una camisa azul.", exampleSentenceLatam: "Una camisa roja." },
      { word: "Pants", spainVariant: "Pantalones", latamVariant: "Pantalones", phoneticSpain: "[pahn-tah-LOH-nes]", phoneticLatam: "[pahn-tah-LOH-nes]", english: "Pants", partOfSpeech: "noun", exampleSentenceSpain: "Pantalones vaqueros.", exampleSentenceLatam: "Pantalones negros." },
      { word: "Shoes", spainVariant: "Zapatos", latamVariant: "Zapatos", phoneticSpain: "[sah-PAH-tos]", phoneticLatam: "[sah-PAH-tos]", english: "Shoes", partOfSpeech: "noun", exampleSentenceSpain: "Zapatos de cuero.", exampleSentenceLatam: "Zapatos deportivos." },
      { word: "Size", spainVariant: "Talla", latamVariant: "Talla", phoneticSpain: "[TAH-yah]", phoneticLatam: "[TAH-yah]", english: "Size", partOfSpeech: "noun", exampleSentenceSpain: "¿Qué talla usas?", exampleSentenceLatam: "¿Cuál es tu talla?" },
      { word: "Color", spainVariant: "Color", latamVariant: "Color", phoneticSpain: "[ko-LOR]", phoneticLatam: "[ko-LOR]", english: "Color", partOfSpeech: "noun", exampleSentenceSpain: "¿Qué color prefieres?", exampleSentenceLatam: "¿En qué colores lo tienes?" },
      { word: "Change", spainVariant: "Cambio", latamVariant: "Cambio", phoneticSpain: "[KAHM-bee-o]", phoneticLatam: "[KAHM-bee-o]", english: "Change", partOfSpeech: "noun", exampleSentenceSpain: "Guardaré el cambio.", exampleSentenceLatam: "Quédate con el cambio." },
      { word: "Receipt", spainVariant: "Recibo", latamVariant: "Recibo", phoneticSpain: "[reh-SEE-bo]", phoneticLatam: "[reh-SEE-bo]", english: "Receipt", partOfSpeech: "noun", exampleSentenceSpain: "¿Me das un recibo?", exampleSentenceLatam: "¿Puedo tener un recibo?" },
      { word: "Discount", spainVariant: "Descuento", latamVariant: "Descuento", phoneticSpain: "[des-KWEN-to]", phoneticLatam: "[des-KWEN-to]", english: "Discount", partOfSpeech: "noun", exampleSentenceSpain: "¿Hay descuento?", exampleSentenceLatam: "¿Qué descuento tienes?" },
      { word: "Sale", spainVariant: "Rebaja/Oferta", latamVariant: "Oferta", phoneticSpain: "[reh-BAH-hah]", phoneticLatam: "[o-FER-tah]", english: "Sale", partOfSpeech: "noun", exampleSentenceSpain: "Hay rebajas en la tienda.", exampleSentenceLatam: "Oferta especial." },
    ],
  },
  "a1-08-transportation": {
    title: "Transportation & Directions",
    description: "Find your way, ask for directions, and get around with confidence",
    vocabulary: [
      { word: "Where?", spainVariant: "¿Dónde?", latamVariant: "¿Dónde?", phoneticSpain: "[DOHN-deh]", phoneticLatam: "[DOHN-deh]", english: "Where?", partOfSpeech: "adverb", exampleSentenceSpain: "¿Dónde está la estación?", exampleSentenceLatam: "¿Dónde está la terminal?" },
      { word: "Here", spainVariant: "Aquí", latamVariant: "Aquí", phoneticSpain: "[ah-KEE]", phoneticLatam: "[ah-KEE]", english: "Here", partOfSpeech: "adverb", exampleSentenceSpain: "Aquí está.", exampleSentenceLatam: "Es por aquí." },
      { word: "There", spainVariant: "Allí", latamVariant: "Allá", phoneticSpain: "[ah-YEE]", phoneticLatam: "[ah-YAH]", english: "There", partOfSpeech: "adverb", exampleSentenceSpain: "Está allí.", exampleSentenceLatam: "Está allá." },
      { word: "Car", spainVariant: "Coche", latamVariant: "Carro", phoneticSpain: "[KOH-cheh]", phoneticLatam: "[KAH-rro]", english: "Car", partOfSpeech: "noun", exampleSentenceSpain: "Voy en coche.", exampleSentenceLatam: "Viajo en carro." },
      { word: "Bus", spainVariant: "Autobús", latamVariant: "Autobús/Camión", phoneticSpain: "[ow-toh-BOOS]", phoneticLatam: "[ow-toh-BOOS / kah-mee-OHN]", english: "Bus", partOfSpeech: "noun", exampleSentenceSpain: "El autobús es barato.", exampleSentenceLatam: "Tomo el autobús." },
      { word: "Taxi", spainVariant: "Taxi", latamVariant: "Taxi", phoneticSpain: "[TAHK-see]", phoneticLatam: "[TAHK-see]", english: "Taxi", partOfSpeech: "noun", exampleSentenceSpain: "Llamé un taxi.", exampleSentenceLatam: "Voy en taxi." },
      { word: "Train", spainVariant: "Tren", latamVariant: "Tren", phoneticSpain: "[tren]", phoneticLatam: "[tren]", english: "Train", partOfSpeech: "noun", exampleSentenceSpain: "El tren es rápido.", exampleSentenceLatam: "Viajo en tren." },
      { word: "Metro/Subway", spainVariant: "Metro", latamVariant: "Metro/Subte", phoneticSpain: "[MEH-tro]", phoneticLatam: "[MEH-tro / SOOB-teh]", english: "Metro/Subway", partOfSpeech: "noun", exampleSentenceSpain: "Tomo el metro.", exampleSentenceLatam: "Viajo en metro." },
      { word: "Airplane", spainVariant: "Avión", latamVariant: "Avión", phoneticSpain: "[ah-vee-OHN]", phoneticLatam: "[ah-vee-OHN]", english: "Airplane", partOfSpeech: "noun", exampleSentenceSpain: "Vuelo en avión.", exampleSentenceLatam: "Voy en avión." },
      { word: "Road/Street", spainVariant: "Calle", latamVariant: "Calle", phoneticSpain: "[KAH-yeh]", phoneticLatam: "[KAH-yeh]", english: "Road/Street", partOfSpeech: "noun", exampleSentenceSpain: "La calle principal.", exampleSentenceLatam: "¿Qué calle es?" },
      { word: "Right", spainVariant: "Derecha", latamVariant: "Derecha", phoneticSpain: "[deh-REH-chah]", phoneticLatam: "[deh-REH-chah]", english: "Right", partOfSpeech: "noun", exampleSentenceSpain: "Gira a la derecha.", exampleSentenceLatam: "Es a la derecha." },
      { word: "Left", spainVariant: "Izquierda", latamVariant: "Izquierda", phoneticSpain: "[ees-kee-EHR-dah]", phoneticLatam: "[ees-kee-EHR-dah]", english: "Left", partOfSpeech: "noun", exampleSentenceSpain: "Gira a la izquierda.", exampleSentenceLatam: "Es a la izquierda." },
      { word: "Straight", spainVariant: "Recto/Derecho", latamVariant: "Derecho", phoneticSpain: "[REK-to]", phoneticLatam: "[deh-REH-cho]", english: "Straight", partOfSpeech: "adverb", exampleSentenceSpain: "Sigue recto.", exampleSentenceLatam: "Sigue derecho." },
      { word: "Near/Close", spainVariant: "Cerca", latamVariant: "Cerca", phoneticSpain: "[SER-kah]", phoneticLatam: "[SER-kah]", english: "Near/Close", partOfSpeech: "adverb", exampleSentenceSpain: "Está muy cerca.", exampleSentenceLatam: "Está cerca." },
      { word: "Far", spainVariant: "Lejos", latamVariant: "Lejos", phoneticSpain: "[LEH-hos]", phoneticLatam: "[LEH-hos]", english: "Far", partOfSpeech: "adverb", exampleSentenceSpain: "Está lejos.", exampleSentenceLatam: "Es lejos." },
      { word: "Distance", spainVariant: "Distancia", latamVariant: "Distancia", phoneticSpain: "[dis-TAHN-see-ah]", phoneticLatam: "[dis-TAHN-see-ah]", english: "Distance", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es la distancia?", exampleSentenceLatam: "¿Qué distancia hay?" },
      { word: "Station", spainVariant: "Estación", latamVariant: "Estación", phoneticSpain: "[es-tah-see-OHN]", phoneticLatam: "[es-tah-see-OHN]", english: "Station", partOfSpeech: "noun", exampleSentenceSpain: "La estación de tren.", exampleSentenceLatam: "Estación central." },
      { word: "Airport", spainVariant: "Aeropuerto", latamVariant: "Aeropuerto", phoneticSpain: "[ah-eh-ro-PWER-to]", phoneticLatam: "[ah-eh-ro-PWER-to]", english: "Airport", partOfSpeech: "noun", exampleSentenceSpain: "El aeropuerto está lejos.", exampleSentenceLatam: "¿Dónde es el aeropuerto?" },
      { word: "How do I get to...?", spainVariant: "¿Cómo llego a...?", latamVariant: "¿Cómo llego a...?", phoneticSpain: "[KOH-mo YEH-go ah]", phoneticLatam: "[KOH-mo YEH-go ah]", english: "How do I get to...?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cómo llego a la estación?", exampleSentenceLatam: "¿Cómo llego al hotel?" },
      { word: "Can you show me?", spainVariant: "¿Puedes mostrarme?", latamVariant: "¿Puedes mostrarme?", phoneticSpain: "[PWEH-des mos-TRAHR-meh]", phoneticLatam: "[PWEH-des mos-TRAHR-meh]", english: "Can you show me?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Puedes mostrarme el camino?", exampleSentenceLatam: "¿Me muestras dónde?" },
    ],
  },
  "a1-09-hotels": {
    title: "Hotels & Travel",
    description: "Check in, ask about your room, and handle your hotel stay with ease",
    vocabulary: [
      { word: "Hotel", spainVariant: "Hotel", latamVariant: "Hotel", phoneticSpain: "[o-TEL]", phoneticLatam: "[o-TEL]", english: "Hotel", partOfSpeech: "noun", exampleSentenceSpain: "El hotel es bonito.", exampleSentenceLatam: "¿Dónde está el hotel?" },
      { word: "Room", spainVariant: "Habitación", latamVariant: "Cuarto", phoneticSpain: "[ah-bee-tah-see-OHN]", phoneticLatam: "[KWAR-to]", english: "Room", partOfSpeech: "noun", exampleSentenceSpain: "La habitación es cómoda.", exampleSentenceLatam: "El cuarto tiene dos camas." },
      { word: "Bed", spainVariant: "Cama", latamVariant: "Cama", phoneticSpain: "[KAH-mah]", phoneticLatam: "[KAH-mah]", english: "Bed", partOfSpeech: "noun", exampleSentenceSpain: "La cama es muy cómoda.", exampleSentenceLatam: "La cama es grande." },
      { word: "Bathroom", spainVariant: "Cuarto de baño", latamVariant: "Baño", phoneticSpain: "[KWAR-to deh BAH-nyoh]", phoneticLatam: "[BAH-nyoh]", english: "Bathroom", partOfSpeech: "noun", exampleSentenceSpain: "El cuarto de baño es limpio.", exampleSentenceLatam: "¿Dónde está el baño?" },
      { word: "Shower", spainVariant: "Ducha", latamVariant: "Ducha", phoneticSpain: "[DOO-chah]", phoneticLatam: "[DOO-chah]", english: "Shower", partOfSpeech: "noun", exampleSentenceSpain: "La ducha es buena.", exampleSentenceLatam: "La ducha funciona bien." },
      { word: "Towel", spainVariant: "Toalla", latamVariant: "Toalla", phoneticSpain: "[to-AH-yah]", phoneticLatam: "[to-AH-yah]", english: "Towel", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde están las toallas?", exampleSentenceLatam: "Necesito una toalla." },
      { word: "Key", spainVariant: "Llave", latamVariant: "Llave", phoneticSpain: "[YAH-veh]", phoneticLatam: "[YAH-veh]", english: "Key", partOfSpeech: "noun", exampleSentenceSpain: "Aquí está la llave.", exampleSentenceLatam: "¿Dónde está mi llave?" },
      { word: "Reservation", spainVariant: "Reserva", latamVariant: "Reservación", phoneticSpain: "[reh-SER-vah]", phoneticLatam: "[reh-ser-vah-see-OHN]", english: "Reservation", partOfSpeech: "noun", exampleSentenceSpain: "Tengo una reserva.", exampleSentenceLatam: "¿Tienes mi reservación?" },
      { word: "Breakfast", spainVariant: "Desayuno", latamVariant: "Desayuno", phoneticSpain: "[deh-sah-YOO-no]", phoneticLatam: "[deh-sah-YOO-no]", english: "Breakfast", partOfSpeech: "noun", exampleSentenceSpain: "El desayuno es a las 7.", exampleSentenceLatam: "¿A qué hora es el desayuno?" },
      { word: "Lunch", spainVariant: "Comida", latamVariant: "Almuerzo", phoneticSpain: "[ko-MEE-dah]", phoneticLatam: "[ahl-moo-EHR-so]", english: "Lunch", partOfSpeech: "noun", exampleSentenceSpain: "La comida es a las 2.", exampleSentenceLatam: "El almuerzo es al mediodía." },
      { word: "Dinner", spainVariant: "Cena", latamVariant: "Cena", phoneticSpain: "[SEH-nah]", phoneticLatam: "[SEH-nah]", english: "Dinner", partOfSpeech: "noun", exampleSentenceSpain: "La cena es a las 9.", exampleSentenceLatam: "¿A qué hora es la cena?" },
      { word: "Wifi", spainVariant: "Wifi", latamVariant: "Wifi", phoneticSpain: "[WEE-fee]", phoneticLatam: "[WEE-fee]", english: "Wifi", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es la contraseña del wifi?", exampleSentenceLatam: "¿Dónde está la contraseña del wifi?" },
      { word: "Check in", spainVariant: "Registro", latamVariant: "Check-in", phoneticSpain: "[reh-HIS-tro]", phoneticLatam: "[chek-EEN]", english: "Check in", partOfSpeech: "noun", exampleSentenceSpain: "El registro es a las 3.", exampleSentenceLatam: "El check-in es a las 3." },
      { word: "Check out", spainVariant: "Salida", latamVariant: "Check-out", phoneticSpain: "[sah-LEE-dah]", phoneticLatam: "[chek-OWT]", english: "Check out", partOfSpeech: "noun", exampleSentenceSpain: "La salida es a las 11.", exampleSentenceLatam: "El check-out es a las 11." },
      { word: "Price", spainVariant: "Precio", latamVariant: "Precio", phoneticSpain: "[PREH-see-o]", phoneticLatam: "[PREH-see-o]", english: "Price", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es el precio?", exampleSentenceLatam: "¿Cuánto cuesta?" },
      { word: "View", spainVariant: "Vista", latamVariant: "Vista", phoneticSpain: "[VIS-tah]", phoneticLatam: "[VIS-tah]", english: "View", partOfSpeech: "noun", exampleSentenceSpain: "La habitación tiene buena vista.", exampleSentenceLatam: "La vista es hermosa." },
      { word: "Pool", spainVariant: "Piscina", latamVariant: "Alberca/Piscina", phoneticSpain: "[pis-SEE-nah]", phoneticLatam: "[ahl-BER-kah]", english: "Pool", partOfSpeech: "noun", exampleSentenceSpain: "La piscina es grande.", exampleSentenceLatam: "La alberca está caliente." },
      { word: "Gym", spainVariant: "Gimnasio", latamVariant: "Gimnasio", phoneticSpain: "[him-NAH-see-o]", phoneticLatam: "[him-NAH-see-o]", english: "Gym", partOfSpeech: "noun", exampleSentenceSpain: "¿Hay gimnasio?", exampleSentenceLatam: "¿Dónde está el gimnasio?" },
      { word: "Clean", spainVariant: "Limpio/a", latamVariant: "Limpio/a", phoneticSpain: "[LEEM-pee-o]", phoneticLatam: "[LEEM-pee-o]", english: "Clean", partOfSpeech: "adjective", exampleSentenceSpain: "La habitación está limpia.", exampleSentenceLatam: "El cuarto está limpio." },
      { word: "Comfortable", spainVariant: "Cómodo/a", latamVariant: "Cómodo/a", phoneticSpain: "[KOH-mo-do]", phoneticLatam: "[KOH-mo-do]", english: "Comfortable", partOfSpeech: "adjective", exampleSentenceSpain: "La cama es muy cómoda.", exampleSentenceLatam: "Es muy cómodo." },
    ],
  },
  "a1-10-survival": {
    title: "Everyday Survival",
    description: "Essential phrases for bathrooms, wifi, chargers, and real-life situations",
    vocabulary: [
      { word: "Bathroom", spainVariant: "Cuarto de baño", latamVariant: "Baño", phoneticSpain: "[KWAR-to deh BAH-nyoh]", phoneticLatam: "[BAH-nyoh]", english: "Bathroom", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está el cuarto de baño?", exampleSentenceLatam: "¿Dónde es el baño?" },
      { word: "Toilet", spainVariant: "Inodoro", latamVariant: "Baño/Escusado", phoneticSpain: "[ee-no-DOR-o]", phoneticLatam: "[BAH-nyoh / es-koo-SAH-do]", english: "Toilet", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está el inodoro?", exampleSentenceLatam: "¿Dónde está el baño?" },
      { word: "Soap", spainVariant: "Jabón", latamVariant: "Jabón", phoneticSpain: "[hah-BOHN]", phoneticLatam: "[hah-BOHN]", english: "Soap", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está el jabón?", exampleSentenceLatam: "Me falta jabón." },
      { word: "Water", spainVariant: "Agua", latamVariant: "Agua", phoneticSpain: "[AH-gwah]", phoneticLatam: "[AH-gwah]", english: "Water", partOfSpeech: "noun", exampleSentenceSpain: "Agua potable.", exampleSentenceLatam: "¿Es agua potable?" },
      { word: "Wifi", spainVariant: "Wifi", latamVariant: "Wifi", phoneticSpain: "[WEE-fee]", phoneticLatam: "[WEE-fee]", english: "Wifi", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es la contraseña del wifi?", exampleSentenceLatam: "¿Tienes wifi aquí?" },
      { word: "Internet", spainVariant: "Internet", latamVariant: "Internet", phoneticSpain: "[in-ter-NET]", phoneticLatam: "[in-ter-NET]", english: "Internet", partOfSpeech: "noun", exampleSentenceSpain: "¿Hay internet?", exampleSentenceLatam: "¿Funciona internet?" },
      { word: "Charger", spainVariant: "Cargador", latamVariant: "Cargador", phoneticSpain: "[kar-gah-DOR]", phoneticLatam: "[kar-gah-DOR]", english: "Charger", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde puedo cargar el teléfono?", exampleSentenceLatam: "Necesito un cargador." },
      { word: "Phone", spainVariant: "Teléfono", latamVariant: "Teléfono", phoneticSpain: "[teh-LEH-fo-no]", phoneticLatam: "[teh-LEH-fo-no]", english: "Phone", partOfSpeech: "noun", exampleSentenceSpain: "Mi teléfono está muerto.", exampleSentenceLatam: "¿Dónde está mi teléfono?" },
      { word: "Help!", spainVariant: "¡Ayuda!", latamVariant: "¡Ayuda!", phoneticSpain: "[ah-YOO-dah]", phoneticLatam: "[ah-YOO-dah]", english: "Help!", partOfSpeech: "interjection", exampleSentenceSpain: "¡Ayuda, por favor!", exampleSentenceLatam: "¡Ayudame!" },
      { word: "Emergency", spainVariant: "Emergencia", latamVariant: "Emergencia", phoneticSpain: "[eh-mer-HEN-see-ah]", phoneticLatam: "[eh-mer-HEN-see-ah]", english: "Emergency", partOfSpeech: "noun", exampleSentenceSpain: "¡Esto es una emergencia!", exampleSentenceLatam: "Llamaré a emergencias." },
      { word: "Sick", spainVariant: "Enfermo/a", latamVariant: "Enfermo/a", phoneticSpain: "[en-FER-mo]", phoneticLatam: "[en-FER-mo]", english: "Sick", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy enfermo.", exampleSentenceLatam: "Me siento mal." },
      { word: "Pain", spainVariant: "Dolor", latamVariant: "Dolor", phoneticSpain: "[do-LOR]", phoneticLatam: "[do-LOR]", english: "Pain", partOfSpeech: "noun", exampleSentenceSpain: "Tengo dolor de cabeza.", exampleSentenceLatam: "Me duele la cabeza." },
      { word: "Doctor", spainVariant: "Médico", latamVariant: "Doctor", phoneticSpain: "[MEH-dee-ko]", phoneticLatam: "[dok-TOR]", english: "Doctor", partOfSpeech: "noun", exampleSentenceSpain: "Necesito un médico.", exampleSentenceLatam: "Necesito ver a un doctor." },
      { word: "Hospital", spainVariant: "Hospital", latamVariant: "Hospital", phoneticSpain: "[os-pee-TAHL]", phoneticLatam: "[os-pee-TAHL]", english: "Hospital", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está el hospital?", exampleSentenceLatam: "¿Dónde es el hospital?" },
      { word: "Police", spainVariant: "Policía", latamVariant: "Policía", phoneticSpain: "[po-lee-SEE-ah]", phoneticLatam: "[po-lee-SEE-ah]", english: "Police", partOfSpeech: "noun", exampleSentenceSpain: "Necesito la policía.", exampleSentenceLatam: "¿Dónde está la policía?" },
      { word: "Fire", spainVariant: "Fuego", latamVariant: "Fuego", phoneticSpain: "[foo-EH-go]", phoneticLatam: "[foo-EH-go]", english: "Fire", partOfSpeech: "noun", exampleSentenceSpain: "¡Hay fuego!", exampleSentenceLatam: "¡Fuego, llamaré bomberos!" },
      { word: "Lost", spainVariant: "Perdido/a", latamVariant: "Perdido/a", phoneticSpain: "[per-DEE-do]", phoneticLatam: "[per-DEE-do]", english: "Lost", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy perdido.", exampleSentenceLatam: "Me perdí." },
      { word: "Passport", spainVariant: "Pasaporte", latamVariant: "Pasaporte", phoneticSpain: "[pah-sah-POR-teh]", phoneticLatam: "[pah-sah-POR-teh]", english: "Passport", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está mi pasaporte?", exampleSentenceLatam: "Perdí mi pasaporte." },
      { word: "Money", spainVariant: "Dinero", latamVariant: "Dinero", phoneticSpain: "[dee-NEH-ro]", phoneticLatam: "[dee-NEH-ro]", english: "Money", partOfSpeech: "noun", exampleSentenceSpain: "Me robaron el dinero.", exampleSentenceLatam: "No tengo dinero." },
      { word: "Can I help?", spainVariant: "¿Puedo ayudarte?", latamVariant: "¿Puedo ayudarte?", phoneticSpain: "[PWEH-do ah-yoo-DAR-teh]", phoneticLatam: "[PWEH-do ah-yoo-DAR-teh]", english: "Can I help?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Puedo ayudarte?", exampleSentenceLatam: "¿Cómo puedo ayudarte?" },
    ],
  },
};

function buildA1Lesson(slug: string): LessonData {
  const lessonDef = A1_LESSONS[slug as keyof typeof A1_LESSONS];
  if (!lessonDef) {
    throw new Error(`A1 lesson ${slug} not found`);
  }

  const difficultyMap: Record<string, "BEGINNER" | "ELEMENTARY" | "INTERMEDIATE" | "UPPER_INTERMEDIATE" | "ADVANCED" | "MASTERY"> = {
    A1: "BEGINNER",
  };

  const slughyphen = slug.split("-");
  const order = parseInt(slughyphen[2]) || 1;

  // Generate grammar section
  const grammarSection: GrammarItem[] = [
    {
      title: "Vosotros vs Ustedes",
      spainContent: `In Spain, "vosotros/vosotras" is used to address a group of friends informally. Example: "¿Vosotros estáis bien?" (Are you guys doing well?)`,
      latamContent: `In Latin America, "ustedes" serves for both formal and informal groups. Example: "¿Ustedes están bien?" (Are you guys doing well?)`,
      note: "This is the most fundamental structural difference between Spain and Latin American Spanish.",
    },
    {
      title: `${lessonDef.title} Structures`,
      spainContent: `Key grammatical patterns for this lesson in Peninsular Spanish, including verb conjugations and sentence construction typical of Spain.`,
      latamContent: `Key grammatical patterns for this lesson in Mexican/Latin American Spanish, reflecting natural speech patterns and regional preferences.`,
      note: "Pay close attention to how each region naturally constructs sentences.",
    },
  ];

  // Generate dialogues (3 Spain, 3 Mexico)
  const dialogues: DialogueScenario[] = [];

  // Spain dialogues
  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-spain-${i + 1}`,
      title: `${lessonDef.title} - Scene ${i + 1} (Spain)`,
      region: "SPAIN",
      setting: `Madrid/Barcelona setting for ${lessonDef.title}`,
      lines: [
        { speaker: "Ana", text: lessonDef.vocabulary[i]?.exampleSentenceSpain || `Hola, ¿cómo estás? (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid/Barcelona setting for ${lessonDef.title}` },
        { speaker: "Carlos", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceSpain || `¡Muy bien! ¿Y vosotros qué tal? (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid/Barcelona setting for ${lessonDef.title}` },
        { speaker: "Ana", text: `Excelente, gracias. (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid/Barcelona setting for ${lessonDef.title}` },
      ],
    });
  }

  // Mexico dialogues
  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-latam-${i + 1}`,
      title: `${lessonDef.title} - Scene ${i + 1} (Mexico)`,
      region: "LATAM",
      setting: `Mexico City/Guadalajara setting for ${lessonDef.title}`,
      lines: [
        { speaker: "María", text: lessonDef.vocabulary[i]?.exampleSentenceLatam || `¡Hola, qué onda! (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City/Guadalajara setting for ${lessonDef.title}` },
        { speaker: "Diego", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceLatam || `¡Muy bien, gracias! (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City/Guadalajara setting for ${lessonDef.title}` },
        { speaker: "María", text: `¡Qué bueno verlos! (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City/Guadalajara setting for ${lessonDef.title}` },
      ],
    });
  }

  // Generate quiz
  const quiz: QuizQuestion[] = [
    {
      questionId: "q1",
      type: "multiple-choice",
      questionText: `What is one regional difference between Spain and Latin America related to addressing a group?`,
      options: ["Spain uses 'ustedes', Latin America uses 'vosotros'", "Spain uses 'vosotros', Latin America uses 'ustedes'", "They use the same word", "There is no difference"],
      correctAnswer: "Spain uses 'vosotros', Latin America uses 'ustedes'",
      explanation: "In Spain, 'vosotros/vosotras' is used informally for groups. In Latin America, 'ustedes' is used for both formal and informal groups.",
    },
    {
      questionId: "q2",
      type: "multiple-choice",
      questionText: `How would you greet someone in the morning in Spanish?`,
      options: ["Buenas noches", "Buenos días", "¿Qué onda?", "Hasta luego"],
      correctAnswer: "Buenos días",
      explanation: "'Buenos días' means 'Good morning' and is the proper greeting for the morning in both Spain and Latin America.",
    },
    {
      questionId: "q3",
      type: "multiple-choice",
      questionText: `Which word means 'Thank you' in Spanish?`,
      options: ["Por favor", "Gracias", "De nada", "Disculpa"],
      correctAnswer: "Gracias",
      explanation: "'Gracias' is 'thank you'. 'De nada' means 'you're welcome', and 'por favor' means 'please'.",
    },
    {
      questionId: "q4",
      type: "multiple-choice",
      questionText: `Which is a typical casual Mexican expression?`,
      options: ["¿Qué tal?", "¿Qué onda?", "Hola", "Buenos días"],
      correctAnswer: "¿Qué onda?",
      explanation: "'¿Qué onda?' is a very common casual Mexican greeting meaning 'What's up?' or 'How's it going?'",
    },
    {
      questionId: "q5",
      type: "multiple-choice",
      questionText: `What does 'Adiós' mean?`,
      options: ["Hello", "Thank you", "Goodbye", "See you later"],
      correctAnswer: "Goodbye",
      explanation: "'Adiós' means 'Goodbye' and is used in both Spain and Latin America when leaving someone.",
    },
  ];

  // Generate flashcards from vocabulary
  const flashcards: FlashcardItem[] = lessonDef.vocabulary.map((v, idx) => ({
    id: `fc-${slug}-${idx + 1}`,
    frontSpain: v.spainVariant,
    frontLatam: v.latamVariant,
    backEnglish: v.english,
    variantDifferenceNote: v.spainVariant !== v.latamVariant ? `Spain uses "${v.spainVariant}", Mexico/Latin America uses "${v.latamVariant}"` : "Same in both regions",
    exampleSentenceSpain: v.exampleSentenceSpain || "",
    exampleSentenceLatam: v.exampleSentenceLatam || "",
    partOfSpeech: v.partOfSpeech,
  }));

  return {
    id: `lesson-${slug}`,
    slug,
    title: lessonDef.title,
    description: lessonDef.description,
    level: "A1",
    difficulty: "BEGINNER",
    order,
    imageUrl: null,
    durationMinutes: 20,
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
    content: `# ${lessonDef.title}\n\n${lessonDef.description}\n\nThis comprehensive A1 lesson covers essential vocabulary, grammar structures, regional dialects, and interactive practice. Work through the vocabulary table, study the grammar patterns, review the contextual dialogues, and practice with the interactive quiz.`,
  };
}

export function generateA1Lessons(): LessonData[] {
  const a1Slugs = Object.keys(A1_LESSONS);
  return a1Slugs.map((slug) => buildA1Lesson(slug));
}

export function generateAllLessons(): LessonData[] {
  // Return A1 + A2 lessons; B1, B2, C1, C2 will be added in subsequent batches
  const a1Lessons = generateA1Lessons();
  const a2Lessons = generateA2Lessons();
  const b1Lessons = generateB1Lessons();
  const b2Lessons = generateB2Lessons();
  return [...a1Lessons, ...a2Lessons, ...b1Lessons, ...b2Lessons];
}