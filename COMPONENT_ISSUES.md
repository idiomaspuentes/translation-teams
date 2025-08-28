# Issues para Componentes GUI - TranslationTeams

## 📋 Resumen de Componentes Identificados

Basado en el análisis de todos los wireframes, se han identificado los siguientes componentes reutilizables que deben ser creados en Storybook y luego integrados en las páginas correspondientes.

---

## 🧩 COMPONENTES CORE - STORYBOOK

### 1. **MetricCard Component**
**Issue #001 - Crear MetricCard en Storybook**

**Descripción:** Componente para mostrar métricas con valor, etiqueta y cambio porcentual.

**Props:**
- `value`: string | number - Valor principal a mostrar
- `label`: string - Etiqueta descriptiva
- `change`: object - { value: string, type: 'positive' | 'negative' | 'neutral', text: string }
- `icon`: string - Icono opcional
- `size`: 'small' | 'medium' | 'large'

**Variantes:**
- Con/sin icono
- Con/sin cambio porcentual
- Diferentes tamaños
- Estados de carga

**Usado en:**
- Dashboard (métricas principales)
- Project Reports (métricas del proyecto)
- Project Detail (estadísticas)

---

### 2. **ProjectCard Component**
**Issue #002 - Crear ProjectCard en Storybook**

**Descripción:** Tarjeta de proyecto con información completa, progreso y acciones.

**Props:**
- `project`: object - Datos del proyecto
- `showProgress`: boolean - Mostrar barra de progreso
- `showTeam`: boolean - Mostrar avatares del equipo
- `showActions`: boolean - Mostrar botones de acción
- `variant`: 'default' | 'compact' | 'detailed'
- `onAction`: function - Callback para acciones

**Variantes:**
- Vista completa vs compacta
- Con/sin equipo
- Con/sin acciones
- Diferentes estados (activo, completado, pausado)

**Usado en:**
- Dashboard (grid de proyectos)
- Projects (lista de proyectos)

---

### 3. **TaskCard Component**
**Issue #003 - Crear TaskCard en Storybook**

**Descripción:** Tarjeta de tarea para tablero Kanban y listas.

**Props:**
- `task`: object - Datos de la tarea
- `showAssignee`: boolean - Mostrar asignado
- `showProgress`: boolean - Mostrar progreso
- `showTags`: boolean - Mostrar etiquetas
- `draggable`: boolean - Habilitar drag & drop
- `variant`: 'kanban' | 'list' | 'compact'

**Variantes:**
- Kanban vs lista
- Con/sin progreso
- Con/sin asignado
- Diferentes prioridades

**Usado en:**
- Kanban (tarjetas de tareas)
- Project Tasks (lista de tareas)
- Task Detail (subtareas)

---

### 4. **ProgressBar Component**
**Issue #004 - Crear ProgressBar en Storybook**

**Descripción:** Barra de progreso con etiquetas y diferentes estilos.

**Props:**
- `value`: number - Porcentaje (0-100)
- `showLabel`: boolean - Mostrar etiqueta
- `showPercentage`: boolean - Mostrar porcentaje
- `size`: 'small' | 'medium' | 'large'
- `color`: 'primary' | 'success' | 'warning' | 'danger'
- `animated`: boolean - Animación

**Variantes:**
- Diferentes tamaños
- Con/sin etiquetas
- Diferentes colores
- Animada vs estática

**Usado en:**
- Todas las páginas (progreso de proyectos/tareas)

---

### 5. **UserAvatar Component**
**Issue #005 - Crear UserAvatar en Storybook**

**Descripción:** Avatar de usuario con iniciales, imagen y estados.

**Props:**
- `user`: object - Datos del usuario
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `showName`: boolean - Mostrar nombre
- `showStatus`: boolean - Mostrar estado online
- `clickable`: boolean - Habilitar click
- `variant`: 'circle' | 'square'

**Variantes:**
- Diferentes tamaños
- Con/sin imagen
- Con/sin nombre
- Con/sin estado

**Usado en:**
- Header (usuario actual)
- Team sections (miembros del equipo)
- Task assignments (asignados)

---

### 6. **StatusBadge Component**
**Issue #006 - Crear StatusBadge en Storybook**

**Descripción:** Badge para mostrar estados con colores y variantes.

**Props:**
- `status`: string - Estado a mostrar
- `variant`: 'default' | 'outline' | 'solid'
- `color`: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: boolean - Mostrar icono

**Variantes:**
- Diferentes colores por estado
- Con/sin icono
- Outline vs solid
- Diferentes tamaños

**Usado en:**
- Projects (estado de proyectos)
- Tasks (estado de tareas)
- Kanban (estados de columnas)

---

### 7. **DataTable Component**
**Issue #007 - Crear DataTable en Storybook**

**Descripción:** Tabla de datos con sorting, filtros y paginación.

**Props:**
- `columns`: array - Configuración de columnas
- `data`: array - Datos a mostrar
- `sortable`: boolean - Habilitar ordenamiento
- `filterable`: boolean - Habilitar filtros
- `paginated`: boolean - Habilitar paginación
- `selectable`: boolean - Habilitar selección
- `actions`: array - Acciones por fila

**Variantes:**
- Con/sin sorting
- Con/sin filtros
- Con/sin paginación
- Con/sin selección múltiple

**Usado en:**
- Projects (vista de tabla)
- Project Tasks (vista de tabla)
- Reports (tablas de datos)

---

### 8. **FilterBar Component**
**Issue #008 - Crear FilterBar en Storybook**

**Descripción:** Barra de filtros con búsqueda y selectores.

**Props:**
- `filters`: array - Configuración de filtros
- `searchPlaceholder`: string - Placeholder de búsqueda
- `onFilterChange`: function - Callback de cambios
- `showSearch`: boolean - Mostrar búsqueda
- `showViewToggle`: boolean - Mostrar toggle de vista

**Variantes:**
- Con/sin búsqueda
- Con/sin toggle de vista
- Diferentes tipos de filtros

**Usado en:**
- Dashboard (filtros de proyectos)
- Projects (filtros y búsqueda)
- Project Tasks (filtros de tareas)

---

### 9. **ActivityTimeline Component**
**Issue #009 - Crear ActivityTimeline en Storybook**

**Descripción:** Timeline de actividades con iconos y timestamps.

**Props:**
- `activities`: array - Lista de actividades
- `showIcons`: boolean - Mostrar iconos
- `showTimestamps`: boolean - Mostrar timestamps
- `maxItems`: number - Máximo de items a mostrar
- `variant`: 'default' | 'compact'

**Variantes:**
- Completa vs compacta
- Con/sin iconos
- Con/sin timestamps

**Usado en:**
- Project Detail (actividad reciente)
- Task Detail (timeline de tarea)

---

### 10. **FileList Component**
**Issue #010 - Crear FileList en Storybook**

**Descripción:** Lista de archivos con iconos, metadatos y acciones.

**Props:**
- `files`: array - Lista de archivos
- `showActions`: boolean - Mostrar acciones
- `showMetadata`: boolean - Mostrar metadatos
- `allowUpload`: boolean - Permitir subida
- `variant`: 'list' | 'grid'

**Variantes:**
- Lista vs grid
- Con/sin acciones
- Con/sin metadatos
- Con/sin upload

**Usado en:**
- Project Detail (archivos del proyecto)
- Task Detail (recursos de tarea)

---

### 11. **CommentSection Component**
**Issue #011 - Crear CommentSection en Storybook**

**Descripción:** Sección de comentarios con formulario y lista.

**Props:**
- `comments`: array - Lista de comentarios
- `allowComments`: boolean - Permitir nuevos comentarios
- `showAvatars`: boolean - Mostrar avatares
- `maxComments`: number - Máximo a mostrar
- `onAddComment`: function - Callback nuevo comentario

**Variantes:**
- Con/sin formulario
- Con/sin avatares
- Diferentes límites

**Usado en:**
- Task Detail (comentarios de tarea)

---

### 12. **KanbanColumn Component**
**Issue #012 - Crear KanbanColumn en Storybook**

**Descripción:** Columna de Kanban con header, contador y drop zone.

**Props:**
- `title`: string - Título de la columna
- `count`: number - Número de items
- `status`: string - Estado de la columna
- `tasks`: array - Tareas en la columna
- `onDrop`: function - Callback drop
- `allowAdd`: boolean - Permitir agregar

**Variantes:**
- Diferentes estados
- Con/sin contador
- Con/sin botón agregar

**Usado en:**
- Kanban (columnas del tablero)

---

### 13. **SubtaskList Component**
**Issue #013 - Crear SubtaskList en Storybook**

**Descripción:** Lista de subtareas con checkboxes y progreso.

**Props:**
- `subtasks`: array - Lista de subtareas
- `editable`: boolean - Permitir edición
- `showProgress`: boolean - Mostrar progreso general
- `onToggle`: function - Callback toggle subtarea
- `onAdd`: function - Callback agregar subtarea

**Variantes:**
- Editable vs solo lectura
- Con/sin progreso
- Con/sin agregar

**Usado en:**
- Task Detail (subtareas)
- Project Tasks (subtareas expandidas)

---

### 14. **ChartCard Component**
**Issue #014 - Crear ChartCard en Storybook**

**Descripción:** Contenedor para gráficos con header y opciones.

**Props:**
- `title`: string - Título del gráfico
- `options`: array - Opciones de visualización
- `children`: ReactNode - Contenido del gráfico
- `showOptions`: boolean - Mostrar opciones
- `loading`: boolean - Estado de carga

**Variantes:**
- Con/sin opciones
- Con/sin título
- Estados de carga

**Usado en:**
- Reports (gráficos de reportes)
- Project Reports (gráficos del proyecto)

---

### 15. **TeamMemberCard Component**
**Issue #015 - Crear TeamMemberCard en Storybook**

**Descripción:** Tarjeta de miembro del equipo con estadísticas.

**Props:**
- `member`: object - Datos del miembro
- `showStats`: boolean - Mostrar estadísticas
- `showRole`: boolean - Mostrar rol
- `variant`: 'default' | 'compact' | 'detailed'
- `clickable`: boolean - Habilitar click

**Variantes:**
- Diferentes niveles de detalle
- Con/sin estadísticas
- Con/sin rol

**Usado en:**
- Project Detail (equipo del proyecto)
- Project Reports (rendimiento del equipo)

---

## 🔧 LAYOUT COMPONENTS - STORYBOOK

### 16. **AppLayout Component**
**Issue #016 - Crear AppLayout en Storybook**

**Descripción:** Layout principal de la aplicación con sidebar y header.

**Props:**
- `children`: ReactNode - Contenido principal
- `showSidebar`: boolean - Mostrar sidebar
- `sidebarCollapsed`: boolean - Sidebar colapsado
- `currentPage`: string - Página actual

**Usado en:**
- Todas las páginas principales

---

### 17. **PageHeader Component**
**Issue #017 - Crear PageHeader en Storybook**

**Descripción:** Header de página con título, breadcrumbs y acciones.

**Props:**
- `title`: string - Título de la página
- `subtitle`: string - Subtítulo opcional
- `breadcrumbs`: array - Breadcrumbs
- `actions`: array - Acciones del header
- `showBreadcrumbs`: boolean - Mostrar breadcrumbs

**Usado en:**
- Todas las páginas de contenido

---

## 📄 ISSUES DE INTEGRACIÓN - PÁGINAS

### 18. **Dashboard Page Integration**
**Issue #018 - Integrar componentes en Dashboard**

**Componentes a integrar:**
- MetricCard (métricas principales)
- ProjectCard (grid de proyectos)
- FilterBar (filtros y búsqueda)
- AppLayout (layout principal)
- PageHeader (header de página)

**Tareas:**
- Crear página Dashboard con layout
- Integrar métricas con datos reales
- Implementar grid de proyectos
- Conectar filtros con estado
- Añadir navegación entre vistas

---

### 19. **Projects Page Integration**
**Issue #019 - Integrar componentes en Projects**

**Componentes a integrar:**
- ProjectCard (vista de tarjetas)
- DataTable (vista de tabla)
- FilterBar (filtros avanzados)
- AppLayout (layout principal)
- PageHeader (header con acciones)

**Tareas:**
- Crear página Projects con ambas vistas
- Implementar toggle entre vistas
- Conectar filtros y búsqueda
- Añadir acciones de proyecto
- Implementar navegación a detalles

---

### 20. **Project Detail Integration**
**Issue #020 - Integrar componentes en Project Detail**

**Componentes a integrar:**
- MetricCard (estadísticas del proyecto)
- ProgressBar (progreso general)
- TeamMemberCard (equipo)
- FileList (archivos y recursos)
- ActivityTimeline (actividad reciente)

**Tareas:**
- Crear layout de dos columnas
- Integrar información del proyecto
- Implementar sección de equipo
- Añadir gestión de archivos
- Conectar timeline de actividades

---

### 21. **Project Tasks Integration**
**Issue #021 - Integrar componentes en Project Tasks**

**Componentes a integrar:**
- TaskCard (tarjetas de tareas)
- SubtaskList (subtareas expandibles)
- FilterBar (filtros de tareas)
- DataTable (vista de tabla alternativa)
- ProgressBar (progreso por grupo)

**Tareas:**
- Implementar vista jerárquica
- Crear grupos expandibles
- Integrar subtareas
- Añadir filtros específicos
- Implementar vista de tabla

---

### 22. **Task Detail Integration**
**Issue #022 - Integrar componentes en Task Detail**

**Componentes a integrar:**
- ProgressBar (progreso de tarea)
- SubtaskList (subtareas)
- FileList (recursos)
- CommentSection (comentarios)
- ActivityTimeline (actividad)
- StatusBadge (estado de tarea)

**Tareas:**
- Crear layout detallado
- Implementar gestión de subtareas
- Añadir sistema de comentarios
- Integrar archivos de tarea
- Conectar timeline de actividad

---

### 23. **Kanban Page Integration**
**Issue #023 - Integrar componentes en Kanban**

**Componentes a integrar:**
- KanbanColumn (columnas del tablero)
- TaskCard (tarjetas arrastrables)
- FilterBar (filtros del kanban)
- AppLayout (layout principal)

**Tareas:**
- Implementar drag & drop
- Crear columnas configurables
- Integrar filtros de kanban
- Añadir funcionalidad de agregar tareas
- Implementar persistencia de cambios

---

### 24. **Project Reports Integration**
**Issue #024 - Integrar componentes en Project Reports**

**Componentes a integrar:**
- MetricCard (métricas principales)
- ChartCard (gráficos)
- ProgressBar (progreso por fases)
- TeamMemberCard (rendimiento del equipo)
- DataTable (tabla de tareas)
- ActivityTimeline (timeline del proyecto)

**Tareas:**
- Integrar gráficos con Recharts
- Implementar métricas calculadas
- Crear timeline del proyecto
- Añadir exportación de reportes
- Conectar datos en tiempo real

---

### 25. **Reports Page Integration**
**Issue #025 - Integrar componentes en Reports**

**Componentes a integrar:**
- MetricCard (métricas globales)
- ChartCard (gráficos de productividad)
- FilterBar (filtros de reportes)
- DataTable (tabla de rendimiento)

**Tareas:**
- Crear dashboard de reportes
- Implementar filtros avanzados
- Integrar gráficos globales
- Añadir exportación de datos
- Implementar programación de reportes

---

## 🎯 PRIORIZACIÓN SUGERIDA

### **Fase 1 - Componentes Core (Sprint 1-2)**
1. MetricCard
2. ProjectCard
3. TaskCard
4. ProgressBar
5. UserAvatar
6. StatusBadge

### **Fase 2 - Componentes de Datos (Sprint 3-4)**
7. DataTable
8. FilterBar
9. ActivityTimeline
10. FileList

### **Fase 3 - Componentes Específicos (Sprint 5-6)**
11. CommentSection
12. KanbanColumn
13. SubtaskList
14. ChartCard
15. TeamMemberCard

### **Fase 4 - Layout y Integración (Sprint 7-8)**
16. AppLayout
17. PageHeader
18-25. Integración en páginas

---

## 📝 NOTAS TÉCNICAS

### **Tecnologías Sugeridas:**
- **Storybook 7+** para documentación de componentes
- **React 19** con TypeScript
- **Tailwind CSS** para estilos
- **Recharts** para gráficos
- **React DnD** para drag & drop
- **React Query** para gestión de estado
- **Zustand** para estado global

### **Estructura de Props:**
- Usar TypeScript interfaces para todas las props
- Implementar props opcionales con defaults
- Documentar todas las variantes en Storybook
- Incluir ejemplos de uso en cada story

### **Testing:**
- Unit tests para cada componente
- Visual regression tests con Chromatic
- Accessibility tests con axe-core
- Integration tests para páginas completas

---

## 🔄 WORKFLOW SUGERIDO

1. **Crear componente en Storybook** con todas las variantes
2. **Documentar props y ejemplos** en stories
3. **Implementar tests unitarios** del componente
4. **Review y aprobación** del equipo de design
5. **Integrar en página correspondiente**
6. **Testing de integración** end-to-end
7. **Deploy y documentación** final

Este enfoque asegura que cada componente sea reutilizable, bien documentado y probado antes de su integración en las páginas finales.
