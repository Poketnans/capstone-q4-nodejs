import { getRepository, Repository } from 'typeorm';
import User from '../entities/Users';
import { IUserRepo } from './interfaces';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
}

export default UserRepository;
