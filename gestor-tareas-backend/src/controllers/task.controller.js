// Importamos los servicios que necesitamos
const taskService = require('../services/task.service');

// Controlador para obtener todas las tareas
const getAllTasks = (req, res) => {
    try {
        const allTasks = taskService.findAllTasks();
        res.status(200).json(allTasks); // 200 OK
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
};

// Controlador para crear una nueva tarea
const createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'El título es obligatorio.' }); // 400 Bad Request
    }

    try {
        const newTask = taskService.addTask({ title, description });
        res.status(201).json(newTask); // 201 Created
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
};