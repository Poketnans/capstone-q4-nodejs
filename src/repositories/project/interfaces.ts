import { UpdateResult } from 'typeorm';

export interface IProject {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  starts_at: Date;
  ends_at: Date;
}

export interface IProjectRepo {
  update: (
    id: string,
    updatedProject: Partial<IProject>
  ) => Promise<UpdateResult>;
}
