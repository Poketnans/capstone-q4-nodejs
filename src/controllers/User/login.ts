import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwtConfig from '../../configs';
import UserRepository from '../../repositories/user/user.repository';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await new UserRepository().getUserLogin(email);

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: 'Wrong email/password' });
  }
  const token = jwt.sign({ user }, jwtConfig.secretKey, {
    expiresIn: jwtConfig.expiresIn,
  });

  return res.status(httpStatus.CREATED).json({ token });
};

export default loginController;
