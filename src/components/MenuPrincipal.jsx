import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const MenuPrincipal = ({ iniciales }) => {
  return (
    <div className="py-4 px-8 border-b border-gray-200 shadow">
      <div className="flex justify-between">
        <div>
          <header className="bg-white text-blue-500 text-2xl font-bold">
            TranslationTeams
          </header>
        </div>
        <div>
          <div className="flex gap-4">
            <select className="grow px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Es Español</option>
              <option>Us English</option>
              <option>Fr Francais</option>
            </select>
            <span className="flex aspect-square">
              <span className="text-white text-sm bg-blue-400 bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full font-bold w-10 h-10 aspect-square flex justify-center items-center">
                {iniciales}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPrincipal;
