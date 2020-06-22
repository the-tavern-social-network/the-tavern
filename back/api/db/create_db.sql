BEGIN;

-- DROP TABLE IF EXISTS "users", "posts", "contacts", "Session" CASCADE;

DROP TYPE IF EXISTS status;
CREATE TYPE status as ENUM ('pending', 'accepted', 'blocked');

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "avatar" TEXT NULL,
  "description" TEXT NULL,
  "birthdate" DATE NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS "posts" (
  "id" SERIAL PRIMARY KEY,
  "content" TEXT NOT NULL,
  "image" TEXT NULL,
  "color" TEXT NULL DEFAULT '#fff',
  "user_id" INT REFERENCES "users" ("id"),
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS "contacts" (
  "id" SERIAL,
  "user_id" INT NOT NULL REFERENCES "users" ("id"),
  "contact_id" INT NOT NULL REFERENCES "users" ("id"),
  "status" status DEFAULT 'pending',
  PRIMARY KEY ("user_id","contact_id", "id"),
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS "Session" (
  "sid" TEXT NOT NULL,
  "expires" TIMESTAMP WITH TIME ZONE NULL,
  "data" TEXT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL
);

END;