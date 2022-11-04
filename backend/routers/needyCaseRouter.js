const express = require("express");
const {  getAllNeedyCase, createNeedyCase,getNeedyCaseByUserId,getNeedyCasebyCategoryId,UpdateNeedyCaseByCaseId } = require("../controller/needyCase");




const needyCaseRouter = express.Router();

needyCaseRouter.post("/", createNeedyCase);
needyCaseRouter.get("/", getAllNeedyCase);
needyCaseRouter.get("/myCase/:id", getNeedyCaseByUserId);
needyCaseRouter.get("/needyCategory/:id", getNeedyCasebyCategoryId);
needyCaseRouter.put("/:id", UpdateNeedyCaseByCaseId);

module.exports = needyCaseRouter;
