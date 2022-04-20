import { IUser } from "../types/user";

export interface IUserRepo {
    saveUser : (user: IUser)=> Promise<IUser>
}
