import { Request } from "express";
import { EntityColumnNotFound, QueryFailedError } from "typeorm";
import { ErrorHandler } from "../../errors";
import { CourseRepository } from "../../repositories";

const updateCourseService = async (req: Request) => {
  const { uuid:id } = req.params;
  try {
    const objectCourseRepo = new CourseRepository();
    const updatedCourse = req.validated;
   

    await objectCourseRepo.getOneOrFail(id);
    await objectCourseRepo.update(id,updatedCourse);

  } catch (e) {

    
    if( e instanceof QueryFailedError){
      
      if(e.message.includes(id)){  
        throw new ErrorHandler(404,`course not found`);
        
      }
      throw new ErrorHandler(400,`${e.message}`);

    }

    if( e instanceof EntityColumnNotFound ){

      throw new ErrorHandler(404,`${ e.message.split('"')[1].replace("id_","")} not found`);

    }
    throw new ErrorHandler(400,`${ e.message }`);
        
  }
}
export default updateCourseService;