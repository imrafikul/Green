import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  User, 
  MapPin, 
  Package, 
  ShieldCheck
} from 'lucide-react';

interface LeadFormProps {
  initialPackage?: string;
  initialArea?: string;
  initialRoad?: string;
  initialPhone?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialPackage = 'Package 2 - STANDARD (50 Mbps)',
  initialArea = 'Aftabnagar',
  initialRoad = '',
  initialPhone = '',
}) => {
  const { t, language } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(initialPhone);
  const [area, setArea] = useState(initialArea);
  const [addressDetails, setAddressDetails] = useState(initialRoad);
  const [preferredPackage, setPreferredPackage] = useState(initialPackage);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialPackage) setPreferredPackage(initialPackage);
  }, [initialPackage]);

  useEffect(() => {
    if (initialArea) setArea(initialArea);
    if (initialRoad) setAddressDetails(initialRoad);
    if (initialPhone) setPhoneNumber(initialPhone);
  }, [initialArea, initialRoad, initialPhone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage(language === 'bn' ? 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।' : 'Please enter your full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.trim().length < 10) {
      setErrorMessage(language === 'bn' ? 'সঠিক ফোন নম্বর প্রদান করুন (যেমন: ০১৭১xxxxxxx)।' : 'Please enter a valid phone number (e.g., 017xxxxxxxx).');
      return;
    }
    if (!area) {
      setErrorMessage(language === 'bn' ? 'অনুগ্রহ করে আপনার এলাকা নির্বাচন করুন।' : 'Please select your residential or office area.');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      const newLead = {
        fullName,
        phoneNumber,
        area,
        addressDetails,
        preferredPackage,
        message,
        createdAt: new Date().toISOString(),
      };

      const existingLeads = JSON.parse(localStorage.getItem('greenlink_leads') || '[]');
      existingLeads.push(newLead);
      localStorage.setItem('greenlink_leads', JSON.stringify(existingLeads));

      setIsSuccess(true);
      setIsSubmitting(false);
    } catch {
      setErrorMessage(language === 'bn' ? 'একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আমাদের হটলাইনে কল করুন।' : 'Something went wrong. Please try calling our hotline directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                {t.leadForm.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.leadForm.title}
              </h2>
              <p className="text-sm text-slate-300 font-normal">
                {t.leadForm.subtitle}
              </p>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-slate-850 border border-emerald-500/50 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.leadForm.successTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.leadForm.successMsg(fullName, phoneNumber, preferredPackage)}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName('');
                      setPhoneNumber('');
                      setAddressDetails('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all cursor-pointer"
                  >
                    {t.leadForm.submitAnother}
                  </button>
                  <a
                    href={`tel:${SITE_CONFIG.phones.aftabnagar}`}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all"
                  >
                    {t.leadForm.callImmediate}
                  </a>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-700/80 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      {t.leadForm.fullNameLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={language === 'bn' ? 'যেমন: রফিকুল ইসলাম' : 'e.g., Rafiqul Islam'}
                        className="w-full px-3.5 py-3 pl-10 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      {t.leadForm.phoneLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-3 pl-10 rounded-xl bg-slate-850 border border-slate-700 text-white font-mono-numbers placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Area */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      {t.leadForm.areaLabel}
                    </label>
                    <div className="relative">
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-3.5 py-3 pl-10 rounded-xl bg-slate-850 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="Aftabnagar">{language === 'bn' ? 'আফতাবনগর' : 'Aftabnagar'}</option>
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
                        <option value="Gulshan Link Road">{language === 'bn' ? 'গুলশান লিংক রোড' : 'Gulshan Link Road'}</option>
                        <option value="Other Area">{language === 'bn' ? 'অন্যান্য / পার্শ্ববর্তী এলাকা' : 'Other / Adjacent Area'}</option>
                      </select>
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      {t.leadForm.packageLabel}
                    </label>
                    <div className="relative">
                      <select
                        value={preferredPackage}
                        onChange={(e) => setPreferredPackage(e.target.value)}
                        className="w-full px-3.5 py-3 pl-10 rounded-xl bg-slate-850 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
                      >
                        {t.packages.homeList.map((pkg) => (
                          <option key={pkg.id} value={`${pkg.name} (${pkg.speed})`}>
                            {pkg.name} ({pkg.speed} — {pkg.price} {language === 'bn' ? 'টাকা/মাস' : 'Tk/mo'})
                          </option>
                        ))}
                        <option value="Corporate Dedicated">
                          {language === 'bn' ? 'কর্পোরেট / বিজনেস ডেডিকেটেড লিংক' : 'Corporate / Business Dedicated Link'}
                        </option>
                      </select>
                      <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Road / Building Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    {t.leadForm.addressLabel}
                  </label>
                  <input
                    type="text"
                    value={addressDetails}
                    onChange={(e) => setAddressDetails(e.target.value)}
                    placeholder={t.leadForm.addressPlaceholder}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    {t.leadForm.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.leadForm.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.leadForm.submittingBtn : t.leadForm.submitBtn}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{t.leadForm.noUpfrontNote}</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
