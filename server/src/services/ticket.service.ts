import { AppDataSource } from "../orm.config";
import { Ticket } from "../entities/ticket.entity";

const ticketRepository = AppDataSource.getRepository(Ticket);

export const getTicketsByStatus = async (status: string) => {
  return await ticketRepository.find({ where: { status } });
};

export const createTicket = async (
  name: string,
  description: string,
  status: string
) => {
  const newTicket = ticketRepository.create({ name, description, status });
  await ticketRepository.save(newTicket);
  return newTicket;
};
