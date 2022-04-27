import { Router } from "express"
import { updateReviewController } from "../controllers/Review";
import { validateAuth,validateSchemaMiddleware,validateAuthReviewMiddleware } from "../middlewares";
import { userReviewUpdate } from "../schemas";

const reviewsRoutes = Router()

reviewsRoutes.get("")
reviewsRoutes.get("/:uuid")
reviewsRoutes.post("")
reviewsRoutes.patch("/:id", 
  validateAuth,
  validateAuthReviewMiddleware,
  validateSchemaMiddleware(userReviewUpdate),
  updateReviewController)
reviewsRoutes.delete("")

export default reviewsRoutes