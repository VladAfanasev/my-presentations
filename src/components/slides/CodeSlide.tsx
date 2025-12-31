import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeSlide as CodeSlideType, Theme } from "../../types/presentation";
import SlideWrapper from "./SlideWrapper";

interface CodeSlideProps {
  slide: CodeSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function CodeSlide({
  slide,
  theme,
  getLocalizedText,
  isActive = false,
}: CodeSlideProps) {
  const titleClasses =
    theme === "personal"
      ? "text-personal-text-primary"
      : "text-business-accent-primary";

  const contentClasses =
    theme === "personal"
      ? "text-personal-text-secondary"
      : "text-business-text-secondary";

  const explanationClasses =
    theme === "personal"
      ? "text-personal-text-muted"
      : "text-business-text-muted";

  return (
    <SlideWrapper type="code" theme={theme} isActive={isActive}>
      <div className="max-w-5xl mx-auto space-y-8">
        <h2
          className={`
            text-2xl md:text-3xl lg:text-4xl font-semibold
            ${titleClasses}
          `}
        >
          {getLocalizedText(slide.title)}
        </h2>

        {slide.content && (
          <p
            className={`
              text-lg md:text-xl max-w-3xl mx-auto
              ${contentClasses}
            `}
          >
            {getLocalizedText(slide.content)}
          </p>
        )}

        <div className="w-full max-w-4xl mx-auto">
          <SyntaxHighlighter
            language={slide.language || "javascript"}
            style={theme === "personal" ? oneDark : oneLight}
            customStyle={{
              margin: 0,
              borderRadius: "0.75rem",
              fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
              lineHeight: 1.5,
            }}
            showLineNumbers
          >
            {slide.code}
          </SyntaxHighlighter>
        </div>

        {slide.explanation && (
          <p
            className={`
              text-base md:text-lg max-w-3xl mx-auto
              ${explanationClasses}
            `}
          >
            {getLocalizedText(slide.explanation)}
          </p>
        )}
      </div>
    </SlideWrapper>
  );
}

export default CodeSlide;
