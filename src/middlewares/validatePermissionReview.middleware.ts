import { NextFunction, Request, Response } from 'express';
import { CourseReviewRepository } from '../repositories';


const validatePertissionReviewMiddleware = async (req: Request, res: Response, nextFx: NextFunction) => {
  
  const idReview = req.params.id;
  
  
  const { id  } = req.user;
  const courseReview = await new CourseReviewRepository().findOneOrFail(idReview,['user']);
    
  if(id !== courseReview.user.id){
    return res.status(403).json({"error": "permission denied"});
  }
  return nextFx();
};

export default validatePertissionReviewMiddleware;