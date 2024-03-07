import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./database/connection.js";

import Company from "./api/company/index.js";
import Resource from "./api/resource/index.js";
import Student from "./api/student/index.js";
import Admin from "./api/admin/index.js";
import Events from "./api/events/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/company", Company);
app.use("/resource", Resource);
app.use("/student", Student);
app.use("/admin", Admin);
app.use("/events", Events);

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
