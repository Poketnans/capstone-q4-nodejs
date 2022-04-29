import { Request, Response } from 'express';
import { UserRepository } from '../../repositories';

const getUserImage = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  const user = await new UserRepository().getOneUser(uuid);
  const file = {
    mimetype: user.image.mimetype,
    binary: JSON.parse(user.image.binary),
  };
  res.writeHead(200, {
    'Content-Type': file.mimetype,
  });
  return res.end(JSON.parse(file.binary));
};

export default getUserImage;
