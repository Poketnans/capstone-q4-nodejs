import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import jwtConfig from '../configs';
import { CourseReviewRepository } from '../repositories';


const validateAuthReviewMiddleware = (req: Request, res: Response, nextFx: NextFunction) => {
  
  const idReview = req.params.id;
  
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: 'missing authorization header',
    });
  }

  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: 'token missing',
    });
  }

  return jwt.verify(token, jwtConfig.secretKey, async(err, decoded: any) => {
    if (err) {
      return res.status(401).json({
        error: 'invalid token',
      });
    }

    const { user:{ id } } = decoded;
    const courseReview = await new CourseReviewRepository().findOneOrFail(idReview,['user']);
    
    if(id !== courseReview.user.id){
      return res.status(403).json({"error": "permission denied"});
    }

    return nextFx();
  });
};

export default validateAuthReviewMiddleware;