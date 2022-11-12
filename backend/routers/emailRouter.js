const express = require("express");
const { sendInvitationEmail } = require("../controller/email");
const { getemaildoner } = require("../middlewares/email");



const emailRouter = express.Router();
emailRouter.get('/',getemaildoner)
emailRouter.post("/invitation",getemaildoner,sendInvitationEmail)


module.exports = emailRouter