import Course from '../../entities/Course';
import { ICourse } from '../../repositories/course/interfaces';
import CourseRepository from '../../repositories/course/course.repository';
import {
  CategoryRepository,
  CourseModeRepository,
  CoursePeriodRepository,
  UserRepository,
} from '../../repositories';

const createCourseService = async (id: string, reqValidated: ICourse) => {
  const courseValidated: ICourse = reqValidated;

  const courseOwner = await new UserRepository().getOneUser(id);
  const category = await new CategoryRepository().getCategory(
    reqValidated.id_category
  );
  const mode = await new CourseModeRepository().getOneMode(
    reqValidated.id_mode
  );
  const period = await new CoursePeriodRepository().getOnePeriod(
    reqValidated.id_period
  );

  courseValidated.user_owner = courseOwner;
  courseValidated.category = category;
  courseValidated.mode = mode;
  courseValidated.period = period;

  delete courseValidated.user_owner.password;

  const courseCreated: Course = await new CourseRepository().saveCourse(
    courseValidated
  );

  return courseCreated;
};
export default createCourseService;
