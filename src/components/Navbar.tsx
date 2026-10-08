import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { 
  Phone, 
  Menu, 
  X, 
  User, 
  Wifi, 
  ArrowRight,
  Tv,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenLeadModal: (packageName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenLeadModal }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home', isExternal: false },
    { name: t.nav.internet, href: '#services', isExternal: false },
    { name: t.nav.packages, href: '#packages', isExternal: false },
    { name: t.nav.ftpLiveTv, href: SITE_CONFIG.ftpLiveTvUrl, isExternal: true },
    { name: t.nav.business, href: '#business', isExternal: false },
    { name: t.nav.network, href: '#network', isExternal: false },
    { name: t.nav.coverage, href: '#coverage', isExternal: false },
    { name: t.nav.support, href: '#support', isExternal: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Hotline Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.topBar.status}
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              {t.topBar.servingAreas}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a 
              href={`tel:${SITE_CONFIG.phones.aftabnagar}`} 
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.topBar.aftabnagar}: <strong className="text-white font-mono-numbers">01676-367500</strong></span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href={`tel:${SITE_CONFIG.phones.northBadda}`} 
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.topBar.northBadda}: <strong className="text-white font-mono-numbers">01827-688677</strong></span>
            </a>
            
            {/* Quick language toggle in top bar */}
            <LanguageSwitcher variant="topbar" className="ml-1" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <Wifi className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 flex items-center gap-1">
                GREEN LINK <span className="text-emerald-600">NETWORK</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                Green Internet • Fiber ISP
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  link.isExternal
                    ? 'text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-bold'
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/60'
                }`}
                title={link.isExternal ? "Open Live TV & FTP Server (jatrabari.com)" : undefined}
              >
                {link.isExternal && <Tv className="w-3.5 h-3.5 text-rose-500 animate-pulse" />}
                <span>{link.name}</span>
                {link.isExternal && (
                  <ExternalLink className="w-3 h-3 text-rose-400 opacity-80" />
                )}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <LanguageSwitcher variant="navbar" />

            <button
              onClick={onOpenPortal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-all border border-slate-200 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-slate-600" />
              <span>{t.nav.customerPortal}</span>
            </button>

            <button
              onClick={() => onOpenLeadModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <span>{t.nav.getConnected}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenLeadModal()}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-md shadow-sm"
            >
              {t.nav.connectBtn}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher variant="mobile" />

            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 rounded-lg border border-slate-200"
              >
                <User className="w-3.5 h-3.5 text-slate-600" />
                {t.nav.customerPortal}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow-sm"
              >
                {t.nav.getConnected}
              </button>
            </div>

            <div className="space-y-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    link.isExternal
                      ? 'text-rose-600 bg-rose-50/70 hover:bg-rose-100 font-bold'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isExternal && <Tv className="w-4 h-4 text-rose-500 animate-pulse" />}
                    <span>{link.name}</span>
                  </span>
                  {link.isExternal && (
                    <span className="text-[11px] bg-rose-200/80 text-rose-800 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      jatrabari.com
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
              <div className="font-semibold text-slate-800">{t.nav.hotline}:</div>
              <a href={`tel:${SITE_CONFIG.phones.aftabnagar}`} className="flex items-center gap-2 text-slate-700 font-mono-numbers">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                {t.topBar.aftabnagar}: {SITE_CONFIG.phones.aftabnagar}
              </a>
              <a href={`tel:${SITE_CONFIG.phones.northBadda}`} className="flex items-center gap-2 text-slate-700 font-mono-numbers">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                {t.topBar.northBadda}: {SITE_CONFIG.phones.northBadda}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
