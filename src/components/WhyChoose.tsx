import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Infinity as InfinityIcon, 
  PlayCircle, 
  Globe, 
  Cpu, 
  Activity, 
  Headphones 
} from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'unlimited':
        return <InfinityIcon className="w-6 h-6 text-emerald-600" />;
      case 'buffer-free':
        return <PlayCircle className="w-6 h-6 text-emerald-600" />;
      case 'dedicated-ip':
        return <Globe className="w-6 h-6 text-emerald-600" />;
      case 'fiber-network':
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'stable-connections':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'customer-support':
      default:
        return <Headphones className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {t.whyChoose.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.whyChoose.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.whyChoose.cards.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-slate-50/70 hover:bg-emerald-50/40 border border-slate-200/80 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-emerald-200 transition-transform">
                {getIcon(item.id)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Support Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">
                {t.whyChoose.supportBarTitle}
              </div>
              <div className="text-xs text-slate-300">
                {t.whyChoose.supportBarDesc}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1.5 rounded-lg">
              {t.whyChoose.hotline}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
