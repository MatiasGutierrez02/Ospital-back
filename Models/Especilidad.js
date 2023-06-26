
import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Especilidad extends Model {
  
}

Especilidad.init(
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
  },
  {
    sequelize: connectionDb,
    modelName: "Especilidades",
    timestamps: false,
  }
);



export default Especilidad;