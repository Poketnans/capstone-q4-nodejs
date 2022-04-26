import { Request, Response } from 'express';
import { handleError } from '../../errors';
import { getOneProjectService } from '../../services/projects';

const getOneProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await getOneProjectService(id);
    return project;
  } catch (e: any) {
    throw handleError(e, res);
  }
};

export default getOneProjectController;
