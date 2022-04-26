import { Router } from "express"
import { updateReviewController } from "../controllers/Review";

const reviewsRoutes = Router()

reviewsRoutes.get("")
reviewsRoutes.get("/:uuid")
reviewsRoutes.post("")
reviewsRoutes.patch("/:id", updateReviewController)
reviewsRoutes.delete("")

export default reviewsRoutes