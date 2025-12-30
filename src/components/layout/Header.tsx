import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sun, Moon, Globe, Maximize2, Menu } from "lucide-react";
import { Theme, Language } from "../../types/presentation";

interface HeaderProps {
  title: string;
  theme: Theme;
  language: Language;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  onToggleFullscreen: () => void;
  onToggleSidebar?: () => void;
  showMobileMenu?: boolean;
  className?: string;
}

export function Header({
  title,
  theme,
  language,
  onToggleTheme,
  onToggleLanguage,
  onToggleFullscreen,
  onToggleSidebar,
  showMobileMenu = false,
  className = "",
}: HeaderProps) {
  const themeClasses =
    theme === "personal"
      ? "border-slate-700 text-white"
      : "border-gray-200 text-gray-900";

  const buttonClasses =
    theme === "personal"
      ? "bg-slate-800 border-slate-700 text-white hover:bg-indigo-600 hover:text-white"
      : "bg-gray-100 border-gray-200 text-gray-900 hover:bg-red-600 hover:text-white";

  const bgColor = theme === "personal" ? "rgba(2, 6, 23, 0.9)" : "rgba(255, 255, 255, 0.9)";

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 h-15 px-6 z-60
        flex items-center justify-between
        transition-all duration-200
        ${themeClasses} ${className}
        group/header
        hover:backdrop-blur-md hover:border-b
      `}
      style={{
        backgroundColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {/* Left side */}
      <div className="flex items-center space-x-4 opacity-0 group-hover/header:opacity-100 transition-opacity duration-200">
        {showMobileMenu && (
          <button
            onClick={onToggleSidebar}
            className={`
              flex items-center justify-center w-10 h-10 rounded-lg border
              transition-all duration-200 focus-ring
              ${buttonClasses}
            `}
            title="Menu"
          >
            <Menu size={20} />
          </button>
        )}

        <Link
          to="/"
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg border
            transition-all duration-200 focus-ring text-sm font-medium
            ${buttonClasses}
          `}
          title="Back to Overview"
        >
          <ArrowLeft size={16} />
          <span>Overview</span>
        </Link>
      </div>

      {/* Center */}
      <div className="flex-1 text-center opacity-0 group-hover/header:opacity-100 transition-opacity duration-200">
        <h1 className="text-lg font-semibold truncate px-4">{title}</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2 opacity-0 group-hover/header:opacity-100 transition-opacity duration-200">
        <button
          onClick={onToggleTheme}
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border
            transition-all duration-200 focus-ring
            ${buttonClasses}
          `}
          title="Toggle Theme (T)"
        >
          {theme === "personal" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={onToggleLanguage}
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border
            transition-all duration-200 focus-ring relative
            ${buttonClasses}
          `}
          title={`Toggle Language (L) - Currently: ${language.toUpperCase()}`}
        >
          <Globe size={20} />
          <span className="absolute -top-1 -right-1 text-xs font-bold">
            {language.toUpperCase()}
          </span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border
            transition-all duration-200 focus-ring
            ${buttonClasses}
          `}
          title="Fullscreen (F)"
        >
          <Maximize2 size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
