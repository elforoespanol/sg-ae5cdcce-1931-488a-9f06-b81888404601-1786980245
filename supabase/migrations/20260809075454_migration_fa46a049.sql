CREATE TABLE IF NOT EXISTS "achievements" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  category TEXT NOT NULL,
  requirement_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "user_achievements" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL REFERENCES "achievements"(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);

CREATE TABLE IF NOT EXISTS "vocabulary_lists" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  is_public BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "vocabulary_words" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  list_id TEXT NOT NULL REFERENCES "vocabulary_lists"(id) ON DELETE CASCADE,
  spanish_text TEXT NOT NULL,
  english_text TEXT NOT NULL,
  example_sentence TEXT,
  notes TEXT,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_achievements_user ON "user_achievements"(user_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_achievement ON "user_achievements"(achievement_id);
CREATE INDEX IF NOT EXISTS idx_vocab_lists_user ON "vocabulary_lists"(user_id);
CREATE INDEX IF NOT EXISTS idx_vocab_words_list ON "vocabulary_words"(list_id);