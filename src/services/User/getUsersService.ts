import { InterfaceUser } from "../repositories/user/interface";
import secureUserDataService from "./secureUserDataService";
import UserRepoData from "../repositories/user";

const getUsersService = async () => {
  try {
    const users: InterfaceUser[] = await new UserRepoData().getUsers();
    const secureUsers: InterfaceUser[] = users.map((user) =>
      secureUserDataService(user)
    );
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
