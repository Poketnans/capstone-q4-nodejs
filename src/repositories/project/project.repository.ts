import { getRepository, Repository } from 'typeorm';
import Project from '../../entities/Project';
import { ProjectNotFoundError } from '../../errors';
import { verifyUuidError } from '../../utils';
import { IProject, IProjectRepo } from './interfaces';

class ProjectRepository implements IProjectRepo {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  update = (id: string, updatedProject: Partial<IProject>) =>
    this.ormRepository.update(id, updatedProject);

  create = (project: IProject) => this.ormRepository.save(project);

  getOne = async (id: string, relationsWanted?: string[]) => {
    try {
      return await this.ormRepository.findOneOrFail(id, {
        relations: relationsWanted,
      });
    } catch (err) {
      verifyUuidError(err.message, 'url id_project');
      throw new ProjectNotFoundError();
    }
  };

  delete = async (id: string) => {
    try {
      return await this.ormRepository.delete(id);
    } catch (err) {
      verifyUuidError(err.message, 'url id_project');
      throw new ProjectNotFoundError();
    }
  };

  getProjects = (userId: string) =>
    this.ormRepository.find({ where: { user_owner: { id: userId } } });
}

export default ProjectRepository;
