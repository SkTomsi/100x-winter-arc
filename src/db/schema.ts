import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

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
  lastCompleted: timestamp("lastCompleted", { mode: "date" }),
  userId: text("userId").notNull(),
});

export type Habit = typeof habits.$inferSelect;

export const streaks = pgTable("streaks", {
  id: text("id").primaryKey(),
  habitId: text("habitId").notNull(),
  completed: boolean("completed").notNull(),
  checkInDate: timestamp("checkInDate").defaultNow(),
});
