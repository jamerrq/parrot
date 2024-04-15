import { db, Timestamps } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  const now = new Date()
  await db
    .insert(Timestamps)
    .values([{ id: 1, createdAt: now, updatedAt: now }])
}
