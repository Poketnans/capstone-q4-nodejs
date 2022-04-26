import httpStatus from 'http-status';
import { ErrorHandler } from '../../errors';
import { ProjectRepository } from '../../repositories';

const getOneProjectService = async (id: string) => {
  try {
    const foundProject = await new ProjectRepository().getOne(id);
    return foundProject;
  } catch (e: any) {
    throw new ErrorHandler(httpStatus.NOT_FOUND, 'project not found');
  }
};

export default getOneProjectService;
