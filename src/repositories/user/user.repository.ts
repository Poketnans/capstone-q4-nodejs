import { getRepository, Repository } from 'typeorm';
import User from '../../entities/User';
import { IUserQuery, IUserRepo } from './interfaces';
import { IUser } from '../../types/user';
import { UserNotFoundError, UuidMalformedError } from '../../errors';
import { verifyUuidError } from '../../utils';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = (user: IUser) => this.ormRepository.save(user);

  getUsers = () => this.ormRepository.find();

  getOneUser = async (userInfo: string, relations?: string[]) => {
    try {
      if (userInfo.includes('@')) {
        return await this.ormRepository.findOneOrFail(
          { email: userInfo },
          { relations }
        );
      }
      return await this.ormRepository.findOneOrFail(
        { id: userInfo },
        { relations }
      );
    } catch (err) {
      verifyUuidError(err.message, 'jwt.user.id');

      throw new UserNotFoundError();
    }
  };

  updateUser = (userUpdated: IUserQuery, id: string) =>
    this.ormRepository.update(id, userUpdated);

  getUserLogin = (email: string) => this.ormRepository.findOne({ email });

  deleteUser = (userId: string) => this.ormRepository.delete(userId);
}

export default UserRepository;
