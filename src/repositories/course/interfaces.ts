import { UpdateResult } from 'typeorm';
import Course from '../../entities/Course';

interface ICourseFindOne {
  id: string;
}

export interface ICourseUpdate{
  title?:string,
  address?: string,
  id_mode?: string,
  id_period?: string,
  starts_at?: Date,
  ends_at?: Date,
  start_time?: Date,
  end_time?: Date,
  id_category?: string,
  certificate?: boolean
}

export interface ICourse{
  title:string,
  address: string,
  // id_mode: string,
  // id_period: string,
  starts_at: Date,
  ends_at: Date,
  start_time: Date,
  end_time: Date,
  // id_category: string,
  certificate: boolean
}

interface ICourseRepo {
  getCourses: () => Promise<Course[]>;

  findOneOrFail: (id: string) => Promise<Course>;
  update : (id: string, updatedCourse : ICourseUpdate)=> Promise<UpdateResult>
}
export { ICourseRepo, ICourseFindOne };
