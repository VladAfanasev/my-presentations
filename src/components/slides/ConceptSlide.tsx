import React from 'react';
import { ConceptSlide as ConceptSlideType, Theme } from '../../types/presentation';
import SlideWrapper from './SlideWrapper';

interface ConceptSlideProps {
  slide: ConceptSlideType;
  theme: Theme;
  getLocalizedText: (text: string | { nl: string; en: string }) => string;
  isActive?: boolean;
}

function VisualElement({ type, icon, theme }: { 
  type?: string; 
  icon?: string; 
  theme: Theme;
}) {
  const containerClasses = theme === 'personal'
    ? 'bg-slate-800 border-slate-600'
    : 'bg-gray-100 border-gray-300';

  if (type === 'icon' && icon) {
    return (
      <div className="w-full max-w-md h-48 flex items-center justify-center my-8">
        <div className="text-8xl">{icon}</div>
      </div>
    );
  }

  if (type && type !== 'none') {
    return (
      <div 
        className={`
          w-full max-w-2xl h-64 rounded-xl border-2 my-8
          flex items-center justify-center
          ${containerClasses}
        `}
      >
        <div className="text-center space-y-2">
          <div className="text-4xl opacity-50">
            {type === 'diagram' && '📊'}
            {type === 'flowchart' && '🔄'}
            {type === 'chart' && '📈'}
          </div>
          <div className="text-lg opacity-75 capitalize">
            {type} Placeholder
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export function ConceptSlide({ 
  slide, 
  theme, 
  getLocalizedText, 
  isActive = false 
}: ConceptSlideProps) {
  const titleClasses = theme === 'personal'
    ? 'text-white'
    : 'text-red-600';

  const contentClasses = theme === 'personal'
    ? 'text-slate-400'
    : 'text-gray-600';

  return (
    <SlideWrapper type="concept" theme={theme} isActive={isActive}>
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 
          className={`
            text-3xl md:text-4xl lg:text-5xl font-semibold
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

        <VisualElement 
          type={slide.visual} 
          icon={slide.icon} 
          theme={theme}
        />
      </div>
    </SlideWrapper>
  );
}

export default ConceptSlide;