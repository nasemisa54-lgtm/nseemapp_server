const express = require("express");
const { findAllProduct, DeleteProduct, createproduct } = require("../controllers/product.controller");
const productRout = express.Router();

productRout.post("/createproduct", createproduct)
productRout.post("/findAllProduct", findAllProduct)
productRout.delete("/DeleteProduct", DeleteProduct)

module.exports = productRout;