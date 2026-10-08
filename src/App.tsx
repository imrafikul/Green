/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Packages } from './components/Packages';
import { BusinessSection } from './components/BusinessSection';
import { NetworkArchitecture } from './components/NetworkArchitecture';
import { NetworkStatus } from './components/NetworkStatus';
import { CoverageChecker } from './components/CoverageChecker';
import { PublicIPSection } from './components/PublicIPSection';
import { CustomerPortalSection } from './components/CustomerPortalSection';
import { OnlinePayment } from './components/OnlinePayment';
import { SupportSection } from './components/SupportSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { CustomerPortalModal } from './components/CustomerPortalModal';
import { PublicIPModal, TicketModal, LegalModal } from './components/Modals';

function AppContent() {
  const { language } = useLanguage();

  // Modal states
  const [portalOpen, setPortalOpen] = useState(false);
  const [publicIPOpen, setPublicIPOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'terms' | 'privacy' | 'refund';
  }>({ isOpen: false, type: 'terms' });

  // Lead form prefill states
  const [selectedPackage, setSelectedPackage] = useState<string>('Package 2 - STANDARD (50 Mbps)');
  const [leadArea, setLeadArea] = useState<string>('Aftabnagar');
  const [leadRoad, setLeadRoad] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');

  // Smooth scroll to lead form with pre-filled package
  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Talk to business team -> scrolls to connect
  const handleTalkToBusiness = () => {
    setSelectedPackage('Corporate / Business Dedicated Link');
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check coverage button in hero
  const handleHeroCheckCoverage = () => {
    const element = document.getElementById('coverage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // View packages button in hero
  const handleHeroViewPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // From coverage checker to lead form
  const handleCoverageLead = (area: string, road: string, phone: string) => {
    setLeadArea(area);
    setLeadRoad(road);
    setLeadPhone(phone);
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to offices in contact section
  const handleScrollToOffice = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (type: 'terms' | 'privacy' | 'refund') => {
    setLegalModalState({ isOpen: true, type });
  };

  return (
    <div className={`min-h-screen bg-white text-slate-800 flex flex-col ${language === 'bn' ? 'font-sans' : 'font-sans'}`}>
      {/* 1. Navigation */}
      <Navbar 
        onOpenPortal={() => setPortalOpen(true)}
        onOpenLeadModal={(pkg) => {
          if (pkg) setSelectedPackage(pkg);
          const elem = document.getElementById('connect');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onCheckCoverageClick={handleHeroCheckCoverage}
          onViewPackagesClick={handleHeroViewPackages}
        />

        {/* 3. Trust Strip (6 Cards) */}
        <TrustStrip />

        {/* 4. What We Provide (4 Large Service Cards) */}
        <Services 
          onSelectService={(serviceName) => {
            setSelectedPackage(`Inquiry: ${serviceName}`);
            const elem = document.getElementById('connect');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 5. Why Choose Green Link (6 Feature Cards) */}
        <WhyChoose />

        {/* 6. Internet Packages (Home & Corporate Tabs) */}
        <Packages 
          onSelectPackage={handleSelectPackage}
          onTalkToBusiness={handleTalkToBusiness}
        />

        {/* 7. Connectivity Built for Business */}
        <BusinessSection 
          onTalkToBusiness={handleTalkToBusiness}
          onRequestPublicIP={() => setPublicIPOpen(true)}
        />

        {/* 8. Network Infrastructure Topology */}
        <NetworkArchitecture />

        {/* 9. Live Network Telemetry Status */}
        <NetworkStatus />

        {/* 10. Coverage Checker */}
        <CoverageChecker 
          onOpenLeadModalWithArea={handleCoverageLead}
        />

        {/* 11. Static / Public IP Section */}
        <PublicIPSection 
          onRequestPublicIP={() => setPublicIPOpen(true)}
        />

        {/* 12. Customer Portal CTA Section */}
        <CustomerPortalSection 
          onOpenPortal={() => setPortalOpen(true)}
        />

        {/* 13. Online Payment (bKash, Nagad, Rocket, Bank) */}
        <OnlinePayment />

        {/* 14. Support Section */}
        <SupportSection 
          onOpenTicketModal={() => setTicketOpen(true)}
          onScrollToOffice={handleScrollToOffice}
        />

        {/* 15. About Green Link & Verified Stats */}
        <AboutSection />

        {/* 17. Contact & Branch Locations */}
        <ContactSection />

        {/* 18. FAQ Accordion */}
        <FAQSection />

        {/* 19. Customer Reviews */}
        <TestimonialsSection />

        {/* 20. Contact / Connection Lead Form */}
        <LeadForm 
          initialPackage={selectedPackage}
          initialArea={leadArea}
          initialRoad={leadRoad}
          initialPhone={leadPhone}
        />
      </main>

      {/* 21. Footer */}
      <Footer 
        onOpenPortal={() => setPortalOpen(true)}
        onOpenLegal={handleOpenLegal}
      />

      {/* Modals */}
      <CustomerPortalModal 
        isOpen={portalOpen} 
        onClose={() => setPortalOpen(false)} 
      />

      <PublicIPModal 
        isOpen={publicIPOpen} 
        onClose={() => setPublicIPOpen(false)} 
      />

      <TicketModal 
        isOpen={ticketOpen} 
        onClose={() => setTicketOpen(false)} 
      />

      <LegalModal 
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
