import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userUpdateImageService } from '../../services/users';

const updateUserImageController = async (req: Request, res: Response) => {
  const { user, imageInfo: image } = req;
  userUpdateImageService(user, image);
  return res.status(httpStatus.NO_CONTENT).json();
};

export default updateUserImageController;
