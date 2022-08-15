import express from "express";
import appResponse from "../../lib/appResponse";
import constants from "../config/constants";
import { passwordHash} from "../utility/dataCrypto"
import userService from "../services/userService";
 const {USER_LOGGED, USER_CREATED} = constants.MESSAGES

class UserCtrl {
  async addUser(req: express.Request, res: express.Response) {

    let userData = req.body;
     userData.password = await passwordHash(userData.password)

    const response = await userService.addUser(userData);
    res.status(201).send(appResponse(USER_CREATED, response));
  }

  async login(req: express.Request, res: express.Response) {

    const userData = req.body;

    const response = await userService.login(userData);
    res.status(201).send(appResponse(USER_LOGGED, response));
  }
 
}

export default new UserCtrl();
