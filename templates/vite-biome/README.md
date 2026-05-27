# __PROJECT_TITLE__

Modern React application template built with:

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Biome
* Husky
* Vitest

---

# Getting Started

```bash
npm install
npm run dev
```

Requires Node.js 22+ (see `.nvmrc`).

---

# Environment Variables

Copy `.env.example` to `.env.local` and set `VITE_*` variables as needed. Only variables prefixed with `VITE_` are exposed to client code (see `src/vite-env.d.ts`).

---

# Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format
npm run typecheck
npm run test
```

---

# Project Structure

```txt
src/
├── app/          # app-level setup
├── pages/        # route pages
├── components/   # reusable UI
├── hooks/        # reusable hooks
├── lib/          # utilities/helpers
├── services/     # api/services
├── store/        # global state
├── types/        # shared types
└── assets/       # static assets
```

---

# Conventions

## Branch Naming

Use one of the following prefixes:

```txt
feat/
fix/
docs/
refactor/
chore/
test/
ci/
```

Example:

```txt
feat/add-dashboard-page
fix/navbar-overflow
```

---

## Commit Conventions

Use conventional commits.

Examples:

```txt
feat: add authentication page
fix: resolve routing issue
docs: update README
```

---

## Naming Conventions

### Components

```txt
user-card.tsx
home-page.tsx
```

### Hooks

```txt
use-auth.ts
use-theme.ts
```

### Constants

```txt
API_BASE_URL
MAX_UPLOAD_SIZE
```

### General

* Use kebab-case for files
* Use PascalCase for components/types
* Use camelCase for variables/functions

---

# Best Practices

* Prefer small focused components
* Avoid deeply nested ternaries
* Prefer early returns
* Use semantic HTML
* Avoid unnecessary prop drilling
* Use strict TypeScript typing
* Avoid using `any`
* Keep functions readable and simple

---

# Tooling

## Formatting & Linting

Biome handles:

* formatting
* linting
* import organization

## Git Hooks

Husky runs:

* **pre-commit:** lint-staged (Biome on staged files) and typecheck
* **commit-msg:** conventional commit validation (commitlint)
* **pre-push:** branch name check, typecheck, and tests

## Testing

Vitest with Testing Library and jsdom. Example test: `src/pages/home/home-page.test.tsx`.

## Editor

Recommended VSCode extensions:

* Biome
* Tailwind CSS IntelliSense
* GitLens

Workspace settings are included by default.

---

# SEO

Included by default:

* robots.txt
* sitemap.xml
* Open Graph metadata
* Twitter card metadata

---

# AI Rules

Cursor rules are included to help AI tools follow:

* project structure
* TypeScript conventions
* React best practices
* styling standards

---

# License

MIT — see [LICENSE](./LICENSE).
