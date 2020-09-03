CREATE TABLE IF NOT EXISTS users
(id SERIAL PRIMARY KEY,
user_name VARCHAR(255) NOT NULL,
password_digest VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
created_at TIMESTAMPTZ);