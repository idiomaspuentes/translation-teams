import { FiltroReporte } from "../components/FiltroReporte";
import { useRef } from "react";
export function FiltrosReportes({ filtros, onChange }) {
  const filtrosRef = useRef({
    proyectos: "Todos",
    clientes: "Todos",
    idiomas: "Todos",
    traductores: "Todos",
  });
  return (
    <div className="flex justify-between bg-white rounded-2xl shadow-[0_0_6px_0_rgba(0,0,0,0.15)] p-6 gap-4">
      <FiltroReporte
        titulo={`Proyecto`}
        datos={filtros.proyectos}
        onChange={(seleccionado) => {
          filtrosRef.current.proyectos = seleccionado.target.value;
          onChange(filtrosRef.current);
        }}
      />
      <FiltroReporte
        titulo={`Cliente`}
        datos={filtros.clientes}
        onChange={(seleccionado) => {
          filtrosRef.current.clientes = seleccionado.target.value;
          onChange(filtrosRef.current);
        }}
      />
      <FiltroReporte
        titulo={`Idioma`}
        datos={filtros.idiomas}
        onChange={(seleccionado) => {
          filtrosRef.current.idiomas = seleccionado.target.value;
          onChange(filtrosRef.current);
        }}
      />
      <FiltroReporte
        titulo={`Traductor`}
        datos={filtros.traductores}
        onChange={(seleccionado) => {
          filtrosRef.current.traductores = seleccionado.target.value;
          onChange(filtrosRef.current);
        }}
      />
    </div>
  );
}
export default FiltrosReportes;
