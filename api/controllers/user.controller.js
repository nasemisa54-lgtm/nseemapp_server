const USER_MODEL = require("../modules/user.moduie")


const creatuser = (req, res) => {
const {firstname, lastname, image, username }=req.body

USER_MODEL.create({
firstname,
lastname,
image,
username,
})
.then((createres) => {
 res.status(200).json(createres)
})
.catch((e) =>
res.status(500).json({
error:true,
errorMessage:e }));
};

module.exports ={
    creatuser,
};

