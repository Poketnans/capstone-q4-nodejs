import { Router } from "express";
import { projectsGetAllController } from "../controllers/projects";

const projectsRoutes = Router()

projectsRoutes.get("", projectsGetAllController)
projectsRoutes.get("/:uuid")
projectsRoutes.post("")
projectsRoutes.patch("")
projectsRoutes.delete("")

export default projectsRoutes