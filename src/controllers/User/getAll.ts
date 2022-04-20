import  getUsersService  from "../../services/User/getUsersService";
import { Response, Request } from "express";

const getUsersController = async (_: Request, res: Response) => {
  const { status, body } = await getUsersService();
  return res.status(status).json(body);
};
export default getUsersController;
