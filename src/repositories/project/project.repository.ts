import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { IProjectRepo } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  getOne = (id: string) => this.ormRepository.findOneOrFail(id);
}

export default ProjectRepository;
