import fastify from "fastify"
import { createActivity } from "../functions/create-activity"
import z from "zod"
import { getWeekActivities } from "../functions/get-week-activities"

const app = fastify()

app.get("/activities/week", async () => {
  const activities = await getWeekActivities()
  return activities
})

app.post("/activities", async request => {
  const createActivitySchema = z.object({
    userId: z.string(),
    title: z.string(),
    description: z.string(),
    timeStart: z.string(),
    timeEnd: z.string(),
  })

  const body = createActivitySchema.parse(request.body)

  const timeStart = new Date(body.timeStart)
  const timeEnd = new Date(body.timeEnd)

  await createActivity({
    userId: body.userId,
    title: body.title,
    description: body.description,
    timeStart,
    timeEnd,
  })
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running!")
  })
