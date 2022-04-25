import { IUser } from "../../repositories/user/interfaces";
import UserRepository from "../../repositories/user/user.repository";

const getUsersService = async () => {
  try {
    const users: IUser[] = await new UserRepository().getUsers();
    const secureUsers = users.map((user: IUser )=> {
      const { password , ...newSecureUser } = user;
      return newSecureUser
    } )
    return {
      status: 200,
      body: secureUsers,
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getUsersService;
