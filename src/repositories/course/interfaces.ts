import { IUser } from '../user/interfaces';
import Course from '../../entities/Course';
import CourseMode from '../../entities/CourseMode';
import CoursePeriod from '../../entities/CoursePeriod';
import Category from '../../entities/Category';

interface ICourseQuery {
  title?: string;
  user_owner: IUser;
  address?: string;
  starts_at?: Date;
  ends_at?: Date;
  start_time?: Date;
  end_time?: Date;
  mode?: CourseMode;
  period?: CoursePeriod;
  category?: Category;
  certificate?: boolean;
}

interface ICourseFindOne {
  id: string;
}

interface ICourseRepo {
  saveCourse: (course: Course) => Promise<Course>;

  deleteOneCourse: (ObjectId: ICourseFindOne) => Promise<any>;

  getCourses: () => Promise<Course[]>;

  findOneOrFail: (id: ICourseFindOne) => Promise<Course>;
}

export { ICourseRepo, ICourseFindOne, ICourseQuery };
