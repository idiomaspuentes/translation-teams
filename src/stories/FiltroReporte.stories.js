import { FiltroReporte } from "../components/FiltroReporte"
export default {
    title: 'Filtro Reporte',
    component: FiltroReporte,
};
const datos = [
    {
        nombre: "Ester",
        porcentaje: 55,
        paso: 6,
        traductores: ["Abel Perez", "Maria Fátima", "Gabriel Penagos"]
    },
    {
        nombre: "Efesios",
        porcentaje: 40,
        paso: 4,
        traductores: ["Carlos Ruiz", "Sofia Rodriguez"]
    },
    {
        nombre: "Esdras",
        porcentaje: 30,
        paso: 5,
        traductores: ["Roberto Bermudez", "Ana Fernandez"]
    },
    {
        nombre: "Tito",
        porcentaje: 100,
        paso: 8,
        traductores: ["Santiago Mendoza", "Laura Vargas"]
    },
    {
        nombre: "Jonás",
        porcentaje: 100,
        paso: 8,
        traductores: ["Hugo Rivera", "Daniela Higaldo"]
    },
    {
        nombre: "3era Juan",
        porcentaje: 100,
        paso: 8,
        traductores: ["Omar Lopez", "Nina Jimenez"]
    },
    {
        nombre: "Rut",
        porcentaje: 100,
        paso: 8,
        traductores: ["Julio Cabrera", "Sabrina Araujo"]
    },
    {
        nombre: "Apocalipsis",
        porcentaje: 0,
        paso: 1,
        traductores: ["Jose Vallenilla", "Valentina Herrera"]
    }
]

export const Example = {
    args: {
        titulo: "Proyecto",
        datos: datos

    }
}