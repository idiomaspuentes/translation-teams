import { func } from "prop-types";
import React, { use, useRef, useState } from "react";
import "../index.css";
import BtnOutline from "../components/BtnOutline";
import BtnPrimary from "../components/BtnPrimary";
import ProyectoTarjeta from "../components/ProyectoTarjeta";
import ProyectoCompletado from "../components/ProyectoCompletado";
import ProyectoRevision from "../components/ProyectoRevision";
import ProyectoActivo from "../components/ProyectoActivo";
import FilaProyecto from "../components/FilaProyecto";
import FilaProyectoActivo from "../components/FilaProyectoActivo";
import FilaProyectoRevision from "../components/FilaProyectoRevision";
import FilaProyectoCompletado from "../components/FilaProyectoCompletado";

export default function Proyectos() {
  {
    /* onClick  */
  }

  const [activeContent, setActiveContent] = useState("content1");

  const handleclick = (contentId) => {
    setActiveContent(contentId);
  };
  console.log(activeContent);

  return (
    <>
      {/* Contenido Principal */}
      <main className="p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <div className="flex gap-4">
            <BtnOutline name={"importar"} />
            <BtnOutline name={"Exportar"} />
            <BtnPrimary name={"+ Nuevo Proyecto"} />
          </div>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="flex gap-4 mb-8 items-center flex-wrap">
          <input
            type="text"
            className="flex-1 m-w-[400px] p-3 border-1 border-solid border-[#d1d5db] rounded-lg text-base"
            placeholder="Buscar proyectos..."
          />
          <select className="p-3 border-1 border-solid border-[#d1d5db] rounded-lg bg-white min-w-[150px]">
            <option>Todos los estados</option>
            <option>Activos</option>
            <option>En revisión</option>
            <option>Completados</option>
            <option>Pausados</option>
          </select>
          <select className="p-3 border-1 border-solid border-[#d1d5db] rounded-lg bg-white min-w-[150px]">
            <option>Todos los clientes</option>
            <option>TechCorp</option>
            <option>DevTools</option>
            <option>Marketing Pro</option>
            <option>Global Inc</option>
          </select>
          <select className="p-3 border-1 border-solid border-[#d1d5db] rounded-lg bg-white min-w-[150px]">
            <option>Todos los idiomas</option>
            <option>Español → Inglés</option>
            <option>Inglés → Francés</option>
            <option>Alemán → Español</option>
          </select>
          <div className="flex border-1 border-solid border-[#d1d5db] rounded-lg overflow-hidden">
            {/* pasarlo a componente icon - revisar el active */}
            <button
              className={`py-2 px-4 border-none cursor-pointer  active:bg-[#3b82f6] ${
                activeContent === "content1" && "bg-[#3b82f6]"
              }`}
              onClick={() => handleclick("content1")}
            >
              📊
            </button>
            <button
              className={`py-2 px-4 border-none  cursor-pointer active:bg-[#3b82f6] ${
                activeContent === "content2" && "bg-[#3b82f6]"
              }`}
              onClick={() => handleclick("content2")}
            >
              📋
            </button>
          </div>
        </div>
        {/* Vista de Tarjetas */}
        {activeContent === "content1" && (
          <div
            className="grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] gap-6"
            id="cards-view"
          >
            <ProyectoTarjeta />
            <ProyectoCompletado />
            <ProyectoActivo />
            <ProyectoRevision />
            <ProyectoActivo />
            <ProyectoRevision />
          </div>
        )}

        {/* Vista de Tabla --*/}
        {activeContent === "content2" && (
          <div
            className="bg-white rounded-xl shadow-2xs border-1 border-solid border-[#f1f5f9] overflow-hidden "
            id="table-view"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="hover:bg-[#f8fafc]">
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Proyecto
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Cliente
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Idiomas
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Progreso
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Palabras
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Equipo
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Entrega
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Estado
                    </th>
                    <th className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9] bg-[#f8fafc] font-medium text-[#374151] text-sm">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <FilaProyecto
                    proyecto={"Manual de Usuario - App Mobile"}
                    fechaCreado={"Creado: 15 Nov 2024"}
                    cliente={"TechCorp"}
                    idiomas={"ES → EN"}
                    progreso={"75%"}
                    palabras={"1,250"}
                    equipo={"3"}
                    fechaEntrega={"30 Nov 2024"}
                    estado={"Activo"}
                  />
                  <FilaProyectoActivo />
                  <FilaProyectoRevision />
                  <FilaProyectoCompletado />
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
