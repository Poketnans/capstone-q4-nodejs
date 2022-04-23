import  getCoursesService  from "../../services/User/getUsersService";
import { Response, Request } from "express";

const getCoursesController = async (_: Request, res: Response) => {
  const { status, body } = await getCoursesService();
  return res.status(status).json(body);
};
export default getCoursesController;