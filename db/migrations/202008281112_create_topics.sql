CREATE TABLE IF NOT EXISTS topics
(id SERIAL PRIMARY KEY,
-- title TEXT UNIQUE NOT NULL find the correct command for it,
user_id INTEGER,
created_at TIMESTAMPTZ,
board_id INTEGER);