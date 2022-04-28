import { getRepository, Repository } from 'typeorm';
import CourseMode from '../../entities/CourseMode';
import { ModeNotFoundError, UuidMalformedError } from '../../errors';
import { ICourseModeRepo } from './interfaces';

class CourseModeRepository implements ICourseModeRepo {
  private ormRepository: Repository<CourseMode>;

  constructor() {
    this.ormRepository = getRepository(CourseMode);
  }

  getCourseModes = () => this.ormRepository.find();

  getOneMode = async (id: string) => {
    try {
      return await this.ormRepository.findOneOrFail(id);
    } catch (error) {
      if (
        (error.message as string).includes('invalid input syntax for type uuid')
      ) {
        throw new UuidMalformedError('id_mode');
      } else {
        throw new ModeNotFoundError();
      }
    }
  };
}

export default CourseModeRepository;
