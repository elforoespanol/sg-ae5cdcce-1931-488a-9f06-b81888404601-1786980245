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
      { word: "Free time", spainVariant: "Tiempo libre", latamVariant: "Tiempo libre", phoneticSpain: "[tee-EHM-po LEE-breh]", phoneticLatam: "[tee-EHM-po LEE-breh]", english: "Free time", partOfSpeech: "noun", exampleSentenceSpain: "En mi tiempo libre leo.", exampleSentenceLatam: "Uso mi tiempo libre para relajarme." },
      { word: "Go to sleep", spainVariant: "Ir a dormir", latamVariant: "Ir a dormir", phoneticSpain: "[eer ah dor-MEER]", phoneticLatam: "[eer ah dor-MEER]", english: "Go to sleep", partOfSpeech: "phrase", exampleSentenceSpain: "Voy a dormir ahora.", exampleSentenceLatam: "Me voy a dormir temprano." }
    ]
  },
  "a2-03-hobbies": {
    title: "Hobbies & Interests",
    description: "Talk about your favorite activities and what you love to do",
    vocabulary: [
      { word: "Like", spainVariant: "Gustar", latamVariant: "Gustar", phoneticSpain: "[goos-TAHR]", phoneticLatam: "[goos-TAHR]", english: "Like", partOfSpeech: "verb", exampleSentenceSpain: "Me gusta leer.", exampleSentenceLatam: "Me gusta la música." },
      { word: "Love", spainVariant: "Encantar", latamVariant: "Encantar", phoneticSpain: "[en-kahn-TAHR]", phoneticLatam: "[en-kahn-TAHR]", english: "Love", partOfSpeech: "verb", exampleSentenceSpain: "Me encanta viajar.", exampleSentenceLatam: "Me encanta cocinar." },
      { word: "Hate", spainVariant: "Odiar", latamVariant: "Odiar", phoneticSpain: "[o-dee-AHR]", phoneticLatam: "[o-dee-AHR]", english: "Hate", partOfSpeech: "verb", exampleSentenceSpain: "Odio limpiar.", exampleSentenceLatam: "Odio el tráfico." },
      { word: "Sports", spainVariant: "Deporte", latamVariant: "Deporte", phoneticSpain: "[deh-POR-teh]", phoneticLatam: "[deh-POR-teh]", english: "Sports", partOfSpeech: "noun", exampleSentenceSpain: "Me encanta el deporte.", exampleSentenceLatam: "Practico deporte." },
      { word: "Football", spainVariant: "Fútbol", latamVariant: "Fútbol", phoneticSpain: "[FOOT-bol]", phoneticLatam: "[FOOT-bol]", english: "Football/Soccer", partOfSpeech: "noun", exampleSentenceSpain: "Juego fútbol los domingos.", exampleSentenceLatam: "Me encanta el fútbol." },
      { word: "Tennis", spainVariant: "Tenis", latamVariant: "Tenis", phoneticSpain: "[TEH-nis]", phoneticLatam: "[TEH-nis]", english: "Tennis", partOfSpeech: "noun", exampleSentenceSpain: "Juego tenis en verano.", exampleSentenceLatam: "Jugamos tenis." },
      { word: "Swimming", spainVariant: "Natación", latamVariant: "Natación", phoneticSpain: "[nah-tah-see-OHN]", phoneticLatam: "[nah-tah-see-OHN]", english: "Swimming", partOfSpeech: "noun", exampleSentenceSpain: "Me encanta la natación.", exampleSentenceLatam: "Nado tres veces a la semana." },
      { word: "Music", spainVariant: "Música", latamVariant: "Música", phoneticSpain: "[MOO-see-kah]", phoneticLatam: "[MOO-see-kah]", english: "Music", partOfSpeech: "noun", exampleSentenceSpain: "Me gusta la música clásica.", exampleSentenceLatam: "Escucho música todas las noches." },
      { word: "Guitar", spainVariant: "Guitarra", latamVariant: "Guitarra", phoneticSpain: "[gee-TAH-rrah]", phoneticLatam: "[gee-TAH-rrah]", english: "Guitar", partOfSpeech: "noun", exampleSentenceSpain: "Toco la guitarra.", exampleSentenceLatam: "Quiero aprender guitarra." },
      { word: "Piano", spainVariant: "Piano", latamVariant: "Piano", phoneticSpain: "[pee-AH-no]", phoneticLatam: "[pee-AH-no]", english: "Piano", partOfSpeech: "noun", exampleSentenceSpain: "Ella toca piano.", exampleSentenceLatam: "Mi hermana toca piano." },
      { word: "Drawing", spainVariant: "Dibujo", latamVariant: "Dibujo", phoneticSpain: "[dee-BOO-ho]", phoneticLatam: "[dee-BOO-ho]", english: "Drawing", partOfSpeech: "noun", exampleSentenceSpain: "Me encanta dibujar.", exampleSentenceLatam: "Dibujo en mis ratos libres." },
      { word: "Painting", spainVariant: "Pintura", latamVariant: "Pintura", phoneticSpain: "[pin-TOO-rah]", phoneticLatam: "[pin-TOO-rah]", english: "Painting", partOfSpeech: "noun", exampleSentenceSpain: "Practico pintura al óleo.", exampleSentenceLatam: "Me gusta la pintura." },
      { word: "Photography", spainVariant: "Fotografía", latamVariant: "Fotografía", phoneticSpain: "[fo-to-grah-FEE-ah]", phoneticLatam: "[fo-to-grah-FEE-ah]", english: "Photography", partOfSpeech: "noun", exampleSentenceSpain: "La fotografía es mi pasión.", exampleSentenceLatam: "Hago fotografía." },
      { word: "Traveling", spainVariant: "Viajar", latamVariant: "Viajar", phoneticSpain: "[vee-ah-HAHR]", phoneticLatam: "[vee-ah-HAHR]", english: "Traveling", partOfSpeech: "verb", exampleSentenceSpain: "Me encanta viajar.",exampleSentenceLatam: "Viajo cada verano." },
      { word: "Reading", spainVariant: "Lectura", latamVariant: "Lectura", phoneticSpain: "[lek-TOO-rah]", phoneticLatam: "[lek-TOO-rah]", english: "Reading", partOfSpeech: "noun", exampleSentenceSpain: "La lectura es mi pasatiempo.",exampleSentenceLatam: "Me encanta leer." },
      { word: "Cooking", spainVariant: "Cocinar", latamVariant: "Cocinar", phoneticSpain: "[ko-see-NAHR]", phoneticLatam: "[ko-see-NAHR]", english: "Cooking", partOfSpeech: "verb", exampleSentenceSpain: "Me encanta cocinar.",exampleSentenceLatam: "Cocino los fines de semana." },
      { word: "Gaming", spainVariant: "Videojuegos", latamVariant: "Videojuegos", phoneticSpain: "[vee-deh-o-hoo-EH-gos]", phoneticLatam: "[vee-deh-o-hoo-EH-gos]", english: "Gaming", partOfSpeech: "noun", exampleSentenceSpain: "Juego videojuegos en la tarde.",exampleSentenceLatam: "Me gustan los videojuegos." },
      { word: "Favorite", spainVariant: "Favorito/a", latamVariant: "Favorito/a", phoneticSpain: "[fah-vor-EE-to]", phoneticLatam: "[fah-vor-EE-to]", english: "Favorite", partOfSpeech: "adjective", exampleSentenceSpain: "Mi libro favorito es...", exampleSentenceLatam: "Mi película favorita es..." },
      { word: "Hobby", spainVariant: "Pasatiempo", latamVariant: "Pasatiempo", phoneticSpain: "[pah-sah-tee-EHM-po]", phoneticLatam: "[pah-sah-tee-EHM-po]", english: "Hobby", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es tu pasatiempo?", exampleSentenceLatam: "Mi pasatiempo favorito es..." },
      { word: "Interested in", spainVariant: "Interesado en", latamVariant: "Interesado en", phoneticSpain: "[in-teh-reh-SAH-do en]", phoneticLatam: "[in-teh-reh-SAH-do en]", english: "Interested in", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy interesado en la astronomía.", exampleSentenceLatam: "Me interesa el cine." }
    ]
  },
  "a2-04-making-plans": {
    title: "Making Plans & Invitations",
    description: "Invite friends, make plans, and suggest activities confidently",
    vocabulary: [
      { word: "Want to", spainVariant: "¿Quieres", latamVariant: "¿Quieres", phoneticSpain: "[kee-EH-res]", phoneticLatam: "[kee-EH-res]", english: "Want to", partOfSpeech: "verb", exampleSentenceSpain: "¿Quieres ir al cine?", exampleSentenceLatam: "¿Quieres salir mañana?" },
      { word: "Would you like", spainVariant: "¿Te gustaría", latamVariant: "¿Te gustaría", phoneticSpain: "[teh goos-tah-REE-ah]", phoneticLatam: "[teh goos-tah-REE-ah]", english: "Would you like", partOfSpeech: "verb", exampleSentenceSpain: "¿Te gustaría tomar café?", exampleSentenceLatam: "¿Te gustaría venir?" },
      { word: "I'd love to", spainVariant: "Me encantaría", latamVariant: "Me encantaría", phoneticSpain: "[meh en-kahn-tah-REE-ah]", phoneticLatam: "[meh en-kahn-tah-REE-ah]", english: "I'd love to", partOfSpeech: "phrase", exampleSentenceSpain: "Me encantaría ir contigo.", exampleSentenceLatam: "Me encantaría, ¡gracias!" },
      { word: "That sounds great", spainVariant: "Suena fenomenal", latamVariant: "Suena perfecto", phoneticSpain: "[soo-EH-nah feh-no-meh-NAHL]", phoneticLatam: "[soo-EH-nah per-FEK-to]", english: "That sounds great", partOfSpeech: "phrase", exampleSentenceSpain: "Suena fenomenal, ¡vamos!", exampleSentenceLatam: "¡Suena perfecto!" },
      { word: "When", spainVariant: "¿Cuándo", latamVariant: "¿Cuándo", phoneticSpain: "[KWAN-do]", phoneticLatam: "[KWAN-do]", english: "When", partOfSpeech: "adverb", exampleSentenceSpain: "¿Cuándo quieres ir?", exampleSentenceLatam: "¿Cuándo es?" },
      { word: "This weekend", spainVariant: "Este fin de semana", latamVariant: "Este fin de semana", phoneticSpain: "[ES-teh fin deh seh-MAH-nah]", phoneticLatam: "[ES-teh fin deh seh-MAH-nah]", english: "This weekend", partOfSpeech: "phrase", exampleSentenceSpain: "¿Quieres este fin de semana?", exampleSentenceLatam: "¿Este fin de semana?" },
      { word: "Next week", spainVariant: "La próxima semana", latamVariant: "La próxima semana", phoneticSpain: "[lah PROHK-see-mah seh-MAH-nah]", phoneticLatam: "[lah PROHK-see-mah seh-MAH-nah]", english: "Next week", partOfSpeech: "phrase", exampleSentenceSpain: "La próxima semana está bien.", exampleSentenceLatam: "¿La próxima semana?" },
      { word: "How about", spainVariant: "¿Qué tal", latamVariant: "¿Qué tal", phoneticSpain: "[keh tahl]", phoneticLatam: "[keh tahl]", english: "How about", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué tal el sábado?", exampleSentenceLatam: "¿Qué tal a las 7?" },
      { word: "Let's meet at", spainVariant: "Nos vemos en", latamVariant: "Nos vemos en", phoneticSpain: "[nos VEH-mos en]", phoneticLatam: "[nos VEH-mos en]", english: "Let's meet at", partOfSpeech: "phrase", exampleSentenceSpain: "Nos vemos en el parque.", exampleSentenceLatam: "Nos vemos en la plaza." },
      { word: "I'm busy", spainVariant: "Estoy ocupado", latamVariant: "Estoy ocupado", phoneticSpain: "[es-TOY o-koo-PAH-do]", phoneticLatam: "[es-TOY o-koo-PAH-do]", english: "I'm busy", partOfSpeech: "phrase", exampleSentenceSpain: "Lo siento, estoy ocupado.", exampleSentenceLatam: "Estoy ocupado ese día." },
      { word: "I'm free", spainVariant: "Estoy libre", latamVariant: "Estoy libre", phoneticSpain: "[es-TOY LEE-breh]", phoneticLatam: "[es-TOY LEE-breh]", english: "I'm free", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy libre el viernes.", exampleSentenceLatam: "¡Sí, estoy libre!" },
      { word: "Let's go to", spainVariant: "Vamos a", latamVariant: "Vamos a", phoneticSpain: "[VAH-mos ah]", phoneticLatam: "[VAH-mos ah]", english: "Let's go to", partOfSpeech: "phrase", exampleSentenceSpain: "Vamos a la playa.", exampleSentenceLatam: "Vamos al restaurante." },
      { word: "What time", spainVariant: "¿A qué hora", latamVariant: "¿A qué hora", phoneticSpain: "[ah keh OH-rah]", phoneticLatam: "[ah keh OH-rah]", english: "What time", partOfSpeech: "phrase", exampleSentenceSpain: "¿A qué hora quedamos?", exampleSentenceLatam: "¿A qué hora nos vemos?" },
      { word: "I apologize", spainVariant: "Me disculpo", latamVariant: "Me disculpo", phoneticSpain: "[meh dis-KOOL-po]", phoneticLatam: "[meh dis-KOOL-po]", english: "I apologize", partOfSpeech: "phrase", exampleSentenceSpain: "Me disculpo, no puedo ir.", exampleSentenceLatam: "Me disculpo, tengo otro compromiso." },
      { word: "Rain check", spainVariant: "¿Lo dejamos para otro día", latamVariant: "¿Lo dejamos para otro día", phoneticSpain: "[lo deh-HAH-mos PAH-rah OH-tro DEE-ah]", phoneticLatam: "[lo deh-HAH-mos PAH-rah OH-tro DEE-ah]", english: "Rain check", partOfSpeech: "phrase", exampleSentenceSpain: "¿Lo dejamos para otro día?", exampleSentenceLatam: "¿Podemos reagendar?" },
      { word: "Fun activity", spainVariant: "Actividad divertida", latamVariant: "Actividad divertida", phoneticSpain: "[ak-tee-vee-DAHD dee-ver-TEE-dah]", phoneticLatam: "[ak-tee-vee-DAHD dee-ver-TEE-dah]", english: "Fun activity", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué actividad divertida sugieres?", exampleSentenceLatam: "¿Una actividad divertida?" },
      { word: "Dinner party", spainVariant: "Cena", latamVariant: "Cena", phoneticSpain: "[SEH-nah]", phoneticLatam: "[SEH-nah]", english: "Dinner party", partOfSpeech: "noun", exampleSentenceSpain: "Tengo una cena el viernes.", exampleSentenceLatam: "¿Vienes a una cena?" },
      { word: "Concert", spainVariant: "Concierto", latamVariant: "Concierto", phoneticSpain: "[kon-see-EHR-to]", phoneticLatam: "[kon-see-EHR-to]", english: "Concert", partOfSpeech: "noun", exampleSentenceSpain: "¿Quieres ir a un concierto?", exampleSentenceLatam: "Hay un concierto el sábado." },
      { word: "Movie", spainVariant: "Película", latamVariant: "Película", phoneticSpain: "[peh-LEE-koo-lah]", phoneticLatam: "[peh-LEE-koo-lah]", english: "Movie", partOfSpeech: "noun", exampleSentenceSpain: "¿Vamos a ver una película?", exampleSentenceLatam: "¿Qué película quieres ver?" },
      { word: "Party", spainVariant: "Fiesta", latamVariant: "Fiesta", phoneticSpain: "[fee-ES-tah]", phoneticLatam: "[fee-ES-tah]", english: "Party", partOfSpeech: "noun", exampleSentenceSpain: "Hay una fiesta mañana.",exampleSentenceLatam: "¿Quieres venir a una fiesta?" }
    ]
  },
  "a2-05-phone-calls": {
    title: "Phone Calls & Messaging",
    description: "Make and take calls, leave messages, and text naturally in Spanish",
    vocabulary: [
      { word: "Hello", spainVariant: "¿Hola", latamVariant: "¿Hola", phoneticSpain: "[OH-lah]", phoneticLatam: "[OH-lah]", english: "Hello", partOfSpeech: "interjection", exampleSentenceSpain: "¿Hola? ¿Quién habla?", exampleSentenceLatam: "¿Hola? ¿Cuál es tu nombre?" },
      { word: "Is there", spainVariant: "¿Está", latamVariant: "¿Está", phoneticSpain: "[es-TAH]", phoneticLatam: "[es-TAH]", english: "Is there", partOfSpeech: "verb", exampleSentenceSpain: "¿Está María?", exampleSentenceLatam: "¿Está tu hermano?" },
      { word: "Speaking", spainVariant: "Aquí habla", latamVariant: "Habla él ella", phoneticSpain: "[ah-KEE AH-blah]", phoneticLatam: "[AH-blah]", english: "Speaking", partOfSpeech: "phrase", exampleSentenceSpain: "Aquí habla Carlos.", exampleSentenceLatam: "Habla ella." },
      { word: "Hold on", spainVariant: "Un momento", latamVariant: "Un momento", phoneticSpain: "[oon mo-MEN-to]", phoneticLatam: "[oon mo-MEN-to]", english: "Hold on", partOfSpeech: "phrase", exampleSentenceSpain: "Un momento, por favor.", exampleSentenceLatam: "Espera un momento." },
      { word: "Call me back", spainVariant: "¿Puedes llamarme después", latamVariant: "¿Me llamas después", phoneticSpain: "[PWEH-des yah-MAR-meh des-PWES]", phoneticLatam: "[meh YAH-mas des-PWES]", english: "Call me back", partOfSpeech: "phrase", exampleSentenceSpain: "¿Puedes llamarme después?", exampleSentenceLatam: "¿Me llamas luego?" },
      { word: "Message", spainVariant: "Mensaje", latamVariant: "Mensaje", phoneticSpain: "[men-SAH-heh]", phoneticLatam: "[men-SAH-heh]", english: "Message", partOfSpeech: "noun", exampleSentenceSpain: "Te envié un mensaje.",exampleSentenceLatam: "¿Recibiste mi mensaje?" },
      { word: "Text message", spainVariant: "SMS", latamVariant: "SMS Texto", phoneticSpain: "[es-eh-meh]", phoneticLatam: "[teks-TO]", english: "Text message", partOfSpeech: "noun", exampleSentenceSpain: "Te mando un SMS.", exampleSentenceLatam: "Te envío un texto." },
      { word: "WhatsApp", spainVariant: "WhatsApp", latamVariant: "WhatsApp", phoneticSpain: "[whats-app]", phoneticLatam: "[whats-app]", english: "WhatsApp", partOfSpeech: "noun", exampleSentenceSpain: "¿Me mandas un WhatsApp?", exampleSentenceLatam: "Te mando WhatsApp." },
      { word: "Email", spainVariant: "Correo", latamVariant: "Email", phoneticSpain: "[ko-RREH-o]", phoneticLatam: "[eh-MAIL]", english: "Email", partOfSpeech: "noun", exampleSentenceSpain: "Te envío un correo.", exampleSentenceLatam: "¿Cuál es tu email?" },
      { word: "Phone number", spainVariant: "Número de teléfono", latamVariant: "Número de teléfono", phoneticSpain: "[NOO-meh-ro deh teh-LEH-fo-no]", phoneticLatam: "[NOO-meh-ro deh teh-LEH-fo-no]", english: "Phone number", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cuál es tu número de teléfono?", exampleSentenceLatam: "¿Cuál es tu número?" },
      { word: "Call", spainVariant: "Llamada", latamVariant: "Llamada", phoneticSpain: "[yah-MAH-dah]", phoneticLatam: "[yah-MAH-dah]", english: "Call", partOfSpeech: "noun", exampleSentenceSpain: "Recibí tu llamada.", exampleSentenceLatam: "Te llamaré." },
      { word: "Hang up", spainVariant: "Colgar", latamVariant: "Colgar", phoneticSpain: "[kol-GAHR]", phoneticLatam: "[kol-GAHR]", english: "Hang up", partOfSpeech: "verb", exampleSentenceSpain: "Vamos a colgar.", exampleSentenceLatam: "Tengo que colgar." },
      { word: "I'll call you", spainVariant: "Te llamo", latamVariant: "Te llamo", phoneticSpain: "[teh YAH-mo]", phoneticLatam: "[teh YAH-mo]", english: "I'll call you", partOfSpeech: "phrase", exampleSentenceSpain: "Te llamo luego.", exampleSentenceLatam: "Te llamo mañana." },
      { word: "Leave a message", spainVariant: "¿Puedo dejar un mensaje", latamVariant: "¿Puedo dejar un mensaje", phoneticSpain: "[PWEH-do deh-HAHR oon men-SAH-heh]", phoneticLatam: "[PWEH-do deh-HAHR oon men-SAH-heh]", english: "Leave a message", partOfSpeech: "phrase", exampleSentenceSpain: "¿Puedo dejar un mensaje?", exampleSentenceLatam: "¿Quieres que deje un mensaje?" },
      { word: "Bad connection", spainVariant: "Mala conexión", latamVariant: "Mala conexión", phoneticSpain: "[MAH-lah ko-nek-see-OHN]", phoneticLatam: "[MAH-lah ko-nek-see-OHN]", english: "Bad connection", partOfSpeech: "phrase", exampleSentenceSpain: "Tengo mala conexión.", exampleSentenceLatam: "La conexión está mala." },
      { word: "Speak louder", spainVariant: "¿Puedes hablar más fuerte", latamVariant: "¿Puedes hablar más fuerte", phoneticSpain: "[PWEH-des ah-BLAHR mahs FWER-teh]", phoneticLatam: "[PWEH-des ah-BLAHR mahs FWER-teh]", english: "Speak louder", partOfSpeech: "phrase", exampleSentenceSpain: "¿Puedes hablar más fuerte?", exampleSentenceLatam: "No te escucho, ¿más fuerte?" },
      { word: "I didn't hear", spainVariant: "No te escuché", latamVariant: "No te escuché", phoneticSpain: "[no teh es-koo-CHEH]", phoneticLatam: "[no teh es-koo-CHEH]", english: "I didn't hear", partOfSpeech: "phrase", exampleSentenceSpain: "No te escuché, repite.", exampleSentenceLatam: "¿Qué dijiste? No escuché." },
      { word: "Phone died", spainVariant: "Se me descargó el teléfono", latamVariant: "Se me acabó la batería", phoneticSpain: "[seh meh des-kar-GOH el teh-LEH-fo-no]", phoneticLatam: "[seh meh ah-kah-BOH lah bah-teh-REE-ah]", english: "Phone died", partOfSpeech: "phrase", exampleSentenceSpain: "Se me descargó el teléfono.", exampleSentenceLatam: "Se me acabó la batería." },
      { word: "Try again", spainVariant: "Vuelvo a intentar", latamVariant: "Vuelvo a llamar", phoneticSpain: "[VWEL-vo ah in-ten-TAHR]", phoneticLatam: "[VWEL-vo ah yah-MAHR]", english: "Try again", partOfSpeech: "phrase", exampleSentenceSpain: "Vuelvo a intentar.", exampleSentenceLatam: "Vuelvo a llamar." },
      { word: "Thanks for calling", spainVariant: "Gracias por llamar", latamVariant: "Gracias por llamar", phoneticSpain: "[GRAH-see-ahs por yah-MAHR]", phoneticLatam: "[GRAH-see-ahs por yah-MAHR]", english: "Thanks for calling", partOfSpeech: "phrase", exampleSentenceSpain: "Gracias por llamar.",exampleSentenceLatam: "Gracias por comunicarte." }
    ]
  },
  "a2-06-weather": {
    title: "Weather & Seasons",
    description: "Talk about the weather, seasons, and describe natural phenomena",
    vocabulary: [
      { word: "Weather", spainVariant: "Clima", latamVariant: "Clima", phoneticSpain: "[KLEE-mah]", phoneticLatam: "[KLEE-mah]", english: "Weather", partOfSpeech: "noun", exampleSentenceSpain: "¿Qué tal el clima hoy?", exampleSentenceLatam: "El clima es caluroso." },
      { word: "Rain", spainVariant: "Lluvia", latamVariant: "Lluvia", phoneticSpain: "[YOO-vee-ah]", phoneticLatam: "[YOO-vee-ah]", english: "Rain", partOfSpeech: "noun", exampleSentenceSpain: "Hay mucha lluvia.", exampleSentenceLatam: "Espero que no llueva." },
      { word: "Snow", spainVariant: "Nieve", latamVariant: "Nieve", phoneticSpain: "[nee-EH-veh]", phoneticLatam: "[nee-EH-veh]", english: "Snow", partOfSpeech: "noun", exampleSentenceSpain: "¡Qué nieve tan hermosa!", exampleSentenceLatam: "Nieva en las montañas." },
      { word: "Sun", spainVariant: "Sol", latamVariant: "Sol", phoneticSpain: "[sol]", phoneticLatam: "[sol]", english: "Sun", partOfSpeech: "noun", exampleSentenceSpain: "El sol está muy fuerte.", exampleSentenceLatam: "¡Qué sol!" },
      { word: "Wind", spainVariant: "Viento", latamVariant: "Viento", phoneticSpain: "[vee-EHN-to]", phoneticLatam: "[vee-EHN-to]", english: "Wind", partOfSpeech: "noun", exampleSentenceSpain: "Hay mucho viento.", exampleSentenceLatam: "El viento es muy fuerte." },
      { word: "Cloud", spainVariant: "Nube", latamVariant: "Nube", phoneticSpain: "[NOO-beh]", phoneticLatam: "[NOO-beh]", english: "Cloud", partOfSpeech: "noun", exampleSentenceSpain: "Hay muchas nubes.",exampleSentenceLatam: "Sin una nube en el cielo." },
      { word: "Storm", spainVariant: "Tormenta", latamVariant: "Tormenta", phoneticSpain: "[tor-MEN-tah]", phoneticLatam: "[tor-MEN-tah]", english: "Storm", partOfSpeech: "noun", exampleSentenceSpain: "Hay una tormenta.", exampleSentenceLatam: "Se acerca la tormenta." },
      { word: "Lightning", spainVariant: "Rayo", latamVariant: "Rayo", phoneticSpain: "[RAH-yo]", phoneticLatam: "[RAH-yo]", english: "Lightning", partOfSpeech: "noun", exampleSentenceSpain: "¡Qué rayo tan brillante!", exampleSentenceLatam: "Hay rayos en la tormenta." },
      { word: "Thunder", spainVariant: "Trueno", latamVariant: "Trueno", phoneticSpain: "[troo-EH-no]", phoneticLatam: "[troo-EH-no]", english: "Thunder", partOfSpeech: "noun", exampleSentenceSpain: "Escucho un trueno.", exampleSentenceLatam: "El trueno fue muy fuerte." },
      { word: "Temperature", spainVariant: "Temperatura", latamVariant: "Temperatura", phoneticSpain: "[tem-peh-rah-TOO-rah]", phoneticLatam: "[tem-peh-rah-TOO-rah]", english: "Temperature", partOfSpeech: "noun", exampleSentenceSpain: "¿Cuál es la temperatura?", exampleSentenceLatam: "La temperatura está a 30 grados." },
      { word: "Hot", spainVariant: "Caluroso", latamVariant: "Caliente", phoneticSpain: "[kah-loo-ROH-so]", phoneticLatam: "[kah-lee-EHN-teh]", english: "Hot", partOfSpeech: "adjective", exampleSentenceSpain: "¡Qué día tan caluroso!", exampleSentenceLatam: "Hace mucho calor." },
      { word: "Cold", spainVariant: "Frío", latamVariant: "Frío", phoneticSpain: "[FREE-o]", phoneticLatam: "[FREE-o]", english: "Cold", partOfSpeech: "adjective", exampleSentenceSpain: "Hace mucho frío.", exampleSentenceLatam: "Está muy frío." },
      { word: "Spring", spainVariant: "Primavera", latamVariant: "Primavera", phoneticSpain: "[pree-mah-VEH-rah]", phoneticLatam: "[pree-mah-VEH-rah]", english: "Spring", partOfSpeech: "noun", exampleSentenceSpain: "En primavera hace buen clima.", exampleSentenceLatam: "La primavera es hermosa." },
      { word: "Summer", spainVariant: "Verano", latamVariant: "Verano", phoneticSpain: "[veh-RAH-no]", phoneticLatam: "[veh-RAH-no]", english: "Summer", partOfSpeech: "noun", exampleSentenceSpain: "En verano hace calor.", exampleSentenceLatam: "Me encanta el verano." },
      { word: "Autumn", spainVariant: "Otoño", latamVariant: "Otoño", phoneticSpain: "[o-TOH-nyoh]", phoneticLatam: "[o-TOH-nyoh]", english: "Autumn", partOfSpeech: "noun", exampleSentenceSpain: "En otoño hace templado.", exampleSentenceLatam: "El otoño es fresco." },
      { word: "Winter", spainVariant: "Invierno", latamVariant: "Invierno", phoneticSpain: "[in-vee-EHR-no]", phoneticLatam: "[in-vee-EHR-no]", english: "Winter", partOfSpeech: "noun", exampleSentenceSpain: "En invierno hace frío.", exampleSentenceLatam: "No me gusta el invierno." },
      { word: "Forecast", spainVariant: "Pronóstico", latamVariant: "Pronóstico", phoneticSpain: "[pro-NOS-tee-ko]", phoneticLatam: "[pro-NOS-tee-ko]", english: "Forecast", partOfSpeech: "noun", exampleSentenceSpain: "Según el pronóstico lloverá.", exampleSentenceLatam: "El pronóstico dice que hará calor." },
      { word: "Humidity", spainVariant: "Humedad", latamVariant: "Humedad", phoneticSpain: "[oo-meh-DAHD]", phoneticLatam: "[oo-meh-DAHD]", english: "Humidity", partOfSpeech: "noun", exampleSentenceSpain: "Hay mucha humedad.", exampleSentenceLatam: "La humedad es insoportable." },
      { word: "Breeze", spainVariant: "Brisa", latamVariant: "Brisa", phoneticSpain: "[BREE-sah]", phoneticLatam: "[BREE-sah]", english: "Breeze", partOfSpeech: "noun", exampleSentenceSpain: "Una brisa agradable.", exampleSentenceLatam: "Hay una brisa fresca." },
      { word: "Rainbow", spainVariant: "Arcoíris", latamVariant: "Arcoíris", phoneticSpain: "[ar-ko-EE-ris]", phoneticLatam: "[ar-ko-EE-ris]", english: "Rainbow", partOfSpeech: "noun", exampleSentenceSpain: "¡Mira el arcoíris!", exampleSentenceLatam: "¡Qué arcoíris tan bonito!" }
    ]
  },
  "a2-07-work-school": {
    title: "Work & School Life",
    description: "Discuss your job, studies, classes, and professional life naturally",
    vocabulary: [
      { word: "Work", spainVariant: "Trabajo", latamVariant: "Trabajo", phoneticSpain: "[trah-BAH-ho]", phoneticLatam: "[trah-BAH-ho]", english: "Work", partOfSpeech: "noun", exampleSentenceSpain: "¿Cómo te va en el trabajo?", exampleSentenceLatam: "Mi trabajo es interesante." },
      { word: "Job", spainVariant: "Empleo", latamVariant: "Empleo", phoneticSpain: "[em-PLEH-o]", phoneticLatam: "[em-PLEH-o]", english: "Job", partOfSpeech: "noun", exampleSentenceSpain: "Busco un nuevo empleo.", exampleSentenceLatam: "Tengo un buen empleo." },
      { word: "Boss", spainVariant: "Jefe", latamVariant: "Jefe", phoneticSpain: "[HEH-feh]", phoneticLatam: "[HEH-feh]", english: "Boss", partOfSpeech: "noun", exampleSentenceSpain: "Mi jefe es muy amable.",exampleSentenceLatam: "El jefe llegó temprano." },
      { word: "Colleague", spainVariant: "Colega", latamVariant: "Colega", phoneticSpain: "[ko-LEH-gah]", phoneticLatam: "[ko-LEH-gah]", english: "Colleague", partOfSpeech: "noun", exampleSentenceSpain: "Mi colega es de España.", exampleSentenceLatam: "Mis colegas son amables." },
      { word: "Office", spainVariant: "Oficina", latamVariant: "Oficina", phoneticSpain: "[o-fee-SEE-nah]", phoneticLatam: "[o-fee-SEE-nah]", english: "Office", partOfSpeech: "noun", exampleSentenceSpain: "Trabajo en una oficina.",exampleSentenceLatam: "La oficina está en el centro." },
      { word: "Meeting", spainVariant: "Reunión", latamVariant: "Reunión", phoneticSpain: "[reh-oo-nee-OHN]", phoneticLatam: "[reh-oo-nee-OHN]", english: "Meeting", partOfSpeech: "noun", exampleSentenceSpain: "Tengo una reunión a las 3.", exampleSentenceLatam: "La reunión fue larga." },
      { word: "Project", spainVariant: "Proyecto", latamVariant: "Proyecto", phoneticSpain: "[pro-YEK-to]", phoneticLatam: "[pro-YEK-to]", english: "Project", partOfSpeech: "noun", exampleSentenceSpain: "Trabajo en un proyecto importante.",exampleSentenceLatam: "El proyecto termina el viernes." },
      { word: "Deadline", spainVariant: "Plazo", latamVariant: "Plazo", phoneticSpain: "[PLAH-so]", phoneticLatam: "[PLAH-so]", english: "Deadline", partOfSpeech: "noun", exampleSentenceSpain: "El plazo es mañana.", exampleSentenceLatam: "¿Cuál es el plazo?" },
      { word: "Salary", spainVariant: "Sueldo", latamVariant: "Salario", phoneticSpain: "[SWEL-do]", phoneticLatam: "[sah-LAH-ree-o]", english: "Salary", partOfSpeech: "noun", exampleSentenceSpain: "Mi sueldo es justo.",exampleSentenceLatam: "El salario es bajo." },
      { word: "School", spainVariant: "Escuela", latamVariant: "Escuela", phoneticSpain: "[es-KWEH-lah]", phoneticLatam: "[es-KWEH-lah]", english: "School", partOfSpeech: "noun", exampleSentenceSpain: "Voy a la escuela.",exampleSentenceLatam: "La escuela está cerca." },
      { word: "University", spainVariant: "Universidad", latamVariant: "Universidad", phoneticSpain: "[oo-nee-ver-see-DAHD]", phoneticLatam: "[oo-nee-ver-see-DAHD]", english: "University", partOfSpeech: "noun", exampleSentenceSpain: "Estudio en la universidad.", exampleSentenceLatam: "¿Cuál universidad?" },
      { word: "Class", spainVariant: "Clase", latamVariant: "Clase", phoneticSpain: "[KLAH-seh]", phoneticLatam: "[KLAH-seh]", english: "Class", partOfSpeech: "noun", exampleSentenceSpain: "Tengo clase a las 9.", exampleSentenceLatam: "La clase es en la 305." },
      { word: "Teacher", spainVariant: "Profesor", latamVariant: "Profesor", phoneticSpain: "[pro-feh-SOR]", phoneticLatam: "[pro-feh-SOR]", english: "Teacher", partOfSpeech: "noun", exampleSentenceSpain: "Mi profesor es inteligente.",exampleSentenceLatam: "La profesora explica bien." },
      { word: "Student", spainVariant: "Estudiante", latamVariant: "Estudiante", phoneticSpain: "[es-too-dee-AHN-teh]", phoneticLatam: "[es-too-dee-AHN-teh]", english: "Student", partOfSpeech: "noun", exampleSentenceSpain: "Soy estudiante de ingeniería.", exampleSentenceLatam: "Los estudiantes estudian." },
      { word: "Exam", spainVariant: "Examen", latamVariant: "Examen", phoneticSpain: "[ek-SAH-men]", phoneticLatam: "[ek-SAH-men]", english: "Exam", partOfSpeech: "noun", exampleSentenceSpain: "El examen es mañana.",exampleSentenceLatam: "¿Pasaste el examen?" },
      { word: "Grade", spainVariant: "Calificación", latamVariant: "Calificación", phoneticSpain: "[kah-lee-fee-kah-see-OHN]", phoneticLatam: "[kah-lee-fee-kah-see-OHN]", english: "Grade", partOfSpeech: "noun", exampleSentenceSpain: "Mi calificación fue buena.", exampleSentenceLatam: "¿Qué calificación sacaste?" },
      { word: "Assignment", spainVariant: "Tarea", latamVariant: "Tarea", phoneticSpain: "[tah-REH-ah]", phoneticLatam: "[tah-REH-ah]", english: "Assignment", partOfSpeech: "noun", exampleSentenceSpain: "Tengo tarea para mañana.", exampleSentenceLatam: "La tarea es difícil." },
      { word: "Break", spainVariant: "Descanso", latamVariant: "Receso", phoneticSpain: "[des-KAHN-so]", phoneticLatam: "[reh-SEH-so]", english: "Break", partOfSpeech: "noun", exampleSentenceSpain: "El descanso es a las 11.", exampleSentenceLatam: "El receso es de 15 minutos." },
      { word: "Tired", spainVariant: "Cansado", latamVariant: "Cansado", phoneticSpain: "[kahn-SAH-do]", phoneticLatam: "[kahn-SAH-do]", english: "Tired", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy cansado del trabajo.",exampleSentenceLatam: "Estoy muy cansado." },
      { word: "Stressed", spainVariant: "Estresado", latamVariant: "Estresado", phoneticSpain: "[es-treh-SAH-do]", phoneticLatam: "[es-treh-SAH-do]", english: "Stressed", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy estresado con los exámenes.", exampleSentenceLatam: "Me siento estresado." }
    ]
  },
  "a2-08-emotions": {
    title: "Expressing Emotions & Feelings",
    description: "Describe your feelings and understand emotions deeply",
    vocabulary: [
      { word: "Happy", spainVariant: "Feliz", latamVariant: "Feliz", phoneticSpain: "[feh-LEES]", phoneticLatam: "[feh-LEES]", english: "Happy", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy muy feliz hoy.", exampleSentenceLatam: "¡Qué feliz estoy!" },
      { word: "Sad", spainVariant: "Triste", latamVariant: "Triste", phoneticSpain: "[TRIS-teh]", phoneticLatam: "[TRIS-teh]", english: "Sad", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy triste por eso.", exampleSentenceLatam: "Se ve triste." },
      { word: "Angry", spainVariant: "Enfadado", latamVariant: "Enojado", phoneticSpain: "[en-fah-DAH-do]", phoneticLatam: "[eh-no-HAH-do]", english: "Angry", partOfSpeech: "adjective", exampleSentenceSpain: "No estoy enfadado.", exampleSentenceLatam: "Está enojado conmigo." },
      { word: "Scared", spainVariant: "Asustado", latamVariant: "Asustado", phoneticSpain: "[ah-sus-TAH-do]", phoneticLatam: "[ah-sus-TAH-do]", english: "Scared", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy asustado.", exampleSentenceLatam: "Tiene miedo." },
      { word: "Excited", spainVariant: "Emocionado", latamVariant: "Emocionado", phoneticSpain: "[eh-mo-see-o-NAH-do]", phoneticLatam: "[eh-mo-see-o-NAH-do]", english: "Excited", partOfSpeech: "adjective", exampleSentenceSpain: "¡Estoy emocionado!", exampleSentenceLatam: "¡Qué emocionada estoy!" },
      { word: "Bored", spainVariant: "Aburrido", latamVariant: "Aburrido", phoneticSpain: "[ah-boo-RREE-do]", phoneticLatam: "[ah-boo-RREE-do]", english: "Bored", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy aburrido.", exampleSentenceLatam: "Me aburre." },
      { word: "Confused", spainVariant: "Confundido", latamVariant: "Confundido", phoneticSpain: "[kon-foon-DEE-do]", phoneticLatam: "[kon-foon-DEE-do]", english: "Confused", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy un poco confundido.", exampleSentenceLatam: "No entiendo, estoy confundida." },
      { word: "Surprised", spainVariant: "Sorprendido", latamVariant: "Sorprendido", phoneticSpain: "[sor-pren-DEE-do]", phoneticLatam: "[sor-pren-DEE-do]", english: "Surprised", partOfSpeech: "adjective", exampleSentenceSpain: "¡Qué sorprendido estoy!", exampleSentenceLatam: "Estoy sorprendida." },
      { word: "Proud", spainVariant: "Orgulloso", latamVariant: "Orgulloso", phoneticSpain: "[or-goo-YOH-so]", phoneticLatam: "[or-goo-YOH-so]", english: "Proud", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy orgulloso de ti.", exampleSentenceLatam: "Estoy orgullosa." },
      { word: "Disappointed", spainVariant: "Decepcionado", latamVariant: "Decepcionado", phoneticSpain: "[deh-sep-see-o-NAH-do]", phoneticLatam: "[deh-sep-see-o-NAH-do]", english: "Disappointed", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy decepcionado.",exampleSentenceLatam: "Qué decepción." },
      { word: "Worried", spainVariant: "Preocupado", latamVariant: "Preocupado", phoneticSpain: "[preh-o-koo-PAH-do]", phoneticLatam: "[preh-o-koo-PAH-do]", english: "Worried", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy preocupado.", exampleSentenceLatam: "No estés preocupada." },
      { word: "Nervous", spainVariant: "Nervioso", latamVariant: "Nervioso", phoneticSpain: "[ner-vee-OH-so]", phoneticLatam: "[ner-vee-OH-so]", english: "Nervous", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy un poco nervioso.", exampleSentenceLatam: "Está nerviosa." },
      { word: "Calm", spainVariant: "Tranquilo", latamVariant: "Tranquilo", phoneticSpain: "[trahn-KEE-lo]", phoneticLatam: "[trahn-KEE-lo]", english: "Calm", partOfSpeech: "adjective", exampleSentenceSpain: "Mantén la calma.", exampleSentenceLatam: "Estoy tranquilo." },
      { word: "Furious", spainVariant: "Furioso", latamVariant: "Furioso", phoneticSpain: "[foo-ree-OH-so]", phoneticLatam: "[foo-ree-OH-so]", english: "Furious", partOfSpeech: "adjective", exampleSentenceSpain: "Está furioso.", exampleSentenceLatam: "¡Estoy furioso!" },
      { word: "Guilty", spainVariant: "Culpable", latamVariant: "Culpable", phoneticSpain: "[kool-PAH-bleh]", phoneticLatam: "[kool-PAH-bleh]", english: "Guilty", partOfSpeech: "adjective", exampleSentenceSpain: "Me siento culpable.", exampleSentenceLatam: "No me siento culpable." },
      { word: "Grateful", spainVariant: "Agradecido", latamVariant: "Agradecido", phoneticSpain: "[ah-grah-deh-SEE-do]", phoneticLatam: "[ah-grah-deh-SEE-do]", english: "Grateful", partOfSpeech: "adjective", exampleSentenceSpain: "Estoy agradecido.", exampleSentenceLatam: "Te estoy agradecida." },
      { word: "Anxious", spainVariant: "Ansioso", latamVariant: "Ansioso", phoneticSpain: "[ahn-see-OH-so]", phoneticLatam: "[ahn-see-OH-so]", english: "Anxious", partOfSpeech: "adjective", exampleSentenceSpain: "Me siento ansiosa.", exampleSentenceLatam: "Está ansioso." },
      { word: "Hopeful", spainVariant: "Esperanzado", latamVariant: "Esperanzado", phoneticSpain: "[es-peh-rahn-ZAH-do]", phoneticLatam: "[es-peh-rahn-ZAH-do]", english: "Hopeful", partOfSpeech: "adjective", exampleSentenceSpain: "Me siento esperanzado.", exampleSentenceLatam: "Tengo esperanza." },
      { word: "Lonely", spainVariant: "Solo", latamVariant: "Solo", phoneticSpain: "[SOH-lo]", phoneticLatam: "[SOH-lo]", english: "Lonely", partOfSpeech: "adjective", exampleSentenceSpain: "Me siento solo.", exampleSentenceLatam: "A veces me siento sola." },
      { word: "Comfortable", spainVariant: "Cómodo", latamVariant: "Cómodo", phoneticSpain: "[KOH-mo-do]", phoneticLatam: "[KOH-mo-do]", english: "Comfortable", partOfSpeech: "adjective", exampleSentenceSpain: "Me siento cómodo aquí.", exampleSentenceLatam: "Estoy muy cómoda." }
    ]
  },
  "a2-09-food-restaurants": {
    title: "Food & Restaurant Conversations",
    description: "Order meals, discuss food preferences, and navigate restaurant situations",
    vocabulary: [
      { word: "Restaurant", spainVariant: "Restaurante", latamVariant: "Restaurante", phoneticSpain: "[res-tow-RAHN-teh]", phoneticLatam: "[res-tow-RAHN-teh]", english: "Restaurant", partOfSpeech: "noun", exampleSentenceSpain: "Vamos a un restaurante.", exampleSentenceLatam: "El restaurante está cerrado." },
      { word: "Table for two", spainVariant: "Una mesa para dos", latamVariant: "Una mesa para dos", phoneticSpain: "[OO-nah MEH-sah PAH-rah dos]", phoneticLatam: "[OO-nah MEH-sah PAH-rah dos]", english: "Table for two", partOfSpeech: "phrase", exampleSentenceSpain: "¿Una mesa para dos?", exampleSentenceLatam: "Una mesa para dos, por favor." },
      { word: "Menu", spainVariant: "Menú", latamVariant: "Menú", phoneticSpain: "[meh-NOO]", phoneticLatam: "[meh-NOO]", english: "Menu", partOfSpeech: "noun", exampleSentenceSpain: "¿Me das el menú?", exampleSentenceLatam: "¿Cuál es el menú del día?" },
      { word: "I'm ready to order", spainVariant: "Estoy listo para pedir", latamVariant: "Estoy listo para pedir", phoneticSpain: "[es-TOY LIS-to PAH-rah peh-DEER]", phoneticLatam: "[es-TOY LIS-to PAH-rah peh-DEER]", english: "I'm ready to order", partOfSpeech: "phrase", exampleSentenceSpain: "Estoy listo para pedir.", exampleSentenceLatam: "Ya estoy listo para pedir." },
      { word: "What do you recommend?", spainVariant: "¿Qué me recomiendas?", latamVariant: "¿Qué me recomiendas?", phoneticSpain: "[keh meh reh-ko-mee-EHN-das]", phoneticLatam: "[keh meh reh-ko-mee-EHN-das]", english: "What do you recommend?", partOfSpeech: "phrase", exampleSentenceSpain: "¿Qué me recomiendas?", exampleSentenceLatam: "¿Cuál es tu especialidad?" },
      { word: "Chicken", spainVariant: "Pollo", latamVariant: "Pollo", phoneticSpain: "[POH-yoh]", phoneticLatam: "[POH-yoh]", english: "Chicken", partOfSpeech: "noun", exampleSentenceSpain: "Quiero pollo a la parrilla.", exampleSentenceLatam: "Me encanta el pollo." },
      { word: "Fish", spainVariant: "Pescado", latamVariant: "Pescado", phoneticSpain: "[pes-KAH-do]", phoneticLatam: "[pes-KAH-do]", english: "Fish", partOfSpeech: "noun", exampleSentenceSpain: "El pescado está muy fresco.", exampleSentenceLatam: "¿Quieres pescado?" },
      { word: "Beef", spainVariant: "Ternera", latamVariant: "Res", phoneticSpain: "[ter-NEH-rah]", phoneticLatam: "[res]", english: "Beef", partOfSpeech: "noun", exampleSentenceSpain: "Prefiero ternera.", exampleSentenceLatam: "Un bistec de res." },
      { word: "Vegetarian", spainVariant: "Vegetariano", latamVariant: "Vegetariano", phoneticSpain: "[veh-heh-tah-ree-AH-no]", phoneticLatam: "[veh-heh-tah-ree-AH-no]", english: "Vegetarian", partOfSpeech: "adjective", exampleSentenceSpain: "Soy vegetariano.", exampleSentenceLatam: "¿Hay opciones vegetarianas?" },
      { word: "Salad", spainVariant: "Ensalada", latamVariant: "Ensalada", phoneticSpain: "[en-sah-LAH-dah]", phoneticLatam: "[en-sah-LAH-dah]", english: "Salad", partOfSpeech: "noun", exampleSentenceSpain: "Una ensalada verde, por favor.", exampleSentenceLatam: "La ensalada está deliciosa." },
      { word: "Soup", spainVariant: "Sopa", latamVariant: "Sopa", phoneticSpain: "[SOH-pah]", phoneticLatam: "[SOH-pah]", english: "Soup", partOfSpeech: "noun", exampleSentenceSpain: "La sopa está muy caliente.", exampleSentenceLatam: "¿Qué sopa hay?" },
      { word: "Pasta", spainVariant: "Pasta", latamVariant: "Pasta", phoneticSpain: "[PAS-tah]", phoneticLatam: "[PAS-tah]", english: "Pasta", partOfSpeech: "noun", exampleSentenceSpain: "La pasta es deliciosa.", exampleSentenceLatam: "Me encanta la pasta." },
      { word: "Rice", spainVariant: "Arroz", latamVariant: "Arroz", phoneticSpain: "[ah-RROZ]", phoneticLatam: "[ah-RROZ]", english: "Rice", partOfSpeech: "noun", exampleSentenceSpain: "Arroz con pollo.", exampleSentenceLatam: "El arroz está sabroso." },
      { word: "Spicy", spainVariant: "Picante", latamVariant: "Picante", phoneticSpain: "[pee-KAHN-teh]", phoneticLatam: "[pee-KAHN-teh]", english: "Spicy", partOfSpeech: "adjective", exampleSentenceSpain: "Es muy picante.", exampleSentenceLatam: "¡Demasiado picante!" },
      { word: "Delicious", spainVariant: "Delicioso", latamVariant: "Delicioso", phoneticSpain: "[deh-lee-see-OH-so]", phoneticLatam: "[deh-lee-see-OH-so]", english: "Delicious", partOfSpeech: "adjective", exampleSentenceSpain: "¡Está delicioso!", exampleSentenceLatam: "¡Qué delicia!" },
      { word: "Dessert", spainVariant: "Postre", latamVariant: "Postre", phoneticSpain: "[POS-treh]", phoneticLatam: "[POS-treh]", english: "Dessert", partOfSpeech: "noun", exampleSentenceSpain: "¿Quieres postre?", exampleSentenceLatam: "¿Cuál es el postre?" },
      { word: "Bill/Check", spainVariant: "Cuenta", latamVariant: "Cuenta", phoneticSpain: "[KWEN-tah]", phoneticLatam: "[KWEN-tah]", english: "Bill/Check", partOfSpeech: "noun", exampleSentenceSpain: "¿Me traes la cuenta?", exampleSentenceLatam: "La cuenta, por favor." },
      { word: "Tip", spainVariant: "Propina", latamVariant: "Propina", phoneticSpain: "[pro-PEE-nah]", phoneticLatam: "[pro-PEE-nah]", english: "Tip", partOfSpeech: "noun", exampleSentenceSpain: "Dejo una buena propina.", exampleSentenceLatam: "¿Incluye propina?" },
      { word: "Water", spainVariant: "Agua", latamVariant: "Agua", phoneticSpain: "[AH-gwah]", phoneticLatam: "[AH-gwah]", english: "Water", partOfSpeech: "noun", exampleSentenceSpain: "Un vaso de agua, por favor.", exampleSentenceLatam: "Agua sin gas." },
      { word: "Wine", spainVariant: "Vino", latamVariant: "Vino", phoneticSpain: "[VEE-no]", phoneticLatam: "[VEE-no]", english: "Wine", partOfSpeech: "noun", exampleSentenceSpain: "Un vino tinto.", exampleSentenceLatam: "¿Hay vino blanco?" }
    ]
  },
  "a2-10-travel-hotel": {
    title: "Travel & Hotel Situations",
    description: "Book hotels, ask directions, and navigate travel scenarios with confidence",
    vocabulary: [
      { word: "Hotel", spainVariant: "Hotel", latamVariant: "Hotel", phoneticSpain: "[o-TEL]", phoneticLatam: "[o-TEL]", english: "Hotel", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está el hotel?", exampleSentenceLatam: "El hotel es muy bonito." },
      { word: "Room", spainVariant: "Habitación", latamVariant: "Cuarto", phoneticSpain: "[ah-bee-tah-see-OHN]", phoneticLatam: "[KWAR-to]", english: "Room", partOfSpeech: "noun", exampleSentenceSpain: "Una habitación con vista.", exampleSentenceLatam: "El cuarto tiene aire acondicionado." },
      { word: "Key", spainVariant: "Llave", latamVariant: "Llave", phoneticSpain: "[YAH-veh]", phoneticLatam: "[YAH-veh]", english: "Key", partOfSpeech: "noun", exampleSentenceSpain: "Aquí está tu llave.", exampleSentenceLatam: "¿Dónde está mi llave?" },
      { word: "Check-in", spainVariant: "Registro", latamVariant: "Registro", phoneticSpain: "[reh-HIS-tro]", phoneticLatam: "[reh-HIS-tro]", english: "Check-in", partOfSpeech: "noun", exampleSentenceSpain: "El registro es a las 3.", exampleSentenceLatam: "¿A qué hora es el registro?" },
      { word: "Check-out", spainVariant: "Salida", latamVariant: "Salida", phoneticSpain: "[sah-LEE-dah]", phoneticLatam: "[sah-LEE-dah]", english: "Check-out", partOfSpeech: "noun", exampleSentenceSpain: "La salida es a las 11.", exampleSentenceLatam: "¿A qué hora debo salir?" },
      { word: "Passport", spainVariant: "Pasaporte", latamVariant: "Pasaporte", phoneticSpain: "[pah-sah-POR-teh]", phoneticLatam: "[pah-sah-POR-teh]", english: "Passport", partOfSpeech: "noun", exampleSentenceSpain: "¿Tienes tu pasaporte?", exampleSentenceLatam: "Necesito tu pasaporte." },
      { word: "Luggage", spainVariant: "Equipaje", latamVariant: "Equipaje", phoneticSpain: "[eh-kee-PAH-heh]", phoneticLatam: "[eh-kee-PAH-heh]", english: "Luggage", partOfSpeech: "noun", exampleSentenceSpain: "¿Dónde está mi equipaje?", exampleSentenceLatam: "El equipaje llegó." },
      { word: "Airport", spainVariant: "Aeropuerto", latamVariant: "Aeropuerto", phoneticSpain: "[ah-eh-ro-PWER-to]", phoneticLatam: "[ah-eh-ro-PWER-to]", english: "Airport", partOfSpeech: "noun", exampleSentenceSpain: "Voy al aeropuerto.", exampleSentenceLatam: "¿Está cerca del aeropuerto?" },
      { word: "Flight", spainVariant: "Vuelo", latamVariant: "Vuelo", phoneticSpain: "[VWEH-lo]", phoneticLatam: "[VWEH-lo]", english: "Flight", partOfSpeech: "noun", exampleSentenceSpain: "Mi vuelo es a las 10.", exampleSentenceLatam: "¿A qué hora es tu vuelo?" },
      { word: "Train", spainVariant: "Tren", latamVariant: "Tren", phoneticSpain: "[tren]", phoneticLatam: "[tren]", english: "Train", partOfSpeech: "noun", exampleSentenceSpain: "Tomo el tren.", exampleSentenceLatam: "El tren está atrasado." },
      { word: "Bus", spainVariant: "Autobús", latamVariant: "Autobús", phoneticSpain: "[ow-to-BOOS]", phoneticLatam: "[ow-to-BOOS]", english: "Bus", partOfSpeech: "noun", exampleSentenceSpain: "Cojo el autobús.", exampleSentenceLatam: "¿Dónde está la parada de autobús?" },
      { word: "Taxi", spainVariant: "Taxi", latamVariant: "Taxi", phoneticSpain: "[TAHK-see]", phoneticLatam: "[TAHK-see]", english: "Taxi", partOfSpeech: "noun", exampleSentenceSpain: "Necesito un taxi.", exampleSentenceLatam: "¿Dónde hay un taxi?" },
      { word: "Where is...", spainVariant: "¿Dónde está", latamVariant: "¿Dónde está", phoneticSpain: "[DOHN-deh es-TAH]", phoneticLatam: "[DOHN-deh es-TAH]", english: "Where is...", partOfSpeech: "phrase", exampleSentenceSpain: "¿Dónde está el museo?", exampleSentenceLatam: "¿Dónde está la estación?" },
      { word: "How do I get to...", spainVariant: "¿Cómo llego a", latamVariant: "¿Cómo llego a", phoneticSpain: "[KOH-mo YEH-go ah]", phoneticLatam: "[KOH-mo YEH-go ah]", english: "How do I get to...", partOfSpeech: "phrase", exampleSentenceSpain: "¿Cómo llego a la playa?", exampleSentenceLatam: "¿Cómo llego al centro?" },
      { word: "Straight", spainVariant: "Recto", latamVariant: "Derecho", phoneticSpain: "[REK-to]", phoneticLatam: "[deh-REH-cho]", english: "Straight", partOfSpeech: "adverb", exampleSentenceSpain: "Ve recto.", exampleSentenceLatam: "Sigue derecho." },
      { word: "Left", spainVariant: "Izquierda", latamVariant: "Izquierda", phoneticSpain: "[ees-kee-EHR-dah]", phoneticLatam: "[ees-kee-EHR-dah]", english: "Left", partOfSpeech: "noun", exampleSentenceSpain: "Gira a la izquierda.", exampleSentenceLatam: "A la izquierda." },
      { word: "Right", spainVariant: "Derecha", latamVariant: "Derecha", phoneticSpain: "[deh-REH-chah]", phoneticLatam: "[deh-REH-chah]", english: "Right", partOfSpeech: "noun", exampleSentenceSpain: "Gira a la derecha.", exampleSentenceLatam: "A tu derecha." },
      { word: "Near", spainVariant: "Cerca de", latamVariant: "Cerca de", phoneticSpain: "[SER-kah deh]", phoneticLatam: "[SER-kah deh]", english: "Near", partOfSpeech: "preposition", exampleSentenceSpain: "Está cerca de aquí.", exampleSentenceLatam: "Está cerca de la iglesia." },
      { word: "Tourist", spainVariant: "Turista", latamVariant: "Turista", phoneticSpain: "[too-RIS-tah]", phoneticLatam: "[too-RIS-tah]", english: "Tourist", partOfSpeech: "noun", exampleSentenceSpain: "Soy turista.", exampleSentenceLatam: "¿Eres turista?" },
      { word: "Sightseeing", spainVariant: "Turismo", latamVariant: "Turismo", phoneticSpain: "[too-RIS-mo]", phoneticLatam: "[too-RIS-mo]", english: "Sightseeing", partOfSpeech: "noun", exampleSentenceSpain: "Quiero hacer turismo.", exampleSentenceLatam: "¿Vamos a hacer turismo?" }
    ]
  }
};

function buildA2Lesson(slug: string, order: number): LessonData {
  const lessonDef = A2_LESSONS[slug as keyof typeof A2_LESSONS];
  if (!lessonDef) throw new Error(`A2 lesson ${slug} not found`);

  const grammarSection: GrammarItem[] = [
    { title: "Preterite (Past Simple) vs Imperfect", spainContent: "Use preterite for completed actions: 'Fui al cine ayer' (I went to cinema yesterday). Use imperfect for habitual or ongoing past: 'Iba al cine cada fin de semana' (I used to go to cinema every weekend).", latamContent: "Same conjugations work in Mexico. Example: 'Fui a la tienda' (I went to the store / completed action) vs 'Iba a la tienda todos los días' (I used to go to the store every day / habitual).", note: "Master this distinction; it's essential for A2." },
    { title: "Present Perfect (Present + Haber)", spainContent: "Form: Haber (have) + past participle. Example: 'He comido' (I have eaten). Spanish uses this for recent past.", latamContent: "Increasingly common in Latin America for recent actions: 'He ido' (I have gone), 'He visto' (I have seen).", note: "Used with temporal phrases like 'hoy' (today), 'esta semana' (this week)." }
  ];

  const dialogues: DialogueScenario[] = [
    {
      id: `${slug}-dialogue-spain-1`,
      title: `${lessonDef.title} - Spain`,
      region: "SPAIN",
      setting: "Spain context",
      lines: [
        { speaker: "Ana", text: lessonDef.vocabulary[0]?.exampleSentenceSpain || "Hola.", region: "SPAIN", setting: "Spain context" },
        { speaker: "Carlos", text: lessonDef.vocabulary[1]?.exampleSentenceSpain || "Hola, ¿qué tal?", region: "SPAIN", setting: "Spain context" },
        { speaker: "Ana", text: lessonDef.vocabulary[2]?.exampleSentenceSpain || "Bien, gracias.", region: "SPAIN", setting: "Spain context" },
        { speaker: "Carlos", text: lessonDef.vocabulary[3]?.exampleSentenceSpain || "¿Y tú?", region: "SPAIN", setting: "Spain context" }
      ]
    },
    {
      id: `${slug}-dialogue-latam-1`,
      title: `${lessonDef.title} - Mexico`,
      region: "LATAM",
      setting: "Mexico context",
      lines: [
        { speaker: "María", text: lessonDef.vocabulary[0]?.exampleSentenceLatam || "¡Hola, qué onda!", region: "LATAM", setting: "Mexico context" },
        { speaker: "Diego", text: lessonDef.vocabulary[1]?.exampleSentenceLatam || "¡Qué tal, hermano!", region: "LATAM", setting: "Mexico context" },
        { speaker: "María", text: lessonDef.vocabulary[2]?.exampleSentenceLatam || "Bien, todo bien.", region: "LATAM", setting: "Mexico context" },
        { speaker: "Diego", text: lessonDef.vocabulary[3]?.exampleSentenceLatam || "Órale.", region: "LATAM", setting: "Mexico context" }
      ]
    }
  ];

  const quiz: QuizQuestion[] = [
    { questionId: "q1", type: "multiple-choice", questionText: `Which tense describes a completed action in the past?`, options: ["Preterite", "Imperfect", "Present perfect", "Present"], correctAnswer: "Preterite", explanation: "The preterite is used for completed past actions." },
    { questionId: "q2", type: "multiple-choice", questionText: `What verb form is 'iba' from?`, options: ["Preterite of ir", "Imperfect of ir", "Present of ir", "Future of ir"], correctAnswer: "Imperfect of ir", explanation: "'Iba' (I used to go / I was going) is the imperfect form of 'ir', used for habitual past actions." },
    { questionId: "q3", type: "multiple-choice", questionText: `Translate: 'I went to the cinema yesterday.'`, options: ["Voy al cine ayer.", "Iba al cine ayer.", "Fui al cine ayer.", "Iré al cine ayer."], correctAnswer: "Fui al cine ayer.", explanation: "Use preterite 'fui' for a completed past action with a specific time (ayer = yesterday)." },
    { questionId: "q4", type: "multiple-choice", questionText: `What is the Spain variant of 'restaurante'?`, options: ["Restaurante", "Comedor", "Bar", "Taberna"], correctAnswer: "Restaurante", explanation: "Both Spain and Latin America use 'restaurante' in formal contexts." },
    { questionId: "q5", type: "multiple-choice", questionText: `Which region uses 'almorzar' for lunch instead of 'comer'?`, options: ["Spain only", "Mexico only", "Both equally", "Neither"], correctAnswer: "Both equally", explanation: "Both Spain and Latin America use 'almorzar' (lunch) and 'comer' (eat lunch), with 'almorzar' being the formal meal." }
  ];

  const flashcards: FlashcardItem[] = lessonDef.vocabulary.map((v, idx) => ({
    id: `fc-${slug}-${idx + 1}`,
    frontSpain: v.spainVariant,
    frontLatam: v.latamVariant,
    backEnglish: v.english,
    variantDifferenceNote: v.spainVariant !== v.latamVariant ? `Spain: "${v.spainVariant}", Mexico: "${v.latamVariant}"` : "Same in both regions",
    exampleSentenceSpain: v.exampleSentenceSpain || "",
    exampleSentenceLatam: v.exampleSentenceLatam || "",
    partOfSpeech: v.partOfSpeech
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
      example: v.exampleSentenceSpain
    })),
    grammarJson: grammarSection.map((g) => ({
      title: g.title,
      content: `${g.spainContent} | ${g.latamContent}`
    })),
    content: `# ${lessonDef.title}\n\n${lessonDef.description}\n\nThis A2 lesson covers regional vocabulary, grammar patterns, and natural speech. Study the vocabulary, learn the dialogues, and master the quiz.`
  };
}

export function generateA2Lessons(): LessonData[] {
  const slugs = ["a2-01-small-talk", "a2-02-daily-routines", "a2-03-hobbies", "a2-04-making-plans", "a2-05-phone-calls", "a2-06-weather", "a2-07-work-school", "a2-08-emotions", "a2-09-food-restaurants", "a2-10-travel-hotel"];
  return slugs.map((slug, idx) => buildA2Lesson(slug, idx + 1));
}