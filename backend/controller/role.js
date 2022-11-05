const pool = require("../models/db");
// by using this function , you create  roles which you need its, for this project we need 3 role >>(admin,doner,user)
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
// by using this function , you can create permissions which you need for authorization process ,
const createNewPermission = (req, res) => {
  const { permission } = req.body;
  const value = [permission];
  const query = `INSERT INTO permissions  (permission) VALUES ($1) RETURNING *;`;
  pool
    .query(query, value)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Success permission created`,
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};
// by using this function , you can create realtion between role ,permissions as you need ,which you need for authorization process ,
const createNewRolePermission = (req, res) => {
  const { role_id, permission_id } = req.body;
  const values = [ role_id, permission_id];
  const query = `INSERT INTO role_permission (role_id,permission_id) VALUES ($1,$2) RETURNING *`;
  pool
    .query(query, values)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Success role_permission created`,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};



const getAllRoles=(req,res)=>{
const query=`select * from roles where
id!=1;`

pool
.query(query)
.then((result) => {
  res.status(200).json({
    success: true,
    massage: "All the Roles",
    result: result.rows,
   
  });
})
.catch((err) => {
  res.status(500).json({
    success: false,
    massage: "server error",
    err: err,
  });
});
}




module.exports = {
  createNewRole,
  createNewPermission,
  createNewRolePermission,
  getAllRoles,
};
