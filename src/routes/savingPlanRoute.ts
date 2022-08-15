import express from "express";
import savingPlanController from "../controllers/savingPlanController";
const router = express.Router();
import { Validator } from "../validators";
import {
 CreatePlanSchema
} from "../validators/savingPlanShema";
import { authenticate} from "../middlewares/auth"

function savingPlanRouter() {
  router.post(
    "/",
    authenticate,
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
