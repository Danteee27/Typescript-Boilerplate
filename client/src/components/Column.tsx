// client/src/components/Column.tsx
import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';
import { fetchTickets } from '../services/api';

type ColumnProps = {
  title: string;
  status: string;
};

const Column: React.FC<ColumnProps> = ({ title, status }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets(status).then(setTickets);
  }, [status]);

  return (
    <div>
      <h3>{title}</h3>
      {tickets.map((ticket: any) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
