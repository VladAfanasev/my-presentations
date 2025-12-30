import { Theme } from "../../types/presentation";

interface ProgressBarProps {
  progress: number;
  theme: Theme;
  className?: string;
}

export function ProgressBar({
  progress,
  theme,
  className = "",
}: ProgressBarProps) {
  const barClasses =
    theme === "personal"
      ? "bg-gradient-to-r from-indigo-500 to-cyan-400"
      : "bg-gradient-to-r from-red-600 to-red-500";

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 h-1 z-70 transition-all duration-300
        ${className}
      `}
    >
      <div
        className={`h-full transition-all duration-300 ${barClasses}`}
        style={{ width: `${progress}%` }}
      >
        {/* Optional glow effect */}
        <div
          className={`h-full w-full ${barClasses} blur-sm opacity-50`}
          style={{ transform: "translateY(-50%)" }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
