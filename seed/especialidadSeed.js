import { Especialidad } from "../Models/index.js";

const especilidadSeed = async () => {
  try {
    const cardiologia = await Especialidad.findOne({
      where: { nombre: "Cardiologia" },
    });

    if (!cardiologia) {
      await Especialidad.create({ nombre: "Cardiologia" });
    }
    const clinico = await Especialidad.findOne({
      where: { nombre: "Clinico" },
    });

    if (!clinico) {
      await Especialidad.create({ nombre: "Clinico" });
    }

    console.log("Especialidades creadas con éxito");
  } catch (error) {
    console.log(error.message);
  }
};

export default especilidadSeed;
