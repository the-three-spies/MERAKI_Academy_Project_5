const pool=require('../models/db')
// function that return all email for doner 
const getemaildoner = (req, res,next) => {  
  const date=req.body.date;
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
        let doneremail=[];
     result.rows.forEach((e)=>
     {
doneremail.push(e.email)
     })
req.body={email:doneremail,date:date}       
        next()
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
  const getUserMaxdonationOrder = (req, res,next) => {  
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
       
        else{

          req.body={email:result.rows[0].email}
          next()
        }
        
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "Server Error", err: err.message });
      });
  };
  module.exports={getemaildoner,getUserMaxdonationOrder}