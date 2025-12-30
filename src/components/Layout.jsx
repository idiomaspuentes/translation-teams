// src/components/Layout.jsx
import React from "react";
import "./Layout.css"; // Importamos los estilos CSS
import MenuPrincipal from "./MenuPrincipal";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Encabezado */}
      <MenuPrincipal iniciales="JD" />

      {/* Contenedor principal */}
      <div className="flex overflow-hidden flex-1">
        {/* Menú lateral izquierdo */}

        <Sidebar />

        {/* Panel principal */}
        <main className="bg-white m-px text-black overflow-y-auto flex-1 rounded-[10px] border-width-1 border-solid border-gray-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
