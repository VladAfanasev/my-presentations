import { useState, useEffect, useCallback, useMemo } from 'react';
import { PresentationData, PresentationState, FlatSlide, Language, Theme } from '../types/presentation';

export function usePresentation(data: PresentationData) {
  // State initialization
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('presentation-theme') as Theme) || 'personal';
    }
    return 'personal';
  });
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('presentation-language') as Language) || 'en';
    }
    return 'en';
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Flatten slides for navigation
  const slides: FlatSlide[] = useMemo(() => {
    const flatSlides: FlatSlide[] = [];
    let slideIndex = 0;

    // Add cover slide first if it exists
    if (data.coverSlide) {
      flatSlides.push({
        ...data.coverSlide,
        slideIndex,
        chapterIndex: -1,
        slideInChapterIndex: 0,
        chapterId: 'cover',
        chapterTitle: { nl: 'Cover', en: 'Cover' },
        isCoverSlide: true,
      });
      slideIndex++;
    }

    data.chapters.forEach((chapter, chapterIndex) => {
      chapter.slides.forEach((slide, slideInChapterIndex) => {
        flatSlides.push({
          ...slide,
          slideIndex,
          chapterIndex,
          slideInChapterIndex,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
        });
        slideIndex++;
      });
    });

    return flatSlides;
  }, [data]);

  // Get localized text
  const getLocalizedText = useCallback((text: string | { nl: string; en: string }) => {
    if (typeof text === 'string') return text;
    return text[currentLang] || text.en || '';
  }, [currentLang]);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      // Update URL hash
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', `#slide=${index + 1}`);
      }
    }
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const goToChapter = useCallback((chapterIndex: number) => {
    if (chapterIndex >= 0 && chapterIndex < data.chapters.length) {
      const firstSlideOfChapter = slides.find(slide => slide.chapterIndex === chapterIndex);
      if (firstSlideOfChapter) {
        goToSlide(firstSlideOfChapter.slideIndex);
      }
    }
  }, [data.chapters.length, slides, goToSlide]);

  // Theme management
  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === 'personal' ? 'business' : 'personal';
    setCurrentTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('presentation-theme', newTheme);
      document.body.className = document.body.className.replace(/theme-\w+/, `theme-${newTheme}`);
    }
  }, [currentTheme]);

  // Language management
  const toggleLanguage = useCallback(() => {
    const newLang = currentLang === 'en' ? 'nl' : 'en';
    setCurrentLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('presentation-language', newLang);
      // Update page title
      const title = getLocalizedText(data.meta.title);
      document.title = `${title} — ${newLang.toUpperCase()}`;
    }
  }, [currentLang, data.meta.title, getLocalizedText]);

  // Fullscreen management
  const toggleFullscreen = useCallback(async () => {
    if (typeof document === 'undefined') return;

    try {
      if (!isFullscreen) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.warn('Fullscreen not supported or failed:', error);
    }
  }, [isFullscreen]);

  // Sidebar management
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Progress calculation
  const progress = useMemo(() => {
    return ((currentSlide + 1) / slides.length) * 100;
  }, [currentSlide, slides.length]);

  // Current slide data
  const currentSlideData = useMemo(() => {
    return slides[currentSlide];
  }, [slides, currentSlide]);

  // Initialize from URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      const params = new URLSearchParams(hash);
      const slideParam = params.get('slide');

      if (slideParam) {
        const slideIndex = parseInt(slideParam) - 1;
        if (slideIndex >= 0 && slideIndex < slides.length) {
          setCurrentSlide(slideIndex);
        }
      }

      // Apply theme to body
      document.body.className = `theme-${currentTheme}`;

      // Set initial title
      const title = getLocalizedText(data.meta.title);
      document.title = `${title} — ${currentLang.toUpperCase()}`;
    }
  }, [slides.length, currentTheme, currentLang, data.meta.title, getLocalizedText]);

  // Fullscreen event listeners
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return {
    // State
    currentSlide,
    currentTheme,
    currentLang,
    isFullscreen,
    sidebarOpen,
    slides,
    currentSlideData,
    progress,
    
    // Functions
    goToSlide,
    nextSlide,
    prevSlide,
    goToChapter,
    toggleTheme,
    toggleLanguage,
    toggleFullscreen,
    toggleSidebar,
    closeSidebar,
    getLocalizedText,
  };
}