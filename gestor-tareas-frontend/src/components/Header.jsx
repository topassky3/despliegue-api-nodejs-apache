import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // <- QUITA LOS '//' DE ESTA LÍNEA

function Header() {
  // ... (el resto del código sigue igual)
  return (
    <header className="app-header">
      <NavLink to="/" className="header-logo">
        <h1>Gestor de Tareas</h1>
      </NavLink>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/agregar">Agregar Tarea</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;