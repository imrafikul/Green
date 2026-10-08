import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Cpu, 
  Globe2,
  Tv,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onCheckCoverageClick: () => void;
  onViewPackagesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onCheckCoverageClick, 
  onViewPackagesClick
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'bdix' | 'global' | 'streaming'>('bdix');

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Fiber Grid and Ambient Glows */}
      <div className="absolute inset-0 telecom-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{t.hero.pill}</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                {t.hero.headlineStart}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  {t.hero.brandName}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onViewPackagesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer group"
              >
                <span>{t.hero.viewPackages}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCheckCoverageClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700/80 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.checkCoverage}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-base sm:text-lg text-white font-mono-numbers">
                    {t.hero.statYears}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.statYearsLabel}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-base sm:text-lg text-white">
                    {t.hero.statFtth}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.statFtthLabel}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-base sm:text-lg text-white font-mono-numbers">
                    {t.hero.statSupport}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.statSupportLabel}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-tech Telecom Console Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-xl opacity-70"></div>
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Header of Console */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400"></div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {t.hero.consoleTitle}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {t.hero.consolePop}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {t.hero.consoleActive}
                  </span>
                </div>

                {/* Tab selector */}
                <div className="grid grid-cols-3 gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab('bdix')}
                    className={`py-1.5 px-2 rounded font-medium transition-all cursor-pointer ${
                      activeTab === 'bdix' 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.hero.tabBdix}
                  </button>
                  <button
                    onClick={() => setActiveTab('global')}
                    className={`py-1.5 px-2 rounded font-medium transition-all cursor-pointer ${
                      activeTab === 'global' 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.hero.tabGlobal}
                  </button>
                  <button
                    onClick={() => setActiveTab('streaming')}
                    className={`py-1.5 px-2 rounded font-medium transition-all cursor-pointer ${
                      activeTab === 'streaming' 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.hero.tabStreaming}
                  </button>
                </div>

                {/* Live Metric Display based on tab */}
                <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 space-y-3 font-mono text-xs">
                  {activeTab === 'bdix' && (
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.bdixPingLabel}</span>
                        <span className="text-emerald-400 font-bold font-mono-numbers">~ 1.8 ms</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.bdixRouteLabel}</span>
                        <span className="text-slate-200">{t.hero.bdixDirectPeering}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.bdixPolicyLabel}</span>
                        <span className="text-emerald-400">{t.hero.bdixPipe}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-2">
                        <div className="bg-emerald-500 h-full w-[94%] rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'global' && (
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.globalUpstreamLabel}</span>
                        <span className="text-emerald-400 font-bold">{t.hero.globalMultipleActive}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.globalBackboneLabel}</span>
                        <span className="text-slate-200">{t.hero.globalUnderground}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.globalUptimeLabel}</span>
                        <span className="text-emerald-400 font-bold font-mono-numbers">{SITE_CONFIG.uptimeClaim}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-2">
                        <div className="bg-emerald-500 h-full w-[99%] rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'streaming' && (
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.streamingYoutubeLabel}</span>
                        <span className="text-emerald-400 font-bold">{t.hero.streamingBufferFree}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.streamingFacebookLabel}</span>
                        <span className="text-emerald-400 font-bold">{t.hero.streamingDirectConnect}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{t.hero.streamingDataLabel}</span>
                        <span className="text-slate-200">{t.hero.streamingUnlimited}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-2">
                        <div className="bg-emerald-500 h-full w-[100%] rounded-full animate-pulse"></div>
                      </div>

                      <a
                        href={SITE_CONFIG.ftpLiveTvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-rose-500/15 to-amber-500/15 border border-rose-500/30 text-rose-300 hover:text-white hover:bg-rose-500/25 transition-all text-xs font-semibold group"
                      >
                        <span className="flex items-center gap-1.5">
                          <Tv className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                          <span>{language === 'bn' ? 'লাইভ টিভি ও এফটিপি চালু করুন' : 'Open Live TV & FTP Server'}</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-rose-300/80 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Quick Status Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">{t.hero.undergroundTitle}</div>
                      <div className="text-xs font-bold text-white">{t.hero.undergroundDesc}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">{t.hero.publicIpTitle}</div>
                      <div className="text-xs font-bold text-white">{t.hero.publicIpDesc}</div>
                    </div>
                  </div>
                </div>

                {/* Instant Action in Card */}
                <div className="pt-2 text-center">
                  <p className="text-[11px] text-slate-400">
                    {t.hero.setupTimeNote}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
