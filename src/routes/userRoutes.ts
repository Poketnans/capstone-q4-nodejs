import { Router } from "express"
import getUsersController from "../controllers/User/getAll"

const userRoutes = Router()

userRoutes.get("", getUsersController)
userRoutes.get("/profile")
userRoutes.post("/login")
userRoutes.post("/signup")
userRoutes.post("/logout")
userRoutes.patch("")
userRoutes.delete("")

export default userRoutes