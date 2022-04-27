import { IEndpoints } from './interfaces';

const prefix = '';
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
