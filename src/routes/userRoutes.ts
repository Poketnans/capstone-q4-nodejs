import { Router } from "express"

const userRoutes = Router()

userRoutes.get("")
userRoutes.get("/profile")
userRoutes.post("/login")
userRoutes.post("/signup")
userRoutes.post("/logout")
userRoutes.patch("")
userRoutes.delete("")

export default userRoutes