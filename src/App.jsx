import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProjectCard } from './components/ProjectCard.jsx'
import { SummaryCard } from './components/SummaryCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectCard porcentaje="75" titulo="Manual de Usuario - App Mobile" subtitulo="ES → EN | Cliente: TechCorp" numeroPalabras="1,250"
        numeroTraductores="3" numeroDiasRestantes="5" estado="Activo" tablero="Kanban" />
      <ProjectCard porcentaje="92" titulo="Documentación API" subtitulo="EN → FR, DE | Cliente: DevTools" numeroPalabras="2,840"
        numeroTraductores="5" numeroDiasRestantes="2" estado="Revisión" tablero="Kanban" />
      <ProjectCard porcentaje="100" titulo="Sitio Web Corporativo" subtitulo="DE → ES | Cliente: Global Inc" numeroPalabras="5,120"
        numeroTraductores="4" estado="Completado" tablero="Descargar" entregado={true} />
      <ProjectCard porcentaje="45" titulo="Campaña Marketing Q4" subtitulo="EN → ES, PT | Cliente: Marketing Pro" numeroPalabras="890"
        numeroTraductores="2" numeroDiasRestantes="8" estado="Activo" tablero="Kanban" />

      <SummaryCard numero="24" titulo="Proyectos Activos" subtitulo="+12% este mes" color="green" />
      <SummaryCard numero="156" titulo="Tareas Pendientes" subtitulo="-8% esta semana" color="red" />
      <SummaryCard numero="89%" titulo="Progreso Promedio" subtitulo="+5% este mes" color="green" />
      <SummaryCard numero="12" titulo="Colaboradores" subtitulo="+2 nuevos" color="green" />
    </>
  )
}

export default App
