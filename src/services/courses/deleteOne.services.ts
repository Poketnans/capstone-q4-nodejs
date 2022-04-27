import { Request} from "express";
import { ErrorHandler } from "../../errors";
import { CourseRepository } from "../../repositories";

const DeleteCourseServices = async ( req: Request ) => {
  try {
    const { uuid } = req.params;
    const objectFindId = {"id": uuid};
    const courseRepoObject = new CourseRepository();
    await courseRepoObject.findOneOrFail(objectFindId)
    await courseRepoObject.deleteOneCourse(objectFindId)
  } catch (e) {
    throw new ErrorHandler(400,`${e.message}`);
        
  }
}
export default DeleteCourseServices;