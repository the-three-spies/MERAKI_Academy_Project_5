const pool = require("../models/db");

const createNewDonerGiving = (req, res) => {
console.log("mko")

    
    const { description,amount,address,case_id,deleveryDate,imgePathDoner } = req.body;

    //console.log(token)
    const doner_id =req.token.userId;
    const query = `INSERT INTO doner_givin(description,amount,address,deleveryDate,case_id,imgePathDoner,doner_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`;
    const data = [description,amount,address,deleveryDate,case_id,imgePathDoner,doner_id];
    pool
      .query(query, data)
      .then((result) => {
        
        console.log(result)
        res.status(200).json({
          success: true,
          massage: "New Doner Giving  Created",
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

const getAllDonerGiving = (req, res) => {
   
        const query = `SELECT * FROM doner_givin  WHERE is_deleted=0 ORDER BY 1;`;
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
//  update delevery  Date
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
const getAllDonerGivingByDonerId=(req, res)=>{
    const id = req.token.userId;
    const query = `SELECT * FROM doner_givin WHERE doner_id = $1 AND is_deleted=0;`;
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