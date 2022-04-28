import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ErrorHandler } from '../errors';
import { ProjectRepository } from '../repositories';

const projectPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;
  const { uuid: id } = req.params;
  const targetProject = await new ProjectRepository().getOne(id, [
    'user_owner',
  ]);
  if (targetProject.user_owner.id !== user.id) {
    return next(new ErrorHandler(httpStatus.UNAUTHORIZED, 'permission denied'));
  }
  return next();
};

export default projectPermissionMiddleware;
