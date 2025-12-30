import React from 'react';
import { TitleSlide as TitleSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface TitleSlideProps {
  slide: TitleSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

export function TitleSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: TitleSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent'
    : 'bg-gradient-to-r from-gray-900 via-red-600 to-red-800 bg-clip-text text-transparent font-bold italic';

  const contentClasses = theme === 'personal'
    ? 'text-slate-400'
    : 'text-gray-600';

  return (
    <SlideWrapper type="title" theme={theme} isActive={isActive}>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 
          className={`
            text-4xl md:text-6xl lg:text-7xl font-bold leading-tight
            ${titleClasses}
          `}
        >
          {getLocalizedText(slide.title)}
        </h1>
        
        {slide.content && (
          <p 
            className={`
              text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto
              ${contentClasses}
            `}
          >
            {getLocalizedText(slide.content)}
          </p>
        )}
      </div>
    </SlideWrapper>
  );
}

export default TitleSlide;