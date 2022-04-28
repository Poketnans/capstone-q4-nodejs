import { beforeEach, describe, expect, it, jest } from '@jest/globals';

import { Response, Request, NextFunction } from 'express';

import userSchema from '../../../schemas/userCreate.schema';
import { validateSchemaMiddleware } from '../../../middlewares';

describe('validadeSchemaMiddleware', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  const nextFx: NextFunction | any = jest.fn();

  beforeEach(async () => {
    mockReq = {} as Partial<Request>;
    mockRes = {
      status: jest.fn().mockReturnValue(mockRes),
      json: jest.fn().mockReturnValue(mockRes),
    } as Partial<Response>;
  });

  it('should be able to call next function just one time', async () => {
    await validateSchemaMiddleware(userSchema)(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    expect(nextFx).toBeCalled();
    expect(nextFx).toBeCalledTimes(1);
  });
});
