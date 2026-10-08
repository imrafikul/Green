import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  MessageSquare, 
  LifeBuoy, 
  MapPin, 
  Clock, 
  ArrowRight
} from 'lucide-react';

interface SupportSectionProps {
  onOpenTicketModal: () => void;
  onScrollToOffice: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ 
  onOpenTicketModal,
  onScrollToOffice
}) => {
  const { t } = useLanguage();

  return (
    <section id="support" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {t.support.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.support.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.support.subtitle}
          </p>
        </div>

        {/* Support Tier Indicator */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.support.physicalTitle}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                {t.support.physicalDesc}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l md:border-slate-200 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0">
              <LifeBuoy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.support.onlineTitle}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                {t.support.onlineDesc}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Call Support */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.support.cardCallTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.support.cardCallDesc}
              </p>
              <div className="space-y-1 text-xs font-mono font-bold text-emerald-700">
                <div>{t.topBar.aftabnagar}: {SITE_CONFIG.phones.aftabnagar}</div>
                <div>{t.topBar.northBadda}: {SITE_CONFIG.phones.northBadda}</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`tel:${SITE_CONFIG.phones.aftabnagar}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
              >
                <span>{t.support.cardCallBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. WhatsApp */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.support.cardWaTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.support.cardWaDesc}
              </p>
              <div className="text-xs font-mono text-slate-600">
                {t.support.fastResponse}
              </div>
            </div>

            <div className="pt-6">
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition-all"
              >
                <span>{t.support.cardWaBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. Submit Ticket */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4 group-hover:scale-110 transition-transform">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.support.cardTicketTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.support.cardTicketDesc}
              </p>
              <div className="text-xs text-slate-500">
                {t.support.trackedInPortal}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenTicketModal}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all cursor-pointer"
              >
                <span>{t.support.cardTicketBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. Visit Office */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.support.cardOfficeTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.support.cardOfficeDesc}
              </p>
              <div className="text-xs text-slate-500">
                {t.support.officeHours}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onScrollToOffice}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer"
              >
                <span>{t.support.cardOfficeBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
