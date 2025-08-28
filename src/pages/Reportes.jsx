import FiltrosReportes from '../components/FiltrosReportes'

function Reportes() {
  const filtroProyectos = [
    {
      nombre: "Ester",
    },
    {
      nombre: "Efesios",
    },
    {
      nombre: "Esdras",
    },
    {
      nombre: "Tito",
    },
    {
      nombre: "Jonás",
    },
    {
      nombre: "3era Juan",
    },
    {
      nombre: "Rut",
    },
    {
      nombre: "Apocalipsis",
    }
  ]

  const filtroClientes = [
    {
      nombre: "TechCorp",
    },
    {
      nombre: "DevTools",
    },
    {
      nombre: "MarketingPro",
    }
  ]

  const filtroIdiomas = [
    {
      nombre: "Español - Inglés",
    },
    {
      nombre: "Inglés - Francés",
    },
    {
      nombre: "Francés - Alemán",
    }
  ]

  const filtroTraductores = [
    {
      nombre: "Abel Perez",
    },
    {
      nombre: "Maria Fátima",
    },
    {
      nombre: "Gabriel Penagos",
    },
    {
      nombre: "Yasnela González",
    },
    {
      nombre: "Sofia Rodriguez",
    }
  ]
  return (
    <>
      <h2>Reportes y Analytics</h2>
      <section>
        <FiltrosReportes
          filtros={{
            proyectos: filtroProyectos,
            clientes: filtroClientes,
            idiomas: filtroIdiomas,
            traductores: filtroTraductores
          }}
          onChange={() => { }}
        />
      </section>
    </>
  )
}

export default Reportes;