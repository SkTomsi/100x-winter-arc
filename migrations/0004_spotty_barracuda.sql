ALTER TABLE "checkIns" DROP CONSTRAINT "checkIns_habitId_habits_id_fk";
--> statement-breakpoint
ALTER TABLE "checkIns" ALTER COLUMN "habitId" SET NOT NULL;