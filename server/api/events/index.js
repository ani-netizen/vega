import express from "express";

import { EventsModel } from "../../database/events/index.js";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const events = await EventsModel.find();
    return res.status(200).json({ events });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/add", async (req, res) => {
  try {
    const resourceData = req.body;

    await EventsModel.create(resourceData);

    return res.status(200).json({ message: "Event Added" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
