import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Network, 
  Layers, 
  ShieldCheck, 
  Users, 
  Headphones, 
  Sparkles 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'upstream':
        return <Network className="w-5 h-5 text-emerald-600" />;
      case 'underground':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'uptime':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'support-team':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'online-support':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      case 'quality':
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-6 sm:p-8">
        
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {t.trustStrip.tag}
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {t.trustStrip.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {t.trustStrip.cards.map((card) => (
            <div
              key={card.id}
              className="group p-4 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-300 transition-all duration-200 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {getIcon(card.id)}
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
