import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../errors';
import { CourseReviewRepository } from '../repositories';


const validatePertissionReviewMiddleware = async (req: Request, res: Response, nextFx: NextFunction) => {
  
  const idReview = req.params.id;
  try {
    const { id  } = req.user;
    const courseReview = await new CourseReviewRepository().findOneOrFail(idReview,['user']);
      
    if(id !== courseReview.user.id){
      return res.status(403).json({"error": "permission denied"});
    }
    return nextFx();
    
  } catch (e) {
    return nextFx(new ErrorHandler(404, `${e.message}`));
    
  }

};

export default validatePertissionReviewMiddleware;