const { query } = require("express");
const pool = require("../models/db");
// by this function , you can user(as needy ) creat case ,in order other people can help him,
const createNeedyCase = (req, res) => {
  const { description, category_id, amount, address } = req.body; // parmeter as we need from creat table requirement
  const needy_id = req.token.userId; // after authenication work correctly ,we can get userid
  const values = [
    description,
    category_id,
    needy_id,
    amount || null,
    address || null,
  ];
  const query = `INSERT INTO needy_Case (description,category_id,needy_id,amount,address) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
  pool
    .query(query, values)
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "Your Case created",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    });
};
// in order to get all cases from database , full information about case and who creat that case, use inner join between needy_case table and users table
const getAllNeedyCase = (req, res) => {
  const query = `SELECT needy_Case.*,users.firstName,donations_Category.title FROM needy_Case INNER JOIN donations_Category ON needy_Case.category_id = donations_Category.id INNER JOIN users ON needy_Case.needy_id = users.id WHERE needy_case.is_deleted=0 ;`;
  pool
    .query(query)
    .then((result) => {
      if (result.rows.length === 0) {
        // which mean no data in needy case
        res.status(404).json({
          success: false,
          massage: "No Casese yet",
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `All Cases `,
          result: result.rows,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    });
};
// in order to delete specfic case from database ,but we need soft delete just modifiy is deleted from 0 to 1 by depending on id for that case ,
const deletNeedyCaseByCaseID = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE needy_Case SET is_deleted=1 WHERE id=$1 And amount=0;`;
  const value = [id];
  pool
    .query(query, value)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({
          success: false,
          massage: `The case for id: ${id} is not found`,
          err: err,
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `Succeeded to delete case with id: ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    });
};
// Using this relationship, you will be able to adjust the value requested by the needy,When the donation is made, it will be subtracted from the pervious value
const UpdateNeedyCaseByCaseId = (req, res) => {
  caseid=req.params.id;
  const {amount}=req.body;
  const values=[amount||0,caseid]
 const query = `UPDATE needy_Case SET amount=amount-$1 WHERE id=$2 AND is_deleted = 0  RETURNING *;`;
  pool
    .query(query, values)
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          massage: `The Case for this id: ${caseid} is not found`,
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `Succeeded to updated case with id: ${caseid}`,
          result: result.rows[0],
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    });
};

// in order to get cases for specfic users ,and full information about case , use inner join between needy_case table and users table, where need_id=req.token.userID
const getNeedyCaseByUserId = (req, res) => {
  const id = req.token.userId;
  const value = [id];
  const query = `SELECT needy_case.description,needy_id,amount,address,donations_Category.title FROM needy_case INNER JOIN donations_Category ON needy_Case.category_id = donations_Category.id WHERE needy_case.is_deleted=0 AND needy_case.needy_id=$1;`;
  pool
    .query(query, value)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          massage: "There is no Cases for you",
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `The Cases for user ${id}`,
          cases: result.rows,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    });
};
// in order to getall  case for specfic category of donation ,and full information about case , and user join 2 table (needycase,user)
const getNeedyCasebyCategoryId = (req, res) => {
  const donationCategory = req.params.id;
  const value = [donationCategory];
  const query = `SELECT needy_Case.*,users.firstName FROM needy_Case INNER JOIN users ON needy_Case.needy_id = users.id WHERE needy_case.is_deleted=0 AND category_id=$1;`;
  pool
    .query(query, value)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          massage: "There is no Cases for that section",
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `The Cases for this section ${donationCategory}`,
          cases: result.rows,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    });
};

module.exports = {
  createNeedyCase,
  getAllNeedyCase,
  deletNeedyCaseByCaseID,
  getNeedyCaseByUserId,
  getNeedyCasebyCategoryId,
  UpdateNeedyCaseByCaseId,
};
