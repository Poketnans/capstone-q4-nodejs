import { getRepository, Repository } from 'typeorm';
import CourseMode from '../../entities/CourseMode';
import { ModeNotFoundError } from '../../errors';
import { verifyUuidError } from '../../utils';
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
    } catch (err) {
      verifyUuidError(err.message, 'id_mode');
      throw new ModeNotFoundError();
    }
  };
}

export default CourseModeRepository;
