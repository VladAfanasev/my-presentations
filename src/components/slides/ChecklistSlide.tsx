import React from 'react';
import { Check } from 'lucide-react';
import { ChecklistSlide as ChecklistSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface ChecklistSlideProps {
  slide: ChecklistSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function ChecklistSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: ChecklistSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-white'
    : 'text-red-600';

  const contentClasses = theme === 'personal'
    ? 'text-slate-400'
    : 'text-gray-600';

  const checkClasses = theme === 'personal'
    ? 'text-cyan-400'
    : 'text-red-600';

  const itemClasses = theme === 'personal'
    ? 'text-white'
    : 'text-gray-900';

  return (
    <SlideWrapper type="checklist" theme={theme} isActive={isActive}>
      <div className="max-w-4xl mx-auto space-y-8">
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

        <div className="space-y-4 text-left max-w-3xl mx-auto">
          {slide.items.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300"
              style={{
                animationDelay: isActive ? `${index * 100}ms` : '0ms',
                animation: isActive ? 'slideIn 0.5s ease-out forwards' : 'none',
              }}
            >
              <div 
                className={`
                  flex-shrink-0 mt-1
                  ${checkClasses}
                `}
                style={{
                  textShadow: theme === 'personal' 
                    ? '0 0 8px rgba(34, 211, 238, 0.3)' 
                    : 'none',
                }}
              >
                <Check size={20} strokeWidth={3} />
              </div>
              
              <p 
                className={`
                  text-lg md:text-xl leading-relaxed flex-1
                  ${itemClasses}
                `}
              >
                {getLocalizedText(item)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

export default ChecklistSlide;