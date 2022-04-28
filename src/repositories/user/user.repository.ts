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


  getOneUser = (userInfo: string, relations?: string[]) => {
    if (userInfo.includes('@')) {
      return this.ormRepository.findOne({ email: userInfo }, { relations });
    }
    return this.ormRepository.findOne({ id: userInfo }, { relations });
  };

  updateUser = (userUpdated: IUserQuery, id: string) =>
    this.ormRepository.update(id, userUpdated);

  getUserLogin = (email: string) => this.ormRepository.findOne({ email });

  deleteUser = (userId: string) => this.ormRepository.delete(userId);
}

export default UserRepository;
