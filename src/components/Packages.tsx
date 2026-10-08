import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  Check, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Home, 
  PhoneCall,
  Tv,
  Play,
  Film,
  Server,
  Globe,
  ExternalLink
} from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
  onTalkToBusiness: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage, onTalkToBusiness }) => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'home' | 'corporate'>('home');

  const getPackageNumber = (index: number) => {
    if (language === 'bn') {
      return `প্যাকেজ ${index + 1}`;
    }
    return `Package ${index + 1}`;
  };

  const getBadgeText = (index: number) => {
    if (index === 1) return t.packages.popularBadge;
    if (index === 2) return t.packages.highSpeedBadge;
    if (index === 3) return t.packages.maxSpeedBadge;
    return null;
  };

  return (
    <section id="packages" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {t.packages.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.packages.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.packages.subtitle}
          </p>

          {/* Quick neonbadda style feature highlights banner */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-emerald-700">
              <Play className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>{language === 'bn' ? 'ইউটিউব সাপোর্ট' : 'YouTube Video Support'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-emerald-700">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'bn' ? 'বিডিআইএক্স কানেক্টেড' : 'BDIX Connected'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-emerald-700">
              <Tv className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'bn' ? 'অনলাইন টিভি (৫০+ চ্যানেল)' : 'Online TV (50+ Channels)'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-emerald-700">
              <Server className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'bn' ? 'মিডিয়া ও এফটিপি সার্ভার' : 'Media Server / FTP'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-emerald-700">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'bn' ? 'রিয়েল আইপি সুবিধা' : 'Real IP Available'}</span>
            </span>
          </div>

          {/* Category Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300">
              <button
                onClick={() => setActiveCategory('home')}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'home'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{t.packages.tabHome}</span>
              </button>
              <button
                onClick={() => setActiveCategory('corporate')}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'corporate'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{t.packages.tabCorporate}</span>
              </button>
            </div>
          </div>
        </div>

        {/* HOME PACKAGES VIEW */}
        {activeCategory === 'home' && (
          <div className="space-y-8">
            {/* Direct FTP & Live TV Callout Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/60 to-slate-900 border border-rose-500/30 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0 shadow-inner">
                  <Tv className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                      BDIX Media Server
                    </span>
                    <span className="text-[11px] font-mono text-amber-300 font-bold">50+ TV Channels & FTP</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white mt-1">
                    {language === 'bn' 
                      ? 'সকল প্যাকেজের সাথে ফ্রি হাই-স্পিড বিডিআইএক্স এফটিপি ও লাইভ টিভি পোর্টাল' 
                      : 'Free Ultra-Fast BDIX FTP & Live TV Portal with Every Package'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {language === 'bn'
                      ? 'বাফারলেস ৫০+ লাইভ টিভি চ্যানেল ও দ্রুতগতির এফটিপি সার্ভার উপভোগ করুন jatrabari.com-এ'
                      : 'Enjoy bufferless live streaming and gigabit local FTP downloads directly at jatrabari.com'}
                  </p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.ftpLiveTvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 shadow-md shadow-rose-600/30 active:scale-[0.98] transition-all group"
                title="Click to redirect to jatrabari.com"
              >
                <Tv className="w-4 h-4" />
                <span>{language === 'bn' ? 'এফটিপি / লাইভ টিভিতে যান' : 'Launch FTP / Live TV'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 4 Cards Grid matching neonbadda.bd */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.packages.homeList.map((pkg, index) => {
                const isPopular = index === 1; // 50 Mbps is the popular sweetspot
                const badge = getBadgeText(index);
                const pkgNum = getPackageNumber(index);

                return (
                  <div
                    key={pkg.id}
                    className={`relative rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                      isPopular
                        ? 'border-emerald-500 shadow-2xl shadow-emerald-900/15 ring-2 ring-emerald-500/30 -translate-y-1'
                        : 'border-slate-200/90 shadow-lg hover:shadow-xl hover:border-emerald-300'
                    }`}
                  >
                    {/* Badge */}
                    {badge && (
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold uppercase py-1.5 text-center tracking-wider">
                        ★ {badge} ★
                      </div>
                    )}

                    <div className="p-6 sm:p-7">
                      {/* Package identifier & title */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                          {pkgNum}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {pkg.name}
                        </span>
                      </div>

                      {/* Speed Display */}
                      <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 rounded-full blur-xl pointer-events-none"></div>
                        <span className="text-xs text-emerald-400 font-semibold block uppercase tracking-wider mb-1">
                          {t.packages.bandwidthLabel}
                        </span>
                        <div className="text-3xl sm:text-4xl font-extrabold font-mono-numbers tracking-tight text-white flex items-center justify-center gap-1.5">
                          <span>{pkg.speed}</span>
                        </div>
                        <span className="text-[10px] text-slate-300 block mt-1 font-mono">
                          Pure FTTH Optical Fiber
                        </span>
                      </div>

                      {/* Monthly Price */}
                      <div className="mb-5 pb-5 border-b border-slate-100 text-center">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-sm font-extrabold text-emerald-700">৳</span>
                          <span className="text-4xl font-extrabold text-slate-900 font-mono-numbers">
                            {pkg.price}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            / {t.packages.monthUnit}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Features list */}
                      <div className="space-y-2.5">
                        <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                          {t.packages.includedFeatures}
                        </div>
                        {pkg.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Action */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => onSelectPackage(`${pkgNum} - ${pkg.name} (${pkg.speed})`)}
                        className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                          isPopular
                            ? 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-md shadow-emerald-600/30'
                            : 'bg-slate-900 hover:bg-emerald-600 text-white'
                        }`}
                      >
                        <span>{t.packages.getPackageBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note about terms */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.packages.residentialNote}</span>
            </div>
          </div>
        )}

        {/* CORPORATE / BUSINESS VIEW */}
        {activeCategory === 'corporate' && (
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800/80 text-emerald-300 text-xs font-semibold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{t.packages.corpTag}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      {t.packages.corpTitle}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {t.packages.corpDesc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {t.packages.corpSpecTitle}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SITE_CONFIG.corporatePackage.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 text-center space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 font-medium">{t.packages.corpPricingModel}</span>
                    <div className="text-3xl font-extrabold text-white">
                      {t.packages.corpContactUs}
                    </div>
                    <div className="text-xs text-emerald-400 font-medium">
                      {t.packages.corpPricingNote}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-700/80 space-y-3">
                    <button
                      onClick={onTalkToBusiness}
                      className="w-full py-3.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>{t.packages.corpTalkBtn}</span>
                    </button>

                    <p className="text-[11px] text-slate-400">
                      {t.packages.corpSurveyNote}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
