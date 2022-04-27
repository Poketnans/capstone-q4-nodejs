import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { IProjectRepo } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  getOne = (id: string, relationsWanted?: string[]) =>
    this.ormRepository.findOneOrFail(id, { relations: relationsWanted });
}

export default ProjectRepository;
