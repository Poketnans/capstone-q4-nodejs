import { Router } from "express"
import { getOneProjectController } from "../controllers/projects"

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid", getOneProjectController)
projectsRoutes.post("")
projectsRoutes.patch("")
projectsRoutes.delete("")

export default projectsRoutes