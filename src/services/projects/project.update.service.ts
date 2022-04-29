import { QueryFailedError } from 'typeorm';
import { ErrorHandler } from '../../errors';
import { ProjectRepository } from '../../repositories';
import { IProject } from '../../repositories/project/interfaces';

const updateProjectService = async (
  id: string,
  updatedProject: Partial<IProject>
) => {
  try {
    await new ProjectRepository().update(id, updatedProject);
  } catch (e: any) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(400, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(401, `${e.message}`);
  }
};

export default updateProjectService;
