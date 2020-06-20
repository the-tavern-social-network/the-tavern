BEGIN;

DROP TABLE IF EXISTS "users", "tavern_requests", "posts", "contacts", "Session" CASCADE;

DROP TYPE IF EXISTS status;
-- Status 0 references to Pending Friend Request,
-- Status 1 references Confirm Friend Request
-- Status 2 references You.
CREATE TYPE status as ENUM ('0', '1', '2');

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "avatar" TEXT NULL,
  "description" TEXT NULL,
  "contact_count" INT DEFAULT 0,
  "birthdate" DATE NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS "tavern_requests" (
  "id" SERIAL PRIMARY KEY,
  "tavern_id" INT NOT NULL,
  "user_id" INT NOT NULL REFERENCES "users" ("id")
  ON DELETE CASCADE ON UPDATE CASCADE,
  "participant_id" INT NOT NULL REFERENCES "users" ("id")
  ON DELETE CASCADE ON UPDATE CASCADE,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS "posts" (
  "id" SERIAL PRIMARY KEY,
  "content" TEXT NOT NULL,
  "image" TEXT NULL,
  "color" TEXT NULL DEFAULT '#fff',
  "user_id" INT REFERENCES "users" ("id")
  ON DELETE CASCADE ON UPDATE CASCADE,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE "contacts" (
"contact_one" INT NOT NULL REFERENCES "users" ("id")
ON DELETE CASCADE ON UPDATE CASCADE,
"contact_two" INT NOT NULL REFERENCES "users" ("id")
ON DELETE CASCADE ON UPDATE CASCADE,
"status" status DEFAULT '0',
PRIMARY KEY ("contact_one","contact_two"),
"created_at" TIMESTAMP DEFAULT NOW(),
"updated_at" TIMESTAMP NULL
);

CREATE TABLE "Session" (
  "sid" TEXT NOT NULL,
  "expires" TIMESTAMP WITH TIME ZONE NULL,
  "data" TEXT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL
);

END;