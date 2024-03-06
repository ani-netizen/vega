import express from "express";

import { CompanyModel } from "../../database/company/index.js";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const companies = await CompanyModel.find();

    return res.status(200).json({ companies });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const companies = await CompanyModel.findById(_id);

    return res.status(200).json({ companies });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/add", async (req, res) => {
  try {
    const companyData = req.body;

    await CompanyModel.create(companyData);

    return res.status(200).json({ message: "Company Added" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
