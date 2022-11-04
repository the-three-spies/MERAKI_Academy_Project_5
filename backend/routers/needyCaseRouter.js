const express = require("express");
const {  getAllNeedyCase, createNeedyCase,getNeedyCasebyCategoryId,UpdateNeedyCaseByCaseId, getNeedyCaseByUserId, deletNeedyCaseByCaseID, } = require("../controller/needyCase");
const authentication = require("../middlewares/authentication");




const needyCaseRouter = express.Router();

needyCaseRouter.post("/",authentication, createNeedyCase);
needyCaseRouter.get("/", getAllNeedyCase);
needyCaseRouter.get("/myCase",authentication,getNeedyCaseByUserId);
needyCaseRouter.delete("/:id",deletNeedyCaseByCaseID)
needyCaseRouter.get("/needyCategory/:id", getNeedyCasebyCategoryId);
needyCaseRouter.put("/:id",authentication, UpdateNeedyCaseByCaseId);

module.exports = needyCaseRouter;
