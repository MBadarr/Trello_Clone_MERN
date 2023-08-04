const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name"]
    },

    email: {
        type: String,
        required: [true, "Please add the email"],
        unique: true,
    },

    phone: {
        type: String,
        required: [true, "Please add the phone number"]

    },
    password: {
        type: String,
        required: [true, "Please add the password"]
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
