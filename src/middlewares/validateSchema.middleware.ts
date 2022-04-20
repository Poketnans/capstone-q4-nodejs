import { Response, Request, NextFunction } from "express";
import { ObjectSchema } from "yup";

const validateSchemaMiddleware = (schema: ObjectSchema<any> ) => async (req: Request,res: Response, nextFx: NextFunction) => {

  try {
    const validated =   await schema.validate(req.body,{
      abortEarly:false,
      stripUnknown: true
    });
    req.validated =  validated;
    
    return nextFx();
  } catch (e: any | unknown) {
    
    return {
      res : res.status(400),
      req : res.json({ error: e.errors.join(", ")})
    }
  }
}

export default validateSchemaMiddleware;