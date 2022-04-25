import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { Iproject, IProjectRepo } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  getAll = () => this.ormRepository.find() ;

}

export default ProjectRepository;
