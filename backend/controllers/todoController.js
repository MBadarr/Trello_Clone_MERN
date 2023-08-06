const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

const getAllTasks = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get All Tasks' });
});

const createTask = asyncHandler(async (req, res) => {


    // const { title, description } = req.body;

    // if (!title || !description) {
    //     throw new Error('Please provide title and description');
    // }

    // const newTask = await Todo.create({ title, description });

    res.status(201).json({ message: 'Create Task' });
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

const completedTask = asyncHandler(async (req, res) => {
    // const { id } = req.params;

    // const task = await Todo.findById(id);

    // if (!task) {
    //     res.status(404);
    //     throw new Error('Task not found');
    // }

    // task.completed = !task.completed;

    // await task.save();

    res.status(200).json({ message: 'Task completed successfully' });
});

module.exports = { getAllTasks, createTask, updateTask, deleteTask, completedTask }