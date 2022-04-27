import { Request, Response } from "express";
import { handleError } from "../../errors";

import {updateCourseService} from "../../services/courses";

const updateCourseController = async ( req: Request, res: Response ) => {
  try {

    await updateCourseService(req);
    return res.status(204).json("");

  } catch (e) {

    return handleError(e, res);

  }
}
export default updateCourseController;