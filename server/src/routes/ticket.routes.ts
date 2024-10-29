// server/src/routes/ticketRoutes.ts
import { Router } from "express";
import { getTickets, createTicket } from "../controllers/ticket.controller";

const router = Router();

router.get("/tickets", getTickets); // GET /api/tickets?status=todo
router.post("/tickets", createTicket); // POST /api/tickets

export default router;
