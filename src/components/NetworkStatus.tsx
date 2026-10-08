import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  RefreshCw, 
  Server, 
  Globe, 
  Zap, 
  Activity, 
  Clock 
} from 'lucide-react';

export const NetworkStatus: React.FC = () => {
  const { t } = useLanguage();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState<string>('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const now = new Date();
      setLastCheckTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 600);
  };

  const systemIcons = [Globe, Zap, Server, Activity];
  const systemMetrics = [
    { ping: "8ms", uptime: "99.9%" },
    { ping: "2ms", uptime: "100%" },
    { ping: "1ms", uptime: "99.95%" },
    { ping: "14ms", uptime: "100%" },
  ];

  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with live refresh button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {t.networkStatus.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.networkStatus.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.networkStatus.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {t.networkStatus.verified}: {lastCheckTime}
            </span>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700 transition-all cursor-pointer"
              title="Refresh status check"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isRefreshing ? t.networkStatus.refreshing : t.networkStatus.refreshBtn}</span>
            </button>
          </div>
        </div>

        {/* 4 Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.networkStatus.systems.map((item, index) => {
            const Icon = systemIcons[index] || Globe;
            const metrics = systemMetrics[index];
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {t.networkStatus.operational}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.scope}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-slate-500">{t.networkStatus.latencyLabel}: {metrics.ping}</span>
                  <span className="text-emerald-400 font-bold">{metrics.uptime} {t.networkStatus.uptimeLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* API-ready integration notice */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-500 font-mono">
            {t.networkStatus.footerNote}
          </p>
        </div>

      </div>
    </section>
  );
};
