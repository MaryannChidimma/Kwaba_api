import express from "express";
import appResponse from "../../lib/appResponse";
import constants from "../config/constants";
import savingPlanservice from "../services/savingPlanService";
 const {CREATED, FETCHED } = constants.MESSAGES

class SavingPlanCtrl {
  async createPlan(req: express.Request, res: express.Response) {
    const response = await savingPlanservice.createPlan(req.body);
    res.status(201).send(appResponse(CREATED, response));
  }

  async getOnePlan(req: express.Request, res: express.Response) {

    const userData = req.body;

    const response = await savingPlanservice.getOne(userData);
    res.status(201).send(appResponse(FETCHED, response));
  }
 
}

export default new SavingPlanCtrl();
