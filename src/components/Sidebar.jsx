import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import {
  ClipboardPlus,
  FolderKanban,
  LayoutDashboard,
  SquareKanban,
} from "lucide-react";

const Sidebar = ({}) => {
  return (
    <aside className="w-70 bg-white py-5 text-gray-500 overflow-y-auto border-r border-solid border-gray-300 text-md font-normal">
      <nav>
        <ul className="list-none pt-5 ">
          <li className=" p-3 hover:border-r-3 border-blue-500 hover:bg-gray-100 hover:text-blue-500">
            <Link className="no-underline text-inherit cursor-pointer " to="/">
              <span className="flex gap-4">
                <LayoutDashboard />
                Dashboard
              </span>
            </Link>
          </li>
          <li className=" p-3 hover:border-r-3 border-blue-500 hover:bg-gray-100 hover:text-blue-500">
            <Link
              className="no-underline text-inherit cursor-pointer"
              to="/Kanban"
            >
              <span className="flex gap-4">
                <SquareKanban />
                Tablero kanban
              </span>
            </Link>
          </li>
          <li className=" p-3 hover:border-r-3 border-blue-500 hover:bg-gray-100 hover:text-blue-500">
            <Link
              className="no-underline text-inherit cursor-pointer"
              to="/proyectos"
            >
              <span className="flex gap-4">
                <FolderKanban />
                Proyectos
              </span>
            </Link>
          </li>
          <li className=" p-3 hover:border-r-3 border-blue-500 hover:bg-gray-100 hover:text-blue-500">
            <Link
              className="no-underline text-inherit cursor-pointer"
              to="/reportes"
            >
              <span className="flex gap-4">
                <ClipboardPlus />
                Reportes
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
