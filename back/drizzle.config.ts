import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./src/db/drizzle", // ادرس فایل های خود دیتابیس ، اتومات ساخته میشه
    schema: "./src/db/schema/post.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: String(process.env.POSTGRES_URL),
    },
    strict: true,
    verbose: true,
});
