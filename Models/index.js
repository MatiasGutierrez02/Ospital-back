
import User from "./User.js";
import Role from "./Role.js";
import Paciente from "./Paciente.js"
import Login from "./Login.js";
Role.hasMany(User, {
  foreignKey: "id",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});

export {  User, Role, Paciente, Login };
