import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  ChevronDown, 
  Search, 
  PhoneCall
} from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const bnFaqs = [
    {
      id: "faq-1",
      category: "general",
      question: "আমি কীভাবে গ্রিন লিংক ইন্টারনেট সংযোগ নিতে পারি?",
      answer: "আপনি আমাদের ওয়েবসাইটে নতুন সংযোগের ফর্ম পূরণ করে, আমাদের হটলাইনে (+৮৮০১৬৭৬৩৬৭৫০০ / +৮৮০১৮২৭৬৮৮৬৭৭) ফোন করে অথবা আফতাবনগর বা উত্তর বাড্ডার অফিসে সরাসরি এসে সংযোগের আবেদন করতে পারেন। আমাদের ফিল্ড টিম আপনার ভবনে ফাইবার লাইনের সংযোগযোগ্যতা পরীক্ষা করে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে সংযোগ প্রদান করবে।",
    },
    {
      id: "faq-2",
      category: "general",
      question: "কী কী ইন্টারনেট প্যাকেজ উপলব্ধ রয়েছে?",
      answer: "আমরা ২০ এমবিপিএস (BASIC - ৫০০ টাকা/মাস) থেকে শুরু করে ১০০ এমবিপিএস (ELITE - ১০০০ টাকা/মাস) পর্যন্ত হোম ব্রডব্যান্ড প্যাকেজ প্রদান করি। প্রতিটি আবাসিক প্যাকেজে বাফারহীন ইউটিউব, বাফারহীন ফেসবুক এবং উচ্চগতির বিডিআইএক্স (BDIX) সংযোগ অন্তর্ভুক্ত রয়েছে। এছাড়াও কর্পোরেট গ্রাহকদের জন্য কাস্টমাইজড ডেডিকেটেড প্যাকেজ উপলব্ধ রয়েছে।",
    },
    {
      id: "faq-3",
      category: "technical",
      question: "এফটিটিএইচ (FTTH) অপটিক্যাল ফাইবার সংযোগ কি পাওয়া যায়?",
      answer: "হ্যাঁ, গ্রিন লিংক নেটওয়ার্ক শতভাগ ফাইবার-টু-দ্য-হোম (FTTH) ব্রডব্যান্ড সংযোগ প্রদান করে। আমাদের স্থানীয় ওএলটি হাব থেকে সরাসরি আপনার বাসায় অপটিক্যাল ফাইবার কেবলের মাধ্যমে সংযোগ দেওয়া হয়, যার ফলে ঝড়বৃষ্টিতেও নেটওয়ার্কের কোনো সমস্যা হয় না এবং সর্বনিম্ন লেটেন্সি পাওয়া যায়।",
    },
    {
      id: "faq-4",
      category: "technical",
      question: "আপনারা কি বিডিআইএক্স (BDIX) কানেক্টিভিটি প্রদান করেন?",
      answer: "হ্যাঁ, গ্রিন লিংকের প্রতিটি প্যাকেজে উচ্চগতির বাংলাদেশ ইন্টারনেট এক্সচেঞ্জ (BDIX) সরাসরি সংযুক্ত রয়েছে। এর ফলে দেশীয় সকল কনটেন্ট ও ওয়েবসাইট অত্যন্ত দ্রুত লোড হয় এবং দেশীয় গেমিং ও স্ট্রিমিংয়ে কোনো বাফারিং হয় না।",
    },
    {
      id: "faq-5",
      category: "technical",
      question: "আপনারা কি পাবলিক / ডেডিকেটেড স্ট্যাটিক আইপি প্রদান করেন?",
      answer: "হ্যাঁ, যেসব গ্রাহকের সিসিটিভি ক্যামেরা দূর থেকে দেখা, ভিপিএন সার্ভার স্থাপন বা ব্যবসায়িক অ্যাপ্লিকেশনের জন্য রিয়েল আইপি প্রয়োজন, তাদের জন্য আমরা ডেডিকেটেড পাবলিক IPv4 অ্যাড্রেস সরবরাহ করি। সংযোগ গ্রহণের সময় বা যেকোনো সময় আমাদের সাপোর্ট ডেস্কে জানিয়ে এটি সক্রিয় করা যায়।",
    },
    {
      id: "faq-6",
      category: "billing",
      question: "আমি কীভাবে মাসিক ইন্টারনেট বিল পরিশোধ করব?",
      answer: "আপনি খুব সহজেই বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফারের মাধ্যমে ঘরে বসেই বিল পরিশোধ করতে পারেন। আপনার ক্লায়েন্ট আইডি রেফারেন্স হিসেবে ব্যবহার করে 'Pay Bill' অপশনে গিয়ে কয়েক সেকেন্ডেই বিল পরিশোধ করা যায়। এছাড়াও আমাদের আফতাবনগর ও উত্তর বাড্ডা অফিসে এসে সরাসরি নগদ টাকাতেও বিল দেওয়া যায়।",
    },
    {
      id: "faq-7",
      category: "technical",
      question: "ইন্টারনেটে সমস্যা দেখা দিলে কীভাবে অভিযোগ জানাব?",
      answer: "আমরা ২৪/৭ অনলাইন সাপোর্ট এবং প্রতিদিন সকাল ৯টা থেকে রাত ৯টা পর্যন্ত ১২ ঘণ্টা ফিজিক্যাল অন-সাইট ফিল্ড সাপোর্ট প্রদান করি। সমস্যা হলে আমাদের হটলাইনে (+৮৮০১৬৭৬৩৬৭৫০০) কল করতে পারেন, হোয়াটসঅ্যাপে বার্তা পাঠাতে পারেন কিংবা কাস্টমার পোর্টালে সাপোর্ট টিকিট তৈরি করতে পারেন। বাড্ডায় অবস্থানরত আমাদের টেকনিশিয়ান টিম দ্রুত সমস্যা সমাধান করবে।",
    },
    {
      id: "faq-8",
      category: "general",
      question: "গ্রিন লিংক কি আমার নির্দিষ্ট এলাকায় উপলব্ধ?",
      answer: "গ্রিন লিংক বাড্ডার সকল প্রধান এলাকায় সেবা প্রদান করে—যার মধ্যে রয়েছে আফতাবনগর (ব্লক এ থেকে এম), উত্তর বাড্ডা (কুমিল্লাপাড়া, আদর্শ নগর, গোপীপাড়া), মধ্য বাড্ডা, দক্ষিণ বাড্ডা, মেরুল বাড্ডা, ডিআইটি প্রজেক্ট এবং পূর্ব বাড্ডা। আপনার রোড বা ব্লকের অবস্থান জানতে আমাদের কভারেজ চেকার ব্যবহার করতে পারেন।",
    },
    {
      id: "faq-9",
      category: "corporate",
      question: "আপনারা কি কর্পোরেট ও ব্যবসায়িক ইন্টারনেট সংযোগ দেন?",
      answer: "হ্যাঁ, আমরা অফিস, ব্যাংক, শিক্ষাপ্রতিষ্ঠান এবং বিভিন্ন বাণিজ্যিক প্রতিষ্ঠানের জন্য ১:১ আনকন্টেন্ডেড ডেডিকেটেড ব্যান্ডউইথ, পয়েন্ট-টু-পয়েন্ট প্রাইভেট ফাইবার লিংক এবং সম্পূর্ণ ম্যানেজড নেটওয়ার্ক সেবা প্রদান করি। কর্পোরেট সংযোগের জন্য আমাদের বিজনেস টিমের সাথে সরাসরি যোগাযোগ করুন।",
    },
    {
      id: "faq-10",
      category: "general",
      question: "গ্রাহক সেবার জন্য কী কী সাপোর্ট মাধ্যম রয়েছে?",
      answer: "আমরা ফোন হটলাইন সাপোর্ট, সার্বক্ষণিক হোয়াটসঅ্যাপ চ্যাট, অনলাইন পোর্টাল টিকিট ব্যবস্থা এবং আফতাবনগর ও উত্তর বাড্ডার দুটি অফিসে সরাসরি ওয়াক-ইন সাপোর্ট প্রদান করে থাকি।",
    },
  ];

  const currentFaqs = language === 'bn' ? bnFaqs : SITE_CONFIG.faqs;

  const filteredFaqs = currentFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {t.faq.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.faq.subtitle}
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              { id: 'all', label: t.faq.catAll },
              { id: 'general', label: t.faq.catGeneral },
              { id: 'technical', label: t.faq.catTechnical },
              { id: 'billing', label: t.faq.catBilling },
              { id: 'corporate', label: t.faq.catCorporate },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
              <p className="text-sm text-slate-500">{t.faq.noResults}</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 text-xs font-bold text-emerald-600 hover:underline"
              >
                {t.faq.resetFilters}
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-emerald-300 shadow-md ring-1 ring-emerald-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded mt-0.5 shrink-0">
                        Q{index + 1}
                      </span>
                      <span className="font-bold text-base text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{t.faq.stillQuestion}</div>
              <div className="text-xs text-slate-500">{t.faq.stillHelp}</div>
            </div>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phones.aftabnagar}`}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shrink-0 transition-all"
          >
            {t.faq.callHotline} {SITE_CONFIG.phones.aftabnagar}
          </a>
        </div>

      </div>
    </section>
  );
};
