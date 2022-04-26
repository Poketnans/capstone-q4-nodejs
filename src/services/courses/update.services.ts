import { ErrorHandler } from "../../errors";

const updateCourseService =async () => {
    try {
        return course = 
    } catch (e) {
        throw new ErrorHandler(400,`${ e.message }`);
        
    }
}
export default updateCourseService;