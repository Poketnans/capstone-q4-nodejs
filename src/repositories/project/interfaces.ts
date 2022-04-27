import Category from '../../entities/Category';
import User from '../../entities/User';

export interface IProject {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  starts_at: Date;
  ends_at: Date;
  id_user_owner?: string;
  id_category?: string;
  user_owner?: User;
  category?: Category;
}

export interface IProjectRepo {
  create: (project: IProject) => Promise<IProject>;
}
