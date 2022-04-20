import { Router } from "express"
import { validateSchemaMiddleware } from "../middlewares";
import { userSchema } from "../schemas";

const coursesRoutes = Router()

coursesRoutes.get("")
coursesRoutes.get("/:uuid")

coursesRoutes.post("",
  validateSchemaMiddleware(userSchema)
)

coursesRoutes.patch("")
coursesRoutes.delete("")

export default coursesRoutes