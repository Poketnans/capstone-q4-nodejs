import { Router } from "express"

const reviewsRoutes = Router()

reviewsRoutes.get("")
reviewsRoutes.get("/:uuid")
reviewsRoutes.post("")
reviewsRoutes.patch("")
reviewsRoutes.delete("")

export default reviewsRoutes