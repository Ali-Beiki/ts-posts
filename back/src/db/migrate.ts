import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

async function main() {
    try {
        console.log("migrating ...");

        const pool = new Pool({
            connectionString: String(process.env.POSTGRES_URL),
        });
        const db: NodePgDatabase = drizzle(pool); // my DB
        await migrate(db, { migrationsFolder: "src/db/drizzle" }); // در مسیر زیر migration ساخت فایل

        console.log("migrating done .");
        // or process.exit()
        await pool.end();
    } catch (error) {
        console.log("migrating error :" +error);
    }
}

main();
