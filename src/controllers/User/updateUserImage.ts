import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userUpdateService } from '../../services/users';

const updateUserImageController = async (req: Request, res: Response) => {
  const { user, imageInfo: image } = req;
  userUpdateService(user, image);
  return res.status(httpStatus.NO_CONTENT).json();
};

export default updateUserImageController;
