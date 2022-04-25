import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourseFindOne, ICourseRepo } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  findOneOrFail = (objectId: ICourseFindOne) => this.ormRepository.findOneOrFail({...objectId});
}

export default CourseRepository;
