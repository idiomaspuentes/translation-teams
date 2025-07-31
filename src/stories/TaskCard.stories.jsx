import React from 'react';
import { TaskCard } from "../components/TaskCard"

export default {
  title: 'Componentes/TaskCard',
  component: TaskCard,
};

const Template = (args) => <TaskCard {...args} />;

export const Ejemplo = Template.bind({});
Ejemplo.args = {
  id: 'TT-001',
  prioridad: 'Alta',
  titulo: 'Traducir sección "Introducción"',
  descripcion: 'Traducir la sección introductoria del manual (500 palabras aprox.)',
  etiquetas: ['ES→EN', 'Manual'],
  usuarioAsignado: 'María García',
  inicialesUsuario: 'MG',
  fechaVencimiento: 'Hoy',
};
