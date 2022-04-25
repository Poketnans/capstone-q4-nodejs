import { getRepository, Repository } from 'typeorm';
import User from '../../entities/User';
import { IUserRepo } from './interfaces';
import { IUser } from '../../types/user';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = (user: IUser) => this.ormRepository.save(user);

  getUsers = () => this.ormRepository.find();

  getOneUser = (userId: string) => this.ormRepository.findOne({ id: userId });

  deleteUser = (userId: string) => this.ormRepository.delete(userId);
}

export default UserRepository;
