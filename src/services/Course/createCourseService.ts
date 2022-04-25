import { Request } from "express";

import CourseRepository from "../../repositories/course/course.repository";
import { ICourse }  from "../../repositories/course/interfaces"

const createCourseService = async (req: Request) =>{
    try {
        const courseValidated = req.body.validated;
        const couserCreated: ICourse = await new CourseRepository().saveCourse(courseValidated)
        
        return {
            status: 201,
            body: couserCreated
        }
        
    } catch (e) {
        return {
            status:400,
            body: {
                "error": "missing fields",
              } 
        }
    }
};
export default createCourseService;