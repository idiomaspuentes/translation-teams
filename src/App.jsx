import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProjectCard } from './components/ProjectCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectCard />
    </>
  )
}

export default App
