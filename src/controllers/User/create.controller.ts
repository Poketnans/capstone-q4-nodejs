import { Request, Response } from "express";
import { createUserService } from "../../services/users";

import { handleError } from "../../errors";
import { IUser } from "../../types/user";

const createUserController = async ( req: Request, res: Response ) =>{
  try {
    const user = await createUserService(req.validated as IUser); 
    return res.status(201).json(user)
  } catch (e: unknown ) {
    return handleError(e,res);
  }
} 
export default createUserController;