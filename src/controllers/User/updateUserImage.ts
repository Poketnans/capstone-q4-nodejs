import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { handleError } from '../../errors';
import { userUpdateImageService } from '../../services/users';

const updateUserImageController = async (req: Request, res: Response) => {
  const { user, imageInfo: image } = req;
  try {
    await userUpdateImageService(user, image);
    return res.status(httpStatus.NO_CONTENT).json();
  } catch (err) {
    return handleError(err, res);
  }
};

export default updateUserImageController;
