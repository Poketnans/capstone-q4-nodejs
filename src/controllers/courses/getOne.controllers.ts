import { NextFunction, Request, Response } from "express";
import { handleError } from "../../errors";
import CourseGetOneServices from "../../services/courses/getOne.services";

const CourseGetOneControler =async (req : Request, res : Response , next : NextFunction) => {
  try {

    const findCourse = await CourseGetOneServices(req);
    return res.status(200).json(findCourse);
    
  } catch (e) {
    return handleError(e, res)
  }
}
export default CourseGetOneControler;