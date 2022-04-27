import { Request } from "express";
import { ErrorHandler } from "../../errors";
import { CourseRepository } from "../../repositories";

const updateCourseService = async (req: Request) => {
  try {
    
    const { id } = req.params;
    const objectCourseRepo = new CourseRepository();
    const updatedCourse = req.validated;
   

    await objectCourseRepo.update(id,updatedCourse);
    return await objectCourseRepo.findOneOrFail(id);

  } catch (e) {
    throw new ErrorHandler(400,`${ e.message }`);
        
  }
}
export default updateCourseService;