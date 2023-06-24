import { Role } from "../Models/index.js";

const roleSeed = async () => {
  try {
    const adminRole = await Role.findOne({ where: { roleName: "admin" } });
    if (!adminRole) {
      await Role.create({ roleName: "admin" });

      
    }

    const userRole = await Role.findOne({ where: { roleName: "user" } });
    if (!userRole) {
      await Role.create({ roleName: "user" });
    }

    console.log("Roles creados con éxito");
  } catch (error) {
    console.log(error.message);
  }
};

export default roleSeed;

