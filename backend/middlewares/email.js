const pool=require('../models/db')
// function that return all email for doner 
const getemaildoner = (req, res,next) => {  
    const query = `SELECT email FROM users WHERE  role_id='3';`;
    pool
      .query(query)
      .then((result) => {
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            message: "no user found",
          });
        }
        // res.status(200).json({
        //   success: true,
        //   message: "All the email for doners ",
        //   result: result.rows,
        //   length:result.rows.length
        // });
        let doneremail=[];
     result.rows.forEach((e)=>
     {
doneremail.push(e.email)
     })
req.body={email:doneremail}       
        next()
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };

  module.exports={getemaildoner}