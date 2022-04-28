import { Router } from 'express';
import courseSchema from '../schemas/courseCreate.schema';

import {
  CourseGetOneControler,
  DeleteCourseControler,
  updateCourseController,
  getCoursesController,
  createCourseController,
} from '../controllers/courses';

import { validateSchemaMiddleware, validateAuth } from '../middlewares';
import { courseUpdateSchema } from '../schemas';

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth

coursesRoutes.get('/:id', CourseGetOneControler);

coursesRoutes.post(
  '',
  validateAuth,
  validateSchemaMiddleware(courseSchema),
  createCourseController
);

coursesRoutes.patch(
  '/:id',
  validateAuth,
  validateSchemaMiddleware(courseUpdateSchema),
  updateCourseController
);

coursesRoutes.delete(
  '/:uuid',
  // será adicionado o middleware de auth
  DeleteCourseControler
);

export default coursesRoutes;
