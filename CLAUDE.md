# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo for UI component libraries and AI-powered UI generation tools, built with pnpm workspace management. The project consists of two main applications that work together to provide a comprehensive UI development ecosystem.

## Project Architecture

### Monorepo Structure
```
ui-kits/
├── apps/
│   ├── registry/          # Shadcn component registry host
│   └── ui-builder/        # AI-powered UI builder
├── packages/
│   └── config/           # Shared configurations
├── pnpm-workspace.yaml
└── package.json
```

### Application Details

#### App 1: Registry (`apps/registry`)
- **Purpose**: Host multiple Shadcn component registries with theme support
- **Features**:
  - Support for multiple component registries
  - Multiple theme variables and customization
  - Component preview and documentation
  - Export functionality for components

#### App 2: UI Builder (`apps/ui-builder`)
- **Purpose**: AI-powered UI generation with prompt-based interface
- **Features**:
  - Natural language prompts to generate UI components
  - Registry selection (choose from available registries)
  - Theme selection before generation
  - Real-time preview and code generation
  - Integration with registry app for component sourcing

## Tech Stack

### Core Technologies
- **Package Manager**: pnpm (with workspaces)
- **Database**: PostgreSQL
- **Framework**: Next.js 14+ (App Router)
- **Authentication**: All feature are public
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui ecosystem

### Recommended Libraries (Shadcn Ecosystem)
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Data Schema**: Zod, Kysely (for type safety SQL)
- **Data Fetching**: TanStack Query (React Query), integrate tRPC (for API calling)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Development Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev                    # Run all apps
pnpm dev --filter registry  # Run registry app only
pnpm dev --filter ui-builder # Run ui-builder app only

# Build
pnpm build                  # Build all apps
pnpm build --filter registry # Build specific app

# Lint, Format and Type Check
pnpm lint                   # Lint all packages
pnpm format                 # Format code with Prettier
pnpm type-check            # Type check all packages

# Package Management
pnpm add <package> --filter <app>  # Add dependency to specific app
pnpm add <package> -w              # Add to workspace root
```

## Coding Practices

### File Organization
- Use feature-based folder structure within apps
- Keep shared components in `packages/ui`
- Maintain consistent naming conventions: kebab-case for files, PascalCase for components

### Component Development
- Follow Shadcn/ui patterns for component creation
- Use compound component patterns where appropriate
- Implement proper TypeScript interfaces for all props
- Include JSDoc comments for complex components

### State Management
- Prefer server state (React Query) over client state when possible
- Use Zustand for complex client state
- Keep state as close to where it's used as possible

### Styling Guidelines
- Use Tailwind CSS utility classes primarily
- Create design tokens in shared config for consistent theming
- Use CSS variables for theme customization
- Follow mobile-first responsive design principles

### Code Quality
- Maintain 100% TypeScript coverage (no `any` types)
- Use strict TypeScript configuration
- Implement comprehensive error boundaries
- Follow React best practices (hooks rules, key props, etc.)

### Code Formatting
- Use Prettier for consistent code formatting
- Configure Prettier with project-specific rules
- Integrate with ESLint for comprehensive code quality
- Format on save enabled in development environment

## AI Integration Guidelines

### For UI Builder App
- Use structured prompts for consistent AI responses
- Implement proper error handling for AI API failures
- Cache AI responses when appropriate
- Provide fallback options when AI generation fails
- Validate AI-generated code before rendering

### Component Generation
- Ensure generated components follow project patterns
- Validate component props and structure
- Provide preview modes before final generation
- Allow manual editing of generated components