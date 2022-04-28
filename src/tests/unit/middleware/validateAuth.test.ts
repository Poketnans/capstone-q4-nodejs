import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import jwtConfig from '../../../configs';
import { validateAuth } from '../../../middlewares';

const mockedUser = {
  name: 'teste',
  email: 'teste@mail.com',
  password: '12345',
};

describe('unit test for validate auth', () => {
  const mockReq: Partial<Request> = {};
  let mockRes: Partial<Response> = {};
  const nextFx: Partial<NextFunction | any> = jest.fn();

  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnValue(mockRes),
      json: jest.fn().mockReturnValue(mockRes),
    } as Partial<Response>;
  });

  it('will call next function and add key decoded on mockReq object', () => {
    const { secretKey, expiresIn } = jwtConfig;
    const token = sign(mockedUser, secretKey, { expiresIn });

    mockReq.headers = {
      authorization: `Bearer ${token}`,
    };

    validateAuth(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    expect(nextFx).toBeCalled();
    expect(nextFx).toBeCalledTimes(1);

    expect(mockReq).toHaveProperty('user');

    expect(true).toBe(true);
  });

  it('will return error message if missing token', () => {
    mockReq.headers = {};

    validateAuth(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    const expectedStatusCode = 401;

    expect(mockRes.status).toBeCalledWith(expectedStatusCode);

    const expectedJsonMessageError = {
      error: 'missing authorization header',
    };

    expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);

    expect(true).toBe(true);
  });

  it('will return error message if token is invalid', () => {
    const { secretKey, expiresIn } = jwtConfig;
    const token = sign(mockedUser, secretKey, { expiresIn });

    mockReq.headers = {
      authorization: `Bearer ${token}123`,
    };

    validateAuth(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    const expectedStatusCode = 401;

    expect(mockRes.status).toBeCalledWith(expectedStatusCode);

    const expectedJsonMessageError = {
      error: 'invalid token',
    };

    expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);

    expect(true).toBe(true);
  });

  it('will return error message if token is expired', () => {
    const { secretKey } = jwtConfig;
    const token = sign(mockedUser, secretKey, { expiresIn: '1ms' });

    mockReq.headers = {
      authorization: `Bearer ${token}`,
    };

    validateAuth(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );

    const expectedStatusCode = 401;

    expect(mockRes.status).toBeCalledWith(expectedStatusCode);

    const expectedJsonMessageError = {
      error: 'invalid token',
    };

    expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);

    expect(true).toBe(true);
  });
});
