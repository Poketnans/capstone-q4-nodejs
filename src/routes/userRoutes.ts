import { Router } from 'express';
import getUsersController from '../controllers/User/getAll';

import { updateUserSchema, userSchema, loginSchema } from '../schemas';
<<<<<<< HEAD
import loginController from '../controllers/User/login';
=======
>>>>>>> 0feea81a1429b8ebf2aa199787f6d975f0ee4b7e

import {
  updateUserImageValidator,
  upload,
  validateSchemaMiddleware,
  validateAuth,
} from '../middlewares';

import {
  updateUserImageController,
  createUserController,
  getOneController,
  deleteUserController,
  updateUser,
} from '../controllers/User';

const userRoutes = Router();
userRoutes.get('/profile');
userRoutes.patch('', validateSchemaMiddleware(updateUserSchema), updateUser);
userRoutes.get('', getUsersController);
<<<<<<< HEAD
userRoutes.get('/:user_id', validateAuth, getOneController);
=======

>>>>>>> dc82e011e42ba0c07426538d1e3d08b147cb9e28
userRoutes.post(
  '/register',
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post(
  '/login',
  validateSchemaMiddleware(loginSchema),
  loginController
);
userRoutes.post('/signup');
userRoutes.post('/logout');
userRoutes.delete('/:uuid', validateAuth, deleteUserController);

userRoutes.patch('', validateSchemaMiddleware(updateUserSchema), updateUser);
userRoutes.patch(
  '/image',
  validateAuth,
  upload.single('image'),
  updateUserImageValidator,
  updateUserImageController
);

export default userRoutes;


