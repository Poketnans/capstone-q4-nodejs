import { Router } from 'express';
import { updateProjectController } from '../controllers/projects';
import updateProjectSchema from '../schemas/update.project.schema';
import {
  validateAuth,
  projectPermissionMiddleware,
  validateSchemaMiddleware,
} from '../middlewares';

const projectsRoutes = Router();

projectsRoutes.get('');
projectsRoutes.get('/:uuid');
projectsRoutes.post('');
projectsRoutes.patch(
  '/:uuid',
  validateSchemaMiddleware(updateProjectSchema),
  updateProjectController
);
projectsRoutes.delete('');
projectsRoutes.patch('/:uuid', validateAuth, projectPermissionMiddleware, updateProjectController);
projectsRoutes.delete('/:uuid', validateAuth, projectPermissionMiddleware);

export default projectsRoutes;
