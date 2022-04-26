import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ErrorHandler, handleError } from '../errors';
import { CourseRepository } from '../repositories';

const courseOwnerVerifyer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;
  const { id } = req.params;
  const targetCourse = await new CourseRepository().findOneOrFail({
    id,
  });
  if (targetCourse.user_owner[0].id !== user.id) {
    throw handleError(
      new ErrorHandler(
        httpStatus.UNAUTHORIZED,
        'You dont have the right permissions'
      ),
      res
    );
  }
  return next();
};
export default courseOwnerVerifyer;
