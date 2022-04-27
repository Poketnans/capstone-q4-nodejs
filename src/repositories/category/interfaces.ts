import Category from "../../entities/Category";

export interface ICategoryRepo {
  getCategory: (id: string) => Promise<Category>;
}
