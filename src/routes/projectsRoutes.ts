import { Router } from "express"

const projectsRoutes = Router()

projectsRoutes.get("")
projectsRoutes.get("/:uuid")
projectsRoutes.post("")
projectsRoutes.patch("")
projectsRoutes.delete("")

export default projectsRoutes