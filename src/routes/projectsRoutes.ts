import { Router } from "express";
import { createProjecController } from "../controllers/projects";
import { createProjectSchema } from "../schemas";
import { Router } from "express"
import { validateAuth, projectPermissionMiddleware, validateSchemaMiddleware } from "../middlewares"

const projectsRoutes = Router();

projectsRoutes.get("");
projectsRoutes.get("/:uuid");
projectsRoutes.post(
  "",
  validateAuth,
  validateSchemaMiddleware(createProjectSchema),
  createProjecController
);
projectsRoutes.patch("/:uuid", validateAuth, projectPermissionMiddleware)
projectsRoutes.delete("/:uuid", validateAuth, projectPermissionMiddleware)

export default projectsRoutes;
