import { Router } from "express";
import MedicosController from "../Controllers/MedicosController.js";
const medicosRoutes = Router();

const medicosController= new MedicosController()


medicosRoutes.get("/", medicosController.getAllMedicos);
medicosRoutes.get("/:id", medicosController.getMedicoByMatricula);
medicosRoutes.post("/", medicosController.createMedico);
medicosRoutes.put("/:id", medicosController.updateMedicoByMatricula);
medicosRoutes.delete("/:id", medicosController.deleteMedicoByMatricula);
medicosRoutes.put("/setEnGuardia/:id", medicosController.setMedicoActivo)
medicosRoutes.put("/unsetEnGuardia/:id", medicosController.setMedicoInactivo)
export default medicosRoutes;