import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import './App.css';

// URL de nuestra API. Es una buena práctica definirla como una constante.
const API_URL = 'http://localhost:4000/api';

function App() {
  // El estado inicial ahora es un array vacío, se llenará desde la API.
  const [tasks, setTasks] = useState([]);

  // useEffect se ejecuta cuando el componente se monta para obtener las tareas.
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${API_URL}/tasks`);
        const data = await response.json();
        setTasks(data); // Actualizamos el estado con los datos de la API.
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };

    fetchTasks();
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez.

  // Función para agregar una nueva tarea a través de la API.
  const handleAddTask = async (taskData) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData), // Convertimos el objeto a un string JSON.
      });

      const newTaskFromApi = await response.json(); // La API devuelve la tarea creada.

      // Actualizamos el estado del frontend con la nueva tarea que vino de la API.
      setTasks((prevTasks) => [...prevTasks, newTaskFromApi]);

    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage tasks={tasks} />} />
        <Route
          path="agregar"
          element={<AddTaskPage onAddTask={handleAddTask} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
