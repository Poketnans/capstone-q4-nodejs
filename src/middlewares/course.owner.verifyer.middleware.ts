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
  const { uuid: id } = req.params;
  const targetCourse = await new CourseRepository().findOneOrFail({
    id,
  });
  if (targetCourse.user_owner.id !== user.id) {
    return next(
      handleError(
        new ErrorHandler(
          httpStatus.UNAUTHORIZED,
          'permission denied'
        ),
        res
      )
    );
  }
  return next();
};
export default courseOwnerVerifyer;
