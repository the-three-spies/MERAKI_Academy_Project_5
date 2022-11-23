const pool = require("../models/db");

const UpdateNeedyCase = (req, res,next) => {
    const value=[req.body.newcase.amount,req.body.newcase.case_id]
   
    if(req.body.newcase.category_id!='3')
    {
      next()
      return 
    }
    
     const query = `UPDATE needy_Case SET rest=rest-$1 ,donation_amount=donation_amount+$1 WHERE id=$2 RETURNING *;`;
      pool
        .query(query, value)
        .then((result) => {
          if (result.rows.length === 0) {
            return res.status(404).json({
              success: false,
              massage: `The Case for this id:is not found`,
            });
           
          } else {
            // res.status(200).json({
            //   success: true,
            //   massage: `Succeeded to updated case ,donation done }`,
            //   result:req.body.newcase
          
            // });
    
            next()
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
    const FinalUpdateNeedyCase = (req, res) => {
      const value=[req.body.newcase.case_id]
       const query = `UPDATE needy_Case SET statusdonation='inactive' WHERE id=$1 AND (amount IS NULL OR rest <='0') RETURNING *;`;
        pool
          .query(query, value)
          .then((result) => {
            if (result.rows.length === 0) {
              return res.status(200).json({
                success: true,
                massage: `still need donation`,
                result:req.body.newcase
              });
            } else {
              res.status(201).json({
                success: true,
                massage: `Succeeded to updated case ,donation done }`,
                result:req.body.newcase
            
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
      module.exports={UpdateNeedyCase,FinalUpdateNeedyCase}