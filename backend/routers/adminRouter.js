const express = require("express");
const { getNumNeedCase, getNumdonationOrder, getUserNumdonationOrder, getNumActiveCase } = require("../controller/admin");



const adminRouter = express.Router();

adminRouter.get("/numcase",getNumNeedCase)
adminRouter.get("/numorderDonation",getNumdonationOrder)
adminRouter.get("/numorderDonationUser",getUserNumdonationOrder)
adminRouter.get("/numberofActiv",getNumActiveCase)

module.exports = adminRouter