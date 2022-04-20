import { IUser } from "../../types/user";
import { UserRepository } from "../../repositories";
import { ErrorHandler } from "../../errors";

const createUserService = async (user: IUser) =>{
  try {
    const { password, ...newUser } = await new UserRepository().saveUser(user)
    return newUser
  } catch (e) {
    throw new ErrorHandler(400, `${e.message}`)
  }
}
export default createUserService;