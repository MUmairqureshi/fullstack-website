// Don't need any custom config?:
import { sql } from '@vercel/postgres';
// `sql` is already set up and ready to go; no further action needed

// Need to customize your config?:
import { createPool } from '@vercel/postgres';

// Need a single client?:
import { createClient } from '@vercel/postgres';
const client = createClient({
  /* config */
});



const pool = createPool({
  connectionString: process.env.SOME_POSTGRES_CONNECTION_STRING,
});

// const likes = 100;
// const { rows, fields } =
//   await pool.sql`SELECT * FROM posts WHERE likes > ${likes};`;