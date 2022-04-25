import Course from "../../entities/Course";


interface ICourseRepo {
 
  getCourses: () => Promise<Course[]>;
 
}
export { ICourseRepo };