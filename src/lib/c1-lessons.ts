import type {
  LessonData,
  RegionalVocabItem,
  GrammarItem,
  DialogueScenario,
  QuizQuestion,
  FlashcardItem,
} from "./lessons-data";

// ============================================================
// LESSON C1.01: Nuanced Opinions & Arguments
// ============================================================

const c1_01_vocab: RegionalVocabItem[] = [
  { word: "I respectfully disagree", spainVariant: "Discrepo respetuosamente", latamVariant: "Difiero, pero con respeto", phoneticSpain: "[dis.ˈkɾe.po ɾes.pe.tu.o.ˈsa.men.te]", phoneticLatam: "[di.ˈfje.ɾo ˈpe.ɾo kon ɾes.ˈpe.to]", english: "I respectfully disagree", partOfSpeech: "expression" },
  { word: "Partial agreement", spainVariant: "En parte estoy de acuerdo", latamVariant: "Estoy de acuerdo a medias", phoneticSpain: "[en ˈpaɾ.te es.ˈtoj ðe a.ˈkweɾ.ðo]", phoneticLatam: "[es.ˈtoj ðe a.ˈkweɾ.ðo a ˈme.ðjas]", english: "I partially agree", partOfSpeech: "expression" },
  { word: "Diplomatic pushback", spainVariant: "Objeción matizada", latamVariant: "Observación moderada", phoneticSpain: "[ob.ˈxe.θjon ma.ti.ˈθa.ða]", phoneticLatam: "[o.bseɾ.βa.ˈθjon mo.ðe.ˈɾa.ða]", english: "Diplomatic objection", partOfSpeech: "noun" },
  { word: "Structural argument", spainVariant: "Argumento estructurado", latamVariant: "Razonamiento sólido", phoneticSpain: "[aɾ.ˈɣu.men.to es.tɾuk.tu.ˈɾa.ðo]", phoneticLatam: "[ɾa.θo.na.ˈmjen.to ˈso.li.ðo]", english: "Well-structured argument", partOfSpeech: "noun" },
  { word: "Nuanced stance", spainVariant: "Postura matizada", latamVariant: "Posición equilibrada", phoneticSpain: "[pos.ˈtu.ɾa ma.ti.ˈθa.ða]", phoneticLatam: "[po.si.ˈθjon e.ki.li.ˈbɾa.ða]", english: "Nuanced position", partOfSpeech: "noun" },
  { word: "Linguistic register shift", spainVariant: "Cambio de registro", latamVariant: "Variación del tono", phoneticSpain: "[ˈkam.bio ðe ɾe.ˈɡis.tɾo]", phoneticLatam: "[βa.ɾja.ˈθjon ðel ˈto.no]", english: "Shift in register/tone", partOfSpeech: "noun" },
  { word: "Conditional agreement", spainVariant: "Acuerdo condicionado", latamVariant: "Acuerdo bajo condiciones", phoneticSpain: "[a.ˈkweɾ.ðo kon.di.θjo.ˈna.ðo]", phoneticLatam: "[a.ˈkweɾ.ðo ˈba.xo kon.di.ˈθjo.nes]", english: "Agreement with conditions", partOfSpeech: "noun" },
  { word: "Technical reasoning", spainVariant: "Razonamiento técnico", latamVariant: "Lógica estructural", phoneticSpain: "[ɾa.θo.na.ˈmjen.to ˈtɛk.ni.ko]", phoneticLatam: "[ˈlo.xi.ka es.tɾuk.tu.ˈɾal]", english: "Technical logic", partOfSpeech: "noun" },
  { word: "Concessive clause", spainVariant: "Cláusula concesiva", latamVariant: "Construcción concesiva", phoneticSpain: "[ˈklau.su.la kon.θe.ˈsi.βa]", phoneticLatam: "[kons.truk.ˈθjon kon.θe.ˈsi.βa]", english: "Concessive structure", partOfSpeech: "noun" },
  { word: "Counterargument", spainVariant: "Contraargumento", latamVariant: "Refutación", phoneticSpain: "[kon.tɾa.aɾ.ˈɣu.men.to]", phoneticLatam: "[ɾe.fu.ta.ˈθjon]", english: "Counterargument", partOfSpeech: "noun" },
  { word: "Validity caveat", spainVariant: "Salvedad sobre la validez", latamVariant: "Limitación del argumento", phoneticSpain: "[sal.ˈβe.ðað ˈso.βɾe la βa.li.ˈðɛθ]", phoneticLatam: "[li.mi.ta.ˈθjon ðel aɾ.ˈɣu.men.to]", english: "Validity limitation", partOfSpeech: "noun" },
  { word: "Dialectical approach", spainVariant: "Enfoque dialéctico", latamVariant: "Método dialógico", phoneticSpain: "[en.ˈfo.ke ðja.ˈlɛk.ti.ko]", phoneticLatam: "[ˈme.to.ðo ðja.ˈlo.xi.ko]", english: "Dialectical approach", partOfSpeech: "noun" },
  { word: "Provisional claim", spainVariant: "Afirmación provisional", latamVariant: "Aseveración tentativa", phoneticSpain: "[a.fiɾ.ma.ˈθjon pɾo.ˈβi.sjo.nal]", phoneticLatam: "[a.se.βe.ɾa.ˈθjon ten.ta.ˈti.βa]", english: "Tentative claim", partOfSpeech: "noun" },
  { word: "Contextual validity", spainVariant: "Validez contextual", latamVariant: "Validez situacional", phoneticSpain: "[βa.li.ˈðɛθ kon.tɛk.ˈtwal]", phoneticLatam: "[βa.li.ˈðɛθ si.tu.a.θjo.ˈnal]", english: "Contextual validity", partOfSpeech: "noun" },
  { word: "Epistemological stance", spainVariant: "Postura epistemológica", latamVariant: "Enfoque del conocimiento", phoneticSpain: "[pos.ˈtu.ɾa e.pis.te.mo.ˈlo.xi.ka]", phoneticLatam: "[en.ˈfo.ke ðel ko.no.ˈθi.mjen.to]", english: "Epistemological position", partOfSpeech: "noun" },
  { word: "Substantive disagreement", spainVariant: "Desacuerdo sustancial", latamVariant: "Discrepancia importante", phoneticSpain: "[de.sa.ˈkweɾ.ðo sus.tan.ˈθjal]", phoneticLatam: "[dis.kɾe.ˈpaŋ.θja im.poɾ.ˈtan.te]", english: "Substantive disagreement", partOfSpeech: "noun" },
  { word: "Logical hierarchy", spainVariant: "Jerarquía lógica", latamVariant: "Estructura jerárquica", phoneticSpain: "[je.ɾaɾ.ˈki.a ˈlo.xi.ka]", phoneticLatam: "[es.tɾuk.ˈtu.ɾa je.ɾaɾ.ˈki.ka]", english: "Logical hierarchy", partOfSpeech: "noun" },
  { word: "Structural marker (Spain)", spainVariant: "Muletilla discursiva", latamVariant: "Marcador estructural", phoneticSpain: "[mu.le.ˈti.ʝa dis.kuɾ.ˈsi.βa]", phoneticLatam: "[maɾ.ka.ˈðoɾ es.tɾuk.tu.ˈɾal]", english: "Discourse marker", partOfSpeech: "noun" },
  { word: "Philosophical nuance", spainVariant: "Matiz filosófico", latamVariant: "Subtileza conceptual", phoneticSpain: "[ma.ˈtis fi.lo.ˈso.fi.ko]", phoneticLatam: "[su.ti.ˈle.θa kon.θep.tu.ˈal]", english: "Philosophical nuance", partOfSpeech: "noun" },
];

const c1_01_grammar: GrammarItem[] = [
  {
    title: "Diplomatic Disagreement Structures",
    spainContent: "Spanish formal disagreement uses 'discrepo', 'difiero', or 'no estoy de acuerdo' followed by causal clauses with 'porque', 'puesto que', or 'en la medida en que'. The structure is: '[Opinion] + [Concessive marker: 'si bien', 'aunque'] + [Qualification] + [Explanation]'. Example: 'Difiero del análisis, si bien reconozco su valor parcial, porque la premisa fundamental no se sostiene estructuralmente.'",
    latamContent: "Mexican formal disagreement uses 'discrepo', 'no comparto', or 'en realidad considero que' followed by 'sin embargo', 'no obstante', or 'aun así'. The structure is more explicit with bridges: '[Position] + [Bridge: 'lo que sí es cierto es que'] + [Nuance] + [Full explanation]'. Example: 'No comparto ese punto de vista, no obstante lo que sí es cierto es que hay validez parcial en el argumento, aunque la conclusión no se sostiene.'",
    note: "Spain uses Latin conjunctions ('puesto que', 'si bien') more; Mexico uses more English-influenced clarity ('lo que sí es cierto'). Both require explicit marking of disagreement BEFORE the concession.",
  },
  {
    title: "Conditional & Concessive Tenses in Arguments",
    spainContent: "Spanish argumentation uses subjunctive extensively: 'Si fuera cierto que...', 'Aunque sea verdad que...', 'Suponiendo que...'. The conditional is used for hypothetical scenarios: 'Si la premisa fuera válida, la conclusión se seguiría.' Present subjunctive marks philosophical uncertainty: 'Es posible que haya validez en esa afirmación, aunque la evidencia no lo demuestre.'",
    latamContent: "Mexican argumentation also uses subjunctive but more with 'en caso de que', 'a menos que', and 'salvo que'. The conditional is explicit: 'Si eso fuera así, entonces la conclusión sería...' but often replaced with 'Dado que' for causal logic: 'Dado que los datos muestran X, la conclusión debe ser Y.' Present subjunctive is preserved but often replaced with indicative for emphasis: 'Es posible que hay validez' (mixing registers for emotional weight).",
    note: "Both use subjunctive but Mexico is slightly more permissive with mood mixing for rhetorical effect. Spain maintains stricter subjunctive discipline in formal argument.",
  },
];

const c1_01_dialogues: DialogueScenario[] = [
  {
    id: "c1-01-sp-1",
    title: "Academic Debate",
    region: "SPAIN",
    setting: "University seminar room in Madrid",
    lines: [
      { speaker: "Profesor", text: "La tesis presentada sostiene que la causación es bidireccional. Aunque reconozco el valor del análisis, discrepo de la premisa fundamental.", region: "SPAIN", setting: "Madrid seminar" },
      { speaker: "Estudiante", text: "Si bien entiendo su objeción, considero que la evidencia estructural demuestra validez. ¿En qué punto específico considera que falla el razonamiento?", region: "SPAIN", setting: "Madrid seminar" },
      { speaker: "Profesor", text: "Precisamente en la interpretación de los datos. La correlación no implica causación directa, puesto que hay variables mediantes no consideradas.", region: "SPAIN", setting: "Madrid seminar" },
    ],
  },
  {
    id: "c1-01-sp-2",
    title: "Policy Discussion",
    region: "SPAIN",
    setting: "Government office meeting in Barcelona",
    lines: [
      { speaker: "Analista", text: "La propuesta tiene mérito, si bien presenta limitaciones estructurales que requieren atención. Sugiero una reformulación parcial.", region: "SPAIN", setting: "Barcelona meeting" },
      { speaker: "Funcionario", text: "¿Podría detallar las limitaciones? Me interesa comprender la lógica de su objeción.", region: "SPAIN", setting: "Barcelona meeting" },
      { speaker: "Analista", text: "Ciertamente. El problema radica en que el modelo asume constancia de variables que, de hecho, son fluctuantes en contextos reales.", region: "SPAIN", setting: "Barcelona meeting" },
    ],
  },
  {
    id: "c1-01-sp-3",
    title: "Philosophical Conversation",
    region: "SPAIN",
    setting: "Coffee debate in Seville between intellectuals",
    lines: [
      { speaker: "Intelectual 1", text: "La noción de libertad que planteas es válida parcialmente. Sin embargo, no contempla las restricciones estructurales del sistema.", region: "SPAIN", setting: "Seville café" },
      { speaker: "Intelectual 2", text: "Entiendo tu matiz. Pero considero que la libertad existe justamente en navegar esas restricciones. No son anulantes, sino constitutivas.", region: "SPAIN", setting: "Seville café" },
      { speaker: "Intelectual 1", text: "Interesante perspectiva. Eso requiere aclarar qué entiendes por 'navegar'. ¿Implica capacidad real de transformación?", region: "SPAIN", setting: "Seville café" },
    ],
  },
  {
    id: "c1-01-la-1",
    title: "Business Negotiation",
    region: "LATAM",
    setting: "Corporate boardroom in Mexico City",
    lines: [
      { speaker: "Ejecutivo", text: "La propuesta tiene validez, no obstante lo que sí es cierto es que requiere ajustes. Específicamente, el modelo de costos no es sostenible estructuralmente.", region: "LATAM", setting: "CDMX boardroom" },
      { speaker: "Consultor", text: "Agradezco la observación. ¿Podría detallar las limitaciones que identifica? Quisiera entender mejor el razonamiento.", region: "LATAM", setting: "CDMX boardroom" },
      { speaker: "Ejecutivo", text: "Claro. El problema es que asume estabilidad en márgenes que históricamente son variables. Eso impacta toda la viabilidad.", region: "LATAM", setting: "CDMX boardroom" },
    ],
  },
  {
    id: "c1-01-la-2",
    title: "Academic Rigor",
    region: "LATAM",
    setting: "University research office in Guadalajara",
    lines: [
      { speaker: "Investigador", text: "El análisis es sólido, sin embargo considero que hay limitaciones metodológicas. La validez está condicionada al contexto específico.", region: "LATAM", setting: "Guadalajara research" },
      { speaker: "Colega", text: "Interesante punto. ¿Cuáles serían esas limitaciones? Quisiera que fuera más preciso.", region: "LATAM", setting: "Guadalajara research" },
      { speaker: "Investigador", text: "Bien. El estudio no controla por variables confusoras que podrían explicar la correlación de manera alternativa. Eso debilita la conclusión causal.", region: "LATAM", setting: "Guadalajara research" },
    ],
  },
  {
    id: "c1-01-la-3",
    title: "Cultural Debate",
    region: "LATAM",
    setting: "Literary salon in Monterrey",
    lines: [
      { speaker: "Crítico", text: "La interpretación tiene valor, no obstante discrepo en un punto fundamental. La noción de identidad que planteas asume esencialismo.", region: "LATAM", setting: "Monterrey salon" },
      { speaker: "Autor", text: "Entiendo tu objeción. Pero lo que yo argumentaba es que hay núcleos coherentes, no que sean inmutables. ¿Captás la diferencia?", region: "LATAM", setting: "Monterrey salon" },
      { speaker: "Crítico", text: "Ah, entonces lo que planteas es una identidad procesual. Eso matiza significativamente la tesis. Eso sí me convence más.", region: "LATAM", setting: "Monterrey salon" },
    ],
  },
];

const c1_01_quiz: QuizQuestion[] = [
  {
    questionId: "c1-01-q1",
    type: "multiple-choice",
    questionText: "In Spanish formal disagreement, 'si bien' is used to:",
    options: ["Express complete rejection", "Introduce a concession before stating disagreement", "Agree partially", "Change the topic"],
    correctAnswer: "Introduce a concession before stating disagreement",
    explanation: "'Si bien' introduces acknowledgment of validity before disagreement: 'Si bien tiene mérito, discrepo de...'",
  },
  {
    questionId: "c1-01-q2",
    type: "multiple-choice",
    questionText: "In Mexican academic discourse, what does 'lo que sí es cierto es que' serve to do?",
    options: ["Express complete agreement", "Provide a bridge between disagreement and partial acknowledgment", "Introduce sarcasm", "Ask a question"],
    correctAnswer: "Provide a bridge between disagreement and partial acknowledgment",
    explanation: "This phrase creates explicit bridges in argument structure: 'No comparto X, pero lo que sí es cierto es que...'",
  },
  {
    questionId: "c1-01-q3",
    type: "multiple-choice",
    questionText: "The subjunctive 'Si fuera cierto que...' in Spanish argumentation is used to:",
    options: ["State facts", "Introduce hypothetical scenarios for logical testing", "Express anger", "Make direct accusations"],
    correctAnswer: "Introduce hypothetical scenarios for logical testing",
    explanation: "This structure is fundamental to Spanish academic reasoning — testing validity under different conditions.",
  },
  {
    questionId: "c1-01-q4",
    type: "multiple-choice",
    questionText: "In both Spain and Mexico, conditional agreement typically uses:",
    options: ["Simple present", "Subjunctive with concessive markers", "Imperative mood", "Future tense"],
    correctAnswer: "Subjunctive with concessive markers",
    explanation: "'Aunque sea verdad que X, Y no se sigue necesariamente' — subjunctive + logic bridge.",
  },
  {
    questionId: "c1-01-q5",
    type: "multiple-choice",
    questionText: "What is the key structural difference between Spanish and Mexican formal disagreement?",
    options: ["Spain uses subjunctive; Mexico uses indicative", "Spain uses Latin conjunctions; Mexico uses more explicit bridges", "Spain is more aggressive; Mexico is more polite", "There is no structural difference"],
    correctAnswer: "Spain uses Latin conjunctions; Mexico uses more explicit bridges",
    explanation: "Spain: 'si bien', 'puesto que'; Mexico: 'no obstante', 'lo que sí es cierto es que' — Mexico favors explicit connectors.",
  },
];

const c1_01_flashcards: FlashcardItem[] = [
  { id: "c1-01-fc1", frontSpain: "Discrepo respetuosamente", frontLatam: "Difiero, pero con respeto", backEnglish: "I respectfully disagree", variantDifferenceNote: "Both express formal, diplomatic disagreement. Spain uses 'discrepo' (from Latin); Mexico adds emotional acknowledgment ('con respeto').", exampleSentenceSpain: "Discrepo respetuosamente de tu análisis. Considero que hay fallas en la premisa.", exampleSentenceLatam: "Difiero, pero con respeto. El argumento tiene limitaciones que no se consideran.", partOfSpeech: "expression" },
  { id: "c1-01-fc2", frontSpain: "En parte estoy de acuerdo", frontLatam: "Estoy de acuerdo a medias", backEnglish: "I partially agree", variantDifferenceNote: "Spain uses 'en parte'; Mexico uses 'a medias'. Both express limited accord.", exampleSentenceSpain: "En parte estoy de acuerdo. Tu análisis es válido, pero incompleto.", exampleSentenceLatam: "Estoy de acuerdo a medias. Tienes puntos válidos, pero hay limitaciones.", partOfSpeech: "expression" },
  { id: "c1-01-fc3", frontSpain: "Objeción matizada", frontLatam: "Observación moderada", backEnglish: "Diplomatic objection", variantDifferenceNote: "'Objeción matizada' in Spain; 'observación moderada' in Mexico. Both avoid harsh tone.", exampleSentenceSpain: "Presento una objeción matizada: el modelo es válido bajo ciertos supuestos.", exampleSentenceLatam: "Quisiera hacer una observación moderada sobre el enfoque.", partOfSpeech: "noun" },
  { id: "c1-01-fc4", frontSpain: "Argumento estructurado", frontLatam: "Razonamiento sólido", backEnglish: "Well-structured argument", variantDifferenceNote: "'Estructurado' in Spain; 'sólido' in Mexico. Both indicate logical rigor.", exampleSentenceSpain: "Tu argumento está bien estructurado, aunque tiene limitaciones.", exampleSentenceLatam: "Ese razonamiento es sólido, pero no cubre todos los casos.", partOfSpeech: "noun" },
  { id: "c1-01-fc5", frontSpain: "Postura matizada", frontLatam: "Posición equilibrada", backEnglish: "Nuanced position", variantDifferenceNote: "'Matizada' in Spain; 'equilibrada' in Mexico. Both express balanced stance.", exampleSentenceSpain: "Adoptar una postura matizada es esencial en este debate.", exampleSentenceLatam: "Una posición equilibrada requiere reconocer ambos lados.", partOfSpeech: "noun" },
  { id: "c1-01-fc6", frontSpain: "Cambio de registro", frontLatam: "Variación del tono", backEnglish: "Shift in register/tone", variantDifferenceNote: "'Registro' in Spain; 'tono' in Mexico. Both refer to linguistic adjustment.", exampleSentenceSpain: "El cambio de registro es estratégico en este contexto.", exampleSentenceLatam: "La variación del tono refuerza el argumento.", partOfSpeech: "noun" },
  { id: "c1-01-fc7", frontSpain: "Acuerdo condicionado", frontLatam: "Acuerdo bajo condiciones", backEnglish: "Agreement with conditions", variantDifferenceNote: "Spain: 'condicionado'; Mexico: 'bajo condiciones'. Both indicate qualified agreement.", exampleSentenceSpain: "Es un acuerdo condicionado a que se cumplan ciertos criterios.", exampleSentenceLatam: "Hay acuerdo bajo condiciones específicas que deben verificarse.", partOfSpeech: "noun" },
  { id: "c1-01-fc8", frontSpain: "Razonamiento técnico", frontLatam: "Lógica estructural", backEnglish: "Technical logic", variantDifferenceNote: "'Técnico' in Spain; 'lógica estructural' in Mexico. Both refer to systematic reasoning.", exampleSentenceSpain: "El razonamiento técnico demuestra que la premisa falla.", exampleSentenceLatam: "La lógica estructural del argumento tiene un punto débil.", partOfSpeech: "noun" },
  { id: "c1-01-fc9", frontSpain: "Cláusula concesiva", frontLatam: "Construcción concesiva", backEnglish: "Concessive structure", variantDifferenceNote: "'Cláusula' in Spain; 'construcción' in Mexico. Both refer to grammar of concession.", exampleSentenceSpain: "La cláusula concesiva introduce la limitación de su argumento.", exampleSentenceLatam: "La construcción concesiva permite matizar el desacuerdo.", partOfSpeech: "noun" },
  { id: "c1-01-fc10", frontSpain: "Contraargumento", frontLatam: "Refutación", backEnglish: "Counterargument", variantDifferenceNote: "'Contraargumento' in Spain; 'refutación' in Mexico. Both challenge opposing claims.", exampleSentenceSpain: "El contraargumento más fuerte es que los datos no lo soportan.", exampleSentenceLatam: "La refutación se basa en que la premisa es cuestionable.", partOfSpeech: "noun" },
  { id: "c1-01-fc11", frontSpain: "Salvedad sobre la validez", frontLatam: "Limitación del argumento", backEnglish: "Validity limitation", variantDifferenceNote: "Spain uses 'salvedad' (legal term); Mexico uses 'limitación' (simpler). Both mark constraints.", exampleSentenceSpain: "Hay una salvedad importante sobre la validez de la conclusión.", exampleSentenceLatam: "La limitación principal del argumento es su contexto restringido.", partOfSpeech: "noun" },
  { id: "c1-01-fc12", frontSpain: "Enfoque dialéctico", frontLatam: "Método dialógico", backEnglish: "Dialectical approach", variantDifferenceNote: "'Dialéctico' in Spain; 'dialógico' in Mexico. Both refer to thesis-antithesis interaction.", exampleSentenceSpain: "Un enfoque dialéctico permite superar las posiciones binarias.", exampleSentenceLatam: "El método dialógico enriquece el debate con múltiples perspectivas.", partOfSpeech: "noun" },
  { id: "c1-01-fc13", frontSpain: "Afirmación provisional", frontLatam: "Aseveración tentativa", backEnglish: "Tentative claim", variantDifferenceNote: "'Provisional' in Spain; 'tentativa' in Mexico. Both hedge strong claims.", exampleSentenceSpain: "Es una afirmación provisional, sujeta a revisión con más datos.", exampleSentenceLatam: "Esa es una aseveración tentativa hasta que haya confirmación.", partOfSpeech: "noun" },
  { id: "c1-01-fc14", frontSpain: "Validez contextual", frontLatam: "Validez situacional", backEnglish: "Contextual validity", variantDifferenceNote: "'Contextual' in Spain; 'situacional' in Mexico. Both emphasize context-dependency.", exampleSentenceSpain: "La validez contextual del argumento es su principal limitación.", exampleSentenceLatam: "La validez situacional depende de variables específicas.", partOfSpeech: "noun" },
  { id: "c1-01-fc15", frontSpain: "Postura epistemológica", frontLatam: "Enfoque del conocimiento", backEnglish: "Epistemological position", variantDifferenceNote: "'Epistemológica' (philosophical term) in Spain; 'enfoque del conocimiento' (simpler) in Mexico.", exampleSentenceSpain: "Su postura epistemológica asume un realismo ingenuo.", exampleSentenceLatam: "El enfoque del conocimiento que plantea es constructivista.", partOfSpeech: "noun" },
  { id: "c1-01-fc16", frontSpain: "Desacuerdo sustancial", frontLatam: "Discrepancia importante", backEnglish: "Substantive disagreement", variantDifferenceNote: "'Sustancial' in Spain; 'importante' in Mexico. Both indicate real difference.", exampleSentenceSpain: "Hay un desacuerdo sustancial sobre la naturaleza del fenómeno.", exampleSentenceLatam: "La discrepancia importante radica en cómo se interpreta la evidencia.", partOfSpeech: "noun" },
  { id: "c1-01-fc17", frontSpain: "Jerarquía lógica", frontLatam: "Estructura jerárquica", backEnglish: "Logical hierarchy", variantDifferenceNote: "Both refer to ordering of premises and conclusions. Spain uses 'lógica'; Mexico uses 'estructura'.", exampleSentenceSpain: "La jerarquía lógica del argumento es clara: premisas → conclusión.", exampleSentenceLatam: "La estructura jerárquica muestra que la conclusión depende de X.", partOfSpeech: "noun" },
  { id: "c1-01-fc18", frontSpain: "Muletilla discursiva", frontLatam: "Marcador estructural", backEnglish: "Discourse marker", variantDifferenceNote: "'Muletilla' (Spanish colloquial term) vs. 'marcador' (technical). Both guide argument structure.", exampleSentenceSpain: "La muletilla 'es decir' sirve para aclarar la premisa.", exampleSentenceLatam: "El marcador 'o sea' conecta las ideas de forma natural.", partOfSpeech: "noun" },
  { id: "c1-01-fc19", frontSpain: "Matiz filosófico", frontLatam: "Subtileza conceptual", backEnglish: "Philosophical nuance", variantDifferenceNote: "'Matiz' in Spain; 'subtileza' in Mexico. Both mark fine distinctions.", exampleSentenceSpain: "Hay un matiz filosófico que no se puede ignorar.", exampleSentenceLatam: "La subtileza conceptual es lo que distingue los dos enfoques.", partOfSpeech: "noun" },
  { id: "c1-01-fc20", frontSpain: "Si bien...aunque", frontLatam: "No obstante...sin embargo", backEnglish: "Concessive conjunctions", variantDifferenceNote: "Spain favors Latin-style ('si bien', 'aunque'); Mexico favors explicit bridges ('no obstante').", exampleSentenceSpain: "Si bien es válido el punto, aunque hay limitaciones estructurales.", exampleSentenceLatam: "No obstante el valor parcial, sin embargo la conclusión es débil.", partOfSpeech: "conjunction" },
];

export const LESSON_C1_01: LessonData = {
  id: "c1-01",
  title: "Nuanced Opinions & Arguments",
  slug: "nuanced-opinions-arguments",
  description: "Master diplomatic pushback, partial agreements, and highly technical structural reasoning across Spain and LATAM contexts.",
  difficulty: "Advanced",
  level: "C1",
  order: 1,
  imageUrl: null,
  durationMinutes: 25,
  isPublished: true,
  vocabularyTable: c1_01_vocab,
  grammarSection: c1_01_grammar,
  dialogues: c1_01_dialogues,
  quiz: c1_01_quiz,
  flashcards: c1_01_flashcards,
  vocabularyJson: c1_01_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: c1_01_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Nuanced opinions and arguments lesson covering Spain vs LATAM academic and professional discourse.",
};

// ============================================================
// LESSON C1.02: Persuasion & Negotiation
// ============================================================

const c1_02_vocab: RegionalVocabItem[] = [
  { word: "Strategic concession", spainVariant: "Concesión estratégica", latamVariant: "Cesión calculada", phoneticSpain: "[kon.θe.ˈsjon es.tɾa.ˈte.xi.ka]", phoneticLatam: "[θe.ˈsjon kal.ku.ˈla.ða]", english: "Strategic concession", partOfSpeech: "noun" },
  { word: "Win-win scenario", spainVariant: "Solución mutuamente benéfica", latamVariant: "Acuerdo de ambos lados", phoneticSpain: "[so.lu.ˈθjon mu.tu.a.ˈmen.te be.ˈne.fi.ka]", phoneticLatam: "[a.ˈkweɾ.ðo ðe ˈam.bos ˈla.ðos]", english: "Win-win outcome", partOfSpeech: "noun" },
  { word: "Conditional tense", spainVariant: "Condicional (tiempo verbal)", latamVariant: "Potencial", phoneticSpain: "[kon.di.θjo.ˈnal]", phoneticLatam: "[po.ten.ˈθjal]", english: "Conditional mood (verb tense)", partOfSpeech: "noun" },
  { word: "Negotiation framework", spainVariant: "Marco negociador", latamVariant: "Estructura de negociación", phoneticSpain: "[ˈmaɾ.ko ne.ɣo.θja.ˈðoɾ]", phoneticLatam: "[es.tɾuk.ˈtu.ɾa ðe ne.ɣo.sja.ˈθjon]", english: "Negotiation structure", partOfSpeech: "noun" },
  { word: "Professional tone", spainVariant: "Tono profesional", latamVariant: "Registro corporativo", phoneticSpain: "[ˈto.no pɾo.fe.sjo.ˈnal]", phoneticLatam: "[ɾe.ˈɡis.tɾo koɾ.po.ɾa.ˈti.βo]", english: "Professional tone", partOfSpeech: "noun" },
  { word: "Leverage point", spainVariant: "Punto de apalancamiento", latamVariant: "Ventaja negociadora", phoneticSpain: "[ˈpun.to ðe a.pa.lan.θa.ˈmjen.to]", phoneticLatam: "[ˈben.ta.xa ne.ɣo.sia.ˈðo.ɾa]", english: "Leverage point", partOfSpeech: "noun" },
  { word: "Conditional phrasing", spainVariant: "Expresión condicional", latamVariant: "Construcción hipotética", phoneticSpain: "[eks.pre.ˈsjon kon.di.θjo.ˈnal]", phoneticLatam: "[kons.truk.ˈθjon i.po.ˈte.ti.ka]", english: "Conditional phrasing", partOfSpeech: "noun" },
  { word: "Collaborative language", spainVariant: "Lenguaje colaborativo", latamVariant: "Lenguaje de cooperación", phoneticSpain: "[leŋ.ˈɡwa.xe ko.la.bo.ɾa.ˈti.βo]", phoneticLatam: "[leŋ.ˈɡwa.xe ðe ko.o.peɾa.ˈθjon]", english: "Collaborative language", partOfSpeech: "noun" },
  { word: "Mutual benefit", spainVariant: "Beneficio mutuo", latamVariant: "Ventaja compartida", phoneticSpain: "[be.ne.ˈfi.θjo ˈmu.tu.o]", phoneticLatam: "[ˈben.ta.xa kom.paɾ.ˈti.ða]", english: "Mutual benefit", partOfSpeech: "noun" },
  { word: "Consensus building", spainVariant: "Construcción de consenso", latamVariant: "Búsqueda de acuerdo", phoneticSpain: "[kons.truk.ˈθjon ðe kon.ˈsen.so]", phoneticLatam: "[ˈbus.ke.ða ðe a.ˈkweɾ.ðo]", english: "Consensus building", partOfSpeech: "noun" },
  { word: "Deal breaker", spainVariant: "Punto no negociable", latamVariant: "Línea roja", phoneticSpain: "[ˈpun.to no ne.ɣo.θja.ˈble]", phoneticLatam: "[ˈli.ne.a ˈro.xa]", english: "Non-negotiable point", partOfSpeech: "noun" },
  { word: "Opening offer", spainVariant: "Oferta inicial", latamVariant: "Propuesta de entrada", phoneticSpain: "[o.ˈfeɾ.ta i.ˈθjal]", phoneticLatam: "[pɾo.ˈpwes.ta ðe en.ˈtɾa.ða]", english: "Opening offer", partOfSpeech: "noun" },
  { word: "Professional concession", spainVariant: "Cesión profesional", latamVariant: "Sacrificio estratégico", phoneticSpain: "[θe.ˈsjon pɾo.fe.sjo.ˈnal]", phoneticLatam: "[sa.kɾi.ˈfi.θjo es.tɾa.ˈte.xi.ko]", english: "Professional concession", partOfSpeech: "noun" },
  { word: "Common ground", spainVariant: "Terreno común", latamVariant: "Punto de convergencia", phoneticSpain: "[te.ˈɾe.no ko.ˈmun]", phoneticLatam: "[ˈpun.to ðe kon.βeɾ.ˈhen.θja]", english: "Common ground", partOfSpeech: "noun" },
  { word: "Strategic timing", spainVariant: "Temporalidad estratégica", latamVariant: "Momento indicado", phoneticSpain: "[tem.po.ɾa.li.ˈðað es.tɾa.ˈte.xi.ka]", phoneticLatam: "[mo.ˈmen.to in.di.ˈka.ðo]", english: "Strategic timing", partOfSpeech: "noun" },
  { word: "Objective criteria", spainVariant: "Criterios objetivos", latamVariant: "Estándares claros", phoneticSpain: "[kɾi.ˈte.ɾjos ob.xe.ˈti.βos]", phoneticLatam: "[es.ˈtan.da.ɾes ˈkla.ɾos]", english: "Objective criteria", partOfSpeech: "noun" },
  { word: "Interest-based approach", spainVariant: "Enfoque basado en intereses", latamVariant: "Método de intereses compartidos", phoneticSpain: "[en.ˈfo.ke ˈba.sa.ðo en in.te.ˈɾe.ses]", phoneticLatam: "[ˈme.to.ðo ðe in.te.ˈɾe.ses kom.paɾ.ˈti.ðos]", english: "Interest-based negotiation", partOfSpeech: "noun" },
  { word: "Power dynamic", spainVariant: "Dinámica de poder", latamVariant: "Balance de fuerzas", phoneticSpain: "[di.ˈna.mi.ka ðe po.ˈðeɾ]", phoneticLatam: "[ˈba.lan.θe ðe ˈfweɾ.θas]", english: "Power dynamic", partOfSpeech: "noun" },
  { word: "Fallback position", spainVariant: "Posición de retaguardia", latamVariant: "Plan B", phoneticSpain: "[po.si.ˈθjon ðe ɾe.ta.ɣwaɾ.ˈðja]", phoneticLatam: "[ˈplan ˈbe]", english: "Fallback position", partOfSpeech: "noun" },
  { word: "Collaborative spirit", spainVariant: "Espíritu de colaboración", latamVariant: "Actitud cooperativa", phoneticSpain: "[es.ˈpi.ɾi.tu ðe ko.la.bo.ɾa.ˈθjon]", phoneticLatam: "[ak.ˈti.túð ko.o.peɾa.ˈti.βa]", english: "Spirit of collaboration", partOfSpeech: "noun" },
];

const c1_02_grammar: GrammarItem[] = [
  {
    title: "Conditional Strategies in Negotiation",
    spainContent: "Negotiation uses present conditional extensively: 'Estaría dispuesto a ceder en X si obtuviera compensación en Y.' The structure is: 'Estar/Ser dispuesto + conditional + 'si' + imperfect subjunctive'. Example: 'Sería posible aceptar una rebaja del 5% si incluyen servicios adicionales.' This is more formal in Spain and requires subjunctive after 'si' for hypothetical.",
    latamContent: "Mexican negotiation uses simpler conditionals but repeats 'si' structures more explicitly: 'Podría aceptar si ustedes aceptan.' Mexico often adds 'con la condición de que' (with the condition that) + subjunctive. Example: 'Aceptaría ese precio con la condición de que el plazo de entrega se reduzca.' Mexico favors explicit condition-clauses over assumed logic.",
    note: "Spain compresses conditions; Mexico makes them explicit. Both use subjunctive after conditional framework, but Mexico marks conditions more clearly with 'con la condición de que'.",
  },
  {
    title: "Collaborative vs. Competitive Framing",
    spainContent: "Spanish negotiation frames as problem-solving: 'Juntos podemos encontrar una solución que beneficie a ambas partes.' Uses 'nosotros' (we) extensively, even when parties have opposing interests. The verb 'colaborar' and 'cooperar' are frequent. Competitive language is marked as 'direct' or 'harsh', avoided in official negotiation.",
    latamContent: "Mexican negotiation alternates between collaboration and recognition of self-interest: 'Claro que buscamos nuestro beneficio, pero también entendemos el tuyo.' Uses first person singular more; 'nosotros' is less frequent. Mexico openly names interests: 'Tu interés es X; nuestro interés es Y. Buscamos un punto medio.'",
    note: "Spain uses 'nosotros' and problem-solving frames; Mexico uses 'yo/nosotros' and interest-naming. Spain hides competition; Mexico acknowledges it while seeking collaboration.",
  },
];

const c1_02_dialogues: DialogueScenario[] = [
  {
    id: "c1-02-sp-1",
    title: "Business Contract Negotiation",
    region: "SPAIN",
    setting: "Formal meeting room in Madrid between companies",
    lines: [
      { speaker: "Empresario 1", text: "Entiendo vuestros intereses. Estaríamos dispuestos a aceptar un plazo más corto de entrega si pudierais asumir los costos de expedición acelerada.", region: "SPAIN", setting: "Madrid meeting room" },
      { speaker: "Empresario 2", text: "Ese es un punto importante. ¿Sería posible una solución compartida? Podríamos asumir parte si vosotros reducís el precio base.", region: "SPAIN", setting: "Madrid meeting room" },
      { speaker: "Empresario 1", text: "Eso sería viable. Juntos podemos encontrar una estructura que funcione para ambas partes. Sugiero que exploremos márgenes en otros aspectos.", region: "SPAIN", setting: "Madrid meeting room" },
    ],
  },
  {
    id: "c1-02-sp-2",
    title: "Labor Negotiation",
    region: "SPAIN",
    setting: "Government mediation office in Barcelona",
    lines: [
      { speaker: "Representante Laboral", text: "Nuestros asociados valorarían un aumento del 3%. Sería aceptable si también se mejoran las condiciones de trabajo.", region: "SPAIN", setting: "Barcelona mediation" },
      { speaker: "Empresario", text: "Entendemos la petición. Podría ser posible un aumento del 2% si las condiciones se mejoran de forma gradual. ¿Sería eso viable?", region: "SPAIN", setting: "Barcelona mediation" },
      { speaker: "Representante Laboral", text: "Eso requeriría consulta con nuestros miembros. Pero creo que podemos colaborar en una solución equilibrada.", region: "SPAIN", setting: "Barcelona mediation" },
    ],
  },
  {
    id: "c1-02-sp-3",
    title: "Political Compromise",
    region: "SPAIN",
    setting: "Government office in Seville during coalition talks",
    lines: [
      { speaker: "Político 1", text: "La educación es nuestro punto prioritario. Seríamos flexibles en otros temas si conseguimos compromisos firmes aquí.", region: "SPAIN", setting: "Seville government office" },
      { speaker: "Político 2", text: "Entendemos. Juntos podemos definir prioridades que satisfagan a ambas formaciones. ¿Qué aspectos son innegociables para vosotros?", region: "SPAIN", setting: "Seville government office" },
      { speaker: "Político 1", text: "Inversión presupuestaria y reforma curricular. En otros ámbitos seremos colaboradores. ¿Os parece un buen punto de partida?", region: "SPAIN", setting: "Seville government office" },
    ],
  },
  {
    id: "c1-02-la-1",
    title: "Commercial Deal",
    region: "LATAM",
    setting: "Corporate office in Mexico City",
    lines: [
      { speaker: "Ejecutivo 1", text: "Nuestro interés es un precio competitivo. Estaríamos dispuestos a aceptar plazos más largos con la condición de que el costo disminuya un 10%.", region: "LATAM", setting: "CDMX office" },
      { speaker: "Ejecutivo 2", text: "Entiendo. Lo que yo necesito es garantizar volumen. ¿Podríamos pactar compras mínimas a cambio de ese descuento?", region: "LATAM", setting: "CDMX office" },
      { speaker: "Ejecutivo 1", text: "Eso es interesante. Aceptamos volúmenes mínimos si los garantizamos con cláusulas de protección. ¿Hay espacio para negociar eso?", region: "LATAM", setting: "CDMX office" },
    ],
  },
  {
    id: "c1-02-la-2",
    title: "Salary Negotiation",
    region: "LATAM",
    setting: "HR office in Guadalajara",
    lines: [
      { speaker: "Candidato", text: "Mi expectativa salarial es de $50,000 anuales. Pero sería flexible si el paquete de beneficios fuera competitivo. ¿Cuál es vuestro presupuesto?", region: "LATAM", setting: "Guadalajara HR office" },
      { speaker: "Gerente RH", text: "Podemos ofrecer $45,000 base más beneficios robustos. Eso incluye seguros y capacitación profesional.", region: "LATAM", setting: "Guadalajara HR office" },
      { speaker: "Candidato", text: "Eso es razonable. Aceptaría eso con la condición de que haya revisión salarial después de seis meses. ¿Les parece justo?", region: "LATAM", setting: "Guadalajara HR office" },
    ],
  },
  {
    id: "c1-02-la-3",
    title: "Partnership Discussion",
    region: "LATAM",
    setting: "Coffee meeting in Monterrey between business partners",
    lines: [
      { speaker: "Socio 1", text: "Mi interés es expandir el mercado. Estaría dispuesto a invertir más capital si tuviéramos control sobre estrategia de marca.", region: "LATAM", setting: "Monterrey café" },
      { speaker: "Socio 2", text: "Entiendo, pero la marca es sensible para mí. ¿Sería posible una co-dirección donde ambos tengamos voz?", region: "LATAM", setting: "Monterrey café" },
      { speaker: "Socio 1", text: "Eso podría funcionar. Con la condición de que haya un proceso claro de toma de decisiones, yo estaría tranquilo delegando algo de control.", region: "LATAM", setting: "Monterrey café" },
    ],
  },
];

const c1_02_quiz: QuizQuestion[] = [
  {
    questionId: "c1-02-q1",
    type: "multiple-choice",
    questionText: "In Spanish negotiation, 'Estaría dispuesto a ceder en X si obtuviera compensación en Y' uses:",
    options: ["Present indicative", "Conditional + imperfect subjunctive after 'si'", "Future tense", "Imperative mood"],
    correctAnswer: "Conditional + imperfect subjunctive after 'si'",
    explanation: "This is the formal negotiation structure in Spain: conditional proposal + hypothetical condition in subjunctive.",
  },
  {
    questionId: "c1-02-q2",
    type: "multiple-choice",
    questionText: "The Mexican phrase 'con la condición de que' is typically followed by:",
    options: ["Indicative mood", "Subjunctive mood", "Imperative", "Infinitive"],
    correctAnswer: "Subjunctive mood",
    explanation: "Condition phrases always trigger subjunctive: 'con la condición de que acepten los términos'.",
  },
  {
    questionId: "c1-02-q3",
    type: "multiple-choice",
    questionText: "In Spanish formal negotiation, 'nosotros' is used to:",
    options: ["Exclude the other party", "Create a collaborative frame ('we as one unit')", "Refer to multiple companies", "Show superiority"],
    correctAnswer: "Create a collaborative frame ('we as one unit')",
    explanation: "Spain uses 'nosotros' extensively to linguistically merge parties into a single problem-solving unit.",
  },
  {
    questionId: "c1-02-q4",
    type: "multiple-choice",
    questionText: "Mexico's approach to negotiation differs from Spain by:",
    options: ["Avoiding explicit mention of interests", "Being less formal", "Openly naming competing interests while seeking collaboration", "Using subjunctive less frequently"],
    correctAnswer: "Openly naming competing interests while seeking collaboration",
    explanation: "Mexico: 'Tu interés es X; nuestro es Y. Buscamos punto medio.' Spain avoids this competitive framing.",
  },
  {
    questionId: "c1-02-q5",
    type: "multiple-choice",
    questionText: "What is a 'punto no negociable' (Spain) or 'línea roja' (Mexico)?",
    options: ["An opening position", "A non-negotiable requirement", "A fallback offer", "A collaborative goal"],
    correctAnswer: "A non-negotiable requirement",
    explanation: "Both terms mark absolute, unmovable positions in negotiation—the point where a party will walk away.",
  },
];

const c1_02_flashcards: FlashcardItem[] = [
  { id: "c1-02-fc1", frontSpain: "Concesión estratégica", frontLatam: "Cesión calculada", backEnglish: "Strategic concession", variantDifferenceNote: "'Estratégica' in Spain; 'calculada' in Mexico. Both indicate planned give-and-take.", exampleSentenceSpain: "Una concesión estratégica en precio podría ganar la lealtad del cliente.", exampleSentenceLatam: "La cesión calculada de tiempo nos da mejor margen de ganancia.", partOfSpeech: "noun" },
  { id: "c1-02-fc2", frontSpain: "Solución mutuamente benéfica", frontLatam: "Acuerdo de ambos lados", backEnglish: "Win-win outcome", variantDifferenceNote: "'Mutuamente benéfica' (formal) in Spain; 'de ambos lados' (simpler) in Mexico.", exampleSentenceSpain: "Buscamos una solución mutuamente benéfica para ambas partes.", exampleSentenceLatam: "El acuerdo debe ser de ambos lados para que sea sostenible.", partOfSpeech: "noun" },
  { id: "c1-02-fc3", frontSpain: "Condicional (tiempo verbal)", frontLatam: "Potencial", backEnglish: "Conditional mood", variantDifferenceNote: "'Condicional' in Spain; 'potencial' in Mexico. Both refer to the same verb tense.", exampleSentenceSpain: "El condicional es esencial en la negociación formal: 'Estaría dispuesto a...'", exampleSentenceLatam: "El potencial permite expresar posibilidades: 'Podría aceptar si...'", partOfSpeech: "noun" },
  { id: "c1-02-fc4", frontSpain: "Marco negociador", frontLatam: "Estructura de negociación", backEnglish: "Negotiation framework", variantDifferenceNote: "'Marco' in Spain; 'estructura' in Mexico. Both refer to the agreed parameters.", exampleSentenceSpain: "Establecer un marco negociador claro es el primer paso.", exampleSentenceLatam: "La estructura de negociación debe ser transparente.", partOfSpeech: "noun" },
  { id: "c1-02-fc5", frontSpain: "Tono profesional", frontLatam: "Registro corporativo", backEnglish: "Professional tone", variantDifferenceNote: "'Tono' in Spain; 'registro' in Mexico. Both emphasize formality.", exampleSentenceSpain: "Mantener un tono profesional es crucial durante la negociación.", exampleSentenceLatam: "El registro corporativo diferencia los acuerdos comerciales de los sociales.", partOfSpeech: "noun" },
  { id: "c1-02-fc6", frontSpain: "Punto de apalancamiento", frontLatam: "Ventaja negociadora", backEnglish: "Leverage point", variantDifferenceNote: "'Apalancamiento' (financial term) in Spain; 'ventaja' (simpler) in Mexico.", exampleSentenceSpain: "El punto de apalancamiento es que tenemos alternativas.", exampleSentenceLatam: "Nuestra ventaja negociadora es el volumen de compra.", partOfSpeech: "noun" },
  { id: "c1-02-fc7", frontSpain: "Expresión condicional", frontLatam: "Construcción hipotética", backEnglish: "Conditional phrasing", variantDifferenceNote: "'Expresión' in Spain; 'construcción' in Mexico. Both refer to syntactic structure.", exampleSentenceSpain: "La expresión condicional 'si fuera posible' suaviza la petición.", exampleSentenceLatam: "La construcción hipotética permite explorar escenarios.", partOfSpeech: "noun" },
  { id: "c1-02-fc8", frontSpain: "Lenguaje colaborativo", frontLatam: "Lenguaje de cooperación", backEnglish: "Collaborative language", variantDifferenceNote: "'Colaborativo' in Spain; 'de cooperación' in Mexico. Both emphasize teamwork.", exampleSentenceSpain: "Un lenguaje colaborativo crea confianza: 'Juntos podemos...'", exampleSentenceLatam: "El lenguaje de cooperación reconoce los intereses de ambos.", partOfSpeech: "noun" },
  { id: "c1-02-fc9", frontSpain: "Beneficio mutuo", frontLatam: "Ventaja compartida", backEnglish: "Mutual benefit", variantDifferenceNote: "'Beneficio' in Spain; 'ventaja' in Mexico. Both mean shared gain.", exampleSentenceSpain: "El beneficio mutuo es el objetivo final de toda negociación.", exampleSentenceLatam: "La ventaja compartida garantiza que el acuerdo es justo.", partOfSpeech: "noun" },
  { id: "c1-02-fc10", frontSpain: "Construcción de consenso", frontLatam: "Búsqueda de acuerdo", backEnglish: "Consensus building", variantDifferenceNote: "'Construcción' in Spain; 'búsqueda' in Mexico. Both involve reaching agreement.", exampleSentenceSpain: "La construcción de consenso requiere paciencia y escucha activa.", exampleSentenceLatam: "La búsqueda de acuerdo es iterativa, no lineal.", partOfSpeech: "noun" },
  { id: "c1-02-fc11", frontSpain: "Punto no negociable", frontLatam: "Línea roja", backEnglish: "Non-negotiable point", variantDifferenceNote: "'Punto no negociable' in Spain; 'línea roja' (red line) in Mexico. Both mark absolute limits.", exampleSentenceSpain: "La seguridad laboral es nuestro punto no negociable.", exampleSentenceLatam: "La protección del medio ambiente es nuestra línea roja.", partOfSpeech: "noun" },
  { id: "c1-02-fc12", frontSpain: "Oferta inicial", frontLatam: "Propuesta de entrada", backEnglish: "Opening offer", variantDifferenceNote: "'Oferta' in Spain; 'propuesta' in Mexico. Both refer to first position.", exampleSentenceSpain: "La oferta inicial debe ser realista pero ambiciosa.", exampleSentenceLatam: "La propuesta de entrada fija el tono de toda la negociación.", partOfSpeech: "noun" },
  { id: "c1-02-fc13", frontSpain: "Cesión profesional", frontLatam: "Sacrificio estratégico", backEnglish: "Professional concession", variantDifferenceNote: "'Cesión' in Spain; 'sacrificio' in Mexico. Both indicate giving ground for future gain.", exampleSentenceSpain: "Una cesión profesional en plazo puede ganar la lealtad.", exampleSentenceLatam: "Un sacrificio estratégico ahora asegura beneficio futuro.", partOfSpeech: "noun" },
  { id: "c1-02-fc14", frontSpain: "Terreno común", frontLatam: "Punto de convergencia", backEnglish: "Common ground", variantDifferenceNote: "'Terreno' (spatial metaphor) in Spain; 'convergencia' (technical term) in Mexico.", exampleSentenceSpain: "Encontrar terreno común es el primer paso hacia el acuerdo.", exampleSentenceLatam: "El punto de convergencia reduce la brecha inicial.", partOfSpeech: "noun" },
  { id: "c1-02-fc15", frontSpain: "Temporalidad estratégica", frontLatam: "Momento indicado", backEnglish: "Strategic timing", variantDifferenceNote: "'Temporalidad' (formal) in Spain; 'momento' (simple) in Mexico.", exampleSentenceSpain: "La temporalidad estratégica puede cambiar el resultado de la negociación.", exampleSentenceLatam: "El momento indicado para presentar la oferta es crucial.", partOfSpeech: "noun" },
  { id: "c1-02-fc16", frontSpain: "Criterios objetivos", frontLatam: "Estándares claros", backEnglish: "Objective criteria", variantDifferenceNote: "'Criterios' in Spain; 'estándares' in Mexico. Both refer to measurable standards.", exampleSentenceSpain: "Los criterios objetivos (mercado, benchmarks) justifican la posición.", exampleSentenceLatam: "Los estándares claros evitan disputas sobre valores.", partOfSpeech: "noun" },
  { id: "c1-02-fc17", frontSpain: "Enfoque basado en intereses", frontLatam: "Método de intereses compartidos", backEnglish: "Interest-based negotiation", variantDifferenceNote: "'Basado en' in Spain; 'de intereses compartidos' in Mexico. Both refer to needs-based approach.", exampleSentenceSpain: "Un enfoque basado en intereses identifica lo que realmente importa.", exampleSentenceLatam: "El método de intereses compartidos es más efectivo que posicional.", partOfSpeech: "noun" },
  { id: "c1-02-fc18", frontSpain: "Dinámica de poder", frontLatam: "Balance de fuerzas", backEnglish: "Power dynamic", variantDifferenceNote: "'Dinámica' in Spain; 'balance' in Mexico. Both refer to who has leverage.", exampleSentenceSpain: "Entender la dinámica de poder es crucial en cualquier negociación.", exampleSentenceLatam: "El balance de fuerzas determina los resultados finales.", partOfSpeech: "noun" },
  { id: "c1-02-fc19", frontSpain: "Posición de retaguardia", frontLatam: "Plan B", backEnglish: "Fallback position", variantDifferenceNote: "'Retaguardia' (military metaphor) in Spain; 'Plan B' (simple) in Mexico.", exampleSentenceSpain: "Siempre tener una posición de retaguardia es esencial.", exampleSentenceLatam: "Tener un Plan B da confianza en la mesa de negociación.", partOfSpeech: "noun" },
  { id: "c1-02-fc20", frontSpain: "Espíritu de colaboración", frontLatam: "Actitud cooperativa", backEnglish: "Spirit of collaboration", variantDifferenceNote: "'Espíritu' in Spain; 'actitud' in Mexico. Both refer to mindset.", exampleSentenceSpain: "El espíritu de colaboración es lo que distingue buenos acuerdos.", exampleSentenceLatam: "Una actitud cooperativa abre más puertas que la confrontación.", partOfSpeech: "noun" },
];

export const LESSON_C1_02: LessonData = {
  id: "c1-02",
  title: "Persuasion & Negotiation",
  slug: "persuasion-negotiation",
  description: "Master collaborative deal-making, professional concessions, and strategic conditional tenses in Spain and LATAM business contexts.",
  difficulty: "Advanced",
  level: "C1",
  order: 2,
  imageUrl: null,
  durationMinutes: 25,
  isPublished: true,
  vocabularyTable: c1_02_vocab,
  grammarSection: c1_02_grammar,
  dialogues: c1_02_dialogues,
  quiz: c1_02_quiz,
  flashcards: c1_02_flashcards,
  vocabularyJson: c1_02_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: c1_02_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Persuasion and negotiation lesson covering collaborative deal-making in Spain vs LATAM.",
};

// ============================================================
// LESSON C1.03: Advanced Storytelling
// ============================================================

const c1_03_vocab: RegionalVocabItem[] = [
  { word: "Suspense technique", spainVariant: "Técnica de suspenso", latamVariant: "Estrategia de intriga", phoneticSpain: "[ˈtɛk.ni.ka ðe sus.ˈpen.so]", phoneticLatam: "[es.tɾa.ˈte.xja ðe in.ˈtɾi.ɡa]", english: "Suspense building technique", partOfSpeech: "noun" },
  { word: "Plot twist", spainVariant: "Giro de trama", latamVariant: "Cambio sorpresivo", phoneticSpain: "[ˈɡi.ɾo ðe ˈtɾa.ma]", phoneticLatam: "[ˈkam.bio soɾ.pɾe.ˈsi.βo]", english: "Plot twist", partOfSpeech: "noun" },
  { word: "Narrative structure", spainVariant: "Estructura narrativa", latamVariant: "Construcción del relato", phoneticSpain: "[es.tɾuk.ˈtu.ɾa naɾ.ɾa.ˈti.βa]", phoneticLatam: "[kons.truk.ˈθjon ðel ɾe.ˈla.to]", english: "Narrative structure", partOfSpeech: "noun" },
  { word: "Dramatic irony", spainVariant: "Ironía dramática", latamVariant: "Ironía de situación", phoneticSpain: "[i.ɾo.ˈni.a dɾa.ˈma.ti.ka]", phoneticLatam: "[i.ɾo.ˈni.a ðe si.tu.a.ˈθjon]", english: "Dramatic irony", partOfSpeech: "noun" },
  { word: "Character arc", spainVariant: "Evolución del personaje", latamVariant: "Arco de desarrollo", phoneticSpain: "[e.βo.lu.ˈθjon ðel peɾ.so.ˈna.xe]", phoneticLatam: "[ˈaɾ.ko ðe de.sa.ˈɾɾo.ʎo]", english: "Character arc", partOfSpeech: "noun" },
  { word: "Foreshadowing", spainVariant: "Presagio narrativo", latamVariant: "Anticipación", phoneticSpain: "[pɾe.ˈsa.xjo naɾ.ɾa.ˈti.βo]", phoneticLatam: "[an.ti.si.pa.ˈθjon]", english: "Foreshadowing", partOfSpeech: "noun" },
  { word: "Pacing", spainVariant: "Ritmo narrativo", latamVariant: "Velocidad de la trama", phoneticSpain: "[ˈɾi.tmo naɾ.ɾa.ˈti.βo]", phoneticLatam: "[βe.lo.ˈθi.ðað ðe la ˈtɾa.ma]", english: "Narrative pacing", partOfSpeech: "noun" },
  { word: "Subplot", spainVariant: "Trama secundaria", latamVariant: "Línea argumental", phoneticSpain: "[ˈtɾa.ma se.kun.ˈda.ɾja]", phoneticLatam: "[ˈli.ne.a aɾ.ɡu.men.ˈtal]", english: "Subplot", partOfSpeech: "noun" },
  { word: "Climax", spainVariant: "Clímax", latamVariant: "Punto culminante", phoneticSpain: "[ˈkli.maks]", phoneticLatam: "[ˈpun.to kul.mi.ˈnan.te]", english: "Climax", partOfSpeech: "noun" },
  { word: "Resolution", spainVariant: "Desenlace", latamVariant: "Resolución", phoneticSpain: "[de.sen.ˈla.θe]", phoneticLatam: "[ɾe.so.lu.ˈθjon]", english: "Resolution/Denouement", partOfSpeech: "noun" },
  { word: "Dramatic tension", spainVariant: "Tensión dramática", latamVariant: "Tensión narrativa", phoneticSpain: "[ten.ˈsjon dɾa.ˈma.ti.ka]", phoneticLatam: "[ten.ˈsjon naɾ.ɾa.ˈti.βa]", english: "Dramatic tension", partOfSpeech: "noun" },
  { word: "Callback", spainVariant: "Llamada de vuelta", latamVariant: "Referencia anterior", phoneticSpain: "[ʎa.ˈma.ða ðe ˈβwel.ta]", phoneticLatam: "[ɾe.fe.ˈɾen.θja an.te.ˈɾjoɾ]", english: "Callback/Reference", partOfSpeech: "noun" },
  { word: "Dialogue rhythm", spainVariant: "Ritmo del diálogo", latamVariant: "Flujo conversacional", phoneticSpain: "[ˈɾi.tmo ðel ðja.ˈlo.ɡo]", phoneticLatam: "[ˈflu.xo kon.βeɾ.sa.θjo.ˈnal]", english: "Dialogue rhythm", partOfSpeech: "noun" },
  { word: "Tension release", spainVariant: "Liberación de tensión", latamVariant: "Descarga emocional", phoneticSpain: "[li.be.ɾa.ˈθjon ðe ten.ˈsjon]", phoneticLatam: "[des.ˈkaɾ.ɡa e.mo.θjo.ˈnal]", english: "Tension release", partOfSpeech: "noun" },
  { word: "Punchline setup", spainVariant: "Preparación de remate", latamVariant: "Configuración del chiste", phoneticSpain: "[pɾe.pa.ɾa.ˈθjon ðe ɾe.ˈma.te]", phoneticLatam: "[kon.fi.ɡu.ɾa.ˈθjon ðel ˈtʃis.te]", english: "Punchline setup", partOfSpeech: "noun" },
  { word: "Subtext layer", spainVariant: "Capa de subtexto", latamVariant: "Nivel implícito", phoneticSpain: "[ˈka.pa ðe sub.ˈtɛks.to]", phoneticLatam: "[ni.ˈβel im.ˈpli.θi.to]", english: "Subtext layer", partOfSpeech: "noun" },
  { word: "Flashback technique", spainVariant: "Técnica de retrospectiva", latamVariant: "Cambio temporal", phoneticSpain: "[ˈtɛk.ni.ka ðe ɾes.pɾos.pek.ˈti.βa]", phoneticLatam: "[ˈkam.bio tem.po.ˈral]", english: "Flashback technique", partOfSpeech: "noun" },
  { word: "Stakes escalation", spainVariant: "Elevación de apuestas", latamVariant: "Incremento de riesgo", phoneticSpain: "[e.le.βa.ˈθjon ðe a.ˈpwes.tas]", phoneticLatam: "[in.kɾe.ˈmen.to ðe ˈɾies.ɡo]", english: "Raising stakes", partOfSpeech: "noun" },
  { word: "Narrative distance", spainVariant: "Distancia narrativa", latamVariant: "Perspectiva del narrador", phoneticSpain: "[dis.ˈtan.θja naɾ.ɾa.ˈti.βa]", phoneticLatam: "[peɾ.spek.ˈti.βa ðel na.ɾa.ˈðoɾ]", english: "Narrative distance/POV", partOfSpeech: "noun" },
  { word: "Emotional payload", spainVariant: "Carga emocional", latamVariant: "Impacto sentimental", phoneticSpain: "[ˈkaɾ.ɡa e.mo.θjo.ˈnal]", phoneticLatam: "[im.ˈpak.to sen.ti.ˈmen.tal]", english: "Emotional impact", partOfSpeech: "noun" },
];

const c1_03_grammar: GrammarItem[] = [
  {
    title: "Temporal Structures in Narrative (Pretérito vs. Imperfecto)",
    spainContent: "Spanish storytelling relies on precise use of pretérito (completed actions) vs imperfecto (background/ongoing). 'Entré en la casa. La puerta estaba abierta. Había silencio. Luego oí un ruido.' This creates suspense through temporal layering. Present perfect ('He visto') is rarely used in narratives except in Spain's spoken tradition. Subjunctive after temporal clauses: 'Mientras caminábamos, aunque no sabía lo que pasaría...'",
    latamContent: "Mexican narrative often shifts tempo for dramatic effect, using pretérito for key moments and imperfecto for atmosphere. 'Abrí la puerta. Estaba oscuro. De repente, un grito.' Mexico also uses present tense for immediacy ('Entro a la casa, y qué ves...'). Subjunctive after 'aunque', 'si' for hypothetical layers: 'Aunque hubiera sabido lo que pasaría, igual habría entrado.'",
    note: "Both use pretérito/imperfecto but Spain maintains strict separation; Mexico blends tenses for dramatic rhythm. Present tense is a Mexican orality marker.",
  },
  {
    title: "Dialogue as Pacing & Characterization",
    spainContent: "Spanish dialogue in stories often carries subtext through formal register shifts. A character might shift from 'vosotros' to 'usted' to show emotional distance. Interruptions use 'Pero...' or 'Espera...' with dashes. Narrated speech ('Me dijo que vendría') creates narrative distance. Spanish prefers long, flowing dialogue with subordinate clauses inside speech.",
    latamContent: "Mexican dialogue is more natural and fragmented. Characters use 'güey', 'mira', 'oye' as speech markers that show personality. Interruptions are abrupt ('¡Espérate! / —Pero...'). Reported speech is simpler: 'Dijo que vendría.' Mexico uses shorter dialogue beats interspersed with action, creating faster pace.",
    note: "Spain: dialogue carries linguistic precision and subtext; Mexico: dialogue carries personality and immediacy. Spanish stories are more 'written'; Mexican stories are more 'spoken'.",
  },
];

const c1_03_dialogues: DialogueScenario[] = [
  {
    id: "c1-03-sp-1",
    title: "Story Workshop (Spain's Narrative Technique)",
    region: "SPAIN",
    setting: "Literary workshop in Madrid",
    lines: [
      { speaker: "Escritor", text: "La tensión necesita escalarse. Mira: 'Entró en la casa. Había silencio. Luego, un ruido.' Eso es mejor que 'entró asustado'. El lector siente el miedo contigo.", region: "SPAIN", setting: "Madrid workshop" },
      { speaker: "Taller", text: "Entiendo. Entonces, ¿es el ritmo lo que crea la emoción? ¿No la descripción?", region: "SPAIN", setting: "Madrid workshop" },
      { speaker: "Escritor", text: "Exacto. El ritmo imperfecto-pretérito crea anticipación. 'Mientras caminaba (imperfecto), vi (pretérito) algo'. Ese cambio de tiempo es visceral.", region: "SPAIN", setting: "Madrid workshop" },
    ],
  },
  {
    id: "c1-03-sp-2",
    title: "Crafting the Climax",
    region: "SPAIN",
    setting: "Editing session in Barcelona",
    lines: [
      { speaker: "Editor", text: "El clímax llega demasiado rápido. Necesita más presagio. Introduce detalles en las primeras páginas que cobren sentido aquí.", region: "SPAIN", setting: "Barcelona editing" },
      { speaker: "Autor", text: "¿Como qué tipo de detalles? ¿Explícitos o sutiles?", region: "SPAIN", setting: "Barcelona editing" },
      { speaker: "Editor", text: "Sutiles. Una mención casual. Algo que el lector olvida pero reconoce después. Eso es lo que llamamos 'remate' en narrativa. Hace el final resonante.", region: "SPAIN", setting: "Barcelona editing" },
    ],
  },
  {
    id: "c1-03-sp-3",
    title: "Story Development",
    region: "SPAIN",
    setting: "Coffee between writers in Seville",
    lines: [
      { speaker: "Narradora", text: "El personaje no cambia. Entra como héroe, sale como héroe. No hay arco.", region: "SPAIN", setting: "Seville café" },
      { speaker: "Colega", text: "¿Pero qué quieres que suceda? ¿Una transformación?", region: "SPAIN", setting: "Seville café" },
      { speaker: "Narradora", text: "Sí. Que sus certezas se fracturan durante la historia. Que al final sea más frágil, más humano. Eso es lo que engancha al lector.", region: "SPAIN", setting: "Seville café" },
    ],
  },
  {
    id: "c1-03-la-1",
    title: "Storytelling Workshop (Mexico's Oral Tradition)",
    region: "LATAM",
    setting: "Writing workshop in Mexico City",
    lines: [
      { speaker: "Instructor", text: "Mira, la clave es el ritmo. 'Abro la puerta. Oscuridad. De repente, un grito.' Corto. Rápido. El lector no respira.", region: "LATAM", setting: "CDMX workshop" },
      { speaker: "Estudiante", text: "Pero así pierde detalle. ¿No debería describir la atmósfera?", region: "LATAM", setting: "CDMX workshop" },
      { speaker: "Instructor", text: "La atmósfera la crea el silencio entre palabras, güey. El lector llena los espacios vacíos con su imaginación. Eso es más poderoso que una descripción.", region: "LATAM", setting: "CDMX workshop" },
    ],
  },
  {
    id: "c1-03-la-2",
    title: "Dialogue & Personality",
    region: "LATAM",
    setting: "Authors' discussion in Guadalajara",
    lines: [
      { speaker: "Novelista", text: "En mi historia, cada personaje tiene forma de hablar. Uno dice 'órale', otro 'no manches', otro ni dice nada. El diálogo define todo.", region: "LATAM", setting: "Guadalajara discussion" },
      { speaker: "Crítico", text: "Eso es muy mexicano. ¿No se pierde sutileza?", region: "LATAM", setting: "Guadalajara discussion" },
      { speaker: "Novelista", text: "Negativo. La subtileza está en lo que NO dicen. El silencio entre palabras. 'Ven aquí / —Que no / —Vente.' Con eso basta para que sientas la tensión.", region: "LATAM", setting: "Guadalajara discussion" },
    ],
  },
  {
    id: "c1-03-la-3",
    title: "Plot Development",
    region: "LATAM",
    setting: "Literary salon in Monterrey",
    lines: [
      { speaker: "Escritor", text: "Mi personaje empieza fuerte, pero la trama lo quiebra. Al final, sigue vivo pero destrozado.", region: "LATAM", setting: "Monterrey salon" },
      { speaker: "Audiencia", text: "¿Eso es lo que buscas? ¿Un final triste?", region: "LATAM", setting: "Monterrey salon" },
      { speaker: "Escritor", text: "No triste. Honesto. La vida no da finales felices. Da aprendizaje, trauma, supervivencia. Eso engancha porque es real.", region: "LATAM", setting: "Monterrey salon" },
    ],
  },
];

const c1_03_quiz: QuizQuestion[] = [
  {
    questionId: "c1-03-q1",
    type: "multiple-choice",
    questionText: "In Spanish narrative, why is the shift from imperfecto to pretérito important for suspense?",
    options: ["It speeds up the story", "It creates a temporal shift that signals a key action point", "It makes dialogue sound more natural", "It has no narrative function"],
    correctAnswer: "It creates a temporal shift that signals a key action point",
    explanation: "Imperfecto sets atmosphere; pretérito delivers action. The shift from one to the other creates tension and marks significant moments.",
  },
  {
    questionId: "c1-03-q2",
    type: "multiple-choice",
    questionText: "In Mexican storytelling, short, fragmented dialogue like 'Abro la puerta / —Oscuridad / —De repente, un grito' serves to:",
    options: ["Make the story easier to read", "Create immediacy and escalate tension through pacing", "Show the character is uneducated", "Indicate the story is unfinished"],
    correctAnswer: "Create immediacy and escalate tension through pacing",
    explanation: "Mexican oral tradition values pace over description. Short beats create rhythm and force the reader to actively imagine.",
  },
  {
    questionId: "c1-03-q3",
    type: "multiple-choice",
    questionText: "What is 'foreshadowing' (presagio) in narrative structure?",
    options: ["A mistake in the plot", "A subtle early hint that gains meaning at the climax", "When a character tells the future", "A way to confuse the reader"],
    correctAnswer: "A subtle early hint that gains meaning at the climax",
    explanation: "Foreshadowing plants details early that the reader might forget but later recognize as crucial—creating resonance and inevitability.",
  },
  {
    questionId: "c1-03-q4",
    type: "multiple-choice",
    questionText: "In Spanish literary tradition, what role does 'subtext' play in dialogue?",
    options: ["It replaces the need for action", "Characters communicate meaning beyond their actual words through register shifts and word choice", "It is unnecessary for serious literature", "It only appears in comedies"],
    correctAnswer: "Characters communicate meaning beyond their actual words through register shifts and word choice",
    explanation: "Spanish narrative values linguistic precision. A shift from 'tú' to 'usted' carries emotional meaning distinct from the words spoken.",
  },
  {
    questionId: "c1-03-q5",
    type: "multiple-choice",
    questionText: "What distinguishes Spanish narrative pacing from Mexican narrative pacing?",
    options: ["Spain uses more dialogue", "Spain favors long, flowing structure; Mexico favors short, punchy beats", "Mexico never uses suspense", "There is no meaningful difference"],
    correctAnswer: "Spain favors long, flowing structure; Mexico favors short, punchy beats",
    explanation: "Spain's narrative tends toward complex subordinate clauses and extended scenes; Mexico's toward rapid scene changes and minimal description.",
  },
];

const c1_03_flashcards: FlashcardItem[] = [
  { id: "c1-03-fc1", frontSpain: "Técnica de suspenso", frontLatam: "Estrategia de intriga", backEnglish: "Suspense building technique", variantDifferenceNote: "'Suspenso' in Spain; 'intriga' in Mexico. Both refer to narrative tension.", exampleSentenceSpain: "La técnica de suspenso requiere escalación gradual de tensión.", exampleSentenceLatam: "La estrategia de intriga mantiene al lector en vilo.", partOfSpeech: "noun" },
  { id: "c1-03-fc2", frontSpain: "Giro de trama", frontLatam: "Cambio sorpresivo", backEnglish: "Plot twist", variantDifferenceNote: "'Giro' in Spain; 'cambio' in Mexico. Both refer to unexpected turning point.", exampleSentenceSpain: "El giro de trama debe ser inevitable pero inesperado.", exampleSentenceLatam: "El cambio sorpresivo en el acto tres redefine todo.", partOfSpeech: "noun" },
  { id: "c1-03-fc3", frontSpain: "Estructura narrativa", frontLatam: "Construcción del relato", backEnglish: "Narrative structure", variantDifferenceNote: "'Estructura' in Spain; 'construcción' in Mexico. Both refer to plot organization.", exampleSentenceSpain: "La estructura narrativa clásica es: exposición, nudo, desenlace.", exampleSentenceLatam: "La construcción del relato debe respetar ciertas leyes.", partOfSpeech: "noun" },
  { id: "c1-03-fc4", frontSpain: "Ironía dramática", frontLatam: "Ironía de situación", backEnglish: "Dramatic irony", variantDifferenceNote: "'Dramática' in Spain; 'de situación' in Mexico. Both refer to knowing more than characters.", exampleSentenceSpain: "La ironía dramática es cuando el lector sabe más que el personaje.", exampleSentenceLatam: "La ironía de situación crea tensión en el lector.", partOfSpeech: "noun" },
  { id: "c1-03-fc5", frontSpain: "Evolución del personaje", frontLatam: "Arco de desarrollo", backEnglish: "Character arc", variantDifferenceNote: "'Evolución' in Spain; 'arco' (technical term) in Mexico.", exampleSentenceSpain: "La evolución del personaje es lo que engancha emocionalmente.", exampleSentenceLatam: "El arco de desarrollo debe ser convincente y gradual.", partOfSpeech: "noun" },
  { id: "c1-03-fc6", frontSpain: "Presagio narrativo", frontLatam: "Anticipación", backEnglish: "Foreshadowing", variantDifferenceNote: "'Presagio' in Spain; 'anticipación' in Mexico. Both mark early hints.", exampleSentenceSpain: "Un presagio narrativo temprano cobra sentido en el climax.", exampleSentenceLatam: "La anticipación debe ser sutil para no revelar demasiado.", partOfSpeech: "noun" },
  { id: "c1-03-fc7", frontSpain: "Ritmo narrativo", frontLatam: "Velocidad de la trama", backEnglish: "Narrative pacing", variantDifferenceNote: "'Ritmo' in Spain; 'velocidad' in Mexico. Both refer to tempo.", exampleSentenceSpain: "El ritmo narrativo acelera hacia el climax.", exampleSentenceLatam: "La velocidad de la trama debe variar para mantener interés.", partOfSpeech: "noun" },
  { id: "c1-03-fc8", frontSpain: "Trama secundaria", frontLatam: "Línea argumental", backEnglish: "Subplot", variantDifferenceNote: "'Trama' in Spain; 'línea' in Mexico. Both refer to parallel story.", exampleSentenceSpain: "La trama secundaria enriquece la trama principal.", exampleSentenceLatam: "La línea argumental del amor rivaliza con la acción.", partOfSpeech: "noun" },
  { id: "c1-03-fc9", frontSpain: "Clímax", frontLatam: "Punto culminante", backEnglish: "Climax", variantDifferenceNote: "'Clímax' (universal); 'punto culminante' (descriptive) in Mexico.", exampleSentenceSpain: "El clímax debe justificar todo lo que vino antes.", exampleSentenceLatam: "El punto culminante resuelve la tensión acumulada.", partOfSpeech: "noun" },
  { id: "c1-03-fc10", frontSpain: "Desenlace", frontLatam: "Resolución", backEnglish: "Resolution", variantDifferenceNote: "'Desenlace' in Spain; 'resolución' in Mexico. Both mark story's ending.", exampleSentenceSpain: "El desenlace debe ser satisfactorio pero inesperado.", exampleSentenceLatam: "La resolución cierra todos los hilos narrativos.", partOfSpeech: "noun" },
  { id: "c1-03-fc11", frontSpain: "Tensión dramática", frontLatam: "Tensión narrativa", backEnglish: "Dramatic tension", variantDifferenceNote: "'Dramática' in Spain; 'narrativa' in Mexico. Both refer to reader suspense.", exampleSentenceSpain: "La tensión dramática es el combustible de la trama.", exampleSentenceLatam: "La tensión narrativa mantiene páginas viradas.", partOfSpeech: "noun" },
  { id: "c1-03-fc12", frontSpain: "Llamada de vuelta", frontLatam: "Referencia anterior", backEnglish: "Callback/Echo", variantDifferenceNote: "'Llamada' in Spain; 'referencia' in Mexico. Both refer to earlier plot point repeated.", exampleSentenceSpain: "Una llamada de vuelta al diálogo inicial resuena en el final.", exampleSentenceLatam: "La referencia anterior adquiere nuevo significado.", partOfSpeech: "noun" },
  { id: "c1-03-fc13", frontSpain: "Ritmo del diálogo", frontLatam: "Flujo conversacional", backEnglish: "Dialogue rhythm", variantDifferenceNote: "'Ritmo' in Spain; 'flujo' in Mexico. Both refer to conversation tempo.", exampleSentenceSpain: "El ritmo del diálogo revela el estado emocional del personaje.", exampleSentenceLatam: "El flujo conversacional debe sonar natural, no escrito.", partOfSpeech: "noun" },
  { id: "c1-03-fc14", frontSpain: "Liberación de tensión", frontLatam: "Descarga emocional", backEnglish: "Tension release", variantDifferenceNote: "'Liberación' in Spain; 'descarga' in Mexico. Both refer to emotional relief.", exampleSentenceSpain: "La liberación de tensión tras el climax es catártica.", exampleSentenceLatam: "La descarga emocional permite que el lector respire.", partOfSpeech: "noun" },
  { id: "c1-03-fc15", frontSpain: "Preparación de remate", frontLatam: "Configuración del chiste", backEnglish: "Punchline setup", variantDifferenceNote: "'Remate' in Spain; 'chiste' in Mexico. Both refer to joke delivery.", exampleSentenceSpain: "La preparación de remate es más importante que el remate.", exampleSentenceLatam: "La configuración del chiste determina si ríes o no.", partOfSpeech: "noun" },
  { id: "c1-03-fc16", frontSpain: "Capa de subtexto", frontLatam: "Nivel implícito", backEnglish: "Subtext layer", variantDifferenceNote: "'Capa' in Spain; 'nivel' in Mexico. Both refer to hidden meaning.", exampleSentenceSpain: "La capa de subtexto es donde vive la verdadera emoción.", exampleSentenceLatam: "El nivel implícito es lo que el lector realmente siente.", partOfSpeech: "noun" },
  { id: "c1-03-fc17", frontSpain: "Técnica de retrospectiva", frontLatam: "Cambio temporal", backEnglish: "Flashback technique", variantDifferenceNote: "'Retrospectiva' in Spain; 'cambio temporal' in Mexico. Both shift time.", exampleSentenceSpain: "La técnica de retrospectiva contextualiza el presente.", exampleSentenceLatam: "El cambio temporal debe justificarse narrativamente.", partOfSpeech: "noun" },
  { id: "c1-03-fc18", frontSpain: "Elevación de apuestas", frontLatam: "Incremento de riesgo", backEnglish: "Raising stakes", variantDifferenceNote: "'Apuestas' in Spain; 'riesgo' in Mexico. Both refer to what's at risk.", exampleSentenceSpain: "La elevación de apuestas hace que cada decisión importe más.", exampleSentenceLatam: "El incremento de riesgo mantiene al lector atrapado.", partOfSpeech: "noun" },
  { id: "c1-03-fc19", frontSpain: "Distancia narrativa", frontLatam: "Perspectiva del narrador", backEnglish: "Narrative distance/POV", variantDifferenceNote: "'Distancia' in Spain; 'perspectiva' in Mexico. Both refer to narrator position.", exampleSentenceSpain: "La distancia narrativa afecta cómo el lector experimenta la historia.", exampleSentenceLatam: "La perspectiva del narrador define todo lo que sabemos.", partOfSpeech: "noun" },
  { id: "c1-03-fc20", frontSpain: "Carga emocional", frontLatam: "Impacto sentimental", backEnglish: "Emotional impact", variantDifferenceNote: "'Carga' in Spain; 'impacto' in Mexico. Both refer to emotional weight.", exampleSentenceSpain: "La carga emocional del final debe ser devastadora.", exampleSentenceLatam: "El impacto sentimental es lo que permanece después de leer.", partOfSpeech: "noun" },
];

export const LESSON_C1_03: LessonData = {
  id: "c1-03",
  title: "Advanced Storytelling",
  slug: "advanced-storytelling",
  description: "Master suspense generation, advanced subplots, dramatic delivery, and punchlines using Spain's literary tradition and Mexico's oral heritage.",
  difficulty: "Advanced",
  level: "C1",
  order: 3,
  imageUrl: null,
  durationMinutes: 25,
  isPublished: true,
  vocabularyTable: c1_03_vocab,
  grammarSection: c1_03_grammar,
  dialogues: c1_03_dialogues,
  quiz: c1_03_quiz,
  flashcards: c1_03_flashcards,
  vocabularyJson: c1_03_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: c1_03_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Advanced storytelling lesson covering narrative techniques in Spain vs LATAM.",
};

// ============================================================
// LESSONS C1.04 through C1.10 - PLACEHOLDER STRUCTURE
// (Full implementations follow same pattern as C1.01-C1.03)
// ============================================================

// C1.04: Subtext, Indirectness & Hidden Meaning
const c1_04_vocab: RegionalVocabItem[] = [
  { word: "Subtext", spainVariant: "Subtexto", latamVariant: "Lo no dicho", phoneticSpain: "[sub.ˈtɛks.to]", phoneticLatam: "[lo no ˈði.tʃo]", english: "Subtext / unstated meaning", partOfSpeech: "noun" },
  { word: "Polite evasion", spainVariant: "Evasión cortés", latamVariant: "Evasión diplomática", phoneticSpain: "[e.βa.ˈsjon koɾ.ˈtes]", phoneticLatam: "[e.βa.ˈsjon di.plo.ˈma.ti.ka]", english: "Polite refusal/evasion", partOfSpeech: "noun" },
  { word: "Indirect communication", spainVariant: "Comunicación indirecta", latamVariant: "Comunicación velada", phoneticSpain: "[ko.mu.ni.ka.ˈθjon in.ðiˈɾek.ta]", phoneticLatam: "[ko.mu.ni.ka.ˈθjon βe.ˈla.ða]", english: "Indirect communication", partOfSpeech: "noun" },
  { word: "Tone markers", spainVariant: "Marcadores de tono", latamVariant: "Señales tonales", phoneticSpain: "[maɾ.ka.ˈðo.ɾes ðe ˈto.no]", phoneticLatam: "[se.ˈɲa.les to.ˈna.les]", english: "Tone indicators", partOfSpeech: "noun" },
  { word: "Cultural assumption", spainVariant: "Suposición cultural", latamVariant: "Presupuesto cultural", phoneticSpain: "[su.po.si.ˈθjon kul.tu.ˈral]", phoneticLatam: "[pɾe.su.ˈpwes.to kul.tu.ˈral]", english: "Cultural assumption", partOfSpeech: "noun" },
  { word: "Implied rejection", spainVariant: "Rechazo implícito", latamVariant: "Negación velada", phoneticSpain: "[ɾe.ˈtʃa.θo im.ˈpli.θi.to]", phoneticLatam: "[ne.ɡa.ˈθjon βe.ˈla.ða]", english: "Implied refusal", partOfSpeech: "noun" },
  { word: "Sarcasm layer", spainVariant: "Capa de sarcasmo", latamVariant: "Nivel sarcástico", phoneticSpain: "[ˈka.pa ðe saɾ.ˈkas.mo]", phoneticLatam: "[ni.ˈβel saɾ.ˈkas.ti.ko]", english: "Sarcastic layer", partOfSpeech: "noun" },
  { word: "Compliment camouflage", spainVariant: "Insulto disfrazado", latamVariant: "Crítica suave", phoneticSpain: "[in.ˈsul.to dis.fɾa.ˈza.ðo]", phoneticLatam: "[ˈkɾi.ti.ka ˈswa.βe]", english: "Backhanded compliment", partOfSpeech: "noun" },
  { word: "Code-switching signal", spainVariant: "Cambio de registro", latamVariant: "Cambio de código", phoneticSpain: "[ˈkam.bio ðe ɾe.ˈɡis.tɾo]", phoneticLatam: "[ˈkam.bio ðe ˈko.ði.ɡo]", english: "Register shift signal", partOfSpeech: "noun" },
  { word: "Unspoken agreement", spainVariant: "Acuerdo tácito", latamVariant: "Entendimiento implícito", phoneticSpain: "[a.ˈkweɾ.ðo ˈtak.ti.to]", phoneticLatam: "[en.ten.ði.ˈmjen.to im.ˈpli.θi.to]", english: "Tacit understanding", partOfSpeech: "noun" },
  { word: "Face-saving formula", spainVariant: "Fórmula de salvaguardia", latamVariant: "Forma de salvar la cara", phoneticSpain: "[ˈfoɾ.mu.la ðe sal.βa.ˈɡwaɾ.ðja]", phoneticLatam: "[ˈfoɾ.ma ðe sal.ˈβaɾ la ˈka.ɾa]", english: "Face-saving phrase", partOfSpeech: "noun" },
  { word: "Pregnant silence", spainVariant: "Silencio elocuente", latamVariant: "Pausa significativa", phoneticSpain: "[si.ˈlen.θjo e.lo.ˈkwen.te]", phoneticLatam: "[ˈpau.sa siɡ.ni.fi.ka.ˈti.βa]", english: "Meaningful silence", partOfSpeech: "noun" },
  { word: "Hedged statement", spainVariant: "Afirmación cautelosa", latamVariant: "Declaración atenuada", phoneticSpain: "[a.fiɾ.ma.ˈθjon kaw.te.ˈlo.sa]", phoneticLatam: "[de.kla.ɾa.ˈθjon a.te.ˈnwa.ða]", english: "Cautious statement", partOfSpeech: "noun" },
  { word: "Double entendre", spainVariant: "Doble sentido", latamVariant: "Ambigüedad intencionada", phoneticSpain: "[ˈðo.ble sen.ˈti.ðo]", phoneticLatam: "[am.bi.ɡwe.ˈðað in.ten.θjo.ˈna.ða]", english: "Double meaning", partOfSpeech: "noun" },
  { word: "Social lubricant", spainVariant: "Locución social", latamVariant: "Fórmula de cortesía", phoneticSpain: "[lo.ˈku.θjon so.ˈθjal]", phoneticLatam: "[ˈfoɾ.mu.la ðe koɾ.te.ˈsi.a]", english: "Social filler phrase", partOfSpeech: "noun" },
  { word: "Asymmetric power indicator", spainVariant: "Indicador de poder", latamVariant: "Señal de jerarquía", phoneticSpain: "[in.di.ka.ˈðoɾ ðe po.ˈðeɾ]", phoneticLatam: "[se.ˈɲal ðe xe.ɾaɾ.ˈki.a]", english: "Status/power indicator", partOfSpeech: "noun" },
  { word: "Conditional affirmation", spainVariant: "Afirmación condicional", latamVariant: "Acuerdo condicional", phoneticSpain: "[a.fiɾ.ma.ˈθjon kon.di.θjo.ˈnal]", phoneticLatam: "[a.ˈkweɾ.ðo kon.di.θjo.ˈnal]", english: "Conditional yes/no", partOfSpeech: "noun" },
  { word: "Ironic resignation", spainVariant: "Resignación irónica", latamVariant: "Aceptación burlona", phoneticSpain: "[ɾe.siɡ.na.ˈθjon i.ˈro.ni.ka]", phoneticLatam: "[a.θep.ta.ˈθjon buɾ.ˈlo.na]", english: "Resigned acceptance", partOfSpeech: "noun" },
  { word: "Contextual presupposition", spainVariant: "Presupuesto contextual", latamVariant: "Suposición de contexto", phoneticSpain: "[pɾe.su.ˈpwes.to kon.tɛks.ˈtwal]", phoneticLatam: "[su.po.si.ˈθjon ðe ˈkoŋ.tɛks.to]", english: "Contextual assumption", partOfSpeech: "noun" },
  { word: "Strategic vagueness", spainVariant: "Vaguedad estratégica", latamVariant: "Ambigüedad deliberada", phoneticSpain: "[βa.ɡwe.ˈðað es.tɾa.ˈte.xi.ka]", phoneticLatam: "[am.bi.ɡwe.ˈðað de.li.ˈβe.ɾa.ða]", english: "Deliberate vagueness", partOfSpeech: "noun" },
];

const c1_04_grammar: GrammarItem[] = [
  {
    title: "Direct vs. Indirect Speech Acts in Spanish Politeness",
    spainContent: "Spanish politeness operates on a scale from direct ('No') to maximally indirect ('No sé si sea posible, pero lo que sí es cierto es que...'). Requests use subjunctive: '¿Sería posible que vinieras?' (indirect) vs. 'Ven' (direct imperative). Refusal uses 'me temo que', 'es que', 'el problema es que' as softeners. The more important the refusal, the more indirect the structure.",
    latamContent: "Mexican indirectness is similar but uses 'qué raro que' for disbelief, 'la verdad es que' for honesty-softened refusal. Mexico preserves directness more in informal registers ('no' or 'ni de pedo') but uses extreme indirectness in formal settings. The conditional is less frequent; subjunctive after 'a que' is more common: 'No creo que sea posible / Qué posible que sea, pero...'",
    note: "Both use subjunctive for indirectness but Spain structures longer, more complex evasions. Mexico alternates between direct and indirect more sharply.",
  },
  {
    title: "Implicit Cultural Rules (Direct vs. Indirect Societies)",
    spainContent: "Spain operates as a relatively direct society within formality constraints. 'No' is acceptable if framed diplomatically ('No es posible, pero qué sí se podría hacer...'). Directness increases with familiarity. The 'vosotros' form signals informality and permits more directness. Absence of directness signals coldness.",
    latamContent: "Mexico operates as a more indirect society, especially in professional contexts. Saying 'no' directly is rude even if softened. Instead: 'Veremos', 'Lo voy a checar', 'Ahorita no, pero después quizás'. Time expressions ('ahorita', 'al rato') function as refusal softeners. More distance/formality = more indirectness paradoxically.",
    note: "Spain: directness increases with intimacy. Mexico: directness decreases with formality. A 'no' from a Mexican authority figure is often acceptance; a 'sí' may be deferral.",
  },
];

const c1_04_dialogues: DialogueScenario[] = [
  {
    id: "c1-04-sp-1",
    title: "Diplomatic Refusal (Spain)",
    region: "SPAIN",
    setting: "Government office in Madrid",
    lines: [
      { speaker: "Official", text: "Entiendo tu propuesta. Sin embargo, me temo que no es posible implementarla en este momento. El problema es que nuestros recursos están comprometidos.", region: "SPAIN", setting: "Madrid office" },
      { speaker: "Applicant", text: "¿Hay algún momento en el futuro en que podría ser viable? ¿O es un no definitivo?", region: "SPAIN", setting: "Madrid office" },
      { speaker: "Official", text: "No es un no definitivo. Es más bien que ahora mismo, las circunstancias no lo permiten. Pero vuelve en tres meses y exploraremos opciones.", region: "SPAIN", setting: "Madrid office" },
    ],
  },
  {
    id: "c1-04-sp-2",
    title: "Implied Criticism (Spain)",
    region: "SPAIN",
    setting: "Corporate meeting in Barcelona",
    lines: [
      { speaker: "Manager", text: "Tu presentación fue... interesante. Muy original, ciertamente. No la he visto así antes.", region: "SPAIN", setting: "Barcelona meeting" },
      { speaker: "Employee", text: "Gracias, creo. ¿Hay algo que debería haber hecho diferente?", region: "SPAIN", setting: "Barcelona meeting" },
      { speaker: "Manager", text: "Bueno, el contenido es sólido. Lo que quizás podría refinarse es... la estructura. Para próximas veces, sugiero seguir más el formato estándar.", region: "SPAIN", setting: "Barcelona meeting" },
    ],
  },
  {
    id: "c1-04-sp-3",
    title: "Subtext in Friendship (Spain)",
    region: "SPAIN",
    setting: "Bar in Seville between old friends",
    lines: [
      { speaker: "Friend 1", text: "Hace mucho que no nos vemos. Estás... diferente.", region: "SPAIN", setting: "Seville bar" },
      { speaker: "Friend 2", text: "Sí, he estado ocupado. El trabajo es exigente.", region: "SPAIN", setting: "Seville bar" },
      { speaker: "Friend 1", text: "Claro. Es que echaba de menos hablar contigo. Parece que ya no tienes tiempo para esto.", region: "SPAIN", setting: "Seville bar" },
    ],
  },
  {
    id: "c1-04-la-1",
    title: "Evasive Refusal (Mexico)",
    region: "LATAM",
    setting: "Business meeting in Mexico City",
    lines: [
      { speaker: "Manager", text: "Tu propuesta es interesante. Muy buena idea. Lo que sí es cierto es que ahorita no podemos movernos en eso.", region: "LATAM", setting: "CDMX meeting" },
      { speaker: "Proposal", text: "Entonces, ¿es un 'no'? ¿O hay espacio para reconsiderar?", region: "LATAM", setting: "CDMX meeting" },
      { speaker: "Manager", text: "No es un 'no'. Es que por ahora hay otros prioritarios. Mejor vemos en un par de meses. Eso sí, me late tu idea.", region: "LATAM", setting: "CDMX meeting" },
    ],
  },
  {
    id: "c1-04-la-2",
    title: "Veiled Criticism (Mexico)",
    region: "LATAM",
    setting: "Office in Guadalajara",
    lines: [
      { speaker: "Supervisor", text: "Tu trabajo está bien. Lo que sí, la próxima vez quizás podrías investigar un poco más. Eso daría más solidez.", region: "LATAM", setting: "Guadalajara office" },
      { speaker: "Employee", text: "¿Significa que no fue suficiente? ¿O simplemente que podría mejorar?", region: "LATAM", setting: "Guadalajara office" },
      { speaker: "Supervisor", text: "No, funcionó. Pero sí hay margen. No es que hayas estado mal. Es que podría ser más fuerte. ¿Me captas?", region: "LATAM", setting: "Guadalajara office" },
    ],
  },
  {
    id: "c1-04-la-3",
    title: "Tacit Disagreement (Mexico)",
    region: "LATAM",
    setting: "Family dinner in Monterrey",
    lines: [
      { speaker: "Relative 1", text: "Tu novia parece buena gente. Muy amable. ¿Cuánto llevan juntos?", region: "LATAM", setting: "Monterrey dinner" },
      { speaker: "Relative 2", text: "Un año. ¿Por qué preguntas?", region: "LATAM", setting: "Monterrey dinner" },
      { speaker: "Relative 1", text: "Por nada. Es que, vaya, es que apenas la conozco. Debería traerla más seguido. Así la vamos conociendo mejor.", region: "LATAM", setting: "Monterrey dinner" },
    ],
  },
];

const c1_04_quiz: QuizQuestion[] = [
  {
    questionId: "c1-04-q1",
    type: "multiple-choice",
    questionText: "In Spanish, the phrase 'me temo que' signals:",
    options: ["Fear", "A softened refusal coming", "Agreement", "Excitement"],
    correctAnswer: "A softened refusal coming",
    explanation: "'Me temo que' (I fear that) is a classic Spanish politeness marker that typically precedes bad news or refusal.",
  },
  {
    questionId: "c1-04-q2",
    type: "multiple-choice",
    questionText: "In Mexico, saying 'Ahorita lo veo' or 'Veremos' often means:",
    options: ["I'll do it right now", "Definitely not, but politely", "I agree completely", "Let me think"],
    correctAnswer: "Definitely not, but politely",
    explanation: "Mexican time expressions ('ahorita', 'veremos') function as polite deferrals or refusals, not actual commitments.",
  },
  {
    questionId: "c1-04-q3",
    type: "multiple-choice",
    questionText: "The Spanish phrase 'Tu presentación fue... interesante' with the pause is likely:",
    options: ["Genuine praise", "A polite criticism disguised as praise", "Neutral observation", "Sarcasm"],
    correctAnswer: "A polite criticism disguised as praise",
    explanation: "The pause and hedging ('interesante', 'muy original') signal subtle criticism while maintaining politeness.",
  },
  {
    questionId: "c1-04-q4",
    type: "multiple-choice",
    questionText: "In both Spain and Mexico, when an authority says 'Es que hay otros prioritarios', they are:",
    options: ["Asking for help prioritizing", "Refusing without saying no directly", "Offering an explanation", "Asking for time"],
    correctAnswer: "Refusing without saying no directly",
    explanation: "Both cultures use 'es que' + context/obstacles to refuse indirectly without the harsh 'no'.",
  },
  {
    questionId: "c1-04-q5",
    type: "multiple-choice",
    questionText: "What is the key difference in directness between Spain and Mexico?",
    options: ["Spain is always more direct", "Mexico is always more direct", "Spain increases directness with intimacy; Mexico increases indirectness with formality", "There is no meaningful difference"],
    correctAnswer: "Spain increases directness with intimacy; Mexico increases indirectness with formality",
    explanation: "Spain: directness = familiarity/trust. Mexico: indirectness = respect for hierarchy/formality.",
  },
];

const c1_04_flashcards: FlashcardItem[] = [
  { id: "c1-04-fc1", frontSpain: "Subtexto", frontLatam: "Lo no dicho", backEnglish: "Subtext", variantDifferenceNote: "'Subtexto' is formal; 'lo no dicho' is more colloquial.", exampleSentenceSpain: "El subtexto de esa conversación era que estaba enojado.", exampleSentenceLatam: "Lo no dicho es lo que realmente importa aquí.", partOfSpeech: "noun" },
  { id: "c1-04-fc2", frontSpain: "Evasión cortés", frontLatam: "Evasión diplomática", backEnglish: "Polite evasion", variantDifferenceNote: "'Cortés' in Spain; 'diplomática' in Mexico. Both refer to soft refusal.", exampleSentenceSpain: "Su evasión cortés fue evidente: no dijo 'no'.", exampleSentenceLatam: "La evasión diplomática evitó conflicto.", partOfSpeech: "noun" },
  { id: "c1-04-fc3", frontSpain: "Comunicación indirecta", frontLatam: "Comunicación velada", backEnglish: "Indirect communication", variantDifferenceNote: "'Indirecta' in Spain; 'velada' (veiled) in Mexico. Both refer to hidden meaning.", exampleSentenceSpain: "La comunicación indirecta es característica de la cortesía formal.", exampleSentenceLatam: "La comunicación velada evita enfrentamiento.", partOfSpeech: "noun" },
  { id: "c1-04-fc4", frontSpain: "Doble sentido", frontLatam: "Ambigüedad intencionada", backEnglish: "Double meaning/Wordplay", variantDifferenceNote: "'Doble sentido' in Spain; 'ambigüedad intencionada' in Mexico.", exampleSentenceSpain: "El doble sentido hizo la frase más divertida.", exampleSentenceLatam: "La ambigüedad intencionada permitió múltiples interpretaciones.", partOfSpeech: "noun" },
  { id: "c1-04-fc5", frontSpain: "Silencio elocuente", frontLatam: "Pausa significativa", backEnglish: "Meaningful silence", variantDifferenceNote: "'Elocuente' in Spain; 'significativa' in Mexico. Both refer to pregnant pause.", exampleSentenceSpain: "El silencio elocuente tras su pregunta fue revelador.", exampleSentenceLatam: "La pausa significativa expresó más que mil palabras.", partOfSpeech: "noun" },
  { id: "c1-04-fc6", frontSpain: "Me temo que", frontLatam: "La verdad es que", backEnglish: "Softened refusal marker", variantDifferenceNote: "'Me temo que' in Spain; 'la verdad es que' in Mexico for hedged statements.", exampleSentenceSpain: "Me temo que no será posible en este momento.", exampleSentenceLatam: "La verdad es que ahorita no podemos.", partOfSpeech: "expression" },
  { id: "c1-04-fc7", frontSpain: "Fórmula de salvaguardia", frontLatam: "Forma de salvar la cara", backEnglish: "Face-saving formula", variantDifferenceNote: "'Salvaguardia' in Spain; 'salvar la cara' in Mexico. Both preserve dignity.", exampleSentenceSpain: "La fórmula de salvaguardia permitió que ambos salieran ganadores.", exampleSentenceLatam: "La forma de salvar la cara es importante en la negociación.", partOfSpeech: "noun" },
  { id: "c1-04-fc8", frontSpain: "Acuerdo tácito", frontLatam: "Entendimiento implícito", backEnglish: "Tacit understanding", variantDifferenceNote: "'Tácito' in Spain; 'implícito' in Mexico. Both mean unstated agreement.", exampleSentenceSpain: "Llegaron a un acuerdo tácito sin hablar.", exampleSentenceLatam: "Hubo un entendimiento implícito entre ellos.", partOfSpeech: "noun" },
  { id: "c1-04-fc9", frontSpain: "Cambio de registro", frontLatam: "Cambio de código", backEnglish: "Register shift", variantDifferenceNote: "'Registro' in Spain; 'código' in Mexico. Both refer to tone/language change.", exampleSentenceSpain: "Su cambio de registro indicó que estaba molesto.", exampleSentenceLatam: "El cambio de código señaló formalidad repentina.", partOfSpeech: "noun" },
  { id: "c1-04-fc10", frontSpain: "Es que", frontLatam: "Lo que pasa es que", backEnglish: "Explanation softener", variantDifferenceNote: "'Es que' in Spain; 'lo que pasa es que' in Mexico. Both introduce obstacles/reasons.", exampleSentenceSpain: "Es que no tengo tiempo ahora mismo.", exampleSentenceLatam: "Lo que pasa es que surgió algo más urgente.", partOfSpeech: "expression" },
  { id: "c1-04-fc11", frontSpain: "Insulto disfrazado", frontLatam: "Crítica suave", backEnglish: "Backhanded compliment", variantDifferenceNote: "'Insulto disfrazado' in Spain; 'crítica suave' in Mexico. Both hide criticism in praise.", exampleSentenceSpain: "Su insulto disfrazado como cumplido fue evidente.", exampleSentenceLatam: "La crítica suave fue más efectiva que el ataque directo.", partOfSpeech: "noun" },
  { id: "c1-04-fc12", frontSpain: "Afirmación condicional", frontLatam: "Acuerdo condicional", backEnglish: "Conditional affirmation", variantDifferenceNote: "'Afirmación' in Spain; 'acuerdo' in Mexico. Both are yes/no with conditions.", exampleSentenceSpain: "Su afirmación condicional significaba que podría cambiar de opinión.", exampleSentenceLatam: "El acuerdo condicional depende de factores externos.", partOfSpeech: "noun" },
  { id: "c1-04-fc13", frontSpain: "Presupuesto contextual", frontLatam: "Suposición de contexto", backEnglish: "Contextual assumption", variantDifferenceNote: "'Presupuesto' in Spain; 'suposición' in Mexico. Both refer to unstated assumptions.", exampleSentenceSpain: "El presupuesto contextual fue que ambos entendían la situación.", exampleSentenceLatam: "La suposición de contexto facilitó la comunicación.", partOfSpeech: "noun" },
  { id: "c1-04-fc14", frontSpain: "Vaguedad estratégica", frontLatam: "Ambigüedad deliberada", backEnglish: "Deliberate vagueness", variantDifferenceNote: "'Estratégica' in Spain; 'deliberada' in Mexico. Both are intentional.", exampleSentenceSpain: "Su vaguedad estratégica evitó dar una respuesta clara.", exampleSentenceLatam: "La ambigüedad deliberada permitió interpretaciones múltiples.", partOfSpeech: "noun" },
  { id: "c1-04-fc15", frontSpain: "Indicador de poder", frontLatam: "Señal de jerarquía", backEnglish: "Status indicator", variantDifferenceNote: "'Poder' in Spain; 'jerarquía' in Mexico. Both show power dynamics.", exampleSentenceSpain: "El indicador de poder fue quién habló primero.", exampleSentenceLatam: "La señal de jerarquía se reflejó en quién se sentó dónde.", partOfSpeech: "noun" },
  { id: "c1-04-fc16", frontSpain: "Locución social", frontLatam: "Fórmula de cortesía", backEnglish: "Social filler", variantDifferenceNote: "'Locución' in Spain; 'fórmula' in Mexico. Both are social lubricants.", exampleSentenceSpain: "'¿Cómo estás?' es una locución social, no una pregunta real.", exampleSentenceLatam: "La fórmula de cortesía abre la conversación sin verdadera pregunta.", partOfSpeech: "noun" },
  { id: "c1-04-fc17", frontSpain: "Resignación irónica", frontLatam: "Aceptación burlona", backEnglish: "Ironic resignation", variantDifferenceNote: "'Irónica' in Spain; 'burlona' in Mexico. Both show resigned acceptance.", exampleSentenceSpain: "Su resignación irónica indicaba que no estaba conforme.", exampleSentenceLatam: "La aceptación burlona significaba que no le parecía justo.", partOfSpeech: "noun" },
  { id: "c1-04-fc18", frontSpain: "Rechazo implícito", frontLatam: "Negación velada", backEnglish: "Implied refusal", variantDifferenceNote: "'Implícito' in Spain; 'velada' in Mexico. Both are unstated nos.", exampleSentenceSpain: "El rechazo implícito en su silencio fue claro.", exampleSentenceLatam: "La negación velada evitó decir 'no' directamente.", partOfSpeech: "noun" },
  { id: "c1-04-fc19", frontSpain: "Capa de sarcasmo", frontLatam: "Nivel sarcástico", backEnglish: "Sarcastic layer", variantDifferenceNote: "'Capa' (layer) in Spain; 'nivel' (level) in Mexico. Both refer to sarcasm depth.", exampleSentenceSpain: "La capa de sarcasmo en su comentario fue obvia.", exampleSentenceLatam: "El nivel sarcástico de su respuesta fue hiriente.", partOfSpeech: "noun" },
  { id: "c1-04-fc20", frontSpain: "Suposición cultural", frontLatam: "Presupuesto cultural", backEnglish: "Cultural assumption", variantDifferenceNote: "'Suposición' in Spain; 'presupuesto' in Mexico. Both refer to cultural expectations.", exampleSentenceSpain: "La suposición cultural era que todos sabían las reglas.", exampleSentenceLatam: "El presupuesto cultural facilitó el entendimiento sin palabras.", partOfSpeech: "noun" },
];

export const LESSON_C1_04: LessonData = {
  id: "c1-04",
  title: "Subtext, Indirectness & Hidden Meaning",
  slug: "subtext-indirectness-hidden-meaning",
  description: "Master decoding tone, unsaid assumptions, polite evasion, and implicit cultural cues across direct and indirect communication paradigms in Spain and Latin America.",
  difficulty: "Advanced",
  level: "C1",
  order: 4,
  imageUrl: null,
  durationMinutes: 25,
  isPublished: true,
  vocabularyTable: c1_04_vocab,
  grammarSection: c1_04_grammar,
  dialogues: c1_04_dialogues,
  quiz: c1_04_quiz,
  flashcards: c1_04_flashcards,
  vocabularyJson: c1_04_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || v.exampleSentenceLatam || "" })),
  grammarJson: c1_04_grammar.map(g => ({ title: g.title, content: g.spainContent + " / " + g.latamContent })),
  content: "Subtext and indirectness lesson covering hidden meaning across Spain and LATAM.",
};

// LESSONS C1.05–C1.10: Placeholder stubs (follow exact C1.01-C1.04 pattern)
// Due to token limits, full implementations would follow identical structure.
// Each has: 20 vocab + 2 grammar + 6 dialogues + 5 quiz + 20 flashcards + LessonData export.

const c1_05_vocab: RegionalVocabItem[] = Array(20).fill(null).map((_, i) => ({
  word: `Humor item ${i+1}`,
  spainVariant: `Spain variant ${i+1}`,
  latamVariant: `LATAM variant ${i+1}`,
  phoneticSpain: "[fi.lo.so.ˈfem.blo]",
  phoneticLatam: "[o.ɾi.xen.ðo.mi.ˈna.ðo]",
  english: `Placeholder meaning ${i+1}`,
  partOfSpeech: "noun"
}));

const c1_05_grammar: GrammarItem[] = [
  {
    title: "Placeholder Grammar 1",
    spainContent: "Spain content for C1.05",
    latamContent: "Mexico content for C1.05",
    note: "This is a placeholder. Full lesson follows C1.01-C1.04 structure.",
  },
  {
    title: "Placeholder Grammar 2",
    spainContent: "Spain content for C1.05",
    latamContent: "Mexico content for C1.05",
    note: "This is a placeholder.",
  },
];

const c1_05_dialogues: DialogueScenario[] = Array(6).fill(null).map((_, i) => ({
  id: `c1-05-${i < 3 ? 'sp' : 'la'}-${(i % 3) + 1}`,
  title: `Dialogue ${i+1}`,
  region: i < 3 ? "SPAIN" : "LATAM",
  setting: `Setting ${i+1}`,
  lines: [
    { speaker: "Speaker 1", text: "Placeholder dialogue line 1", region: i < 3 ? "SPAIN" : "LATAM", setting: `Setting ${i+1}` },
    { speaker: "Speaker 2", text: "Placeholder dialogue line 2", region: i < 3 ? "SPAIN" : "LATAM", setting: `Setting ${i+1}` },
    { speaker: "Speaker 1", text: "Placeholder dialogue line 3", region: i < 3 ? "SPAIN" : "LATAM", setting: `Setting ${i+1}` },
  ],
}));

const c1_05_quiz: QuizQuestion[] = Array(5).fill(null).map((_, i) => ({
  questionId: `c1-05-q${i+1}`,
  type: "multiple-choice" as const,
  questionText: `Placeholder question ${i+1}`,
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: "Option B",
  explanation: `Placeholder explanation for question ${i+1}`,
}));

const c1_05_flashcards: FlashcardItem[] = Array(20).fill(null).map((_, i) => ({
  id: `c1-05-fc${i+1}`,
  frontSpain: `Spain ${i+1}`,
  frontLatam: `LATAM ${i+1}`,
  backEnglish: `Meaning ${i+1}`,
  variantDifferenceNote: `Note ${i+1}`,
  exampleSentenceSpain: `Spain example ${i+1}`,
  exampleSentenceLatam: `LATAM example ${i+1}`,
  partOfSpeech: "noun"
}));

export const LESSON_C1_05: LessonData = {
  id: "c1-05",
  title: "Humor, Irony & Wordplay",
  slug: "humor-irony-wordplay",
  description: "Placeholder: High-level double-entendres, contextual irony, and cultural wit across Spain and LATAM.",
  difficulty: "Advanced",
  level: "C1",
  order: 5,
  imageUrl: null,
  durationMinutes: 25,
  isPublished: false,
  vocabularyTable: c1_05_vocab,
  grammarSection: c1_05_grammar,
  dialogues: c1_05_dialogues,
  quiz: c1_05_quiz,
  flashcards: c1_05_flashcards,
  vocabularyJson: c1_05_vocab.map(v => ({ word: v.word, translation: v.english, partOfSpeech: v.partOfSpeech, example: v.exampleSentenceSpain || "" })),
  grammarJson: c1_05_grammar.map(g => ({ title: g.title, content: g.spainContent })),
  content: "Placeholder C1.05 lesson.",
};

// C1.06–C1.10: Minimal structure (stubs)
const createPlaceholderLesson = (id: string, order: number, title: string, slug: string) => ({
  id,
  title,
  slug,
  description: `Placeholder for ${title}`,
  difficulty: "Advanced" as const,
  level: "C1" as const,
  order,
  imageUrl: null,
  durationMinutes: 25,
  isPublished: false,
  vocabularyTable: Array(20).fill(null).map((_, i) => ({
    word: `Item ${i+1}`,
    spainVariant: `Spain ${i+1}`,
    latamVariant: `LATAM ${i+1}`,
    phoneticSpain: "[ˈple.sə.ˌhoʊl.deɹ]",
    phoneticLatam: "[ˈple.sə.ˌhoʊl.deɹ]",
    english: `Placeholder ${i+1}`,
    partOfSpeech: "noun" as const,
  })),
  grammarSection: [{ title: "Placeholder", spainContent: "Placeholder", latamContent: "Placeholder", note: "Stub" }, { title: "Placeholder", spainContent: "Placeholder", latamContent: "Placeholder", note: "Stub" }],
  dialogues: Array(6).fill(null).map((_, i) => ({
    id: `${id}-${i < 3 ? 'sp' : 'la'}-${(i % 3) + 1}`,
    title: `Dialogue ${i+1}`,
    region: i < 3 ? "SPAIN" as const : "LATAM" as const,
    setting: `Setting`,
    lines: [
      { speaker: "A", text: "Placeholder", region: i < 3 ? "SPAIN" as const : "LATAM" as const, setting: "Setting" },
      { speaker: "B", text: "Placeholder", region: i < 3 ? "SPAIN" as const : "LATAM" as const, setting: "Setting" },
      { speaker: "A", text: "Placeholder", region: i < 3 ? "SPAIN" as const : "LATAM" as const, setting: "Setting" },
    ],
  })),
  quiz: Array(5).fill(null).map((_, i) => ({
    questionId: `${id}-q${i+1}`,
    type: "multiple-choice" as const,
    questionText: `Question ${i+1}`,
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    explanation: `Explanation`,
  })),
  flashcards: Array(20).fill(null).map((_, i) => ({
    id: `${id}-fc${i+1}`,
    frontSpain: `Spain`,
    frontLatam: `LATAM`,
    backEnglish: `Meaning`,
    variantDifferenceNote: `Note`,
    exampleSentenceSpain: `Example`,
    exampleSentenceLatam: `Example`,
    partOfSpeech: "noun" as const,
  })),
  vocabularyJson: [],
  grammarJson: [],
  content: `Placeholder C1 content`,
});

export const LESSON_C1_06: LessonData = createPlaceholderLesson("c1-06", 6, "Professional Spanish", "professional-spanish") as LessonData;
export const LESSON_C1_07: LessonData = createPlaceholderLesson("c1-07", 7, "News, Society & Public Issues", "news-society-issues") as LessonData;
export const LESSON_C1_08: LessonData = createPlaceholderLesson("c1-08", 8, "Complex Emotions & Relationships", "complex-emotions") as LessonData;
export const LESSON_C1_09: LessonData = createPlaceholderLesson("c1-09", 9, "Sayings, Proverbs & Cultural Wisdom", "sayings-proverbs") as LessonData;
export const LESSON_C1_10: LessonData = createPlaceholderLesson("c1-10", 10, "Register, Tone & Style-Shifting", "register-tone-style") as LessonData;

// ============================================================
// FINAL EXPORTS
// ============================================================

export const C1_LESSONS: LessonData[] = [
  LESSON_C1_01,
  LESSON_C1_02,
  LESSON_C1_03,
  LESSON_C1_04,
  LESSON_C1_05,
  LESSON_C1_06,
  LESSON_C1_07,
  LESSON_C1_08,
  LESSON_C1_09,
  LESSON_C1_10,
];