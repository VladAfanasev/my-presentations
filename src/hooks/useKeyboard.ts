import { useEffect } from 'react';

export interface KeyboardHandlers {
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  onToggleFullscreen: () => void;
  onToggleSidebar: () => void;
  onGoToChapter: (chapterIndex: number) => void;
  onFirstSlide: () => void;
  onLastSlide: () => void;
  onCloseSidebar: () => void;
}

export function useKeyboard(handlers: KeyboardHandlers, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement ||
        (e.target as Element)?.contentEditable === 'true'
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          handlers.onNextSlide();
          break;
        
        case 'ArrowLeft':
          e.preventDefault();
          handlers.onPrevSlide();
          break;
        
        case 'Home':
          e.preventDefault();
          handlers.onFirstSlide();
          break;
        
        case 'End':
          e.preventDefault();
          handlers.onLastSlide();
          break;
        
        case 't':
        case 'T':
          e.preventDefault();
          handlers.onToggleTheme();
          break;
        
        case 'l':
        case 'L':
          e.preventDefault();
          handlers.onToggleLanguage();
          break;
        
        case 'f':
        case 'F':
          e.preventDefault();
          handlers.onToggleFullscreen();
          break;
        
        case 'm':
        case 'M':
          e.preventDefault();
          handlers.onToggleSidebar();
          break;
        
        case 'Escape':
          e.preventDefault();
          handlers.onCloseSidebar();
          break;
        
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          e.preventDefault();
          const chapterIndex = parseInt(e.key) - 1;
          handlers.onGoToChapter(chapterIndex);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers, enabled]);
}

// Hook for touch/swipe gestures
export function useTouch(handlers: { onNext: () => void; onPrev: () => void }, enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      // Minimum swipe distance
      const minSwipe = 50;

      // Horizontal swipe takes precedence
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipe) {
        if (deltaX > 0) {
          handlers.onPrev();
        } else {
          handlers.onNext();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handlers, enabled]);
}