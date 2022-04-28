import { UpdateResult,DeleteResult } from "typeorm";
import Course from "../../entities/Course";
import CourseReview from "../../entities/CourseReview";
import User from "../../entities/User";

export interface IReviewUpdate{
    comment?: string;
    rating?: number;
    hash_user_course?: string;
    course?: Course;
    user?: User
}

export interface ICourseReviewRepo {
    updateReview : (id: string, updatedReview: IReviewUpdate) => Promise<UpdateResult>;
    findOneOrFail : (id: string,listRelations: string[]) => Promise<CourseReview>;
    delete : (id: string) => Promise<DeleteResult>
}
