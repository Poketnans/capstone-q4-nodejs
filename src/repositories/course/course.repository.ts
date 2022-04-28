import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import {
  CourseNotFoundError,
  CourseTitleAlreadyRegisteredError,
} from '../../errors';
import { verifyUuidError } from '../../utils';
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

  getOneOrFail = async (id: string, listRelations: string[] = []) => {
    try {
      return await this.ormRepository.findOneOrFail(id, {
        relations: listRelations,
      });
    } catch (err) {
      verifyUuidError(err.message, 'id_course');
      throw new CourseNotFoundError();
    }
  };

  update = (id: string, updatedCourse: ICourseUpdate) =>
    this.ormRepository.update(id, updatedCourse);
}

export default CourseRepository;
