import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepo } from './interfaces';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  getUsers = async () => {
    return await this.ormRepository.find();
  };

}

export default UserRepository;
