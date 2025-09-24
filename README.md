# Tenpo Challenge - React App

Una aplicación React que demuestra una virtualización de 2000 comentarios.

## 🚀 Características

- **Autenticación**: Sistema de login con protección de rutas
- **Virtualización**: Renderizado eficiente de listas grandes
- **Responsive**: Diseño adaptativo para móviles y desktop

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** como bundler
- **React Router** para navegación
- **Tailwind CSS** para estilos
- **Axios** para peticiones HTTP
- **JSONPlaceholder API** para datos de prueba

## 📋 Prerrequisitos

- Node.js (versión 20 o superior)
- npm o yarn

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/miloxp/tenpo-challenge
   cd tenpo-challenge
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Levantar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🎯 Rutas de la Aplicación

- **`/login`** - Página de login (pública)
- **`/virtualized`** - Lista virtualizada (privada)

## 🔐 Credenciales de Login

Para acceder a la aplicación, usa estas credenciales:

- **Email**: `dana@example.com`
- **Password**: `password`

## 📱 Funcionalidades

### Lista Virtualizada (`/virtualized`)
- Renderizado eficiente de listas grandes
- Solo renderiza elementos visibles
- Scroll suave y performante

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   ├── PageLayout.tsx  # Layout principal
│   └── PrivateRoute.tsx # Protección de rutas
├── context/            # Context de autenticación
├── pages/              # Páginas de la aplicación
│   ├── Login.tsx
│   └── Virtualized.tsx
├── services/           # Servicios API
├── types/              # Definiciones TypeScript
└── utils/              # Utilidades
```

## 🎨 Estilos

La aplicación usa **Tailwind CSS** para estilos. El diseño es completamente responsive y incluye:

- Header con navegación adaptativa
- Menú hamburguesa para móviles
- Transiciones suaves

## 🔧 Configuración

### Variables de Entorno
No se requieren variables de entorno para el desarrollo local.

### API
La aplicación usa la API de JSONPlaceholder para obtener datos de comentarios:
- Endpoint: `https://jsonplaceholder.typicode.com/comments`
- Los datos se expanden a 2000 comentarios localmente

## 🚀 Despliegue

Para desplegar en producción:

1. **Build de producción**
   ```bash
   npm run build
   ```

2. **Los archivos estáticos se generan en `dist/`**

3. **Servir con cualquier servidor web estático**

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.