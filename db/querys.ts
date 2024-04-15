import { db, Timestamps, desc } from 'astro:db'

export async function getAllTimestamps() {
  const timestamps = await db.select().from(Timestamps)
  return timestamps
}

export function getLastTimestamp() {
  const lastTimestamp = db
    .select()
    .from(Timestamps)
    .limit(1)
    .orderBy(desc(Timestamps.createdAt))
  return lastTimestamp
}
