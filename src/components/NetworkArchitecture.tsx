import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Globe, 
  Network, 
  Server, 
  Layers, 
  Share2, 
  Cpu, 
  Home, 
  Info
} from 'lucide-react';

export const NetworkArchitecture: React.FC = () => {
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<number>(3); // Underground Backbone

  const icons = [Globe, Network, Server, Layers, Share2, Cpu, Home];

  return (
    <section id="network" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 telecom-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            {t.network.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.network.title}
          </h2>
          <p className="text-base text-slate-300 font-normal">
            {t.network.subtitle}
          </p>

          {/* Badges Strip */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {t.network.badges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700/80 text-emerald-300 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Visual Pipeline flow */}
        <div className="mt-8 mb-12">
          {/* Desktop Flow */}
          <div className="hidden lg:grid grid-cols-7 gap-2 relative">
            {/* Connecting line behind */}
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-emerald-500/40 via-emerald-400 to-teal-400 -translate-y-1/2 z-0"></div>

            {t.network.nodes.map((node) => {
              const Icon = icons[node.id] || Globe;
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`relative z-10 p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-2 border-emerald-400 shadow-xl shadow-emerald-500/20 scale-105'
                      : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-400/50'
                        : 'bg-slate-800 text-emerald-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    {node.title}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1">
                    {node.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Vertical Flow */}
          <div className="lg:hidden space-y-3">
            {t.network.nodes.map((node, index) => {
              const Icon = icons[node.id] || Globe;
              const isSelected = selectedNode === node.id;
              return (
                <div key={node.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setSelectedNode(node.id)}
                    className={`w-full p-4 rounded-xl flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? 'bg-slate-800 border-2 border-emerald-400 shadow-lg'
                        : 'bg-slate-900 border border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-emerald-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{node.title}</div>
                        <div className="text-xs text-slate-400">{node.subtitle}</div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono">
                      {t.network.stageLabel} {index + 1}
                    </span>
                  </button>
                  {index < t.network.nodes.length - 1 && (
                    <div className="h-4 w-0.5 bg-emerald-500/40 my-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Card */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {t.network.stageLabel} {selectedNode + 1} / 7:
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {t.network.nodes[selectedNode].subtitle}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.network.nodes[selectedNode].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.network.nodes[selectedNode].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
