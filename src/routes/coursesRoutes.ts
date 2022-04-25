import { Router } from 'express';
import createCourseController from '../controllers/Course/courseCreate.controller';
import { validateSchemaMiddleware } from '../middlewares';
import courseSchema from '../schemas/courseCreate.schema';
import getCoursesController from '../controllers/Course/usersCourseGetAll.controller';
import { CourseGetOneControler } from '../controllers/courses';

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth
coursesRoutes.get('/:uuid', CourseGetOneControler);
coursesRoutes.post(
  '',
  validateSchemaMiddleware(courseSchema),
  createCourseController
);

coursesRoutes.patch('');
coursesRoutes.delete('');

export default coursesRoutes;
