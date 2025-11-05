import { func } from "prop-types";
import "../index.css";
export default function Proyectos() {
  function BtnAoutline({ name }) {
    return (
      <a className="py-3 px-6 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb]">
        {name}
      </a>
    );
  }

  function BtnPrimary({ name }) {
    return (
      <a className="py-3 px-6 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-[#3b82f6] text-white hove:bg-[#2563eb]">
        {name}
      </a>
    );
  }

  {
    /*  .status-active {
            background: #dcfce7;
            color: #166534;
        }

        .status-review {
            background: #fef3c7;
            color: #92400e;
        }

        .status-completed {
            background: #dbeafe;
            color: #1e40af;
        }

        .status-paused {
            background: #f1f5f9;
            color: #64748b;
        } */
  }
  return (
    <>
      {/* Contenido Principal */}
      <main className="p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <div className="flex gap-4">
            <BtnAoutline name="importar" />
            <BtnAoutline name="Exportar" />
            <BtnPrimary name="+ Nuevo Proyecto" />
          </div>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="flex gap-4 mb-8 items-center flex-wrap">
          <input
            type="text"
            className="flex-1 m-w-[400px] p-3 border-1 border-solid border-[#d1d5db] rounded-lg text-base"
            placeholder="Buscar proyectos..."
          />
          <select className="p-3 border-1 border-solid border-[#d1d5db] rounded-lg bg-white min-w-[150px]">
            <option>Todos los estados</option>
            <option>Activos</option>
            <option>En revisión</option>
            <option>Completados</option>
            <option>Pausados</option>
          </select>
          <select className="p-3 border-1 border-solid border-[#d1d5db] rounded-lg bg-white min-w-[150px]">
            <option>Todos los clientes</option>
            <option>TechCorp</option>
            <option>DevTools</option>
            <option>Marketing Pro</option>
            <option>Global Inc</option>
          </select>
          <select className="p-3 border-1 border-solid border-[#d1d5db] rounded-lg bg-white min-w-[150px]">
            <option>Todos los idiomas</option>
            <option>Español → Inglés</option>
            <option>Inglés → Francés</option>
            <option>Alemán → Español</option>
          </select>
          <div className="flex border-1 border-solid border-[#d1d5db] rounded-lg overflow-hidden">
            {/* pasarlo a componente icon - revisar el active */}
            <button className="py-2 px-4 border-none bg-white cursor-pointer transition-[all_0.2s] active:bg-[#3b82f6] active:text-white">
              📊
            </button>
            <button className="py-2 px-4 border-none bg-white cursor-pointer transition-[all_0.2s]">
              📋
            </button>
          </div>
        </div>

        {/* Vista de Tarjetas */}
        <div
          className="grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] gap-6"
          id="cards-view"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border-1 border-solid border-[#f1f5f9] transition-[all_0.2s] cursor-pointer hover:shadow-2xl hover:transform-[translateY(-2px)] ">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#1e293b]">
                  Manual de Usuario - App Mobile
                </h3>
                <div className="text-sm text-[#64748b] mb-1">
                  Cliente: TechCorp
                </div>
                <div className="text-xs text-[#6366f1] font-medium">
                  ES → EN
                </div>
              </div>
              <span className="py-1 px-3 rounded-2xl text-xs font-medium bg-[#dcfce7] text-[#166534]">
                Activo
              </span>
            </div>

            <p className="text-[#64748b] text-sm/normal  mb-4">
              Traducción completa del manual de usuario para aplicación móvil,
              incluyendo capturas de pantalla y elementos de UI.
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>Progreso General</span>
                <span>75%</span>
              </div>
              <div className="w-full h-2 bg-[#f1f5f9] rounded-sm overflow-hidden">
                <div
                  className="h-full bg-[linear-gradient(90deg,_#3b82f6,_#1d4ed8)] transition-[width_0.3s_ease]"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-[repeat(4,_1fr)] gap-4 mb-4">
              <div className="text-center">
                <div className="font-bold text-[#1e293b] text-sm">1,250</div>
                <div className="text-[0.625rem] text-[#64748b] mt-1">
                  Palabras
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#1e293b] text-sm">12</div>
                <div className="text-[0.625rem] text-[#64748b] mt-1">
                  Tareas
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#1e293b] text-sm">3</div>
                <div className="text-[0.625rem] text-[#64748b] mt-1">
                  Traductores
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#1e293b] text-sm">5</div>
                <div className="text-[0.625rem] text-[#64748b] mt-1">
                  Días rest.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex mr-2">
                <div className="w-6 h-6 rounded-[50%] bg-[linear-gradient(135deg,_#f59e0b,_#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold border-2 border-solid bg-white -ml-2">
                  MG
                </div>
                <div className="w-6 h-6 rounded-[50%] bg-[linear-gradient(135deg,_#f59e0b,_#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold border-2 border-solid bg-white -ml-2">
                  JL
                </div>
                <div className="w-6 h-6 rounded-[50%] bg-[linear-gradient(135deg,_#f59e0b,_#d97706)] flex items-center justify-center text-white text-[0.625rem] font-bold border-2 border-solid bg-white -ml-2">
                  CR
                </div>
              </div>
              <span className="team-count">3 miembros</span>
            </div>

            <div className="project-dates">
              <span>Inicio: 15 Nov 2024</span>
              <span>Entrega: 30 Nov 2024</span>
            </div>

            <div className="project-actions">
              <a
                href="project-detail.html?id=1"
                className="btn btn-small btn-primary"
              >
                Ver Detalles
              </a>
              <a
                href="project-tasks.html?id=1"
                className="btn btn-small btn-outline"
              >
                Tareas
              </a>
              <a
                href="kanban.html?project=1"
                className="btn btn-small btn-outline"
              >
                Kanban
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">Documentación API</h3>
                <div className="project-client">Cliente: DevTools</div>
                <div className="project-languages">EN → FR, DE</div>
              </div>
              <span className="project-status status-review">Revisión</span>
            </div>

            <p className="project-description">
              Traducción de documentación técnica de API REST, incluyendo
              ejemplos de código y guías de implementación.
            </p>

            <div className="project-progress">
              <div className="progress-label">
                <span>Progreso General</span>
                <span>92%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: " 92%" }}></div>
              </div>
            </div>

            <div className="project-stats">
              <div className="stat-item">
                <div className="stat-value">2,840</div>
                <div className="stat-label">Palabras</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">18</div>
                <div className="stat-label">Tareas</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5</div>
                <div className="stat-label">Traductores</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2</div>
                <div className="stat-label">Días rest.</div>
              </div>
            </div>

            <div className="project-team">
              <div className="team-avatars">
                <div className="team-avatar">MG</div>
                <div className="team-avatar">JL</div>
                <div className="team-avatar">CR</div>
                <div className="team-avatar">LS</div>
                <div className="team-avatar">+1</div>
              </div>
              <span className="team-count">5 miembros</span>
            </div>

            <div className="project-dates">
              <span>Inicio: 1 Nov 2024</span>
              <span>Entrega: 25 Nov 2024</span>
            </div>

            <div className="project-actions">
              <a
                href="project-detail.html?id=2"
                className="btn btn-small btn-primary"
              >
                Ver Detalles
              </a>
              <a
                href="project-tasks.html?id=2"
                className="btn btn-small btn-outline"
              >
                Tareas
              </a>
              <a
                href="kanban.html?project=2"
                className="btn btn-small btn-outline"
              >
                Kanban
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">Sitio Web Corporativo</h3>
                <div className="project-client">Cliente: Global Inc</div>
                <div className="project-languages">DE → ES</div>
              </div>
              <span className="project-status status-completed">
                Completado
              </span>
            </div>

            <p className="project-description">
              Localización completa del sitio web corporativo, incluyendo
              contenido marketing y páginas institucionales.
            </p>

            <div className="project-progress">
              <div className="progress-label">
                <span>Progreso General</span>
                <span>100%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
            </div>

            <div className="project-stats">
              <div className="stat-item">
                <div className="stat-value">5,120</div>
                <div className="stat-label">Palabras</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">25</div>
                <div className="stat-label">Tareas</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4</div>
                <div className="stat-label">Traductores</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">✓</div>
                <div className="stat-label">Entregado</div>
              </div>
            </div>

            <div className="project-team">
              <div className="team-avatars">
                <div className="team-avatar">MG</div>
                <div className="team-avatar">JL</div>
                <div className="team-avatar">CR</div>
                <div className="team-avatar">LS</div>
              </div>
              <span className="team-count">4 miembros</span>
            </div>

            <div className="project-dates">
              <span>Inicio: 10 Oct 2024</span>
              <span>Entregado: 5 Nov 2024</span>
            </div>

            <div className="project-actions">
              <a
                href="project-detail.html?id=3"
                className="btn btn-small btn-primary"
              >
                Ver Detalles
              </a>
              <a
                href="project-reports.html?id=3"
                className="btn btn-small btn-outline"
              >
                Reporte
              </a>
              <button className="btn btn-small btn-outline">Descargar</button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">Campaña Marketing Q4</h3>
                <div className="project-client">Cliente: Marketing Pro</div>
                <div className="project-languages">EN → ES, PT</div>
              </div>
              <span className="project-status status-active">Activo</span>
            </div>

            <p className="project-description">
              Traducción de materiales de campaña publicitaria para el cuarto
              trimestre, incluyendo copy y elementos creativos.
            </p>

            <div className="project-progress">
              <div className="progress-label">
                <span>Progreso General</span>
                <span>45%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div className="project-stats">
              <div className="stat-item">
                <div className="stat-value">890</div>
                <div className="stat-label">Palabras</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Tareas</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2</div>
                <div className="stat-label">Traductores</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Días rest.</div>
              </div>
            </div>

            <div className="project-team">
              <div className="team-avatars">
                <div className="team-avatar">MG</div>
                <div className="team-avatar">JL</div>
              </div>
              <span className="team-count">2 miembros</span>
            </div>

            <div className="project-dates">
              <span>Inicio: 20 Nov 2024</span>
              <span>Entrega: 15 Dic 2024</span>
            </div>

            <div className="project-actions">
              <a
                href="project-detail.html?id=4"
                className="btn btn-small btn-primary"
              >
                Ver Detalles
              </a>
              <a
                href="project-tasks.html?id=4"
                className="btn btn-small btn-outline"
              >
                Tareas
              </a>
              <a
                href="kanban.html?project=4"
                className="btn btn-small btn-outline"
              >
                Kanban
              </a>
            </div>
          </div>
        </div>

        {/* Vista de Tabla --*/}
        <div className="projects-table" id="table-view">
          <div className="table-content">
            <table>
              <thead>
                <tr>
                  <th>Proyecto</th>
                  <th>Cliente</th>
                  <th>Idiomas</th>
                  <th>Progreso</th>
                  <th>Palabras</th>
                  <th>Equipo</th>
                  <th>Entrega</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-project-info">
                      <div className="table-project-title">
                        Manual de Usuario - App Mobile
                      </div>
                      <div className="table-project-meta">
                        Creado: 15 Nov 2024
                      </div>
                    </div>
                  </td>
                  <td>TechCorp</td>
                  <td>ES → EN</td>
                  <td>75%</td>
                  <td>1,250</td>
                  <td>3</td>
                  <td>30 Nov 2024</td>
                  <td>
                    <span className="project-status status-active">Activo</span>
                  </td>
                  <td>
                    <div style={{ display: "flex; gap: 0.5rem;" }}>
                      <a
                        href="project-detail.html?id=1"
                        className="btn btn-small btn-outline"
                      >
                        Ver
                      </a>
                      <a
                        href="project-tasks.html?id=1"
                        className="btn btn-small btn-outline"
                      >
                        Tareas
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-project-info">
                      <div className="table-project-title">
                        Documentación API
                      </div>
                      <div className="table-project-meta">
                        Creado: 1 Nov 2024
                      </div>
                    </div>
                  </td>
                  <td>DevTools</td>
                  <td>EN → FR, DE</td>
                  <td>92%</td>
                  <td>2,840</td>
                  <td>5</td>
                  <td>25 Nov 2024</td>
                  <td>
                    <span className="project-status status-review">
                      Revisión
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex; gap: 0.5rem;" }}>
                      <a
                        href="project-detail.html?id=2"
                        className="btn btn-small btn-outline"
                      >
                        Ver
                      </a>
                      <a
                        href="project-tasks.html?id=2"
                        className="btn btn-small btn-outline"
                      >
                        Tareas
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-project-info">
                      <div className="table-project-title">
                        Sitio Web Corporativo
                      </div>
                      <div className="table-project-meta">
                        Creado: 10 Oct 2024
                      </div>
                    </div>
                  </td>
                  <td>Global Inc</td>
                  <td>DE → ES</td>
                  <td>100%</td>
                  <td>5,120</td>
                  <td>4</td>
                  <td>Entregado</td>
                  <td>
                    <span className="project-status status-completed">
                      Completado
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex; gap: 0.5rem;" }}>
                      <a
                        href="project-detail.html?id=3"
                        className="btn btn-small btn-outline"
                      >
                        Ver
                      </a>
                      <a
                        href="project-reports.html?id=3"
                        className="btn btn-small btn-outline"
                      >
                        Reporte
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
