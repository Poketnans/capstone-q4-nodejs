import { UserRepository } from '../../repositories';
import { IUserQuery } from '../../repositories/user/interfaces';

const updateUserService = (userInfo: IUserQuery, id: string) => {
  new UserRepository().updateUser(userInfo, id);
};

export default updateUserService;
