import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  MessageSquare, 
  Check, 
  Copy, 
  Building2,
  Navigation
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeOffice, setActiveOffice] = useState<number>(0);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const currentOffice = SITE_CONFIG.offices[activeOffice];

  const officeDisplayName = (officeName: string) => {
    if (language === 'bn') {
      if (officeName.includes('Aftabnagar')) return 'আফতাবনগর প্রধান কার্যালয়';
      return 'উত্তর বাড্ডা শাখা কার্যালয়';
    }
    return officeName;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {t.contact.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.contact.subtitle}
          </p>

          {/* Office Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-200 border border-slate-300">
              {SITE_CONFIG.offices.map((office, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveOffice(idx)}
                  className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeOffice === idx
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {officeDisplayName(office.name)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Office Details & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Cards & Communication Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{officeDisplayName(currentOffice.name)}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {officeDisplayName(currentOffice.name)}
                  </h3>
                  {currentOffice.landmark && (
                    <p className="text-xs text-slate-500 mt-0.5">{currentOffice.landmark}</p>
                  )}
                </div>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-sm text-slate-700 pt-2 border-t border-slate-100">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-medium">{t.contact.addressLabel}</div>
                    <div className="font-semibold text-slate-900 text-sm mt-0.5">
                      {currentOffice.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-medium">{t.contact.phoneLabel}</div>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a 
                        href={`tel:${currentOffice.phone}`}
                        className="font-mono font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        {currentOffice.phoneDisplay}
                      </a>
                      <button
                        onClick={() => handleCopy(currentOffice.phone)}
                        className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                        title="Copy phone"
                      >
                        {copied === currentOffice.phone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-medium">{t.contact.emailLabel}</div>
                    <a
                      href={`mailto:${SITE_CONFIG.emails.primary}`}
                      className="font-medium text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {SITE_CONFIG.emails.primary}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-medium">{t.contact.hoursLabel}</div>
                    <div className="font-medium text-slate-900">
                      {language === 'bn' ? 'সকাল ৯:০০ – রাত ৯:০০ (প্রতিদিন)' : currentOffice.hours}
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`tel:${currentOffice.phone}`}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.contact.callOffice}</span>
                </a>

                <a
                  href={`https://wa.me/${currentOffice.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t.contact.whatsappOffice}</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.emails.primary}`}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.contact.emailOffice}</span>
                </a>
              </div>

            </div>

            {/* Quick summary of both branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITE_CONFIG.offices.map((off, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveOffice(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeOffice === idx
                      ? 'bg-emerald-50/60 border-emerald-400 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{officeDisplayName(off.name)}</div>
                  <div className="text-xs text-slate-600 font-mono mt-1">{off.phoneDisplay}</div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{off.address}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">
                    {t.contact.mapTitle(officeDisplayName(currentOffice.name))}
                  </span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentOffice.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-600 font-bold hover:underline"
                >
                  <span>{t.contact.openGmaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden mt-3 bg-slate-100 relative border border-slate-200">
                <iframe
                  title={`Google Maps location for ${currentOffice.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-3 text-center text-xs text-slate-500">
                {t.contact.mapFooter}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
