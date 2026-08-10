ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_type text NOT NULL DEFAULT 'FREE';
CREATE INDEX IF NOT EXISTS idx_users_subscription ON users(subscription_type);