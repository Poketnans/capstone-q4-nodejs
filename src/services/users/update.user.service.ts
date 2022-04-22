import { UserRepository } from '../../repositories';
import { IUserQuery } from '../../repositories/user/interfaces';
import { IUser } from '../../types/user';

const updateUserService = (userInfo: IUserQuery, user: IUser) => {
  new UserRepository().updateUser(userInfo, user);
};

export default updateUserService;
