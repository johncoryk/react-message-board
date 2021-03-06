CREATE TABLE IF NOT EXISTS posts
(id SERIAL PRIMARY KEY,
text TEXT,
user_id INTEGER REFERENCES users(id),
topic_id INTEGER REFERENCES topics(id),
created_at TIMESTAMPTZ DEFAULT now());
