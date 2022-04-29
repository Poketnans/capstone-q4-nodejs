import { Request, Response } from 'express';
import { handleError } from '../../errors';
import { UserRepository } from '../../repositories';

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { user } = req;
    await new UserRepository().deleteUser(user.id);
    return res.status(204).json('');
  } catch (error) {
    return handleError(error, res);
  }
};

export default deleteUserController;
