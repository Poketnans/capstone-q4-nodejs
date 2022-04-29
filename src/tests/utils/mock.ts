/* eslint-disable import/no-extraneous-dependencies */
import faker from '@faker-js/faker';
import { IMocked } from './interfaces';

const mocked: IMocked = {
  newUser: () => ({
    name: faker.name.findName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(6),
  }),
  login: () => ({
    email: faker.internet.email(),
    password: faker.internet.password(6),
  }),
};

export default mocked;
