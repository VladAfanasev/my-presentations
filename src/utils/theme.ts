import { Theme } from '../types/presentation';

export function getThemeClasses(theme: Theme) {
  if (theme === 'personal') {
    return {
      // Backgrounds
      bgPrimary: 'bg-slate-950',
      bgSecondary: 'bg-slate-900',
      bgTertiary: 'bg-slate-800',
      
      // Text
      textPrimary: 'text-white',
      textSecondary: 'text-slate-400',
      textMuted: 'text-slate-500',
      
      // Accent
      accent: 'text-indigo-400',
      accentBg: 'bg-indigo-600',
      accentHover: 'hover:bg-indigo-500',
      
      // Borders
      border: 'border-slate-700',
      
      // Code
      codeBg: 'bg-slate-900',
    };
  } else {
    return {
      // Backgrounds
      bgPrimary: 'bg-white',
      bgSecondary: 'bg-gray-50',
      bgTertiary: 'bg-gray-100',
      
      // Text
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      
      // Accent
      accent: 'text-red-600',
      accentBg: 'bg-red-600',
      accentHover: 'hover:bg-red-500',
      
      // Borders
      border: 'border-gray-200',
      
      // Code
      codeBg: 'bg-gray-50',
    };
  }
}

export function getGradientTitle(theme: Theme) {
  if (theme === 'personal') {
    return 'bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent';
  } else {
    return 'bg-gradient-to-r from-gray-900 via-red-600 to-red-800 bg-clip-text text-transparent font-bold';
  }
}