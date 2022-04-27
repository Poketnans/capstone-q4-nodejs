import { getRepository, Repository } from 'typeorm';
import CourseReview from '../../entities/CourseReview';
import { ICourseReviewRepo, IReviewUpdate } from './interfaces';

class CourseReviewRepository implements ICourseReviewRepo {
  private ormRepository: Repository<CourseReview>;

  constructor() {
    this.ormRepository = getRepository(CourseReview);
  }

  delete = (id: string) => this.ormRepository.delete(id);

  updateReview = (id: string, updatedReview : IReviewUpdate) => this.ormRepository.update(id,updatedReview);

  findOneOrFail = (id: string, listRelations: string[] =[]) => this.ormRepository.findOneOrFail(id,{relations:listRelations})

  saveReview = (review) => this.ormRepository.save(review);

}

export default CourseReviewRepository;
