import { Router } from "express";
import { createProjecController } from "../controllers/projects";
import { validateAuth, validateSchemaMiddleware } from "../middlewares";
import { createProjectSchema } from "../schemas";

const projectsRoutes = Router();

projectsRoutes.get("");
projectsRoutes.get("/:uuid");
projectsRoutes.post(
  "",
  validateAuth,
  validateSchemaMiddleware(createProjectSchema),
  createProjecController
);
projectsRoutes.patch("");
projectsRoutes.delete("");

export default projectsRoutes;
