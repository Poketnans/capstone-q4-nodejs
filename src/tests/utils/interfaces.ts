export interface ITestConnection {
  connect: () => Promise<void>;
  create: () => Promise<void>;
  close: () => Promise<void>;
  clear: () => Promise<void>;
  dropTables: () => Promise<void>;
}

export type TMethods = 'get' | 'post' | 'patch' | 'delete';

interface IPOSTEndpoints {
  register: string;
  login: string;
}

interface IGETEndpoints {
  all: string;
}

export interface IEndpoints {
  post: IPOSTEndpoints;
  get: IGETEndpoints;
}

export interface ITestUserRegisterPayload {
  name: string;
  email: string;
  password: string;
  isAdm?: boolean;
}

export interface ITestUserRegisterResponse {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
}

interface ITokenMalformedError {
  name: string;
  message: string;
}

export interface IErrorMessage {
  error: string | string[] | ITokenMalformedError;
}

export interface ITestLoginPayload {
  email: string;
  password: string;
}

export interface ITestLoginResponse {
  token: string;
}

export interface IMocked {
  newUser: () => ITestUserRegisterPayload;
  login: () => ITestLoginPayload;
}

interface IUserInfo {
  payload: ITestUserRegisterPayload | object;
  token: string;
}

export interface IUserSet {
  common: IUserInfo;
  admin: IUserInfo;
}

interface IHeaders {
  authorization: string;
}

export interface ISend<IBody> {
  body?: IBody;
  headers?: IHeaders;
}

export interface IExpected<IResponse> {
  response?: IResponse;
  statusCode: number;
}
