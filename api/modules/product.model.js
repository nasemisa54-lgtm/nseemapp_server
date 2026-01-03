const { Schema, model } = require("mongoose");
const PRODUCT_SCHEMA = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    image: {
        type: String,
    },
    category: {
        type: String
    },
})

const PRODUCT_MODEL = model("product", PRODUCT_SCHEMA);
module.exports = PRODUCT_MODEL