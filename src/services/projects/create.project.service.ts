/* eslint-disable no-param-reassign */
import httpStatus from 'http-status';
import { QueryFailedError } from 'typeorm';
import Project from '../../entities/Project';
import { ErrorHandler } from '../../errors';
import {
  CategoryRepository,
  ProjectRepository,
  UserRepository,
} from '../../repositories';
import { IProject } from '../../repositories/project/interfaces';

const createProjectService = async (id: string, project: IProject) => {
  try {
    const projectOwner = await new UserRepository().getOneUser(id);
    const category = await new CategoryRepository().getCategory(
      project.id_category
    );
    const newProject: IProject = project;
    newProject.user_owner = projectOwner;
    newProject.category = category;
    delete newProject.user_owner.password;
    await new ProjectRepository().create(newProject);

    return newProject;
  } catch (e: any) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(httpStatus.CONFLICT, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(httpStatus.BAD_REQUEST, `${e.message}`);
  }
};

export default createProjectService;
