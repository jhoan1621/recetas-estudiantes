# Codebase Structure Overview

## Main Application Structure
```
/
├── public/             # Static assets
├── src/               # Source code
└── config files       # Build and dev tool configuration
```

## Source Code Organization (`src/`)

### Components (`src/components/`)
- **`Navbar.tsx`**: Navigation bar with React Router links and active state
- **`RecipeCard.tsx`**: Reusable recipe display card with favorite functionality
- **`FilterBar.tsx`**: Search and filter controls for recipe lists

### Pages (`src/pages/`)
- **`HomePage.tsx`**: Landing page with featured recipes
- **`RecipesPage.tsx`**: Complete recipe list with filtering capabilities
- **`FavoritesPage.tsx`**: User's favorite recipes with localStorage persistence
- **`CreateRecipePage.tsx`**: Form for creating new recipes with validation
- **`RecipeDetailPage.tsx`**: Individual recipe view with full details

### Context (`src/context/`)
- **`RecipeContext.tsx`**: Global state management using React Context API
  - Manages recipes and favorites
  - Provides useRecipes hook
  - Handles localStorage synchronization

### Types (`src/types/`)
- **`Recipe.ts`**: TypeScript interfaces and type definitions
  - `Recipe` interface for recipe data structure
  - `RecipeFormData` for form state
  - `RecipeFormErrors` for form validation

### Data (`src/data/`)
- **`recetas.json`**: Static JSON file with sample recipes
  - Contains pre-defined recipes for the application
  - Used as initial data source

## Key Application Files
- **`App.tsx`**: Main application component with React Router configuration
- **`App.css`**: Global styles and CSS classes
- **`main.tsx`**: Application entry point and React DOM rendering

## Configuration Files (Root Level)
- **`package.json`**: Dependencies and npm scripts
- **`tsconfig.json`**: TypeScript configuration (references app and node configs)
- **`tsconfig.app.json`**: App-specific TypeScript settings
- **`tsconfig.node.json`**: Node-specific TypeScript settings
- **`vite.config.ts`**: Vite build tool configuration
- **`eslint.config.js`**: ESLint configuration with TypeScript and React rules

## Data Flow Architecture
1. **Global State**: RecipeContext provides centralized state management
2. **Local State**: Components use useState for local UI state
3. **Persistence**: Favorites stored in localStorage via useEffect hooks
4. **Navigation**: React Router manages client-side routing
5. **Props Flow**: Parent components pass data to child components via props

## Component Hierarchy
```
App
├── Navbar (appears on all pages)
└── Router Pages
    ├── HomePage
    ├── RecipesPage (uses FilterBar, RecipeCard)
    ├── FavoritesPage (uses RecipeCard)
    ├── CreateRecipePage
    └── RecipeDetailPage
```