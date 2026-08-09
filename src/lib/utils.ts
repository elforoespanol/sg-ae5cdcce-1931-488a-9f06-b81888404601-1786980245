import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function getLevelColor(level: string): string {
  const colors: Record<string, string> = {
    A1: "bg-green-500",
    A2: "bg-emerald-500",
    B1: "bg-blue-500",
    B2: "bg-indigo-500",
    C1: "bg-purple-500",
    C2: "bg-amber-500",
  };
  return colors[level] || "bg-gray-500";
}

export function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    BEGINNER: "bg-green-500",
    ELEMENTARY: "bg-emerald-500",
    INTERMEDIATE: "bg-blue-500",
    UPPER_INTERMEDIATE: "bg-indigo-500",
    ADVANCED: "bg-purple-500",
    MASTERY: "bg-amber-500",
  };
  return colors[difficulty] || "bg-gray-500";
}

export function calculateLevel(xp: number): { level: number; title: string; progress: number; xpForNext: number } {
  const thresholds = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500, 6600, 7800, 9100, 10500, 12000];
  const titles = ["Novice", "Beginner", "Learner", "Student", "Practitioner", "Intermediate", "Advanced", "Proficient", "Skilled", "Expert", "Master", "Scholar", "Sage", "Polyglot", "Maestro", "Legend"];

  let level = 1;
  for (let i = 1; i < thresholds.length; i++) {
    if (xp >= thresholds[i]) level = i + 1;
    else break;
  }

  const currentThreshold = thresholds[level - 1] || 0;
  const nextThreshold = thresholds[level] || thresholds[thresholds.length - 1];
  const progress = Math.min(100, Math.round(((xp - currentThreshold) / (nextThreshold - currentThreshold)) * 100));

  return {
    level,
    title: titles[level - 1] || "Legend",
    progress,
    xpForNext: nextThreshold - xp,
  };
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}