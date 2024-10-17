DO $$ BEGIN
 ALTER TABLE "checkIns" ADD CONSTRAINT "checkIns_habitId_habits_id_fk" FOREIGN KEY ("habitId") REFERENCES "public"."habits"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
