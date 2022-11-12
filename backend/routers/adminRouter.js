const express = require("express");
const { getNumNeedCase, getNumdonationOrder, getUserNumdonationOrder } = require("../controller/admin");



const adminRouter = express.Router();

adminRouter.get("/numcase",getNumNeedCase)
adminRouter.get("/numorderDonation",getNumdonationOrder)
adminRouter.get("/numorderDonationUser",getUserNumdonationOrder)

module.exports = adminRouter