import { Response, Request } from 'express';
import httpStatus from 'http-status';
import getCoursesService from '../../services/Course/getCoursesService';
import { handleError } from '../../errors';

const getCoursesController = async (_: Request, res: Response) => {
  try {
    const courses = await getCoursesService();
    return res.status(httpStatus.CREATED).json(courses);
  } catch (error) {
    return handleError(error, res);
  }
};
export default getCoursesController;
