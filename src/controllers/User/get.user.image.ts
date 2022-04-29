import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ImageProfileRepository } from '../../repositories';

const getUserImage = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  const image = await new ImageProfileRepository().getOneImage(uuid);
  const file = {
    mimetype: image.mimetype,
    binary: Buffer.from(JSON.parse(image.binary), 'base64'),
  };
  res.writeHead(httpStatus.OK, {
    'Content-Type': file.mimetype,
  });
  return res.end(file.binary);
};

export default getUserImage;
