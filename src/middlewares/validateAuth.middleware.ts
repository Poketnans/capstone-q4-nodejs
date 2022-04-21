import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import jwtConfig from '../configs';

// eslint-disable-next-line consistent-return
const validateAuth = (req: Request, res: Response, nextFx: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: 'missing authorization header',
    });
  }

  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: 'token missing',
    });
  }

  jwt.verify(token, jwtConfig.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: 'invalid token',
      });
    }

    req.user = decoded;

    return nextFx();
  });
};

export default validateAuth;