// server/src/config/database.ts
import { AppDataSource } from "../orm.config";

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
