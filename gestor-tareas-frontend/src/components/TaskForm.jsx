import React, { useState } from 'react';
import './TaskForm.css'; // <- QUITA LOS '//' DE ESTA LÍNEA

function TaskForm({ onTaskSubmit }) {
  // ... (el resto del código sigue igual)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      alert('El título es obligatorio.');
      return;
    }

    onTaskSubmit({ title, description });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ej: Preparar la clase de React"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ej: Detallar el manejo del estado con useState"
        />
      </div>
      <button type="submit" className="submit-button">
        Guardar Tarea
      </button>
    </form>
  );
}

export default TaskForm;