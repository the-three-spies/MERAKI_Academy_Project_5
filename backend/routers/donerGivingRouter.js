const express = require("express");
const { createNewDonerGiving, getAllDonerGiving, updateDonerGiving ,getAllDonerGivingByDonerId} = require("../controller/donerGiving");




const donteRouter = express.Router();

donteRouter.post("/", createNewDonerGiving);
donteRouter.get("/", getAllDonerGiving);
 donteRouter.get("/myDonition/:id",getAllDonerGivingByDonerId)
donteRouter.put("/:id",updateDonerGiving)

module.exports = donteRouter;


