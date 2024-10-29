// server/src/models/Ticket.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: string;
}
