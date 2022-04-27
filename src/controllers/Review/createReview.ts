import { Request, Response } from 'express';
import httpStatus from 'http-status';
import CourseReviewRepository from '../../repositories/courseReview/courseReview.repository';
import { handleError } from '../../errors';

const createReviewController = async ( req: Request, res: Response ) => {
  try {
    const review = await new CourseReviewRepository().saveReview(req.validated); 
    return res.status(httpStatus.CREATED).json(review)
  } catch (e: unknown ) {
    return handleError(e,res);
  }
} 

export default createReviewController;
