import express, { NextFunction, Response } from "express";
import { BadRequestError, UnAuthorizedError } from "../../lib/appError";
import { AuthRequest } from "../interfaces/UtilInterface";
import userServices from "../services/userService";
import { decryptData } from "../utility/dataCrypto";

const getToken = (req: AuthRequest) => req.headers["x-auth-token"];
const authenticate = async function (
  req: AuthRequest,
  res: null | express.Response,
  next: express.NextFunction
) {
  
  //Logic for authentication goes in here
  const token = getToken(req);

  if (!token) throw new UnAuthorizedError("No token");
  if (typeof token !== "string")
    throw new UnAuthorizedError("Supply with a token");
  try {
  
    const decoded = await decryptData(token);
    const user = await userServices.getUserById(decoded.id);
    if (!user) {
      throw new UnAuthorizedError("User is not authorized");
    }

    req.user = user;
    next();
  } catch (error: any) {
    const errors = ["TokenExpiredError", "NotBeforeError", "JsonWebTokenError"];
    if (errors.includes(error?.name)) {
      throw new UnAuthorizedError("Please authenticate", 411);
    }
    next(error);
  }
};



export {
  authenticate,
};
