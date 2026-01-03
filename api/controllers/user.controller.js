const USER_MODEL = require("../modules/user.model");


const createuser = async (req, res) => {

    const {
        name,
        lastname,
        age,
        numberphone,
        password,
        image,
    } = req.body

    try {
        const user = await USER_MODEL.create({
            name,
            lastname,
            age,
            numberphone,
            password,
            image,
        })
        res.status(200).json({
            user,
            success: true,
            message: "welcome " + name
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });

    }
};
const login = async (req, res) => {
    const { numberphone, password, } = req.body;
    try {
        const { phonenumber, password } = req.body;
        const user = await USER_MODEL.findOne({ numberphone });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "user not found"
            });
            return;
        }
        if (user.password === password) {
            res.status(200).json({
                user,
                success: true,
                message: "wrong password"
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "wrong password"
            });


        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        }
        )
    }
};

module.exports = {
    createuser,
    login,
};

