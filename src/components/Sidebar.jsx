import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; 

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
        {/* Menú lateral izquierdo */}
        <aside className="w-56 bg-gray-100 p-5 text-red-700 overflow-y-auto border-r border-solid border-gray-300 font-mono text-lg">
          <nav>
            <ul className="list-none">
              <li className="mb-2">
                <Link
                  className="no-underline text-inherit hover:underline"
                  to="/"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="no-underline text-inherit hover:underline"
                  to="/reportes"
                >
                  Reportes
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="no-underline text-inherit hover:underline"
                  to="/kanban"
                >
                  Kanban
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="no-underline text-inherit hover:underline"
                  to="/proyectos"
                >
                  Proyectos
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Panel principal */}
        <main className="bg-white m-px text-black overflow-y-auto flex-1 rounded-[10px] border-width-1 border-solid border-gray-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;



