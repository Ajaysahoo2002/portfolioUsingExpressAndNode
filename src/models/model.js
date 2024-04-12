const mongoose = require("mongoose");
const validator = require("validator");

// define user schema
const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Credentials!!');
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10,
    },
    message: String
})

//define user collections
const Userdata = new mongoose.model('UserData', userShema);

module.exports = Userdata;