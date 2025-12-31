# AI Presentation Generation Guide

This guide explains how to use the AI-powered presentation creation system integrated with Claude Code.

## Overview

The system uses Claude Code skills to help you create professional presentations through natural conversation. Every presentation is automatically generated with:

- **Bilingual content**: Dutch (NL) and English (EN)
- **Dual theme support**: Works in both personal (dark) and business (light) themes
- **Speaker notes**: Full speaking guides in both languages
- **Visual elements**: Theme-compatible diagrams and infographics

---

## Quick Start

### 1. Start the conversation

Simply tell Claude what presentation you want to create:

```
Create a presentation about React Server Components for senior developers
```

Or be more specific:

```
I need to present GraphQL to my team. It's a 30-minute internal talk
for developers who know REST but not GraphQL.
```

### 2. Answer discovery questions

The discovery agent will ask you about:

| Topic | Example Questions |
|-------|-------------------|
| **Audience** | Who will attend? What's their technical level? |
| **Goals** | What should they remember? What action should they take? |
| **Duration** | How long is your time slot? |
| **Style** | Code-heavy or concept-focused? |

### 3. Review the proposed structure

Before generating, you'll see an outline like:

```
Proposed structure for "React Server Components" (30 min):

Chapter 1: The Problem (5 slides)
- Why client-side fetching is complex
- Pain points with current patterns

Chapter 2: The Solution (6 slides)
- What are Server Components?
- How they simplify data fetching

Chapter 3: Implementation (5 slides)
- Code examples and patterns
- Migration strategies

Chapter 4: Conclusion (4 slides)
- Key takeaways
- Next steps

Total: 20 slides, ~1.5 min per slide
```

### 4. Receive your complete presentation

The system generates:

```
src/data/presentations/react-server-components/
├── index.ts              # Presentation data (bilingual)
├── speaker-notes-en.md   # English speaking guide
├── speaker-notes-nl.md   # Dutch speaking guide
├── visuals/              # Theme-compatible diagrams
└── image-prompts.md      # Image generation prompts (if needed)
```

---

## What Gets Generated

### Presentation File (`index.ts`)

TypeScript data file with all slides, fully bilingual:

```typescript
export const reactServerComponentsPresentation: PresentationData = {
  meta: {
    title: {
      nl: 'React Server Components',
      en: 'React Server Components'
    },
    author: 'Your Name',
    date: '2025-01-15'
  },
  chapters: [
    {
      id: 'problem',
      title: { nl: 'Het Probleem', en: 'The Problem' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Waarom data fetching complex is',
            en: 'Why data fetching is complex'
          }
        },
        {
          type: 'concept',
          title: {
            nl: 'De useEffect valkuil',  // Technical term stays English
            en: 'The useEffect trap'
          },
          content: {
            nl: 'Client-side fetching leidt tot waterfalls en loading states',
            en: 'Client-side fetching leads to waterfalls and loading states'
          },
          visual: 'flowchart',
          mermaid: 'flowchart LR\n  A[Component] --> B[useEffect]\n  B --> C[Fetch]'
        }
      ]
    }
  ]
};
```

### Speaker Notes (Two Files)

#### English (`speaker-notes-en.md`)

```markdown
# React Server Components - Speaker Notes

**Duration**: 30 minutes
**Audience**: Senior frontend developers

---

## Chapter 1: The Problem

### Slide 1: Why data fetching is complex

**Duration**: 1 minute
**Key Point**: Set up the problem we're solving

#### Speaking Points
1. "Raise your hand if you've ever written useEffect for data fetching"
2. "We all know the pattern: mount, fetch, set state, handle loading..."
3. "But this leads to problems we'll explore..."

---
```

#### Dutch (`speaker-notes-nl.md`)

```markdown
# React Server Components - Sprekernotities

**Duur**: 30 minuten
**Doelgroep**: Senior frontend developers

---

## Hoofdstuk 1: Het Probleem

### Slide 1: Waarom data fetching complex is

**Duur**: 1 minuut
**Kernpunt**: Schets het probleem dat we gaan oplossen

#### Spreekpunten
1. "Steek je hand op als je ooit useEffect hebt geschreven voor data fetching"
2. "We kennen het patroon: mount, fetch, state updaten, loading afhandelen..."
3. "Maar dit leidt tot problemen die we gaan bekijken..."

---
```

### Visual Elements

#### SVG Diagrams (Theme-Compatible)

```svg
<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect fill="var(--bg-secondary)" width="400" height="200" rx="8"/>
  <rect fill="var(--accent-primary)" x="20" y="60" width="100" height="80" rx="4"/>
  <text fill="white" x="70" y="105" text-anchor="middle">Client</text>
  <!-- Uses CSS variables - works in both themes -->
</svg>
```

#### Mermaid Diagrams

```
flowchart LR
  A[Client] --> B[Server]
  B --> C[Database]
```

Mermaid diagrams automatically adapt colors based on the active theme.

---

## Language Rules

### Technical Terms Stay in English

The following terms are **NEVER translated** to Dutch:

| Category | Examples |
|----------|----------|
| **Frameworks** | React, Vue, Angular, Next.js, Node.js |
| **Concepts** | API, REST, GraphQL, hooks, state, props |
| **DevOps** | CI/CD, Docker, Kubernetes, deployment |
| **Data** | JSON, SQL, schema, query, cache |
| **Security** | OAuth, JWT, token, authentication |

### Correct Examples

```typescript
// CORRECT - technical terms in English
{
  nl: 'Gebruik React hooks voor state management',
  en: 'Use React hooks for state management'
}

// CORRECT - action verbs translated
{
  nl: 'Configureer de API endpoint',
  en: 'Configure the API endpoint'
}

// WRONG - don't translate technical terms
{
  nl: 'Gebruik Reageer haken voor staatsbeheer',  // NO!
  en: 'Use React hooks for state management'
}
```

---

## Theme Compatibility

All presentations work in both themes:

### Personal Theme (Dark)
- Background: Dark (#0a0a0a)
- Accent: Indigo (#6366f1)
- Font: Oxygen

### Business Theme (Light)
- Background: White (#ffffff)
- Accent: Red (#e31837)
- Font: Chivo Medium

### Visual Rules

- **SVGs**: Use CSS variables (`var(--accent-primary)`)
- **Mermaid**: Auto-adapts via theme configuration
- **Colors**: Never hardcode theme-specific colors

---

## Slide Types

| Type | Purpose | Visual |
|------|---------|--------|
| `title` | Chapter opener | Large headline |
| `concept` | Single idea | Icon, diagram, or flowchart |
| `comparison` | Side-by-side | Two columns |
| `process` | Step-by-step | Numbered steps |
| `code` | Show code | Syntax highlighting |
| `stats` | Big numbers | 2-4 metrics |
| `checklist` | Key points | Checkmarks |
| `summary` | Wrap-up | Bullet points |

---

## Duration Guidelines

| Time Slot | Slides | Chapters |
|-----------|--------|----------|
| 5 min | 3-5 | 1-2 |
| 15 min | 8-12 | 2-3 |
| 30 min | 15-20 | 3-4 |
| 45 min | 22-30 | 4-5 |
| 60 min | 30-40 | 5-6 |

Average: **1-2 minutes per slide**

---

## File Locations

```
.claude/
├── skills/
│   ├── presentation-discovery/    # Discovery questions
│   ├── presentation-orchestrator/ # Coordinates generation
│   ├── slide-content/             # Slide patterns
│   ├── visual-generation/         # SVG, Mermaid, prompts
│   └── speaker-notes/             # Speaking guides
├── hooks/
│   └── presentation-validate.sh   # Validation script
└── PRESENTATION-GUIDE.md          # This file

src/data/presentations/
├── presentations.ts               # Gallery configuration
└── [slug]/                        # Generated presentations
    ├── index.ts
    ├── speaker-notes-en.md
    ├── speaker-notes-nl.md
    └── visuals/
```

---

## Previewing Your Presentation

```bash
# Start the dev server
npm run dev

# Open in browser
http://localhost:3000/presentation/[slug]
```

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` | Navigate slides |
| `T` | Toggle theme |
| `L` | Toggle language (NL/EN) |
| `F` | Toggle fullscreen |
| `M` | Toggle sidebar |
| `1-9` | Jump to chapter |

---

## Troubleshooting

### "Presentation not found"

1. Check `src/routes/presentation.$slug.tsx` - is the case added?
2. Check `src/data/presentations.ts` - is the gallery entry added?

### "TypeScript errors"

Run validation:
```bash
npx tsc --noEmit src/data/presentations/[slug].ts
```

### "Diagram not rendering"

- Check Mermaid syntax
- Ensure mermaid package is installed: `npm install mermaid`

### "Colors look wrong in one theme"

- Check SVGs use CSS variables
- Never use hardcoded hex colors

---

## Best Practices

1. **Start with the audience** - Know who you're presenting to
2. **One idea per slide** - Don't overload
3. **Visual first** - Prefer diagrams over text
4. **Tell a story** - Problem → Solution → Proof → Action
5. **Practice with notes** - Use the speaker notes as your guide
6. **Test both themes** - Preview in personal AND business
7. **Test both languages** - Toggle with `L` key

---

## Need Help?

- Check the skill files in `.claude/skills/` for detailed patterns
- Review existing presentations in `src/data/presentations/`
- Run `/help` in Claude Code for general assistance
