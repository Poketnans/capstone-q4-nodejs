import { Request, Response, NextFunction } from "express"
import { ObjectSchema } from "yup"

const validateSchema = (shape: ObjectSchema<any>) => async (req:Request, res:Response, next:NextFunction) => {
  try {
    const validated = await shape.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })
    req['validated'] = validated
    return next()
  } catch (e) {
    return res.status(400).json({ error: e.errors })
  }
}

export default validateSchema