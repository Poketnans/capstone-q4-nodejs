import { Router } from "express"
import { updateProjectController } from "../controllers/projects"

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid")
projectsRoutes.post("")
projectsRoutes.patch("", updateProjectController)
projectsRoutes.delete("")

export default projectsRoutes