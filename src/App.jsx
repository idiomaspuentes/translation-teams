import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Reportes from "./pages/Reportes";
import Kanban from "./pages/Kanban";
import Dashboard from "./pages/Dashboard";
import Proyecto from "./pages/Proyecto";
import SubtareasDelProyecto from "./pages/SubtareasDelProyecto";
import ReporteProyecto from "./pages/ReporteProyecto";
import PaginaPrincipalProyecto from "./pages/PaginaPrincipalProyecto";
import TareasProyecto from "./pages/TareasProyecto";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/proyectos" element={<PaginaPrincipalProyecto />} />
          <Route path="/subtareas" element={<SubtareasDelProyecto />} />
          <Route path="/reporte-proyecto" element={<ReporteProyecto />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/tareas" element={<TareasProyecto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
