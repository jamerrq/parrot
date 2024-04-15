import { defineDb, defineTable, column, NOW } from 'astro:db'

/**
 * Table Reference
 *

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    content: column.text({ optional: true }),
    published: column.date({ default: NOW }),
  },
});

 */

// Timestamps table
const Timestamps = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    // Comment,
    Timestamps
  }
})
