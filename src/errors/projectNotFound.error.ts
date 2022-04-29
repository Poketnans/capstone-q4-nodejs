import NotFoundError from './NotFound.error';

class ProjectNotFoundError extends NotFoundError {
  constructor() {
    super('project not found');
  }
}

export default ProjectNotFoundError;
