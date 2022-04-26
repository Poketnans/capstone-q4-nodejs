import { Router } from 'express';
import updateUserController from '../controllers/User/updateUser';
import getUsersController from '../controllers/User/getAll';
import { updateUserSchema, userSchema } from '../schemas';
import { validateAuth, validateSchemaMiddleware } from "../middlewares";
import { createUserController, getOneController, deleteUserController } from "../controllers/User";
import loginController from "../controllers/User/login";

import { createUserController } from '../controllers/User';

const userRoutes = Router();

userRoutes.get('/profile');
userRoutes.patch(
  '',
  validateSchemaMiddleware(updateUserSchema),
  updateUserController
);
userRoutes.get("", getUsersController);
userRoutes.get("/:user_id", validateAuth, getOneController);
userRoutes.post("/register",
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post("/login", loginController);
userRoutes.post("/signup");
userRoutes.post("/logout");
userRoutes.delete("/:uuid", validateAuth, deleteUserController);

export default userRoutes;
