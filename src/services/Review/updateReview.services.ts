import { Request } from "express";
import { ErrorHandler } from "../../errors";
import { CourseReviewRepository } from "../../repositories";

const updateReviewService = async (req: Request) => {
  try {

    const { id } = req.params;
    const objectCourseReview = new CourseReviewRepository();
    await objectCourseReview.updateReview(id,req.validated);
    return await objectCourseReview.findOneOrFail(id);
        
  } catch (e) {

    throw new ErrorHandler(400,`${e.message}`);
    
        
  }
}
export default updateReviewService;