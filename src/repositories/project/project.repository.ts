import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { IProject, IProjectRepo } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  createProject = (project: IProject) => this.ormRepository.save(project);

  getProjects = () => this.ormRepository.find();

  updateProject = (project: Partial<IProject>, id: string) =>
    this.ormRepository.update(id, project);

  deleteProject = (projectId: string) => this.ormRepository.delete(projectId);

  getOneUser = (projectId: string) => this.ormRepository.findOne(projectId);
}

export default ProjectRepository;
