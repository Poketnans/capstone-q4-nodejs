export interface Iproject {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  starts_at: Date;
  ends_at: Date;
}

export interface IProjectRepo {
  getOne: (id: string) => Promise<Iproject>;
}
