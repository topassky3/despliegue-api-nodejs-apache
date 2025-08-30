// Simulación de una base de datos en memoria
let tasks = [
    { id: 1, title: 'Tarea de ejemplo 1 (desde la API)', description: 'Esta es una tarea de prueba', status: 'pendiente' },
    { id: 2, title: 'Tarea de ejemplo 2 (desde la API)', description: 'Otra tarea de prueba', status: 'completada' },
];
let nextTaskId = 3;

// Servicio para obtener todas las tareas
const findAllTasks = () => {
    return tasks;
};

// Servicio para agregar una nueva tarea
const addTask = (taskData) => {
    const newTask = {
        id: nextTaskId++,
        ...taskData,
        status: 'pendiente',
    };
    tasks.push(newTask);
    return newTask;
};

module.exports = {
    findAllTasks,
    addTask,
};