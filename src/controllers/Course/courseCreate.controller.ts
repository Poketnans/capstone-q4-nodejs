import { Request ,Response } from "express";
import  createCourseService  from "../../services/Course/createCourseService";

const createUserController = async (req: Request, res: Response) =>{
    const { status, body } = await createCourseService(req);
     
    res.status(status).json(body);    
};
export default createUserController;