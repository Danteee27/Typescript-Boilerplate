// server/src/controllers/ticketController.ts
import { Request, Response, NextFunction } from "express";
import * as ticketService from "../services/ticket.service";

export const getTickets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status } = req.query;
    const tickets = await ticketService.getTicketsByStatus(status as string);
    res.json(tickets);
  } catch (error) {
    next(error);
  }
};

export const createTicket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, status } = req.body;
    const newTicket = await ticketService.createTicket(
      name,
      description,
      status
    );
    res.status(201).json(newTicket);
  } catch (error) {
    next(error);
  }
};
