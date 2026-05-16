const OrderModel = require("../modules/order.module");

const createOrder = async (req, res) => {
    try {
        console.log(req.body);

        const { products, totalAmount, user } = req.body;

        if (!products?.length) {
            return res.status(400).json({ message: "Order must contain products" });
        }

        const newOrder = await OrderModel.create({
            user,
            products,
            totalAmount
        });

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: "Database error", error: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        const data = await OrderModel.find(req.body || {})
            .populate("user", "email name")
            .populate("products._id");

        if (data && data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: 'No orders found' });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update method using req.body for everything
const updateOrder = async (req, res) => {
    try {
        const { id, ...updateData } = req.body; // Extracts id, collects everything else into updateData

        if (!id) {
            return res.status(400).json({ message: "Order ID is required in the body" });
        }

        const updatedOrder = await OrderModel.findByIdAndUpdate(
            id,
            { $set: updateData }, // Dynamically updates fields like status, totalAmount, etc.
            { new: true, runValidators: true }
        )
            .populate("user", "email name")
            .populate("products._id");

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Delete method using req.body
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        
        if (!id) {
            return res.status(400).json({ message: "Order ID is required in the body" });
        }

        const deletedOrder = await OrderModel.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { createOrder, getOrders, updateOrder, deleteOrder };