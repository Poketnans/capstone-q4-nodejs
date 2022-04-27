import httpStatus from 'http-status';
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
    delete newProject.user_owner.password
    return newProject;
  } catch (e: any) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(httpStatus.CONFLICT, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(httpStatus.BAD_REQUEST, `${e.message}`);
  }
};

export default createProjectService;
