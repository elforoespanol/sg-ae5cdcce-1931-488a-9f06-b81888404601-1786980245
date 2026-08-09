import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const profileUpdateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters").optional(),
  level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
  dailyGoal: z.number().int().min(5).max(100).optional(),
  preferredAccent: z.enum(["Spain", "Mexico", "Argentina"]).optional(),
  emailReminders: z.boolean().optional(),
  streakWarnings: z.boolean().optional(),
});

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const flashcardReviewSchema = z.object({
  flashcardId: z.string().min(1, "Flashcard ID is required"),
  rating: z.number().int().min(0).max(3, "Rating must be between 0 and 3"),
});

export const chatMessageSchema = z.object({
  message: z.string().min(1, "Message cannot be empty").max(2000, "Message is too long"),
  sessionId: z.string().optional(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
});

export const lessonProgressSchema = z.object({
  lessonId: z.string().min(1, "Lesson ID is required"),
  score: z.number().int().min(0).max(100).optional(),
  completed: z.boolean().optional(),
  timeSpent: z.number().int().min(0).optional(),
});

export const generateFlashcardsSchema = z.object({
  lessonId: z.string().min(1, "Lesson ID is required"),
  count: z.number().int().min(1).max(20).optional(),
});