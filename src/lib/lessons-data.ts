// ============================================================
// REGION-AWARE SPANISH LESSON SCHEMA
// CEFR Framework with Spain vs LATAM toggle support
// ============================================================

import type { RegionMode } from "./lessons-data";

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

export interface LessonContent {
  title: string;
  description: string;
  dialogue?: { character: string; text: string; region: RegionMode }[];
  vocabulary?: { word: string; translation: string; region?: RegionMode }[];
  grammarNote?: string;
  culturalNote?: string;
}

export interface LessonData {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2";
  difficulty: string;
  order: number;
  imageUrl: string | null;
  durationMinutes: number;
  isPublished: boolean;
  vocabularyTable: RegionalVocabItem[];
  grammarSection: Array<{
    title: string;
    spainContent: string;
    latamContent: string;
    note: string;
  }>;
  dialogues: Array<{
    id: string;
    title: string;
    region: RegionMode;
    setting: string;
    lines: Array<{
      speaker: string;
      text: string;
      region: RegionMode;
      setting: string;
    }>;
  }>;
  quiz: Array<{
    questionId: string;
    type: string;
    questionText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }>;
  flashcards: Array<{
    id: string;
    frontSpain: string;
    frontLatam: string;
    backEnglish: string;
    variantDifferenceNote: string;
    exampleSentenceSpain: string;
    exampleSentenceLatam: string;
    partOfSpeech: string;
  }>;
  vocabularyJson: any[];
  grammarJson: any[];
  content: string;
}

// ============================================================
// ACTIVE LESSONS DATA — All Levels A1–C2
// ============================================================

export const LESSONS_DATA: LessonData[] = [];

export const getLessonsByLevel = (level: string): LessonData[] => {
  return LESSONS_DATA.filter((lesson) => lesson.level === level.toUpperCase());
};