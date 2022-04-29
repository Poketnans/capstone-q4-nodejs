import { Router } from 'express';
import courseSchema from '../schemas/courseCreate.schema';

import {
  CourseGetOneControler,
  DeleteCourseControler,
  updateCourseController,
  getCoursesController,
  createCourseController,
} from '../controllers/courses';

import { validateSchemaMiddleware, validateAuth, courseOwnerVerifyer } from '../middlewares';
import { courseUpdateSchema } from '../schemas';

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth

coursesRoutes.get('/:uuid', CourseGetOneControler);

coursesRoutes.post(
  '',
  validateAuth,
  validateSchemaMiddleware(courseSchema),
  createCourseController
);

coursesRoutes.patch(
  '/:uuid',
  validateAuth,
  courseOwnerVerifyer,
  validateSchemaMiddleware(courseUpdateSchema),
  updateCourseController
);

coursesRoutes.delete(
  '/:uuid',
  validateAuth,
  courseOwnerVerifyer,
  DeleteCourseControler
);

export default coursesRoutes;
