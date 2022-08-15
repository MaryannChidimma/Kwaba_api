import express from "express";
import savingPlanController from "../controllers/savingPlanController";
const router = express.Router();
import { Validator } from "../validators";
import {
 CreatePlanSchema
} from "../validators/savingPlanShema";


function savingPlanRouter() {
  router.post(
    "/",
    Validator(CreatePlanSchema, "body"),
    savingPlanController.createPlan
  );

  router.post(
    "/:id",
    savingPlanController.getOnePlan
  );
 
  return router
}

export default savingPlanRouter;
