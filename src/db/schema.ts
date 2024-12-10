import { pgTable, text, timestamp, integer, boolean } from "drizzle-orm/pg-core"

export const activities = pgTable("activities", {
   id: text("id").primaryKey(),
   title: text("title").notNull(),
   description: text("description"),
   timeStart: timestamp("time_start", { withTimezone: true }).notNull(),
   timeEnd: timestamp("time_end", { withTimezone: true }).notNull(),
   hasTimeToEnd: boolean("has_time_to_end").default(false),
   status: integer("status").default(0),
   createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})
