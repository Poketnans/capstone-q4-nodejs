import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { IProject, IProjectRepo } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  update = (id: string, updatedProject: Partial<IProject>) =>
    this.ormRepository.update(id, updatedProject);
}

export default ProjectRepository;
