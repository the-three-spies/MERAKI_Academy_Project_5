const pool = require("../models/db");
const getNumNeedCase = (req, res) => {  
    const query = `SELECT donations_Category.title AS label,COUNT(needy_Case.id) AS value FROM needy_Case
    LEFT JOIN donations_Category ON needy_Case.category_id =donations_Category.id
    GROUP BY title;`;
    pool
      .query(query)
      .then((result) => {
        console.log("result= ", result);
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            message: "no cases found found",
          });
        }
        res.status(200).json({
          success: true,
          message: "All cases group by category ",
          result: result.rows,
        });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
  const getNumdonationOrder = (req, res) => {  
    const query = `SELECT donations_Category.title AS label,COUNT(doner_givin.id) AS value FROM doner_givin
    LEFT JOIN donations_Category ON doner_givin.category_id =donations_Category.id
    GROUP BY title;`
    pool
      .query(query)
      .then((result) => {
        console.log("result= ", result);
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            message: "no dontion order found found",
          });
        }
        res.status(200).json({
          success: true,
          message: "All donation order group by category ",
          result: result.rows,
        });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
  const getUserNumdonationOrder = (req, res) => {  
    const query = `SELECT users.email,COUNT(doner_givin.id) AS NumberOfDonationOrder FROM doner_givin
    LEFT JOIN users ON doner_givin.doner_id=users.id
    GROUP BY email ORDER BY COUNT(doner_givin.id) DESC;
    `
    pool
      .query(query)
      .then((result) => {
        console.log("result= ", result);
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            message: "no dontion order found found",
          });
        }
        res.status(200).json({
          success: true,
          message: "All donation order group by user ",
          result: result.rows,
        });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
  const getNumActiveCase = (req, res) => {  
    const query = `SELECT  needy_case.statusdonation AS label,COUNT(needy_Case.id) AS value FROM needy_Case
    GROUP BY statusdonation`;
    pool
      .query(query)
      .then((result) => {
        console.log("result= ", result);
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            message: "no cases found found",
          });
        }
        res.status(200).json({
          success: true,
          message: "All cases group by statusdonation ",
          result: result.rows,
        });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
  module.exports={getNumNeedCase,getNumdonationOrder,getUserNumdonationOrder,getNumActiveCase}