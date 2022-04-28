import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { CourseTitleAlreadyRegisteredError } from '../../errors';
import { ICourseRepo, ICourseUpdate, ICourseFindOne } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  saveCourse = async (course: Course) => {
    try {
      return await this.ormRepository.save(course);
    } catch (error) {
      throw new CourseTitleAlreadyRegisteredError();
    }
  };

  deleteOneCourse = (id: string) => this.ormRepository.delete(id);

  getCourses = () => this.ormRepository.find();

  getOneOrFail = (id: string) => this.ormRepository.findOneOrFail(id);

  update = (id: string, updatedCourse: ICourseUpdate) =>
    this.ormRepository.update(id, updatedCourse);
}

export default CourseRepository;
