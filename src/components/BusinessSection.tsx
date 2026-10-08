import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  Network, 
  ArrowLeftRight, 
  Headphones, 
  Sliders, 
  ArrowRight,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

interface BusinessSectionProps {
  onTalkToBusiness: () => void;
  onRequestPublicIP: () => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({ 
  onTalkToBusiness,
  onRequestPublicIP
}) => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'corp-internet':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'dedicated-internet':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'dedicated-ip':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'network-solutions':
        return <Network className="w-5 h-5 text-emerald-600" />;
      case 'p2p':
        return <ArrowLeftRight className="w-5 h-5 text-emerald-600" />;
      case 'business-support':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      case 'customized':
      default:
        return <Sliders className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="business" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 telecom-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
              {t.business.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.business.title}
            </h2>
            <p className="text-base text-slate-300 font-normal">
              {t.business.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onTalkToBusiness}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.business.talkBtn}</span>
            </button>
            <button
              onClick={onRequestPublicIP}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{t.business.requestIpBtn}</span>
            </button>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.business.services.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between group ${
                index === 0 ? 'xl:col-span-2 bg-gradient-to-br from-slate-800 to-slate-850' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-700/60 border border-slate-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-950/60 transition-all">
                    {getIcon(service.id)}
                  </div>
                  {service.tags && (
                    <div className="flex gap-1.5 flex-wrap">
                      {service.tags.map((tItem, i) => (
                        <span key={i} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                          {tItem}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-700/50">
                <button
                  onClick={onTalkToBusiness}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <span>{t.business.inquireOffice}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Consultation Highlight Card */}
          <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-700/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600/30 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t.business.surveyTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.business.surveyDesc}
              </p>
            </div>
            <div className="pt-4">
              <a
                href={`tel:${SITE_CONFIG.phones.aftabnagar}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
              >
                <span>{t.business.callDeskBtn}: {SITE_CONFIG.phones.aftabnagar}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
