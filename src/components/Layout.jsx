// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // Importamos los estilos CSS

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Encabezado */}
      <header className="layout-header">
        Gestor de Traducciones
      </header>

      {/* Contenedor principal */}
      <div className="layout-main">
        {/* Menú lateral izquierdo */}
        <aside className="layout-sidebar">
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/translations">Traducciones</Link></li>
              <li><Link to="/progress">Progreso</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Panel principal */}
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;