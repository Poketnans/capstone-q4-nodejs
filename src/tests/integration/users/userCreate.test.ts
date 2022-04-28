import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import request, { Response } from 'supertest';
import app from '../../../app';
import generateUser from './dataToUserInTests';

import connection from '../../utils/connection';

describe('Integration route user create', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  const baseUrlTest = '/users/register';

  it('should be able return error with statusCode 400', async () => {
    const response = await request(app)
      .post(baseUrlTest)
      .send(generateUser.newUserWrongEmail());

    const statusCodeExpected = 400;
    expect(response.statusCode).toBe(statusCodeExpected);
  });

  it('should de able return new json of new user and status code 201', async () => {
    const newUser = generateUser.newUser();
    const { password, ...newUserNotPassword } = newUser;

    const response: Response = await request(app)
      .post(baseUrlTest)
      .send(newUser);

    const statusCodeExpected = 201;
    expect(response.statusCode).toBe(statusCodeExpected);

    const responseBodyKeys = Object.keys(response.body).sort();
    const expectedBodyalues = Object.keys(newUserNotPassword).sort();
    expect(responseBodyKeys).toStrictEqual(expectedBodyalues);
  });
});
