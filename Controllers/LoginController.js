import { User } from "../Models/index.js";

class LoginController {
  constructor() {}
  logIn = async (req, res, next) => {
    try {
      const { mail, contraseña } = req.body;
      console.log(req.body)
      const result = await User.findOne({
        where: { mail },
      });
      if (!result) throw new Error("Credenciales incorrectas");

      const compare = await result.validatePassword(contraseña, result.contraseña);
      if (!compare) throw new Error("Credenciales incorrectas");
      res
        .status(200)
        .send({ success: true, message: "Usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  logOut = async (req, res, next) => {
    try {} catch(err){}
  }
}

export default LoginController;