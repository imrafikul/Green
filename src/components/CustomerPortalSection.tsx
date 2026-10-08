import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  User, 
  Receipt, 
  History, 
  FileText, 
  Activity, 
  LifeBuoy, 
  MessageSquareWarning, 
  ArrowRight
} from 'lucide-react';

interface CustomerPortalSectionProps {
  onOpenPortal: () => void;
}

export const CustomerPortalSection: React.FC<CustomerPortalSectionProps> = ({ onOpenPortal }) => {
  const { t, language } = useLanguage();

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 1:
        return <Receipt className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <History className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 5:
        return <LifeBuoy className="w-5 h-5 text-emerald-600" />;
      default:
        return <MessageSquareWarning className="w-5 h-5 text-emerald-600" />;
    }
  };

  const portalFeatureItems = [
    { title: language === 'bn' ? 'বর্তমান প্যাকেজ দেখুন' : 'View Current Package', description: language === 'bn' ? 'সক্রিয় ব্যান্ডউইথ, মেয়াদ ও লাইভ স্ট্যাটাস চেক করুন।' : 'Check active bandwidth, renewal date, and live connection state.' },
    { title: language === 'bn' ? 'বিল ও বকেয়া অনুসন্ধান' : 'Check Bill & Dues', description: language === 'bn' ? 'বর্তমান মাসিক বিলের পরিমাণ কোনো ঝামেলা ছাড়াই দেখুন।' : 'Instant access to current monthly bill balance with zero confusion.' },
    { title: language === 'bn' ? 'পেমেন্ট হিস্ট্রি' : 'Payment History', description: language === 'bn' ? 'অতীতের সকল বিল পরিশোধ ও ট্রানজাকশন হিস্ট্রি।' : 'Complete record of past payments, dates, and MFS transaction IDs.' },
    { title: language === 'bn' ? 'ইনভয়েস ডাউনলোড' : 'Download Invoices', description: language === 'bn' ? 'অফিসিয়াল পিডিএফ মানি রিসিট ও ভাউচার ডাউনলোড।' : 'Official PDF bills and receipts ready for home budgeting or tax records.' },
    { title: language === 'bn' ? 'কানেকশন স্ট্যাটাস' : 'Connection Status', description: language === 'bn' ? 'লাইভ ওএনইউ সিগন্যাল পাওয়ার এবং ফাইবার লাইনের অবস্থা।' : 'Live ONU optical signal power indicator and line status.' },
    { title: language === 'bn' ? 'সাপোর্ট টিকিট জমা' : 'Submit Support Ticket', description: language === 'bn' ? 'বাড্ডার ফিল্ড টিমের কাছে সরাসরি টিকিট প্রেরণের ব্যবস্থা।' : 'Direct ticket dispatch to on-duty technical personnel in Badda.' },
    { title: language === 'bn' ? 'অভিযোগের অগ্রগতি' : 'Complaint History', description: language === 'bn' ? 'টিকিটের অগ্রগতি ও সমাধান সংক্রান্ত স্বচ্ছ বিবরণ।' : 'Track ticket progress and resolution notes transparently.' },
  ];

  return (
    <section id="portal" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                <User className="w-3.5 h-3.5" />
                <span>{t.portal.tag}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t.portal.title}
                </h2>
                <p className="text-base text-slate-600 mt-2 font-normal leading-relaxed">
                  {t.portal.subtitle}
                </p>
              </div>

              {/* 7 Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {portalFeatureItems.map((feat, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                      {getIcon(index)}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPortal}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  <span>{t.portal.loginBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Portal Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 p-6 text-white border border-slate-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      {t.portal.previewTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    ID: GLN-8492
                  </span>
                </div>

                {/* Subscribed Package Badge */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">{t.portal.currentPkgLabel}</span>
                    <span className="text-emerald-400 font-bold">STANDARD (40 Mbps)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">{t.portal.monthlyDueLabel}</span>
                    <span className="text-white font-bold font-mono-numbers">{t.portal.paidStatus}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">{t.portal.rxPowerLabel}</span>
                    <span className="text-emerald-400 font-mono-numbers">-19.4 dBm (Optimal)</span>
                  </div>
                </div>

                {/* Quick portal navigation mock */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button 
                    onClick={onOpenPortal}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-left border border-slate-750 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-slate-300">{t.portal.downloadInvoice}</span>
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button 
                    onClick={onOpenPortal}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-left border border-slate-750 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-slate-300">{t.portal.openTicket}</span>
                    <LifeBuoy className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400">
                    {t.portal.integrationNote}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
