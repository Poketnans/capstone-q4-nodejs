import { Router } from 'express';
import updateProjectSchema from '../schemas/update.project.schema';
import {
  createProjecController,
  getOneProjectController,
  updateProjectController
} from '../controllers/projects';
import { createProjectSchema } from '../schemas';
import {
  validateAuth,
  projectPermissionMiddleware,
  validateSchemaMiddleware,
} from '../middlewares';

const projectsRoutes = Router();

projectsRoutes.get('');
projectsRoutes.get('/:uuid', validateAuth, getOneProjectController);
projectsRoutes.post(
  '',
  validateAuth,
  validateSchemaMiddleware(createProjectSchema),
  createProjecController
);
projectsRoutes.patch('/:uuid', validateAuth, validateSchemaMiddleware(updateProjectSchema), projectPermissionMiddleware, updateProjectController);
projectsRoutes.delete('/:uuid', validateAuth, projectPermissionMiddleware);

export default projectsRoutes;
