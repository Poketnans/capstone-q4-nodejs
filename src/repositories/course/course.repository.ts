import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourseFindOne, ICourseRepo, ICourseUpdate } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  getCourses = () => this.ormRepository.find();

  findOneOrFail = (objectId: ICourseFindOne) => this.ormRepository.findOneOrFail({...objectId});

  update = (id: string, updatedCourse: ICourseUpdate ) => this.ormRepository.update({id}, updatedCourse)
}

export default CourseRepository;
