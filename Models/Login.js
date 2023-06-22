import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Login extends Model {}

Login.init(
  {
    Contraseña: {
      type: DT.STRING(50),
      allowNull: false,
    },
    Mail: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize: connectionDb,
    modelName: "Login",
    timestamps: false,
  },
 
);

export default Login;
