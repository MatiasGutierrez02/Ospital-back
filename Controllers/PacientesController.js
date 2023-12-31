import { Paciente } from "../Models/index.js";

class PacientesController {
  constructor() {}
  getAllPacientes = async (req, res, next) => {
    try {
      const result = await Paciente.findAll({
        attributes:[ "Nombre", "Apellido", "DNI"]
      });
      if (result.length === 0) throw new Error("No se encontraron pacientes");
      res.send({ success: true, message: "Pacientes encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  getPacienteByDNI = async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Paciente.findOne({
        where: {
          DNI:id
        },
        attributes:[ "Nombre", "Apellido", "DNI"]

      });
      if (!result) throw new Error("No se encontro el  Paciente");
      res.send({ success: true, message: "Paciente encontrado", result });
    } catch (error) {
        res.status(400).send({ success: false, result: error.message });
    }
  };
  createPaciente = async (req, res, next) => {
    try {
      const { DNI, Sexo, Mail, Codigo, Telefono, Nombre,FechaRegistro,UltimaConsulta,ObraSocial,NumeroAfiliado,Direccion,Localidad,ClienteActivo, Apellido } = req.body;
      const result = await Paciente.create({ DNI, Sexo, Mail, Codigo, Telefono, Nombre,FechaRegistro,UltimaConsulta,ObraSocial,NumeroAfiliado,Direccion,Localidad,ClienteActivo, Apellido });
      if (!result.dataValues) throw new Error("No se pudo crear el Paciente");
      res
        .status(200)
        .send({ success: true, message: "Paciente creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  updatePacienteByDNI = async (req, res, next) => {
    try {
      const { id } = req.params; // Corregir aquí, usar "id" en lugar de "userId"
      const { DNI, Sexo, Mail, Codigo, Telefono, Nombre,FechaRegistro,UltimaConsulta,ObraSocial,NumeroAfiliado,Direccion,Localidad,ClienteActivo, Apellido } = req.body;
      const result = await Paciente.update(
        { DNI, Sexo, Mail, Codigo, Telefono, Nombre,FechaRegistro,UltimaConsulta,ObraSocial,NumeroAfiliado,Direccion,Localidad,ClienteActivo, Apellido},
        { where: { DNI: id } }
      );
      
      if (result[0] === 0) throw new Error("No se pudo actualizar el usuario");
  
      res.status(200).send({ success: true, message: "Paciente actualizado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  deletePacienteByDNI = async (req, res, next) => {
    try {
      const { id } = req.params;
      
      const result = await Paciente.destroy({ where: { DNI: id } });
      
      if (result === 0) throw new Error("No se pudo eliminar el Paciente");
  
      res.status(200).send({ success: true, message: "Paciente eliminado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  setPacienteActivo = async (req, res, next) => {
    try {
      const { id } = req.params; // Corregir aquí, usar "id" en lugar de "userId"
      const result = await Paciente.update(
        {ClienteActivo: true},
        { where: { DNI: id } }
      );
      
      if (result[0] === 0) throw new Error("No se pudo actualizar el usuario");
  
      res.status(200).send({ success: true, message: "Paciente actualizado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  setPacienteInactivo = async (req, res, next) => {
    try {
      const { id } = req.params; // Corregir aquí, usar "id" en lugar de "userId"
      const result = await Paciente.update(
        {ClienteActivo: false},
        { where: { DNI: id } }
      );
      
      if (result[0] === 0) throw new Error("No se pudo actualizar el usuario");
  
      res.status(200).send({ success: true, message: "Paciente actualizado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default PacientesController;