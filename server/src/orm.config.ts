// server/ormconfig.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Ticket } from "./entities/ticket.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "user",
  password: "password",
  database: "kanban",
  synchronize: true,
  logging: true,
  entities: [Ticket],
  subscribers: [],
  migrations: [],
});
