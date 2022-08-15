import express from "express";
import userRouter from "./userRoute";
import savingPlanRouter from "./savingPlanRoute";
import inviteRouter from "./invitationRoute"

const router = express.Router();

function rootRouter() {
  router.use("/user", userRouter());
  router.use("/saving-plan", savingPlanRouter())
  router.use("/invite", inviteRouter())
  
  return router;
}

export default rootRouter;
