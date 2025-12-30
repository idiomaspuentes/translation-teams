import EstadoActivo from "./EstadoActivo";
function ProyectoActivo() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border-1 border-solid border-[#f1f5f9] transition-[all_0.2s] cursor-pointer hover:shadow-2xl hover:transform-[translateY(-2px)] ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#1e293b]">
            Manual de Usuario - App Mobile
          </h3>
          <div className="text-sm text-[#64748b] mb-1">Cliente: TechCorp</div>
          <div className="text-xs text-[#6366f1] font-medium">ES → EN</div>
        </div>
        <EstadoActivo />
      </div>

      <p className="text-[#64748b] text-sm/normal  mb-4">
        Traducción completa del manual de usuario para aplicación móvil,
        incluyendo capturas de pantalla y elementos de UI.
      </p>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2 font-medium">
          <span>Progreso General</span>
          <span>75%</span>
        </div>
        <div className="w-full h-2 bg-[#f1f5f9] rounded-sm overflow-hidden">
          <div
            className="h-full bg-[linear-gradient(90deg,_#3b82f6,_#1d4ed8)] transition-[width_0.3s_ease]"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(4,_1fr)] gap-4 mb-4">
        <div className="text-center">
          <div className="font-bold text-[#1e293b] text-sm">1,250</div>
          <div className="text-[0.625rem] text-[#64748b] mt-1">Palabras</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-[#1e293b] text-sm">12</div>
          <div className="text-[0.625rem] text-[#64748b] mt-1">Tareas</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-[#1e293b] text-sm">3</div>
          <div className="text-[0.625rem] text-[#64748b] mt-1">Traductores</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-[#1e293b] text-sm">5</div>
          <div className="text-[0.625rem] text-[#64748b] mt-1">Días rest.</div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex mr-2">
          <div className="w-6 h-6 rounded-[50%] bg-[linear-gradient(135deg,_#f59e0b,_#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold border-2 border-solid bg-white -ml-2 first:ml-0">
            MG
          </div>
          <div className="w-6 h-6 rounded-[50%] bg-[linear-gradient(135deg,_#f59e0b,_#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold border-2 border-solid bg-white -ml-2 first:ml-0">
            JL
          </div>
          <div className="w-6 h-6 rounded-[50%] bg-[linear-gradient(135deg,_#f59e0b,_#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold border-2 border-solid bg-white -ml-2 first:ml-0">
            CR
          </div>
        </div>
        <span className="text-xs text-[#64748b]">3 miembros</span>
      </div>

      <div className="flex justify-between text-xs text-[#64748b] mb-4">
        <span>Inicio: 15 Nov 2024</span>
        <span>Entrega: 30 Nov 2024</span>
      </div>
      {/* Component button small */}
      <div className="flex gap-2">
        <a
          href="project-detail.html?id=1"
          className="py-2 px-2 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-[#3b82f6] text-white hover:bg-[#2563eb] text-[0.875rem]"
        >
          Ver Detalles
        </a>
        <a
          href="project-tasks.html?id=1"
          className="py-2 px-4 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] text-[0.875rem]"
        >
          Tareas
        </a>
        <a
          href="kanban.html?project=1"
          className="py-2 px-4 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] text-[0.875rem]"
        >
          Kanban
        </a>
      </div>
    </div>
  );
}

export default ProyectoActivo;
