import { Router } from 'express';
import getUsersController from '../controllers/User/getAll';

import { updateUserImageValidator, upload, validateSchemaMiddleware } from '../middlewares';
import { userSchema } from '../schemas';
import {
  createUserController,
  updateUserImageController,
} from '../controllers/User';

const userRoutes = Router();

userRoutes.get('', getUsersController);
userRoutes.get('/profile');
userRoutes.post(
  '/register',
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post('/login');
userRoutes.post('/signup');
userRoutes.post('/logout');
userRoutes.patch('');
userRoutes.patch(
  '/image',
  upload.single('image'),
  updateUserImageValidator,
  updateUserImageController
);
userRoutes.delete('');

export default userRoutes;
