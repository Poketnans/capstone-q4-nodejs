import { Router } from 'express';
import multer from 'multer';
import getUsersController from '../controllers/User/getAll';
import updateUser from '../controllers/User/updateUser';

const userRoutes = Router();
const upload = multer({dest: "temp/"});

userRoutes.get('', getUsersController);
userRoutes.get('/profile');
userRoutes.post('/login');
userRoutes.post('/signup');
userRoutes.post('/logout');
userRoutes.patch('', upload.single('file'), updateUser);
userRoutes.delete('');

export default userRoutes;
