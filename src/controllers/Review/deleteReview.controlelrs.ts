import { Request, Response } from "express";
import { handleError } from "../../errors";
import { deleteReviewService } from "../../services/Review";

const deleteReviewController = async (req: Request, res: Response) => {
  try {
        
    await deleteReviewService(req);
    return res.status(204).json("");

  } catch (e) {
    return handleError(e,res)
  }
}
export default deleteReviewController;