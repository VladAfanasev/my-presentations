import React, { useEffect } from "react";
import { PresentationData, Slide } from "../types/presentation";
import { usePresentation } from "../hooks/usePresentation";
import { useKeyboard, useTouch } from "../hooks/useKeyboard";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ProgressBar from "./layout/ProgressBar";
import SlideNumber from "./layout/SlideNumber";
import {
  TitleSlide,
  ConceptSlide,
  CodeSlide,
  StatsSlide,
  ComparisonSlide,
  ProcessSlide,
  ChecklistSlide,
  SummarySlide,
} from "./slides";

interface PresentationProps {
  data: PresentationData;
}

function SlideRenderer({
  slide,
  theme,
  getLocalizedText,
  isActive,
}: {
  slide: Slide;
  theme: "personal" | "business";
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive: boolean;
}) {
  const props = { slide, theme, getLocalizedText, isActive };

  switch (slide.type) {
    case "title":
      return <TitleSlide {...props} slide={slide} />;
    case "concept":
      return <ConceptSlide {...props} slide={slide} />;
    case "code":
      return <CodeSlide {...props} slide={slide} />;
    case "stats":
      return <StatsSlide {...props} slide={slide} />;
    case "comparison":
      return <ComparisonSlide {...props} slide={slide} />;
    case "process":
      return <ProcessSlide {...props} slide={slide} />;
    case "checklist":
      return <ChecklistSlide {...props} slide={slide} />;
    case "summary":
      return <SummarySlide {...props} slide={slide} />;
    default:
      return (
        <div className="flex items-center justify-center h-full text-xl">
          Unknown slide type: {(slide as any).type}
        </div>
      );
  }
}

export function Presentation({ data }: PresentationProps) {
  const {
    currentSlide,
    currentTheme,
    currentLang,
    isFullscreen,
    sidebarOpen,
    slides,
    currentSlideData,
    progress,
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
  } = usePresentation(data);

  // Keyboard shortcuts
  useKeyboard({
    onNextSlide: nextSlide,
    onPrevSlide: prevSlide,
    onToggleTheme: toggleTheme,
    onToggleLanguage: toggleLanguage,
    onToggleFullscreen: toggleFullscreen,
    onToggleSidebar: toggleSidebar,
    onGoToChapter: goToChapter,
    onFirstSlide: () => goToSlide(0),
    onLastSlide: () => goToSlide(slides.length - 1),
    onCloseSidebar: closeSidebar,
  });

  // Touch/swipe navigation
  useTouch({
    onNext: nextSlide,
    onPrev: prevSlide,
  });

  // Mouse navigation (click left/right side of screen)
  const handleSlideClick = (event: React.MouseEvent) => {
    if (
      sidebarOpen &&
      typeof window !== "undefined" &&
      window.innerWidth <= 768
    ) {
      closeSidebar();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;

    if (x < width * 0.3) {
      prevSlide();
    } else if (x > width * 0.7) {
      nextSlide();
    }
  };

  // Update document title
  useEffect(() => {
    const title = getLocalizedText(data.meta.title);
    document.title = `${title} — ${currentLang.toUpperCase()}`;
  }, [data.meta.title, currentLang, getLocalizedText]);

  return (
    <div
      className={`
        h-full w-full relative overflow-hidden
        group cursor-pointer
        theme-${currentTheme}
      `}
      style={{
        backgroundColor: currentTheme === "personal" ? "#020617" : "#ffffff",
      }}
    >
      {/* Progress Bar */}
      <ProgressBar progress={progress} theme={currentTheme} />

      {/* Header */}
      <Header
        title={getLocalizedText(data.meta.title)}
        theme={currentTheme}
        language={currentLang}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
        onToggleFullscreen={toggleFullscreen}
        onToggleSidebar={toggleSidebar}
        showMobileMenu={
          typeof window !== "undefined" && window.innerWidth <= 768
        }
      />

      {/* Sidebar - hidden on cover slide (first slide) */}
      <Sidebar
        chapters={data.chapters}
        slides={slides}
        currentSlide={currentSlide}
        theme={currentTheme}
        language={currentLang}
        onSlideChange={goToSlide}
        onChapterChange={goToChapter}
        getLocalizedText={getLocalizedText}
        isOpen={
          sidebarOpen ||
          (typeof window !== "undefined" && window.innerWidth > 768)
        }
        onClose={closeSidebar}
        hideOnCover={currentSlideData?.isCoverSlide === true}
      />

      {/* Main Slide Area - Full width/height behind sidebar and header */}
      <main
        className="absolute inset-0 overflow-hidden"
        onClick={handleSlideClick}
      >
        {/* Slide Number */}
        <SlideNumber
          current={currentSlide + 1}
          total={slides.length}
          theme={currentTheme}
        />

        {/* Slide Container */}
        <div className="relative w-full h-full">
          {currentSlideData && (
            <SlideRenderer
              slide={currentSlideData}
              theme={currentTheme}
              getLocalizedText={getLocalizedText}
              isActive={true}
            />
          )}
        </div>

        {/* Navigation Hints */}
        <div className="absolute bottom-4 left-4 text-xs opacity-10 hover:opacity-100 transition-opacity duration-200 hidden md:block z-50">
          Press ← → or Space to navigate • T for theme • L for language • F for
          fullscreen
        </div>
      </main>
    </div>
  );
}

export default Presentation;
