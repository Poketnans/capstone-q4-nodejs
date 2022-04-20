import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from '@jest/globals';
import httpStatus from 'http-status';
import { apiEndpoints, mocked, removeUnmockableProps } from '../../utils';
import connection from '../../utils/connection';
import fetchData from '../../utils/fetchData';
import {
  IErrorMessage,
  IExpected,
  ISend,
  ITestUserRegisterPayload,
  ITestUserRegisterResponse,
} from '../../utils/interfaces';

describe('POST/api/users/register endpoint', () => {
  const endpoint = apiEndpoints.post.register;
  let userRegisterPayload: ITestUserRegisterPayload;
  let token: string;

  const fetchUsersRegister = (body = {}, headers = {}, times = 1) =>
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
  });

  it('should validate wrong schema', async () => {
    delete userRegisterPayload.email;
    delete userRegisterPayload.password;

    const send: ISend<ITestUserRegisterPayload> = {
      body: userRegisterPayload,
    };

    const expected: IExpected<IErrorMessage> = {
      response: {
        error: ['email is a required field', 'password is a required field'],
      },
      statusCode: httpStatus.BAD_REQUEST,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should validate unique email violation', async () => {
    const send: ISend<ITestUserRegisterPayload> = {
      body: userRegisterPayload,
    };

    const { email } = userRegisterPayload;

    const expected: IExpected<IErrorMessage> = {
      response: {
        error: `Key (email)=(${email}) already exists.`,
      },
      statusCode: httpStatus.CONFLICT,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body, {}, 2);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });

  it('should register correctly', async () => {
    const { email, name } = userRegisterPayload;

    const send: ISend<ITestUserRegisterPayload> = {
      body: { ...userRegisterPayload, email: email.toUpperCase() },
    };

    const expected: IExpected<ITestUserRegisterResponse> = {
      response: { id: '', name, email: email.toLowerCase(), isAdm: false },
      statusCode: httpStatus.CREATED,
    };

    const { body, statusCode } = await fetchUsersRegister(send.body);

    removeUnmockableProps(body);
    removeUnmockableProps(expected.response);

    expect(statusCode).toBe(expected.statusCode);
    expect(body).toStrictEqual(expected.response);
  });
});
