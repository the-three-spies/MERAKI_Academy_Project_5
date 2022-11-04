const express = require("express");
const { createNewDonerGiving, getAllDonerGiving, updateDonerGiving ,getAllDonerGivingByDonerId, deletDonerGiving} = require("../controller/donerGiving");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");




const donteRouter = express.Router();

donteRouter.post("/",authentication,authorization("CREATE_DONERS"), createNewDonerGiving);
donteRouter.get("/", getAllDonerGiving);
 donteRouter.get("/myDonition",authentication,getAllDonerGivingByDonerId)
donteRouter.put("/:id",updateDonerGiving)
donteRouter.delete("/:id",deletDonerGiving)
module.exports = donteRouter;


