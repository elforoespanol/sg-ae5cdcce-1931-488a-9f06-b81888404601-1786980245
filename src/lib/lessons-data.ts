// ============================================================
// REGION-AWARE SPANISH LESSON SCHEMA
// CEFR Framework with Spain vs LATAM toggle support
// ============================================================

import { LESSON_A1_01 } from "./a1-lessons";
import { LESSON_A2_01 } from "./a2-lessons-01-05";
import { LESSON_B1_01 } from "./b1-lessons";
import { LESSON_B2_01, LESSON_B2_02, LESSON_B2_03, LESSON_B2_04, LESSON_B2_05, LESSON_B2_06, LESSON_B2_07, LESSON_B2_08, LESSON_B2_09, LESSON_B2_10 } from "./b2-lessons";
import { LESSON_C1_01, LESSON_C1_02, LESSON_C1_03, LESSON_C1_04, LESSON_C1_05, LESSON_C1_06, LESSON_C1_07, LESSON_C1_08, LESSON_C1_09, LESSON_C1_10 } from "./c1-lessons";
import { LESSON_C2_01, LESSON_C2_02, LESSON_C2_03, LESSON_C2_04, LESSON_C2_05, LESSON_C2_06, LESSON_C2_07, LESSON_C2_08, LESSON_C2_09, LESSON_C2_10 } from "./c2-lessons";

export type RegionMode = "SPAIN" | "LATAM";

export interface RegionalVocabItem {
  word: string;
  spainVariant: string;
  latamVariant: string;
  phoneticSpain: string;
  phoneticLatam: string;
  english: string;
  partOfSpeech: string;
  exampleSentenceSpain?: string;
  exampleSentenceLatam?: string;
}

export interface GrammarItem {
  title: string;
  spainContent: string;
  latamContent: string;
  note: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  region: RegionMode;
  setting: string;
}

export interface DialogueScenario {
  id: string;
  title: string;
  region: RegionMode;
  setting: string;
  lines: DialogueLine[];
}

export interface QuizQuestion {
  questionId: string;
  type: "multiple-choice";
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  regionContext?: RegionMode;
}

export interface FlashcardItem {
  id: string;
  frontSpain: string;
  frontLatam: string;
  backEnglish: string;
  variantDifferenceNote: string;
  exampleSentenceSpain: string;
  exampleSentenceLatam: string;
  partOfSpeech: string;
}

export interface LessonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: string;
  level: string;
  order: number;
  imageUrl: string | null;
  durationMinutes: number;
  isPublished: boolean;
  // Core 4-part layout
  vocabularyTable: RegionalVocabItem[];
  grammarSection: GrammarItem[];
  dialogues: DialogueScenario[];
  quiz: QuizQuestion[];
  // Flashcards linked to this lesson
  flashcards: FlashcardItem[];
  // Legacy fields (for backward compatibility)
  vocabularyJson: { word: string; translation: string; partOfSpeech: string; example: string }[];
  grammarJson: { title: string; content: string }[];
  content: string;
}

// ============================================================
// ACTIVE LESSONS DATA — All Levels A1–C2
// ============================================================

export const LESSONS_DATA: LessonData[] = [
  ...A1_LESSONS,
  ...A2_LESSONS,
  ...B1_LESSONS,
  ...B2_LESSONS,
  ...C1_LESSONS,
  ...C2_LESSONS,
];