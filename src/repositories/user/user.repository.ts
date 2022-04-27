import { getRepository, Repository } from 'typeorm';
import User from '../../entities/User';
import { IUserQuery, IUserRepo } from './interfaces';
import { IUser } from '../../types/user';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = (user: IUser) => this.ormRepository.save(user);

  getUsers = () => this.ormRepository.find();

  getOneUser = (userInfo: string) => {
    if (userInfo.includes('@')) {
      return this.ormRepository.findOne({ email: userInfo });
    }
    return this.ormRepository.findOne({ id: userInfo });
  };

  updateUser = (userUpdated: IUserQuery, id: string) =>
    this.ormRepository.update(id, userUpdated);

  getUserLogin = (userInfo: string) =>
    this.ormRepository.findOne({ email: userInfo });

  deleteUser = (userId: string) => this.ormRepository.delete(userId);
}

export default UserRepository;
