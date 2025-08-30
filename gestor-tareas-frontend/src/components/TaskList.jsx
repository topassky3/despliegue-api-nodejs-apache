import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks }) {
  // Si no hay tareas, muestra un mensaje
  if (!tasks || tasks.length === 0) {
    return <p>No hay tareas pendientes. ¡Agrega una nueva!</p>;
  }

  // Si hay tareas, muéstralas usando el componente TaskItem
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;