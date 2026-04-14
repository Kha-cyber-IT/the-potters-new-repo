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
├── App.tsx              # Main app with custom state-based routing
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

Uses a custom state-based routing system (no react-router). The `Page` enum in `types.ts` defines all pages. Navigation is handled via `setPage` callbacks passed down from `App.tsx`.

## Development

```bash
npm run dev    # Start dev server at http://localhost:5000
npm run build  # Build for production (outputs to dist/)
```

## Deployment

Configured as a static site deployment:
- Build: `npm run build`
- Public directory: `dist`
