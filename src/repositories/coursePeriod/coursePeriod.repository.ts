import { getRepository, Repository } from 'typeorm';
import CoursePeriod from '../../entities/CoursePeriod';
import { PeriodNotFoundError } from '../../errors';
import { verifyUuidError } from '../../utils';
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
    } catch (err) {
      verifyUuidError(err.message, 'id_period');
      throw new PeriodNotFoundError();
    }
  };
}

export default CoursePeriodRepository;
