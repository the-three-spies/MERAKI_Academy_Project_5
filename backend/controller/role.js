const pool = require("../models/db");

const createNewRole = (req, res) => {
  const { role } = req.body;
  const query = `INSERT INTO roles (role) VALUES ($1) RETURNING *`;
  const value = [role];
  pool
    .query(query, value)
    .then((result) => {
      res.status(201).json({
        success: true,
        massage: "Success role created",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error*",
        err: err,
      });
    });

};

const createNewPermission = (req, res) => {
  
};
const createNewRolePermission = (req, res) => {
  
};
module.exports = {
  createNewRole,
  createNewPermission,
  createNewRolePermission,
};
