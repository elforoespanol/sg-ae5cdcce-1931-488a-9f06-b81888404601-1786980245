CREATE TABLE IF NOT EXISTS "flashcards" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  lesson_id TEXT REFERENCES "lessons"(id) ON DELETE SET NULL,
  spanish_text TEXT NOT NULL,
  english_text TEXT NOT NULL,
  example_sentence TEXT,
  image_url TEXT,
  interval INT NOT NULL DEFAULT 0,
  ease_factor FLOAT NOT NULL DEFAULT 2.5,
  repetitions INT NOT NULL DEFAULT 0,
  next_review_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_review_date TIMESTAMPTZ,
  last_rating INT,
  total_reviews INT NOT NULL DEFAULT 0,
  total_correct INT NOT NULL DEFAULT 0,
  is_mastered BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "flashcard_review_logs" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  flashcard_id TEXT NOT NULL REFERENCES "flashcards"(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  rating INT NOT NULL,
  response_time_ms INT,
  reviewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_flashcards_user_review ON "flashcards"(user_id, next_review_date);
CREATE INDEX IF NOT EXISTS idx_review_logs_flashcard ON "flashcard_review_logs"(flashcard_id);