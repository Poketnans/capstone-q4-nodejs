import { QueryFailedError } from 'typeorm';
import { ErrorHandler } from '../../errors';
import { UserRepository } from '../../repositories';
import { IUserQuery } from '../../repositories/user/interfaces';

const updateUserService = async (userInfo: IUserQuery, id: string) => {
  try {
    return await new UserRepository().updateUser(userInfo, id);
  } catch (e: any) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(400, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(400, `${e.message}`);
  }
};

export default updateUserService;
