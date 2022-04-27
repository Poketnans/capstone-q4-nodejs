import { Request } from "express";
import { ErrorHandler } from "../../errors";
import { CourseReviewRepository } from "../../repositories";

const deleteReviewService = async (req: Request) => {
  try {
        
    const { id } = req.params;
    const objectReview = new CourseReviewRepository();
    await objectReview.findOneOrFail(id);
    await objectReview.delete(id);

  } catch (e) {
    throw new ErrorHandler(400,`${e.message}`);
       
  }
}
export default deleteReviewService;