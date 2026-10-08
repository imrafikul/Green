import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  Wifi, 
  Mail, 
  MessageSquare, 
  ArrowUp,
  Tv,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenPortal: () => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPortal, onOpenLegal }) => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-900/40">
                <Wifi className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                  GREEN LINK <span className="text-emerald-500">NETWORK</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Green Internet • FTTH Broadband
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-emerald-400 tracking-wide">
              {t.footer.slogan}
            </p>

            <p className="text-slate-400 leading-relaxed text-xs">
              {t.footer.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center border border-slate-800 transition-colors"
                title="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#25D366] hover:text-white text-slate-300 flex items-center justify-center border border-slate-800 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 flex items-center justify-center border border-slate-800 transition-colors"
                title="YouTube"
              >
                <span className="font-bold text-xs">YT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.connTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#packages" className="hover:text-emerald-400 transition-colors">
                  {t.nav.internet}
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-emerald-400 transition-colors">
                  {t.nav.business}
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-emerald-400 transition-colors">
                  {t.nav.network}
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-emerald-400 transition-colors">
                  {t.nav.coverage}
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.ftpLiveTvUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-semibold transition-colors"
                >
                  <Tv className="w-3.5 h-3.5 animate-pulse" />
                  <span>{language === 'bn' ? 'এফটিপি ও লাইভ টিভি (jatrabari.com)' : 'FTP & Live TV (jatrabari.com)'}</span>
                  <ExternalLink className="w-3 h-3 text-rose-400/80" />
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Portal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.assistTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#support" className="hover:text-emerald-400 transition-colors">
                  {t.nav.support}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  {t.nav.customerPortal}
                </button>
              </li>
              <li>
                <a href="#payment" className="hover:text-emerald-400 transition-colors">
                  {language === 'bn' ? 'বিল পরিশোধ (বিকাশ/নগদ)' : 'Pay Bill (bKash/Nagad)'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {language === 'bn' ? 'কার্যালয়সমূহ' : 'Office Locations'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.officesTitle}
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white text-xs">
                  {language === 'bn' ? 'আফতাবনগর প্রধান কার্যালয়:' : 'Aftabnagar Head Office:'}
                </div>
                <div className="text-slate-400 mt-0.5">{SITE_CONFIG.offices[0].address}</div>
                <div className="font-mono text-emerald-400 font-bold mt-1">
                  Tel: {SITE_CONFIG.offices[0].phoneDisplay}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white text-xs">
                  {language === 'bn' ? 'উত্তর বাড্ডা শাখা কার্যালয়:' : 'North Badda Branch:'}
                </div>
                <div className="text-slate-400 mt-0.5">{SITE_CONFIG.offices[1].address}</div>
                <div className="font-mono text-emerald-400 font-bold mt-1">
                  Tel: {SITE_CONFIG.offices[1].phoneDisplay}
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>{SITE_CONFIG.emails.primary}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          
          <div>
            <p>© 2026 {SITE_CONFIG.companyName}. {t.footer.rights}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {t.footer.licensedNote}
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.footer.refund}
            </button>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">{t.footer.top}</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
