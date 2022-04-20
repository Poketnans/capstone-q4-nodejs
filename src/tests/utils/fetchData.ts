/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import app from '../../app';
import { TMethods } from './interfaces';

const fetchData = async (
  method: TMethods,
  endpoint: string,
  body: object,
  headers: object = {},
  times = 1
): Promise<request.Test> => {
  const req = request(app);

  let resp;

  /* eslint no-await-in-loop: off */
  for (let time = 1; time <= times; time += 1) {
    resp = await req[method](`${endpoint}`).set(headers).send(body);
  }

  return resp;
};

export default fetchData;
