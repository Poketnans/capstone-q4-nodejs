import { Router } from 'express';
import getCoursesController from '../controllers/Course/usersCourseGetAll.controller';
import { CourseGetOneControler } from '../controllers/courses';

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth
coursesRoutes.get('/:uuid', CourseGetOneControler);

coursesRoutes.post('');

coursesRoutes.patch('');
coursesRoutes.delete('');

export default coursesRoutes;
