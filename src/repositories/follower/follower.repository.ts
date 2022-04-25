import { getRepository, Repository } from 'typeorm';
import Follower from '../../entities/Follower';
import { IFollowerRepo } from './interfaces';

class FollowerRepository implements IFollowerRepo {
  private ormRepository: Repository<Follower>;

  constructor() {
    this.ormRepository = getRepository(Follower);
  }
}

export default FollowerRepository;
