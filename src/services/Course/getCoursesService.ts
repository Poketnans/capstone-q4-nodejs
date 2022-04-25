import { CourseRepository } from "../../repositories";
import Course from "../../entities/Course";

const getCoursesService = async () => {
  try {
    const courses: Course[] = await new CourseRepository().getCourses();
  
    return {
      status: 200,
      body: courses,
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getCoursesService;