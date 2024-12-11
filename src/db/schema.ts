import { pgTable, text, timestamp, integer, boolean } from "drizzle-orm/pg-core"
import { createId } from "@paralleldrive/cuid2"

export const activities = pgTable("activities", {
   id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
   userId: text("user_id")
      .references(() => users.id)
      .notNull(),
   title: text("title").notNull(),
   description: text("description"),
   timeStart: timestamp("time_start", { withTimezone: true }).notNull(),
   timeEnd: timestamp("time_end", { withTimezone: true }).notNull(),
   hasTimeToEnd: boolean("has_time_to_end").default(false),
   status: integer("status").default(0),
   createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
})

export const users = pgTable("users", {
   id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
   name: text("name").notNull(),
   email: text("email").notNull(),
   active: boolean("active").default(true),
   createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
})
