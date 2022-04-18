import { IEndpoints } from './interfaces';

const prefix = '/api';
const usersEndpoint = `${prefix}/users`;

const apiEndpoints: IEndpoints = {
  post: {
    register: `${usersEndpoint}/register`,
    login: `${usersEndpoint}/login`,
  },
  get: {
    all: '',
  },
};

export default apiEndpoints;
