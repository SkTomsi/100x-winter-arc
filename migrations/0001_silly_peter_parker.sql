CREATE TABLE IF NOT EXISTS "habits" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"createdAt" timestamp DEFAULT now(),
	"streak" integer DEFAULT 0,
	"lastCompleted" timestamp,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "streaks" (
	"id" text PRIMARY KEY NOT NULL,
	"habitId" text NOT NULL,
	"completed" boolean NOT NULL,
	"checkInDate" timestamp DEFAULT now()
);
