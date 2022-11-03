const express = require("express");
const { createNewCategory, getCategory } = require("../controller/category");



const categoryRouter = express.Router();

categoryRouter.post("/", createNewCategory);
categoryRouter.get("/", getCategory);
module.exports = categoryRouter;
