import { db } from "../db"
import { activities } from "../db/schema"

interface CreateActivityRequest {
   userId: string
   title: string
   description: string
   timeStart: Date
   timeEnd: Date
}

export async function createActivity({ userId, title, description, timeStart, timeEnd }: CreateActivityRequest) {
   const result = await db
      .insert(activities)
      .values({
         userId,
         title,
         description,
         timeStart,
         timeEnd,
      })
      .returning()

   const activity = result[0]

   return { activity }
}
