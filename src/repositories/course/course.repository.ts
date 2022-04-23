import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourseRepo , ICourse } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  getCourses = () => this.ormRepository.find();


}

export default CourseRepository;
