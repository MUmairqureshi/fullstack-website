// no-config
import { sql } from '@vercel/postgres';

const id = 100;

// A one-shot query

// Multiple queries on the same connection (improves performance)
// warning: Do not share clients across requests and be sure to release them!
const client = await sql.connect();
const { rows } = await client.sql`SELECT * FROM users WHERE id = ${userId};`;
await client.sql`UPDATE users SET status = 'satisfied' WHERE id = ${userId};`;
client.release();