const express = require("express");
const { sendInvitationEmail } = require("../controller/email");
const { getemaildoner } = require("../middlewares/email");
const authentication = require("../middlewares/authentication");


const emailRouter = express.Router();
emailRouter.get('/',getemaildoner)
emailRouter.post("/invitation",authentication,getemaildoner,sendInvitationEmail)


module.exports = emailRouter