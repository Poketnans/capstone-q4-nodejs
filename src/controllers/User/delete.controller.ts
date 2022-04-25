import { Request, Response } from 'express';
import { handleError } from '../../errors';
import { UserRepository } from '../../repositories';

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const user = await new UserRepository().getOneUser(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    await new UserRepository().deleteUser(id);
    return res.status(200).send();
  } catch (error) {
    return handleError(error, res);
  }
};

export default deleteUserController;
