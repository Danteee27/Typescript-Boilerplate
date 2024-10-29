import express from "express";
import "reflect-metadata";
import ticketRoutes from "./routes/ticket.routes";

const app = express();

app.use(express.json());
app.use("/api", ticketRoutes);

export default app;
