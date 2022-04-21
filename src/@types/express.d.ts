import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      validated: any ;
      token: string;
      user: any;
    }
  }
}