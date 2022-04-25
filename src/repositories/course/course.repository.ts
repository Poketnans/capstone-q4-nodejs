import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourse, ICourseRepo } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  saveCourse = async(course: ICourse) => {
        return await this.ormRepository.save(course)
    }

}

export default CourseRepository;
