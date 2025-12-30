import React from 'react';
import { ComparisonSlide as ComparisonSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface ComparisonSlideProps {
  slide: ComparisonSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function ComparisonSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: ComparisonSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-personal-text-primary'
    : 'text-business-accent-primary';

  const cardClasses = theme === 'personal'
    ? 'bg-personal-bg-secondary border-personal-border text-personal-text-primary hover:border-personal-accent-primary'
    : 'bg-business-bg-secondary border-business-border text-business-text-primary hover:border-business-accent-primary';

  const cardTitleClasses = theme === 'personal'
    ? 'text-personal-text-primary'
    : 'text-business-accent-primary';

  const cardContentClasses = theme === 'personal'
    ? 'text-personal-text-secondary'
    : 'text-business-text-secondary';

  return (
    <SlideWrapper type="comparison" theme={theme} isActive={isActive}>
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 
          className={`
            text-2xl md:text-3xl lg:text-4xl font-semibold text-center
            ${titleClasses}
          `}
        >
          {getLocalizedText(slide.title)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {slide.items.map((item, index) => (
            <div
              key={index}
              className={`
                p-6 lg:p-8 rounded-xl border-2 transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg
                ${cardClasses}
              `}
              style={{
                animationDelay: isActive ? `${index * 200}ms` : '0ms',
                animation: isActive ? 'slideIn 0.6s ease-out forwards' : 'none',
              }}
            >
              <div className="space-y-4">
                <h3 
                  className={`
                    text-xl md:text-2xl font-semibold text-center
                    ${cardTitleClasses}
                  `}
                >
                  {getLocalizedText(item.title)}
                </h3>
                <p 
                  className={`
                    text-lg leading-relaxed
                    ${cardContentClasses}
                  `}
                >
                  {getLocalizedText(item.content)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

export default ComparisonSlide;