const express = require("express");
require("dotenv").config();
const cors = require("cors");
const loginRouter = require("./routers/loginRouter");
const registerRouter = require("./routers/registerRouter");
const roleRouter = require("./routers/roleRouter");
const donteRouter = require("./routers/donerGivingRouter");
const needyCaseRouter = require("./routers/needyCaseRouter");
const categoryRouter = require("./routers/categoryRouter");

const app = express();

















//built-in middleware
app.use(express.json());


app.use(cors());

// router middleware
app.use("/register", registerRouter);
app.use("/categories", categoryRouter);
app.use("/login", loginRouter);
app.use("/roles", roleRouter);
app.use("/dontes",donteRouter);
app.use("/needycase",needyCaseRouter);













const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
