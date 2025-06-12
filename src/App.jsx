import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Home = () => <h2>Bienvenido al Dashboard</h2>;
const Translations = () => <h2>Lista de Traducciones</h2>;
const Progress = () => <h2>Progreso del Equipo</h2>;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
