import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Globe, 
  Camera, 
  ShieldCheck, 
  Monitor, 
  Server, 
  Briefcase, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface PublicIPSectionProps {
  onRequestPublicIP: () => void;
}

export const PublicIPSection: React.FC<PublicIPSectionProps> = ({ onRequestPublicIP }) => {
  const { t } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Camera className="w-5 h-5 text-emerald-600" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <Monitor className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Server className="w-5 h-5 text-emerald-600" />;
      case 4:
      default:
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>{t.publicIp.tag}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {t.publicIp.title}
                </h2>
                <p className="text-base text-slate-300 mt-2 font-normal leading-relaxed">
                  {t.publicIp.subtitle}
                </p>
              </div>

              {/* Use cases list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {t.publicIp.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      {getIcon(index)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / CTA */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                <Globe className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  {t.publicIp.boxTitle}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.publicIp.boxDesc}
                </p>
              </div>

              <div className="space-y-2 text-xs text-left bg-slate-900 p-4 rounded-xl border border-slate-800 text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.publicIp.benefit1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.publicIp.benefit2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.publicIp.benefit3}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestPublicIP}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.publicIp.requestBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
