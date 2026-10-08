import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  CheckCircle2, 
  Globe, 
  FileText
} from 'lucide-react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. PUBLIC IP MODAL
export const PublicIPModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [clientId, setClientId] = useState('');
  const [useCase, setUseCase] = useState('CCTV & Security NVR');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                {language === 'bn' ? 'পাবলিক / স্ট্যাটিক আইপির আবেদন' : 'Request Public / Static IP'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'bn' ? 'গ্রিন লিংক ডেডিকেটেড রাউটিং' : 'Green Link Dedicated Routing'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-lg text-slate-900">
                {language === 'bn' ? 'আবেদন সফলভাবে গৃহীত হয়েছে' : 'Request Submitted'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'bn' 
                  ? 'বাড্ডায় আমাদের এনওসি রাউটিং দল আপনার স্ট্যাটিক IPv4 সাবনেট নির্ধারণ করতে যোগাযোগ করবে।' 
                  : 'Our NOC routing team in Badda will contact you to assign your static IPv4 subnet.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'আপনার নাম *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'bn' ? 'আপনার নাম লিখুন' : 'Your Name'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'ফোন নম্বর *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono-numbers focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'বর্তমান ক্লায়েন্ট আইডি (যদি গ্রাহক হন)' : 'Current Client ID (If existing subscriber)'}
                </label>
                <input
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="e.g. GLN-XXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'আইপি ব্যবহারের প্রধান উদ্দেশ্য *' : 'Primary Purpose *'}
                </label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="CCTV & Security NVR">{language === 'bn' ? 'সিসিটিভি ও সিকিউরিটি NVR' : 'CCTV & Remote Security NVR'}</option>
                  <option value="Secure Office VPN">{language === 'bn' ? 'অফিস সিকিউর ভিপিএন / গেটওয়ে' : 'Office Secure VPN / Gateway'}</option>
                  <option value="Remote Desktop (RDP)">{language === 'bn' ? 'রিমোট ডেস্কটপ / ওয়ার্কস্টেশন' : 'Remote Desktop / Workstation'}</option>
                  <option value="Local Servers & Hosting">{language === 'bn' ? 'লোকাল ওয়েব সার্ভার / ডাটাবেজ' : 'Local Web Server / Database'}</option>
                  <option value="Gaming & Port Forwarding">{language === 'bn' ? 'গেমিং / পোর্ট ফরোয়ার্ডিং' : 'Gaming / Port Forwarding'}</option>
                  <option value="Banking & ERP Applications">{language === 'bn' ? 'ব্যাংকিং ও ইআরপি হোয়াইট-লিস্টিং' : 'Banking & ERP White-listing'}</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-all shadow-md"
                >
                  {language === 'bn' ? 'পাবলিক আইপির আবেদন পাঠান' : 'Submit Public IP Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 2. SUPPORT TICKET MODAL
export const TicketModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [clientId, setClientId] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && issue) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
              !
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                {language === 'bn' ? 'সাপোর্ট টিকিট তৈরি করুন' : 'Create Support Ticket'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'bn' ? 'গ্রিন লিংক ২৪/৭ টেকনিক্যাল ডিসপ্যাচ' : 'Green Link 24/7 Technical Dispatch'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-lg text-slate-900">
                {language === 'bn' ? 'সাপোর্ট টিকিট সফলভাবে গৃহীত' : 'Support Ticket Dispatched'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'bn' 
                  ? 'টিকিট রেফারেন্স তৈরি হয়েছে। বাড্ডার দায়িত্বপ্রাপ্ত টেকনিশিয়ান ১২ ঘণ্টার ফিজিক্যাল সাপোর্ট সময়ের মধ্যে সেবা প্রদান করবেন।' 
                  : 'Ticket reference created. Our on-duty field technician in Badda will attend within our 12-hour physical support window.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'ক্লায়েন্ট আইডি / একাউন্ট নং' : 'Client ID / Account No'}
                </label>
                <input
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="e.g. GLN-XXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'যোগাযোগের ফোন নম্বর *' : 'Contact Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono-numbers focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">
                  {language === 'bn' ? 'সমস্যার বিবরণ *' : 'Describe the Problem *'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder={language === 'bn' ? 'যেমন: ওএনইউ রাউটারে লাল বাতি জ্বলছে বা ইন্টারনেট পাওয়া যাচ্ছে না...' : 'E.g., Red LOS light blinking on ONU, or Wi-Fi connected with no Internet...'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-all shadow-md"
                >
                  {language === 'bn' ? 'এনওসিতে টিকিট পাঠান' : 'Submit Ticket to NOC'}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                {language === 'bn' ? 'জরুরি ফাইবার সংযোগ বিচ্ছিন্নতায় কল করুন:' : 'For emergency fiber breaks, call directly:'} <strong className="text-slate-800">01676-367500</strong>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. LEGAL POLICY MODAL
interface LegalModalProps extends BaseModalProps {
  type: 'terms' | 'privacy' | 'refund';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  const contentMap = {
    terms: {
      title: language === 'bn' ? "শর্তাবলী ও নিয়মাবলী" : "Terms & Conditions",
      body: language === 'bn' ? [
        "১. সেবা প্রদান: গ্রিন লিংক নেটওয়ার্ক বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (বিটিআরসি)-এর মানদণ্ড অনুযায়ী ফাইবার অপটিক ব্রডব্যান্ড ইন্টারনেট সরবরাহ করে।",
        "২. আনলিমিটেড প্যাকেজ নীতিমালা: আবাসিক আনলিমিটেড প্যাকেজসমূহ পরিবারের স্বাভাবিক ব্যবহারের জন্য প্রযোজ্য, এতে কোনো অনাকাঙ্ক্ষিত গোপন ডেটা ক্যাপ নেই।",
        "৩. যন্ত্রপাতি: সংযোগের জন্য ব্যবহৃত ওএনইউ (ONU) এবং অপটিক্যাল প্যাচ কর্ড গ্রাহকের সঠিক রক্ষণাবেক্ষণের দায়িত্বাধীন।",
        "৪. বিল পরিশোধ: মাসিক সাবস্ক্রিপশন ফি প্রতি মাসের ১ থেকে ১০ তারিখের মধ্যে বিকাশ, নগদ বা অফিসে পরিশোধ করতে হবে।",
        "৫. কারিগরি সহায়তা: সরাসরি ফিজিক্যাল ফিল্ড সাপোর্ট প্রতিদিন সকাল ৯:০০ টা থেকে রাত ৯:০০ টা পর্যন্ত এবং অনলাইন সাপোর্ট সার্বক্ষণিক পাওয়া যাবে।",
      ] : [
        "1. Service Delivery: Green Link Network provides fiber-optic broadband Internet connectivity in accordance with BTRC regulatory standards and individual subscription plans.",
        "2. Unlimited Package Policy: Residential unlimited packages are designed for standard residential personal and domestic use without arbitrary data capping, subject to reasonable network usage guidelines.",
        "3. Equipment: ONU (Optical Network Unit) and optical patch cables supplied remain subject to operational warranty. Subscriber is responsible for safeguarding equipment against electrical surges.",
        "4. Billing & Dues: Monthly broadband subscription fees are payable in advance between the 1st and 10th of every calendar month through authorized MFS (bKash/Nagad/Rocket) or branch collection.",
        "5. Technical Support: Physical support is available from 9:00 AM to 9:00 PM daily. Emergency network-wide outages are monitored 24/7 by our core engineering staff.",
      ],
    },
    privacy: {
      title: language === 'bn' ? "গোপনীয়তা নীতি" : "Privacy Policy",
      body: language === 'bn' ? [
        "১. তথ্য সংগ্রহ: টেলিযোগাযোগ সংযোগ স্থাপন ও নিয়ন্ত্রক সংস্থার নীতিমালার প্রয়োজনে গ্রাহকের পরিচয়পত্র ও যোগাযোগের তথ্য সংগ্রহ করা হয়।",
        "২. তথ্য সুরক্ষা: সংগৃহীত গ্রাহকের ব্যক্তিগত বা যোগাযোগের তথ্য কোনো তৃতীয় পক্ষের কাছে হস্তান্তর বা বিক্রি করা হয় না।",
        "৩. নেটওয়ার্ক নিরাপত্তা: গ্রাহকের ডিজিটাল নিরাপত্তা ও সাইবার হামলা প্রতিহত করতে জাতীয় আইন অনুযায়ী নিরাপত্তা লগ সংরক্ষিত থাকে।",
        "৪. পেমেন্ট নিরাপত্তা: মোবাইল আর্থিক সেবা (বিকাশ/নগদ/রকেট)-এর মাধ্যমে সরাসরি মার্চেন্ট অ্যাকাউন্টে পেমেন্ট সম্পন্ন হয়। আমরা কোনো গোপন পিন বা পাসওয়ার্ড সংগ্রহ করি না।",
      ] : [
        "1. Information Collection: Green Link Network collects subscriber identification details (name, national ID, contact telephone, installation address) strictly for telecommunication provisioning and regulatory compliance.",
        "2. Data Protection: Subscriber contact information is never sold, leased, or distributed to unauthorized third parties.",
        "3. Network Logs: In accordance with Bangladesh law, security and session IP logs are maintained confidentially for network security, DDoS mitigation, and statutory compliance.",
        "4. Payment Security: MFS transactions are processed through direct merchant agreements with bKash, Nagad, and partner banks. We do not store financial account passwords or PINs.",
      ],
    },
    refund: {
      title: language === 'bn' ? "রিফান্ড ও বাতিলকরণ নীতিমালা" : "Refund & Cancellation Policy",
      body: language === 'bn' ? [
        "১. সংযোগ বাতিল: সংযোগ বাতিল করতে চাইলে পরবর্তী বিলিং চক্র শুরুর পূর্বে আমাদের কাস্টমার ডেস্কে অবগত করতে হবে।",
        "২. কারিগরি সম্ভাব্যতা: কোনো কারণে নির্ধারিত স্থানে ফাইবার লাইন টানা সম্ভব না হলে অগ্রিম জামানত সম্পূর্ণ ফেরত দেওয়া হবে।",
        "৩. মাসিক বিল: সংশ্লিষ্ট মাসের ব্যান্ডউইথ অ্যাক্টিভেশনের পর চলতি মাসের মাসিক সাবস্ক্রিপশন ফি অফেরতযোগ্য।",
        "৪. রাউটার/ওএনইউ ফেরত: ব্যবহারযোগ্য অবস্থায় ফেরতযোগ্য সিকিউরিটি ডিপোজিটের ডিভাইস অফিসে জমা দিলে ডিপোজিট রিফান্ড করা হবে।",
      ] : [
        "1. Cancellation: Subscribers may discontinue their connection by notifying our customer desk prior to the start of a new billing cycle.",
        "2. Connection Feasibility: If a requested connection cannot be completed due to physical fiber feasibility constraints, any initial security deposit will be promptly refunded.",
        "3. Monthly Subscriptions: Ongoing monthly broadband fees for an active month are generally non-refundable once line bandwidth has been provisioned for that period.",
        "4. Equipment Security Deposit: Returnable ONU router deposits are refundable upon return of functional hardware in good condition to our Aftabnagar or North Badda office.",
      ],
    },
  };

  const activeContent = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base text-white">{activeContent.title}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed flex-1">
          <div className="font-semibold text-slate-900">
            {language === 'bn' 
              ? 'গ্রিন লিংক নেটওয়ার্ক • রেগুলেটরি কমপ্লায়েন্স ও গ্রাহক চুক্তি' 
              : 'Green Link Network • Regulatory Compliance & Subscriber Agreement'}
          </div>
          {activeContent.body.map((item, idx) => (
            <p key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              {item}
            </p>
          ))}
          <p className="text-[11px] text-slate-500 italic pt-2">
            {language === 'bn' 
              ? 'সর্বশেষ হালনাগাদ: ২০২৬। যেকোনো তথ্যে যোগাযোগ করুন info@greenlink-network.com' 
              : 'Last revised: 2026. For questions regarding policy terms, contact info@greenlink-network.com.'}
          </p>
        </div>

        <div className="p-4 bg-slate-100 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
          >
            {language === 'bn' ? 'সম্মতি প্রদান করছি' : 'I Understand'}
          </button>
        </div>
      </div>
    </div>
  );
};
