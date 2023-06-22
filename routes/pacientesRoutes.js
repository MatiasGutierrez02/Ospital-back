import { Router } from "express";
import PacientesController from "../Controllers/PacientesController.js";
const pacientesRoutes = Router();

const pacientesController= new PacientesController()


pacientesRoutes.get("/", pacientesController.getAllPacientes);
pacientesRoutes.get("/:id", pacientesController.getPacienteById);
pacientesRoutes.post("/", pacientesController.createPaciente);
pacientesRoutes.put("/:id", (req, res) => {
  res.send("get all Pacientes");
});
pacientesRoutes.delete("/:id", (req, res) => {
  res.send("get all Pacientes");
});

export default pacientesRoutes;