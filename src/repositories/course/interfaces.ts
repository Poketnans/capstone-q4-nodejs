import { UpdateResult } from 'typeorm';
import Course from '../../entities/Course';

interface ICourse {
  title?: string;
  address?: string;
  starts_at?: Date;
  ends_at?: Date;
  start_time?: Date;
  end_time?: Date;
  id_mode?: string;
  id_period?: string;
  id_category?: string;
  certificate?: boolean;
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

  deleteOneCourse: (ObjectId: ICourseFindOne) => Promise<any>;

  getCourses: () => Promise<Course[]>;

  getOneOrFail: (id: string) => Promise<Course>;
  update: (id: string, updatedCourse: ICourseUpdate) => Promise<UpdateResult>;
}

export { ICourseRepo, ICourseFindOne, ICourse, ICourseUpdate };
