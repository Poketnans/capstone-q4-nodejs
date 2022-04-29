import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { QueryFailedError } from 'typeorm';
import CourseReviewRepository from '../../repositories/courseReview/courseReview.repository';
import { ErrorHandler, handleError } from '../../errors';
import { CourseRepository, UserRepository } from '../../repositories';

const createReviewController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const { comment, rating } = req.validated;

    const course = await new CourseRepository().getOneOrFail(
      req.validated.id_course
    );
    const user = await new UserRepository().getOneUser(id);
    const hash = `${course.id}${user.id}`;

    const object = {
      course,
      comment,
      rating,
      user,
      hash_user_course: hash,
    };

    const review = await new CourseReviewRepository().saveReview(object);

    delete review.user;
    delete review.course;
    delete review.hash_user_course;

    review.user_id = user.id;
    review.course_id = course.id;

    return res.status(httpStatus.CREATED).json(review);
  } catch (e: unknown) {
    if (e instanceof QueryFailedError) {
      if (e.driverError.detail) {
        if (e.driverError.detail.includes('exists')) {
          return handleError(new ErrorHandler(409, e.driverError.detail), res);
        }
      }
      return handleError(new ErrorHandler(404, e.message), res);
    }
    return handleError(e, res);
  }
};

export default createReviewController;
