// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // Importamos los estilos CSS

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Encabezado */}
      <header className="bg-white text-blue-700 italic text-center text-2xl py-5 px-0 border-b-2 border-solid border-gray-300">
        Gestor de Traducciones
      </header>

      {/* Contenedor principal */}
      <div className="flex overflow-hidden flex-1">
        {/* Menú lateral izquierdo */}
        <aside className="w-56 bg-gray-100 p-5 text-red-700 overflow-y-auto border-r border-solid border-gray-300 font-mono text-lg">
          <nav>
            <ul className="list-none">
              <li className="mb-2"><Link className="no-underline text-inherit hover:underline" to="/">Dashboard</Link></li>
              <li className="mb-2"><Link className="no-underline text-inherit hover:underline" to="/translations">Traducciones</Link></li>
              <li className="mb-2"><Link className="no-underline text-inherit hover:underline" to="/progress">Progreso</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Panel principal */}
        <main className="p-5 bg-white m-px text-black overflow-y-auto flex-1 rounded-[10px] border-width-1 border-solid border-gray-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

