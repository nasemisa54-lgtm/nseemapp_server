const USER_MODEL = require("../modules/user.model");


const createuser = async (req, res) => {

    const {
        name,
        lastname,
        age,
        numberphone,
        password,
        image,
        email,
    } = req.body

    try {
        const user = await USER_MODEL.create({
            name,
            lastname,
            age,
            numberphone,
            password,
            image,
            email,
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
    try {
        const { email, password } = req.body;
        const user = await USER_MODEL.findOne({ email });
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
                message: "welcome "+user.name
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

