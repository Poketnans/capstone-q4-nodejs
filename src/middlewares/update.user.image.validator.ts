import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { ErrorHandler } from '../errors';

const updateUserImageValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { file } = req;
  const allowedMimeTypes: string[] = [
    'image/jpeg',
    'image/png',
    'image/svg+xml',
  ];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    return next(
      new ErrorHandler(
        httpStatus.UNSUPPORTED_MEDIA_TYPE,
        `allowed mymetypes: ${allowedMimeTypes}, sended mimetype: ${file.mimetype}`
      )
    );
  }
  const imageInfo = {
    mimetype: file.mimetype,
    name: file.originalname,
    binary: JSON.stringify(file.buffer),
  };
  req.imageInfo = imageInfo;
  return next();
};

export default updateUserImageValidator;
