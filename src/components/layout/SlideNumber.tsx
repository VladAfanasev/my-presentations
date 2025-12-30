import React from "react";
import { Theme } from "../../types/presentation";

interface SlideNumberProps {
  current: number;
  total: number;
  theme: Theme;
  className?: string;
}

export function SlideNumber({
  current,
  total,
  theme,
  className = "",
}: SlideNumberProps) {
  const containerClasses =
    theme === "personal"
      ? "bg-slate-900 text-slate-500 border-slate-700"
      : "bg-gray-50 text-gray-500 border-gray-200";

  return (
    <div
      className={`
        fixed top-20 right-6 z-10
        px-3 py-1.5 rounded-full border
        text-sm font-medium transition-all duration-200
        ${containerClasses}
        ${className}
      `}
    >
      <span className="font-chivo tracking-tight text-lg">
        <span className="text-brand-primary font-bold">{current}</span> /{" "}
        <span className="text-gray-500">{total}</span>
      </span>
    </div>
  );
}

export default SlideNumber;
