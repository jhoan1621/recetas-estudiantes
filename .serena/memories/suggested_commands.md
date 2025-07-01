# Suggested Commands

## Development Commands
- **`npm run dev`**: Start development server (runs on http://localhost:5173)
- **`npm run build`**: Build for production (TypeScript compilation + Vite build)
- **`npm run preview`**: Preview production build locally
- **`npm run lint`**: Run ESLint to check code quality and style

## Package Management
- **`npm install`**: Install all dependencies
- **`npm install [package]`**: Install new package
- **`npm install -D [package]`**: Install development dependency

## Git Commands (Standard)
- **`git status`**: Check repository status
- **`git add .`**: Stage all changes
- **`git commit -m "message"`**: Commit changes
- **`git push`**: Push to remote repository

## System Commands (Linux)
- **`ls`**: List directory contents
- **`cd [directory]`**: Change directory
- **`grep [pattern] [files]`**: Search for patterns in files
- **`find [path] -name [pattern]`**: Find files by name pattern

## Testing Commands
- **Note**: No test framework is currently configured in this project
- Students typically add testing later (Jest, Vitest, or React Testing Library)

## Quality Assurance
- **`npm run lint`**: Must be run before completing tasks
- **`npm run build`**: Must pass before deployment
- Both commands should run without errors

## Development Workflow
1. Start development server: `npm run dev`
2. Make changes to code
3. Test functionality in browser
4. Run linter: `npm run lint`
5. Build for production: `npm run build`
6. Commit changes if all checks pass