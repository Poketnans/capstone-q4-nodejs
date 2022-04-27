import { Router } from 'express'
import { reviewSchema } from '../schemas';
import { validateAuth, validateSchemaMiddleware } from '../middlewares';
import createReviewController from '../controllers/Review/createReview';

const reviewsRoutes = Router()

reviewsRoutes.get("")
reviewsRoutes.get("/:uuid")
reviewsRoutes.post("", validateAuth, validateSchemaMiddleware(reviewSchema), createReviewController)
reviewsRoutes.patch("")
reviewsRoutes.delete("")

export default reviewsRoutes