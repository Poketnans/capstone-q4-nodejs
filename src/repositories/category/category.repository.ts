import { getRepository, Repository } from 'typeorm';
import Category from '../../entities/Category';
import { UuidMalformedError } from '../../errors';
import CategoryNotFoundError from '../../errors/categoryNotFound.error';
import { ICategoryRepo } from './interfaces';

class CategoryRepository implements ICategoryRepo {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  getCategory = async (id: string) => {
    try {
      return await this.ormRepository.findOneOrFail(id);
    } catch (error) {
      if (
        (error.message as string).includes('invalid input syntax for type uuid')
      ) {
        throw new UuidMalformedError('id_category');
      } else {
        throw new CategoryNotFoundError();
      }
    }
  };
}

export default CategoryRepository;
