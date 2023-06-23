import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Paciente extends Model {}

Paciente.init(
  {
    ID_Paciente: {
      type: DT.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DNI: {
      type: DT.STRING(10),
    },
    Nombre: {
      type: DT.STRING(50),
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    Apellido: {
      type: DT.STRING(50),
      allowNull: false,
    },
    Sexo: {
      type: DT.STRING(10),
    },
    Mail: {
      type: DT.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    Codigo: {
      type: DT.STRING(10),
    },
    Telefono: {
      type: DT.STRING(15),
    },
    FechaRegistro: {
      type: DT.DATE,
    },
    UltimaConsulta: {
      type: DT.DATE,
    },
    ObraSocial: {
      type: DT.STRING(50),
    },
    NumeroAfiliado: {
      type: DT.STRING(20),
    },
    Direccion: {
      type: DT.STRING(100),
    },
    Localidad: {
      type: DT.STRING(50),
    },
    ClienteActivo: {
      type: DT.INTEGER,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "Pacientes",
    timestamps: false,
  },
);

export default Paciente;