
import ProjectCard from "../components/ProjectCard"
export default {
    title: "ProjectCard",
    component: ProjectCard,
}

export const Activo = {
    args: {
        titulo: "Manual de Usuario - App Mobile",
        subtitulo: "ES → EN | Cliente: TechCorp",
        porcentaje: 75,
        numeroPalabras: 1250,
        numeroTraductores: 3,
        numeroDiasRestantes: 5,
        estado: "Activo",
        tablero: "Kanban",
        entregado: false,
    },
};

export const Revisión = {
    args: {
        titulo: "Documentación API",
        subtitulo: "EN → FR, DE | Cliente: DevTools",
        porcentaje: 92,
        numeroPalabras: 2840,
        numeroTraductores: 5,
        numeroDiasRestantes: 2,
        estado: "Revisión",
        tablero: "Kanban",
        entregado: false,
    },
};

export const Completado = {
    args: {
        titulo: "Sitio Web Corporativo",
        subtitulo: "DE → ES | Cliente: Global Inc",
        porcentaje: 100,
        numeroPalabras: 5120,
        numeroTraductores: 4,
        numeroDiasRestantes: 0,
        estado: "Completado",
        tablero: "Kanban",
        entregado: false,
    },
};