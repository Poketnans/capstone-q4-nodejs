import { IUser } from "../../repositories/user/interfaces";
import UserRepository from "../../repositories/user.repository";

const getUsersService = async () => {
  try {
    const users: IUser[] = await new UserRepository().getUsers();
   
    return {
      status: 200,
      body: users,
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getUsersService;
