import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import { db } from "../db"
import { activities } from "../db/schema"
import { and, count, eq, gte, lte, sql } from "drizzle-orm"

dayjs.extend(weekOfYear)

export async function getWeekActivities() {
  const lastDayOfWeek = dayjs().endOf("week").toDate()

  const activitiesCreatedUpToWeek = db
    .select({
      id: activities.id,
      title: activities.title,
      timeStart: activities.timeStart,
      timeEnd: activities.timeEnd,
      status: activities.status,
    })
    .from(activities)
    .where(lte(activities.timeStart, lastDayOfWeek))

  return activitiesCreatedUpToWeek
}
