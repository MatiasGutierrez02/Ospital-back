import { Router } from "express";
import PacientesController from "../Controllers/PacientesController.js";
const pacientesRoutes = Router();

const pacientesController= new PacientesController()


pacientesRoutes.get("/", pacientesController.getAllPacientes);
pacientesRoutes.get("/:id", pacientesController.getPacienteById);
pacientesRoutes.post("/", pacientesController.createPaciente);
pacientesRoutes.put("/:id", pacientesController.updatePacienteById);
pacientesRoutes.delete("/:id", pacientesController.deletePacienteById);
pacientesRoutes.put("/setToActivo/:id", pacientesController.setPacienteActivo)
pacientesRoutes.put("/setToInactivo/:id", pacientesController.setPacienteInactivo)
export default pacientesRoutes;