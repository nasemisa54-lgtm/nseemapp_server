const express = require("express");
const { createOrder, getOrders, updateOrder, deleteOrder } = require("../controllers/order.controller");
const orderRout = express.Router();

orderRout.post("/createOrder", createOrder);
orderRout.post("/getOrders", getOrders);
orderRout.post("/updateOrder", updateOrder);
orderRout.delete("/deleteOrder", deleteOrder);

module.exports = orderRout;