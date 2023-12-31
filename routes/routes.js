import { Router } from "express";
import userRoutes from "./userRoutes.js";
import pacientesRoutes from "./pacientesRoutes.js"
import loginRoutes from "./loginRoutes.js"
import medicosRoutes from "./medicosRoutes.js";
const routes= Router()

routes.use("/users", userRoutes)
routes.use("/pacientes", pacientesRoutes)
routes.use("/login", loginRoutes)
routes.use("/medicos", medicosRoutes)
export default routes