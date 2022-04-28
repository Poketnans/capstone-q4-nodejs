import { getRepository, Repository } from 'typeorm';
import CourseReview from '../../entities/CourseReview';
import { ICourseReviewRepo, IReview, IReviewUpdate } from './interfaces';
import { CourseReviewAlreadyRegisteredError } from '../../errors';

class CourseReviewRepository implements ICourseReviewRepo {
  private ormRepository: Repository<CourseReview>;

  constructor() {
    this.ormRepository = getRepository(CourseReview);
  }

  saveReview = async (courseReview: IReview) => {
    try {
      return await this.ormRepository.save(courseReview);
    } catch (err) {
      throw new CourseReviewAlreadyRegisteredError();
    }
  };

  delete = (id: string) => this.ormRepository.delete(id);

  updateReview = (id: string, updatedReview: IReviewUpdate) =>
    this.ormRepository.update(id, updatedReview);

  findOneOrFail = (id: string, listRelations: string[] = []) =>
    this.ormRepository.findOneOrFail(id, { relations: listRelations });
}

export default CourseReviewRepository;
