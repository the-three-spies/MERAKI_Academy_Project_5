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
  const getCounter = (req, res) => {  
    const query = `SELECT COUNT(id) FROM users ;SELECT COUNT(id) FROM doner_givin;
    SELECT COUNT(id) FROM needy_Case;`
    pool
      .query(query)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "state count",
          result: {0:result[0].rows[0],1:result[1].rows[0],2:result[2].rows[0]}
        });
       
       
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
 
    const getSearchAllNeedyCase = (req, res) => {
      const name=req.query.name;
      const query = `SELECT needy_Case.*,users.firstName,donations_Category.title FROM needy_Case INNER JOIN donations_Category ON needy_Case.category_id = donations_Category.id INNER JOIN users ON needy_Case.needy_id = users.id WHERE users.firstName like '${name}%';`;
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
    const getlastNeedyCase = (req, res) => {
      const query = `SELECT needy_Case.*,users.firstName,donations_Category.title FROM needy_Case INNER JOIN donations_Category ON needy_Case.category_id = donations_Category.id INNER JOIN users ON needy_Case.needy_id = users.id WHERE needy_case.is_deleted=0 ORDER BY (needy_Case.id) DESC LIMIT 5;`;
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
    const getlastDonerGiving = (req, res) => {
      const query = `SELECT doner_givin.*,users.id,users.firstName FROM doner_givin doner_givin INNER JOIN users ON doner_givin.doner_id = users.id WHERE doner_givin.is_deleted=0 ORDER BY (doner_givin.id) DESC LIMIT 5;`;
      pool
        .query(query)
        .then((result) => {
          res.status(200).json({
            success: true,
            massage: "All the Doner Givin",
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
};

  module.exports={getNumNeedCase,getNumdonationOrder,getUserNumdonationOrder,getNumActiveCase,getCounter,getSearchAllNeedyCase,getlastNeedyCase,getlastDonerGiving}