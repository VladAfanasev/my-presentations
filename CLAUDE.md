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

---

## AI-Powered Presentation Generation

This project includes an AI agent system for creating presentations conversationally.

### How It Works

The system uses Claude Code skills that activate automatically based on your requests:

1. **Discovery**: When you mention "create a presentation" or similar, the discovery skill asks clarifying questions about audience, goals, duration, and visual preferences.

2. **Orchestration**: After discovery, the orchestrator coordinates parallel generation of chapters, visuals, and speaker notes.

3. **Content Generation**: Specialized skills generate slide content following consistent patterns.

4. **Visual Generation**: Supports inline SVG diagrams, Mermaid flowcharts, and image generation prompts.

5. **Speaker Notes**: Full markdown speaker notes with timing, speaking points, and transitions.

### Starting a New Presentation

Simply say something like:
- "Create a presentation about React Server Components"
- "I need to present GraphQL to my team"
- "Help me build slides for a conference talk on microservices"

The discovery agent will guide you through:
- **Audience**: Who are they? Technical level?
- **Goals**: What's the key message?
- **Duration**: How long is the time slot?
- **Style**: Code-heavy? Visual-focused?

**Note**: All presentations are automatically generated with:
- **Both languages**: Dutch (NL) + English (EN)
- **Both themes**: Personal (dark) + Business (light)

### Output Structure

Generated presentations are saved to:
```
src/data/presentations/[slug]/
├── index.ts              # Bilingual presentation data
├── speaker-notes-en.md   # English speaking guide
├── speaker-notes-nl.md   # Dutch speaking guide
├── visuals/              # Theme-compatible diagrams
└── image-prompts.md      # Prompts for Midjourney/DALL-E
```

### Language Rules

**Technical terms stay in English** in both Dutch and English text:
- API, REST, GraphQL, hooks, state, props, component
- React, Vue, Angular, Node.js, TypeScript
- CI/CD, Docker, Kubernetes, deployment
- JSON, SQL, cache, schema, query

```typescript
// CORRECT
{ nl: 'Gebruik React hooks voor state management', en: 'Use React hooks for state management' }

// WRONG - never translate technical terms
{ nl: 'Gebruik Reageer haken voor staatsbeheer', en: '...' }
```

### Visual Types

**Inline SVG** - Custom diagrams with theme-aware colors:
```typescript
{
  type: 'concept',
  title: { nl: '...', en: '...' },
  visual: 'diagram',
  svg: '<svg viewBox="0 0 400 300">...</svg>'
}
```

**Mermaid Diagrams** - Flowcharts, sequences, state machines:
```typescript
{
  type: 'concept',
  title: { nl: '...', en: '...' },
  visual: 'flowchart',
  mermaid: 'flowchart LR\n  A --> B --> C'
}
```

**Image Prompts** - For Midjourney/DALL-E generation:
```typescript
{
  type: 'concept',
  title: { nl: '...', en: '...' },
  visual: 'diagram',
  imagePrompt: 'hero-architecture'  // Reference to image-prompts.md
}
```

### Skills Available

The following skills are installed in `.claude/skills/`:

| Skill | Description |
|-------|-------------|
| `presentation-discovery` | Interactive Q&A to gather requirements |
| `presentation-orchestrator` | Coordinates multi-agent generation |
| `slide-content` | Generates slide data with patterns |
| `visual-generation` | Creates SVG, Mermaid, image prompts |
| `speaker-notes` | Generates speaking guides with timing |

### Validation

A post-write hook automatically validates presentation files for:
- TypeScript compilation
- Bilingual content completeness (nl/en)
- Required fields and structure

### Full Guide

For comprehensive documentation, see:
**[.claude/PRESENTATION-GUIDE.md](.claude/PRESENTATION-GUIDE.md)**
