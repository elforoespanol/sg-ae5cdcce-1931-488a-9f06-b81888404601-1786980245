import type { LessonData, RegionalVocabItem, GrammarItem, DialogueScenario, QuizQuestion, FlashcardItem } from "./lessons-data";

const C2_LESSONS = {
  "c2-01-mastery-advanced": {
    title: "Mastery: Advanced Nuance",
    description: "The pinnacle of proficiency—expressing complexity with elegance",
    vocabulary: [
      { word: "It could be argued", spainVariant: "Se podría sostener", latamVariant: "Podría argumentarse", phoneticSpain: "[seh po-DREE-ah sos-teh-NER]", phoneticLatam: "[po-DREE-ah ar-goo-men-TAHR-seh]", english: "It could be argued", partOfSpeech: "phrase", exampleSentenceSpain: "Se podría sostener que...", exampleSentenceLatam: "Podría argumentarse que..." },
      { word: "This presupposes", spainVariant: "Esto presupone", latamVariant: "Esto asume", phoneticSpain: "[ES-to preh-soo-PO-neh]", phoneticLatam: "[ES-to ah-SOO-meh]", english: "This presupposes", partOfSpeech: "verb", exampleSentenceSpain: "Esto presupone una cierta comprensión.", exampleSentenceLatam: "Esto asume que los lectores comprendan." },
      { word: "The nuance here", spainVariant: "El matiz aquí", latamVariant: "El detalle importante", phoneticSpain: "[el mah-TEES ah-KEE]", phoneticLatam: "[el deh-TAH-yeh im-por-TAHN-teh]", english: "The nuance here", partOfSpeech: "phrase", exampleSentenceSpain: "El matiz aquí es fundamental.", exampleSentenceLatam: "El detalle importante es que..." },
      { word: "To elaborate further", spainVariant: "Para elaborar más", latamVariant: "Para profundizar", phoneticSpain: "[PAH-rah eh-lah-bo-RAHR MAHS]", phoneticLatam: "[PAH-rah pro-foon-dee-SAHR]", english: "To elaborate further", partOfSpeech: "phrase", exampleSentenceSpain: "Para elaborar más sobre este punto...", exampleSentenceLatam: "Para profundizar en esto..." },
      { word: "Conversely", spainVariant: "Por el contrario", latamVariant: "En contraste", phoneticSpain: "[por el kon-TRAHR-ee-o]", phoneticLatam: "[en kon-TRAHS-teh]", english: "Conversely", partOfSpeech: "discourse marker", exampleSentenceSpain: "Por el contrario, algunos argumentarían que...", exampleSentenceLatam: "En contraste, la evidencia sugiere..." },
      { word: "The implications extend to", spainVariant: "Las implicaciones se extienden a", latamVariant: "Las consecuencias abarcan", phoneticSpain: "[las im-plee-kah-see-OH-nes seh eks-tee-EHN-den ah]", phoneticLatam: "[las kon-seh-KWEN-see-ahs ah-BAR-kahn]", english: "The implications extend to", partOfSpeech: "phrase", exampleSentenceSpain: "Las implicaciones se extienden a múltiples áreas.", exampleSentenceLatam: "Las consecuencias abarcan aspectos económicos y sociales." },
      { word: "To reconcile these perspectives", spainVariant: "Para reconciliar estos puntos de vista", latamVariant: "Para integrar estas perspectivas", phoneticSpain: "[PAH-rah reh-kon-see-lee-AHR ES-tos POON-tos deh VEES-tah]", phoneticLatam: "[PAH-rah in-teh-GRAHR ES-tas per-spek-TEE-vahs]", english: "To reconcile these", partOfSpeech: "phrase", exampleSentenceSpain: "Para reconciliar estos puntos de vista, debemos...", exampleSentenceLatam: "Para integrar estas perspectivas..." },
      { word: "The crux of the matter", spainVariant: "La esencia del asunto", latamVariant: "El punto central", phoneticSpain: "[lah eh-SEN-see-ah del ah-SOON-to]", phoneticLatam: "[el POON-to sen-TRAHL]", english: "The crux of the matter", partOfSpeech: "phrase", exampleSentenceSpain: "La esencia del asunto es que...", exampleSentenceLatam: "El punto central es el equilibrio." },
      { word: "This begs the question", spainVariant: "Esto plantea la pregunta", latamVariant: "Esto nos lleva a cuestionarse", phoneticSpain: "[ES-to plan-TEH-ah lah preh-GOON-tah]", phoneticLatam: "[ES-to nos YEH-vah ah kwes-tee-o-NAHR-seh]", english: "This begs the question", partOfSpeech: "phrase", exampleSentenceSpain: "Esto plantea la pregunta fundamental de...", exampleSentenceLatam: "Esto nos lleva a cuestionarse la validez de..." },
      { word: "Ostensibly", spainVariant: "Aparentemente", latamVariant: "Superficialmente", phoneticSpain: "[ah-pah-ren-TEH-men-teh]", phoneticLatam: "[soo-per-fee-see-AHL-men-teh]", english: "Ostensibly", partOfSpeech: "adverb", exampleSentenceSpain: "Aparentemente, todo funciona bien.", exampleSentenceLatam: "Superficialmente, parece viable." },
    ],
  },
  "c2-02-stylistic-sophistication": {
    title: "Stylistic Sophistication",
    description: "Master the art of expressing yourself with precision and beauty",
    vocabulary: [
      { word: "One might posit", spainVariant: "Se podría postular", latamVariant: "Se podría plantear", phoneticSpain: "[seh po-DREE-ah pos-too-LAHR]", phoneticLatam: "[seh po-DREE-ah plan-teh-AHR]", english: "One might posit", partOfSpeech: "phrase", exampleSentenceSpain: "Se podría postular que...", exampleSentenceLatam: "Se podría plantear que existe una relación." },
      { word: "The efficacy of", spainVariant: "La eficacia de", latamVariant: "La efectividad de", phoneticSpain: "[lah eh-fee-KAH-see-ah deh]", phoneticLatam: "[lah eh-fek-tee-vee-DAHD deh]", english: "The efficacy of", partOfSpeech: "phrase", exampleSentenceSpain: "La eficacia de este enfoque es cuestionable.", exampleSentenceLatam: "La efectividad de la medida aún se evalúa." },
      { word: "To perpetuate", spainVariant: "Para perpetuar", latamVariant: "Para mantener", phoneticSpain: "[PAH-rah per-peh-too-AHR]", phoneticLatam: "[PAH-rah man-teh-NER]", english: "To perpetuate", partOfSpeech: "verb", exampleSentenceSpain: "No debemos perpetuar estos mitos.", exampleSentenceLatam: "Esto perpetúa un ciclo destructivo." },
      { word: "The quintessential", spainVariant: "Lo quintaesencial", latamVariant: "La esencia misma de", phoneticSpain: "[lo kwin-tah-eh-sen-see-AHL]", phoneticLatam: "[lah eh-SEN-see-ah MEES-mah deh]", english: "The quintessential", partOfSpeech: "adjective", exampleSentenceSpain: "Esto es lo quintaesencial del problema.", exampleSentenceLatam: "La esencia misma de la cuestión es la equidad." },
      { word: "To elucidate", spainVariant: "Para elucidar", latamVariant: "Para explicar", phoneticSpain: "[PAH-rah eh-loo-see-DAHR]", phoneticLatam: "[PAH-rah eks-plee-KAHR]", english: "To elucidate", partOfSpeech: "verb", exampleSentenceSpain: "Permíteme elucidar este punto.", exampleSentenceLatam: "Para elucidar, necesitamos datos adicionales." },
      { word: "The veritable", spainVariant: "El verdadero", latamVariant: "El auténtico", phoneticSpain: "[el ver-dah-DEH-ro]", phoneticLatam: "[el ow-TEN-tee-ko]", english: "The veritable", partOfSpeech: "adjective", exampleSentenceSpain: "Un verdadero desafío para la sociedad.", exampleSentenceLatam: "El auténtico problema radica en la estructura." },
      { word: "To ameliorate", spainVariant: "Para mejorar", latamVariant: "Para mitigar", phoneticSpain: "[PAH-rah meh-ho-RAHR]", phoneticLatam: "[PAH-rah mee-tee-GAHR]", english: "To ameliorate", partOfSpeech: "verb", exampleSentenceSpain: "Esto ayuda a ameliorar la situación.", exampleSentenceLatam: "Estas medidas pueden ameliorar las condiciones." },
      { word: "The antithesis of", spainVariant: "La antítesis de", latamVariant: "Lo opuesto a", phoneticSpain: "[lah ahn-TEE-teh-sis deh]", phoneticLatam: "[lo o-PWES-to ah]", english: "The antithesis of", partOfSpeech: "phrase", exampleSentenceSpain: "Esto es la antítesis de lo que creemos.", exampleSentenceLatam: "Lo opuesto a la justicia es la corrupción." },
      { word: "To obfuscate", spainVariant: "Para ofuscar", latamVariant: "Para confundir", phoneticSpain: "[PAH-rah o-foos-KAHR]", phoneticLatam: "[PAH-rah kon-foon-DEER]", english: "To obfuscate", partOfSpeech: "verb", exampleSentenceSpain: "No pretendo ofuscar el asunto.", exampleSentenceLatam: "Esto no debería confundir los hechos." },
      { word: "The nexus between", spainVariant: "El nexo entre", latamVariant: "La conexión entre", phoneticSpain: "[el NEK-so EN-treh]", phoneticLatam: "[lah ko-nek-see-OHN EN-treh]", english: "The nexus between", partOfSpeech: "phrase", exampleSentenceSpain: "El nexo entre estos eventos es evidente.", exampleSentenceLatam: "La conexión entre la educación y la movilidad social es clara." },
    ],
  },
  "c2-03-cultural-mastery": {
    title: "Cultural Mastery & Deep Understanding",
    description: "Understand Spanish culture at its deepest level",
    vocabulary: [
      { word: "Mexican cultural values", spainVariant: "Los valores culturales mexicanos", latamVariant: "Los valores mexicanos", phoneticSpain: "[los vah-LO-res kool-too-RAH-les mek-see-KAH-nos]", phoneticLatam: "[los vah-LO-res mek-see-KAH-nos]", english: "Mexican cultural values", partOfSpeech: "phrase", exampleSentenceSpain: "Los valores culturales mexicanos enfatizan la familia.", exampleSentenceLatam: "Los valores mexicanos incluyen el respeto y la lealtad." },
      { word: "The concept of compadrazgo", spainVariant: "El concepto de compadrazgo", latamVariant: "El compadrazgo mexicano", phoneticSpain: "[el kon-SEP-to deh ko-mah-DRAH-go]", phoneticLatam: "[el ko-mah-DRAH-go mek-see-KAH-no]", english: "Compadrazgo (godparent system)", partOfSpeech: "noun", exampleSentenceSpain: "El compadrazgo es fundamental en la cultura mexicana.", exampleSentenceLatam: "El compadrazgo crea vínculos familiares extendidos." },
      { word: "The importance of mañana", spainVariant: "La importancia de mañana", latamVariant: "El concepto de mañana", phoneticSpain: "[lah im-por-TAHN-see-ah deh 'mah-NYAH-nah']", phoneticLatam: "[el kon-SEP-to deh 'mah-NYAH-nah']", english: "The concept of mañana", partOfSpeech: "phrase", exampleSentenceSpain: "Mañana representa una actitud hacia el tiempo y la vida.", exampleSentenceLatam: "El concepto de mañana refleja una visión distinta del tiempo." },
      { word: "The significance of Día de Muertos", spainVariant: "La significancia del Día de Muertos", latamVariant: "Día de Muertos en México", phoneticSpain: "[lah sig-nee-fee-KAHN-see-ah del 'DEE-ah deh MOO-er-tos']", phoneticLatam: "['DEE-ah deh MOO-er-tos' en MEH-hee-ko]", english: "Day of the Dead significance", partOfSpeech: "phrase", exampleSentenceSpain: "El Día de Muertos es una celebración profundamente simbólica.", exampleSentenceLatam: "El Día de Muertos refleja la relación única de México con la muerte." },
      { word: "Mexican attitude toward death", spainVariant: "La actitud mexicana hacia la muerte", latamVariant: "Cómo México ve la muerte", phoneticSpain: "[lah ak-tee-TOOD mek-see-KAH-nah AH-see-ah lah moo-ER-teh]", phoneticLatam: "[KO-mo MEH-hee-ko veh lah moo-ER-teh]", english: "Mexican attitude toward death", partOfSpeech: "phrase", exampleSentenceSpain: "La actitud mexicana hacia la muerte es única en el mundo.", exampleSentenceLatam: "Cómo México ve la muerte es diferente al resto de Occidente." },
      { word: "The concept of sobremesa", spainVariant: "El concepto de sobremesa", latamVariant: "La sobremesa española", phoneticSpain: "[el kon-SEP-to deh 'so-breh-MEH-sah']", phoneticLatam: "[lah 'so-breh-MEH-sah' es-pahn-YO-lah]", english: "Sobremesa (lingering after meals)", partOfSpeech: "noun", exampleSentenceSpain: "La sobremesa es el momento más importante de la comida.", exampleSentenceLatam: "La sobremesa representa el valor que España da a la conversación." },
      { word: "Spanish regional pride", spainVariant: "El orgullo regional español", latamVariant: "La identidad regional en España", phoneticSpain: "[el OR-goo-yo reh-hee-o-NAHL es-pahn-YOL]", phoneticLatam: "[lah i-den-tee-DAHD reh-hee-o-NAHL en es-PAHN-yah]", english: "Spanish regional pride", partOfSpeech: "phrase", exampleSentenceSpain: "El orgullo regional español es muy fuerte.", exampleSentenceLatam: "La identidad regional es central en la política española." },
      { word: "The role of tertulias", spainVariant: "El papel de las tertulias", latamVariant: "Las tertulias españolas", phoneticSpain: "[el pah-PEL deh lahs 'ter-too-LEE-ahs']", phoneticLatam: "[lahs 'ter-too-LEE-ahs' es-pahn-YO-lahs]", english: "Tertulias (discussion groups)", partOfSpeech: "phrase", exampleSentenceSpain: "Las tertulias son importantes en la cultura intelectual española.", exampleSentenceLatam: "Las tertulias son una tradición de debate intelectual." },
      { word: "Mexican family structure", spainVariant: "La estructura familiar mexicana", latamVariant: "La familia extendida mexicana", phoneticSpain: "[lah es-trook-TOO-rah fah-mee-lee-AHR mek-see-KAH-nah]", phoneticLatam: "[lah fah-MEE-lee-ah eks-ten-DEE-dah mek-see-KAH-nah]", english: "Mexican family structure", partOfSpeech: "phrase", exampleSentenceSpain: "La estructura familiar mexicana es extendida y conectada.", exampleSentenceLatam: "La familia extendida mexicana es el centro de la vida social." },
      { word: "The concept of honor", spainVariant: "El concepto de honor en la cultura española", latamVariant: "La importancia del honor en Hispanoamérica", phoneticSpain: "[el kon-SEP-to deh 'o-NOR' en lah kool-TOO-rah es-pahn-YO-lah]", phoneticLatam: "[lah im-por-TAHN-see-ah del 'o-NOR' en his-pah-no-ah-MEH-ree-kah]", english: "The concept of honor", partOfSpeech: "phrase", exampleSentenceSpain: "El concepto de honor es fundamental en la mentalidad hispánica.", exampleSentenceLatam: "La importancia del honor sigue siendo central en la cultura." },
    ],
  },
  "c2-04-literary-mastery": {
    title: "Literary Mastery & Canonical Works",
    description: "Understand and appreciate Spanish literature at the highest level",
    vocabulary: [
      { word: "García Márquez's Magical Realism", spainVariant: "El Realismo Mágico de García Márquez", latamVariant: "El estilo de García Márquez", phoneticSpain: "[el 'Reh-ah-LEES-mo MAH-hee-ko' deh Gar-SEE-ah MAHR-kess]", phoneticLatam: "[el es-TEE-lo deh Gar-SEE-ah MAHR-kess]", english: "García Márquez's Magical Realism", partOfSpeech: "phrase", exampleSentenceSpain: "El Realismo Mágico de García Márquez revolucionó la literatura latinoamericana.", exampleSentenceLatam: "El estilo de García Márquez mezcla lo real con lo fantástico." },
      { word: "Cervantes' Don Quixote", spainVariant: "El Don Quijote de Cervantes", latamVariant: "La novela más importante de España", phoneticSpain: "[el 'Don Key-HO-teh' deh Ser-VAHN-tes]", phoneticLatam: "[lah no-VEH-lah MAHS im-por-TAHN-teh deh es-PAHN-yah]", english: "Cervantes' Don Quixote", partOfSpeech: "phrase", exampleSentenceSpain: "El Don Quijote es considerado la primera novela moderna.", exampleSentenceLatam: "La novela de Cervantes es un clásico universal." },
      { word: "Lorca's use of imagery", spainVariant: "El uso de imágenes de Lorca", latamVariant: "La poesía visual de Lorca", phoneticSpain: "[el OO-so deh ee-MAH-heh-nes deh LOR-kah]", phoneticLatam: "[lah po-eh-SEE-ah vee-ZOO-ahl deh LOR-kah]", english: "Lorca's imagery", partOfSpeech: "phrase", exampleSentenceSpain: "El uso de imágenes de Lorca es profundamente visual y sensual.", exampleSentenceLatam: "La poesía visual de Lorca evoca la sangre y la pasión." },
      { word: "Borges' philosophical fiction", spainVariant: "La ficción filosófica de Borges", latamVariant: "El pensamiento de Borges en la ficción", phoneticSpain: "[lah feek-see-OHN fee-lo-SO-fee-kah deh BOR-hes]", phoneticLatam: "[el pen-sah-mee-EHN-to deh BOR-hes en lah feek-see-OHN]", english: "Borges' philosophical fiction", partOfSpeech: "phrase", exampleSentenceSpain: "La ficción filosófica de Borges explora la naturaleza del tiempo y la identidad.", exampleSentenceLatam: "El pensamiento de Borges transforma la ficción en filosofía." },
      { word: "Octavio Paz's philosophical poetry", spainVariant: "La poesía filosófica de Octavio Paz", latamVariant: "El pensamiento de Octavio Paz", phoneticSpain: "[lah po-eh-SEE-ah fee-lo-SO-fee-kah deh Ok-TAH-vee-o PAHS]", phoneticLatam: "[el pen-sah-mee-EHN-to deh Ok-TAH-vee-o PAHS]", english: "Octavio Paz's philosophical poetry", partOfSpeech: "phrase", exampleSentenceSpain: "La poesía filosófica de Octavio Paz examina la identidad mexicana.", exampleSentenceLatam: "El pensamiento de Octavio Paz es profundamente ensayístico." },
      { word: "The theme of solitude", spainVariant: "El tema de soledad en la literatura española", latamVariant: "La soledad como tema central", phoneticSpain: "[el TEH-mah deh so-leh-DAHD en lah lee-teh-RAH-too-rah es-pahn-YO-lah]", phoneticLatam: "[lah so-leh-DAHD KO-mo TEH-mah sen-TRAHL]", english: "The theme of solitude", partOfSpeech: "phrase", exampleSentenceSpain: "El tema de soledad es recurrente en la literatura española.", exampleSentenceLatam: "La soledad es un tema central en la literatura de Cortázar." },
      { word: "The symbolism of death", spainVariant: "El simbolismo de la muerte en la literatura", latamVariant: "La muerte como símbolo literario", phoneticSpain: "[el sim-bo-LEES-mo deh lah moo-ER-teh en lah lee-teh-RAH-too-rah]", phoneticLatam: "[lah moo-ER-teh KO-mo SEE-mo-lo lee-teh-RAH-ree-o]", english: "The symbolism of death", partOfSpeech: "phrase", exampleSentenceSpain: "El simbolismo de la muerte en la literatura española es único.", exampleSentenceLatam: "La muerte como símbolo aparece constantemente en la literatura mexicana." },
      { word: "Laura Esquivel's narrative style", spainVariant: "El estilo narrativo de Laura Esquivel", latamVariant: "La prosa de Laura Esquivel", phoneticSpain: "[el es-TEE-lo nar-rah-TEE-vo deh LAH-oo-rah es-kee-VEL]", phoneticLatam: "[lah PRO-sah deh LAH-oo-rah es-kee-VEL]", english: "Laura Esquivel's narrative", partOfSpeech: "phrase", exampleSentenceSpain: "El estilo narrativo de Laura Esquivel mezcla lo culinario con lo emocional.", exampleSentenceLatam: "La prosa de Laura Esquivel es lírica y sensorial." },
      { word: "Influence of indigenous mythology", spainVariant: "La influencia de la mitología indígena", latamVariant: "Los mitos prehispánicos en la literatura", phoneticSpain: "[lah in-floo-EHN-see-ah deh lah mee-to-lo-HEE-ah in-DEE-heh-nah]", phoneticLatam: "[los MEE-tos preh-ees-PAH-nee-kos en lah lee-teh-RAH-too-rah]", english: "Influence of indigenous mythology", partOfSpeech: "phrase", exampleSentenceSpain: "La influencia de la mitología indígena es evidente en autores mexicanos.", exampleSentenceLatam: "Los mitos prehispánicos dan profundidad a la narrativa moderna." },
      { word: "The power of language", spainVariant: "El poder del lenguaje en la literatura", latamVariant: "Cómo el idioma crea sentido", phoneticSpain: "[el po-DER del len-GWAH-heh en lah lee-teh-RAH-too-rah]", phoneticLatam: "[KO-mo el ee-dee-O-mah KREH-ah sen-TEE-do]", english: "The power of language", partOfSpeech: "phrase", exampleSentenceSpain: "El poder del lenguaje en la literatura hispánica es transformador.", exampleSentenceLatam: "Cómo el idioma crea sentido es la esencia del arte literario." },
    ],
  },
  "c2-05-philosophical-discourse": {
    title: "Philosophical Discourse & Metaphysics",
    description: "Engage in abstract philosophical discussions in Spanish",
    vocabulary: [
      { word: "Metaphysical inquiry", spainVariant: "La indagación metafísica", latamVariant: "La investigación sobre la naturaleza del ser", phoneticSpain: "[lah in-dah-gah-see-OHN meh-tah-FEE-see-kah]", phoneticLatam: "[lah in-ves-tee-gah-see-OHN SO-breh lah nah-too-rah-LEH-sah del SER]", english: "Metaphysical inquiry", partOfSpeech: "noun", exampleSentenceSpain: "La indagación metafísica es central en la filosofía occidental.", exampleSentenceLatam: "La investigación sobre la naturaleza del ser nos define como humanos." },
      { word: "Existential crisis", spainVariant: "La crisis existencial", latamVariant: "El conflicto existencial", phoneticSpain: "[lah KREE-sis ek-sis-ten-see-AHL]", phoneticLatam: "[el kon-FLIK-to ek-sis-ten-see-AHL]", english: "Existential crisis", partOfSpeech: "noun", exampleSentenceSpain: "La crisis existencial define a la generación moderna.", exampleSentenceLatam: "El conflicto existencial es tema recurrente en la literatura." },
      { word: "The nature of consciousness", spainVariant: "La naturaleza de la conciencia", latamVariant: "Qué es la consciencia", phoneticSpain: "[lah nah-too-rah-LEH-sah deh lah kon-see-EHN-see-ah]", phoneticLatam: "[keh es lah kon-see-EHN-see-ah]", english: "The nature of consciousness", partOfSpeech: "phrase", exampleSentenceSpain: "La naturaleza de la conciencia sigue siendo un misterio.", exampleSentenceLatam: "Qué es la consciencia es la pregunta fundamental de la filosofía." },
      { word: "The concept of identity", spainVariant: "El concepto de identidad", latamVariant: "Quiénes somos", phoneticSpain: "[el kon-SEP-to deh i-den-tee-DAHD]", phoneticLatam: "[kee-EH-nes SO-mos]", english: "The concept of identity", partOfSpeech: "phrase", exampleSentenceSpain: "El concepto de identidad es complejo y multifacético.", exampleSentenceLatam: "Quiénes somos es una pregunta que cada persona debe responder." },
      { word: "Free will vs determinism", spainVariant: "El libre albedrío versus el determinismo", latamVariant: "La libertad y el destino", phoneticSpain: "[el LEE-breh ahl-beh-DREE-o VER-sus el deh-ter-mee-NEES-mo]", phoneticLatam: "[lah lee-ber-TAHD ii el des-TEE-no]", english: "Free will vs determinism", partOfSpeech: "phrase", exampleSentenceSpain: "El libre albedrío versus el determinismo es un dilema eterno.", exampleSentenceLatam: "La libertad y el destino son conceptos en tensión constante." },
      { word: "The pursuit of meaning", spainVariant: "La búsqueda de sentido", latamVariant: "Encontrar propósito en la vida", phoneticSpain: "[lah BOOS-keh-dah deh sen-TEE-do]", phoneticLatam: "[en-kon-TRAHR pro-POH-see-to en lah VEE-dah]", english: "The pursuit of meaning", partOfSpeech: "phrase", exampleSentenceSpain: "La búsqueda de sentido es inherente a la experiencia humana.", exampleSentenceLatam: "Encontrar propósito en la vida es el objetivo existencial." },
      { word: "Aesthetic philosophy", spainVariant: "La filosofía estética", latamVariant: "Qué es la belleza", phoneticSpain: "[lah fee-lo-SO-fee-ah es-TEH-tee-kah]", phoneticLatam: "[keh es lah beh-YEH-sah]", english: "Aesthetic philosophy", partOfSpeech: "noun", exampleSentenceSpain: "La filosofía estética explora la naturaleza de la belleza.", exampleSentenceLatam: "Qué es la belleza sigue siendo debatido por filósofos." },
      { word: "Ethical dilemma", spainVariant: "El dilema ético", latamVariant: "El conflicto moral", phoneticSpain: "[el dee-LEH-mah EH-tee-ko]", phoneticLatam: "[el kon-FLIK-to mo-RAHL]", english: "Ethical dilemma", partOfSpeech: "noun", exampleSentenceSpain: "El dilema ético plantea cuestiones profundas sobre la moralidad.", exampleSentenceLatam: "El conflicto moral nos obliga a reflexionar sobre nuestros valores." },
      { word: "The limits of knowledge", spainVariant: "Los límites del conocimiento", latamVariant: "Qué podemos saber", phoneticSpain: "[los LEE-mee-tes del ko-no-see-mee-EHN-to]", phoneticLatam: "[keh po-DEH-mos sah-BER]", english: "The limits of knowledge", partOfSpeech: "phrase", exampleSentenceSpain: "Los límites del conocimiento humano son constantemente explorados.", exampleSentenceLatam: "Qué podemos saber es una pregunta epistemológica fundamental." },
      { word: "Ontological questions", spainVariant: "Las preguntas ontológicas", latamVariant: "La naturaleza del ser", phoneticSpain: "[las preh-GOON-tas on-to-lo-HEE-kas]", phoneticLatam: "[lah nah-too-rah-LEH-sah del SER]", english: "Ontological questions", partOfSpeech: "noun", exampleSentenceSpain: "Las preguntas ontológicas son el núcleo de la metafísica.", exampleSentenceLatam: "La naturaleza del ser es el tema central de la ontología." },
    ],
  },
  "c2-06-advanced-grammar": {
    title: "Advanced Grammar & Syntax Mastery",
    description: "Master the most complex grammatical structures in Spanish",
    vocabulary: [
      { word: "Subjunctive subordination", spainVariant: "La subordinación subjuntiva", latamVariant: "El uso avanzado del subjuntivo", phoneticSpain: "[lah sub-or-dee-nah-see-OHN sub-hoon-TEE-vah]", phoneticLatam: "[el OO-so ah-bahn-ZAH-do del sub-hoon-TEE-vo]", english: "Subjunctive subordination", partOfSpeech: "noun", exampleSentenceSpain: "La subordinación subjuntiva requiere comprensión profunda.", exampleSentenceLatam: "El uso avanzado del subjuntivo distingue a los hablantes fluidos." },
      { word: "Conditional clauses", spainVariant: "Las oraciones condicionales", latamVariant: "Las cláusulas condicionales", phoneticSpain: "[las o-rah-see-OH-nes kon-dee-see-o-NAH-les]", phoneticLatam: "[las KLAOW-soo-las kon-dee-see-o-NAH-les]", english: "Conditional clauses", partOfSpeech: "noun", exampleSentenceSpain: "Las oraciones condicionales expresan hipótesis y consecuencias.", exampleSentenceLatam: "Las cláusulas condicionales son esenciales para argumentación compleja." },
      { word: "Participial constructions", spainVariant: "Las construcciones participiales", latamVariant: "El uso del participio", phoneticSpain: "[las kons-trook-see-OH-nes par-tee-see-pee-AH-les]", phoneticLatam: "[el OO-so del par-TEE-see-pee-o]", english: "Participial constructions", partOfSpeech: "noun", exampleSentenceSpain: "Las construcciones participiales añaden elegancia al lenguaje.", exampleSentenceLatam: "El uso del participio es característico del español formal." },
      { word: "Nominalization", spainVariant: "La nominalización", latamVariant: "Convertir verbos en sustantivos", phoneticSpain: "[lah no-mee-nah-lee-ZAH-see-OHN]", phoneticLatam: "[kon-ver-TEER VER-bos en soos-tahn-TEE-vos]", english: "Nominalization", partOfSpeech: "noun", exampleSentenceSpain: "La nominalización permite expresar acciones como entidades.", exampleSentenceLatam: "Convertir verbos en sustantivos enriquece la expresión." },
      { word: "Clitic doubling", spainVariant: "El doblamiento de clíticos", latamVariant: "El uso de clíticos redundantes", phoneticSpain: "[el doo-blah-mee-EHN-to deh KLEE-tee-kos]", phoneticLatam: "[el OO-so deh KLEE-tee-kos reh-doon-DAHN-tes]", english: "Clitic doubling", partOfSpeech: "noun", exampleSentenceSpain: "El doblamiento de clíticos es común en español hablado.", exampleSentenceLatam: "El uso de clíticos redundantes añade énfasis al discurso." },
      { word: "Relative clauses", spainVariant: "Las oraciones relativas", latamVariant: "Las cláusulas relativas", phoneticSpain: "[las o-rah-see-OH-nes reh-lah-TEE-vas]", phoneticLatam: "[las KLAOW-soo-las reh-lah-TEE-vas]", english: "Relative clauses", partOfSpeech: "noun", exampleSentenceSpain: "Las oraciones relativas ofrecen múltiples posibilidades estructurales.", exampleSentenceLatam: "Las cláusulas relativas pueden ser restrictivas o no restrictivas." },
      { word: "Passive constructions", spainVariant: "Las construcciones pasivas", latamVariant: "La voz pasiva", phoneticSpain: "[las kons-trook-see-OH-nes pah-SEE-vas]", phoneticLatam: "[lah vos pah-SEE-vah]", english: "Passive constructions", partOfSpeech: "noun", exampleSentenceSpain: "Las construcciones pasivas son frecuentes en textos formales.", exampleSentenceLatam: "La voz pasiva añade distancia y objetividad al discurso." },
      { word: "Infinitive phrases", spainVariant: "Las frases infinitivas", latamVariant: "El uso del infinitivo", phoneticSpain: "[las FRÁ-ses in-fee-nee-TEE-vas]", phoneticLatam: "[el OO-so del in-fee-nee-TEE-vo]", english: "Infinitive phrases", partOfSpeech: "noun", exampleSentenceSpain: "Las frases infinitivas pueden actuar como sustantivos o complementos.", exampleSentenceLatam: "El uso del infinitivo es versátil en expresión compleja." },
      { word: "Gerundial constructions", spainVariant: "Las construcciones gerundiales", latamVariant: "El gerundio en oraciones complejas", phoneticSpain: "[las kons-trook-see-OH-nes heh-roon-dee-AH-les]", phoneticLatam: "[el heh-ROON-dee-o en o-rah-see-OH-nes KOM-pleh-has]", english: "Gerundial constructions", partOfSpeech: "noun", exampleSentenceSpain: "Las construcciones gerundiales expresan simultaneidad o causas.", exampleSentenceLatam: "El gerundio en oraciones complejas añade fluidez narrativa." },
      { word: "Mood and tense integration", spainVariant: "La integración de modo y tiempo", latamVariant: "Cómo interactúan el modo y el tiempo", phoneticSpain: "[lah in-teh-grah-see-OHN deh MO-do ii tee-EHM-po]", phoneticLatam: "[KO-mo in-teh-rak-TOO-ahn el MO-do ii el tee-EHM-po]", english: "Mood and tense integration", partOfSpeech: "phrase", exampleSentenceSpain: "La integración de modo y tiempo permite expresar matices sutiles.", exampleSentenceLatam: "Cómo interactúan el modo y el tiempo es clave para fluidez avanzada." },
    ],
  },
  "c2-07-rhetorical-mastery": {
    title: "Rhetorical Mastery & Persuasion",
    description: "Master advanced rhetoric and persuasive techniques in Spanish",
    vocabulary: [
      { word: "Rhetorical device", spainVariant: "El recurso retórico", latamVariant: "La técnica retórica", phoneticSpain: "[el reh-KOOR-so reh-TOH-ree-ko]", phoneticLatam: "[lah TEK-nee-kah reh-TOH-ree-kah]", english: "Rhetorical device", partOfSpeech: "noun", exampleSentenceSpain: "El recurso retórico amplifica el impacto del mensaje.", exampleSentenceLatam: "La técnica retórica es esencial para argumentación persuasiva." },
      { word: "Argumentative structure", spainVariant: "La estructura argumentativa", latamVariant: "El esquema de argumento", phoneticSpain: "[lah es-trook-TOO-rah ar-goo-men-tah-TEE-vah]", phoneticLatam: "[el es-KEH-mah deh ar-goo-MEN-to]", english: "Argumentative structure", partOfSpeech: "noun", exampleSentenceSpain: "La estructura argumentativa debe ser coherente y lógica.", exampleSentenceLatam: "El esquema de argumento determina la persuasión del texto." },
      { word: "Logical fallacy", spainVariant: "La falacia lógica", latamVariant: "El error de razonamiento", phoneticSpain: "[lah fah-LAH-see-ah LOH-hee-kah]", phoneticLatam: "[el eh-ROR deh rah-zo-nah-mee-EHN-to]", english: "Logical fallacy", partOfSpeech: "noun", exampleSentenceSpain: "La falacia lógica debilita un argumento sólido.", exampleSentenceLatam: "El error de razonamiento es un vicio en la lógica formal." },
      { word: "Persuasive appeal", spainVariant: "El llamamiento persuasivo", latamVariant: "La estrategia de convicción", phoneticSpain: "[el yah-mah-mee-EHN-to per-soo-ah-SEE-vo]", phoneticLatam: "[lah es-trah-TEH-hee-ah deh kon-VIK-see-on]", english: "Persuasive appeal", partOfSpeech: "noun", exampleSentenceSpain: "El llamamiento persuasivo apela a la emoción o la razón.", exampleSentenceLatam: "La estrategia de convicción requiere comprensión del público." },
      { word: "Metaphorical language", spainVariant: "El lenguaje metafórico", latamVariant: "La expresión simbólica", phoneticSpain: "[el len-GWAH-heh meh-tah-FOR-ee-ko]", phoneticLatam: "[lah eks-preh-see-OHN seem-BOH-lee-kah]", english: "Metaphorical language", partOfSpeech: "noun", exampleSentenceSpain: "El lenguaje metafórico enriquece la expresión literaria.", exampleSentenceLatam: "La expresión simbólica permite profundidad emocional." },
      { word: "Antithetical structure", spainVariant: "La estructura antitética", latamVariant: "El contraste entre ideas", phoneticSpain: "[lah es-trook-TOO-rah ahn-tee-TEH-tee-kah]", phoneticLatam: "[el KON-trahs-teh EN-treh ee-DEH-ahs]", english: "Antithetical structure", partOfSpeech: "noun", exampleSentenceSpain: "La estructura antitética crea impacto retórico potente.", exampleSentenceLatam: "El contraste entre ideas amplifica el significado." },
      { word: "Anaphora repetition", spainVariant: "La anáfora", latamVariant: "La repetición anafórica", phoneticSpain: "[lah ah-NAH-fo-rah]", phoneticLatam: "[lah reh-peh-tee-see-OHN ah-nah-FOR-ee-kah]", english: "Anaphora repetition", partOfSpeech: "noun", exampleSentenceSpain: "La anáfora crea ritmo y énfasis en el discurso.", exampleSentenceLatam: "La repetición anafórica es recurso poderoso en oratoria." },
      { word: "Parallelism in discourse", spainVariant: "El paralelismo en el discurso", latamVariant: "Las estructuras paralelas", phoneticSpain: "[el pah-rah-LEH-lis-mo en el dis-KOOR-so]", phoneticLatam: "[las es-trook-TOO-ras pah-rah-LEH-las]", english: "Parallelism in discourse", partOfSpeech: "phrase", exampleSentenceSpain: "El paralelismo en el discurso magnifica la coherencia.", exampleSentenceLatam: "Las estructuras paralelas crean belleza sintáctica." },
      { word: "Rhetorical question", spainVariant: "La pregunta retórica", latamVariant: "La interrogante retórica", phoneticSpain: "[lah preh-GOON-tah reh-TOH-ree-kah]", phoneticLatam: "[lah in-teh-rro-GAHN-teh reh-TOH-ree-kah]", english: "Rhetorical question", partOfSpeech: "noun", exampleSentenceSpain: "La pregunta retórica no busca respuesta sino reflexión.", exampleSentenceLatam: "La interrogante retórica invita a cuestionamiento profundo." },
      { word: "Persuasive narrative arc", spainVariant: "El arco narrativo persuasivo", latamVariant: "La estructura de la historia persuasiva", phoneticSpain: "[el AR-ko nar-rah-TEE-vo per-soo-ah-SEE-vo]", phoneticLatam: "[lah es-trook-TOO-rah deh lah ees-TOH-ree-ah per-soo-ah-SEE-vah]", english: "Persuasive narrative arc", partOfSpeech: "phrase", exampleSentenceSpain: "El arco narrativo persuasivo guía al lector hacia la conclusión.", exampleSentenceLatam: "La estructura de la historia persuasiva genera empatía y convicción." },
    ],
  },
  "c2-08-regional-dialects-advanced": {
    title: "Regional Dialects: Spain vs Latin America at C2",
    description: "Master the deepest regional differences between Spanish varieties",
    vocabulary: [
      { word: "Castilian phonetics", spainVariant: "La fonética castellana", latamVariant: "El acento de Castilla", phoneticSpain: "[lah fo-NEH-tee-kah kas-teh-YAH-nah]", phoneticLatam: "[el AHK-sen-to deh kas-TEE-yah]", english: "Castilian phonetics", partOfSpeech: "noun", exampleSentenceSpain: "La fonética castellana incluye la distinción de theta.", exampleSentenceLatam: "El acento de Castilla es identificable en la pronunciación." },
      { word: "Latin American neutrality", spainVariant: "La neutralidad latinoamericana", latamVariant: "La falta de distinción en América Latina", phoneticSpain: "[lah noo-trah-lee-DAHD lah-tee-no-ah-meh-REE-kah-nah]", phoneticLatam: "[lah FAL-tah deh dis-teen-see-OHN en ah-MEH-ree-kah LAH-tee-nah]", english: "Latin American neutrality", partOfSpeech: "noun", exampleSentenceSpain: "La neutralidad latinoamericana evita el seseo/distinción.", exampleSentenceLatam: "La falta de distinción entre 'z' y 's' es norma en América Latina." },
      { word: "Voseo vs tuteo", spainVariant: "Voseo vs tuteo", latamVariant: "El uso del voseo en Argentina", phoneticSpain: "[vo-SEH-o vs too-TEH-o]", phoneticLatam: "[el OO-so del vo-SEH-o en ar-hen-TEE-nah]", english: "Voseo vs tuteo", partOfSpeech: "comparison", exampleSentenceSpain: "El voseo es característico de Argentina y otras regiones.", exampleSentenceLatam: "El voseo sustituye al tuteo en ciertas variedades latinoamericanas." },
      { word: "Seseo", spainVariant: "El seseo", latamVariant: "La pronunciación del seseo", phoneticSpain: "[el seh-SEH-o]", phoneticLatam: "[lah pro-noon-see-ah-see-OHN del seh-SEH-o]", english: "Seseo (pronunciation merger)", partOfSpeech: "noun", exampleSentenceSpain: "El seseo es la pronunciación de 'z' como 's'.", exampleSentenceLatam: "La pronunciación del seseo es estándar en América Latina." },
      { word: "Yeísmo", spainVariant: "El yeísmo", latamVariant: "La pérdida de distinción ll/y", phoneticSpain: "[el yeh-EES-mo]", phoneticLatam: "[lah PER-dee-dah deh dis-teen-see-OHN yeh/ee]", english: "Yeísmo (ll/y merger)", partOfSpeech: "noun", exampleSentenceSpain: "El yeísmo es común en hablantes jóvenes españoles.", exampleSentenceLatam: "La pérdida de distinción ll/y es casi universal en América Latina." },
      { word: "Aspirated 's' in Andalusia", spainVariant: "La aspiración de la 's' en Andalucía", latamVariant: "El fenómeno de la aspiración", phoneticSpain: "[lah as-pee-rah-see-OHN deh lah 's' en ahn-dah-loo-SEE-ah]", phoneticLatam: "[el feh-NOH-meh-no deh lah as-pee-rah-see-OHN]", english: "Aspirated 's' in Andalusia", partOfSpeech: "noun", exampleSentenceSpain: "La aspiración de la 's' es característica del andaluz.", exampleSentenceLatam: "El fenómeno de la aspiración aparece en varios dialectos." },
      { word: "Diminutive patterns", spainVariant: "Los patrones de diminutivos", latamVariant: "El uso de diminutivos en México", phoneticSpain: "[los pah-TRON-es deh dee-mee-noo-TEE-vos]", phoneticLatam: "[el OO-so deh dee-mee-noo-TEE-vos en MEH-hee-ko]", english: "Diminutive patterns", partOfSpeech: "noun", exampleSentenceSpain: "Los patrones de diminutivos varían entre regiones.", exampleSentenceLatam: "El uso de diminutivos es profuso en el español mexicano." },
      { word: "Lexical variation", spainVariant: "La variación léxica", latamVariant: "Las palabras que cambian por región", phoneticSpain: "[lah vah-ree-ah-see-OHN LEK-see-kah]", phoneticLatam: "[las PAH-lah-bras keh KAM-bee-ahn por reh-hee-OHN]", english: "Lexical variation", partOfSpeech: "noun", exampleSentenceSpain: "La variación léxica es dramática entre España y América Latina.", exampleSentenceLatam: "Las palabras que cambian por región pueden causar malentendidos." },
      { word: "Intonation patterns", spainVariant: "Los patrones de entonación", latamVariant: "La melodía del habla regional", phoneticSpain: "[los pah-TRON-es deh en-to-nah-see-OHN]", phoneticLatam: "[lah meh-lo-DEE-ah del AH-blah reh-hee-o-NAHL]", english: "Intonation patterns", partOfSpeech: "noun", exampleSentenceSpain: "Los patrones de entonación distinguen un castellano de un mexicano.", exampleSentenceLatam: "La melodía del habla regional es inmediatamente identificable." },
      { word: "Code-switching mastery", spainVariant: "El dominio del code-switching", latamVariant: "Cambiar entre dialectos naturalmente", phoneticSpain: "[el do-MEE-nee-o del code-switching]", phoneticLatam: "[kam-bee-AHR EN-treh dee-AHK-tek-tos nah-too-RAHL-men-teh]", english: "Code-switching mastery", partOfSpeech: "noun", exampleSentenceSpain: "El dominio del code-switching requiere fluidez en múltiples variedades.", exampleSentenceLatam: "Cambiar entre dialectos naturalmente es marca de fluidez verdadera." },
    ],
  },
  "c2-09-sociolinguistic-variation": {
    title: "Sociolinguistic Variation & Register Shifting",
    description: "Master how language changes based on social context at C2 level",
    vocabulary: [
      { word: "Register shifting", spainVariant: "El cambio de registro", latamVariant: "Adaptarse al contexto social", phoneticSpain: "[el KAM-bee-o deh REH-hees-tro]", phoneticLatam: "[ah-dahp-TAHR-seh ahl KON-teks-to so-see-AHL]", english: "Register shifting", partOfSpeech: "noun", exampleSentenceSpain: "El cambio de registro es la marca de un hablante cultivado.", exampleSentenceLatam: "Adaptarse al contexto social es fundamental para la comunicación efectiva." },
      { word: "Formal academic discourse", spainVariant: "El discurso académico formal", latamVariant: "La lengua de la universidad", phoneticSpain: "[el dis-KOOR-so ah-kah-DEH-mee-ko for-MAHL]", phoneticLatam: "[lah LEN-gwah deh lah oo-nee-ver-see-DAHD]", english: "Formal academic discourse", partOfSpeech: "noun", exampleSentenceSpain: "El discurso académico formal requiere precisión terminológica.", exampleSentenceLatam: "La lengua de la universidad demanda rigor y exactitud." },
      { word: "Colloquial intimacy", spainVariant: "La intimidad coloquial", latamVariant: "El habla informal entre amigos", phoneticSpain: "[lah in-tee-mee-DAHD ko-lo-KWIAHL]", phoneticLatam: "[el AH-blah in-for-MAHL EN-treh AH-mee-gos]", english: "Colloquial intimacy", partOfSpeech: "noun", exampleSentenceSpain: "La intimidad coloquial permite expresiones que serían inapropiadas formalmente.", exampleSentenceLatam: "El habla informal entre amigos revela la verdadera fluidez." },
      { word: "Professional register", spainVariant: "El registro profesional", latamVariant: "El lenguaje de negocios", phoneticSpain: "[el REH-hees-tro pro-feh-see-o-NAHL]", phoneticLatam: "[el len-GWAH-heh deh neh-GO-see-os]", english: "Professional register", partOfSpeech: "noun", exampleSentenceSpain: "El registro profesional es cortés pero distante.", exampleSentenceLatam: "El lenguaje de negocios requiere diplomacia y precisión." },
      { word: "Age-based variation", spainVariant: "La variación por edad", latamVariant: "Cómo el idioma cambia con la edad", phoneticSpain: "[lah vah-ree-ah-see-OHN por eh-DAHD]", phoneticLatam: "[KO-mo el ee-dee-O-mah KAM-bee-ah kon lah eh-DAHD]", english: "Age-based variation", partOfSpeech: "noun", exampleSentenceSpain: "La variación por edad es evidente en la pronunciación y vocabulario.", exampleSentenceLatam: "Cómo el idioma cambia con la edad refleja evolución lingüística." },
      { word: "Gender-based linguistic patterns", spainVariant: "Los patrones lingüísticos por género", latamVariant: "Diferencias en el habla según el género", phoneticSpain: "[los pah-TRON-es lin-GWEES-tee-kos por HEH-neh-ro]", phoneticLatam: "[dee-feh-REN-see-ahs en el AH-blah seh-GUN el HEH-neh-ro]", english: "Gender-based linguistic patterns", partOfSpeech: "noun", exampleSentenceSpain: "Los patrones lingüísticos por género son objeto de estudio sociolingüístico.", exampleSentenceLatam: "Diferencias en el habla según el género reflejan dinámicas sociales." },
      { word: "Class-based variation", spainVariant: "La variación por clase social", latamVariant: "Cómo la clase social afecta el lenguaje", phoneticSpain: "[lah vah-ree-ah-see-OHN por KLAH-seh so-see-AHL]", phoneticLatam: "[KO-mo lah KLAH-seh so-see-AHL ah-FEK-tah el len-GWAH-heh]", english: "Class-based variation", partOfSpeech: "noun", exampleSentenceSpain: "La variación por clase social es visible en vocabulario y sintaxis.", exampleSentenceLatam: "Cómo la clase social afecta el lenguaje es tema de sociología del lenguaje." },
      { word: "Diglossia", spainVariant: "La diglosia", latamVariant: "Dos variedades de lenguaje en una comunidad", phoneticSpain: "[lah dee-GLO-see-ah]", phoneticLatam: "[dos vah-ree-EH-dahs deh len-GWAH-heh en OO-nah ko-moo-nee-DAHD]", english: "Diglossia", partOfSpeech: "noun", exampleSentenceSpain: "La diglosia ocurre cuando dos lenguas coexisten con roles distintos.", exampleSentenceLatam: "Dos variedades de lenguaje en una comunidad pueden servir funciones complementarias." },
      { word: "Code-mixing", spainVariant: "La mezcla de códigos", latamVariant: "Mezclar el español con otras lenguas naturalmente", phoneticSpain: "[lah MEZ-klah deh KO-dee-gos]", phoneticLatam: "[mez-KLAHR el es-pahn-YOL kon O-tras LEN-gwas nah-too-RAHL-men-teh]", english: "Code-mixing", partOfSpeech: "noun", exampleSentenceSpain: "La mezcla de códigos es común entre hablantes bilingües.", exampleSentenceLatam: "Mezclar el español con otras lenguas es estrategia natural de bilingües." },
      { word: "Pragmatic competence", spainVariant: "La competencia pragmática", latamVariant: "Saber cuándo y cómo hablar", phoneticSpain: "[lah kom-peh-TEN-see-ah prag-MAH-tee-kah]", phoneticLatam: "[sah-BER KWAN-do ii KO-mo ah-BLAHR]", english: "Pragmatic competence", partOfSpeech: "noun", exampleSentenceSpain: "La competencia pragmática es lo que distingue a un verdadero hablante nativo.", exampleSentenceLatam: "Saber cuándo y cómo hablar es el corazón de la fluidez verdadera." },
    ],
  },
  "c2-10-mastery-integration": {
    title: "Complete Integration: Toward Native Mastery",
    description: "The final integration of all C2 elements toward indistinguishable native fluency",
    vocabulary: [
      { word: "Linguistic automaticity", spainVariant: "La automaticidad lingüística", latamVariant: "Hablar sin pensar en las reglas", phoneticSpain: "[lah ow-to-mah-tee-see-DAHD lin-GWEES-tee-kah]", phoneticLatam: "[ah-BLAHR seen pen-SAHR en lahs REH-glas]", english: "Linguistic automaticity", partOfSpeech: "noun", exampleSentenceSpain: "La automaticidad lingüística es el resultado de años de práctica.", exampleSentenceLatam: "Hablar sin pensar en las reglas es la marca de la verdadera fluidez." },
      { word: "Native intuition", spainVariant: "La intuición nativa", latamVariant: "Saber qué suena bien sin poder explicar por qué", phoneticSpain: "[lah in-too-ee-see-OHN NAH-tee-vah]", phoneticLatam: "[sah-BER keh soo-EH-nah bee-EN seen po-DER eks-plee-KAHR por KEH]", english: "Native intuition", partOfSpeech: "noun", exampleSentenceSpain: "La intuición nativa te permite detectar errores sin análisis consciente.", exampleSentenceLatam: "Saber qué suena bien es más importante que entender la gramática." },
      { word: "Cultural nuance mastery", spainVariant: "El dominio de los matices culturales", latamVariant: "Entender lo que no se dice explícitamente", phoneticSpain: "[el do-MEE-nee-o deh los mah-TEE-ces kool-too-RAH-les]", phoneticLatam: "[en-ten-DER lo keh no seh DEE-seh eks-PLEE-see-tah-MEN-teh]", english: "Cultural nuance mastery", partOfSpeech: "noun", exampleSentenceSpain: "El dominio de los matices culturales es lo que separa a los fluidos de los no fluidos.", exampleSentenceLatam: "Entender lo que no se dice es comprender la verdadera naturaleza de una cultura." },
      { word: "Idiomatic fluency", spainVariant: "La fluidez idiomática", latamVariant: "Usar expresiones como un nativo", phoneticSpain: "[lah floo-ee-DEZ ee-dee-o-MAH-tee-kah]", phoneticLatam: "[oo-SAHR eks-preh-see-OH-nes KO-mo oon nah-TEE-vo]", english: "Idiomatic fluency", partOfSpeech: "noun", exampleSentenceSpain: "La fluidez idiomática es lo que da autenticidad al discurso.", exampleSentenceLatam: "Usar expresiones como un nativo requiere inmersión y exposición constante." },
      { word: "Spontaneous production", spainVariant: "La producción espontánea", latamVariant: "Hablar sin preparación", phoneticSpain: "[lah pro-dook-see-OHN es-pon-TAH-neh-ah]", phoneticLatam: "[ah-BLAHR seen preh-pah-rah-see-OHN]", english: "Spontaneous production", partOfSpeech: "noun", exampleSentenceSpain: "La producción espontánea es la prueba definitiva de fluidez.", exampleSentenceLatam: "Hablar sin preparación y sonar natural es el verdadero dominio." },
      { word: "Authentic expression", spainVariant: "La expresión auténtica", latamVariant: "Tu verdadera voz en español", phoneticSpain: "[lah eks-preh-see-OHN ow-TEN-tee-kah]", phoneticLatam: "[too ver-dah-DEH-rah vos en es-pahn-YOL]", english: "Authentic expression", partOfSpeech: "noun", exampleSentenceSpain: "La expresión auténtica surge cuando no eres consciente del idioma.", exampleSentenceLatam: "Tu verdadera voz en español emerge cuando dominas completamente el sistema." },
      { word: "Linguistic confidence", spainVariant: "La confianza lingüística", latamVariant: "Seguridad en tu capacidad de expresarte", phoneticSpain: "[lah kon-fee-AHN-sah lin-GWEES-tee-kah]", phoneticLatam: "[seh-goo-ree-DAHD en too kah-pah-see-DAHD deh eks-preh-SAHR-teh]", english: "Linguistic confidence", partOfSpeech: "noun", exampleSentenceSpain: "La confianza lingüística es más importante que la perfección gramatical.", exampleSentenceLatam: "Seguridad en tu capacidad de expresarte atrae a los hablantes nativos." },
      { word: "Mastery synthesis", spainVariant: "La síntesis del dominio", latamVariant: "Integración completa de todo lo aprendido", phoneticSpain: "[lah SÍN-teh-sis del do-MEE-nee-o]", phoneticLatam: "[in-teh-grah-see-OHN KOM-pleh-tah deh TO-do lo ah-pren-DEE-do]", english: "Mastery synthesis", partOfSpeech: "noun", exampleSentenceSpain: "La síntesis del dominio ocurre cuando los elementos se funden sin esfuerzo.", exampleSentenceLatam: "La integración completa es cuando todo fluye naturalmente en tiempo real." },
      { word: "Linguistic identity", spainVariant: "La identidad lingüística", latamVariant: "Encontrar tu voz personal en español", phoneticSpain: "[lah i-den-tee-DAHD lin-GWEES-tee-kah]", phoneticLatam: "[en-kon-TRAHR too vos per-so-NAHL en es-pahn-YOL]", english: "Linguistic identity", partOfSpeech: "noun", exampleSentenceSpain: "La identidad lingüística se desarrolla a través de años de práctica auténtica.", exampleSentenceLatam: "Encontrar tu voz personal es el viaje final hacia la verdadera fluidez." },
      { word: "Perpetual growth mindset", spainVariant: "La mentalidad de crecimiento perpetuo", latamVariant: "Nunca dejas de aprender y mejorar", phoneticSpain: "[lah men-tah-lee-DAHD deh creh-see-mee-EHN-to per-PEH-too-o]", phoneticLatam: "[NOON-kah DEH-has deh ah-pren-DER ii meh-ho-RAHR]", english: "Perpetual growth mindset", partOfSpeech: "noun", exampleSentenceSpain: "La mentalidad de crecimiento perpetuo es lo que separa a los maestros de los aprendices.", exampleSentenceLatam: "Nunca dejas de aprender, incluso después de dominar C2 completamente." },
    ],
  },
};

function buildC2Lesson(slug: string): LessonData {
  const lessonDef = C2_LESSONS[slug as keyof typeof C2_LESSONS];
  if (!lessonDef) {
    throw new Error(`C2 lesson ${slug} not found`);
  }

  const slugParts = slug.split("-");
  const order = parseInt(slugParts[2]) || 1;

  const grammarSection: GrammarItem[] = [
    {
      title: "C2 Mastery: Nuance and Sophistication",
      spainContent: `At C2, Spanish becomes a vehicle for expressing the most subtle, sophisticated ideas. This involves advanced subjunctive, complex conditionals, nominalization, and discourse strategies.`,
      latamContent: `Mexican and Latin American Spanish at C2 involves the same advanced structures, with regional preferences in formality and stylistic choices. Context is paramount.`,
      note: "C2 is not about new rules—it's about integration, sophistication, and using the language to express ideas of unlimited complexity.",
    },
    {
      title: `${lessonDef.title} at C2 Level`,
      spainContent: `${lessonDef.title} at C2 requires not just knowledge of vocabulary but cultural, philosophical, and contextual understanding that took native speakers decades to develop.`,
      latamContent: `In Latin America, ${lessonDef.title} is expressed with regional nuance. What works in Spain may need adaptation for Mexican, Colombian, or Argentine audiences.`,
      note: "Fluency at C2 means knowing your audience and adapting your register, tone, and choice of expressions accordingly.",
    },
  ];

  const dialogues: DialogueScenario[] = [];

  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-spain-${i + 1}`,
      title: `${lessonDef.title} - Spain Scene ${i + 1}`,
      region: "SPAIN",
      setting: `Madrid intellectual circle discussing ${lessonDef.title}`,
      lines: [
        { speaker: "Isabel", text: lessonDef.vocabulary[i]?.exampleSentenceSpain || `Respecto a ${lessonDef.title}... (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid intellectual circle discussing ${lessonDef.title}` },
        { speaker: "Pedro", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceSpain || `Está claro que... (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid intellectual circle discussing ${lessonDef.title}` },
        { speaker: "Isabel", text: `Precisamente. (Spain ${i + 1})`, region: "SPAIN", setting: `Madrid intellectual circle discussing ${lessonDef.title}` },
      ],
    });
  }

  for (let i = 0; i < 3; i++) {
    dialogues.push({
      id: `dialogue-latam-${i + 1}`,
      title: `${lessonDef.title} - Mexico Scene ${i + 1}`,
      region: "LATAM",
      setting: `Mexico City café discussing ${lessonDef.title}`,
      lines: [
        { speaker: "Sofía", text: lessonDef.vocabulary[i]?.exampleSentenceLatam || `Mira, lo que pasa con ${lessonDef.title}... (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City café discussing ${lessonDef.title}` },
        { speaker: "Javier", text: lessonDef.vocabulary[(i + 1) % lessonDef.vocabulary.length]?.exampleSentenceLatam || `Exactamente, es que... (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City café discussing ${lessonDef.title}` },
        { speaker: "Sofía", text: `Eso es. (Mexico ${i + 1})`, region: "LATAM", setting: `Mexico City café discussing ${lessonDef.title}` },
      ],
    });
  }

  const quiz: QuizQuestion[] = [
    {
      questionId: "q1",
      type: "multiple-choice",
      questionText: `What characterizes C2 Spanish mastery?`,
      options: ["Basic grammar", "Integration of complex structures with cultural sophistication", "Only vocabulary", "Simple present tense"],
      correctAnswer: "Integration of complex structures with cultural sophistication",
      explanation: "C2 is about seamlessly integrating advanced grammatical structures with deep cultural understanding and contextual appropriateness.",
    },
    {
      questionId: "q2",
      type: "multiple-choice",
      questionText: `What does "${lessonDef.title}" require at C2 level?`,
      options: ["Memorization only", "Cultural, philosophical, and contextual understanding", "Grammar rules", "No special understanding"],
      correctAnswer: "Cultural, philosophical, and contextual understanding",
      explanation: `${lessonDef.title} at C2 level requires the kind of understanding that took native speakers decades to develop—not just vocabulary knowledge.`,
    },
    {
      questionId: "q3",
      type: "multiple-choice",
      questionText: `At C2 level, what is most important?`,
      options: ["Speaking fast", "Knowing your audience and adapting register", "Using big words", "Grammatical perfection alone"],
      correctAnswer: "Knowing your audience and adapting register",
      explanation: "C2 fluency means understanding context deeply and adapting your register, tone, and expression to your specific audience.",
    },
    {
      questionId: "q4",
      type: "multiple-choice",
      questionText: `How does regional variation matter at C2?`,
      options: ["It doesn't matter", "What works in Spain needs adaptation for Latin America", "Only vocabulary differs", "Completely different languages"],
      correctAnswer: "What works in Spain needs adaptation for Latin America",
      explanation: "Regional nuance is crucial at C2; expressions that work in Spain may need modification for Mexican, Colombian, or Argentine audiences.",
    },
    {
      questionId: "q5",
      type: "multiple-choice",
      questionText: `What is true about C2 Spanish?`,
      options: ["It's the final level", "It's a vehicle for expressing ideas of unlimited complexity", "It stops growing", "No new structures exist"],
      correctAnswer: "It's a vehicle for expressing ideas of unlimited complexity",
      explanation: "C2 Spanish isn't about new rules—it's about mastering integration and using the language to express any idea, no matter how subtle or complex.",
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
      example: v.exampleSentenceLatam,
    })),
    grammarJson: grammarSection.map((g) => ({
      title: g.title,
      content: `${g.spainContent} | ${g.latamContent}`,
    })),
    content: `# ${lessonDef.title}\n\n${lessonDef.description}\n\nAt C2 level, ${lessonDef.title} represents the pinnacle of Spanish language mastery. This is where language becomes a sophisticated tool for expressing the most subtle, nuanced, and complex ideas.`,
  };
}

export function generateC2Lessons(): LessonData[] {
  const c2Slugs = Object.keys(C2_LESSONS);
  return c2Slugs.map((slug) => buildC2Lesson(slug));
}