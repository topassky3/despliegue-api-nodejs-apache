import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

function AddTaskPage({ onAddTask }) {
  const navigate = useNavigate();

  // Convertimos la función a 'async' para poder usar 'await'.
  const handleTaskSubmit = async (taskData) => {
    try {
      // Esperamos a que la función que llama a la API termine.
      await onAddTask(taskData);

      alert('¡Tarea agregada con éxito!');
      navigate('/'); // Redirigimos solo después de que la tarea se ha guardado.
    } catch (error) {
      console.error("Error en el envío del formulario:", error);
      alert('Hubo un error al agregar la tarea.');
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <TaskForm onTaskSubmit={handleTaskSubmit} />
    </div>
  );
}

export default AddTaskPage;
