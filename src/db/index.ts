import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

if (process.env.DATABASE_URL === undefined) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

export const db = drizzle(process.env.DATABASE_URL);
