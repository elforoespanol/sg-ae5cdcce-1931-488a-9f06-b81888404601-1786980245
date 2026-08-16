export interface VocabularyItem {
  word: string;
  translation: string;
  partOfSpeech: string;
  example: string;
}

export interface GrammarItem {
  title: string;
  content: string;
}

export interface LessonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  difficulty: string;
  level: string;
  order: number;
  imageUrl: string | null;
  durationMinutes: number;
  isPublished: boolean;
  vocabularyJson: VocabularyItem[];
  grammarJson: GrammarItem[];
}

export const LESSONS_DATA: LessonData[] = [];