import FiltrosReportes from "../components/FiltrosReportes";
import BotoneraReportes from "../components/BotoneraReportes";
import ReportCard from "../components/ReportCard";
import GraficosProductividad from "../components/GraficosProductividad";
import Tabla from "../components/Tabla";
import ProgresoDeProyectos from "../components/ProgresoDeProyectos";

function Reportes() {
  const rendimientoTraductores = [
    {
      nombre: "María García",
      proyectos: 8,
      palabrasMes: "15,240",
      promedioCalidad: "98.2%",
      promedio: "3.8 días",
      estado: "Activo",
    },
    {
      nombre: "Juan López",
      proyectos: 6,
      palabrasMes: "12,890",
      promedioCalidad: "96.5%",
      promedio: "4.2 días",
      estado: "Activo",
    },
    {
      nombre: "Carlos Ruiz",
      proyectos: 5,
      palabrasMes: "9,650",
      promedioCalidad: "97.8%",
      promedio: "3.5 días",
      estado: "En proyecto",
    },
    {
      nombre: "Laura Silva",
      proyectos: 4,
      palabrasMes: "8,420",
      promedioCalidad: "99.1%",
      promedio: "5.1 días",
      estado: "Sobrecargado",
    },
  ];
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
        <GraficosProductividad />
        <ProgresoDeProyectos />
        <Tabla datos={rendimientoTraductores} />
      </section>
    </>
  );
}

export default Reportes;
