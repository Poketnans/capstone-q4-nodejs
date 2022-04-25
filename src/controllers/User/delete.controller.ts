import { Request, Response } from 'express';
import { handleError } from '../../errors';
import { UserRepository } from '../../repositories';

const deleteUserController = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  try {
    await new UserRepository().deleteUser(uuid);
    return res.status(200).send();
  } catch (e) {
    return handleError(e, res);
  }
};

export default deleteUserController;
