const orderRout = require("./ordr.route");
const productRout = require("./product.route");
const userRout = require("./user.route");

const route = [
    userRout,
    productRout,
    orderRout,
]

module.exports=route    