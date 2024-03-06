import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./database/connection.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.listen(8080, () =>
  connectDB()
    .then(() => {
      console.log("MY EXPRESS APP IS RUNNING...");
    })
    .catch((error) => {
      console.log("Server running but database connection failed");
      console.log(error);
    })
);
