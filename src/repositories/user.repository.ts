import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepo } from './interfaces';
import { IUser } from "../types/user";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = (user: IUser) => this.ormRepository.save(user)

  getUsers:IUser[] = () => this.ormRepository.find();

  getUserLogin:IUser = (email: string) => this.ormRepository.findOne({email})

}

export default UserRepository;
