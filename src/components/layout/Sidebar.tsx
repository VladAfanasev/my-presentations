import React from "react";
import { Chapter, FlatSlide, Theme, Language } from "../../types/presentation";

interface SidebarProps {
  chapters: Chapter[];
  slides: FlatSlide[];
  currentSlide: number;
  theme: Theme;
  language: Language;
  onSlideChange: (slideIndex: number) => void;
  onChapterChange: (chapterIndex: number) => void;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  hideOnCover?: boolean;
}

export function Sidebar({
  chapters,
  slides,
  currentSlide,
  theme,
  language,
  onSlideChange,
  onChapterChange,
  getLocalizedText,
  isOpen = true,
  onClose,
  className = "",
  hideOnCover = false,
}: SidebarProps) {
  // Hide sidebar completely on cover slide
  if (hideOnCover) {
    return null;
  }
  const themeClasses =
    theme === "personal"
      ? "border-slate-700 text-white"
      : "border-gray-200 text-gray-900";

  const chapterClasses =
    theme === "personal"
      ? "text-slate-400 hover:bg-slate-800 hover:text-white"
      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

  const activeChapterClasses =
    theme === "personal" ? "bg-indigo-600 text-white" : "bg-red-600 text-white";

  const currentSlideData = slides[currentSlide];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-[250px] h-full z-50
          transition-transform duration-300 backdrop-blur-md
          ${themeClasses}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${className}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Header - clickable to go to cover slide */}
          <div className="px-6 pb-4 pt-20">
            <button
              onClick={() => onSlideChange(0)}
              className="text-lg font-semibold hover:opacity-70 transition-opacity cursor-pointer"
            >
              Chapters
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
            <nav className="space-y-2">
              {chapters.map((chapter, chapterIndex) => {
                const isCurrentChapter =
                  currentSlideData?.chapterIndex === chapterIndex;

                return (
                  <div key={chapter.id}>
                    {/* Chapter header */}
                    <button
                      onClick={() => onChapterChange(chapterIndex)}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg transition-all duration-200
                        text-md font-medium focus-ring
                        ${isCurrentChapter ? activeChapterClasses : chapterClasses}
                      `}
                    >
                      <span>{getLocalizedText(chapter.title)}</span>
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
