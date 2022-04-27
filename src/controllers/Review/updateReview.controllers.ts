import { Request, Response } from "express";
import { handleError } from "../../errors";
import {updateReviewService } from "../../services/Review";

const updateReviewController = async ( req: Request, res: Response) => {
  try {

    const updatedReview = await updateReviewService(req);
    return res.status(200).json(updatedReview);

  } catch (e) {

    return handleError(e,res);
        
  }
}
export default updateReviewController;