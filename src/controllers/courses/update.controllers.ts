import { Request, Response } from "express";
import { handleError } from "../../errors";

import {updateCourseService} from "../../services/courses";

const updateCourseController = async ( req: Request, res: Response ) => {
  try {

    const course = await updateCourseService(req);
    return res.status(200).json(course);

  } catch (e) {

    return handleError(e, res);

  }
}
export default updateCourseController;