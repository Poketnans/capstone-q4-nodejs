import { Router } from 'express';
import {
  CourseGetOneControler,
  DeleteCourseControler,
} from '../controllers/courses';
import createCourseController from '../controllers/Course/courseCreate.controller';
import { validateSchemaMiddleware } from '../middlewares';
import courseSchema from '../schemas/courseCreate.schema';
import getCoursesController from '../controllers/Course/usersCourseGetAll.controller';

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth
coursesRoutes.get('/:uuid', CourseGetOneControler);
coursesRoutes.post(
  '',
  validateSchemaMiddleware(courseSchema),
  createCourseController
);

coursesRoutes.delete(
  '/:uuid',
  // será adicionado o middleware de auth
  DeleteCourseControler
);

coursesRoutes.patch('');

export default coursesRoutes;
