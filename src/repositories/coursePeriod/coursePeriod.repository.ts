import { getRepository, Repository } from 'typeorm';
import CoursePeriod from '../../entities/CoursePeriod';
import { ICoursePeriodRepo } from './interfaces';

class CoursePeriodRepository implements ICoursePeriodRepo {
  private ormRepository: Repository<CoursePeriod>;

  constructor() {
    this.ormRepository = getRepository(CoursePeriod);
  }

  getCoursePeriods = () => this.ormRepository.find();
}

export default CoursePeriodRepository;
