import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Zap, 
  Cpu, 
  Radio, 
  ArrowRight, 
  Check 
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'corporate':
        return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'dedicated-shared':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'ftth':
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'wireless':
        return <Radio className="w-6 h-6 text-emerald-600" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {t.services.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Large Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.cards.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-100/80 transition-all">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all cursor-pointer"
                >
                  <span>{t.services.inquireBtn} {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
