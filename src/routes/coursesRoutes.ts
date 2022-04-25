import { Router } from 'express';
import createCourseController from '../controllers/Course/courseCreate.controller';
import { validateSchemaMiddleware } from '../middlewares';
import courseSchema from '../schemas/courseCreate.schema';

const coursesRoutes = Router();

coursesRoutes.get('');
coursesRoutes.get('/:uuid');

coursesRoutes.post(
  '',
  validateSchemaMiddleware(courseSchema),
  createCourseController
);

coursesRoutes.patch('');
coursesRoutes.delete('');

export default coursesRoutes;
