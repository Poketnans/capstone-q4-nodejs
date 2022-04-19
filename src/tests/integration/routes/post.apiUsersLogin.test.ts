import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from '@jest/globals';
import httpStatus from 'http-status';
import { apiEndpoints, mocked } from '../../utils';
import connection from '../../utils/connection';
import fetchData from '../../utils/fetchData';
import {
  IErrorMessage,
  IExpected,
  ISend,
  ITestLoginPayload,
  ITestLoginResponse,
  ITestUserRegisterPayload,
} from '../../utils/interfaces';

describe('POST/api/users/register endpoint', () => {
  const endpoint = apiEndpoints.post.login;
  let userRegisterPayload: ITestUserRegisterPayload;

  const fetchUsersLogin = (body = {}, headers = {}, times = 1) =>
    fetchData('post', endpoint, body, headers, times);

  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
    userRegisterPayload = mocked.newUser();

    await fetchData('post', apiEndpoints.post.register, userRegisterPayload);
  });

  /** WARNING - Ao ativar mais de um arquivo com seguências de conecção,
   * começam a aparecer erros de TypeORM - isso pode ser a extensão do
   * Jest dando. Desabilite a extensão e teste novamente.
   */

  it('should validate wrong login schema', async () => {
    const send = {
      body: {},
    };

    const expected: IExpected<IErrorMessage> = {
      response: {
        error: ['email is a required field', 'password is a required field'],
      },
      statusCode: httpStatus.BAD_REQUEST,
    };

    const { body, statusCode } = await fetchUsersLogin(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should validate wrong password', async () => {
    const { email } = userRegisterPayload;

    const send: ISend<ITestLoginPayload> = {
      body: { email, password: 'wrongPassword' },
    };

    const expected: IExpected<IErrorMessage> = {
      response: { error: 'invalid credentials' },
      statusCode: httpStatus.UNAUTHORIZED,
    };

    const { body, statusCode } = await fetchUsersLogin(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should login correctly', async () => {
    const { email, password } = userRegisterPayload;

    const send: ISend<ITestLoginPayload> = {
      body: { email, password },
    };

    const expected: IExpected<ITestLoginResponse> = {
      response: { token: '' },
      statusCode: httpStatus.OK,
    };

    const { body, statusCode } = await fetchUsersLogin(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toHaveProperty('token');
  });
});
