import app from "./app";
import { connectDatabase } from "./config/database";

connectDatabase().then(() => {
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
});
