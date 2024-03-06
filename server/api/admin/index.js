import express from "express";
import passport from "passport";

import { AdminModel } from "../../database/admin/index.js";

const Router = express.Router();

/*
Route	      	| 	/signup
Description	  | 	Register new user
Access	    	| 	Public
Parameter   	| 	--
Methods	    	| 	POST
*/
Router.post("/sign-up", async (req, res) => {
  try {
    await AdminModel.findByEmail(req.body.credentials);
    const newUser = await AdminModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route	      	| 	/signin
Description 	| 	Sign in as existing user
Access	    	| 	Public
Parameter   	| 	--
Methods	    	| 	POST
*/
Router.post("/sign-in", async (req, res) => {
  try {
    const user = await AdminModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
