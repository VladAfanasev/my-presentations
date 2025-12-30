import { PresentationData, GalleryPresentation } from '../types/presentation';

export const gettingStartedPresentation: PresentationData = {
  meta: {
    title: { nl: 'Aan de Slag', en: 'Getting Started' },
    author: 'Presentation System',
    date: '2025-01-15',
    description: { 
      nl: 'Leer hoe dit presentatiesysteem werkt en hoe je je eigen presentaties kunt maken.', 
      en: 'Learn how this presentation system works and how to create your own presentations.' 
    },
    tags: ['tutorial', 'guide', 'system'],
  },
  chapters: [
    {
      id: 'welcome',
      title: { nl: 'Welkom', en: 'Welcome' },
      slides: [
        {
          type: 'title',
          title: { 
            nl: 'Aan de Slag', 
            en: 'Getting Started' 
          },
          content: { 
            nl: 'Leer hoe dit presentatiesysteem werkt', 
            en: 'Learn how this presentation system works' 
          },
        },
        {
          type: 'concept',
          title: { 
            nl: 'Wat is dit?', 
            en: 'What is this?' 
          },
          content: { 
            nl: 'Een krachtig React-gebaseerd presentatiesysteem voor frontend development en AI onderwerpen.', 
            en: 'A powerful React-based presentation system for frontend development and AI topics.' 
          },
          visual: 'icon',
          icon: '🚀',
        },
      ],
    },
    {
      id: 'navigation',
      title: { nl: 'Navigatie & Bediening', en: 'Navigation & Controls' },
      slides: [
        {
          type: 'checklist',
          title: { 
            nl: 'Toetsenbord Snelkoppelingen', 
            en: 'Keyboard Shortcuts' 
          },
          content: { 
            nl: 'Gebruik deze sneltoetsen om efficiënt te navigeren:', 
            en: 'Use these shortcuts to navigate efficiently:' 
          },
          items: [
            { nl: '← → of Spatie — Navigeer tussen slides', en: '← → or Space — Navigate between slides' },
            { nl: 'T — Wissel van thema', en: 'T — Toggle theme' },
            { nl: 'L — Wissel van taal', en: 'L — Toggle language' },
            { nl: 'M — Toon/verberg menu', en: 'M — Show/hide menu' },
            { nl: 'F — Volledig scherm', en: 'F — Fullscreen mode' },
            { nl: '1-9 — Spring naar hoofdstuk', en: '1-9 — Jump to chapter' },
          ],
        },
        {
          type: 'comparison',
          title: { 
            nl: 'Navigatie Opties', 
            en: 'Navigation Options' 
          },
          items: [
            {
              title: { nl: 'Toetsenbord', en: 'Keyboard' },
              content: { nl: 'Snelle navigatie met pijltjestoetsen en snelkoppelingen', en: 'Fast navigation with arrow keys and shortcuts' },
            },
            {
              title: { nl: 'Muis/Touch', en: 'Mouse/Touch' },
              content: { nl: 'Klik links/rechts of veeg om te navigeren', en: 'Click left/right or swipe to navigate' },
            },
          ],
        },
      ],
    },
    {
      id: 'themes',
      title: { nl: 'Themas', en: 'Themes' },
      slides: [
        {
          type: 'comparison',
          title: { 
            nl: 'Beschikbare Themas', 
            en: 'Available Themes' 
          },
          items: [
            {
              title: { nl: 'Personal (Donker)', en: 'Personal (Dark)' },
              content: { nl: 'Developer-focused donker thema met indigo accenten', en: 'Developer-focused dark theme with indigo accents' },
            },
            {
              title: { nl: 'Business (Licht)', en: 'Business (Light)' },
              content: { nl: 'Professioneel licht thema met rode Qualogy-stijl accenten', en: 'Professional light theme with red Qualogy-style accents' },
            },
          ],
        },
        {
          type: 'concept',
          title: { 
            nl: 'Thema Wisselen', 
            en: 'Theme Switching' 
          },
          content: { 
            nl: 'Druk op T of klik de thema knop om te wisselen tussen donkere en lichte themas.', 
            en: 'Press T or click the theme button to switch between dark and light themes.' 
          },
          visual: 'icon',
          icon: '🎨',
        },
      ],
    },
    {
      id: 'content',
      title: { nl: 'Content Maken', en: 'Creating Content' },
      slides: [
        {
          type: 'process',
          title: { 
            nl: 'Slide Types', 
            en: 'Slide Types' 
          },
          steps: [
            {
              title: { nl: 'Titel', en: 'Title' },
              content: { nl: 'Hoofdstuk openers', en: 'Chapter openers' },
            },
            {
              title: { nl: 'Concept', en: 'Concept' },
              content: { nl: 'Enkele ideeën', en: 'Single ideas' },
            },
            {
              title: { nl: 'Code', en: 'Code' },
              content: { nl: 'Code snippets', en: 'Code snippets' },
            },
            {
              title: { nl: 'Stats', en: 'Stats' },
              content: { nl: 'Cijfers & data', en: 'Numbers & data' },
            },
          ],
        },
        {
          type: 'code',
          title: { 
            nl: 'Voorbeeld Code Slide', 
            en: 'Example Code Slide' 
          },
          content: { 
            nl: 'Zo ziet een code slide eruit:', 
            en: 'This is how a code slide looks:' 
          },
          code: `// React component example
function Welcome({ name }: { name: string }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to the React presentation system</p>
    </div>
  );
}

export default Welcome;`,
          language: 'typescript',
          explanation: { 
            nl: 'Code wordt automatisch gehighlight voor betere leesbaarheid.', 
            en: 'Code is automatically highlighted for better readability.' 
          },
        },
        {
          type: 'stats',
          title: { 
            nl: 'Indrukwekkende Cijfers', 
            en: 'Impressive Numbers' 
          },
          stats: [
            {
              number: '100%',
              label: { nl: 'TypeScript', en: 'TypeScript' },
            },
            {
              number: '2',
              label: { nl: 'Talen', en: 'Languages' },
            },
            {
              number: '∞',
              label: { nl: 'Mogelijkheden', en: 'Possibilities' },
            },
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: { nl: 'Tips & Trucs', en: 'Tips & Tricks' },
      slides: [
        {
          type: 'checklist',
          title: { 
            nl: 'Best Practices', 
            en: 'Best Practices' 
          },
          content: { 
            nl: 'Volg deze richtlijnen voor effectieve presentaties:', 
            en: 'Follow these guidelines for effective presentations:' 
          },
          items: [
            { nl: 'Een kernidee per slide', en: 'One core idea per slide' },
            { nl: 'Minimale tekst, maximale visuele impact', en: 'Minimal text, maximum visual impact' },
            { nl: 'Gebruik analogieën voor complexe concepten', en: 'Use analogies for complex concepts' },
            { nl: 'Logische verhalende opbouw', en: 'Logical narrative flow' },
            { nl: 'Test in beide themas', en: 'Test in both themes' },
          ],
        },
        {
          type: 'summary',
          title: { 
            nl: 'Samenvatting', 
            en: 'Summary' 
          },
          content: { 
            nl: 'Je bent nu klaar om je eigen presentaties te maken!', 
            en: 'You are now ready to create your own presentations!' 
          },
          points: [
            { nl: 'Gebruik React components voor herbruikbaarheid', en: 'Use React components for reusability' },
            { nl: 'Experimenteer met verschillende slide types', en: 'Experiment with different slide types' },
            { nl: 'Test keyboard shortcuts', en: 'Test keyboard shortcuts' },
            { nl: 'Verken beide themas', en: 'Explore both themes' },
            { nl: 'Deel je kennis!', en: 'Share your knowledge!' },
          ],
        },
      ],
    },
  ],
};

// Gallery presentations list
export const galleryPresentations: GalleryPresentation[] = [
  {
    slug: 'getting-started',
    title: { nl: 'Aan de Slag', en: 'Getting Started' },
    description: { 
      nl: 'Leer hoe dit React-presentatiesysteem werkt.', 
      en: 'Learn how this React presentation system works.' 
    },
    date: '2025-01-15',
    tags: ['tutorial', 'guide'],
    estimatedDuration: '10 min',
  },
  // Add more presentations here
];