import Course from '../../entities/Course';
import { ErrorHandler } from '../../errors';
import CourseRepository from '../../repositories/course/course.repository';

const createCourseService = async (reqValidated: Course) => {
  try {
    const courseValidated = reqValidated;
    const couserCreated: Course = await new CourseRepository().saveCourse(
      courseValidated
    );

    return couserCreated;
  } catch (err: any) {
    throw new ErrorHandler(400, err.message);
  }
};
export default createCourseService;
