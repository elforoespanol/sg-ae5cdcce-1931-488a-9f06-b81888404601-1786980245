// ============================================================
// REGION-AWARE SPANISH LESSON SCHEMA
// CEFR Framework with Spain vs LATAM toggle support
// ============================================================

import {
  LESSON_B2_01,
  LESSON_B2_02,
  LESSON_B2_03,
  LESSON_B2_04,
  LESSON_B2_05,
  LESSON_B2_06,
  LESSON_B2_07,
  LESSON_B2_08,
  LESSON_B2_09,
  LESSON_B2_10,
  B2_LESSONS,
} from "./b2-lessons";
import { A1_LESSONS } from "./a1-lessons";
import { A2_LESSONS } from "./a2-lessons";
import { B1_LESSONS } from "./b1-lessons";
import { C1_LESSONS } from "./c1-lessons";
import { C2_LESSONS } from "./c2-lessons";

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