import React from 'react';
import { Check } from 'lucide-react';
import { SummarySlide as SummarySlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface SummarySlideProps {
  slide: SummarySlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function SummarySlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: SummarySlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-personal-text-primary'
    : 'text-business-accent-primary';

  const contentClasses = theme === 'personal'
    ? 'text-personal-text-primary font-medium'
    : 'text-business-text-primary font-medium';

  const checkClasses = theme === 'personal'
    ? 'text-personal-accent-secondary'
    : 'text-business-accent-primary';

  const pointClasses = theme === 'personal'
    ? 'text-personal-text-primary'
    : 'text-business-text-primary';

  return (
    <SlideWrapper type="summary" theme={theme} isActive={isActive}>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-6">
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
                text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
                ${contentClasses}
              `}
            >
              {getLocalizedText(slide.content)}
            </p>
          )}
        </div>

        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {slide.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300"
              style={{
                animationDelay: isActive ? `${index * 120}ms` : '0ms',
                animation: isActive ? 'slideIn 0.6s ease-out forwards' : 'none',
              }}
            >
              <div 
                className={`
                  flex-shrink-0 mt-1.5
                  ${checkClasses}
                `}
                style={{
                  textShadow: theme === 'personal' 
                    ? '0 0 8px rgba(34, 211, 238, 0.3)' 
                    : 'none',
                }}
              >
                <Check size={24} strokeWidth={3} />
              </div>
              
              <p 
                className={`
                  text-lg md:text-xl leading-relaxed flex-1 font-medium
                  ${pointClasses}
                `}
              >
                {getLocalizedText(point)}
              </p>
            </div>
          ))}
        </div>

        {/* Optional decorative element */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center space-x-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-current"></div>
            <div className="w-2 h-2 rounded-full bg-current"></div>
            <div className="w-2 h-2 rounded-full bg-current"></div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

export default SummarySlide;