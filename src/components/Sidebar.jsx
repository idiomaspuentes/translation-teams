import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Sidebar = ({}) => {
  return (
    <aside className="w-70 bg-white p-5 text-blue-500 overflow-y-auto border-r border-solid border-gray-300 text-md font-normal">
      <nav>
        <ul className="list-none">
          <li className="mb-2">
            <Link
              className="no-underline text-inherit cursor-pointer hover:border-r-2 border-blue-500"
              to="/"
            >
              <span></span>Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="no-underline text-inherit cursor-pointer"
              to="/tableroKanban"
            >
              Tablero kanban
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="no-underline text-inherit cursor-pointer"
              to="/proyectos"
            >
              Proyectos
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="no-underline text-inherit cursor-pointer"
              to="/reportes"
            >
              Reportes
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
