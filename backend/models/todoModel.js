const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    title: {
        type: String,
        required: [true, "Please enter the Title"]
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
},

    {
        timestamps: true
    }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;