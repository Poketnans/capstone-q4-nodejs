import { getRepository, Repository } from 'typeorm';
import Category from '../../entities/Category';
import { ICategoryRepo } from './interfaces';

class CategoryRepository implements ICategoryRepo {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  getCategory = (id: string) => this.ormRepository.findOneOrFail(id);
}

export default CategoryRepository;
