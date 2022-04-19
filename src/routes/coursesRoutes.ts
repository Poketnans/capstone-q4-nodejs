import { Router } from "express"

const coursesRoutes = Router()

coursesRoutes.get("")
coursesRoutes.get("/:uuid")
coursesRoutes.post("")
coursesRoutes.patch("")
coursesRoutes.delete("")

export default coursesRoutes