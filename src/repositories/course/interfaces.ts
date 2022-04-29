import { DeleteResult, UpdateResult } from 'typeorm';
import Course from '../../entities/Course';
import CourseMode from '../../entities/CourseMode';
import CoursePeriod from '../../entities/CoursePeriod';
import Category from '../../entities/Category';
import User from '../../entities/User';

interface ICourse {
  id: string;
  title: string;
  address: string;
  starts_at: Date;
  ends_at: Date;
  start_time: Date;
  end_time: Date;
  created_at: Date;
  updated_at: Date;
  id_mode?: string;
  id_period?: string;
  id_category?: string;
  mode: CourseMode;
  period: CoursePeriod;
  category: Category;
  user_owner: User;
  certificate: boolean;
  reviews: [];
}

interface ICourse {
  title: string;
  address: string;
  // id_mode: string,
  // id_period: string,
  starts_at: Date;
  ends_at: Date;
  start_time: Date;
  end_time: Date;
  // id_category: string,
  certificate: boolean;
}
interface ICourseFindOne {
  id: string;
}

interface ICourseUpdate {
  title?: string;
  address?: string;
  id_mode?: string;
  id_period?: string;
  starts_at?: Date;
  ends_at?: Date;
  start_time?: Date;
  end_time?: Date;
  id_category?: string;
  certificate?: boolean;
}

interface ICourseRepo {
  saveCourse: (course: Course) => Promise<Course>;

  deleteOneCourse: (id: string) => Promise<any>;

  getCourses: () => Promise<Course[]>;
  getOwnCourses: (userId: string) => Promise<Course[]>;

  getOneOrFail: (id: string, listRelations: string[]) => Promise<Course>;
  update: (id: string, updatedCourse: ICourseUpdate) => Promise<UpdateResult>;
}

export { ICourseRepo, ICourseFindOne, ICourse, ICourseUpdate };
