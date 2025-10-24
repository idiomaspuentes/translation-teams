export default function TaskColumn() {
  return (
    <div className="flex-1 pt-[1rem] pr-[2rem] pb-[2rem] pl-[2rem] overflow-x-auto overflow-y-hidden">
      <div className="flex gap-6 h-full min-w-max ">
        {/* Columna - borrador */}
        <div className="w-[300px] flex flex-col bg-[#f8fafc] rounded-xl border border-solid border-[#e2e8f0] ">
          {/* columna - encabezado */}
          <div className="px-4 py-6  rounded-[0.75rem_0.75rem_0_0] border-solid border-b-1 border-[#e2e8f0] flex justify-between items-center">
            <div className="font-semibold flex items-center gap-[0.5rem]">
              <div className={`w-2 h-2 bg-[#6b7280] rounded-[50%]`}></div>
              Borrador
            </div>
            <span className="bg-[#e2e8f0] text-[#64748b] p-[0.25rem_0.5rem] rounded-[1rem] text-xs font-medium">
              3
            </span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Tarjeta - tarea */}
            <div className="bg-white p-4 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-solid border-[#f1f5f9] cursor-grab transition-[all_0.2s] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:transform-[translateY(-1px)] active:cursor-grabbing">
              <div className="flex justify-between items-start mb-3">
                {/* Cambiar color de texto */}
                <span className="text-xs text-[#64748b] font-medium">
                  #TT-001
                </span>
                {/* Alta - media - baja */}
                {/* configurar 
                  .priority-high {  background: #fecaca; color: #dc2626;}
                  .priority-medium { background: #fed7aa; color: #ea580c; }
                  .priority-low {   background: #d1fae5; color: #059669; }*/}
                <span className="px-2 py-0.5 rounded-xl text-[0.625rem] font-medium bg-[#fecaca] text-[#dc2626]">
                  Alta
                </span>
              </div>
              {/* task-titulo */}
              <h4 className="font-[600px] mb-2 leading-[1.4]">
                Traducir sección "Introducción"
              </h4>
              {/* task descripcion */}
              <p className="text-[0.875rem] text-[#64748b] mb-3 leading-[1.4]">
                Traducir la sección introductoria del manual (500 palabras
                aprox.)
              </p>
              {/* task-tags */}
              <div className="flex gap-1 mx-0 my-1">
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  ES→EN
                </span>
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  Manual
                </span>
              </div>
              {/* task-progesos agregar en columna-proceso */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progreso</span>
                  <span>80%</span>
                </div>
                <div className="h-1 bg-[#f1f5f9] rounded-4xl overflow-hidden">
                  <div
                    className="h-full bg-[linear-gradient(90deg,#3b82f6,#1d4ed8)] transition-[width_0.3s_ease]"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* fin */}

              <div className="flex justify-between items-center text-xs text-[#64748b] ">
                <div className="flex items-center gap-2">
                  {/* asignar-avatar */}
                  <div className="w-5 h-5 rounded-[50%] bg-[linear-gradient(135deg,#f59e0b,#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold ">
                    MG
                  </div>
                  <span>María García</span>
                </div>
                <span>Vence: Hoy</span>
              </div>
            </div>
            {/* fin - Tarjeta - tarea */}

            {/* Boton - agregar */}
            <a
              href="#"
              className="flex items-center justify-center gap-1 p-3 bg-white border-2 border-dashed border-[#d1d5db] rounded-lg text-[#64748b] no-underline transition-[all_0.2s] text-sm hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#f8fafc]"
            >
              <span>+</span>
              Agregar tarea
            </a>
          </div>
        </div>

        {/* columna en proceso*/}
        <div className="w-[300px] flex flex-col bg-[#f8fafc] rounded-xl border border-solid border-[#e2e8f0] ">
          {/* columna - encabezado */}
          <div className="px-4 py-6  rounded-[0.75rem_0.75rem_0_0] border-solid border-b-1 border-[#e2e8f0] flex justify-between items-center">
            <div className="font-semibold flex items-center gap-[0.5rem]">
              <div className={`w-2 h-2 bg-[#f59e0b] rounded-[50%]`}></div>
              En Progreso
            </div>
            <span className="bg-[#e2e8f0] text-[#64748b] p-[0.25rem_0.5rem] rounded-[1rem] text-xs font-medium">
              3
            </span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Tarjeta - tarea */}
            <div className="bg-white p-4 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-solid border-[#f1f5f9] cursor-grab transition-[all_0.2s] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:transform-[translateY(-1px)] active:cursor-grabbing">
              <div className="flex justify-between items-start mb-3">
                {/* Cambiar color de texto */}
                <span className="text-xs text-[#64748b] font-medium">
                  #TT-001
                </span>
                {/* Alta - media - baja */}
                {/* configurar estos  
                  .priority-high {  background: #fecaca; color: #dc2626;}
                  .priority-medium { background: #fed7aa; color: #ea580c; }
                  .priority-low {   background: #d1fae5; color: #059669; }*/}
                <span className="px-2 py-0.5 rounded-xl text-[0.625rem] font-medium bg-[#fecaca] text-[#dc2626]">
                  Alta
                </span>
              </div>
              {/* task-titulo */}
              <h4 className="font-[600px] mb-2 leading-[1.4]">
                Traducir sección "Introducción"
              </h4>
              {/* task descripcion */}
              <p className="text-[0.875rem] text-[#64748b] mb-3 leading-[1.4]">
                Traducir la sección introductoria del manual (500 palabras
                aprox.)
              </p>
              {/* task-tags */}
              <div className="flex gap-1 mx-0 my-1">
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  ES→EN
                </span>
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  Manual
                </span>
              </div>
              {/* task-progesos agregar en columna-proceso */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progreso</span>
                  <span>80%</span>
                </div>
                <div className="h-1 bg-[#f1f5f9] rounded-4xl overflow-hidden">
                  <div
                    className="h-full bg-[linear-gradient(90deg,#3b82f6,#1d4ed8)] transition-[width_0.3s_ease]"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* fin */}

              <div className="flex justify-between items-center text-xs text-[#64748b] ">
                <div className="flex items-center gap-2">
                  {/* asignar-avatar */}
                  <div className="w-5 h-5 rounded-[50%] bg-[linear-gradient(135deg,#f59e0b,#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold ">
                    MG
                  </div>
                  <span>María García</span>
                </div>
                <span>Vence: Hoy</span>
              </div>
            </div>

            {/* Boton - agregar */}
            <a
              href="#"
              className="flex items-center justify-center gap-1 p-3 bg-white border-2 border-dashed border-[#d1d5db] rounded-lg text-[#64748b] no-underline transition-[all_0.2s] text-sm hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#f8fafc]"
            >
              <span>+</span>
              Agregar tarea
            </a>
          </div>
        </div>
        {/* columna en Revision*/}
        <div className="w-[300px] flex flex-col bg-[#f8fafc] rounded-xl border border-solid border-[#e2e8f0] ">
          {/* columna - encabezado */}
          <div className="px-4 py-6  rounded-[0.75rem_0.75rem_0_0] border-solid border-b-1 border-[#e2e8f0] flex justify-between items-center">
            <div className="font-semibold flex items-center gap-[0.5rem]">
              <div className={`w-2 h-2 bg-[#3b82f6] rounded-[50%]`}></div>
              Revisión
            </div>
            <span className="bg-[#e2e8f0] text-[#64748b] p-[0.25rem_0.5rem] rounded-[1rem] text-xs font-medium">
              3
            </span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Tarjeta - tarea */}
            <div className="bg-white p-4 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-solid border-[#f1f5f9] cursor-grab transition-[all_0.2s] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:transform-[translateY(-1px)] active:cursor-grabbing">
              <div className="flex justify-between items-start mb-3">
                {/* Cambiar color de texto */}
                <span className="text-xs text-[#64748b] font-medium">
                  #TT-001
                </span>
                {/* Alta - media - baja */}
                {/* configurar estos  
                  .priority-high {  background: #fecaca; color: #dc2626;}
                  .priority-medium { background: #fed7aa; color: #ea580c; }
                  .priority-low {   background: #d1fae5; color: #059669; }*/}
                <span className="px-2 py-0.5 rounded-xl text-[0.625rem] font-medium bg-[#fecaca] text-[#dc2626]">
                  Alta
                </span>
              </div>
              {/* task-titulo */}
              <h4 className="font-[600px] mb-2 leading-[1.4]">
                Traducir sección "Introducción"
              </h4>
              {/* task descripcion */}
              <p className="text-[0.875rem] text-[#64748b] mb-3 leading-[1.4]">
                Traducir la sección introductoria del manual (500 palabras
                aprox.)
              </p>
              {/* task-tags */}
              <div className="flex gap-1 mx-0 my-1">
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  ES→EN
                </span>
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  Manual
                </span>
              </div>
              {/* task-progesos agregar en columna-proceso */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progreso</span>
                  <span>80%</span>
                </div>
                <div className="h-1 bg-[#f1f5f9] rounded-4xl overflow-hidden">
                  <div
                    className="h-full bg-[linear-gradient(90deg,#3b82f6,#1d4ed8)] transition-[width_0.3s_ease]"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* fin */}

              <div className="flex justify-between items-center text-xs text-[#64748b] ">
                <div className="flex items-center gap-2">
                  {/* asignar-avatar */}
                  <div className="w-5 h-5 rounded-[50%] bg-[linear-gradient(135deg,#f59e0b,#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold ">
                    MG
                  </div>
                  <span>María García</span>
                </div>
                <span>Vence: Hoy</span>
              </div>
            </div>

            {/* Boton - agregar */}
            <a
              href="#"
              className="flex items-center justify-center gap-1 p-3 bg-white border-2 border-dashed border-[#d1d5db] rounded-lg text-[#64748b] no-underline transition-[all_0.2s] text-sm hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#f8fafc]"
            >
              <span>+</span>
              Agregar tarea
            </a>
          </div>
        </div>
        {/* columna en comletado*/}
        <div className="w-[300px] flex flex-col bg-[#f8fafc] rounded-xl border border-solid border-[#e2e8f0] ">
          {/* columna - encabezado */}
          <div className="px-4 py-6  rounded-[0.75rem_0.75rem_0_0] border-solid border-b-1 border-[#e2e8f0] flex justify-between items-center">
            <div className="font-semibold flex items-center gap-[0.5rem]">
              <div className={`w-2 h-2 bg-[#10b981] rounded-[50%]`}></div>
              Completado
            </div>
            <span className="bg-[#e2e8f0] text-[#64748b] p-[0.25rem_0.5rem] rounded-[1rem] text-xs font-medium">
              3
            </span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Tarjeta - tarea */}
            <div className="bg-white p-4 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-solid border-[#f1f5f9] cursor-grab transition-[all_0.2s] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:transform-[translateY(-1px)] active:cursor-grabbing">
              <div className="flex justify-between items-start mb-3">
                {/* Cambiar color de texto */}
                <span className="text-xs text-[#64748b] font-medium">
                  #TT-001
                </span>
                {/* Alta - media - baja */}
                {/* configurar estos  
                  .priority-high {  background: #fecaca; color: #dc2626;}
                  .priority-medium { background: #fed7aa; color: #ea580c; }
                  .priority-low {   background: #d1fae5; color: #059669; }*/}
                <span className="px-2 py-0.5 rounded-xl text-[0.625rem] font-medium bg-[#fecaca] text-[#dc2626]">
                  Alta
                </span>
              </div>
              {/* task-titulo */}
              <h4 className="font-[600px] mb-2 leading-[1.4]">
                Traducir sección "Introducción"
              </h4>
              {/* task descripcion */}
              <p className="text-[0.875rem] text-[#64748b] mb-3 leading-[1.4]">
                Traducir la sección introductoria del manual (500 palabras
                aprox.)
              </p>
              {/* task-tags */}
              <div className="flex gap-1 mx-0 my-1">
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  ES→EN
                </span>
                <span className="px-1.5 py-0.5 bg-[#f1f5f9] rounded-sm text-[0.625rem] text-[#64748b]">
                  Manual
                </span>
              </div>
              {/* task-progesos agregar en columna-proceso */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progreso</span>
                  <span>80%</span>
                </div>
                <div className="h-1 bg-[#f1f5f9] rounded-4xl overflow-hidden">
                  <div
                    className="h-full bg-[linear-gradient(90deg,#3b82f6,#1d4ed8)] transition-[width_0.3s_ease]"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* fin */}

              <div className="flex justify-between items-center text-xs text-[#64748b] ">
                <div className="flex items-center gap-2">
                  {/* asignar-avatar */}
                  <div className="w-5 h-5 rounded-[50%] bg-[linear-gradient(135deg,#f59e0b,#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold ">
                    MG
                  </div>
                  <span>María García</span>
                </div>
                <span>Vence: Hoy</span>
              </div>
            </div>

            {/* Boton - agregar */}
            <a
              href="#"
              className="flex items-center justify-center gap-1 p-3 bg-white border-2 border-dashed border-[#d1d5db] rounded-lg text-[#64748b] no-underline transition-[all_0.2s] text-sm hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#f8fafc]"
            >
              <span>+</span>
              Agregar tarea
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
