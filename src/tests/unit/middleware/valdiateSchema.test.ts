import { beforeEach, describe, expect, it, jest } from '@jest/globals';

import { Response, Request, NextFunction } from 'express';

import userSchema from '../../../schemas/userCreate.schema';
import { validateSchemaMiddleware } from '../../../middlewares';

const testUserWrong = {
  name: 'bruno',
  email: 'bruno@gmail',
  password: '12345',
};
const testUser = {
  name: 'bruno',
  email: 'bruno@gmail.com',
  password: '12345',
};

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

  it('should be able of validate schema call return error while body undefined', async () => {
    await validateSchemaMiddleware(userSchema)(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    const expectedStatusCode = 400;
    expect(mockRes.status).toBeCalledWith(expectedStatusCode);
    const expectedJsonMessageError = { error: expect.anything() };
    expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);
  });

  it('should be able of validate schema call next function', async () => {
    mockReq.body = testUser;
    await validateSchemaMiddleware(userSchema)(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );
    expect(nextFx).toBeCalledTimes(1);
  });
  it('should be able of validate schema call return error while email in invalid format', async () => {
    mockReq.body = testUserWrong;
    await validateSchemaMiddleware(userSchema)(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    const expectedStatusCode = 400;
    expect(mockRes.status).toBeCalledWith(expectedStatusCode);
    const expectedJsonMessageError = { error: 'format invalid for email.' };
    expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);
  });
});
