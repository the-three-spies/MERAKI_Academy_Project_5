const express = require("express");

//controllers
const {
  createNewRole,
  createNewPermission,
  createNewRolePermission,
} = require("../controller/role");

const roleRouter = express.Router();

roleRouter.post("/", createNewRole);
roleRouter.post("/permission", createNewPermission);
roleRouter.post("/role_permission", createNewRolePermission);
module.exports = roleRouter;
