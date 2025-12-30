import React, { ReactNode } from 'react';
import { Theme } from '../../types/presentation';

interface SlideWrapperProps {
  children: ReactNode;
  type: string;
  theme: Theme;
  isActive?: boolean;
  className?: string;
}

export function SlideWrapper({
  children,
  type,
  theme,
  isActive = false,
  className = '',
}: SlideWrapperProps) {
  const baseClasses = theme === 'personal'
    ? 'text-white'
    : 'text-gray-900';

  const typeClasses = {
    title: theme === 'personal' 
      ? 'bg-gradient-to-br from-slate-900 to-slate-950'
      : 'bg-gradient-to-br from-gray-50 to-white',
    default: '',
  };

  return (
    <div
      className={`
        absolute inset-0 flex flex-col items-center justify-center
        text-center px-6 py-12 md:px-12 md:py-16
        transition-all duration-300 ease-out
        ${baseClasses}
        ${typeClasses[type as keyof typeof typeClasses] || typeClasses.default}
        ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default SlideWrapper;