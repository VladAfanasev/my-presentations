import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Sun, Moon, Globe, Calendar, Clock, Tag } from "lucide-react";
import { GalleryPresentation, Language, Theme } from "../types/presentation";
import { galleryPresentations } from "../data/presentations";

export function Gallery() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("gallery-theme") as Theme) || "personal";
    }
    return "personal";
  });

  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("gallery-language") as Language) || "en";
    }
    return "en";
  });

  const getLocalizedText = (text: string | { nl: string; en: string }) => {
    if (typeof text === "string") return text;
    return text[currentLang] || text.en || "";
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "personal" ? "business" : "personal";
    setCurrentTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("gallery-theme", newTheme);
      document.body.className = `theme-${newTheme}`;
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "nl" : "en";
    setCurrentLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("gallery-language", newLang);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.className = `theme-${currentTheme}`;
      document.title =
        currentLang === "nl" ? "Mijn Presentaties" : "My Presentations";
    }
  }, [currentTheme, currentLang]);

  const themeClasses =
    currentTheme === "personal"
      ? "bg-slate-950 text-white"
      : "bg-white text-gray-900";

  const cardClasses =
    currentTheme === "personal"
      ? "bg-slate-900 border-slate-700 text-white hover:border-indigo-500"
      : "bg-gray-50 border-gray-200 text-gray-900 hover:border-red-500";

  const buttonClasses =
    currentTheme === "personal"
      ? "bg-slate-800 border-slate-700 text-white hover:bg-indigo-600 hover:text-white"
      : "bg-gray-100 border-gray-200 text-gray-900 hover:bg-red-600 hover:text-white";

  const titleClasses =
    currentTheme === "personal"
      ? "bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-gray-900 via-red-600 to-red-800 bg-clip-text text-transparent";

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(
      currentLang === "nl" ? "nl-NL" : "en-US",
      options
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${themeClasses}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${titleClasses}`}>
            {currentLang === "nl" ? "Mijn Presentaties" : "My Presentations"}
          </h1>
          <p className="text-lg md:text-xl opacity-75 max-w-2xl mx-auto mb-8">
            {currentLang === "nl"
              ? "Frontend development en AI kennisdeling"
              : "Frontend development and AI knowledge sharing"}
          </p>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={toggleTheme}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg border
                transition-all duration-200 focus-ring
                ${buttonClasses}
              `}
              title="Toggle Theme"
            >
              {currentTheme === "personal" ? (
                <>
                  <Sun size={20} />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <Moon size={20} />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg border
                transition-all duration-200 focus-ring
                ${buttonClasses}
              `}
              title="Toggle Language"
            >
              <Globe size={20} />
              <span>{currentLang === "nl" ? "English" : "Nederlands"}</span>
            </button>
          </div>
        </header>

        {/* Presentations Grid */}
        {galleryPresentations.length === 0 ? (
          <div className={`text-center py-16 rounded-xl border ${cardClasses}`}>
            <h2 className="text-2xl font-semibold mb-4 opacity-75">
              {currentLang === "nl"
                ? "Geen presentaties gevonden"
                : "No presentations found"}
            </h2>
            <p className="opacity-60">
              {currentLang === "nl"
                ? "Voeg je eerste presentatie toe met de React components."
                : "Add your first presentation using the React components."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPresentations.map((presentation) => (
              <Link
                key={presentation.slug}
                to="/presentation/$slug"
                params={{ slug: presentation.slug }}
                className={`
                  block p-6 rounded-xl border-2 transition-all duration-300
                  transform hover:-translate-y-1 hover:shadow-lg
                  ${cardClasses}
                `}
              >
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {getLocalizedText(presentation.title)}
                  </h3>

                  {/* Description */}
                  <p className="opacity-75 leading-relaxed">
                    {getLocalizedText(presentation.description)}
                  </p>

                  {/* Meta information */}
                  <div className="space-y-2 text-sm opacity-60">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{formatDate(presentation.date)}</span>
                    </div>

                    {presentation.estimatedDuration && (
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{presentation.estimatedDuration}</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {presentation.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {presentation.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`
                            inline-flex items-center px-2 py-1 rounded text-xs font-medium
                            ${
                              currentTheme === "personal"
                                ? "bg-indigo-600 text-white"
                                : "bg-red-600 text-white"
                            }
                          `}
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Language links */}
                  <div className="flex space-x-2 pt-2">
                    <span className="inline-block px-3 py-1 text-xs rounded-full border opacity-60">
                      🇳🇱 Nederlands
                    </span>
                    <span className="inline-block px-3 py-1 text-xs rounded-full border opacity-60">
                      🇺🇸 English
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center pt-16 pb-8 opacity-60"></footer>
      </div>
    </div>
  );
}

export default Gallery;
