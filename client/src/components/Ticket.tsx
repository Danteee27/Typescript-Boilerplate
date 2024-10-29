import React from 'react';

type TicketProps = {
  ticket: {
    id: number;
    name: string;
    description: string;
  };
};

const Ticket: React.FC<TicketProps> = ({ ticket }) => (
  <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '5px' }}>
    <h4>{ticket.name}</h4>
    <p>{ticket.description}</p>
  </div>
);

export default Ticket;
