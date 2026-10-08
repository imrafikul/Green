import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'topbar' | 'mobile';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'navbar',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center gap-1 bg-slate-800/90 rounded-lg p-0.5 border border-slate-700/80 text-[11px] ${className}`}>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Switch to English"
        >
          EN
        </button>
        <span className="text-slate-600 text-[10px]">|</span>
        <button
          onClick={() => setLanguage('bn')}
          className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
            language === 'bn'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="বাংলায় পরিবর্তন করুন"
        >
          বাংলা
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`w-full flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Globe className="w-4 h-4 text-emerald-600" />
          <span>Language / ভাষা</span>
        </div>
        <div className="inline-flex rounded-lg bg-white p-0.5 border border-slate-300">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('bn')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              language === 'bn'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>
    );
  }

  // Default navbar variant
  return (
    <div className={`relative inline-flex items-center rounded-xl bg-slate-100/90 p-1 border border-slate-200 shadow-xs ${className}`}>
      <div className="flex items-center gap-1.5 px-1.5 text-slate-500">
        <Globe className="w-3.5 h-3.5 text-emerald-600" />
      </div>
      <div className="flex items-center gap-0.5">
        <button
          onClick={() => setLanguage('en')}
          aria-label="Switch to English"
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-white text-emerald-800 shadow-sm border border-slate-200/80 font-mono-numbers'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('bn')}
          aria-label="বাংলায় পরিবর্তন করুন"
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            language === 'bn'
              ? 'bg-white text-emerald-800 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          বাংলা
        </button>
      </div>
    </div>
  );
};
