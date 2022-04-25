import { Request } from 'express';
import Course from '../../entities/Course';
import { ErrorHandler } from '../../errors';
import CourseRepository from '../../repositories/course/course.repository';

const createCourseService = async (req: Request) => {
  try {
    const courseValidated = req.body.validated;
    const couserCreated: Course = await new CourseRepository().saveCourse(
      courseValidated
    );

    return couserCreated;
  } catch (e) {
    throw new ErrorHandler(400, e);
  }
};
export default createCourseService;
