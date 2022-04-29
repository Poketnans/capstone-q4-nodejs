import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ErrorHandler } from '../errors';
import { CourseRepository } from '../repositories';

const courseOwnerVerifyer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req;
    const { uuid: id } = req.params;
    
    const targetCourse = await new CourseRepository().getOneOrFail(id,['user_owner']);
    
    if (targetCourse.user_owner.id !== user.id) {
      return next(new ErrorHandler(httpStatus.UNAUTHORIZED, 'permission denied'));
    }
    return next();
  } catch (e) {
    
    return next(new ErrorHandler(httpStatus.NOT_FOUND, `${e.message}`));
  }
};
export default courseOwnerVerifyer;
