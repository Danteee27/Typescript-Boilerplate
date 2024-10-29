import axios from "axios";

export const fetchTickets = async (status: string) => {
  const response = await axios.get(
    `http://localhost:5000/api/tickets?status=${status}`
  );
  return response.data;
};
