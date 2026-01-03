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
    numberphone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "phone number most be 10 digits"]
    },
    password: {
        type: String,
        required: true,
        min: 10
    },
    image: {
        type: String,
        required:false
    }
});

const USER_MODEL = model("user", USER_SCHEMA);
module.exports = USER_MODEL
