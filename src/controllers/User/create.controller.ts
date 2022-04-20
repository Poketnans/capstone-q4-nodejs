import { Request, Response } from "express";
import { createUserService } from "../../services/users";

import { ErrorHandler } from "../../errors";
import { IUser } from "../../types/user";

const create = async ( req: Request, res: Response ) =>{
  try {
    const user = await createUserService(req.validated as IUser); 
    return {
      status: res.status(201),
      json:   res.json(user)
    }
  } catch (e: unknown ) {
    throw new ErrorHandler(400,"erro ao criar");
  }
} 
export default create;