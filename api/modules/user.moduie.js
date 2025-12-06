const { Schema, model } = require("mongoose");


const USER_SCHEMA = new Schema ({
FIRSTNAME:String,
LASTNME:String,
Image:String,
USERNAME:String,
});

const USER_MODEL=model("user", USER_SCHEMA);
module.exports =USER_MODEL
