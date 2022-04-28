import { Request} from "express";
import { ErrorHandler } from "../../errors";
import { CourseRepository } from "../../repositories";

const DeleteCourseServices = async ( req: Request ) => {
  try {
    const { uuid } = req.params;
    
    const courseRepoObject = new CourseRepository();
    await courseRepoObject.getOneOrFail(uuid)
    await courseRepoObject.deleteOneCourse(uuid)
  } catch (e) {
    throw new ErrorHandler(400,`${e.message}`);
        
  }
}
export default DeleteCourseServices;