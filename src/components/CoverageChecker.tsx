import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  ArrowRight, 
  Phone
} from 'lucide-react';

interface CoverageCheckerProps {
  onOpenLeadModalWithArea: (area: string, road: string, phone: string) => void;
}

export const CoverageChecker: React.FC<CoverageCheckerProps> = ({ 
  onOpenLeadModalWithArea 
}) => {
  const { t, language } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<string>('Aftabnagar');
  const [roadBlock, setRoadBlock] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [result, setResult] = useState<{
    status: 'idle' | 'available' | 'survey_needed' | 'not_yet';
    message: string;
  }>({ status: 'idle', message: '' });
  const [error, setError] = useState<string>('');

  const coreAvailableAreas = [
    'Aftabnagar',
    'North Badda',
    'Comillapara',
    'Middle Badda',
    'South Badda',
    'Merul Badda',
    'DIT Project',
    'Gopi Para',
    'Adarshanagar',
    'Purba Badda',
    'Rampura Bridge Side',
  ];

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedArea) {
      setError(language === 'bn' ? 'অনুগ্রহ করে এলাকা নির্বাচন করুন।' : 'Please select or specify your area.');
      return;
    }

    if (!roadBlock.trim()) {
      setError(language === 'bn' ? 'রোড, ব্লক বা বাড়ির তথ্য প্রদান করুন।' : 'Please provide your road, block, or building name.');
      return;
    }

    if (!phoneNumber.trim() || phoneNumber.trim().length < 10) {
      setError(language === 'bn' ? 'সঠিক ফোন নম্বর প্রদান করুন (যেমন: ০১৭১xxxxxxx)।' : 'Please enter a valid phone number (e.g., 017xxxxxxxx).');
      return;
    }

    const isDirectAvailable = coreAvailableAreas.some(area => 
      area.toLowerCase() === selectedArea.toLowerCase() || 
      selectedArea.toLowerCase().includes(area.toLowerCase())
    );

    if (isDirectAvailable) {
      setResult({
        status: 'available',
        message: t.coverage.availableMsg(selectedArea),
      });
    } else if (selectedArea.toLowerCase().includes('gulshan') || selectedArea.toLowerCase().includes('rampura')) {
      setResult({
        status: 'survey_needed',
        message: t.coverage.surveyMsg(selectedArea),
      });
    } else {
      setResult({
        status: 'not_yet',
        message: t.coverage.notYetMsg,
      });
    }
  };

  return (
    <section id="coverage" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form & Checker */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
                {t.coverage.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                {t.coverage.title}
              </h2>
              <p className="text-base text-slate-600 mt-2">
                {t.coverage.subtitle}
              </p>
            </div>

            {/* Checker Form Card */}
            <form onSubmit={handleCheck} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-lg space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Area Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    {t.coverage.selectAreaLabel}
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => {
                      setSelectedArea(e.target.value);
                      setResult({ status: 'idle', message: '' });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Aftabnagar">{language === 'bn' ? 'আফতাবনগর (ব্লক এ - এম)' : 'Aftabnagar (Blocks A - M)'}</option>
                    <option value="North Badda">{language === 'bn' ? 'উত্তর বাড্ডা' : 'North Badda'}</option>
                    <option value="Comillapara">{language === 'bn' ? 'কুমিল্লাপাড়া, বাড্ডা' : 'Comillapara, Badda'}</option>
                    <option value="Middle Badda">{language === 'bn' ? 'মধ্য বাড্ডা' : 'Middle Badda'}</option>
                    <option value="South Badda">{language === 'bn' ? 'দক্ষিণ বাড্ডা' : 'South Badda'}</option>
                    <option value="Merul Badda">{language === 'bn' ? 'মেরুল বাড্ডা' : 'Merul Badda'}</option>
                    <option value="DIT Project">{language === 'bn' ? 'ডিআইটি প্রজেক্ট, বাড্ডা' : 'DIT Project, Badda'}</option>
                    <option value="Gopi Para">{language === 'bn' ? 'গোপীপাড়া' : 'Gopi Para'}</option>
                    <option value="Adarshanagar">{language === 'bn' ? 'আদর্শ নগর' : 'Adarshanagar'}</option>
                    <option value="Purba Badda">{language === 'bn' ? 'পূর্ব বাড্ডা' : 'Purba Badda'}</option>
                    <option value="Rampura Bridge Side">{language === 'bn' ? 'রামপুরা ব্রিজ সংলগ্ন' : 'Rampura Bridge Side'}</option>
                    <option value="Gulshan Link Road">{language === 'bn' ? 'গুলশান লিংক রোড এলাকা' : 'Gulshan Link Road'}</option>
                    <option value="Other Area">{language === 'bn' ? 'অন্যান্য / নিকটবর্তী এলাকা' : 'Other / Adjacent Area'}</option>
                  </select>
                </div>

                {/* Road / Block */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    {t.coverage.roadBlockLabel}
                  </label>
                  <input
                    type="text"
                    value={roadBlock}
                    onChange={(e) => {
                      setRoadBlock(e.target.value);
                      setResult({ status: 'idle', message: '' });
                    }}
                    placeholder={t.coverage.roadBlockPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  {t.coverage.phoneLabel}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      setResult({ status: 'idle', message: '' });
                    }}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 pl-10 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-800 font-mono-numbers placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{t.coverage.checkBtn}</span>
              </button>
            </form>

            {/* Result Box */}
            {result.status !== 'idle' && (
              <div
                className={`p-6 rounded-2xl border transition-all animate-in fade-in slide-in-from-top-2 ${
                  result.status === 'available'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : result.status === 'survey_needed'
                    ? 'bg-amber-50 border-amber-300 text-amber-950'
                    : 'bg-slate-100 border-slate-300 text-slate-900'
                }`}
              >
                <div className="flex items-start gap-3">
                  {result.status === 'available' ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-base">
                      {result.status === 'available'
                        ? t.coverage.availableTitle
                        : result.status === 'survey_needed'
                        ? t.coverage.surveyTitle
                        : t.coverage.notYetTitle}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      {result.message}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenLeadModalWithArea(selectedArea, roadBlock, phoneNumber)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all cursor-pointer shadow-sm ${
                          result.status === 'available'
                            ? 'bg-emerald-600 hover:bg-emerald-700'
                            : 'bg-slate-900 hover:bg-slate-800'
                        }`}
                      >
                        <span>
                          {result.status === 'available' ? t.coverage.connectNowBtn : t.coverage.submitRequestBtn}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Verified Coverage Sector Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-lg text-white">{t.coverage.activeHubsTitle}</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.coverage.activeHubsDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {SITE_CONFIG.coverageAreas.slice(0, 8).map((area, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/70 flex items-center justify-between"
                  >
                    <span className="font-medium text-slate-200">{area.name}</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">
                      {language === 'bn' ? 'FTTH সক্রিয়' : area.type}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{t.coverage.corpPointNote}</span>
                <span className="text-emerald-400 font-bold">{t.coverage.corpMetroAvail}</span>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">{t.coverage.inquiryLineTitle}</div>
                  <div className="text-sm font-extrabold font-mono-numbers text-emerald-800">
                    {SITE_CONFIG.phones.aftabnagar}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${SITE_CONFIG.phones.aftabnagar}`}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
              >
                {t.coverage.callBtn}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
