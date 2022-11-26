const express = require("express");
const { sendInvitationEmail, thanksEmail } = require("../controller/email");
const { getemaildoner, getUserMaxdonationOrder } = require("../middlewares/email");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");


const emailRouter = express.Router();
emailRouter.get('/',getemaildoner)
emailRouter.post("/invitation",authentication,getemaildoner,sendInvitationEmail)
emailRouter.get("/thanks",authentication,getUserMaxdonationOrder,thanksEmail)


module.exports = emailRouter