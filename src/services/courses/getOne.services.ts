import { Request } from "express";
import { EntityNotFoundError } from "typeorm";
import { ErrorHandler } from "../../errors";
import { CourseRepository } from "../../repositories";

const CourseGetOneServices =async (req: Request) => {
  try {
    
    const { uuid } = req.params;
    const findCourse = await new CourseRepository().findOneOrFail({"id": uuid});
    return findCourse;

  } catch (e) {

    if(e instanceof EntityNotFoundError){
      throw new ErrorHandler(404, `course not found.`);

    }
    throw new ErrorHandler(400, `${e.message}`);
        
  }
}
export default CourseGetOneServices;