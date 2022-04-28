import { getRepository, Repository } from 'typeorm';
import CourseMode from '../../entities/CourseMode';
import { ICourseModeRepo } from './interfaces';

class CourseModeRepository implements ICourseModeRepo {
  private ormRepository: Repository<CourseMode>;

  constructor() {
    this.ormRepository = getRepository(CourseMode);
  }

  getCourseModes = () => this.ormRepository.find();

  getOneMode = (id: string) => this.ormRepository.findOne(id);
}

export default CourseModeRepository;
