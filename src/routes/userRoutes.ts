import { Router } from "express"
import getUsersController from "../controllers/User/getAll";

import { validateAuth, validateSchemaMiddleware } from "../middlewares";
import { userSchema } from "../schemas";
import { createUserController, getOneController, deleteUserController } from "../controllers/User";
import loginController from "../controllers/User/login";

const userRoutes = Router()

userRoutes.get("", getUsersController)
userRoutes.get("/:user_id", validateAuth, getOneController)
userRoutes.post("/register",
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post("/login", loginController)
userRoutes.post("/signup")
userRoutes.post("/logout")
userRoutes.patch("")
userRoutes.delete("/:uuid", validateAuth, deleteUserController)


export default userRoutes