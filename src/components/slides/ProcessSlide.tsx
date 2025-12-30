import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { ProcessSlide as ProcessSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface ProcessSlideProps {
  slide: ProcessSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function ProcessSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: ProcessSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-personal-text-primary'
    : 'text-business-accent-primary';

  const stepClasses = theme === 'personal'
    ? 'bg-personal-bg-secondary border-personal-border text-personal-text-primary'
    : 'bg-business-bg-secondary border-business-border text-business-text-primary';

  const numberClasses = theme === 'personal'
    ? 'bg-personal-accent-primary text-white'
    : 'bg-business-accent-primary text-white';

  const arrowClasses = theme === 'personal'
    ? 'text-personal-accent-primary'
    : 'text-business-accent-primary';

  const stepTitleClasses = theme === 'personal'
    ? 'text-personal-text-primary'
    : 'text-business-accent-primary';

  const stepContentClasses = theme === 'personal'
    ? 'text-personal-text-secondary'
    : 'text-business-text-secondary';

  const isMobile = slide.steps.length > 3;

  return (
    <SlideWrapper type="process" theme={theme} isActive={isActive}>
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 
          className={`
            text-2xl md:text-3xl lg:text-4xl font-semibold text-center
            ${titleClasses}
          `}
        >
          {getLocalizedText(slide.title)}
        </h2>

        <div className={`
          flex items-center justify-center
          ${isMobile ? 'flex-col space-y-6' : 'flex-wrap gap-4 lg:flex-nowrap lg:space-x-4'}
        `}>
          {slide.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`
                  relative p-6 rounded-xl border-2 transition-all duration-300
                  min-w-48 max-w-64 text-center
                  ${stepClasses}
                `}
                style={{
                  animationDelay: isActive ? `${index * 150}ms` : '0ms',
                  animation: isActive ? 'slideIn 0.6s ease-out forwards' : 'none',
                }}
              >
                {/* Step number */}
                <div 
                  className={`
                    absolute -top-4 left-1/2 transform -translate-x-1/2
                    w-8 h-8 rounded-full flex items-center justify-center
                    text-sm font-bold
                    ${numberClasses}
                  `}
                >
                  {index + 1}
                </div>

                <div className="space-y-3 pt-4">
                  <h4 
                    className={`
                      text-lg font-semibold
                      ${stepTitleClasses}
                    `}
                  >
                    {getLocalizedText(step.title)}
                  </h4>
                  <p 
                    className={`
                      text-sm leading-relaxed
                      ${stepContentClasses}
                    `}
                  >
                    {getLocalizedText(step.content)}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < slide.steps.length - 1 && (
                <div className={`flex-shrink-0 ${arrowClasses}`}>
                  {isMobile ? (
                    <ArrowDown size={24} />
                  ) : (
                    <ArrowRight size={24} className="hidden lg:block" />
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

export default ProcessSlide;