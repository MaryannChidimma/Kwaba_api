import express from "express";
import userRouter from "./userRoute";
import savingPlanRouter from "./savingPlanRoute";

const router = express.Router();

function rootRouter() {
  router.use("/user", userRouter());
  router.use("/saving-plan", savingPlanRouter())
  
  return router;
}

export default rootRouter;
