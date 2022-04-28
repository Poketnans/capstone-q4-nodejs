import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwtConfig from '../../configs';
import UserRepository from '../../repositories/user/user.repository';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await new UserRepository().getUserLogin(email);
  
  if(!user){
    return res.status(httpStatus.NOT_FOUND).json({ "error" : "email ou password not found"  });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ error: 'invalid credentials' });
  }
  const token = jwt.sign({ user }, jwtConfig.secretKey, {
    expiresIn: jwtConfig.expiresIn,
  });

  return res.status(httpStatus.OK).json({ token });
};

export default loginController;
