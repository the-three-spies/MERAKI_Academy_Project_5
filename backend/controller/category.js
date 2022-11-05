//------------step1 : use the packages------------
// require the connection so it can be used
// we are destructing the pool out of the exported object
const pool = require("../models/db");

//------------step2 : excute the func.------------
//     createNewCategory + createNewCategory

//------------- createNewCategory -------------
const createNewCategory = (req, res) => {
  //donations_Category:clothes , food, money, furniture
  const { title, imgePath } = req.body;
  const values = [title, imgePath];
  //inserts (creates) a new row in the table `donations_Category` with the specified values
  //Create `donations_Category` table with the following columns: title,imgePath with its data types.
  const query = `INSERT INTO donations_Category
                (title,imgePath)
                VALUES ($1,$2)  RETURNING *;`;
  console.log("values= ", values, "query= ", query);
  pool
    .query(query, values)
    .then((result) => {
      console.log("result", result);
      res.status(201).json({
        success: true,
        message: "donations_Category created successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, message: "Server Error", err: err.message });
    });
};
//------------- get All Category -------------
const getCategory = (req, res) => {  
  //selecting (retrieving) rows with  all columns (*) from the table `donations_Category`
  const query = `SELECT *  FROM donations_Category ;`;
  console.log("query= ", query);
  pool
    .query(query)
    .then((result) => {
      console.log("result= ", result);
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "no donations_Category found",
        });
      }
      res.status(200).json({
        success: true,
        message: "All the donations_Category ",
        result: result.rows,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, message: "Server Error", err: err.message });
    });
};
module.exports = { createNewCategory, getCategory };

