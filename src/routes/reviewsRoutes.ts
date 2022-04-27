import { Router } from "express"
import { updateReviewController, deleteReviewController } from "../controllers/Review";
import { validateAuth,validateSchemaMiddleware,validatePermissionReviewMiddleware } from "../middlewares";
import { userReviewUpdate, reviewSchema } from "../schemas";


import createReviewController from '../controllers/Review/createReview';

const reviewsRoutes = Router()

reviewsRoutes.get("")

reviewsRoutes.get("/:uuid")

reviewsRoutes.post("", validateAuth, validateSchemaMiddleware(reviewSchema), createReviewController)

reviewsRoutes.patch("/:id", 
  validateAuth,
  validatePermissionReviewMiddleware,
  validateSchemaMiddleware(userReviewUpdate),
  updateReviewController)

reviewsRoutes.delete("/:id", 
  validateAuth,
  validatePermissionReviewMiddleware,
  deleteReviewController);

export default reviewsRoutes