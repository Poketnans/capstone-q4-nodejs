import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { handleError } from '../../errors';
import { createProjectService } from '../../services/projects';

const createProjecController = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { validated } = req;
    const project = await createProjectService(user.id, validated);
    return res.status(httpStatus.CREATED).json(project);
  } catch (e: unknown) {
    throw handleError(e, res);
  }
};

export default createProjecController;
