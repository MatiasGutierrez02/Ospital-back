import Category from "./Category.js";
import User from "./User.js";
import Role from "./Role.js";
import Paciente from "./Paciente.js"
import Login from "./Login.js";
Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});

export { Category, User, Role, Paciente, Login };