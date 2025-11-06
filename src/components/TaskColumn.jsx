import TaskCard from "./TaskCard.jsx";

export default function TaskColumn({ children, titulo, numero, agregar }) {
  return (
    <div className="flex-1 pt-[1rem] pr-[2rem] pb-[2rem] pl-[2rem] overflow-x-auto overflow-y-hidden">
      <div className="flex gap-6 h-full min-w-max ">
        {/* Columna - borrador */}
        <div className="w-[300px] flex flex-col bg-[#f8fafc] rounded-xl border border-solid border-[#e2e8f0] ">
          {/* columna - encabezado */}
          <div className="px-4 py-6  rounded-[0.75rem_0.75rem_0_0] border-solid border-b-1 border-[#e2e8f0] flex justify-between items-center">
            <div className="font-semibold flex items-center gap-[0.5rem]">
              <div className={`w-2 h-2 bg-[#6b7280] rounded-[50%]`}></div>
              {titulo}
            </div>
            <span className="bg-[#e2e8f0] text-[#64748b] p-[0.25rem_0.5rem] rounded-[1rem] text-xs font-medium">
              {numero}
            </span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Tarjeta - tarea */}
            {children}
            {/* Boton - agregar */}
            <a
              href="#"
              className="flex items-center justify-center gap-1 p-3 bg-white border-2 border-dashed border-[#d1d5db] rounded-lg text-[#64748b] no-underline transition-[all_0.2s] text-sm hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#f8fafc]"
            >
              <span>+</span>
              {agregar}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
