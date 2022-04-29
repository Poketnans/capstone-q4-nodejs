import { getRepository, Repository } from 'typeorm';
import Category from '../../entities/Category';
import CategoryNotFoundError from '../../errors/categoryNotFound.error';
import { verifyUuidError } from '../../utils';
import { ICategoryRepo } from './interfaces';

class CategoryRepository implements ICategoryRepo {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  getCategory = async (id: string) => {
    try {
      return await this.ormRepository.findOneOrFail(id);
    } catch (err) {
      verifyUuidError(err.message, 'id_category');
      throw new CategoryNotFoundError();
    }
  };
}

export default CategoryRepository;
