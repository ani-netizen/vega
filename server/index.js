import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./database/connection.js";

import Company from "./api/company/index.js";
import Resource from "./api/resource/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/company", Company);
app.use("/resource", Resource);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  connectDB()
    .then(() => {
      console.log("MY EXPRESS APP IS RUNNING...");
    })
    .catch((error) => {
      console.log("Server running but database connection failed");
      console.log(error);
    })
);
