import React from 'react';
import { StatsSlide as StatsSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface StatsSlideProps {
  slide: StatsSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function StatsSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: StatsSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-white'
    : 'text-red-600';

  const contentClasses = theme === 'personal'
    ? 'text-slate-400'
    : 'text-gray-600';

  const numberClasses = theme === 'personal'
    ? 'text-indigo-400'
    : 'text-red-600';

  const labelClasses = theme === 'personal'
    ? 'text-slate-400'
    : 'text-gray-600';

  return (
    <SlideWrapper type="stats" theme={theme} isActive={isActive}>
      <div className="max-w-5xl mx-auto space-y-12">
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
                text-lg md:text-xl max-w-3xl mx-auto
                ${contentClasses}
              `}
            >
              {getLocalizedText(slide.content)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {slide.stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
              style={{
                animationDelay: isActive ? `${index * 150}ms` : '0ms',
                animation: isActive ? 'slideIn 0.6s ease-out forwards' : 'none',
              }}
            >
              <div 
                className={`
                  text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none
                  ${numberClasses}
                `}
                style={{
                  textShadow: theme === 'personal' 
                    ? '0 0 20px rgba(99, 102, 241, 0.3)' 
                    : 'none',
                }}
              >
                {stat.number}
              </div>
              <div 
                className={`
                  text-lg md:text-xl font-medium uppercase tracking-wide
                  ${labelClasses}
                `}
              >
                {getLocalizedText(stat.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

export default StatsSlide;