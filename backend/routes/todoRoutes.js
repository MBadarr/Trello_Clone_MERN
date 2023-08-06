const express = require('express');

const { getAllTasks, createTask, updateTask, deleteTask, completedTask } = require('../controllers/todoController');


const router = express.Router();

router.get('/', getAllTasks);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.put('/:id/completed', completedTask);


module.exports = router;