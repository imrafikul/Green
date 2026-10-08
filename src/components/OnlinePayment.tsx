import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Copy, 
  Check, 
  ShieldCheck
} from 'lucide-react';

export const OnlinePayment: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeMethod, setActiveMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'bank'>('bkash');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const selectedData = SITE_CONFIG.paymentMethods.find(m => m.id === activeMethod) || SITE_CONFIG.paymentMethods[0];

  const getSteps = (methodId: string) => {
    if (language === 'bn') {
      if (methodId === 'bkash') {
        return [
          "বিকাশ অ্যাপ ওপেন করে 'পে বিল' অপশনে যান অথবা ডায়াল করুন *247#",
          "সার্চ বক্সে 'Green Link Network' অথবা মার্চেন্ট নম্বর প্রবেশ করান",
          "আপনার ক্লায়েন্ট আইডি (Client ID) অথবা নিবন্ধিত ফোন নম্বর দিন",
          "মাসিক বিলের পরিমাণ লিখে আপনার গোপন বিকাশ পিন (PIN) দিয়ে কনফার্ম করুন",
        ];
      }
      if (methodId === 'nagad') {
        return [
          "নগদ অ্যাপ ওপেন করুন অথবা ডায়াল করুন *167#",
          "'বিল পে' অথবা 'মার্চেন্ট পে' অপশন সিলেক্ট করুন",
          "গ্রিন লিংক মার্চেন্ট একাউন্ট নম্বর প্রদান করুন",
          "রেফারেন্সে আপনার ক্লায়েন্ট আইডি দিয়ে পিন দিয়ে সম্পন্ন করুন",
        ];
      }
      if (methodId === 'rocket') {
        return [
          "রকেট অ্যাপ ওপেন করুন অথবা *322# ডায়াল করুন",
          "'বিল পে' অপশন বেছে নিয়ে বিলার কোড দিন",
          "আপনার ক্লায়েন্ট আইডি এবং বিলের পরিমাণ লিখুন",
          "রকেট সিক্রেট পিন দিয়ে পেমেন্ট সম্পন্ন করুন",
        ];
      }
      return [
        "মাসিক ইনভয়েস থেকে গ্রিন লিংকের ব্যাংক একাউন্ট নম্বর সংগ্রহ করুন",
        "NPSB / BEFTN / ইন্টারনেট ব্যাংকিংয়ের মাধ্যমে ট্রান্সফার করুন",
        "ট্রানজাকশন আইডি অথবা জমা স্লিপ বিলিং ডিপার্টমেন্টে পাঠান",
      ];
    }
    return selectedData.steps;
  };

  return (
    <section id="payment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {t.payment.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.payment.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.payment.subtitle}
          </p>
        </div>

        {/* Payment Methods Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SITE_CONFIG.paymentMethods.map((method) => {
            const isActive = activeMethod === method.id;
            return (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method.id as any)}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {method.id === 'bank' ? (
                  <Building2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                )}
                <span>{method.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Payment Guide Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Steps */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                  {selectedData.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900">
                    {t.payment.howToPay(selectedData.name)}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedData.type}</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedData.description}
              </p>

              {/* Steps Ordered List */}
              <div className="space-y-3 pt-2">
                {getSteps(selectedData.id).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Payment Reference Box */}
            <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t.payment.detailsTitle}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.payment.merchantLabel}</div>
                  <div className="flex items-center justify-between mt-1 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-slate-900 text-sm">
                      {selectedData.merchantNumber}
                    </span>
                    <button
                      onClick={() => handleCopy(selectedData.merchantNumber)}
                      className="text-slate-500 hover:text-emerald-600 p-1 cursor-pointer"
                      title="Copy number"
                    >
                      {copiedText === selectedData.merchantNumber ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.payment.referenceLabel}</div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium">
                    {t.payment.referenceDesc}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.payment.counterLabel}</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-mono font-bold">
                    1
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                {t.payment.whatsappNote}{' '}
                <a 
                  href={SITE_CONFIG.socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-bold hover:underline"
                >
                  01676-367500
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Integration notice */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>
            {t.payment.footerNote}
          </p>
        </div>

      </div>
    </section>
  );
};
