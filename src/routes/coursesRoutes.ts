import { Router } from "express"
<<<<<<< HEAD
import getCoursesController from "../controllers/Course/usersCourseGetAll.controller"


const coursesRoutes = Router()

coursesRoutes.get("",getCoursesController)
coursesRoutes.get("/:uuid")
=======
import { CourseGetOneControler } from "../controllers/courses";

const coursesRoutes = Router()

coursesRoutes.get("")
// será adicionado o middleware de auth
coursesRoutes.get("/:uuid",
  CourseGetOneControler
)
>>>>>>> development

coursesRoutes.post("")

coursesRoutes.patch("")
coursesRoutes.delete("")

export default coursesRoutes