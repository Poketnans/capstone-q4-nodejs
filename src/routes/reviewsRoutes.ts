
import { Router } from "express"
import { deleteReviewController } from "../controllers/Review";
import createReviewController from '../controllers/Review/createReview';
import { reviewSchema } from '../schemas';
import { validateAuth, validateSchemaMiddleware } from '../middlewares';

const reviewsRoutes = Router()

reviewsRoutes.get("")
reviewsRoutes.get("/:uuid")
reviewsRoutes.post("", validateAuth, validateSchemaMiddleware(reviewSchema), createReviewController)
reviewsRoutes.patch("")
reviewsRoutes.delete("/:id", deleteReviewController);

export default reviewsRoutes