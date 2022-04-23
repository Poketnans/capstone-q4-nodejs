import { DeleteResult, UpdateResult } from "typeorm";
import { ICourseMode } from "../../repositories"
import { ICoursePeriod } from "../../repositories"
import { ICategory } from "../category/interfaces";
import { IReviews } from "../../repositories"

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
}

interface ICourseQuery {
  id: string;
  title: string;
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
  reviews: Array<IReviews>
}

interface ICourseRepo {
 
  getCourses: () => Promise<ICourse[]>;
 
}
export { ICourse, ICourseRepo, ICourseQuery };