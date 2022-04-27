import { Router } from "express"
import { getOneProjectController } from "../controllers/projects"
import { validateAuth, projectPermissionMiddleware } from "../middlewares"

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid", validateAuth, getOneProjectController)
projectsRoutes.post("")
projectsRoutes.patch("/:uuid", validateAuth, projectPermissionMiddleware)
projectsRoutes.delete("/:uuid", validateAuth, projectPermissionMiddleware)

export default projectsRoutes
