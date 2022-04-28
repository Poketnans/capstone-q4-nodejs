import { getRepository, Repository } from 'typeorm';
import CoursePeriod from '../../entities/CoursePeriod';
import { PeriodNotFoundError, UuidMalformedError } from '../../errors';
import { ICoursePeriodRepo } from './interfaces';

class CoursePeriodRepository implements ICoursePeriodRepo {
  private ormRepository: Repository<CoursePeriod>;

  constructor() {
    this.ormRepository = getRepository(CoursePeriod);
  }

  getCoursePeriods = () => this.ormRepository.find();

  getOnePeriod = async (id: string) => {
    try {
      return await this.ormRepository.findOneOrFail(id);
    } catch (error) {
      if (
        (error.message as string).includes('invalid input syntax for type uuid')
      ) {
        throw new UuidMalformedError('id_period');
      } else {
        throw new PeriodNotFoundError();
      }
    }
  };
}

export default CoursePeriodRepository;
