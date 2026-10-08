import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  User, 
  FileText, 
  LifeBuoy, 
  CheckCircle2, 
  Download, 
  Send, 
  LogOut,
  Smartphone,
  Wifi
} from 'lucide-react';

interface CustomerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerPortalModal: React.FC<CustomerPortalModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientId, setClientId] = useState('GLN-8492');
  const [clientPhone, setClientPhone] = useState('01676367500');
  const [activeTab, setActiveTab] = useState<'overview' | 'bills' | 'tickets'>('overview');
  const [ticketCategory, setTicketCategory] = useState('Optical Line Issue');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketSuccess, setTicketSuccess] = useState(false);

  // Demo user data
  const subscriberData = {
    name: "Rafiqul Islam",
    clientId: clientId || "GLN-8492",
    phone: clientPhone || "01676367500",
    package: "STANDARD",
    speed: "40 Mbps",
    monthlyCharge: language === 'bn' ? "৭০০ টাকা" : "700 Tk",
    currentBill: language === 'bn' ? "৭০০ টাকা" : "700 Tk",
    billStatus: language === 'bn' ? "পরিশোধিত" : "Paid",
    dueDate: language === 'bn' ? "প্রতি মাসের ০৫ তারিখ" : "05th of every month",
    opticalRxPower: "-19.2 dBm (Optimal)",
    ipAddress: "103.148.x.x (BDIX Dynamic)",
    activeTickets: [
      { 
        id: "TKT-1082", 
        title: language === 'bn' ? "অপটিক্যাল ফাইবার স্প্লাইসিং চেক" : "Optical line splice check", 
        status: language === 'bn' ? "সমাধানকৃত" : "Resolved", 
        date: language === 'bn' ? "২ সপ্তাহ পূর্বে" : "2 weeks ago" 
      }
    ],
  };

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientId.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketDesc.trim()) {
      setTicketSuccess(true);
      setTimeout(() => {
        setTicketSuccess(false);
        setTicketDesc('');
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
                {language === 'bn' ? 'গ্রিন লিংক গ্রাহক পোর্টাল' : 'Green Link Customer Portal'}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                {language === 'bn' ? 'গ্রাহক সেলফ-সার্ভিস ম্যানেজমেন্ট API' : 'Subscriber Self-Service Management API'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="max-w-md mx-auto space-y-6 py-4">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto">
                  <User className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  {language === 'bn' ? 'আপনার একাউন্টে লগইন করুন' : 'Log in to Your Account'}
                </h4>
                <p className="text-xs text-slate-500">
                  {language === 'bn' ? 'আপনার ক্লায়েন্ট আইডি অথবা নিবন্ধিত মোবাইল নম্বর দিন।' : 'Enter your Green Link Client ID or registered mobile number.'}
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    {language === 'bn' ? 'ক্লায়েন্ট আইডি / একাউন্ট নং *' : 'Client ID / Account No *'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                      placeholder="e.g. GLN-8492"
                      required
                      className="w-full px-3.5 py-2.5 pl-10 rounded-xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    {language === 'bn' ? 'নিবন্ধিত মোবাইল নম্বর' : 'Registered Mobile Number'}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 pl-10 rounded-xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 font-mono-numbers focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    {language === 'bn' ? 'কাস্টমার পোর্টালে লগইন করুন' : 'Login to Customer Portal'}
                  </button>
                </div>
              </form>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs text-center">
                {language === 'bn' ? (
                  <>ডেমো অ্যাক্সেস সক্রিয়। লাইভ পোর্টাল ফিচার দেখতে <strong>লগইন</strong> বাটনে ক্লিক করুন।</>
                ) : (
                  <>Demo access available. Click <strong>Login</strong> with pre-filled credentials to explore live portal features.</>
                )}
              </div>
            </div>
          ) : (
            /* Logged In Dashboard */
            <div className="space-y-6">
              {/* Subscriber Top Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <h4 className="font-extrabold text-base text-slate-900">
                      {subscriberData.name}
                    </h4>
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {language === 'bn' ? 'ক্লায়েন্ট আইডি:' : 'Client ID:'} <strong className="text-slate-800">{subscriberData.clientId}</strong> • {language === 'bn' ? 'মোবাইল:' : 'Mobile:'} {subscriberData.phone}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {language === 'bn' ? 'সংযোগ: সক্রিয়' : 'Connection: ONLINE'}
                  </span>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title={language === 'bn' ? 'লগআউট' : 'Logout'}
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Portal Tabs */}
              <div className="flex border-b border-slate-200 gap-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2.5 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'border-emerald-600 text-emerald-700'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {language === 'bn' ? 'ওভারভিউ ও কানেকশন' : 'Overview & Connection'}
                </button>
                <button
                  onClick={() => setActiveTab('bills')}
                  className={`pb-2.5 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'bills'
                      ? 'border-emerald-600 text-emerald-700'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {language === 'bn' ? 'বিল ও ইনভয়েস' : 'Bills & Invoices'}
                </button>
                <button
                  onClick={() => setActiveTab('tickets')}
                  className={`pb-2.5 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'tickets'
                      ? 'border-emerald-600 text-emerald-700'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {language === 'bn' ? 'সাপোর্ট টিকিট' : 'Support Tickets'}
                </button>
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {language === 'bn' ? 'সাবস্ক্রাইবকৃত প্যাকেজ' : 'Subscribed Package'}
                      </div>
                      <div className="text-xl font-extrabold text-slate-900">
                        {subscriberData.package} ({subscriberData.speed})
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        {subscriberData.monthlyCharge} / {language === 'bn' ? 'মাস • আনলিমিটেড ফাইবার' : 'Month • Unlimited Fiber'}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {language === 'bn' ? 'ওএনইউ অপটিক্যাল স্ট্যাটাস' : 'ONU Optical Status'}
                      </div>
                      <div className="text-base font-bold text-slate-900 font-mono">
                        {subscriberData.opticalRxPower}
                      </div>
                      <div className="text-xs text-slate-500">
                        IP: {subscriberData.ipAddress}
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist in portal */}
                  <div className="p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">
                    <div className="font-bold text-slate-800">
                      {language === 'bn' ? 'পোর্টালে দ্রুত কাজ করুন:' : 'Quick Portal Actions:'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => setActiveTab('bills')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        {language === 'bn' ? 'মাসিক ইনভয়েস দেখুন' : 'View Monthly Invoice'}
                      </button>
                      <button 
                        onClick={() => setActiveTab('tickets')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        {language === 'bn' ? 'টেকনিক্যাল টিকিট তৈরি করুন' : 'Submit Technical Ticket'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: BILLS */}
              {activeTab === 'bills' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">
                        {language === 'bn' ? 'বর্তমান মাসের স্ট্যাটাস:' : 'Current Month Status:'}
                      </div>
                      <div className="text-xl font-extrabold text-emerald-700">
                        {subscriberData.billStatus} ({subscriberData.currentBill})
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {language === 'bn' ? 'বিলিং সাইকেল:' : 'Billing Cycle:'} {subscriberData.dueDate}
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Invoice #GLN-INV-2026-10 ready for download for Client ID ${subscriberData.clientId}`)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{language === 'bn' ? 'পিডিএফ ডাউনলোড' : 'Download PDF'}</span>
                    </button>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 flex justify-between">
                      <span>{language === 'bn' ? 'ইনভয়েস হিস্ট্রি' : 'Invoice History'}</span>
                      <span>{language === 'bn' ? 'পরিমাণ' : 'Amount'}</span>
                    </div>
                    <div className="p-3 border-t border-slate-100 flex justify-between items-center text-slate-600">
                      <div>
                        <div className="font-semibold text-slate-800">
                          {language === 'bn' ? 'অক্টোবর ২০২৬ ইনভয়েস' : 'October 2026 Invoice'}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {language === 'bn' ? 'বিকাশে পরিশোধিত • TxID: BK92847291' : 'Paid via bKash • TxID: BK92847291'}
                        </div>
                      </div>
                      <span className="font-mono font-bold text-slate-900">
                        {language === 'bn' ? '৭০০ টাকা' : '700 Tk'}
                      </span>
                    </div>
                    <div className="p-3 border-t border-slate-100 flex justify-between items-center text-slate-600">
                      <div>
                        <div className="font-semibold text-slate-800">
                          {language === 'bn' ? 'সেপ্টেম্বর ২০২৬ ইনভয়েস' : 'September 2026 Invoice'}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {language === 'bn' ? 'নগদে পরিশোধিত • TxID: NG48201948' : 'Paid via Nagad • TxID: NG48201948'}
                        </div>
                      </div>
                      <span className="font-mono font-bold text-slate-900">
                        {language === 'bn' ? '৭০০ টাকা' : '700 Tk'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: TICKETS */}
              {activeTab === 'tickets' && (
                <div className="space-y-4">
                  {ticketSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{language === 'bn' ? 'সাপোর্ট টিকিট সফলভাবে গৃহীত হয়েছে! বাড্ডার ফিল্ড টিমকে অবগত করা হয়েছে।' : 'Ticket created successfully! On-duty field team in Badda notified.'}</span>
                    </div>
                  )}

                  <form onSubmit={handleCreateTicket} className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                      {language === 'bn' ? 'সাপোর্ট রিকোয়েস্ট জমা দিন' : 'Submit Support Request'}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        {language === 'bn' ? 'সমস্যার ধরন' : 'Issue Category'}
                      </label>
                      <select
                        value={ticketCategory}
                        onChange={(e) => setTicketCategory(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs font-semibold"
                      >
                        <option value="Optical Line Issue">{language === 'bn' ? 'অপটিক্যাল ফাইবার লাইনে সমস্যা (ONU তে রেড লাইট)' : 'Optical Fiber Line Loss (Red Light on ONU)'}</option>
                        <option value="Slow Speed">{language === 'bn' ? 'ইন্টারনেট স্পিড কম / বেশি পিং' : 'Slow Speed / Latency'}</option>
                        <option value="Router Configuration">{language === 'bn' ? 'ওয়াই-ফাই রাউটার পাসওয়ার্ড / কনফিগারেশন' : 'Wi-Fi Router Password / Setup'}</option>
                        <option value="Billing Question">{language === 'bn' ? 'বিলিং ও পেমেন্ট সংক্রান্ত' : 'Billing & Payment Issue'}</option>
                        <option value="Relocation">{language === 'bn' ? 'বাড্ডায় বাসা/অফিস স্থানান্তর' : 'Connection Relocation in Badda'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        {language === 'bn' ? 'সমস্যার বিবরণ' : 'Problem Description'}
                      </label>
                      <textarea
                        rows={2}
                        value={ticketDesc}
                        onChange={(e) => setTicketDesc(e.target.value)}
                        placeholder={language === 'bn' ? 'সংক্ষেপে আপনার সমস্যার কথা লিখুন...' : 'Briefly describe what you are experiencing...'}
                        required
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'bn' ? 'টিকিট জমা দিন' : 'Submit Ticket'}</span>
                    </button>
                  </form>

                  {/* Existing tickets list */}
                  <div className="text-xs space-y-2">
                    <div className="font-bold text-slate-700">
                      {language === 'bn' ? 'পূর্ববর্তী অভিযোগ ও টিকিটসমূহ:' : 'Past Complaints & Tickets:'}
                    </div>
                    {subscriberData.activeTickets.map((tkt) => (
                      <div key={tkt.id} className="p-3 rounded-lg border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-slate-800">{tkt.title}</div>
                          <div className="text-[11px] text-slate-400">{tkt.id} • {tkt.date}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          {tkt.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>{language === 'bn' ? 'জরুরি প্রয়োজনে হটলাইন:' : 'Need immediate help? Hotline:'} <strong className="text-slate-800">01676-367500</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold cursor-pointer"
          >
            {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
