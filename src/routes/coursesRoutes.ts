import { CourseGetOneControler, DeleteCourseControler } from "../controllers/courses";
import { Router } from 'express';
import getCoursesController from '../controllers/Course/usersCourseGetAll.controller';

const coursesRoutes = Router();

coursesRoutes.get('', getCoursesController);
// será adicionado o middleware de auth
coursesRoutes.get('/:uuid', CourseGetOneControler);

coursesRoutes.post('');

coursesRoutes.delete("/:uuid", 
// será adicionado o middleware de auth
  DeleteCourseControler
);
                     
coursesRoutes.patch('');

export default coursesRoutes;
