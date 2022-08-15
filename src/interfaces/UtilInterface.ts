import { AUser } from "./UserInterfaces";
import { Request, Response } from "express";

export interface AuthRequest extends Request {
    user?: AUser
  }
  
