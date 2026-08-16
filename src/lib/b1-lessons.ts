import type { LessonData } from "./lessons-data";

const B1_STUB: LessonData = {
  id: "",
  slug: "",
  title: "",
  description: "",
  level: "B1",
  difficulty: "Intermediate",
  order: 0,
  imageUrl: null,
  durationMinutes: 90,
  isPublished: true,
  vocabularyTable: [],
  grammarSection: [],
  dialogues: [],
  quiz: [],
  flashcards: [],
  vocabularyJson: [],
  grammarJson: [],
  content: "",
};

const LESSON_B1_01 = { ...B1_STUB, id: "b1-01", slug: "subjunctive-mood", title: "Subjunctive Mood Introduction", order: 21 };
const LESSON_B1_02 = { ...B1_STUB, id: "b1-02", slug: "complex-sentences", title: "Complex Sentences", order: 22 };
const LESSON_B1_03 = { ...B1_STUB, id: "b1-03", slug: "conditional-structures", title: "Conditional Structures", order: 23 };
const LESSON_B1_04 = { ...B1_STUB, id: "b1-04", slug: "opinions-arguments", title: "Expressing Opinions & Arguments", order: 24 };
const LESSON_B1_05 = { ...B1_STUB, id: "b1-05", slug: "formal-correspondence", title: "Formal Correspondence", order: 25 };
const LESSON_B1_06 = { ...B1_STUB, id: "b1-06", slug: "current-events-media", title: "Current Events & Media", order: 26 };
const LESSON_B1_07 = { ...B1_STUB, id: "b1-07", slug: "storytelling-narratives", title: "Storytelling & Narratives", order: 27 };
const LESSON_B1_08 = { ...B1_STUB, id: "b1-08", slug: "problem-solving", title: "Problem-Solving Scenarios", order: 28 };
const LESSON_B1_09 = { ...B1_STUB, id: "b1-09", slug: "cultural-customs", title: "Cultural Customs & Etiquette", order: 29 };
const LESSON_B1_10 = { ...B1_STUB, id: "b1-10", slug: "workplace-professions", title: "Workplace & Professions", order: 30 };

export const B1_LESSONS = [
  LESSON_B1_01,
  LESSON_B1_02,
  LESSON_B1_03,
  LESSON_B1_04,
  LESSON_B1_05,
  LESSON_B1_06,
  LESSON_B1_07,
  LESSON_B1_08,
  LESSON_B1_09,
  LESSON_B1_10,
];