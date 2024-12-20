import { client, db } from "."
import { users, activities } from "./schema"
import dayjs from "dayjs"

async function seed() {
  await db.delete(activities)
  await db.delete(users)

  const result = await db
    .insert(users)
    .values([{ name: "John Doe", email: "john.doe@email.com" }])
    .returning()

  const startOfWeek = dayjs().startOf("week")

  await db.insert(activities).values([
    {
      title: "Título Teste",
      timeStart: startOfWeek.toDate(),
      timeEnd: startOfWeek.add(1, "day").toDate(),
      hasTimeToEnd: true,
      userId: result[0].id,
    },
  ])
}

seed().finally(() => {
  client.end()
})
