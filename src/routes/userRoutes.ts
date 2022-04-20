import multer from 'multer';
import { Router } from 'express';
import updateUser from '../controllers/User/updateUser';
import getUsersController from '../controllers/User/getAll';

import { validateSchemaMiddleware } from '../middlewares';
import { userSchema } from '../schemas';
import { createUserController } from '../controllers/User';

const userRoutes = Router();
const upload = multer({ dest: 'temp/' });

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
userRoutes.patch('', upload.single('file'), updateUser);
userRoutes.delete('');

export default userRoutes;
