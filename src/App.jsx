import React from "react";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { SummaryCard } from "./components/SummaryCard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Reportes from "./pages/Reportes";
import Kanban from "./pages/Kanban";
import Proyectos from "./pages/Proyectos.jsx";

const Home = () => (
  <>
    <h2>Bienvenido al Dashboard</h2>
    <ProjectCard
      porcentaje="75"
      titulo="Manual de Usuario - App Mobile"
      subtitulo="ES → EN | Cliente: TechCorp"
      numeroPalabras="1,250"
      numeroTraductores="3"
      numeroDiasRestantes="5"
      estado="Activo"
      tablero="Kanban"
    />
    <ProjectCard
      porcentaje="92"
      titulo="Documentación API"
      subtitulo="EN → FR, DE | Cliente: DevTools"
      numeroPalabras="2,840"
      numeroTraductores="5"
      numeroDiasRestantes="2"
      estado="Revisión"
      tablero="Kanban"
    />
    <ProjectCard
      porcentaje="100"
      titulo="Sitio Web Corporativo"
      subtitulo="DE → ES | Cliente: Global Inc"
      numeroPalabras="5,120"
      numeroTraductores="4"
      estado="Completado"
      tablero="Descargar"
      entregado={true}
    />
    <ProjectCard
      porcentaje="45"
      titulo="Campaña Marketing Q4"
      subtitulo="EN → ES, PT | Cliente: Marketing Pro"
      numeroPalabras="890"
      numeroTraductores="2"
      numeroDiasRestantes="8"
      estado="Activo"
      tablero="Kanban"
    />

    <SummaryCard
      numero="24"
      titulo="Proyectos Activos"
      subtitulo="+12% este mes"
      color="green"
    />
    <SummaryCard
      numero="156"
      titulo="Tareas Pendientes"
      subtitulo="-8% esta semana"
      color="red"
    />
    <SummaryCard
      numero="89%"
      titulo="Progreso Promedio"
      subtitulo="+5% este mes"
      color="green"
    />
    <SummaryCard
      numero="12"
      titulo="Colaboradores"
      subtitulo="+2 nuevos"
      color="green"
    />
  </>
);
const Translations = () => <h2>Lista de Traducciones</h2>;
const Progress = () => <h2>Progreso del Equipo</h2>;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
