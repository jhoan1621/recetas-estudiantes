# 🍳 Recetas para Estudiantes - Aplicación React

Una aplicación web completa desarrollada con React + Vite + TypeScript que permite a los estudiantes universitarios explorar, crear y gestionar recetas de cocina fáciles y económicas.

## 🎯 Objetivos Pedagógicos

Esta aplicación abarca todos los conceptos fundamentales de React:

### Semana 12: Elementos de React
- **Componentes funcionales** con props y composición
- **Estado local** con `useState`
- **Formularios controlados** para capturar datos del usuario
- **Navegación** con React Router entre diferentes páginas

### Semana 13: Hooks en React
- **useState**: Manejo de estado local en componentes
- **useEffect**: Efectos secundarios y ciclo de vida
- **useContext**: Estado global compartido entre componentes
- **useRef**: Referencias a elementos DOM y valores mutables

### Semana 14: Integración y Estado Global
- **Context API**: Gestión de estado global de la aplicación
- **localStorage**: Persistencia de datos en el navegador
- **Filtrado y búsqueda**: Lógica compleja con múltiples estados
- **Patrones de composición**: Arquitectura escalable de componentes

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
```bash
cd recetas-estudiantes
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
Visita `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Barra de navegación con React Router
│   ├── RecipeCard.tsx  # Tarjeta de receta con estado local
│   └── FilterBar.tsx   # Filtros con formularios controlados
├── pages/              # Páginas principales de la aplicación
│   ├── HomePage.tsx    # Página de inicio con componentes
│   ├── RecipesPage.tsx # Lista completa con filtros
│   ├── FavoritesPage.tsx # Gestión de favoritos
│   ├── CreateRecipePage.tsx # Formulario complejo
│   └── RecipeDetailPage.tsx # Detalle con useParams
├── context/            # Estado global con Context API
│   └── RecipeContext.tsx # Contexto para favoritos y recetas
├── types/              # Definiciones TypeScript
│   └── Recipe.ts       # Interfaces y tipos
├── data/               # Datos simulados
│   └── recetas.json    # JSON con recetas de ejemplo
├── App.tsx             # Configuración de rutas
├── App.css             # Estilos CSS
└── main.tsx           # Punto de entrada
```

## 🎨 Funcionalidades Implementadas

### 1. Navegación (React Router)
- **Rutas configuradas**: `/`, `/recetas`, `/favoritas`, `/crear`, `/receta/:id`
- **Navegación activa**: Enlaces resaltados según la página actual
- **Navegación programática**: Redirección después de crear receta

### 2. Componentes y Props
- **RecipeCard**: Recibe `recipe` como prop y maneja favoritos
- **FilterBar**: Props para callbacks de filtrado
- **Composición**: Componentes reutilizables en diferentes páginas

### 3. Estado Local (useState)
- **Filtros**: Búsqueda, categoría y dificultad
- **Formularios**: Estado para todos los campos del formulario
- **UI**: Estados de carga, errores y validación

### 4. Formularios Controlados
- **Validación en tiempo real**: Errores que desaparecen al escribir
- **Diferentes tipos de input**: text, number, select, textarea
- **Manejo de eventos**: onChange, onSubmit, preventDefault

### 5. Context API y useContext
- **Estado global**: Recetas y favoritos compartidos
- **Persistencia**: Sincronización con localStorage
- **Acciones**: Agregar/quitar favoritos, crear recetas

### 6. Hooks Avanzados

#### useEffect
```tsx
// Cargar favoritos del localStorage al montar
useEffect(() => {
  const favoritosGuardados = localStorage.getItem('favoritos');
  if (favoritosGuardados) {
    setFavoritos(JSON.parse(favoritosGuardados));
  }
}, []);

// Guardar favoritos cuando cambien
useEffect(() => {
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}, [favoritos]);
```

#### useRef
```tsx
// Enfocar input al cargar formulario
const nombreInputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (nombreInputRef.current) {
    nombreInputRef.current.focus();
  }
}, []);
```

### 7. Filtrado y Búsqueda
- **Múltiples filtros**: Búsqueda por nombre, categoría y dificultad
- **Búsqueda en ingredientes**: Lógica avanzada con arrays
- **Resultados dinámicos**: Contador de resultados filtrados

## 🧪 Ejercicios Sugeridos para Estudiantes

### Nivel Básico
1. **Agregar nueva categoría**: Añadir una receta con categoría "postres"
2. **Modificar estilos**: Cambiar los colores del tema
3. **Nueva prop**: Agregar tiempo de cocción al RecipeCard

### Nivel Intermedio
4. **Nuevo Hook**: Implementar un `useLocalStorage` personalizado
5. **Validaciones**: Agregar validación de URL de imagen
6. **Ordenamiento**: Añadir filtro por valoración o tiempo

### Nivel Avanzado
7. **Modal**: Crear un modal para confirmar eliminación
8. **Drag & Drop**: Reordenar ingredientes en el formulario
9. **Compartir**: Funcionalidad para compartir recetas por URL

## 📚 Conceptos de React Cubiertos

| Concepto | Implementación | Archivo |
|----------|----------------|---------|
| **Componentes Funcionales** | Todos los componentes | `*.tsx` |
| **Props** | RecipeCard, FilterBar | `components/` |
| **useState** | Formularios, filtros | Todas las páginas |
| **useEffect** | localStorage, enfoque | `RecipeContext.tsx` |
| **useContext** | Estado global | `RecipeContext.tsx` |
| **useRef** | Enfoque de inputs | `CreateRecipePage.tsx` |
| **React Router** | Navegación SPA | `App.tsx` |
| **Formularios Controlados** | Crear receta | `CreateRecipePage.tsx` |
| **Conditional Rendering** | Estados vacíos | `FavoritesPage.tsx` |
| **Event Handling** | Clicks, submits | Todos los componentes |
| **TypeScript** | Tipado fuerte | `types/Recipe.ts` |

## 🎯 Puntos de Aprendizaje Clave

### 1. ¿Por qué useState?
```tsx
// ❌ Variable normal - no causa re-render
let contador = 0;

// ✅ useState - causa re-render cuando cambia
const [contador, setContador] = useState(0);
```

### 2. ¿Por qué useEffect?
```tsx
// ❌ Efecto secundario directo - puede causar bucles
document.title = nombre; // En el render

// ✅ useEffect - controlado y con dependencias
useEffect(() => {
  document.title = nombre;
}, [nombre]);
```

### 3. ¿Por qué useContext?
```tsx
// ❌ Prop drilling - pasar props por muchos niveles
<Componente favoritos={favoritos} addFavorito={addFavorito} />

// ✅ Context - acceso directo desde cualquier componente
const { favoritos, addFavorito } = useRecipes();
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Linter de código

## 🤔 Preguntas de Reflexión

1. **¿Qué pasaría si no usáramos `key` en las listas de recetas?**
2. **¿Por qué separamos la lógica de estado en un Context?**
3. **¿Cómo mejorarías la experiencia de usuario del formulario?**
4. **¿Qué otros Hooks podrían ser útiles en esta aplicación?**

## 🎉 ¡Felicidades!

Has creado una aplicación React completa que demuestra todos los conceptos fundamentales de la librería. Esta base te permitirá construir aplicaciones más complejas y escalables.

---

**Desarrollado para el curso de JavaScript Avanzado**  
*Universidad Tecnológica del Perú - 2024*
