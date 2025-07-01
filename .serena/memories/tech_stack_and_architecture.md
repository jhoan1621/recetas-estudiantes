# Tech Stack and Architecture

## Core Technologies
- **React 19.1.0**: UI library for building user interfaces
- **TypeScript 5.8.3**: Static type checking and better developer experience
- **Vite 7.0.0**: Fast build tool and development server
- **React Router Dom 7.6.3**: Client-side routing and navigation
- **Axios 1.10.0**: HTTP client for API requests (if needed)

## Development Tools
- **ESLint 9.29.0**: Code linting with TypeScript and React rules
- **@vitejs/plugin-react 4.5.2**: Vite plugin for React support
- **typescript-eslint 8.34.1**: TypeScript-specific ESLint rules

## Architecture Patterns
- **Context API**: Global state management for recipes and favorites
- **Custom Hooks**: `useRecipes()` for accessing global state
- **Controlled Components**: Form inputs managed by React state
- **Component Composition**: Reusable components with props
- **TypeScript Interfaces**: Type definitions for Recipe, FormData, and Errors

## File Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route-level components
├── context/            # Global state management
├── types/              # TypeScript definitions
├── data/               # Static data (JSON recipes)
├── App.tsx             # Route configuration
├── App.css             # Global styles
└── main.tsx           # Application entry point
```

## Build System
- Vite for fast development and optimized production builds
- TypeScript compilation with strict type checking
- ESLint for code quality and consistency
- Hot module replacement (HMR) for development