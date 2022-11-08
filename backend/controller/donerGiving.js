const pool = require("../models/db");
//You enter a new donation request and take an ID from a token
//the function receved this value from body(description,amount,address,case_id,deleveryDate,imgePathDoner)
// jest the user have authorization and authentacation make create new Doner Giving
const createNewDonerGiving = (req, res,next) => {
// console.log("mko")

    
    const { description,amount,address,case_id,deleveryDate,imgePathDoner,category_id } = req.body;

    //console.log(token)
    const doner_id =req.token.userId;
    const query = `INSERT INTO doner_givin(description,amount,address,deleveryDate,case_id,imgePathDoner,doner_id,category_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;`;
    const data = [description,amount,address,deleveryDate,case_id,imgePathDoner,doner_id,category_id];
    pool
      .query(query, data)
      .then((result) => {
        // res.status(200).json({
        //   success: true,
        //   massage: "New Doner Giving  Created",
        //   result: result.rows[0],
        // });
        req.body={newcase:result.rows[0]}
   
        next()
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      });

  
};
// In this function, you will return all donation requests to donors, regardless of the type of donation or the donor
const getAllDonerGiving = (req, res) => {
        const query = `SELECT doner_givin.*,users.id,users.firstName FROM doner_givin doner_givin INNER JOIN users ON doner_givin.doner_id = users.id WHERE doner_givin.is_deleted=0`;
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
//  update delevery  Date If the donor wants to change the delivery time, he can modify and change the time
const updateDonerGiving=(req, res)=>{
    console.log("lkokll")
    const id = req.params.id;
    let { deleveryDate } = req.body;
  
    const query = `UPDATE doner_givin SET deleveryDate = COALESCE($1, deleveryDate) WHERE id=$2 AND is_deleted = 0  RETURNING *;`;
    const data = [deleveryDate || null, id];
    pool
      .query(query, data)
      .then((result) => {
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            massage: `DonerGiving: ${id} is not found`,
          });
        } else {
          res.status(200).json({
            success: true,
            massage: `Succeeded to updated DonerGiving with id: ${id}`,
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



}

//If a donation is made, we will delete a building request via SoftDelete
const deletDonerGiving=(req, res)=>{
    
const id = req.params.id;
  const query = `UPDATE doner_givin SET is_deleted=1 WHERE id=$1;`;
  const data = [id];
  pool
    .query(query, data)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({
          success: false,
          massage: `Doner Giving: ${id} is not found`,
          err: err,
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `Succeeded to delete Doner Giving with id: ${id}`,
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
}
//This is a function that brings all donations to this person, and no one else can see them except to take any of the tokens from authentication
const getAllDonerGivingByDonerId=(req, res)=>{
    const id =req.token.userId;
    const query = `SELECT doner_givin.* ,users.is_deleted FROM doner_givin INNER join users on doner_givin.doner_id =users.id  
    where doner_givin.doner_id=$1 AND doner_givin.is_deleted=0;`;
    const data = [id];
  
    pool
      .query(query, data)
      .then((result) => {
        if (result.rows.length === 0) {
          res.status(404).json({
            success: false,
            massage: `The Doner: ${id} has no doner givin`,
          });
        } else {
          res.status(200).json({
            success: true,
            massage: `All the Doner Givin for the Doner: ${id}`,
            result: result.rows,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      });
  
}



module.exports={createNewDonerGiving,getAllDonerGiving,updateDonerGiving,deletDonerGiving,getAllDonerGivingByDonerId}