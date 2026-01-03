const express = require("express");
const { createuser, login } = require("../controllers/user.controller");


const userRout = express.Router();

userRout.post("/createuser", createuser)
userRout.post("/login", login)
module.exports = userRout;