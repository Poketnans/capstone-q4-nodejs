import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import httpStatus from 'http-status'
import jwtConfig from '../configs'

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: "Missing authorization headers" })
  }

  const token = req.headers.authorization.split(" ")[1]

  jwt.verify(token, jwtConfig.secretKey, (err) => {
    if (err) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid Token." })
    }
    return next()
  })
  return next()
}

export default authenticateUser