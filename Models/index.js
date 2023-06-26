
import User from "./User.js";
import Role from "./Role.js";
import Paciente from "./Paciente.js"
import Medico from "./Medico.js";
import Especialidad from "./Especilidad.js"
Role.hasMany(User, {
  foreignKey: "id",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});

Especialidad.hasMany(Medico, {
  foreignKey: "id",
});
Medico.belongsTo(Especialidad, {
  foreignKey: "especialidadId",
  as: "especialidad",
});
export {  User, Role, Paciente, Medico, Especialidad };
