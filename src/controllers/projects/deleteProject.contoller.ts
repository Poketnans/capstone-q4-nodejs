import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { handleError } from '../../errors';
import { ProjectRepository } from '../../repositories';

const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const { uuid: id } = req.params;
    await new ProjectRepository().delete(id);
    return res.status(httpStatus.NO_CONTENT).send('');
  } catch (e) {
    return handleError(e, res);
  }
};

export default deleteProjectController;
