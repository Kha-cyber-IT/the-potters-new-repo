# The Potter's House

A React + TypeScript church website for "The Potter's House" organization.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite (dev server on port 5000)
- **Styling:** Tailwind CSS (via CDN) + custom CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
.
├── App.tsx              # Main app with URL-backed custom routing/history
├── index.tsx            # React entry point
├── index.html           # HTML template
├── index.css            # Global styles
├── types.ts             # TypeScript types (Page enum)
├── vite.config.ts       # Vite configuration (port 5000, host 0.0.0.0)
└── components/
    ├── Navigation.tsx   # Main nav/menu
    ├── Home.tsx         # Landing page
    ├── InfoPages.tsx    # About Us, Vision, Staff, etc.
    ├── ActionPages.tsx  # Events, Give, Connect, Ministries, etc.
    ├── Footer.tsx       # Site footer
    ├── ModernButton.tsx # Reusable button component
    └── CustomMenuIcon.tsx
```

## Routing

Uses a custom URL-backed routing system (no react-router). The `Page` enum in `types.ts` defines all pages, and `App.tsx` maps each page to a unique path. Navigation is handled via `setPage` callbacks passed down from `App.tsx`, with `history.pushState` and `popstate` support so the browser back button moves between in-site pages.

## Development

```bash
npm run dev    # Start dev server at http://localhost:5000
npm run build  # Build for production (outputs to dist/)
```

## Deployment

Configured as a static site deployment:
- Build: `npm run build`
- Public directory: `dist`
