import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import jwtConfig from '../../configs'
import httpStatus from 'http-status'
/* import userLogin from '../repositories/userLogin' */

const loginController = async (req: Request, res: Response) => {

  const { email, password } = req.body
  const user = await userLogin(email)

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    return res.status(401).json({ message: "Wrong email/password" })
  }

  const token = jwt.sign({ user }, jwtConfig.secretKey, {
    expiresIn: jwtConfig.expiresIn
  })

  return res.status(httpStatus.CREATED).json({ token })
}

export default loginController