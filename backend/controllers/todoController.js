const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

// Get All Tasks
const getAllTasks = asyncHandler(async (req, res) => {
    try {
        const tasks = await Todo.find({});
        res.status(200).json({ message: 'Todo List', tasks: tasks });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Create Todo
const createTask = asyncHandler(async (req, res) => {

    try {
        const { title, description, completed } = req.body;

        const todo = await Todo.create({
            title,
            description,
            completed,
            user_id: req.user.id,
        });
        res.status(201).json({ message: 'Todo Created', id: todo._id, title: todo.title, description: todo.description, completed: todo.completed });
    }

    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update Todo
const updateTask = asyncHandler(async (req, res) => {

    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(404);
        throw new Error('Todo not found');
    }

    const updateTask = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(201).json({ message: 'Todo Updated Successfully', id: updateTask._id, title: updateTask.title, description: updateTask.description, completed: updateTask.completed });
});

// Delete Todo
const deleteTask = asyncHandler(async (req, res) => {

    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(404);
        throw new Error('Todo not found');
    }

    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Todo deleted successfully}` });
});

module.exports = { getAllTasks, createTask, updateTask, deleteTask }