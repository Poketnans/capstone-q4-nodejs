import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { handleError } from '../../errors';
import createCourseService from '../../services/Course/createCourseService';

const createCourseController = async (req: Request, res: Response) => {
  try {
    const course = await createCourseService(req.validated);
    return res.status(httpStatus.CREATED).json(course);
  } catch (error) {
    return handleError(error, res);
  }
};
export default createCourseController;
