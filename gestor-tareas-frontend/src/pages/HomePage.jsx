import React from 'react';
import TaskList from '../components/TaskList'; // Importa el nuevo componente

function HomePage({ tasks }) { // Recibe la lista de tareas como prop
  return (
    <div className="homepage-content">
      <h2>Dashboard de Tareas</h2>
      <p>
        Aquí puedes ver todas tus tareas actuales.
      </p>
      <TaskList tasks={tasks} /> {/* Renderiza la lista de tareas */}
    </div>
  );
}

export default HomePage;