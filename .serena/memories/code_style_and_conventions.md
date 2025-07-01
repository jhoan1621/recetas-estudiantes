# Code Style and Conventions

## General Conventions
- **File Naming**: PascalCase for components (e.g., `RecipeCard.tsx`, `HomePage.tsx`)
- **Variable Naming**: camelCase for variables and functions
- **Constants**: camelCase for regular constants
- **Interfaces**: PascalCase with descriptive names (e.g., `Recipe`, `RecipeFormData`)

## TypeScript Conventions
- **Strict Type Checking**: Full TypeScript configuration with strict mode
- **Interface Definitions**: Separate type definitions in `src/types/`
- **Props Typing**: All component props must have TypeScript interfaces
- **Optional Properties**: Use `?` for optional properties in interfaces

## React Conventions
- **Functional Components**: All components are functional components
- **Hooks Usage**: Prefer built-in hooks (`useState`, `useEffect`, `useContext`, `useRef`)
- **Component Props**: Destructure props in function parameters
- **Default Exports**: Each component file has a default export

## ESLint Configuration
- Uses `@eslint/js` recommended rules
- TypeScript ESLint configuration with recommended rules
- React Hooks rules for proper hook usage
- React Refresh rules for development

## CSS Conventions
- **Global Styles**: CSS written in `App.css` with BEM-like naming
- **Class Naming**: Kebab-case for CSS classes (e.g., `.recipe-card`, `.nav-link`)
- **Modern CSS**: Uses Flexbox, Grid, and CSS custom properties
- **Responsive Design**: Mobile-first approach with media queries

## Import/Export Conventions
- **Default Exports**: For main component in each file
- **Named Exports**: For interfaces and utility functions
- **Import Organization**: External imports first, then internal imports
- **Path References**: Relative imports for local files

## Code Organization
- One component per file
- Related types defined near component usage
- Utility functions extracted to separate files when reused
- Context providers in dedicated files