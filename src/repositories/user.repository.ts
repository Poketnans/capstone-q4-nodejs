import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepo } from './interfaces';
import { IUser } from "../types/user";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = async (user: IUser) => this.ormRepository.save(user)
}

export default UserRepository;
