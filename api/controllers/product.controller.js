const PRODUCT_MODEL = require("../modules/product.model");

// 1. إنشاء منتج جديد
const createproduct = async (req, res) => {
    const {
        name,
        image,
        category,
        price,
    } = req.body

    try {
        const product = await PRODUCT_MODEL.create({
            name,
            price,
            category,
            image,
        })
        res.status(200).json({
            product,
            success: true,
            message: name + " created"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
};

// 2. جلب جميع المنتجات
const findAllProduct = async (req, res) => {
    try {
        const product = await PRODUCT_MODEL.find(req.body || {})
        res.status(200).json({
            product,
            success: true,
            message: "founded",
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
};

// 3. حذف منتج (الجديدة)
const DeleteProduct = async (req, res) => {
    try {
        const { _id } = req.body; // نأخذ المعرف من الطلب
        const productDeleted = await PRODUCT_MODEL.findByIdAndDelete(_id);

        res.status(200).json({
            success: !!productDeleted,
            message: !!productDeleted ? "Product Deleted Successfully 🗑️" : "Product not found 🕵️‍♂️",
            data: productDeleted
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
};

module.exports = {
    createproduct,
    findAllProduct,
    DeleteProduct // لا تنسى تصديرها هنا
}