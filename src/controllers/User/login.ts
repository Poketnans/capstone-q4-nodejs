import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
/* import userLogin from "../repositories/userLogin" */

const loginController = async (req: Request, res: Response) => {

    const config = {
        secret: process.env.SECRET_KEY || "",
        expiresIn: process.env.EXPIRES_IN || "24h"
    }

    const { email, password } = req.body
    const user = await userLogin(email)

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        return res.status(401).json({ message: "Wrong email/password" })
    }

    const token = jwt.sign({ user }, config.secret, {
        expiresIn: config.expiresIn
    })

    return res.status(200).json({ token })
}

export default loginController