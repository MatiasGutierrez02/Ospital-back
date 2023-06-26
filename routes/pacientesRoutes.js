import { Router } from "express";
import PacientesController from "../Controllers/PacientesController.js";
const pacientesRoutes = Router();

const pacientesController= new PacientesController()


pacientesRoutes.get("/", pacientesController.getAllPacientes);
pacientesRoutes.get("/:id", pacientesController.getPacienteByDNI);
pacientesRoutes.post("/", pacientesController.createPaciente);
pacientesRoutes.put("/:id", pacientesController.updatePacienteByDNI);
pacientesRoutes.delete("/:id", pacientesController.deletePacienteByDNI);
pacientesRoutes.put("/setToActivo/:id", pacientesController.setPacienteActivo)
pacientesRoutes.put("/setToInactivo/:id", pacientesController.setPacienteInactivo)
export default pacientesRoutes;