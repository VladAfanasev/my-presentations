export interface LocalizedText {
  nl: string;
  en: string;
}

export type Language = 'nl' | 'en';
export type Theme = 'personal' | 'business';

export interface PresentationMeta {
  title: LocalizedText;
  author: string;
  date: string;
  description?: LocalizedText;
  tags?: string[];
}

export interface SlideBase {
  type: string;
  title: LocalizedText;
  content?: LocalizedText;
}

export interface TitleSlide extends SlideBase {
  type: 'title';
}

export interface ConceptSlide extends SlideBase {
  type: 'concept';
  visual?: 'diagram' | 'flowchart' | 'icon' | 'chart' | 'none';
  icon?: string;
}

export interface ComparisonSlide extends SlideBase {
  type: 'comparison';
  items: Array<{
    title: LocalizedText;
    content: LocalizedText;
  }>;
}

export interface ProcessSlide extends SlideBase {
  type: 'process';
  steps: Array<{
    title: LocalizedText;
    content: LocalizedText;
  }>;
}

export interface CodeSlide extends SlideBase {
  type: 'code';
  code: string;
  language?: string;
  explanation?: LocalizedText;
}

export interface StatsSlide extends SlideBase {
  type: 'stats';
  stats: Array<{
    number: string;
    label: LocalizedText;
  }>;
}

export interface ChecklistSlide extends SlideBase {
  type: 'checklist';
  items: LocalizedText[];
}

export interface SummarySlide extends SlideBase {
  type: 'summary';
  points: LocalizedText[];
}

export type Slide = 
  | TitleSlide 
  | ConceptSlide 
  | ComparisonSlide 
  | ProcessSlide 
  | CodeSlide 
  | StatsSlide 
  | ChecklistSlide 
  | SummarySlide;

export interface Chapter {
  id: string;
  title: LocalizedText;
  slides: Slide[];
}

export interface PresentationData {
  meta: PresentationMeta;
  chapters: Chapter[];
}

export interface FlatSlide extends Slide {
  slideIndex: number;
  chapterIndex: number;
  slideInChapterIndex: number;
  chapterId: string;
  chapterTitle: LocalizedText;
}

export interface PresentationState {
  currentSlide: number;
  currentTheme: Theme;
  currentLang: Language;
  slides: FlatSlide[];
  isFullscreen: boolean;
  sidebarOpen: boolean;
}

export interface GalleryPresentation {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  date: string;
  tags: string[];
  estimatedDuration?: string;
}