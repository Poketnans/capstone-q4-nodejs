import { getRepository, Repository } from 'typeorm';
import CourseReview from '../../entities/CourseReview';
import { ICourseReviewRepo, IReview, IReviewUpdate } from './interfaces';
import { CourseReviewAlreadyRegisteredError } from '../../errors';
import ReviewNotFoundError from '../../errors/reviewNotFound.error';
import { verifyUuidError } from '../../utils';

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

  delete = async (id: string) => {
    try {
      return await this.ormRepository.delete(id);
    } catch (err) {
      verifyUuidError(err.message, 'url id_review');
      throw new ReviewNotFoundError();
    }
  };

  updateReview = (id: string, updatedReview: IReviewUpdate) =>
    this.ormRepository.update(id, updatedReview);

  findOneOrFail = async (id: string, listRelations: string[] = []) => {
    try {
      return await this.ormRepository.findOneOrFail(id, {
        relations: listRelations,
      });
    } catch (err) {
      verifyUuidError(err.message, 'url id_review');
      throw new ReviewNotFoundError();
    }
  };

  getReviews = (userId: string) =>
    this.ormRepository.find({ where: { user: { id: userId } } });
}

export default CourseReviewRepository;
