const express = require("express");
const { createNewDonerGiving, getAllDonerGiving, updateDonerGiving ,getAllDonerGivingByDonerId, deletDonerGiving, getdonationOrderMoneyByUserId, getdonationOrderMeterialByUserId, } = require("../controller/donerGiving");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const { UpdateNeedyCase, FinalUpdateNeedyCase } = require("../middlewares/donation");




const donteRouter = express.Router();

donteRouter.post("/",authentication,authorization("Create_giving"),createNewDonerGiving,UpdateNeedyCase,FinalUpdateNeedyCase);//authentication,authorization("CREATE_DONERS"),
donteRouter.get("/", getAllDonerGiving);
 donteRouter.get("/myDonition",authentication,getAllDonerGivingByDonerId)
 donteRouter.get("/myDonition/money",authentication,getdonationOrderMoneyByUserId)
 donteRouter.get("/myDonition/material",authentication,getdonationOrderMeterialByUserId)

donteRouter.put("/:id",updateDonerGiving)
donteRouter.delete("/:id",deletDonerGiving)
module.exports = donteRouter;


