import { Request, Response } from 'express';
import { handleError } from '../../errors';
import getOneService from '../../services/users/getOne.service';

const getOneController = async (req: Request, res: Response) => {
  try {
    const userFounded = await getOneService(req.params.id);
    return res.status(200).json(userFounded);
  } catch (e) {
    return handleError(e, res);
  }
};

export default getOneController;
