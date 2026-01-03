const PRODUCT_MODEL = require("../modules/product.model");



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


module.exports = {
    createproduct,
    findAllProduct
}