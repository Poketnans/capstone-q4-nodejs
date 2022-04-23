import { ICourse } from "../../repositories/course/interfaces";
import { CourseRepository } from "../../repositories";

const getCoursesService = async () => {
  try {
    const courses: ICourse[] = await new CourseRepository().getCourses();
  
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