import { DeleteResult, UpdateResult } from 'typeorm';

export interface IProject {
  name: string;
  description: string;
  starts_at: Date;
  ends_at: Date;
}

export interface IProjectRepo {
  createProject: (project: IProject) => Promise<IProject>;
  getProjects: () => Promise<IProject[]>;
  updateProject: (
    project: Partial<IProject>,
    id: string
  ) => Promise<UpdateResult>;
  deleteProject: (projectId: string) => Promise<DeleteResult>;
  getOneUser: (projectId: string) => Promise<IProject>;
}
