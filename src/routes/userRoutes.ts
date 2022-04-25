import { Router } from "express"
import getUsersController from "../controllers/User/getAll";

import { validateAuth, validateSchemaMiddleware } from "../middlewares";
import { userSchema } from "../schemas";
import { createUserController, getOneController
} from "../controllers/User";

const userRoutes = Router()

userRoutes.get("", getUsersController)
userRoutes.get("/:user_id", validateAuth, getOneController)
userRoutes.post("/register",
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post("/login")
userRoutes.post("/signup")
userRoutes.post("/logout")
userRoutes.patch("")
userRoutes.delete("")


export default userRoutes