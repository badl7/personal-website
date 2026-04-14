# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

A personal portfolio website built with SvelteKit and TypeScript. It features a blog (fetched from Medium), a GitHub projects showcase, a library section (quotes + books), and a contact page.

## Tech Stack

- **Framework:** SvelteKit 1.x (file-based routing, server-side API routes)
- **UI Library:** Svelte 3.x
- **Language:** TypeScript (strict mode)
- **Build Tool:** Vite 4.x
- **Adapter:** `@sveltejs/adapter-auto` (auto-detects deployment target: Vercel, Netlify, Node)
- **Linting:** ESLint 8 with `@typescript-eslint` and `eslint-plugin-svelte3`
- **Formatting:** Prettier 2 with `prettier-plugin-svelte`

## Development Commands

```bash
npm run dev          # Start local dev server (Vite HMR)
npm run build        # Production build
npm run preview      # Preview production build locally
npm run check        # Type-check with svelte-check (run before committing)
npm run check:watch  # Type-check in watch mode
npm run lint         # Check formatting and lint (Prettier + ESLint)
npm run format       # Auto-format all files with Prettier
```

Always run `npm run check` and `npm run lint` before committing.

## Repository Structure

```
src/
├── routes/
│   ├── +layout.svelte       # Root layout (Header + Footer wrapper)
│   ├── +page.svelte         # Home page (blog post list)
│   ├── Header.svelte        # Navigation header with mobile dropdown
│   ├── Footer.svelte        # Social links
│   ├── Dropdown.svelte      # Mobile nav dropdown
│   ├── Post.svelte          # Blog post card component
│   ├── store.ts             # Svelte readable store (dateTimeFormat)
│   ├── styles.css           # Global CSS variables and base styles
│   ├── api/
│   │   ├── posts/+server.ts    # GET: fetches Medium blog posts via rss2json
│   │   ├── books/+server.ts    # GET: returns static book list
│   │   ├── quotes/+server.ts   # GET: returns static quotes list
│   │   └── projects/+server.ts # GET: fetches GitHub repo metadata
│   ├── library/             # Library page (quotes carousel + books)
│   ├── projects/            # Projects page (GitHub repo grid)
│   └── contact/             # Contact page (email link)
└── lib/
    ├── models/              # TypeScript interfaces
    │   ├── blog-post.ts
    │   ├── book.ts
    │   ├── project.ts
    │   └── quote.ts
    ├── helpers/
    │   └── truncate.ts      # String truncation utility
    ├── actions/             # Svelte actions (e.g. clickOutside)
    ├── icons/               # SVG icon components (.svelte)
    ├── images/              # Static image assets
    └── fonts/               # Custom web fonts (Kaisei Decol, Jacques Francois)
```

## Environment Variables

One environment variable is required at runtime:

| Variable | Purpose |
|---|---|
| `VITE_GITHUB_ACCESS_TOKEN` | GitHub API Bearer token for fetching repo metadata |

Create a `.env` file at the root (never commit it — it is in `.gitignore`):

```
VITE_GITHUB_ACCESS_TOKEN=your_token_here
```

No `.env.example` exists; this is the only variable currently used.

## Code Conventions

### Formatting (Prettier)
- **Indentation:** Tabs (not spaces)
- **Quotes:** Single quotes
- **Trailing commas:** None
- **Print width:** 100 characters
- Svelte files are parsed with `prettier-plugin-svelte`

### Naming
- **Svelte components:** PascalCase (`Header.svelte`, `Post.svelte`)
- **TypeScript interfaces:** PascalCase (`BlogPost`, `Project`, `Quote`, `Book`)
- **Stores / utilities:** camelCase (`dateTimeFormat`, `clickOutside`, `truncate`)
- **Constants:** UPPER_SNAKE_CASE (`FEED_URL`, `USERNAME`, `QUOTES`, `BOOKS`)
- **Route files:** SvelteKit conventions (`+page.svelte`, `+server.ts`, `+layout.svelte`)

### TypeScript
- Strict mode is enabled (`tsconfig.json`)
- All Svelte `<script>` blocks use `lang="ts"`
- Props typed with `export let propName: Type`
- API route handlers typed with `RequestHandler` from `./$types`

### Svelte Component Structure
```svelte
<script lang="ts">
  // imports, props (export let), reactive declarations ($:)
</script>

<!-- markup -->

<style>
  /* scoped styles per component */
</style>
```

### API Routes
- All API logic lives in `src/routes/api/*/+server.ts`
- Export named `GET` handler typed as `RequestHandler`
- Use `satisfies RequestHandler` pattern (see existing files)
- Return `new Response(JSON.stringify(data))` for success
- Throw `error(status, message)` from `@sveltejs/kit` for failures
- External data sources: Medium RSS via rss2json, GitHub REST API

### Styling
- Global CSS custom properties defined in `src/routes/styles.css`
- Color scheme (dark warm-brown theme):
  - `--bg`: `#260C07` (dark brown background)
  - `--primary`: `#590902` (deep red)
  - `--fg`: `#8C5346` (warm brown)
  - `--link`: `#BF9484` (tan)
  - `--text`: `#F0F2F2` (off-white)
- Component-scoped styles via `<style>` blocks
- Responsive breakpoints: 345px, 425px, 575px, 750px, 880px, 1090px, 1360px
- Mobile-first; dropdown nav hidden at 575px+

## No Testing Infrastructure

There are no unit or integration tests. The only verification tools are:
- `npm run check` — svelte-check type checking
- `npm run lint` — Prettier + ESLint

When adding features, verify correctness manually via `npm run dev`.

## No CI/CD

There is no `.github/workflows/` directory and no CI/CD pipeline configured. All checks must be run locally before pushing.

## Adding New Content

### New blog posts
Posts are fetched automatically from the Medium RSS feed. No code changes needed.

### New projects
Add entries to the `projects` array in `src/routes/api/projects/+server.ts`. Each entry needs a `name` matching the GitHub repo slug under `badl7`.

### New quotes or books
Edit the static data constants in `src/routes/api/quotes/+server.ts` and `src/routes/api/books/+server.ts` respectively.

### New page/route
Create a directory under `src/routes/` with a `+page.svelte` file. Add the nav link to `src/routes/Header.svelte` and `src/routes/Dropdown.svelte`.

## Git Workflow

The main branch is `main`. Feature work happens on separate branches. There are no branch protection rules or required reviews configured.
