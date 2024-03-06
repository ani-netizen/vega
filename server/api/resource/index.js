import express from "express";

import { ResourceModel } from "../../database/resource/index.js";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const resources = await ResourceModel.find();

    return res.status(200).json({ resources });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const resources = await ResourceModel.findById(_id);

    return res.status(200).json({ resources });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/add", async (req, res) => {
  try {
    const resourceData = req.body;

    await ResourceModel.create(resourceData);

    return res.status(200).json({ message: "Resource Added" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
