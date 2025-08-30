const express = require('express');
const router = express.Router();

// Importamos los controladores
const taskController = require('../controllers/task.controller');

// Definimos las rutas y las asociamos con su controlador
// GET /api/tasks -> Obtener todas las tareas
router.get('/tasks', taskController.getAllTasks);

// POST /api/tasks -> Crear una nueva tarea
router.post('/tasks', taskController.createTask);

module.exports = router;