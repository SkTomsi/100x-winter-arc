CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"image" text,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
