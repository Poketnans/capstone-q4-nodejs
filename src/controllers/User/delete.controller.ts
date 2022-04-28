import { Request, Response } from 'express';
import { handleError } from '../../errors';
import { UserRepository } from '../../repositories';

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { user } = req;

    const findUser = await new UserRepository().getOneUser(user.id);

    if (!findUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    await new UserRepository().deleteUser(user.id);
    return res.status(204).json("");
  } catch (error) {
    return handleError(error, res);
  }
};

export default deleteUserController;
