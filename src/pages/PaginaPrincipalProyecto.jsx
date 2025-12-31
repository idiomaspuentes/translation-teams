import MenuPrincipalProyecto from "../components/MenuPrincipalProyecto";
import BuscarProyectos from "../components/BuscarProyectos";
import ProyectoActivo from "../components/ProyectoActivo";
import ProyectoRevision from "../components/ProyectoRevision";
import ProyectoCompletado from "../components/ProyectoCompletado";
import ProyectoTarjeta from "../components/ProyectoTarjeta";
import TablaProyecto from "../components/TablaProyecto";
import { useState } from "react";

function IntegracionDeLaPaginaPrincipalDeProyectos() {
  const [modo, setModo] = useState("bloques");
  return (
    <>
      <div className="m-8">
        <MenuPrincipalProyecto />
      </div>
      <div className="m-8">
        <BuscarProyectos
          onChange={(toggle) => {
            if (toggle) {
              setModo("bloques");
            } else {
              setModo("lista");
            }
          }}
        />
      </div>

      {modo === "bloques" ? (
        <div className="flex">
          <div className="grid grid-cols-2 m-8 gap-6">
            <ProyectoActivo />
            <ProyectoCompletado />

            <ProyectoRevision />
            <ProyectoTarjeta />
          </div>
        </div>
      ) : (
        <div className="m-8">
          <TablaProyecto
            datos={[
              {
                proyecto: "Manual de usuario - App mobile",
                subtitulo: "Creado: 15 nov 2025",
                cliente: "TechCorp",
                idiomas: "ES - EN",
                progreso: "75",
                palabras: "1.250",
                equipo: "3",
                entrega: "30 nov 2025",
                estado: "En progreso",
              },
              {
                proyecto: "Documantación API",
                subtitulo: "Creado: 1 nov 2025",
                cliente: "DevTools",
                idiomas: "EN - FR,DE",
                progreso: "92",
                palabras: "2.840",
                equipo: "5",
                entrega: "25 nov 2025",
                estado: "Revisión",
              },
              {
                proyecto: "Sitio web corporativo",
                subtitulo: "Creado: 10 oct 2025",
                cliente: "Global inc",
                idiomas: "DE - ES",
                progreso: "100",
                palabras: "5.120",
                equipo: "4",
                entrega: "Entregado",
                estado: "Completado",
              },
            ]}
          />
        </div>
      )}
    </>
  );
}

export default IntegracionDeLaPaginaPrincipalDeProyectos;
