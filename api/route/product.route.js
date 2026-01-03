const express = require("express");
const { createproduct, findAllProduct } = require("../controllers/product.controller");
const productRout = express.Router();

productRout.post("/createproduct", createproduct)
productRout.post("/findAllProduct", findAllProduct)

module.exports = productRout;