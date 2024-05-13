const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter the name"]
    },

    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Please enter the password"]
    },

    confirm_password: {
        type: String,
        required: [true, "Please enter the confirm password"]
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
