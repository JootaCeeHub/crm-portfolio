# BizCore360 Nexus Platform

Un prototipo modular de dashboard de gestión empresarial que unifica e-commerce, CRM, ventas, analítica, proyectos, comunicaciones y configuración en una sola aplicación React.

## Overview
BizCore360 Nexus Platform es una aplicación web frontend diseñada como un centro de control integral para operaciones de negocio. El proyecto demuestra cómo múltiples dominios empresariales pueden convivir bajo una misma estructura de navegación con un sistema de diseño consistente.

Se enfoca en:
- **Navegación entre módulos** para áreas clave del negocio.
- **Visibilidad operativa** mediante dashboards, KPIs, gráficos y vistas tabulares.
- **Experiencia de UI configurable** (cambio de tema y sidebar colapsable).
- **Arquitectura de componentes reutilizables** basada en shadcn/ui + Tailwind CSS.

La implementación actual es principalmente **UI-first con datos mock**, por lo que es ideal para validación de MVP, demos de producto y como base para conectar APIs reales.

## Features
- Layout unificado con navegación lateral y barra superior de acciones.
- Módulos de negocio:
  - Dashboard
  - E-commerce
  - CRM
  - Sales
  - Leads
  - Analytics
  - Projects
  - Communications
  - Settings
- Tarjetas KPI responsivas, tablas de datos, badges, filtros e indicadores de estado.
- Visualizaciones con Recharts.
- Sistemas de notificación toast (Sonner + shadcn toaster).
- Modo claro/oscuro persistido con Zustand.
- Estado de colapso de sidebar persistido con Zustand.
- Enrutamiento con página 404 dedicada.

## Tech Stack
- **Lenguaje:** TypeScript
- **Framework:** React 18
- **Build tool:** Vite 5
- **Estilos:** Tailwind CSS + variables CSS
- **Librería UI:** shadcn/ui (primitivos Radix UI)
- **Manejo de estado:** Zustand (+ persist middleware)
- **Routing:** React Router DOM v6
- **Base para data fetching:** TanStack React Query
- **Gráficos:** Recharts
- **Formularios/validación (dependencias disponibles):** React Hook Form + Zod
- **Linting:** ESLint + typescript-eslint

## Architecture
El proyecto sigue una arquitectura frontend modular:

- **Application shell**
  - `Layout` compone `Sidebar` + `TopBar` y envuelve todas las rutas.
- **Páginas funcionales**
  - Cada dominio de negocio vive en `src/pages/*` como componente de nivel ruta.
- **Sistema UI compartido**
  - `src/components/ui/*` contiene primitivos reutilizables generados/adaptados desde shadcn/ui.
- **Widgets de dominio**
  - `src/components/dashboard/*` contiene bloques específicos del dashboard.
- **Hooks y estado**
  - `src/hooks/*` centraliza comportamientos como tema y estado de sidebar (persistidos en localStorage).
- **Utilidades**
  - `src/lib/utils.ts` aporta helpers compartidos (por ejemplo, merge de clases).

## Installation
### Prerrequisitos
- Node.js 18+
- npm 9+

### Pasos
```bash
# 1) Clona el repositorio
git clone <URL_DE_TU_REPOSITORIO>

# 2) Entra al directorio del proyecto
cd crm-portfolio

# 3) Instala dependencias
npm install
```

## Usage
```bash
# Levantar entorno de desarrollo
npm run dev

# Construir bundle de producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

Por configuración del proyecto, Vite corre en `http://localhost:8080`.

## Project Structure
```text
.
├── public/                 # Assets estáticos
├── src/
│   ├── components/
│   │   ├── dashboard/      # Widgets específicos del dashboard
│   │   ├── layout/         # Shell de app: sidebar y top bar
│   │   └── ui/             # Primitivos UI reutilizables (shadcn/ui)
│   ├── hooks/              # Hooks custom + estado de UI persistido
│   ├── lib/                # Utilidades
│   ├── pages/              # Módulos de negocio por ruta
│   ├── App.tsx             # Mapa de rutas + providers
│   ├── main.tsx            # Entry point de React
│   └── index.css           # Estilos globales y tokens de diseño
├── components.json         # Configuración de shadcn/ui
├── tailwind.config.ts      # Configuración de Tailwind
├── vite.config.ts          # Configuración de Vite y aliases
└── package.json            # Scripts y dependencias
```

## Development
### Flujo recomendado
1. Crea una rama de feature.
2. Ejecuta `npm install` y `npm run dev`.
3. Implementa cambios en módulos funcionales (`src/pages`) y componentes compartidos (`src/components`).
4. Mantén los primitivos UI genéricos y la lógica de dominio dentro de componentes de página/dominio.
5. Ejecuta verificaciones antes de commit:
   - `npm run lint`
   - `npm run build`

### Notas de código
- El alias `@/` apunta a `src/`.
- Los tokens de diseño Tailwind están definidos en `src/index.css`.
- Las preferencias de tema y sidebar se guardan en localStorage.

## Roadmap
- Integrar APIs backend reales para cada módulo.
- Añadir autenticación/autorización y navegación por roles.
- Reemplazar datasets mock por estado de servidor gestionado con React Query.
- Añadir i18n para localización completa en inglés/español.
- Incorporar testing automatizado (unitario, integración y e2e).
- Añadir pipelines CI/CD para lint, build y despliegue.
- Mejorar accesibilidad (auditorías a11y + flujos keyboard-first).

## License
Esto es personal y privado, creado y desarrollado por **JootaCee**.

## Author
Esto es personal y privado, creado y desarrollado por **JootaCee**.
