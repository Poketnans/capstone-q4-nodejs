import { Router } from "express"
import { updateProjectController } from "../controllers/projects"
import { validateSchemaMiddleware } from "../middlewares"
import updateProjectSchema from "../schemas/update.project.schema"

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid")
projectsRoutes.post("")
projectsRoutes.patch("/:uuid", validateSchemaMiddleware(updateProjectSchema), updateProjectController)
projectsRoutes.delete("")

export default projectsRoutes