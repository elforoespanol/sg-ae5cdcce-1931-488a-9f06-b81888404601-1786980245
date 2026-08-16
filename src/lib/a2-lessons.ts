import type { LessonData } from "./lessons-data";

const A2_STUB: LessonData = {
  id: "",
  slug: "",
  title: "",
  description: "",
  level: "A2",
  difficulty: "Elementary",
  order: 0,
  imageUrl: null,
  durationMinutes: 75,
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

const LESSON_A2_01 = { ...A2_STUB, id: "a2-01", slug: "past-tense-introduction", title: "Past Tense Introduction", order: 11 };
const LESSON_A2_02 = { ...A2_STUB, id: "a2-02", slug: "shopping-transactions", title: "Shopping & Transactions", order: 12 };
const LESSON_A2_03 = { ...A2_STUB, id: "a2-03", slug: "travel-accommodation", title: "Travel & Accommodation", order: 13 };
const LESSON_A2_04 = { ...A2_STUB, id: "a2-04", slug: "health-wellness", title: "Health & Wellness", order: 14 };
const LESSON_A2_05 = { ...A2_STUB, id: "a2-05", slug: "hobbies-interests", title: "Hobbies & Interests", order: 15 };
const LESSON_A2_06 = { ...A2_STUB, id: "a2-06", slug: "seasons-weather", title: "Seasons & Weather", order: 16 };
const LESSON_A2_07 = { ...A2_STUB, id: "a2-07", slug: "school-education", title: "School & Education", order: 17 };
const LESSON_A2_08 = { ...A2_STUB, id: "a2-08", slug: "sports-activities", title: "Sports & Activities", order: 18 };
const LESSON_A2_09 = { ...A2_STUB, id: "a2-09", slug: "comparatives-superlatives", title: "Comparatives & Superlatives", order: 19 };
const LESSON_A2_10 = { ...A2_STUB, id: "a2-10", slug: "near-future-plans", title: "Near Future & Plans", order: 20 };

export const A2_LESSONS = [
  LESSON_A2_01,
  LESSON_A2_02,
  LESSON_A2_03,
  LESSON_A2_04,
  LESSON_A2_05,
  LESSON_A2_06,
  LESSON_A2_07,
  LESSON_A2_08,
  LESSON_A2_09,
  LESSON_A2_10,
];