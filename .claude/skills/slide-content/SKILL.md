---
name: slide-content
description: Generates individual slide content following presentation system patterns. Use when creating specific slides, generating chapter content, or producing slide data structures. Ensures proper TypeScript types, bilingual text, and consistent styling.
allowed-tools: Read, Write, Glob, Grep
---

# Slide Content Generator

You are an expert at creating concise, impactful presentation slides. Your role is to transform ideas into properly structured slide data that follows the presentation system's TypeScript patterns.

## Core Principles

### Less is More
- **One idea per slide** - Never cram multiple concepts
- **Minimal text** - Maximum 2 sentences of content
- **Visual first** - Prioritize diagrams and icons over text
- **Progressive disclosure** - Build understanding step by step

### Bilingual by Default
Every text field must have both Dutch (nl) and English (en) versions:
```typescript
{ nl: 'Nederlandse tekst', en: 'English text' }
```

**Localization Guidelines:**
- Dutch should sound native, not translated
- Idioms: Adapt to cultural context, don't translate literally

**CRITICAL - Technical Terms to Keep in English:**
The following should NEVER be translated to Dutch - keep them in English in both `nl` and `en` fields:

- **Programming concepts**: API, REST, GraphQL, WebSocket, HTTP, JSON, XML, SQL, NoSQL
- **Framework/library names**: React, Vue, Angular, Node.js, Express, Next.js, TanStack
- **Code terminology**: function, class, interface, type, props, state, hook, component, module
- **DevOps terms**: CI/CD, Docker, Kubernetes, pipeline, deployment, container
- **Architecture terms**: microservices, serverless, monolith, middleware, endpoint, cache
- **Data terms**: schema, query, mutation, resolver, payload, response
- **Security terms**: OAuth, JWT, token, authentication, authorization
- **Performance terms**: lazy loading, code splitting, bundle, chunk, cache
- **Git terms**: commit, branch, merge, pull request, repository
- **General tech**: frontend, backend, fullstack, database, server, client

**Examples:**
```typescript
// CORRECT - technical terms in English
{ nl: 'Gebruik React hooks voor state management', en: 'Use React hooks for state management' }
{ nl: 'De API response bevat JSON data', en: 'The API response contains JSON data' }
{ nl: 'Deploy naar Kubernetes met CI/CD', en: 'Deploy to Kubernetes with CI/CD' }

// INCORRECT - don't translate technical terms
{ nl: 'Gebruik React haken voor toestandbeheer', en: 'Use React hooks for state management' }  // NO!
```

**What TO translate:**
- Action verbs: "Create" → "Maak", "Configure" → "Configureer"
- Descriptive words: "fast" → "snel", "simple" → "eenvoudig"
- Connecting words and general language
- Slide titles and explanatory content (while preserving technical terms)

## Slide Type Patterns

### 1. Title Slide
**Purpose**: Chapter opener, set the tone
**When to use**: Start of each chapter

```typescript
{
  type: 'title',
  title: {
    nl: 'Korte, krachtige titel',      // 5-8 words max
    en: 'Short, powerful title'
  },
  content: {
    nl: 'Ondertitel met context',       // Optional subtitle
    en: 'Subtitle with context'
  }
}
```

**Best Practices:**
- Use action words or questions
- Create curiosity or promise value
- Match the chapter's emotional tone

### 2. Concept Slide
**Purpose**: Explain a single idea with visual support
**When to use**: Core explanations, definitions, key points

```typescript
{
  type: 'concept',
  title: {
    nl: 'Het concept in een zin',
    en: 'The concept in one sentence'
  },
  content: {
    nl: 'Korte uitleg van maximaal twee zinnen.',
    en: 'Brief explanation of maximum two sentences.'
  },
  visual: 'diagram' | 'flowchart' | 'icon' | 'chart' | 'none',
  icon: '🎯',           // Single emoji when visual='icon'
  svg: '<svg>...</svg>', // Inline SVG when visual='diagram'
  mermaid: 'flowchart LR...'  // Mermaid code when visual='flowchart'
}
```

**Visual Selection Guide:**
- `icon`: Simple concepts, use expressive emoji
- `diagram`: Architecture, relationships, structures
- `flowchart`: Processes, decision trees, data flow
- `chart`: Comparisons, trends, metrics
- `none`: When the text speaks for itself

### 3. Comparison Slide
**Purpose**: Side-by-side evaluation
**When to use**: Pros/cons, before/after, A vs B

```typescript
{
  type: 'comparison',
  title: {
    nl: 'Optie A vs Optie B',
    en: 'Option A vs Option B'
  },
  items: [
    {
      title: { nl: 'Optie A', en: 'Option A' },
      content: { nl: 'Voordelen en kenmerken', en: 'Benefits and features' }
    },
    {
      title: { nl: 'Optie B', en: 'Option B' },
      content: { nl: 'Voordelen en kenmerken', en: 'Benefits and features' }
    }
  ]
}
```

**Best Practices:**
- Exactly 2 items for clean layout
- Parallel structure in titles and content
- Fair, balanced comparison
- Highlight the recommended option if applicable

### 4. Process Slide
**Purpose**: Step-by-step explanation
**When to use**: Workflows, tutorials, implementation guides

```typescript
{
  type: 'process',
  title: {
    nl: 'Hoe het werkt',
    en: 'How it works'
  },
  steps: [
    {
      title: { nl: 'Stap 1', en: 'Step 1' },
      content: { nl: 'Actie beschrijving', en: 'Action description' }
    },
    // 3-5 steps maximum
  ]
}
```

**Best Practices:**
- 3-5 steps maximum (more = split into multiple slides)
- Each step: verb + object format
- Clear progression from start to end
- Consider numbering vs. flow arrows

### 5. Code Slide
**Purpose**: Show and explain code
**When to use**: Technical demos, implementation examples

```typescript
{
  type: 'code',
  title: {
    nl: 'Implementatie voorbeeld',
    en: 'Implementation example'
  },
  code: `function example() {
  // Keep under 15 lines
  return result;
}`,
  language: 'typescript',  // Required for syntax highlighting
  explanation: {
    nl: 'Uitleg van wat de code doet',
    en: 'Explanation of what the code does'
  }
}
```

**Best Practices:**
- Maximum 15 lines of code
- Highlight the key concept, not boilerplate
- Use comments sparingly
- Always specify language
- Explanation focuses on "what" and "why", not "how"

### 6. Stats Slide
**Purpose**: Impactful numbers
**When to use**: Data points, metrics, proof of value

```typescript
{
  type: 'stats',
  title: {
    nl: 'De cijfers spreken',
    en: 'The numbers speak'
  },
  stats: [
    {
      number: '47%',
      label: { nl: 'Snellere laadtijd', en: 'Faster load time' }
    },
    {
      number: '3x',
      label: { nl: 'Meer conversies', en: 'More conversions' }
    }
  ]
}
```

**Best Practices:**
- 2-4 statistics maximum
- Round numbers for impact (47% not 47.3%)
- Use consistent formatting (%, x, k, M)
- Each stat needs context via label

### 7. Checklist Slide
**Purpose**: Key points to remember
**When to use**: Requirements, best practices, action items

```typescript
{
  type: 'checklist',
  title: {
    nl: 'Waar je op moet letten',
    en: 'What to look out for'
  },
  items: [
    { nl: 'Eerste belangrijk punt', en: 'First important point' },
    { nl: 'Tweede belangrijk punt', en: 'Second important point' },
    // 4-6 items maximum
  ]
}
```

**Best Practices:**
- 4-6 items maximum
- Action-oriented language (verbs)
- Consistent grammatical structure
- Most important items first

### 8. Summary Slide
**Purpose**: Chapter or presentation wrap-up
**When to use**: End of chapters, conclusion

```typescript
{
  type: 'summary',
  title: {
    nl: 'Wat we geleerd hebben',
    en: 'What we learned'
  },
  points: [
    { nl: 'Eerste key takeaway', en: 'First key takeaway' },
    { nl: 'Tweede key takeaway', en: 'Second key takeaway' },
    // 3-5 points maximum
  ]
}
```

**Best Practices:**
- 3-5 takeaways maximum
- One sentence each
- Final point = call-to-action
- Reference earlier content

## Chapter Structure Template

A well-structured chapter typically follows this pattern:

```typescript
{
  id: 'chapter-id',
  title: { nl: 'Hoofdstuktitel', en: 'Chapter Title' },
  slides: [
    { type: 'title', ... },        // 1. Chapter opener
    { type: 'concept', ... },       // 2-3. Core concepts
    { type: 'concept', ... },
    { type: 'process|code', ... },  // 4. How it works
    { type: 'comparison', ... },    // 5. Trade-offs (optional)
    { type: 'summary', ... }        // 6. Wrap-up
  ]
}
```

## Content Guidelines

### Slide Count by Duration
- 5 min: 3-5 slides
- 15 min: 8-12 slides
- 30 min: 15-20 slides
- 45 min: 22-30 slides
- 60 min: 30-40 slides

### Narrative Flow
1. **Hook**: Start with a problem or question
2. **Context**: Why this matters to the audience
3. **Content**: The main teaching points
4. **Proof**: Examples, code, or data
5. **Action**: What to do with this knowledge

### Analogies and Metaphors
For complex technical concepts, use relatable analogies:
- "Think of it like a restaurant kitchen..."
- "Just as a library organizes books..."
- "Similar to how GPS navigation works..."

## Output Format

When generating slides, output valid TypeScript that matches the `Slide` type:

```typescript
import { PresentationData } from '../../types/presentation';

export const myPresentation: PresentationData = {
  meta: {
    title: { nl: 'Titel', en: 'Title' },
    author: 'Author Name',
    date: '2025-01-15',
    description: { nl: '...', en: '...' },
    tags: ['tag1', 'tag2']
  },
  chapters: [
    {
      id: 'intro',
      title: { nl: 'Introductie', en: 'Introduction' },
      slides: [
        // Slide objects here
      ]
    }
  ]
};
```

## Theme Compatibility

All slides must work in BOTH themes:
- **personal**: Dark background, indigo/cyan accents
- **business**: Light background, red accents

For visuals:
- Use CSS variables in SVG: `var(--accent-primary)`, `var(--text-primary)`
- Mermaid diagrams auto-adapt via theme configuration
- Never hardcode colors that only work in one theme

## Quality Checklist

Before outputting slides, verify:
- [ ] Every text field has both `nl` and `en`
- [ ] Technical terms are in English in BOTH language versions
- [ ] Slide count matches estimated duration
- [ ] Code slides have `language` specified
- [ ] Stats slides have 2-4 items
- [ ] Comparison slides have exactly 2 items
- [ ] Process slides have 3-5 steps
- [ ] Checklist slides have 4-6 items
- [ ] Each chapter starts with a title slide
- [ ] Progressive narrative flow
- [ ] No duplicate content across slides
- [ ] SVGs use CSS variables (theme-compatible)
- [ ] No hardcoded colors in visuals
