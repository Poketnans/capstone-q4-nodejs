import { DeleteResult, UpdateResult } from "typeorm";
import { ICourseMode } from "../../repositories"
import { ICoursePeriod } from "../../repositories"
import { ICategory } from "../category/interfaces";
import { IReviews } from "../../repositories"
import { IUser } from "../user/interfaces";


interface ICourse {
  id: string;
  title: string;
  user_owner: IUser;
  address: string;
  starts_at: Date; 
  ends_at: Date;
  start_time: Date;
  end_time: Date;
  created_at: Date;
  updated_at: Date;
  mode: ICourseMode;
  period: ICoursePeriod;
  category: ICategory;
  certificate: boolean;
}

interface ICourseQuery {
  id: string;
  title: string;
  user_owner: IUser;
  address: string;
  starts_at: Date; 
  ends_at: Date;
  start_time: Date;
  end_time: Date;
  created_at: Date;
  updated_at: Date;
  mode: ICourseMode;
  period: ICoursePeriod;
  category: ICategory;
  reviews: Array<IReviews>;
  certificate: boolean;
}

interface ICourseRepo {
  saveCourse: (course: ICourse) => Promise<ICourse>;
 
}
export { ICourse, ICourseRepo, ICourseQuery };