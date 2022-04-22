import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepo } from './interfaces';
import { IUser } from '../types/user';
import { IUserQuery } from './user/interfaces';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = (user: IUser) => this.ormRepository.save(user);

  getUsers = () => this.ormRepository.find();

  updateUser = (updatedUser: IUserQuery, user: IUser) => {
    this.ormRepository.update({ id: user.id }, updatedUser);
  };
}

export default UserRepository;
