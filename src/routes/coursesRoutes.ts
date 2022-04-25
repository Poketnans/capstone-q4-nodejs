import { Router } from "express"
import { CourseGetOneControler, DeleteCourseControler } from "../controllers/courses";

const coursesRoutes = Router()

coursesRoutes.get("")
// será adicionado o middleware de auth
coursesRoutes.get("/:uuid",
  CourseGetOneControler
)

coursesRoutes.post("")

coursesRoutes.patch("")
coursesRoutes.delete("/:uuid", 
// será adicionado o middleware de auth
  DeleteCourseControler
)

export default coursesRoutes