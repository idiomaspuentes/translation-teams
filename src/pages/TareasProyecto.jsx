import BreadCrumbs from "../components/BreadCrumbs";
import TareasDelProyecto from "../components/TareasDelProyecto";
import BuscarTareasProyectos from "../components/BuscarTareasProyectos";
import ListaDeTareasDelProyecto from "../components/ListaDeTareasDelProyecto";
import { useState } from "react";
import TablaDeTareasDelProyecto from "../components/TablaDeTareasDelProyecto";

function TareasProyecto() {
  const [modo, setModo] = useState("bloques");
  const fases = [
    {
      titulo: "Traducción",
      descripcion: "Contenido principal del manual",
      numTareas: 6,
      numSubtareas: 18,
      porcentaje: 75,
      tareas: [
        {
          listo: true,
          tarea: "Traducir Capítulo 1: Introducción",
          subtitulo: "#TT-001",
          subtitulo2: "250 palabras",
          iniciales: "MG",
          asignado: "María García",
          prioridad: "Alta",
          estado: "Completado",
          vencimiento: "Completado",
          progreso: "100%",
        },
        {
          listo: false,
          tarea: "Traducir Capítulo 2: Instalación",
          subtitulo: "#TT-002",
          subtitulo2: "320 palabras",
          iniciales: "MG",
          asignado: "María García",
          prioridad: "Alta",
          estado: "En progreso",
          vencimiento: "Hoy",
          progreso: "90%",
          subtareas: [
            {
              listo: true,
              titulo: `Traducir sección "Requisitos del sistema"`,
              asignado: "María García",
            },
            {
              listo: false,
              titulo: `Traducir sección "Proceso de instalación"`,
              asignado: "María García",
            },

            {
              listo: false,
              titulo: `Traducir sección "Configuración inicial"`,
              asignado: "María García",
            },
          ],
        },
        {
          listo: false,
          tarea: "Traducir Capítulo 3: Configuración avanzada",
          subtitulo: "#TT-003",
          subtitulo2: "480 palabras",
          iniciales: "JL",
          asignado: "Juan López",
          prioridad: "Media",
          estado: "Borrador",
          vencimiento: "Mañana",
          progreso: "80%",
        },
        {
          listo: false,
          tarea: "Traducir FAQ - Preguntas frecuentes",
          subtitulo: "#TT-004",
          subtitulo2: "200 palabras",
          iniciales: "JL",
          asignado: "Juan López",
          prioridad: "Baja",
          estado: "Borrador",
          vencimiento: "3 días",
          progreso: "70%",
        },
      ],
    },
    // fase 2
    {
      titulo: "Revisión",
      descripcion: "Control de calidad y correcciones",
      numTareas: 3,
      numSubtareas: 8,
      porcentaje: 40,
      tareas: [
        {
          listo: false,
          tarea: "Revisar Capítulo 1: Introducción",
          subtitulo: "#TT-005",
          subtitulo2: "Revisión linguística",
          iniciales: "CR",
          asignado: "Carlos Ruiz",
          prioridad: "Alta",
          estado: "Revisión",
          vencimiento: "Hoy",
          progreso: "95%",
        },
        {
          listo: false,
          tarea: "Control de calidad - Terminología",
          subtitulo: "#TT-006",
          subtitulo2: "Verificación glosario",
          iniciales: "LS",
          asignado: "Laura Silva",
          prioridad: "Media",
          estado: "Borrador",
          vencimiento: "2 días",
          progreso: "85%",
        },
      ],
    },
    // fase 3
    {
      titulo: "Localización",
      descripcion: "Adaptación cultural y elementos visuales",
      numTareas: 3,
      numSubtareas: 12,
      porcentaje: 25,
      tareas: [
        {
          listo: false,
          tarea: "Localizar screenshots de UI",
          subtitulo: "#TT-007",
          subtitulo2: "24 imagenes",
          iniciales: "JL",
          asignado: "Juan López",
          prioridad: "Media",
          estado: "En progreso",
          vencimiento: "5 días",
          progreso: "60%",
        },
        {
          listo: false,
          tarea: "Adaptar formatos y medidas",
          subtitulo: "#TT-008",
          subtitulo2: "Unidades métricas",
          iniciales: "MG",
          asignado: "María García",
          prioridad: "Baja",
          estado: "Borrador",
          vencimiento: "1 semana",
          progreso: "40%",
        },
      ],
    },
  ];

  const tareas = fases.reduce((tareas, fase) => {
    tareas.push(...fase.tareas);
    return tareas;
  }, []);
  console.log(tareas);
  return (
    <>
      <div className="m-8">
        <BreadCrumbs
          links={[
            {
              titulo: "Proyectos",
              link: "http://milink.com",
            },
            {
              titulo: "Manual de Usuario - App Mobile",
              link: "http://milink.com",
            },
          ]}
          tituloActual={"Tareas"}
        />
        <div className="mt-8">
          <TareasDelProyecto
            tituloDelProyecto={"Manual de Usuario - App Mobile"}
            tareas={"12 tareas "}
            subtareas={"38 subtareas"}
          />
        </div>
        <div className="mt-8">
          <BuscarTareasProyectos
            onChange={(toggle) => {
              if (toggle) {
                setModo("bloques");
              } else {
                setModo("lista");
              }
            }}
          />
        </div>
        <div className="mt-8">
          {modo === "bloques" ? (
            <ListaDeTareasDelProyecto fases={fases} />
          ) : (
            <TablaDeTareasDelProyecto datos={tareas} />
          )}
        </div>
      </div>
    </>
  );
}

export default TareasProyecto;
