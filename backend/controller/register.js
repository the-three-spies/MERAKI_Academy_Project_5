const pool = require("../models/db");

const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT);

const register = async (req, res) => {

};

module.exports = {
  register,
};
