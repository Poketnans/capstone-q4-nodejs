import { describe, it, expect } from '@jest/globals';
import { getConnection } from 'typeorm';
import configs from '../../configs';
import User from '../../entities/User';
import connection from '../utils/connection';

describe('User entity tests', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should have initial admin user', async () => {
    const conn = getConnection();

    const resp: User[] = await conn.query(
      `SELECT * FROM users u WHERE u.email = '${configs.ADMIN_EMAIL}'`
    );

    expect(resp.length).toBe(1);
    expect(resp[0].isAdm).toBeTruthy();
  });
});
