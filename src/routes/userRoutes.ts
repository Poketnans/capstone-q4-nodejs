import { Router } from "express"
import getUsersController from "../controllers/User/getAll";

import { validateSchemaMiddleware } from "../middlewares";
import { userSchema } from "../schemas";
import { createUserController
} from "../controllers/User";
import loginController from "../controllers/User/login";

const userRoutes = Router()

userRoutes.get("", getUsersController)
userRoutes.get("/profile")
userRoutes.post("/register",
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post("/login", loginController)
userRoutes.post("/signup")
userRoutes.post("/logout")
userRoutes.patch("")
userRoutes.delete("")


export default userRoutes