CREATE TABLE IF NOT EXISTS "chat_sessions" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id TEXT NOT NULL REFERENCES "users"(id) ON DELETE CASCADE,
  lesson_id TEXT REFERENCES "lessons"(id) ON DELETE SET NULL,
  title TEXT,
  summary TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chat_sessions_user_created ON "chat_sessions"(user_id, created_at);

CREATE TABLE IF NOT EXISTS "chat_messages" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  session_id TEXT NOT NULL REFERENCES "chat_sessions"(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  has_correction BOOLEAN DEFAULT false,
  original_text TEXT,
  corrected_text TEXT,
  explanation TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chat_messages_session_created ON "chat_messages"(session_id, created_at);