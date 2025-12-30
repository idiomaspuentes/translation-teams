import React from "react";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { SummaryCard } from "./components/SummaryCard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Reportes from "./pages/Reportes";
import Kanban from "./pages/Kanban";
import Dashboard from "./pages/Dashboard";
import Proyectos from "./pages/Proyectos";
import SubtareasDelProyecto from "./pages/SubtareasDelProyecto";
import ReporteProyecto from "./pages/ReporteProyecto";

const Translations = () => <h2>Lista de Traducciones</h2>;
const Progress = () => <h2>Progreso del Equipo</h2>;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/Subtareas" element={<SubtareasDelProyecto />} />
          <Route path="/ReporteProyecto" element={<ReporteProyecto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
