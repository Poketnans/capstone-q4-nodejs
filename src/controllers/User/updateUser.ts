import { Request, Response } from 'express';
import updateUserService from '../../services/users/update.user.service';

const updateUser = async (req: Request, res: Response) => {
  const { body, user } = req; // userId ou qualquer coisa que identifique o usuário, aguardando middleware que o faça ou eu mesmo faço

  updateUserService(body, user);

  return res.json();
};
export default updateUser;
