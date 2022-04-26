import { Router } from "express"
import { getOneProjectController } from "../controllers/projects"
import { validateAuth } from "../middlewares";

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid", validateAuth, getOneProjectController)
projectsRoutes.post("")
projectsRoutes.patch("")
projectsRoutes.delete("")

export default projectsRoutes
