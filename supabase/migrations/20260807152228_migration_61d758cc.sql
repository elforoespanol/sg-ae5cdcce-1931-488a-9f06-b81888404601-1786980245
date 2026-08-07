CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS "users" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT,
  email TEXT UNIQUE,
  "emailVerified" TIMESTAMPTZ,
  password TEXT,
  image TEXT,
  level TEXT DEFAULT 'A1' CHECK (level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  role TEXT DEFAULT 'STUDENT' CHECK (role IN ('STUDENT', 'TEACHER', 'ADMIN')),
  streak INT DEFAULT 0,
  "lastActiveDate" TIMESTAMPTZ,
  "totalStudyMinutes" INT DEFAULT 0,
  "createdAt" TIMESTAMPTZ DEFAULT now(),
  "updatedAt" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "accounts" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INT,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  UNIQUE(provider, "providerAccountId")
);

CREATE TABLE IF NOT EXISTS "sessions" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "sessionToken" TEXT UNIQUE NOT NULL,
  "userId" TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  expires TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS "VerificationToken" (
  identifier TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  UNIQUE(identifier, token)
);

CREATE TYPE "Difficulty" AS ENUM ('BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'UPPER_INTERMEDIATE', 'ADVANCED', 'MASTERY');

CREATE TABLE IF NOT EXISTS "lessons" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  difficulty "Difficulty" NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  "order" INT NOT NULL,
  "imageUrl" TEXT,
  "vocabularyJson" JSONB,
  "grammarJson" JSONB,
  "durationMinutes" INT DEFAULT 15,
  "isPublished" BOOLEAN DEFAULT false,
  "createdAt" TIMESTAMPTZ DEFAULT now(),
  "updatedAt" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "user_lesson_progress" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  "lessonId" TEXT NOT NULL REFERENCES "lessons"(id) ON DELETE CASCADE,
  "isCompleted" BOOLEAN DEFAULT false,
  "completedAt" TIMESTAMPTZ,
  "quizScore" FLOAT,
  "timeSpentMinutes" INT DEFAULT 0,
  "startedAt" TIMESTAMPTZ DEFAULT now(),
  "lastAccessedAt" TIMESTAMPTZ DEFAULT now(),
  UNIQUE("userId", "lessonId")
);

CREATE INDEX IF NOT EXISTS idx_lessons_level_order ON "lessons"(level, "order");