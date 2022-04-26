import User from "../../entities/User";

export interface IProject {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  starts_at: Date;
  ends_at: Date;
  user_owner: User
}

export interface IProjectRepo {
  create: (project: IProject) => Promise<IProject>;
}
