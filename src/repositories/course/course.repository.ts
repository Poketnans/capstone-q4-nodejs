import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourseRepo, ICourseUpdate } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }
  
  deleteOneCourse = (ObjectId: ICourseFindOne) => this.ormRepository.delete(ObjectId);
  
  getCourses = () => this.ormRepository.find();

  getOneOrFail = (id: string) => this.ormRepository.findOneOrFail(id);

  update = (id: string, updatedCourse: ICourseUpdate ) => this.ormRepository.update(id, updatedCourse);

}

export default CourseRepository;
