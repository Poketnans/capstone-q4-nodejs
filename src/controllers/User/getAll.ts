import { Response, Request } from 'express';
import getUsersService from '../../services/users/getUsersService';

const getUsersController = async (_: Request, res: Response) => {
  const { status, body } = await getUsersService();
  return res.status(status).json(body);
};
export default getUsersController;
