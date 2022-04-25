import { Request, Response } from 'express';
import updateUserService from '../../services/users/update.user.service';

const updateUser = async (req: Request, res: Response) => {
  const { user, validated } = req; // user vindo do middleware de autenticação do token
  updateUserService(validated, user.id);

  return res.status(204).json();
};
export default updateUser;
