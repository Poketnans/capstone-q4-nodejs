import { Request, Response } from "express";
import { ErrorHandler } from "../../errors";
import { ProjectRepository } from "../../repositories";

const projectsGetAllController = async ( req: Request, res: Response ) => {
  try {
    const findProjects = await new ProjectRepository().getAll();
    return res.status(200).json(findProjects)
  } catch (e) {
    throw new ErrorHandler(400,`${e.message}`);
        
  }
}
export default projectsGetAllController;