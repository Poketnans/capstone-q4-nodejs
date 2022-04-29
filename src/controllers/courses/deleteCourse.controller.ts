import { NextFunction, Request, Response } from "express";
import { handleError } from "../../errors";
import { DeleteCourseService } from "../../services/courses";


const DeleteCourseControler = async ( req: Request, res: Response, next : NextFunction ) => {
  try {
    await DeleteCourseService(req)
    return res.status(204).json("");
  } catch (e) {
    return handleError(e,res);
  }
}
export default DeleteCourseControler;