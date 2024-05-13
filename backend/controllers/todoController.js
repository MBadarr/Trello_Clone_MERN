const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

const getAllTasks = asyncHandler(async (req, res) => {
    try {
        const todos = await Todo.find({ user_id: req.user.id });
        res.status(201).json({ message: 'Todo List', todos: todos });
    }

    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }

});


const createTask = asyncHandler(async (req, res) => {

    try {
        const { title, description, completed } = req.body;

        const todo = await Todo.create({
            title,
            description,
            completed,
            user_id: req.user.id,
        });
        console.log("todo", todo);
        res.status(201).json({ message: 'Todo Created', title: todo.title, description: todo.description, completed: todo.completed });
    }

    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const updateTask = asyncHandler(async (req, res) => {

    // const { id } = req.params;

    // const task = await Todo.findById(id);

    // if (!task) {
    //     res.status(404);
    //     throw new Error('Task not found');
    // }

    // await task.remove();

    res.status(200).json({ message: 'Task updated successfully' });
});


const deleteTask = asyncHandler(async (req, res) => {

    // const { id } = req.params;

    // const task = await Todo.findById(id);

    // if (!task) {
    //     res.status(404);
    //     throw new Error('Task not found');
    // }

    // await task.remove();

    res.status(200).json({ message: 'Task deleted successfully' });
});

const getTask = asyncHandler(async (req, res) => {
    // const { id } = req.params;

    // const task = await Todo.findById(id);

    // if (!task) {
    //     res.status(404);
    //     throw new Error('Task not found');
    // }

    // task.completed = !task.completed;

    // await task.save();

    // res.status(200).json({ message: 'Task completed successfully' });
});

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask }