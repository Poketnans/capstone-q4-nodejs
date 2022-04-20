import { QueryFailedError } from "typeorm";
import { IUser } from "../../types/user";
import { UserRepository } from "../../repositories";
import { ErrorHandler } from "../../errors";

const createUserService = async (user: IUser) =>{
  try {
    const { password, ...newUser } = await new UserRepository().saveUser(user);
    return newUser
  } catch (e) {
    
    if ( e instanceof QueryFailedError){
      throw new ErrorHandler(400, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(400, `${e.message}`);
  }

}
export default createUserService;