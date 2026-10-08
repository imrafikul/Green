import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const statItems = [
    { value: language === 'bn' ? '১০+' : '10+', label: language === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Experience', description: language === 'bn' ? 'প্রতিষ্ঠার পর থেকে বাড্ডা ও আফতাবনগরে সেবা প্রদান' : 'Serving Badda & Aftabnagar since our establishment' },
    { value: language === 'bn' ? '৯৯%' : '99%', label: language === 'bn' ? 'নেটওয়ার্ক আপটাইম' : 'Network Uptime', description: language === 'bn' ? 'রিডানড্যান্ট ফাইবার ব্যাকবোন দ্বারা যাচাইকৃত আপটাইম' : 'Verified uptime backed by redundant backbone architecture' },
    { value: language === 'bn' ? '২৪/৭' : '24/7', label: language === 'bn' ? 'অনলাইন সাপোর্ট' : 'Online Support', description: language === 'bn' ? 'সার্বক্ষণিক হেল্পডেস্ক, টিকিটিং ও হটলাইন সহায়তা' : 'Round-the-clock helpdesk, ticketing, and hotline assistance' },
    { value: 'FTTH', label: language === 'bn' ? 'ফাইবার নেটওয়ার্ক' : 'Fiber Network', description: language === 'bn' ? 'আমাদের কভারেজের আওতাধীন এলাকায় পিওর অপটিক্যাল ফাইবার' : 'Pure fiber-to-the-home optical connectivity throughout our coverage' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Story & Mission/Vision */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              {t.about.tag}
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.about.headline}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {t.about.overview}
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{t.about.missionTitle}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{t.about.visionTitle}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>

            {/* Core Values checklist */}
            <div className="space-y-2 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.about.check1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.about.check2}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 p-8 text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-extrabold text-xl text-white">
                    {SITE_CONFIG.companyName}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold">
                    {SITE_CONFIG.brandName}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                  {language === 'bn' ? 'প্রায় ১০ বছরের অভিজ্ঞতা' : 'Est. ~10 Years'}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'bn' 
                  ? 'বাড্ডা, ঢাকা-১২১২ অঞ্চলে সুপ্রতিষ্ঠিত নেটওয়ার্ক অবকাঠামো। গ্রাহক সেবায় কোনো ধরনের আপস না করে উন্নত ফাইবার অপটিক ব্রডব্যান্ড সরবরাহে নিবেদিত।' 
                  : 'Operating with established presence in Badda, Dhaka-1212. Committed to providing clean fiber-optic broadband without compromising on customer service.'}
              </p>

              {/* Physical presence badges */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-xs">
                <div className="font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{t.about.dualCenters}</span>
                </div>
                <div className="text-slate-300 pl-6 space-y-1">
                  <div>• {language === 'bn' ? 'প্রধান কার্যালয়: ব্লক-এ, আফতাবনগর' : 'Head Office: Block-A, Aftabnagar'}</div>
                  <div>• {language === 'bn' ? 'শাখা কার্যালয়: কুমিল্লাপাড়া, উত্তর বাড্ডা' : 'Branch Office: Comillapara, North Badda'}</div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 text-center font-mono">
                {t.about.btrcNote}
              </div>
            </div>
          </div>

        </div>

        {/* Company Statistics */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              {t.about.milestonesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statItems.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-emerald-300 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-mono-numbers">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
