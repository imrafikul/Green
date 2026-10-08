import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();

  const reviews = language === 'bn' ? [
    {
      id: "rev-1",
      name: "তানভীর আহমেদ",
      area: "আফতাবনগর, ব্লক বি",
      package: "STANDARD (৪০ এমবিপিএস)",
      rating: 5,
      comment: "আফতাবনগরে ২ বছরেরও বেশি সময় ধরে গ্রিন ইন্টারনেট ব্যবহার করছি। লাইন ডিসকানেক্টের কোনো ঝামেলা নেই, বিডিআইএক্স স্পিড অসাধারণ এবং স্থানীয় লাইনে কোনো কাজ থাকলে দ্রুত সমাধান পাওয়া যায়।",
      date: "যাচাইকৃত হোম গ্রাহক",
    },
    {
      id: "rev-2",
      name: "নুসরাত জাহান",
      area: "উত্তর বাড্ডা (কুমিল্লাপাড়া)",
      package: "PREMIUM (৮০ এমবিপিএস)",
      rating: 5,
      comment: "ফ্রিল্যান্স ভিডিও এডিটর হিসেবে আমার সার্বক্ষণিক হাই আপলোড স্পিড ও লো-পিং প্রয়োজন। তাদের এফটিটিএইচ ফাইবার সংযোগ কোনো ড্রপ ছাড়াই একটানা সেবা দিয়ে যাচ্ছে।",
      date: "যাচাইকৃত ফ্রিল্যান্সার",
    },
    {
      id: "rev-3",
      name: "মো: কামরুল হাসান",
      area: "মেরুল বাড্ডা",
      package: "ELITE (১০০ এমবিপিএস)",
      rating: 5,
      comment: "অন্য লোকাল আইএসপি থেকে গ্রিন লিংকে সুইচ করেছি। বাসায় একসাথে চারটি স্মার্ট টিভিতে বাফারলেস ৪কে স্ট্রিমিং চলে। বিকাশ বিল পে-এর মাধ্যমে পেমেন্ট করাও খুব সহজ।",
      date: "যাচাইকৃত আবাসিক গ্রাহক",
    },
    {
      id: "rev-4",
      name: "নেক্সাস ডিজাইন অ্যান্ড টেক",
      area: "বাড্ডা মেইন রোড",
      package: "কর্পোরেট ডেডিকেটেড লিংক",
      rating: 5,
      comment: "আমাদের ২৫টি ওয়ার্কস্টেশনের অফিসের জন্য গ্রিন লিংক ডেডিকেটেড ফাইবার ও স্ট্যাটিক পাবলিক আইপি দিচ্ছে। কোনো প্রয়োজন হলে তাদের ইঞ্জিনিয়াররা কয়েক মিনিটেই এসে উপস্থিত হয়।",
      date: "যাচাইকৃত কর্পোরেট গ্রাহক",
    },
  ] : [
    {
      id: "rev-1",
      name: "Tanvir Ahmed",
      area: "Aftabnagar, Block B",
      package: "STANDARD (40 Mbps)",
      rating: 5,
      comment: "Having used Green Internet for over 2 years in Aftabnagar, the stability is commendable. BDIX speed is great and support responds quickly whenever there is a neighborhood line maintenance.",
      date: "Verified Home Subscriber",
    },
    {
      id: "rev-2",
      name: "Nusrat Jahan",
      area: "North Badda (Comillapara)",
      package: "PREMIUM (80 Mbps)",
      rating: 5,
      comment: "As a freelance video editor, high upload bandwidth and low ping are essential for my clients. The FTTH connection has been remarkably consistent without random disconnections.",
      date: "Verified Freelance Subscriber",
    },
    {
      id: "rev-3",
      name: "Md. Kamrul Hasan",
      area: "Merul Badda",
      package: "ELITE (100 Mbps)",
      rating: 5,
      comment: "Switched from another local ISP. Bufferless YouTube and HD streaming across four smart TVs simultaneously work without a glitch. Bill payment via bKash is also effortless.",
      date: "Verified Residential Client",
    },
    {
      id: "rev-4",
      name: "Nexus Design & Tech",
      area: "Badda Main Road",
      package: "Corporate Dedicated Link",
      rating: 5,
      comment: "Green Link provides our 25-workstation office with dedicated fiber connectivity and a static IP. Their local engineering team responds in person within minutes if needed.",
      date: "Verified Corporate Subscriber",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {language === 'bn' ? 'গ্রাহকদের মতামত' : 'Subscriber Feedback'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'bn' ? 'বাড্ডা ও আফতাবনগরের বিশ্বস্ত সেবা' : 'Trusted in Badda & Aftabnagar'}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {language === 'bn' 
              ? 'গ্রিন লিংক FTTH সংযোগ গ্রহণকারী স্থানীয় বাসাবাড়ি, ফ্রিল্যান্সার ও ব্যবসা প্রতিষ্ঠানের বাস্তব অভিজ্ঞতা।' 
              : 'Real subscriber experience across local residences, freelancers, and businesses connected through Green Link FTTH.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="font-bold text-sm text-slate-900">
                  {review.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {review.area}
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-700 font-semibold">{review.package}</span>
                  <span className="text-slate-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle structure note */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <span>{language === 'bn' ? 'বাড্ডার বিভিন্ন ফাইবার নোডের সক্রিয় গ্রাহকদের সরাসরি প্রতিক্রিয়া।' : 'Reviews reflect subscriber feedback across our Badda fiber distribution nodes. Easily managed in config.'}</span>
        </div>

      </div>
    </section>
  );
};
