import { Router } from 'express';
import loginController from '../controllers/User/login';
import getUsersController from '../controllers/User/getAll';
import {
  updateUserImageValidator,
  upload,
  validateSchemaMiddleware,
  validateAuth,
} from '../middlewares';
import { userSchema, updateUserSchema } from '../schemas';
import {
  updateUserImageController,
  createUserController,
  getOneController,
  deleteUserController,
  updateUser,
} from '../controllers/User';

const userRoutes = Router();

userRoutes.get('/:user_id', validateAuth, getOneController);
userRoutes.get('', getUsersController);
userRoutes.post('/login', loginController);
userRoutes.post(
  '/register',
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post('/logout');
userRoutes.patch('', validateSchemaMiddleware(updateUserSchema), updateUser);
userRoutes.patch(
  '/image',
  validateAuth,
  upload.single('image'),
  updateUserImageValidator,
  updateUserImageController
);
userRoutes.delete('/:uuid', validateAuth, deleteUserController);

export default userRoutes;
