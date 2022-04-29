import { DeleteResult, UpdateResult } from 'typeorm';
import Project from '../../entities/Project';

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  employed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserQuery {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  employed?: boolean;
}
interface IUserRepo {
  saveUser: (user: IUser) => Promise<IUser>;
  // registerUser: (user: IUser) => Promise<IUser>;
  getUsers: () => Promise<IUser[]>;
  updateUser: (object: IUserQuery, id: string) => Promise<UpdateResult>;
  getUserLogin: (email: string) => Promise<IUser>;
  deleteUser: (userId: string) => Promise<DeleteResult>;
  getOneUser: (userId: string) => Promise<IUser>;
}
export { IUser, IUserRepo, IUserQuery };
