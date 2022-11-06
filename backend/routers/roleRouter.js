const express = require("express");

//controllers
const {
  createNewRole,
  createNewPermission,
  createNewRolePermission,
  getAllRoles,
} = require("../controller/role");

const roleRouter = express.Router();

roleRouter.post("/", createNewRole);
roleRouter.post("/permission", createNewPermission);
roleRouter.post("/role_permission", createNewRolePermission);
roleRouter.get("/",getAllRoles)
module.exports = roleRouter;
