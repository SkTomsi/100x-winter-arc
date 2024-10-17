CREATE TABLE IF NOT EXISTS "checkIns" (
	"id" text PRIMARY KEY NOT NULL,
	"habitId" text,
	"userId" text NOT NULL,
	"checkInDate" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "streaks";--> statement-breakpoint
ALTER TABLE "habits" ALTER COLUMN "streak" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "checkIns" ADD CONSTRAINT "checkIns_habitId_habits_id_fk" FOREIGN KEY ("habitId") REFERENCES "public"."habits"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
