import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { handleError } from '../../errors';
import { updateProjectService } from '../../services/projects';

const updateProjectController = async (req: Request, res: Response) => {
  try {
    const { uuid: id } = req.params;
    const { validated } = req;
    await updateProjectService(id, validated);
    return res.status(httpStatus.NO_CONTENT).json();
  } catch (e: unknown) {
    return handleError(e, res);
  }
};

export default updateProjectController;
