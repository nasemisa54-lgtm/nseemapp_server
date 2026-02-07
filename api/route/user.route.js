const express = require("express");
const { createuser, login, UpdateUser } = require("../controllers/user.controller");


const userRout = express.Router();

userRout.post("/createuser", createuser)
userRout.post("/UpdateUser",UpdateUser)
userRout.post("/login", login)
module.exports = userRout;