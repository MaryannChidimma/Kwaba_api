import express from "express";
import userController from "../controllers/userController";
const router = express.Router();
import { Validator } from "../validators";
import {
  AddUserSchema,
  LoginUserSchema,
} from "../validators/userSchema";


function userRouter() {
  router.post(
    "/register",
    Validator(AddUserSchema, "body"),
    userController.addUser
  );

  router.post(
    "/login",
    Validator(LoginUserSchema, "body"),
    userController.login
  );
 
  return router;
}

export default userRouter;
