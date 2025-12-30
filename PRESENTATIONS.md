# React Presentations System

A modern, React-based presentation system built with TanStack Start, TypeScript, and Tailwind CSS. Perfect for creating and sharing knowledge about frontend development and AI topics.

## ✨ Features

- **🎨 Multi-theme Support**: Switch between dark (personal) and light (business) themes
- **🌐 Dual Language**: Every presentation supports Dutch (NL) and English (EN)
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **⌨️ Keyboard Navigation**: Complete keyboard shortcuts for efficient control
- **🚀 Modern Stack**: React, TypeScript, TanStack Start, Tailwind CSS
- **🎯 Type Safety**: End-to-end TypeScript coverage
- **📊 Rich Slide Types**: 8 different slide components for varied content
- **💾 State Persistence**: Theme and language preferences saved locally

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Code Highlighting**: React Syntax Highlighter
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` `Space` | Navigate slides |
| `T` | Toggle theme (dark/light) |
| `L` | Toggle language (NL/EN) |
| `F` | Toggle fullscreen |
| `M` | Toggle sidebar menu |
| `Escape` | Close panels/exit fullscreen |
| `Home` `End` | First/last slide |
| `1`-`9` | Jump to chapter |

## 📝 Creating Presentations

### 1. Define Your Content

Create a new presentation object in `src/data/presentations.ts`:

```typescript
export const myPresentation: PresentationData = {
  meta: {
    title: { nl: 'Mijn Presentatie', en: 'My Presentation' },
    author: 'Your Name',
    date: '2025-01-15',
    description: { nl: 'Nederlandse beschrijving', en: 'English description' },
    tags: ['react', 'typescript']
  },
  chapters: [
    {
      id: 'intro',
      title: { nl: 'Inleiding', en: 'Introduction' },
      slides: [
        {
          type: 'title',
          title: { nl: 'Welkom', en: 'Welcome' },
          content: { nl: 'Nederlandse content', en: 'English content' }
        },
        // More slides...
      ]
    }
  ]
};
```

### 2. Add to Router

Update `src/routes/presentation.$slug.tsx` to include your new presentation.

### 3. Update Gallery

Add your presentation to the gallery list in `src/data/presentations.ts`.

## 🎨 Available Slide Types

### Title Slide
```typescript
{
  type: 'title',
  title: { nl: 'Hoofdstuk Titel', en: 'Chapter Title' },
  content: { nl: 'Ondertitel', en: 'Subtitle' }
}
```

### Code Slide
```typescript
{
  type: 'code',
  title: { nl: 'Code Voorbeeld', en: 'Code Example' },
  code: 'const example = "Hello World";',
  language: 'typescript',
  explanation: { nl: 'Uitleg...', en: 'Explanation...' }
}
```

### Stats Slide
```typescript
{
  type: 'stats',
  title: { nl: 'Cijfers', en: 'Numbers' },
  stats: [
    { number: '100%', label: { nl: 'Succesvol', en: 'Success' } }
  ]
}
```

## 🎯 Themes

### Personal Theme (Dark)
- Background: Near-black with subtle gradients
- Accent: Indigo/Purple gradient
- Use case: Technical presentations, developer talks

### Business Theme (Light) 
- Background: Clean white with warm tones
- Accent: Professional red (Qualogy-style)
- Use case: Client presentations, business meetings

Themes are automatically applied and persisted across sessions.

---

**Built with ❤️ for modern presentations**