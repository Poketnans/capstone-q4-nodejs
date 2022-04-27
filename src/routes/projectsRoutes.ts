import { Router } from "express"
import { validateAuth, projectPermissionMiddleware } from "../middlewares"

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid")
projectsRoutes.post("")
projectsRoutes.patch("/:uuid", validateAuth, projectPermissionMiddleware)
projectsRoutes.delete("/:uuid", validateAuth, projectPermissionMiddleware)

export default projectsRoutes