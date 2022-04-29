import { Request } from 'express';
import { CourseReviewRepository } from '../../repositories';

const deleteReviewService = async (req: Request) => {
  const { id } = req.params;
  const objectReview = new CourseReviewRepository();
  await objectReview.delete(id);
};
export default deleteReviewService;
