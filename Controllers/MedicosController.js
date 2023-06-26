import { Medico, Especialidad } from "../Models/index.js";

class MedicosController {
  constructor() {}
  getAllMedicos = async (req, res, next) => {
    try {
      const result = await Medico.findAll({
        attributes: ["matricula", "nombre", "nroInterno", "enGuardia"],
        include: [
          {
            model: Especialidad,
            as: "especialidad",
            attributes: ["nombre"],
          },
        ],
      });
      if (result.length === 0) throw new Error("No se encontraron medicos");
      res.send({ success: true, message: "Medicos encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  getMedicoByMatricula = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Medico.findOne({
        where: {
          matricula: id,
        },
        attributes: ["nombre", "nroInterno", "enGuardia"],
        include: [
          {
            model: Especialidad,
            as: "especialidad",
            attributes: ["nombre"],
          },
        ],
      });
      if (!result) throw new Error("No se encontro el  usuario");
      res.send({ success: true, message: "Usuario encontrado", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  createMedico = async (req, res, next) => {
    try {
      const { nombre, matricula, especialidadId, nroInterno, enGuardia } =
        req.body;

      const result = await Medico.create({
        nombre,
        matricula,
        especialidadId,
        nroInterno,
        enGuardia,
      });
      if (!result.dataValues) throw new Error("No se pudo crear el medico");
      res
        .status(200)
        .send({ success: true, message: "Medico creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  updateMedicoByMatricula = async (req, res, next) => {
    try {
      const { id } = req.params; // Corregir aquí, usar "id" en lugar de "MedicosId"
      const { nombre, matricula, especialidadId, nroInterno } = req.body;

      const result = await Medico.update(
        { nombre, matricula, especialidadId, nroInterno },
        { where: { matricula: id } }
      );
      if (result[0] === 0) throw new Error("No se pudo actualizar el medico");
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  deleteMedicoByMatricula = async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Medico.destroy({ where: { matricula: id } });

      if (result === 0) throw new Error("No se pudo eliminar el medico");

      res
        .status(200)
        .send({ success: true, message: "Medico eliminado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  setMedicoActivo = async (req, res, next) => {
    try {
      const { id } = req.params; 
      const result = await Medico.update(
        {enGuardia: true},
        { where: { matricula: id } }
      );
      
      if (result[0] === 0) throw new Error("No se pudo actualizar el medico");
  
      res.status(200).send({ success: true, message: "Medico actualizado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  setMedicoInactivo = async (req, res, next) => {
    try {
      const { id } = req.params; 
      const result = await Medico.update(
        {enGuardia: false},
        { where: { matricula: id } }
      );
      
      if (result[0] === 0) throw new Error("No se pudo actualizar el medico");
  
      res.status(200).send({ success: true, message: "Medico actualizado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default MedicosController;
