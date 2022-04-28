import httpStatus from 'http-status';

import { Response, Request, NextFunction } from 'express';
import { ObjectSchema } from 'yup';
import { ErrorHandler } from '../errors';

const validateSchemaMiddleware =
  (schema: ObjectSchema<any>) =>
  async (req: Request, res: Response, nextFx: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.validated = validated;

      return nextFx();
    } catch (e: any | unknown) {
      return nextFx(
        new ErrorHandler(httpStatus.BAD_REQUEST, e.errors.join(', '))
      );
    }
  };

export default validateSchemaMiddleware;
