import { Router } from "express"
import { deleteReviewController } from "../controllers/Review"

const reviewsRoutes = Router()

reviewsRoutes.get("")
reviewsRoutes.get("/:uuid")
reviewsRoutes.post("")
reviewsRoutes.patch("")
reviewsRoutes.delete("/:id", deleteReviewController);

export default reviewsRoutes