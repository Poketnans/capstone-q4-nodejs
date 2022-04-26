import { DeleteResult } from "typeorm";
import CourseReview from "../../entities/CourseReview";

export interface ICourseReviewRepo {

    findOneOrFail : (id: string) => Promise<CourseReview>;
    delete : (id: string) => Promise<DeleteResult>
}
