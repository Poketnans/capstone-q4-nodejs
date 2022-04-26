import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { handleError } from '../../errors';
import updateUserService from '../../services/users/update.user.service';

const updateUser = async (req: Request, res: Response) => {
  const { user, validated } = req;
  try {
    await updateUserService(validated, user.id);
    return res.status(httpStatus.NO_CONTENT).json();
  } catch (e: unknown) {
    return handleError(e, res);
  }
};
export default updateUser;
