
import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Medico extends Model {
  
}

Medico.init(
  {
    id:{
        type: DT.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
      type: DT.STRING,
      allowNull: false,
    },
    matricula: {
      type: DT.STRING,
    },
    nroInterno: {
      type: DT.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    especialidadId: {
      type: DT.INTEGER,
      defaultValue: 1,
    },
    enGuardia:{
        type:DT.BOOLEAN,
        allowNull: false,
    }
  },
  {
    sequelize: connectionDb,
    modelName: "Medicos",
    timestamps: false,
  }
);



export default Medico;