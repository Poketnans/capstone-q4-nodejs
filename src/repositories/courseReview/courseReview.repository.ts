import { getRepository, Repository } from 'typeorm';
import CourseReview from '../../entities/CourseReview';
import { ICourseReviewRepo, IReviewUpdate } from './interfaces';

class CourseReviewRepository implements ICourseReviewRepo {
  private ormRepository: Repository<CourseReview>;

  constructor() {
    this.ormRepository = getRepository(CourseReview);
  }

  updateReview = (id: string, updatedReview : IReviewUpdate) => this.ormRepository.update(id,updatedReview);

  findOneOrFail = (id: string) => this.ormRepository.findOneOrFail(id);

}

export default CourseReviewRepository;
