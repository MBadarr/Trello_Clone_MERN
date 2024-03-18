const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

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

    // completedAt: {
    //     type: Date
    // },
    // updatedAt: {
    //     type: Date

    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
    {
        timestamps: true
    }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;