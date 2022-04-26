import { QueryFailedError } from 'typeorm';
import { ErrorHandler } from '../../errors';
import { ProjectRepository, UserRepository } from '../../repositories';
import { IProject } from '../../repositories/project/interfaces';

const createProjectService = async (id: string, project: IProject) => {
  try {
    const projectOwner = await new UserRepository().getOneUser(id);
    // eslint-disable-next-line no-param-reassign
    project.user_owner = projectOwner;
    const newProject = await new ProjectRepository().create(project);
    return newProject;
  } catch (e: any) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(400, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(400, `${e.message}`);
  }
};

export default createProjectService;
