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

  getUserLogin = (email: string) => this.ormRepository.findOne({email})

  getOneUser = (userId: string) => this.ormRepository.findOne({ id: userId });
}

export default UserRepository;
