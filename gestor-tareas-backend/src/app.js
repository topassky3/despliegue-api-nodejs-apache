const express = require('express');
const cors = require('cors');

// Importamos nuestras rutas
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors()); // Permite la comunicación entre el frontend y el backend
app.use(express.json()); // Permite al servidor entender JSON que venga en las peticiones

// Rutas de la API
// Le decimos a nuestra app que use las rutas de tareas bajo el prefijo /api
app.use('/api', taskRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API del Gestor de Tareas!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});