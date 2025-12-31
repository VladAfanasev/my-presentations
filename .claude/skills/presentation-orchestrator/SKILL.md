---
name: presentation-orchestrator
description: Coordinates presentation generation after discovery is complete. Use when you have a discovery context JSON and need to generate the full presentation including content, visuals, and speaker notes. Manages parallel generation and assembly.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Task
---

# Presentation Orchestrator

You are the project manager for presentation creation. Your role is to coordinate the generation of all presentation components and assemble them into a complete, working presentation.

## Prerequisites

Before starting orchestration, you need a **discovery context JSON** with:
- Topic and core message
- Audience profile
- Duration preferences
- Chapter structure outline

If you don't have this, invoke the `presentation-discovery` skill first.

## Critical Output Requirements

**Every presentation MUST be generated with:**

1. **BOTH Languages (nl + en)**
   - All slide text has both Dutch and English versions
   - Technical terms stay in English in both languages
   - Speaker notes in both languages (separate files)

2. **BOTH Themes (personal + business)**
   - All visuals use CSS variables for theme compatibility
   - No hardcoded colors - SVGs adapt to both themes
   - Mermaid diagrams use theme-aware configuration

3. **Complete Package**
   - Main presentation file (TypeScript)
   - Speaker notes in English
   - Speaker notes in Dutch
   - Visual assets (theme-compatible)
   - Image prompts (if applicable)

## Orchestration Workflow

### Step 1: Setup Project Structure

Create the folder structure for the new presentation:

```bash
# Create presentation folder
mkdir -p src/data/presentations/[slug]
mkdir -p src/data/presentations/[slug]/visuals
```

Files to create:
- `src/data/presentations/[slug].ts` - Main presentation data (bilingual)
- `src/data/presentations/[slug]/speaker-notes-en.md` - English speaker notes
- `src/data/presentations/[slug]/speaker-notes-nl.md` - Dutch speaker notes
- `src/data/presentations/[slug]/visuals/` - Theme-compatible SVGs and Mermaid diagrams
- `src/data/presentations/[slug]/image-prompts.md` - Image generation prompts (if needed)

### Step 2: Generate Chapter Content (Parallel)

For each chapter in the outline, spawn a Task agent to generate slide content:

```
Task: Generate chapter "[chapter-title]" slides
Subagent: general-purpose
Context: {
  chapterOutline: { ... },
  audienceProfile: { ... },
  slidePatterns: "Reference slide-content skill",
  previousChapters: [...] // For narrative continuity
}
Expected output: Array of slide objects
```

**Parallelization Strategy:**
- Chapters 1-2 can start immediately (intro content)
- Later chapters should wait if they depend on earlier narrative
- Visual-heavy slides can be flagged for visual generation

### Step 3: Generate Visuals (Parallel with Content)

For slides requiring visuals, spawn visual generation tasks:

```
Task: Generate [visual-type] for "[slide-title]"
Context: {
  slideContent: { ... },
  visualType: 'svg' | 'mermaid' | 'image-prompt',
  themes: ['personal', 'business'],  // MUST work in BOTH
  style: { ... }
}
Expected output: Theme-compatible SVG code, Mermaid syntax, or image prompt
```

**Visual Requirements:**
- **SVG**: Use CSS variables (`var(--accent-primary)`, etc.) - NO hardcoded colors
- **Mermaid**: Auto-adapts via theme configuration
- **Image Prompt**: Include variations for both dark and light themes
- **Labels**: Keep in English (technical terms never translated)

### Step 4: Generate Speaker Notes (Both Languages)

After content is stable, generate speaker notes in BOTH languages:

```
Task: Generate speaker notes for presentation
Context: {
  allSlides: [...],
  audienceProfile: { ... },
  duration: "30 min",
  speakingStyle: "conversational",
  languages: ["en", "nl"]  // ALWAYS both
}
Expected output: TWO markdown files:
  - speaker-notes-en.md (English)
  - speaker-notes-nl.md (Dutch)
```

**Language Guidelines:**
- Dutch notes: More direct, keep technical terms in English
- English notes: More elaborate, avoid Dutch idioms
- Both: Complete standalone documents, not translations of each other

### Step 5: Assembly

Combine all generated content into final files:

1. **Merge slide content** from all chapter tasks
2. **Verify bilingual completeness** - every text field has both `nl` and `en`
3. **Verify technical terms** - kept in English in both language versions
4. **Insert visual references** (theme-compatible SVG/Mermaid code)
5. **Generate TypeScript file** with proper types
6. **Write BOTH speaker notes files** (English and Dutch)
7. **Save image prompts** if any were generated

### Step 6: Registration

Update the presentation system to recognize the new presentation:

1. **Update gallery** - Add entry to `src/data/presentations.ts`:
```typescript
export const galleryPresentations: GalleryPresentation[] = [
  // ... existing
  {
    slug: '[new-slug]',
    title: { nl: '...', en: '...' },
    description: { nl: '...', en: '...' },
    date: '2025-01-15',
    tags: ['...'],
    estimatedDuration: '30 min'
  }
];
```

2. **Update route** - Add case to `src/routes/presentation.$slug.tsx`:
```typescript
import { [presentationName] } from '../data/presentations/[slug]';

function getPresentationBySlug(slug: string): PresentationData | null {
  switch (slug) {
    // ... existing
    case '[new-slug]':
      return [presentationName];
    default:
      return null;
  }
}
```

### Step 7: Validation

Run validation checks:

1. **TypeScript compilation**: `npx tsc --noEmit src/data/presentations/[slug].ts`
2. **Bilingual completeness**: Check for empty `nl` or `en` fields
3. **Slide count**: Verify matches expected duration
4. **Visual references**: Ensure all referenced visuals exist

## Output File Templates

### Main Presentation File (`[slug].ts`)

```typescript
import { PresentationData } from '../../types/presentation';

export const [camelCaseName]Presentation: PresentationData = {
  meta: {
    title: {
      nl: '[Dutch Title]',
      en: '[English Title]'
    },
    author: '[Author]',
    date: '[YYYY-MM-DD]',
    description: {
      nl: '[Dutch description]',
      en: '[English description]'
    },
    tags: ['tag1', 'tag2']
  },
  chapters: [
    {
      id: 'intro',
      title: { nl: 'Introductie', en: 'Introduction' },
      slides: [
        // Generated slides
      ]
    }
  ]
};
```

### Speaker Notes Files

**Create TWO files - one for each language:**

#### `speaker-notes-en.md` (English)
```markdown
# [English Title] - Speaker Notes

**Duration**: [X] minutes
**Audience**: [Audience description]
**Key Message**: [Core message in English]

---

## Chapter 1: [English Chapter Title]

### Slide 1: [English Slide Title]

**Duration**: 30 seconds
**Key Point**: [Main point in English]

#### Speaking Points
1. [First point in English]
2. [Supporting detail]
3. [Transition phrase]

---
```

#### `speaker-notes-nl.md` (Dutch)
```markdown
# [Dutch Title] - Sprekernotities

**Duur**: [X] minuten
**Doelgroep**: [Audience description in Dutch]
**Kernboodschap**: [Core message in Dutch]

---

## Hoofdstuk 1: [Dutch Chapter Title]

### Slide 1: [Dutch Slide Title]

**Duur**: 30 seconden
**Kernpunt**: [Main point in Dutch]

#### Spreekpunten
1. [First point in Dutch - technical terms stay English]
2. [Supporting detail]
3. [Transition phrase]

---
```

**IMPORTANT**: Technical terms (API, React, hooks, state, etc.) stay in English in both files!

### Image Prompts File (`image-prompts.md`)

```markdown
# Image Generation Prompts

## Slide 3: [Slide Title]

**Purpose**: [What this image represents]
**Style**: [minimal|corporate|artistic|technical]
**Mood**: [professional|inspiring|serious|playful]

**Prompt for Midjourney/DALL-E**:
[Detailed prompt text, including style keywords, composition, colors, and negative prompts]

**Theme Compatibility**:
- Personal (dark): [Color adjustments needed]
- Business (light): [Color adjustments needed]

---
```

## Error Handling

### If Content Generation Fails
1. Retry the specific chapter task
2. Simplify the outline if context is too complex
3. Generate placeholder content and flag for manual review

### If Visual Generation Fails
1. Use placeholder visual type
2. Generate image prompt as fallback
3. Flag slide for manual visual creation

### If Validation Fails
1. Fix TypeScript errors automatically
2. Fill in missing bilingual text (translate if needed)
3. Adjust slide count if mismatched

## Progress Reporting

Keep the user informed:

```
Creating presentation: [slug]

[1/8] Setting up project structure... done
[2/8] Generating Chapter 1 (4 slides)... done
[3/8] Generating Chapter 2 (5 slides)... done
[4/8] Generating Chapter 3 (4 slides)... done
[5/8] Creating theme-compatible visuals (3 diagrams)... done
[6/8] Writing English speaker notes... done
[7/8] Writing Dutch speaker notes... done
[8/8] Registering presentation... done

Presentation created successfully!

Files created:
- src/data/presentations/[slug].ts (bilingual: NL + EN)
- src/data/presentations/[slug]/speaker-notes-en.md
- src/data/presentations/[slug]/speaker-notes-nl.md
- src/data/presentations/[slug]/visuals/architecture.svg (theme-compatible)

Themes supported: personal (dark) + business (light)
Languages: Dutch + English

To preview: npm run dev → http://localhost:3000/presentation/[slug]
```

## Quality Standards

Every generated presentation must meet:

1. **Complete Bilingual Content**: No empty `nl` or `en` fields
2. **Technical Terms in English**: API, React, hooks, etc. never translated
3. **Theme Compatibility**: All visuals work in both personal AND business themes
4. **Proper TypeScript Types**: Must compile without errors
5. **Consistent Structure**: Chapters start with title slides
6. **Appropriate Length**: Slides match duration estimate
7. **Visual Balance**: Mix of text and visual slides
8. **Dual Speaker Notes**: Both English AND Dutch versions complete
9. **Progressive Narrative**: Builds understanding logically
10. **No Hardcoded Colors**: SVGs use CSS variables only
