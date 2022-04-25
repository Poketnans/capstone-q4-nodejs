import { CourseRepository } from '../../repositories';
import Course from '../../entities/Course';
import { ErrorHandler } from '../../errors';

const getCoursesService = async () => {
  try {
    const courses: Course[] = await new CourseRepository().getCourses();

    return courses;
  } catch (err: any) {
    throw new ErrorHandler(400, err.message);
  }
};
export default getCoursesService;
