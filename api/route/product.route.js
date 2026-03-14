const express = require("express");
const { createproduct, findAllProduct, DeleteProduct } = require("../controllers/product.controller");
const productRout = express.Router();

productRout.post("/createproduct", createproduct)
productRout.post("/findAllProduct", findAllProduct)
productRout.post("/ DeleteProduct", DeleteProduct)

module.exports = productRout;