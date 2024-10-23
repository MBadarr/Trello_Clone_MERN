const express = require('express');

const { getAllTasks, createTask, updateTask, deleteTask, getTask } = require('../controllers/todoController');

const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

router.use(verifyToken);
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
