import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet /> {/* Aquí se renderizará el contenido de cada página */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;