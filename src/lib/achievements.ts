import { BookOpen, GraduationCap, MessageCircle, Layers, Flame, Trophy, Brain, Star } from "lucide-react";
import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

export interface AchievementDef {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: "lessons" | "chat" | "flashcards" | "streak" | "special";
  requirement: { type: string; count: number };
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "first_lesson",
    name: "¡Primera Lección!",
    description: "Complete your first lesson",
    iconName: "BookOpen",
    category: "lessons",
    requirement: { type: "lessons_completed", count: 1 },
  },
  {
    id: "ten_lessons",
    name: "Estudiante Dedicado",
    description: "Complete 10 lessons",
    iconName: "GraduationCap",
    category: "lessons",
    requirement: { type: "lessons_completed", count: 10 },
  },
  {
    id: "first_chat",
    name: "¡Hola!",
    description: "Have your first AI conversation",
    iconName: "MessageCircle",
    category: "chat",
    requirement: { type: "chat_messages", count: 1 },
  },
  {
    id: "fifty_flashcards",
    name: "Maestro de Tarjetas",
    description: "Review 50 flashcards",
    iconName: "Layers",
    category: "flashcards",
    requirement: { type: "flashcards_reviewed", count: 50 },
  },
  {
    id: "seven_day_streak",
    name: "Racha de Fuego",
    description: "Study 7 days in a row",
    iconName: "Flame",
    category: "streak",
    requirement: { type: "streak_days", count: 7 },
  },
  {
    id: "thirty_day_streak",
    name: "Dedicación Legendaria",
    description: "Study 30 days in a row",
    iconName: "Trophy",
    category: "streak",
    requirement: { type: "streak_days", count: 30 },
  },
  {
    id: "mastered_hundred",
    name: "Sabio Español",
    description: "Master 100 flashcards",
    iconName: "Brain",
    category: "flashcards",
    requirement: { type: "flashcards_mastered", count: 100 },
  },
  {
    id: "perfect_session",
    name: "¡Perfecto!",
    description: "Get all flashcards correct in a session",
    iconName: "Star",
    category: "special",
    requirement: { type: "perfect_session", count: 1 },
  },
];

export const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  BookOpen,
  GraduationCap,
  MessageCircle,
  Layers,
  Flame,
  Trophy,
  Brain,
  Star,
};

export function getLevelInfo(totalXp: number): { level: number; title: string; xpForNext: number; progress: number } {
  const levels = [
    { threshold: 0, title: "Novice" },
    { threshold: 100, title: "Beginner" },
    { threshold: 300, title: "Learner" },
    { threshold: 600, title: "Intermediate" },
    { threshold: 1000, title: "Advanced" },
    { threshold: 1500, title: "Expert" },
    { threshold: 2200, title: "Master" },
    { threshold: 3000, title: "Grandmaster" },
    { threshold: 4000, title: "Leyenda" },
  ];

  let currentLevel = 0;
  let nextThreshold = 100;

  for (let i = levels.length - 1; i >= 0; i--) {
    if (totalXp >= levels[i].threshold) {
      currentLevel = i;
      nextThreshold = i < levels.length - 1 ? levels[i + 1].threshold : levels[i].threshold + 1000;
      break;
    }
  }

  const currentThreshold = levels[currentLevel].threshold;
  const progress = Math.min(100, ((totalXp - currentThreshold) / (nextThreshold - currentThreshold)) * 100);

  return {
    level: currentLevel + 1,
    title: levels[currentLevel].title,
    xpForNext: nextThreshold,
    progress,
  };
}

export function getLevelColor(level: string): string {
  const colors: Record<string, string> = {
    A1: "bg-emerald-500",
    A2: "bg-blue-500",
    B1: "bg-amber-500",
    B2: "bg-orange-500",
    C1: "bg-rose-500",
    C2: "bg-violet-500",
  };
  return colors[level] || "bg-gray-500";
}