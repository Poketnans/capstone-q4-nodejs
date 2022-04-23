import { Router } from "express"
import getCoursesController from "../controllers/Course/usersCourseGetAll.controller"


const coursesRoutes = Router()

coursesRoutes.get("",getCoursesController)
coursesRoutes.get("/:uuid")

coursesRoutes.post("")

coursesRoutes.patch("")
coursesRoutes.delete("")

export default coursesRoutes