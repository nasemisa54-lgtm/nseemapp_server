const { Schema, model } = require("mongoose");

const ORDER_SCHEMA = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    products: [
        {
            _id: {
                type: Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            amount: {
                type: Number,
                default: 1
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    }
}, { timestamps: true });

const OrderModel = model("order", ORDER_SCHEMA);
module.exports = OrderModel;