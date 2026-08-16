import type { LessonData } from "./lessons-data";

const A1_STUB: LessonData = {
  id: "",
  slug: "",
  title: "",
  description: "",
  level: "A1",
  difficulty: "Beginner",
  order: 0,
  imageUrl: null,
  durationMinutes: 60,
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

const LESSON_A1_01 = { ...A1_STUB, id: "a1-01", slug: "greetings-introductions", title: "Greetings & Introductions", order: 1 };
const LESSON_A1_02 = { ...A1_STUB, id: "a1-02", slug: "numbers-colors", title: "Numbers & Colors", order: 2 };
const LESSON_A1_03 = { ...A1_STUB, id: "a1-03", slug: "family-relations", title: "Family & Relations", order: 3 };
const LESSON_A1_04 = { ...A1_STUB, id: "a1-04", slug: "daily-routines", title: "Daily Routines", order: 4 };
const LESSON_A1_05 = { ...A1_STUB, id: "a1-05", slug: "food-beverages", title: "Food & Beverages", order: 5 };
const LESSON_A1_06 = { ...A1_STUB, id: "a1-06", slug: "directions-places", title: "Directions & Places", order: 6 };
const LESSON_A1_07 = { ...A1_STUB, id: "a1-07", slug: "time-dates", title: "Time & Dates", order: 7 };
const LESSON_A1_08 = { ...A1_STUB, id: "a1-08", slug: "clothing-appearance", title: "Clothing & Appearance", order: 8 };
const LESSON_A1_09 = { ...A1_STUB, id: "a1-09", slug: "basic-verbs", title: "Basic Verbs (Present)", order: 9 };
const LESSON_A1_10 = { ...A1_STUB, id: "a1-10", slug: "basic-adjectives", title: "Basic Adjectives & Descriptions", order: 10 };

export const A1_LESSONS = [
  LESSON_A1_01,
  LESSON_A1_02,
  LESSON_A1_03,
  LESSON_A1_04,
  LESSON_A1_05,
  LESSON_A1_06,
  LESSON_A1_07,
  LESSON_A1_08,
  LESSON_A1_09,
  LESSON_A1_10,
];