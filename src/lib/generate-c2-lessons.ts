import type { LessonData, RegionalVocabItem, GrammarItem, DialogueScenario, QuizQuestion, FlashcardItem } from "./lessons-data";

const C2_LESSONS = {
  "c2-01-mastery-advanced": {
    title: "Mastery: Advanced Nuance",
    description: "The pinnacle of proficiency—expressing complexity with elegance",
    vocabulary: [
      { word: "It could be argued", spainVariant: "Se podría sostener", latamVariant: "Podría argumentarse", phoneticSpain: "[seh po-DREE-ah sos-teh-NER]", phoneticLatam: "[po-DREE-ah ar-goo-men-TAHR-seh]", english: "It could be argued", partOfSpeech: "phrase", exampleSentenceSpain: "Se podría sostener que...", exampleSentenceLatam: "Podría argumentarse que..." },
      { word: "Presupposition", spainVariant: "Presupuesto", latamVariant: "Suposición", phoneticSpain: "[preh-soo-PWES-to]", phoneticLatam: "[soo-po-see-see-OHN]", english: "Presupposition", partOfSpeech: "noun", exampleSentenceSpain: "El presupuesto es claro.", exampleSentenceLatam: "La suposición es válida." },
      { word: "Nuance mastery", spainVariant: "Dominio de matices", latamVariant: "Control de detalles", phoneticSpain: "[do-MEE-nee-o deh mah-TEE-ses]", phoneticLatam: "[kon-TROHL deh deh-TAH-yes]", english: "Nuance mastery", partOfSpeech: "phrase", exampleSentenceSpain: "El dominio de matices es esencial.", exampleSentenceLatam: "El control de detalles es fundamental." },
      { word: "Sophisticated expression", spainVariant: "Expresión sofisticada", latamVariant: "Lenguaje elegante", phoneticSpain: "[eks-preh-see-OHN so-fis-tee-KAH-dah]", phoneticLatam: "[len-GWAH-heh eh-leh-GAHN-teh]", english: "Sophisticated expression", partOfSpeech: "phrase", exampleSentenceSpain: "Expresión sofisticada es clave.", exampleSentenceLatam: "El lenguaje elegante caracteriza C2." },
      { word: "Pragmatic awareness", spainVariant: "Conciencia pragmática", latamVariant: "Sensibilidad pragmática", phoneticSpain: "[kon-see-EHN-see-ah prag-MAH-tee-kah]", phoneticLatam: "[sen-see-bee-lee-DAHD prag-MAH-tee-kah]", english: "Pragmatic awareness", partOfSpeech: "phrase", exampleSentenceSpain: "Conciencia pragmática es requisito.", exampleSentenceLatam: "La sensibilidad pragmática es esencial." },
      { word: "Rhetorical device", spainVariant: "Recurso retórico", latamVariant: "Dispositivo retórico", phoneticSpain: "[reh-KUR-so reh-TO-ree-ko]", phoneticLatam: "[dis-po-zee-TEE-vo reh-TO-ree-ko]", english: "Rhetorical device", partOfSpeech: "phrase", exampleSentenceSpain: "Recurso retórico efectivo.", exampleSentenceLatam: "El dispositivo retórico es poderoso." },
      { word: "Idiomatic expression", spainVariant: "Expresión idiomática", latamVariant: "Giro idiomático", phoneticSpain: "[eks-preh-see-OHN ee-dee-o-MAH-tee-kah]", phoneticLatam: "[HEE-ro ee-dee-o-MAH-tee-ko]", english: "Idiomatic expression", partOfSpeech: "phrase", exampleSentenceSpain: "Expresión idiomática es natural.", exampleSentenceLatam: "El giro idiomático suena auténtico." },
      { word: "Dialectal variation", spainVariant: "Variación dialectal", latamVariant: "Variante regional", phoneticSpain: "[vah-ree-ah-see-OHN dee-ah-lek-TAHL]", phoneticLatam: "[vah-ree-AHN-teh reh-hee-o-NAHL]", english: "Dialectal variation", partOfSpeech: "phrase", exampleSentenceSpain: "Variación dialectal es importante.", exampleSentenceLatam: "La variante regional es significativa." },
      { word: "Cultural competence", spainVariant: "Competencia cultural", latamVariant: "Dominio cultural", phoneticSpain: "[kom-peh-TEN-see-ah kool-too-RAHL]", phoneticLatam: "[do-MEE-nee-o kool-too-RAHL]", english: "Cultural competence", partOfSpeech: "phrase", exampleSentenceSpain: "Competencia cultural es primordial.", exampleSentenceLatam: "El dominio cultural es fundamental." },
      { word: "Register shifting", spainVariant: "Cambio de registro", latamVariant: "Cambio de tono", phoneticSpain: "[KAHm-bee-o deh reh-HIS-tro]", phoneticLatam: "[KAHm-bee-o deh TO-no]", english: "Register shifting", partOfSpeech: "phrase", exampleSentenceSpain: "Cambio de registro es natural.", exampleSentenceLatam: "El cambio de tono es necesario." },
      { word: "Implicit meaning", spainVariant: "Significado implícito", latamVariant: "Sentido tácito", phoneticSpain: "[sig-nee-fee-KAH-do im-PLEE-see-to]", phoneticLatam: "[sen-TEE-do TAHS-ee-to]", english: "Implicit meaning", partOfSpeech: "phrase", exampleSentenceSpain: "Significado implícito es sutil.", exampleSentenceLatam: "El sentido tácito es profundo." },
      { word: "Conversational flow", spainVariant: "Fluidez conversacional", latamVariant: "Fluidez en el diálogo", phoneticSpain: "[floo-ee-DEHZ kon-ver-sah-see-o-NAHL]", phoneticLatam: "[floo-ee-DEHZ en el dee-AH-lo-go]", english: "Conversational flow", partOfSpeech: "phrase", exampleSentenceSpain: "Fluidez conversacional es marca.", exampleSentenceLatam: "La fluidez en el diálogo es característica." },
      { word: "Discourse coherence", spainVariant: "Coherencia discursiva", latamVariant: "Coherencia del discurso", phoneticSpain: "[ko-eh-REN-see-ah dis-kur-SEE-vah]", phoneticLatam: "[ko-eh-REN-see-ah del dis-KUR-so]", english: "Discourse coherence", partOfSpeech: "phrase", exampleSentenceSpain: "Coherencia discursiva es esencial.", exampleSentenceLatam: "La coherencia del discurso es clave." },
      { word: "Stylistic variation", spainVariant: "Variación estilística", latamVariant: "Variación de estilo", phoneticSpain: "[vah-ree-ah-see-OHN es-tee-LEES-tee-kah]", phoneticLatam: "[vah-ree-ah-see-OHN deh es-TEE-lo]", english: "Stylistic variation", partOfSpeech: "phrase", exampleSentenceSpain: "Variación estilística es sofisticada.", exampleSentenceLatam: "La variación de estilo es elegante." },
      { word: "Ambiguity resolution", spainVariant: "Resolución de ambigüedad", latamVariant: "Aclaración de la ambigüedad", phoneticSpain: "[reh-so-loo-see-OHN deh am-bee-GWEH-dahd]", phoneticLatam: "[ah-klah-rah-see-OHN deh lah am-bee-GWEH-dahd]", english: "Ambiguity resolution", partOfSpeech: "phrase", exampleSentenceSpain: "Resolución de ambigüedad es arte.", exampleSentenceLatam: "La aclaración de ambigüedad es habilidad." },
      { word: "Linguistic precision", spainVariant: "Precisión lingüística", latamVariant: "Exactitud del lenguaje", phoneticSpain: "[preh-see-see-OHN lin-GWEES-tee-kah]", phoneticLatam: "[eg-zak-tee-TOOD del len-GWAH-heh]", english: "Linguistic precision", partOfSpeech: "phrase", exampleSentenceSpain: "Precisión lingüística es requerida.", exampleSentenceLatam: "La exactitud del lenguaje es vital." },
      { word: "Contextual appropriateness", spainVariant: "Adecuación contextual", latamVariant: "Pertinencia contextual", phoneticSpain: "[ah-deh-koo-ah-see-OHN kon-teks-TOO-ahl]", phoneticLatam: "[per-tee-NEN-see-ah kon-teks-TOO-ahl]", english: "Contextual appropriateness", partOfSpeech: "phrase", exampleSentenceSpain: "Adecuación contextual es vital.", exampleSentenceLatam: "La pertinencia contextual es fundamental." },
      { word: "Communicative intention", spainVariant: "Intención comunicativa", latamVariant: "Propósito comunicativo", phoneticSpain: "[in-ten-see-OHN ko-moo-nee-kah-TEE-vah]", phoneticLatam: "[pro-PO-see-to ko-moo-nee-kah-TEE-vo]", english: "Communicative intention", partOfSpeech: "phrase", exampleSentenceSpain: "Intención comunicativa es clara.", exampleSentenceLatam: "El propósito comunicativo es evidente." },
      { word: "Native-like fluency", spainVariant: "Fluidez de hablante nativo", latamVariant: "Habla nativa", phoneticSpain: "[floo-ee-DEHZ deh ah-BLAHN-teh nah-TEE-vo]", phoneticLatam: "[AH-blah NAH-tee-vah]", english: "Native-like fluency", partOfSpeech: "phrase", exampleSentenceSpain: "Fluidez de hablante nativo es meta.", exampleSentenceLatam: "El habla nativa es el objetivo." },
    ],
  },
  "c2-02-stylistic-elegance": {
    title: "Stylistic Elegance & Precision",
    description: "Master expressing yourself with supreme precision and beauty",
    vocabulary: [
      { word: "Eloquence", spainVariant: "Elocuencia", latamVariant: "Elocuencia", phoneticSpain: "[eh-lo-KWEN-see-ah]", phoneticLatam: "[eh-lo-KWEN-see-ah]", english: "Eloquence", partOfSpeech: "noun", exampleSentenceSpain: "La elocuencia es rara.", exampleSentenceLatam: "La elocuencia es valiosa." },
      { word: "Meticulous expression", spainVariant: "Expresión meticulosa", latamVariant: "Expresión cuidadosa", phoneticSpain: "[eks-preh-see-OHN meh-tee-koo-LOH-sah]", phoneticLatam: "[eks-preh-see-OHN koo-ee-dah-DOH-sah]", english: "Meticulous expression", partOfSpeech: "phrase", exampleSentenceSpain: "Expresión meticulosa es requerida.", exampleSentenceLatam: "La expresión cuidadosa es necesaria." },
      { word: "Eloquent delivery", spainVariant: "Presentación elocuente", latamVariant: "Entrega elocuente", phoneticSpain: "[preh-sen-tah-see-OHN eh-lo-KWEN-teh]", phoneticLatam: "[en-TREH-gah eh-lo-KWEN-teh]", english: "Eloquent delivery", partOfSpeech: "phrase", exampleSentenceSpain: "Presentación elocuente es magistral.", exampleSentenceLatam: "La entrega elocuente es excelente." },
      { word: "Refined taste", spainVariant: "Gusto refinado", latamVariant: "Gusto refinado", phoneticSpain: "[GUS-to reh-fee-NAH-do]", phoneticLatam: "[GUS-to reh-fee-NAH-do]", english: "Refined taste", partOfSpeech: "phrase", exampleSentenceSpain: "Gusto refinado es evidente.", exampleSentenceLatam: "El gusto refinado es aparente." },
      { word: "Linguistic artistry", spainVariant: "Maestría lingüística", latamVariant: "Destreza lingüística", phoneticSpain: "[mah-es-TREE-ah lin-GWEES-tee-kah]", phoneticLatam: "[des-TREH-sah lin-GWEES-tee-kah]", english: "Linguistic artistry", partOfSpeech: "phrase", exampleSentenceSpain: "Maestría lingüística es admirable.", exampleSentenceLatam: "La destreza lingüística es admirable." },
      { word: "Syntactic elegance", spainVariant: "Elegancia sintáctica", latamVariant: "Elegancia sintáctica", phoneticSpain: "[eh-leh-GAHN-see-ah sin-TAHK-tee-kah]", phoneticLatam: "[eh-leh-GAHN-see-ah sin-TAHK-tee-kah]", english: "Syntactic elegance", partOfSpeech: "phrase", exampleSentenceSpain: "Elegancia sintáctica es marca.", exampleSentenceLatam: "La elegancia sintáctica es distintiva." },
      { word: "Semantic precision", spainVariant: "Precisión semántica", latamVariant: "Exactitud semántica", phoneticSpain: "[preh-see-see-OHN seh-MAHN-tee-kah]", phoneticLatam: "[eg-zak-tee-TOOD seh-MAHN-tee-kah]", english: "Semantic precision", partOfSpeech: "phrase", exampleSentenceSpain: "Precisión semántica es requerida.", exampleSentenceLatam: "La exactitud semántica es esencial." },
      { word: "Lexical variety", spainVariant: "Variedad léxica", latamVariant: "Variedad de vocabulario", phoneticSpain: "[vah-ree-eh-DAHD LEK-see-kah]", phoneticLatam: "[vah-ree-eh-DAHD deh vo-kah-boo-LAH-ree-o]", english: "Lexical variety", partOfSpeech: "phrase", exampleSentenceSpain: "Variedad léxica es característica.", exampleSentenceLatam: "La variedad de vocabulario es notable." },
      { word: "Phonetic elegance", spainVariant: "Elegancia fonética", latamVariant: "Armonía de sonidos", phoneticSpain: "[eh-leh-GAHN-see-ah fo-NEH-tee-kah]", phoneticLatam: "[ar-mo-NEE-ah deh so-NEE-dos]", english: "Phonetic elegance", partOfSpeech: "phrase", exampleSentenceSpain: "Elegancia fonética es evidente.", exampleSentenceLatam: "La armonía de sonidos es clara." },
      { word: "Discursive mastery", spainVariant: "Dominio discursivo", latamVariant: "Dominio del discurso", phoneticSpain: "[do-MEE-nee-o dis-kur-SEE-vo]", phoneticLatam: "[do-MEE-nee-o del dis-KUR-so]", english: "Discursive mastery", partOfSpeech: "phrase", exampleSentenceSpain: "Dominio discursivo es notable.", exampleSentenceLatam: "El dominio del discurso es evidente." },
      { word: "Stylistic finesse", spainVariant: "Finura estilística", latamVariant: "Refinamiento estilístico", phoneticSpain: "[fee-NOO-rah es-tee-LEES-tee-kah]", phoneticLatam: "[reh-fee-nah-mee-EHN-to es-tee-LEES-tee-ko]", english: "Stylistic finesse", partOfSpeech: "phrase", exampleSentenceSpain: "Finura estilística es marca.", exampleSentenceLatam: "El refinamiento estilístico es distintivo." },
      { word: "Rhetorical mastery", spainVariant: "Maestría retórica", latamVariant: "Dominio retórico", phoneticSpain: "[mah-es-TREE-ah reh-TO-ree-kah]", phoneticLatam: "[do-MEE-nee-o reh-TO-ree-ko]", english: "Rhetorical mastery", partOfSpeech: "phrase", exampleSentenceSpain: "Maestría retórica es impresionante.", exampleSentenceLatam: "El dominio retórico es impresionante." },
      { word: "Expressive capability", spainVariant: "Capacidad expresiva", latamVariant: "Capacidad expresiva", phoneticSpain: "[kah-pah-see-DAHD eks-preh-SEE-vah]", phoneticLatam: "[kah-pah-see-DAHD eks-preh-SEE-vah]", english: "Expressive capability", partOfSpeech: "phrase", exampleSentenceSpain: "Capacidad expresiva es sobresaliente.", exampleSentenceLatam: "La capacidad expresiva es excepcional." },
      { word: "Communicative finesse", spainVariant: "Finura comunicativa", latamVariant: "Sutileza comunicativa", phoneticSpain: "[fee-NOO-rah ko-moo-nee-kah-TEE-vah]", phoneticLatam: "[soo-tee-LEH-sah ko-moo-nee-kah-TEE-vah]", english: "Communicative finesse", partOfSpeech: "phrase", exampleSentenceSpain: "Finura comunicativa es evidente.", exampleSentenceLatam: "La sutileza comunicativa es clara." },
      { word: "Linguistic sophistication", spainVariant: "Sofisticación lingüística", latamVariant: "Sofisticación del lenguaje", phoneticSpain: "[so-fis-tee-kah-see-OHN lin-GWEES-tee-kah]", phoneticLatam: "[so-fis-tee-kah-see-OHN del len-GWAH-heh]", english: "Linguistic sophistication", partOfSpeech: "phrase", exampleSentenceSpain: "Sofisticación lingüística es admirable.", exampleSentenceLatam: "La sofisticación del lenguaje es admirable." },
      { word: "Expressive power", spainVariant: "Poder expresivo", latamVariant: "Potencia expresiva", phoneticSpain: "[po-DER eks-preh-SEE-vo]", phoneticLatam: "[po-TEN-see-ah eks-preh-SEE-vah]", english: "Expressive power", partOfSpeech: "phrase", exampleSentenceSpain: "Poder expresivo es sorprendente.", exampleSentenceLatam: "La potencia expresiva es sorprendente." },
      { word: "Masterful command", spainVariant: "Dominio magistral", latamVariant: "Control magistral", phoneticSpain: "[do-MEE-nee-o mah-his-TRAHL]", phoneticLatam: "[kon-TROHL mah-his-TRAHL]", english: "Masterful command", partOfSpeech: "phrase", exampleSentenceSpain: "Dominio magistral es evidente.", exampleSentenceLatam: "El control magistral es aparente." },
      { word: "Linguistic brilliance", spainVariant: "Brillantez lingüística", latamVariant: "Genialidad lingüística", phoneticSpain: "[bree-yahn-TEHZ lin-GWEES-tee-kah]", phoneticLatam: "[heh-nee-ah-lee-DAHD lin-GWEES-tee-kah]", english: "Linguistic brilliance", partOfSpeech: "phrase", exampleSentenceSpain: "Brillantez lingüística es rara.", exampleSentenceLatam: "La genialidad lingüística es rara." },
    ],
  },
  "c2-03-cultural-depth": {
    title: "Cultural Depth & Native Understanding",
    description: "Understand Spanish and Latin American cultures at the deepest level",
    vocabulary: [
      { word: "Cultural nuance", spainVariant: "Matiz cultural", latamVariant: "Sutileza cultural", phoneticSpain: "[mah-TEES kool-too-RAHL]", phoneticLatam: "[soo-tee-LEH-sah kool-too-RAHL]", english: "Cultural nuance", partOfSpeech: "phrase", exampleSentenceSpain: "Matiz cultural es importante.", exampleSentenceLatam: "La sutileza cultural es significativa." },
      { word: "Historical context", spainVariant: "Contexto histórico", latamVariant: "Contexto histórico", phoneticSpain: "[kon-TEKS-to his-TO-ree-ko]", phoneticLatam: "[kon-TEKS-to his-TO-ree-ko]", english: "Historical context", partOfSpeech: "phrase", exampleSentenceSpain: "Contexto histórico es esencial.", exampleSentenceLatam: "El contexto histórico es fundamental." },
      { word: "Social dynamics", spainVariant: "Dinámica social", latamVariant: "Dinámica social", phoneticSpain: "[dee-NAH-mee-kah so-see-AHL]", phoneticLatam: "[dee-NAH-mee-kah so-see-AHL]", english: "Social dynamics", partOfSpeech: "phrase", exampleSentenceSpain: "Dinámica social es compleja.", exampleSentenceLatam: "La dinámica social es compleja." },
      { word: "Artistic tradition", spainVariant: "Tradición artística", latamVariant: "Tradición artística", phoneticSpain: "[trah-dee-see-OHN ar-TEES-tee-kah]", phoneticLatam: "[trah-dee-see-OHN ar-TEES-tee-kah]", english: "Artistic tradition", partOfSpeech: "phrase", exampleSentenceSpain: "Tradición artística es rica.", exampleSentenceLatam: "La tradición artística es valiosa." },
      { word: "Literary legacy", spainVariant: "Legado literario", latamVariant: "Legado literario", phoneticSpain: "[leh-GAH-do lee-teh-RAH-ree-o]", phoneticLatam: "[leh-GAH-do lee-teh-RAH-ree-o]", english: "Literary legacy", partOfSpeech: "phrase", exampleSentenceSpain: "Legado literario es profundo.", exampleSentenceLatam: "El legado literario es profundo." },
      { word: "Philosophical perspective", spainVariant: "Perspectiva filosófica", latamVariant: "Perspectiva filosófica", phoneticSpain: "[per-spek-TEE-vah fee-lo-SO-fee-kah]", phoneticLatam: "[per-spek-TEE-vah fee-lo-SO-fee-kah]", english: "Philosophical perspective", partOfSpeech: "phrase", exampleSentenceSpain: "Perspectiva filosófica es valiosa.", exampleSentenceLatam: "La perspectiva filosófica es valiosa." },
      { word: "Spiritual heritage", spainVariant: "Patrimonio espiritual", latamVariant: "Herencia espiritual", phoneticSpain: "[pah-tree-MO-nee-o es-pee-ree-too-AHL]", phoneticLatam: "[eh-REN-see-ah es-pee-ree-too-AHL]", english: "Spiritual heritage", partOfSpeech: "phrase", exampleSentenceSpain: "Patrimonio espiritual es sagrado.", exampleSentenceLatam: "La herencia espiritual es sagrada." },
      { word: "Indigenous wisdom", spainVariant: "Sabiduría indígena", latamVariant: "Sabiduría indígena", phoneticSpain: "[sah-bee-doo-REE-ah in-DEE-heh-nah]", phoneticLatam: "[sah-bee-doo-REE-ah in-DEE-heh-nah]", english: "Indigenous wisdom", partOfSpeech: "phrase", exampleSentenceSpain: "Sabiduría indígena es valiosa.", exampleSentenceLatam: "La sabiduría indígena es preciosa." },
      { word: "Collective memory", spainVariant: "Memoria colectiva", latamVariant: "Memoria colectiva", phoneticSpain: "[meh-MO-ree-ah ko-lek-TEE-vah]", phoneticLatam: "[meh-MO-ree-ah ko-lek-TEE-vah]", english: "Collective memory", partOfSpeech: "phrase", exampleSentenceSpain: "Memoria colectiva es identidad.", exampleSentenceLatam: "La memoria colectiva es identidad." },
      { word: "Authentic expression", spainVariant: "Expresión auténtica", latamVariant: "Expresión genuina", phoneticSpain: "[eks-preh-see-OHN ow-TEN-tee-kah]", phoneticLatam: "[eks-preh-see-OHN heh-noo-EE-nah]", english: "Authentic expression", partOfSpeech: "phrase", exampleSentenceSpain: "Expresión auténtica es rara.", exampleSentenceLatam: "La expresión genuina es rara." },
      { word: "Intercultural awareness", spainVariant: "Conciencia intercultural", latamVariant: "Sensibilidad intercultural", phoneticSpain: "[kon-see-EHN-see-ah in-ter-kool-too-RAHL]", phoneticLatam: "[sen-see-bee-lee-DAHD in-ter-kool-too-RAHL]", english: "Intercultural awareness", partOfSpeech: "phrase", exampleSentenceSpain: "Conciencia intercultural es importante.", exampleSentenceLatam: "La sensibilidad intercultural es fundamental." },
      { word: "Cultural integration", spainVariant: "Integración cultural", latamVariant: "Integración cultural", phoneticSpain: "[in-teh-grah-see-OHN kool-too-RAHL]", phoneticLatam: "[in-teh-grah-see-OHN kool-too-RAHL]", english: "Cultural integration", partOfSpeech: "phrase", exampleSentenceSpain: "Integración cultural es compleja.", exampleSentenceLatam: "La integración cultural es compleja." },
      { word: "Historical awareness", spainVariant: "Conciencia histórica", latamVariant: "Sensibilidad histórica", phoneticSpain: "[kon-see-EHN-see-ah his-TO-ree-kah]", phoneticLatam: "[sen-see-bee-lee-DAHD his-TO-ree-kah]", english: "Historical awareness", partOfSpeech: "phrase", exampleSentenceSpain: "Conciencia histórica es esencial.", exampleSentenceLatam: "La sensibilidad histórica es esencial." },
      { word: "Cultural resonance", spainVariant: "Resonancia cultural", latamVariant: "Resonancia cultural", phoneticSpain: "[reh-so-NAHN-see-ah kool-too-RAHL]", phoneticLatam: "[reh-so-NAHN-see-ah kool-too-RAHL]", english: "Cultural resonance", partOfSpeech: "phrase", exampleSentenceSpain: "Resonancia cultural es profunda.", exampleSentenceLatam: "La resonancia cultural es profunda." },
      { word: "Symbolic meaning", spainVariant: "Significado simbólico", latamVariant: "Sentido simbólico", phoneticSpain: "[sig-nee-fee-KAH-do sim-BO-lee-ko]", phoneticLatam: "[sen-TEE-do sim-BO-lee-ko]", english: "Symbolic meaning", partOfSpeech: "phrase", exampleSentenceSpain: "Significado simbólico es profundo.", exampleSentenceLatam: "El sentido simbólico es profundo." },
      { word: "Values transmission", spainVariant: "Transmisión de valores", latamVariant: "Transmisión de valores", phoneticSpain: "[trans-mee-see-OHN deh vah-LO-res]", phoneticLatam: "[trans-mee-see-OHN deh vah-LO-res]", english: "Values transmission", partOfSpeech: "phrase", exampleSentenceSpain: "Transmisión de valores es vital.", exampleSentenceLatam: "La transmisión de valores es vital." },
      { word: "Identity affirmation", spainVariant: "Afirmación de identidad", latamVariant: "Afirmación de identidad", phoneticSpain: "[ah-fir-mah-see-OHN deh i-den-tee-DAHD]", phoneticLatam: "[ah-fir-mah-see-OHN deh i-den-tee-DAHD]", english: "Identity affirmation", partOfSpeech: "phrase", exampleSentenceSpain: "Afirmación de identidad es importante.", exampleSentenceLatam: "La afirmación de identidad es importante." },
      { word: "Ancestral connection", spainVariant: "Conexión ancestral", latamVariant: "Conexión ancestral", phoneticSpain: "[ko-nek-see-OHN an-ses-TRAHL]", phoneticLatam: "[ko-nek-see-OHN an-ses-TRAHL]", english: "Ancestral connection", partOfSpeech: "phrase", exampleSentenceSpain: "Conexión ancestral es poderosa.", exampleSentenceLatam: "La conexión ancestral es poderosa." },
    ],
  },
  "c2-04-literary-excellence": {
    title: "Literary Excellence & Canonical Mastery",
    description: "Understand, appreciate, and emulate Spanish literature at the highest level",
    vocabulary: [
      { word: "Literary canon", spainVariant: "Canon literario", latamVariant: "Canon literario", phoneticSpain: "[kah-NON lee-teh-RAH-ree-o]", phoneticLatam: "[kah-NON lee-teh-RAH-ree-o]", english: "Literary canon", partOfSpeech: "phrase", exampleSentenceSpain: "Canon literario es vasto.", exampleSentenceLatam: "El canon literario es vasto." },
      { word: "Textual analysis", spainVariant: "Análisis textual", latamVariant: "Análisis textual", phoneticSpain: "[ah-NAH-lee-sis tek-TOO-ahl]", phoneticLatam: "[ah-NAH-lee-sis tek-TOO-ahl]", english: "Textual analysis", partOfSpeech: "phrase", exampleSentenceSpain: "Análisis textual es profundo.", exampleSentenceLatam: "El análisis textual es profundo." },
      { word: "Thematic exploration", spainVariant: "Exploración temática", latamVariant: "Exploración temática", phoneticSpain: "[eks-plo-rah-see-OHN teh-MAH-tee-kah]", phoneticLatam: "[eks-plo-rah-see-OHN teh-MAH-tee-kah]", english: "Thematic exploration", partOfSpeech: "phrase", exampleSentenceSpain: "Exploración temática es enriquecedora.", exampleSentenceLatam: "La exploración temática es enriquecedora." },
      { word: "Narrative technique", spainVariant: "Técnica narrativa", latamVariant: "Técnica narrativa", phoneticSpain: "[TEK-nee-kah nar-rah-TEE-vah]", phoneticLatam: "[TEK-nee-kah nar-rah-TEE-vah]", english: "Narrative technique", partOfSpeech: "phrase", exampleSentenceSpain: "Técnica narrativa es sofisticada.", exampleSentenceLatam: "La técnica narrativa es sofisticada." },
      { word: "Symbolic interpretation", spainVariant: "Interpretación simbólica", latamVariant: "Interpretación simbólica", phoneticSpain: "[in-ter-preh-tah-see-OHN sim-BO-lee-kah]", phoneticLatam: "[in-ter-preh-tah-see-OHN sim-BO-lee-kah]", english: "Symbolic interpretation", partOfSpeech: "phrase", exampleSentenceSpain: "Interpretación simbólica es valiosa.", exampleSentenceLatam: "La interpretación simbólica es valiosa." },
      { word: "Literary criticism", spainVariant: "Crítica literaria", latamVariant: "Crítica literaria", phoneticSpain: "[KREE-tee-kah lee-teh-RAH-ree-ah]", phoneticLatam: "[KREE-tee-kah lee-teh-RAH-ree-ah]", english: "Literary criticism", partOfSpeech: "phrase", exampleSentenceSpain: "Crítica literaria es rigurosa.", exampleSentenceLatam: "La crítica literaria es rigurosa." },
      { word: "Hermeneutic approach", spainVariant: "Aproximación hermenéutica", latamVariant: "Aproximación hermenéutica", phoneticSpain: "[ah-prohk-see-mah-see-OHN er-meh-NOY-tee-kah]", phoneticLatam: "[ah-prohk-see-mah-see-OHN er-meh-NOY-tee-kah]", english: "Hermeneutic approach", partOfSpeech: "phrase", exampleSentenceSpain: "Aproximación hermenéutica es compleja.", exampleSentenceLatam: "La aproximación hermenéutica es compleja." },
      { word: "Intertextual connection", spainVariant: "Conexión intertextual", latamVariant: "Conexión intertextual", phoneticSpain: "[ko-nek-see-OHN in-ter-tek-TOO-ahl]", phoneticLatam: "[ko-nek-see-OHN in-ter-tek-TOO-ahl]", english: "Intertextual connection", partOfSpeech: "phrase", exampleSentenceSpain: "Conexión intertextual es evidente.", exampleSentenceLatam: "La conexión intertextual es evidente." },
      { word: "Metanarrative awareness", spainVariant: "Conciencia metanarrativa", latamVariant: "Sensibilidad metanarrativa", phoneticSpain: "[kon-see-EHN-see-ah meh-tah-nah-rah-TEE-vah]", phoneticLatam: "[sen-see-bee-lee-DAHD meh-tah-nah-rah-TEE-vah]", english: "Metanarrative awareness", partOfSpeech: "phrase", exampleSentenceSpain: "Conciencia metanarrativa es sofisticada.", exampleSentenceLatam: "La sensibilidad metanarrativa es sofisticada." },
      { word: "Stylistic mastery", spainVariant: "Maestría estilística", latamVariant: "Maestría estilística", phoneticSpain: "[mah-es-TREE-ah es-tee-LEES-tee-kah]", phoneticLatam: "[mah-es-TREE-ah es-tee-LEES-tee-kah]", english: "Stylistic mastery", partOfSpeech: "phrase", exampleSentenceSpain: "Maestría estilística es admirable.", exampleSentenceLatam: "La maestría estilística es admirable." },
      { word: "Philosophical depth", spainVariant: "Profundidad filosófica", latamVariant: "Profundidad filosófica", phoneticSpain: "[pro-foon-dee-DAHD fee-lo-SO-fee-kah]", phoneticLatam: "[pro-foon-dee-DAHD fee-lo-SO-fee-kah]", english: "Philosophical depth", partOfSpeech: "phrase", exampleSentenceSpain: "Profundidad filosófica es impresionante.", exampleSentenceLatam: "La profundidad filosófica es impresionante." },
      { word: "Aesthetic appreciation", spainVariant: "Apreciación estética", latamVariant: "Apreciación estética", phoneticSpain: "[ah-preh-see-ah-see-OHN es-TEH-tee-kah]", phoneticLatam: "[ah-preh-see-ah-see-OHN es-TEH-tee-kah]", english: "Aesthetic appreciation", partOfSpeech: "phrase", exampleSentenceSpain: "Apreciación estética es valiosa.", exampleSentenceLatam: "La apreciación estética es valiosa." },
      { word: "Textual resonance", spainVariant: "Resonancia textual", latamVariant: "Resonancia textual", phoneticSpain: "[reh-so-NAHN-see-ah tek-TOO-ahl]", phoneticLatam: "[reh-so-NAHN-see-ah tek-TOO-ahl]", english: "Textual resonance", partOfSpeech: "phrase", exampleSentenceSpain: "Resonancia textual es profunda.", exampleSentenceLatam: "La resonancia textual es profunda." },
      { word: "Critical engagement", spainVariant: "Compromiso crítico", latamVariant: "Compromiso crítico", phoneticSpain: "[kom-pro-MEE-so KREE-tee-ko]", phoneticLatam: "[kom-pro-MEE-so KREE-tee-ko]", english: "Critical engagement", partOfSpeech: "phrase", exampleSentenceSpain: "Compromiso crítico es esencial.", exampleSentenceLatam: "El compromiso crítico es esencial." },
      { word: "Interpretive framework", spainVariant: "Marco interpretativo", latamVariant: "Marco interpretativo", phoneticSpain: "[MAR-ko in-ter-preh-tah-TEE-vo]", phoneticLatam: "[MAR-ko in-ter-preh-tah-TEE-vo]", english: "Interpretive framework", partOfSpeech: "phrase", exampleSentenceSpain: "Marco interpretativo es crucial.", exampleSentenceLatam: "El marco interpretativo es crucial." },
      { word: "Authorial intent", spainVariant: "Intención autorial", latamVariant: "Intención autorial", phoneticSpain: "[in-ten-see-OHN ow-to-ree-AHL]", phoneticLatam: "[in-ten-see-OHN ow-to-ree-AHL]", english: "Authorial intent", partOfSpeech: "phrase", exampleSentenceSpain: "Intención autorial es relevante.", exampleSentenceLatam: "La intención autorial es relevante." },
      { word: "Literary brilliance", spainVariant: "Brillo literario", latamVariant: "Genialidad literaria", phoneticSpain: "[BREE-yo lee-teh-RAH-ree-o]", phoneticLatam: "[heh-nee-ah-lee-DAHD lee-teh-RAH-ree-ah]", english: "Literary brilliance", partOfSpeech: "phrase", exampleSentenceSpain: "Brillo literario es evidente.", exampleSentenceLatam: "La genialidad literaria es evidente." },
      { word: "Canonical significance", spainVariant: "Significancia canónica", latamVariant: "Importancia canónica", phoneticSpain: "[sig-nee-fee-KAHN-see-ah kah-NO-nee-kah]", phoneticLatam: "[im-por-TAHN-see-ah kah-NO-nee-kah]", english: "Canonical significance", partOfSpeech: "phrase", exampleSentenceSpain: "Significancia canónica es clara.", exampleSentenceLatam: "La importancia canónica es clara." },
    ],
  },
  "c2-05-philosophical-discourse": {
    title: "Philosophical Discourse & Abstract Thought",
    description: "Master abstract thought, philosophical argumentation, and complex ideation",
    vocabulary: [
      { word: "Existential inquiry", spainVariant: "Investigación existencial", latamVariant: "Investigación existencial", phoneticSpain: "[in-ves-tee-gah-see-OHN eg-sis-ten-see-AHL]", phoneticLatam: "[in-ves-tee-gah-see-OHN eg-sis-ten-see-AHL]", english: "Existential inquiry", partOfSpeech: "phrase", exampleSentenceSpain: "Investigación existencial es profunda.", exampleSentenceLatam: "La investigación existencial es profunda." },
      { word: "Epistemological reflection", spainVariant: "Reflexión epistemológica", latamVariant: "Reflexión epistemológica", phoneticSpain: "[reh-fleks-ee-OHN eh-pis-teh-mo-LO-hee-kah]", phoneticLatam: "[reh-fleks-ee-OHN eh-pis-teh-mo-LO-hee-kah]", english: "Epistemological reflection", partOfSpeech: "phrase", exampleSentenceSpain: "Reflexión epistemológica es compleja.", exampleSentenceLatam: "La reflexión epistemológica es compleja." },
      { word: "Metaphysical consideration", spainVariant: "Consideración metafísica", latamVariant: "Consideración metafísica", phoneticSpain: "[kon-see-deh-rah-see-OHN meh-tah-FEE-see-kah]", phoneticLatam: "[kon-see-deh-rah-see-OHN meh-tah-FEE-see-kah]", english: "Metaphysical consideration", partOfSpeech: "phrase", exampleSentenceSpain: "Consideración metafísica es profunda.", exampleSentenceLatam: "La consideración metafísica es profunda." },
      { word: "Ontological inquiry", spainVariant: "Investigación ontológica", latamVariant: "Investigación ontológica", phoneticSpain: "[in-ves-tee-gah-see-OHN on-to-LO-hee-kah]", phoneticLatam: "[in-ves-tee-gah-see-OHN on-to-LO-hee-kah]", english: "Ontological inquiry", partOfSpeech: "phrase", exampleSentenceSpain: "Investigación ontológica es rigurosa.", exampleSentenceLatam: "La investigación ontológica es rigurosa." },
      { word: "Dialectical reasoning", spainVariant: "Razonamiento dialéctico", latamVariant: "Razonamiento dialéctico", phoneticSpain: "[rah-zo-nah-mee-EHN-to dee-ah-LEK-tee-ko]", phoneticLatam: "[rah-zo-nah-mee-EHN-to dee-ah-LEK-tee-ko]", english: "Dialectical reasoning", partOfSpeech: "phrase", exampleSentenceSpain: "Razonamiento dialéctico es sofisticado.", exampleSentenceLatam: "El razonamiento dialéctico es sofisticado." },
      { word: "Hermeneutic spiral", spainVariant: "Espiral hermenéutica", latamVariant: "Espiral hermenéutica", phoneticSpain: "[es-pee-RAHL er-meh-NOY-tee-kah]", phoneticLatam: "[es-pee-RAHL er-meh-NOY-tee-kah]", english: "Hermeneutic spiral", partOfSpeech: "phrase", exampleSentenceSpain: "Espiral hermenéutica es profunda.", exampleSentenceLatam: "La espiral hermenéutica es profunda." },
      { word: "Phenomenological analysis", spainVariant: "Análisis fenomenológico", latamVariant: "Análisis fenomenológico", phoneticSpain: "[ah-NAH-lee-sis feh-no-meh-no-LO-hee-ko]", phoneticLatam: "[ah-NAH-lee-sis feh-no-meh-no-LO-hee-ko]", english: "Phenomenological analysis", partOfSpeech: "phrase", exampleSentenceSpain: "Análisis fenomenológico es riguroso.", exampleSentenceLatam: "El análisis fenomenológico es riguroso." },
      { word: "Abstract conceptualization", spainVariant: "Conceptualización abstracta", latamVariant: "Conceptualización abstracta", phoneticSpain: "[kon-sep-too-ah-lee-sah-see-OHN abs-TRAHK-tah]", phoneticLatam: "[kon-sep-too-ah-lee-sah-see-OHN abs-TRAHK-tah]", english: "Abstract conceptualization", partOfSpeech: "phrase", exampleSentenceSpain: "Conceptualización abstracta es compleja.", exampleSentenceLatam: "La conceptualización abstracta es compleja." },
      { word: "Logical deduction", spainVariant: "Deducción lógica", latamVariant: "Deducción lógica", phoneticSpain: "[deh-dook-see-OHN LO-hee-kah]", phoneticLatam: "[deh-dook-see-OHN LO-hee-kah]", english: "Logical deduction", partOfSpeech: "phrase", exampleSentenceSpain: "Deducción lógica es rigurosa.", exampleSentenceLatam: "La deducción lógica es rigurosa." },
      { word: "Synthetic reasoning", spainVariant: "Razonamiento sintético", latamVariant: "Razonamiento sintético", phoneticSpain: "[rah-zo-nah-mee-EHN-to sin-TEH-tee-ko]", phoneticLatam: "[rah-zo-nah-mee-EHN-to sin-TEH-tee-ko]", english: "Synthetic reasoning", partOfSpeech: "phrase", exampleSentenceSpain: "Razonamiento sintético es poderoso.", exampleSentenceLatam: "El razonamiento sintético es poderoso." },
      { word: "Axiological framework", spainVariant: "Marco axiológico", latamVariant: "Marco axiológico", phoneticSpain: "[MAR-ko ahk-see-o-LO-hee-ko]", phoneticLatam: "[MAR-ko ahk-see-o-LO-hee-ko]", english: "Axiological framework", partOfSpeech: "phrase", exampleSentenceSpain: "Marco axiológico es fundamental.", exampleSentenceLatam: "El marco axiológico es fundamental." },
      { word: "Transcendental ideation", spainVariant: "Ideación trascendental", latamVariant: "Ideación trascendental", phoneticSpain: "[i-deh-ah-see-OHN tras-sen-den-TAHL]", phoneticLatam: "[i-deh-ah-see-OHN tras-sen-den-TAHL]", english: "Transcendental ideation", partOfSpeech: "phrase", exampleSentenceSpain: "Ideación trascendental es profunda.", exampleSentenceLatam: "La ideación trascendental es profunda." },
      { word: "Critical philosophy", spainVariant: "Filosofía crítica", latamVariant: "Filosofía crítica", phoneticSpain: "[fee-lo-so-FEE-ah KREE-tee-kah]", phoneticLatam: "[fee-lo-so-FEE-ah KREE-tee-kah]", english: "Critical philosophy", partOfSpeech: "phrase", exampleSentenceSpain: "Filosofía crítica es rigurosa.", exampleSentenceLatam: "La filosofía crítica es rigurosa." },
      { word: "Speculative thought", spainVariant: "Pensamiento especulativo", latamVariant: "Pensamiento especulativo", phoneticSpain: "[pen-sah-mee-EHN-to es-pek-oo-lah-TEE-vo]", phoneticLatam: "[pen-sah-mee-EHN-to es-pek-oo-lah-TEE-vo]", english: "Speculative thought", partOfSpeech: "phrase", exampleSentenceSpain: "Pensamiento especulativo es valioso.", exampleSentenceLatam: "El pensamiento especulativo es valioso." },
      { word: "Intellectual rigor", spainVariant: "Rigor intelectual", latamVariant: "Rigor intelectual", phoneticSpain: "[ree-GOR in-teh-lek-too-AHL]", phoneticLatam: "[ree-GOR in-teh-lek-too-AHL]", english: "Intellectual rigor", partOfSpeech: "phrase", exampleSentenceSpain: "Rigor intelectual es admirado.", exampleSentenceLatam: "El rigor intelectual es admirado." },
      { word: "Conceptual coherence", spainVariant: "Coherencia conceptual", latamVariant: "Coherencia conceptual", phoneticSpain: "[ko-eh-REN-see-ah kon-sep-too-AHL]", phoneticLatam: "[ko-eh-REN-see-ah kon-sep-too-AHL]", english: "Conceptual coherence", partOfSpeech: "phrase", exampleSentenceSpain: "Coherencia conceptual es esencial.", exampleSentenceLatam: "La coherencia conceptual es esencial." },
      { word: "Theoretical foundation", spainVariant: "Fundamento teórico", latamVariant: "Fundamento teórico", phoneticSpain: "[fun-dah-MEN-to teh-O-ree-ko]", phoneticLatam: "[fun-dah-MEN-to teh-O-ree-ko]", english: "Theoretical foundation", partOfSpeech: "phrase", exampleSentenceSpain: "Fundamento teórico es sólido.", exampleSentenceLatam: "El fundamento teórico es sólido." },
      { word: "Intellectual discourse", spainVariant: "Discurso intelectual", latamVariant: "Discurso intelectual", phoneticSpain: "[dis-KUR-so in-teh-lek-too-AHL]", phoneticLatam: "[dis-KUR-so in-teh-lek-too-AHL]", english: "Intellectual discourse", partOfSpeech: "phrase", exampleSentenceSpain: "Discurso intelectual es elevado.", exampleSentenceLatam: "El discurso intelectual es elevado." },
    ],
  },
};

function buildC2Lesson(slug: string): LessonData {
  const lessonDef = C2_LESSONS[slug as keyof typeof C2_LESSONS];
  if (!lessonDef) throw new Error(`C2 lesson ${slug} not found`);

  const order = parseInt(slug.split("-")[1]) || 1;
  const grammarSection: GrammarItem[] = [
    {
      title: "Native Mastery & Complete Control",
      spainContent: `C2 is native-like proficiency. Complete mastery of all Spanish structures across all registers and styles.`,
      latamContent: `C2 in Mexican/Latin American Spanish includes mastery of all regional variations, dialectal features, and cultural communication patterns.`,
      note: "C2 is indistinguishable from native speaker ability.",
    },
  ];

  const dialogues: DialogueScenario[] = Array.from({ length: 6 }, (_, i) => ({
    id: `dialogue-${i + 1}`,
    title: `${lessonDef.title} - Scene ${i + 1}`,
    region: i < 3 ? "SPAIN" : "LATAM",
    setting: `Professional/academic setting for ${lessonDef.title}`,
    lines: [
      { speaker: "Speaker A", text: lessonDef.vocabulary[i]?.exampleSentenceSpain || `Opening dialogue ${i + 1}`, region: i < 3 ? "SPAIN" : "LATAM", setting: `Professional setting` },
      { speaker: "Speaker B", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceLatam || `Response ${i + 1}`, region: i < 3 ? "SPAIN" : "LATAM", setting: `Professional setting` },
    ],
  }));

  const quiz: QuizQuestion[] = [
    {
      questionId: "q1",
      type: "multiple-choice",
      questionText: `What defines C2 proficiency in Spanish?`,
      options: ["Advanced intermediate", "Native-like mastery and complete control", "Conversational ability", "Business Spanish"],
      correctAnswer: "Native-like mastery and complete control",
      explanation: "C2 represents native-like proficiency with complete control of all linguistic levels and cultural contexts.",
    },
    {
      questionId: "q2",
      type: "multiple-choice",
      questionText: `${lessonDef.title} at C2 requires understanding of what?`,
      options: ["Basic vocabulary", "Complex nuance, cultural depth, and sophisticated argumentation", "Conversational phrases", "Common idioms"],
      correctAnswer: "Complex nuance, cultural depth, and sophisticated argumentation",
      explanation: "C2 mastery requires understanding beyond language—it includes philosophy, aesthetics, and profound cultural knowledge.",
    },
  ];

  const flashcards: FlashcardItem[] = lessonDef.vocabulary.map((v, idx) => ({
    id: `fc-${slug}-${idx + 1}`,
    frontSpain: v.spainVariant,
    frontLatam: v.latamVariant,
    backEnglish: v.english,
    variantDifferenceNote: v.spainVariant !== v.latamVariant ? `Spain: "${v.spainVariant}", LATAM: "${v.latamVariant}"` : "Universal",
    exampleSentenceSpain: v.exampleSentenceSpain || "",
    exampleSentenceLatam: v.exampleSentenceLatam || "",
    partOfSpeech: v.partOfSpeech,
  }));

  return {
    id: `lesson-${slug}`,
    slug,
    title: lessonDef.title,
    description: lessonDef.description,
    level: "C2",
    difficulty: "MASTERY",
    order,
    imageUrl: null,
    durationMinutes: 45,
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
      example: v.exampleSentenceLatam || v.exampleSentenceSpain,
    })),
    grammarJson: grammarSection.map((g) => ({
      title: g.title,
      content: `${g.spainContent} | ${g.latamContent}`,
    })),
    content: `# ${lessonDef.title}\n\n${lessonDef.description}\n\nAt C2, this is native-level understanding. You don't just speak Spanish—you think in Spanish at the highest intellectual and cultural level.`,
  };
}

export function generateC2Lessons(): LessonData[] {
  return Object.keys(C2_LESSONS).map((slug) => buildC2Lesson(slug));
}