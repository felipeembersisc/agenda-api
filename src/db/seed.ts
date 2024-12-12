import { client, db } from "."
import { users, activities } from "./schema"

async function seed() {
   await db.delete(users)
   await db.delete(activities)

   await db.insert(users).values([{ name: "John Doe", email: "john.doe@email.com" }])
}

seed().finally(() => {
   client.end()
})
