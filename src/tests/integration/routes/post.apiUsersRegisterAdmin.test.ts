import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from '@jest/globals';
import httpStatus from 'http-status';
import { IUserLoginPayload } from '../../../types';
import { apiEndpoints, mocked, removeUnmockableProps } from '../../utils';
import connection from '../../utils/connection';
import fetchData from '../../utils/fetchData';
import {
  IErrorMessage,
  IExpected,
  ISend,
  ITestUserRegisterPayload,
  ITestUserRegisterResponse,
  ITestLoginResponse,
} from '../../utils/interfaces';

describe('POST/api/users/register ADMIN USER endpoint', () => {
  const { register, login } = apiEndpoints.post;
  let userRegisterPayload: ITestUserRegisterPayload;
  let tokenAdmin: string;
  let tokenNotAdmin: string;

  const fetchUsersRegister = (body = {}, headers = {}, times = 1) =>
    fetchData('post', register, body, headers, times);

  const fetchUsersLogin = (body = {}, headers = {}, times = 1) =>
    fetchData('post', login, body, headers, times);

  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    // await connection.clear();
    userRegisterPayload = mocked.newUser();

    const userAdmin: IUserLoginPayload = {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    };

    const { body: bodyAdm } = await fetchUsersLogin(userAdmin);
    tokenAdmin = bodyAdm.token;

    const userNotAdmin = mocked.newUser();
    await fetchUsersRegister(userNotAdmin);
    const { email, password } = userNotAdmin;
    const { body: bodyNotAdm } = await fetchUsersLogin({ email, password });
    tokenNotAdmin = bodyNotAdm.token;
  });

  it('should validate if it has header in admin register', async () => {
    const send: ISend<ITestUserRegisterPayload> = {
      body: { ...userRegisterPayload, isAdm: true },
    };

    const expected: IExpected<IErrorMessage> = {
      response: {
        error: 'missing authorization token',
      },
      statusCode: httpStatus.UNAUTHORIZED,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should validate if token has valid format', async () => {
    const send: ISend<ITestUserRegisterPayload> = {
      body: { ...userRegisterPayload, isAdm: true },
    };

    const expected: IExpected<IErrorMessage> = {
      response: {
        error: {
          name: 'JsonWebTokenError',
          message: 'jwt malformed',
        },
      },
      statusCode: httpStatus.UNAUTHORIZED,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should validate if token has admin permition', async () => {
    const send: ISend<ITestUserRegisterPayload> = {
      body: { ...userRegisterPayload, isAdm: true },
      headers: { authorization: tokenNotAdmin },
    };

    const expected: IExpected<IErrorMessage> = {
      response: {
        error: 'missing admin permision',
      },
      statusCode: httpStatus.UNAUTHORIZED,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should register correctly admin user', async () => {
    const { email, name } = userRegisterPayload;

    const send: ISend<ITestUserRegisterPayload> = {
      body: { ...userRegisterPayload, isAdm: true },
      headers: { authorization: tokenAdmin },
    };

    const expected: IExpected<ITestUserRegisterResponse> = {
      response: { id: '', name, email: email.toLowerCase(), isAdm: true },
      statusCode: httpStatus.CREATED,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body);

    removeUnmockableProps(body);
    removeUnmockableProps(expected.response);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });
});
