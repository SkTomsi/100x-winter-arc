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
  createdAt: timestamp("createdAt").defaultNow(),
  streak: integer("streak").default(0),
  lastCompleted: timestamp("lastCompleted"),
  userId: text("userId").notNull(),
});

export const streaks = pgTable("streaks", {
  id: text("id").primaryKey(),
  habitId: text("habitId").notNull(),
  completed: boolean("completed").notNull(),
  checkInDate: timestamp("checkInDate").defaultNow(),
});
