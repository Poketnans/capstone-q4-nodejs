import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { IProjectRepo, IProject } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }
  
  create = (project: IProject) => this.ormRepository.save(project);
}

export default ProjectRepository;
