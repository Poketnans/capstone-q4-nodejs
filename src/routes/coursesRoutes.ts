import { Router } from "express"
import { CourseGetOneControler } from "../controllers/courses";

const coursesRoutes = Router()

coursesRoutes.get("")
// será adicionado o middleware de auth
coursesRoutes.get("/:uuid",
  CourseGetOneControler
)

coursesRoutes.post("")

coursesRoutes.patch("")
coursesRoutes.delete("")

export default coursesRoutes