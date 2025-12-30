# Presentation System - Claude Code Instructions

## Overview
This is a React + TanStack Start presentation system for creating slide decks. It supports theme switching (personal/business) and dual-language (Dutch/English).

## Tech Stack
- React 19 + TypeScript
- TanStack Start (file-based routing)
- Tailwind CSS v4
- Vite

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

### Create a new presentation
When I say "create presentation about [TOPIC]":
1. Create a new data file in `src/data/presentations/[slug].ts`
2. Add the route in `src/routes/presentations/[slug].tsx`
3. Update the gallery in `src/routes/index.tsx`

### Add a new slide type
Create a new component in `src/components/slides/` following the existing patterns.

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, ProgressBar, SlideNumber
│   ├── slides/          # TitleSlide, ConceptSlide, CodeSlide, etc.
│   ├── Gallery.tsx      # Presentation gallery
│   └── Presentation.tsx # Main presentation container
├── data/
│   └── presentations/   # Presentation content files
├── hooks/
│   ├── usePresentation.ts  # Presentation state management
│   └── useKeyboard.ts      # Keyboard/touch navigation
├── routes/              # TanStack file-based routes
├── types/
│   └── presentation.ts  # TypeScript types
└── styles.css           # Global styles + theme variables
```

---

## Theme System

### CSS Variables (defined in `src/styles.css`)

Both themes define these variables:
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--accent-primary`, `--accent-hover`, `--accent-secondary`
- `--color-brand-primary`, `--color-brand-secondary`, `--color-brand-hover`

### Theme: personal (Dark)
- Font: Oxygen
- Brand color: Indigo (#6366f1)
- Background: Dark slate (#020617)

### Theme: business (Qualogy)
- Font: Chivo Medium
- Brand color: Red (#e31837)
- Background: White (#ffffff)

### Using brand colors in Tailwind
```jsx
<span className="text-brand-primary">Automatically switches with theme</span>
<button className="bg-brand-primary hover:bg-brand-hover">Click</button>
```

---

## Slide Types

1. **title** — Chapter opener with large headline
2. **concept** — Single idea with supporting visual
3. **comparison** — Side-by-side or before/after
4. **process** — Step-by-step diagram/flowchart
5. **code** — Syntax-highlighted code snippet
6. **stats** — Large impactful numbers
7. **checklist** — Key points with checkmarks
8. **summary** — Chapter takeaways

---

## Keyboard Shortcuts

- `←` / `→` or `Space` — Navigate slides
- `T` — Toggle theme
- `L` — Toggle language (NL/EN)
- `F` — Toggle fullscreen
- `M` — Toggle sidebar menu
- `Escape` — Close any open panel
- `Home` / `End` — First/last slide
- `1-9` — Jump to chapter

---

## Presentation Data Format

```typescript
import { PresentationData } from '../../types/presentation';

export const myPresentation: PresentationData = {
  meta: {
    title: { nl: 'Titel', en: 'Title' },
    author: 'Your Name',
    date: '2025-01-15'
  },
  chapters: [
    {
      id: 'intro',
      title: { nl: 'Introductie', en: 'Introduction' },
      slides: [
        {
          type: 'title',
          title: { nl: '...', en: '...' },
          subtitle: { nl: '...', en: '...' }
        },
        {
          type: 'concept',
          title: { nl: '...', en: '...' },
          content: { nl: '...', en: '...' }
        }
      ]
    }
  ]
};
```

---

## Content Guidelines

- Minimal text per slide — one core idea only
- Prioritize visuals: diagrams, flowcharts, icons, large numbers
- Logical narrative flow building understanding progressively
- Use analogies and metaphors for complex concepts
