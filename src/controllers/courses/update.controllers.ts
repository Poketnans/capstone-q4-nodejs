import { Request, Response } from "express";
import { handleError } from "../../errors";

const updateCourseController = async ( req: Request, res: Response ) => {
  try {
        
  } catch (e) {
    return handleError(e, res)
  }
}
export default updateCourseController;