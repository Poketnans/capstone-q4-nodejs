import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourseFindOne, ICourseRepo } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  saveCourse = (course: Course) => this.ormRepository.save(course);

  findOneOrFail = (objectId: ICourseFindOne) =>
    this.ormRepository.findOneOrFail(objectId);

  deleteOneCourse = (ObjectId: ICourseFindOne) =>
    this.ormRepository.delete(ObjectId);

  getCourses = () => this.ormRepository.find();
}

export default CourseRepository;
