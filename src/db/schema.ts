import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// export const user = pgTable("user", {
//   id: text("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   password: text("password").notNull(),
//   image: text("image"),
//   createdAt: timestamp("createdAt").defaultNow(),
// });

export const habits = pgTable("habits", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  streak: integer("streak").default(0).notNull(),
  lastCompleted: timestamp("lastCompleted"),
  userId: text("userId").notNull(),
});

export const habitsRelations = relations(habits, ({ many }) => ({
  checkIns: many(checkIns),
}));

export type HabitSelect = typeof habits.$inferSelect;
export type HabitInsert = typeof habits.$inferInsert;

export const checkIns = pgTable("checkIns", {
  id: text("id").primaryKey(),
  habitId: text("habitId")
    .notNull()
    .references(() => habits.id, {
      onDelete: "cascade",
    }),
  userId: text("userId").notNull(),
  checkInDate: timestamp("checkInDate").defaultNow(),
});

export type CheckInSelect = typeof checkIns.$inferSelect;
export type CheckInInsert = typeof checkIns.$inferInsert;
