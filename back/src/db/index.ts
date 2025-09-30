import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as postSchema from "./schema/post.ts";

const pool = new Pool({
    port: 5432,
    host: "localhost",
    database: String(process.env.POSTGRES_DB),
    user: String(process.env.POSTGRES_USER),
    password: String(process.env.POSTGRES_PASSWORD),
});

export const db: NodePgDatabase<typeof postSchema> = drizzle(pool, {
    schema: postSchema,
});
