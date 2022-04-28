import { QueryFailedError } from 'typeorm';
import httpStatus from 'http-status';
import Course from '../../entities/Course';
import { ICourse } from '../../repositories/course/interfaces';
import { ErrorHandler } from '../../errors';
import CourseRepository from '../../repositories/course/course.repository';
import {
  CategoryRepository,
  CourseModeRepository,
  CoursePeriodRepository,
  UserRepository,
} from '../../repositories';

const createCourseService = async (id: string, reqValidated: ICourse) => {
  try {
    console.log(id);
    const courseValidated: ICourse = reqValidated;

    const courseOwner = await new UserRepository().getOneUser(id);
    const category = await new CategoryRepository().getCategory(
      reqValidated.id_category
    );
    const mode = await new CourseModeRepository().getOneMode(
      reqValidated.id_mode
    );
    const period = await new CoursePeriodRepository().getOneMode(
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
  } catch (e: any) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(httpStatus.CONFLICT, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(httpStatus.BAD_REQUEST, `${e.message}`);
  }
};
export default createCourseService;
