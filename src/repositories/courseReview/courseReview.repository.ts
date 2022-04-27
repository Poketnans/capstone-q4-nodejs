import { getRepository, Repository } from 'typeorm';
import CourseReview from '../../entities/CourseReview';
import { ICourseReviewRepo } from './interfaces';

class CourseReviewRepository implements ICourseReviewRepo {
  private ormRepository: Repository<CourseReview>;

  constructor() {
    this.ormRepository = getRepository(CourseReview);
  }
  
  findOneOrFail = (id: string) => this.ormRepository.findOneOrFail(id);

  delete = (id: string) => this.ormRepository.delete(id);

  saveReview = (review) => this.ormRepository.save(review);

}

export default CourseReviewRepository;
