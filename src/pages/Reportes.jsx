import FiltrosReportes from "../components/FiltrosReportes";
import BotoneraReportes from "../components/BotoneraReportes";
import ReportCard from "../components/ReportCard";

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
    },
  ];

  const filtroClientes = [
    {
      nombre: "TechCorp",
    },
    {
      nombre: "DevTools",
    },
    {
      nombre: "MarketingPro",
    },
  ];

  const filtroIdiomas = [
    {
      nombre: "Español - Inglés",
    },
    {
      nombre: "Inglés - Francés",
    },
    {
      nombre: "Francés - Alemán",
    },
  ];

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
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h2>Reportes y Analytics</h2>
        <BotoneraReportes />
      </div>
      <section>
        <FiltrosReportes
          filtros={{
            proyectos: filtroProyectos,
            clientes: filtroClientes,
            idiomas: filtroIdiomas,
            traductores: filtroTraductores,
          }}
          onChange={() => {}}
        />
        <div className="flex w-full gap-8">
          <ReportCard
            numero={24}
            tipo={"proyectos-completados"}
            avance={"↗ +15% vs mes anterior"}
          />
          <ReportCard
            numero={"125,430"}
            tipo={"palabras-traducidas"}
            avance={"↗ +8% vs mes anterior"}
          />
          <ReportCard
            numero={"4.2"}
            tipo={"dias-entrega"}
            avance={"↘ -12% vs mes anterior"}
          />
          <ReportCard
            numero={"96.8%"}
            tipo={"indice-calidad"}
            avance={"↗ +2% vs mes anterior"}
          />
        </div>
      </section>
    </>
  );
}

export default Reportes;
