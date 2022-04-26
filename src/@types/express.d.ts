import * as express from 'express';
import { IUser } from '../types/user';

declare global {
  namespace Express {
    interface Request {
      validated: any;
      token: string;
      user: IUser;
    }
  }
}
