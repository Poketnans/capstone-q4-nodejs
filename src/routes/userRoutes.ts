import { Router } from 'express';
import updateUserController from '../controllers/User/updateUser';
import getUsersController from '../controllers/User/getAll';

import { validateSchemaMiddleware } from '../middlewares';
import { updateUserSchema, userSchema } from '../schemas';

import { createUserController } from '../controllers/User';

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
userRoutes.patch(
  '',
  validateSchemaMiddleware(updateUserSchema),
  updateUserController
);
userRoutes.delete('');

export default userRoutes;
