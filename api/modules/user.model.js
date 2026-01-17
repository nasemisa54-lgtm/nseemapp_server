const { Schema, model } = require("mongoose");


const USER_SCHEMA = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
        max: 60,
        max: 2
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: true,
        min: 10
    },
    image: {
        type: String,
        required: false
    }
});

const USER_MODEL = model("user", USER_SCHEMA);
module.exports = USER_MODEL
