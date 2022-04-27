import httpStatus from 'http-status';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { handleError } from '../../errors';
import { getOneProjectService } from '../../services/projects';

const getOneProjectController = async (req: Request, res: Response) => {
  try {
    const { uuid: id } = req.params;
    const project = await getOneProjectService(id);
    return res.status(httpStatus.OK).json(project);
  } catch (e: any) {
    return handleError(e, res);
  }
};

export default getOneProjectController;
