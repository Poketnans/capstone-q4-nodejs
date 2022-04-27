import { Router } from 'express';
import getCoursesController from '../controllers/Course/usersCourseGetAll.controller';
import { CourseGetOneControler, updateCourseController } from '../controllers/courses';
import { validateSchemaMiddleware, validateAuth } from "../middlewares";
import { courseUpdateSchema } from "../schemas";

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth
coursesRoutes.get('/:id', CourseGetOneControler);

coursesRoutes.post('');

coursesRoutes.patch('/:id', 
  validateAuth,
  validateSchemaMiddleware(courseUpdateSchema),
  updateCourseController);

coursesRoutes.delete('');

export default coursesRoutes;
