export interface TranslationSchema {
  topBar: {
    status: string;
    servingAreas: string;
    aftabnagar: string;
    northBadda: string;
  };
  nav: {
    home: string;
    internet: string;
    packages: string;
    business: string;
    network: string;
    coverage: string;
    support: string;
    about: string;
    customerPortal: string;
    getConnected: string;
    connectBtn: string;
    hotline: string;
    ftpLiveTv: string;
  };
  hero: {
    pill: string;
    headlineStart: string;
    brandName: string;
    subtitle: string;
    viewPackages: string;
    checkCoverage: string;
    testSpeed: string;
    statYears: string;
    statYearsLabel: string;
    statFtth: string;
    statFtthLabel: string;
    statSupport: string;
    statSupportLabel: string;
    consoleTitle: string;
    consolePop: string;
    consoleActive: string;
    tabBdix: string;
    tabGlobal: string;
    tabStreaming: string;
    bdixPingLabel: string;
    bdixRouteLabel: string;
    bdixDirectPeering: string;
    bdixPolicyLabel: string;
    bdixPipe: string;
    globalUpstreamLabel: string;
    globalMultipleActive: string;
    globalBackboneLabel: string;
    globalUnderground: string;
    globalUptimeLabel: string;
    streamingYoutubeLabel: string;
    streamingBufferFree: string;
    streamingFacebookLabel: string;
    streamingDirectConnect: string;
    streamingDataLabel: string;
    streamingUnlimited: string;
    undergroundTitle: string;
    undergroundDesc: string;
    publicIpTitle: string;
    publicIpDesc: string;
    setupTimeNote: string;
  };
  trustStrip: {
    tag: string;
    title: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    inquireBtn: string;
    cards: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    }>;
  };
  whyChoose: {
    tag: string;
    title: string;
    subtitle: string;
    supportBarTitle: string;
    supportBarDesc: string;
    hotline: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  packages: {
    tag: string;
    title: string;
    subtitle: string;
    tabHome: string;
    tabCorporate: string;
    bandwidthLabel: string;
    monthUnit: string;
    includedFeatures: string;
    getPackageBtn: string;
    popularBadge: string;
    highSpeedBadge: string;
    maxSpeedBadge: string;
    residentialNote: string;
    corpTag: string;
    corpTitle: string;
    corpDesc: string;
    corpSpecTitle: string;
    corpPricingModel: string;
    corpContactUs: string;
    corpPricingNote: string;
    corpTalkBtn: string;
    corpSurveyNote: string;
    homeList: Array<{
      id: string;
      name: string;
      speed: string;
      price: string;
      description: string;
      features: string[];
    }>;
  };
  business: {
    tag: string;
    title: string;
    subtitle: string;
    talkBtn: string;
    requestIpBtn: string;
    inquireOffice: string;
    surveyTitle: string;
    surveyDesc: string;
    callDeskBtn: string;
    services: Array<{
      id: string;
      title: string;
      description: string;
      tags?: string[];
    }>;
  };
  network: {
    tag: string;
    title: string;
    subtitle: string;
    badges: string[];
    stageLabel: string;
    nodes: Array<{
      id: number;
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  networkStatus: {
    tag: string;
    title: string;
    subtitle: string;
    verified: string;
    refreshing: string;
    refreshBtn: string;
    operational: string;
    latencyLabel: string;
    uptimeLabel: string;
    footerNote: string;
    systems: Array<{
      name: string;
      scope: string;
    }>;
  };
  coverage: {
    tag: string;
    title: string;
    subtitle: string;
    selectAreaLabel: string;
    roadBlockLabel: string;
    roadBlockPlaceholder: string;
    phoneLabel: string;
    checkBtn: string;
    availableTitle: string;
    surveyTitle: string;
    notYetTitle: string;
    availableMsg: (area: string) => string;
    surveyMsg: (area: string) => string;
    notYetMsg: string;
    connectNowBtn: string;
    submitRequestBtn: string;
    activeHubsTitle: string;
    activeHubsDesc: string;
    corpPointNote: string;
    corpMetroAvail: string;
    inquiryLineTitle: string;
    callBtn: string;
  };
  publicIp: {
    tag: string;
    title: string;
    subtitle: string;
    boxTitle: string;
    boxDesc: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    requestBtn: string;
    useCases: Array<{
      title: string;
      description: string;
    }>;
  };
  portal: {
    tag: string;
    title: string;
    subtitle: string;
    loginBtn: string;
    previewTitle: string;
    currentPkgLabel: string;
    monthlyDueLabel: string;
    paidStatus: string;
    rxPowerLabel: string;
    downloadInvoice: string;
    openTicket: string;
    integrationNote: string;
  };
  payment: {
    tag: string;
    title: string;
    subtitle: string;
    howToPay: (name: string) => string;
    detailsTitle: string;
    merchantLabel: string;
    referenceLabel: string;
    referenceDesc: string;
    counterLabel: string;
    whatsappNote: string;
    footerNote: string;
  };
  support: {
    tag: string;
    title: string;
    subtitle: string;
    physicalTitle: string;
    physicalDesc: string;
    onlineTitle: string;
    onlineDesc: string;
    cardCallTitle: string;
    cardCallDesc: string;
    cardCallBtn: string;
    cardWaTitle: string;
    cardWaDesc: string;
    cardWaBtn: string;
    cardTicketTitle: string;
    cardTicketDesc: string;
    cardTicketBtn: string;
    cardOfficeTitle: string;
    cardOfficeDesc: string;
    cardOfficeBtn: string;
    officeHours: string;
    fastResponse: string;
    trackedInPortal: string;
  };
  speedtest: {
    tag: string;
    title: string;
    subtitle: string;
    serverLabel: string;
    serverName: string;
    statusLabel: string;
    ready: string;
    complete: string;
    measuring: string;
    testAgain: string;
    startBtn: string;
    ping: string;
    jitter: string;
    download: string;
    upload: string;
    footerNote: string;
  };
  about: {
    tag: string;
    headline: string;
    overview: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    check1: string;
    check2: string;
    dualCenters: string;
    btrcNote: string;
    milestonesTitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    callOffice: string;
    whatsappOffice: string;
    emailOffice: string;
    openGmaps: string;
    mapTitle: (name: string) => string;
    mapFooter: string;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    catAll: string;
    catGeneral: string;
    catTechnical: string;
    catBilling: string;
    catCorporate: string;
    noResults: string;
    resetFilters: string;
    stillQuestion: string;
    stillHelp: string;
    callHotline: string;
  };
  leadForm: {
    tag: string;
    title: string;
    subtitle: string;
    fullNameLabel: string;
    phoneLabel: string;
    areaLabel: string;
    packageLabel: string;
    addressLabel: string;
    addressPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    noUpfrontNote: string;
    successTitle: string;
    successMsg: (name: string, phone: string, pkg: string) => string;
    submitAnother: string;
    callImmediate: string;
  };
  footer: {
    slogan: string;
    description: string;
    connTitle: string;
    assistTitle: string;
    officesTitle: string;
    rights: string;
    licensedNote: string;
    terms: string;
    privacy: string;
    refund: string;
    top: string;
  };
}

export const translations: Record<'en' | 'bn', TranslationSchema> = {
  en: {
    topBar: {
      status: "Fiber Network Status: All Systems Operational",
      servingAreas: "Serving Badda, Aftabnagar & Surrounding Areas",
      aftabnagar: "Aftabnagar",
      northBadda: "North Badda",
    },
    nav: {
      home: "Home",
      internet: "Internet",
      packages: "Packages",
      business: "Business",
      network: "Network",
      coverage: "Coverage",
      support: "Support",
      about: "About",
      customerPortal: "Customer Portal",
      getConnected: "Get Connected",
      connectBtn: "Connect",
      hotline: "Support Hotlines",
      ftpLiveTv: "FTP / Live TV",
    },
    hero: {
      pill: "Next-Gen FTTH Fiber Infrastructure in Badda",
      headlineStart: "Explore the World with",
      brandName: "Green Internet",
      subtitle: "Fast, reliable and high-quality fiber-optic Internet for homes, businesses and organizations. Powered by underground backbone and direct BDIX peering.",
      viewPackages: "View Packages",
      checkCoverage: "Check Coverage in Badda",
      testSpeed: "Test Speed",
      statYears: "10+",
      statYearsLabel: "Years Experience",
      statFtth: "FTTH Pure",
      statFtthLabel: "Fiber Optic Network",
      statSupport: "24/7",
      statSupportLabel: "Online Support",
      consoleTitle: "GREEN LINK NOC TELEMETRY",
      consolePop: "POP: Badda-Aftabnagar Core",
      consoleActive: "ACTIVE",
      tabBdix: "BDIX Peering",
      tabGlobal: "Global Transit",
      tabStreaming: "Bufferless CDN",
      bdixPingLabel: "BDIX Roundtrip Ping:",
      bdixRouteLabel: "Local Exchange Route:",
      bdixDirectPeering: "Direct Peering",
      bdixPolicyLabel: "Bandwidth Policy:",
      bdixPipe: "High Capacity Pipe",
      globalUpstreamLabel: "Upstream Links:",
      globalMultipleActive: "Multiple Active",
      globalBackboneLabel: "Backbone Infrastructure:",
      globalUnderground: "Underground Fiber",
      globalUptimeLabel: "Core Availability:",
      streamingYoutubeLabel: "YouTube Streaming:",
      streamingBufferFree: "Buffer-Free (Edge Cached)",
      streamingFacebookLabel: "Facebook / Meta CDN:",
      streamingDirectConnect: "Direct Local Interconnect",
      streamingDataLabel: "Data Limitation:",
      streamingUnlimited: "Unlimited Experience",
      undergroundTitle: "Physical Fiber",
      undergroundDesc: "Underground Backbone",
      publicIpTitle: "Public IPv4",
      publicIpDesc: "Available on Request",
      setupTimeNote: "Ready to connect in Badda? Average setup time: 24-48 Hours",
    },
    trustStrip: {
      tag: "Backed by Robust Telecom Engineering",
      title: "Why Subscribers Depend on Green Internet",
      cards: [
        { id: "upstream", title: "Multiple Upstream", description: "Reliable Internet connectivity through multiple upstream connections." },
        { id: "underground", title: "Underground Backbone", description: "Underground fiber backbone designed for stable connectivity." },
        { id: "uptime", title: "99% Uptime", description: "Proven high reliability backed by redundant fiber infrastructure." },
        { id: "support-team", title: "Big Support Team", description: "Dedicated technical and customer support team ready in your neighborhood." },
        { id: "online-support", title: "24/7 Online Support", description: "Online support available around the clock through ticket, WhatsApp and hotline." },
        { id: "quality", title: "Quality Service", description: "Focus on reliable and customer-oriented Internet service with zero compromise." },
      ],
    },
    services: {
      tag: "Telecom Capabilities",
      title: "What We Provide",
      subtitle: "Dependable, high-bandwidth optical telecommunication services tailored for home users, educational organizations, and commercial enterprises.",
      inquireBtn: "Inquire About",
      cards: [
        {
          id: "corporate",
          title: "Corporate Network Solutions",
          subtitle: "Enterprise Grade",
          description: "Professional connectivity solutions for businesses and organizations with customized routing and prioritized throughput.",
          features: ["Customized Bandwidth", "Dedicated Account Manager", "Priority Routing", "Point-to-Point Links"],
        },
        {
          id: "dedicated-shared",
          title: "Dedicated & Shared Connection",
          subtitle: "Flexible Bandwidth",
          description: "Internet connectivity options tailored to diverse customer requirements, from home power users to growing companies.",
          features: ["Symmetrical Speed", "Low Latency Routing", "Clean IP Allocation", "Flexible Upgrades"],
        },
        {
          id: "ftth",
          title: "FTTH Network",
          subtitle: "Direct Fiber Optic",
          description: "Fiber-to-the-Home broadband connectivity delivering pure optical signals straight to your GPON/EPON ONU router.",
          features: ["Pure Optical Fiber", "High Resistance to Interference", "Ultra Low Latency", "Gigabit Ready"],
        },
        {
          id: "wireless",
          title: "Wireless Solutions",
          subtitle: "Where Applicable",
          description: "Wireless connectivity solutions engineered for specialized links, event coverage, and challenging deployment zones.",
          features: ["Rapid Deployment", "Point-to-Multipoint", "Secure Encrypted Links", "Backup Redundancy"],
        },
      ],
    },
    whyChoose: {
      tag: "The Green Link Advantage",
      title: "Why Choose Green Link?",
      subtitle: "We operate local network infrastructure in Badda designed from the ground up for minimal packet loss, high resilience, and localized technical support.",
      supportBarTitle: "Physical + Online Dual-Layer Support",
      supportBarDesc: "12 Hours Physical On-Site Field Support (9:00 AM – 9:00 PM) + 24 Hours Online Helpdesk & Ticketing.",
      hotline: "Hotline: 01676-367500",
      cards: [
        { id: "unlimited", title: "Unlimited Package", description: "No data cap or hidden restrictions, subject to actual service terms." },
        { id: "buffer-free", title: "Buffer-Free Browsing", description: "Fast and smooth browsing, 4K streaming, and gaming experience." },
        { id: "dedicated-ip", title: "Dedicated IP", description: "Public / Dedicated IP address availability for CCTV, servers & remote work." },
        { id: "fiber-network", title: "Fiber Optic Network", description: "Optical fiber for local connectivity and modern FTTH network." },
        { id: "stable-connections", title: "Stable Connections", description: "Multiple underground backbone connections designed for reliability and stability." },
        { id: "customer-support", title: "24/7 Customer Support", description: "12 hours physical support and 24 hours online support, based on verified operations." },
      ],
    },
    packages: {
      tag: "Transparent Pricing",
      title: "Find Your Package",
      subtitle: "Choose high-speed optical fiber connectivity that matches your home or organization. Pure FTTH with unthrottled BDIX peering.",
      tabHome: "Home Internet",
      tabCorporate: "Business / Corporate",
      bandwidthLabel: "Bandwidth:",
      monthUnit: "Month",
      includedFeatures: "Included Features:",
      getPackageBtn: "Get This Package",
      popularBadge: "Most Popular",
      highSpeedBadge: "High Speed",
      maxSpeedBadge: "Maximum Speed",
      residentialNote: "All residential packages feature unlimited browsing subject to actual service terms and FTTH fiber infrastructure availability.",
      corpTag: "Dedicated Enterprise Solutions",
      corpTitle: "Corporate Internet",
      corpDesc: "Dedicated corporate connectivity engineered to your enterprise requirements. Designed for commercial offices, IT firms, educational centers, and multi-unit organizations in Badda.",
      corpSpecTitle: "Enterprise Specification:",
      corpPricingModel: "Pricing Model",
      corpContactUs: "Contact Us",
      corpPricingNote: "Customized based on Bandwidth & Route",
      corpTalkBtn: "Talk to Our Business Team",
      corpSurveyNote: "Technical survey and feasibility inspection completed within 24 hours.",
      homeList: [
        {
          id: "pkg-1",
          name: "STARTER",
          speed: "30 Mbps",
          price: "500",
          description: "Fast fiber browsing, YouTube streaming & BDIX local connectivity.",
          features: [
            "YouTube Video Support (Bufferless)",
            "BDIX Connected (High Speed)",
            "Online TV Support (50+ Channels)",
            "FTP & Media Server Access",
            "Pure Optical Fiber Cable (FTTH)",
            "Real IP Available (Add-on)",
            "24/7 Customer Support",
          ],
        },
        {
          id: "pkg-2",
          name: "STANDARD",
          speed: "50 Mbps",
          price: "800",
          description: "Best for families, work from home & seamless multi-device streaming.",
          features: [
            "YouTube Video Support (Bufferless)",
            "BDIX Connected (Ultra Low Ping)",
            "Online TV Support (50+ Channels)",
            "Powerful Media Server / FTP Access",
            "Pure Optical Fiber Cable (FTTH)",
            "Bufferless Facebook & 4K Streaming",
            "Real IP Available (Add-on)",
            "24/7 Priority Customer Support",
          ],
        },
        {
          id: "pkg-3",
          name: "PREMIUM",
          speed: "100 Mbps",
          price: "1000",
          description: "High bandwidth for power users, content creators & 4K multi-screens.",
          features: [
            "YouTube Video Support (Bufferless)",
            "BDIX Connected (Gigabit Peering)",
            "Online TV Support (50+ Channels)",
            "Powerful Media Server / FTP Access",
            "Pure Optical Fiber Cable (FTTH)",
            "Ultra Low Latency Gaming",
            "Real IP Option Available",
            "VIP Technical Support 24/7",
          ],
        },
        {
          id: "pkg-4",
          name: "EXTREME",
          speed: "150 Mbps",
          price: "1500",
          description: "Ultra-fast connection engineered for heavy downloads, offices & creators.",
          features: [
            "Ultrafast 150 Mbps Fiber Bandwidth",
            "YouTube Video Support (Bufferless)",
            "BDIX Connected (Direct Peering)",
            "Online TV Support (50+ Channels)",
            "Powerful Media Server / FTP Access",
            "Pure Optical Fiber Cable (FTTH)",
            "Real / Public IP Option Available",
            "Dedicated VIP Customer Support",
          ],
        },
      ],
    },
    business: {
      tag: "Enterprise Telecom & Connectivity",
      title: "Connectivity Built for Business",
      subtitle: "Empowering organizations in Badda and Aftabnagar with dedicated bandwidth, resilient fiber architecture, and localized engineer support.",
      talkBtn: "Talk to Our Business Team",
      requestIpBtn: "Request Public IP",
      inquireOffice: "Inquire for office",
      surveyTitle: "Need Site Survey in Badda?",
      surveyDesc: "Our optical network engineers will survey your commercial building and provide route feasibility and quotation.",
      callDeskBtn: "Call Business Desk",
      services: [
        { id: "corp-internet", title: "Corporate Internet", description: "Dedicated and scalable fiber connectivity tailored for offices, corporate headquarters, and multi-branch organizations.", tags: ["High Availability", "Symmetrical"] },
        { id: "dedicated-internet", title: "Dedicated Internet", description: "Guaranteed uncontended bandwidth for critical enterprise applications, CRM, ERP, and latency-sensitive operations.", tags: ["Uncontended", "Direct Pipe"] },
        { id: "dedicated-ip", title: "Dedicated / Public IP", description: "Static IPv4 routing for hosting mail servers, local PBX, web applications, and remote CCTV camera feeds.", tags: ["Static IPv4", "White-listed"] },
        { id: "network-solutions", title: "Corporate Network Solutions", description: "Complete structured LAN, fiber patching, firewall integration, and managed routing designed by experienced network engineers.", tags: ["Managed IT", "Switching"] },
        { id: "p2p", title: "Point-to-Point Connectivity", description: "Private fiber connectivity between two distant physical offices or data centers within our metro backbone area.", tags: ["Metro P2P", "Secure Tunnel"] },
        { id: "business-support", title: "Business Support", description: "Direct access to senior network engineers and rapid field dispatch for commercial subscribers in Badda and Aftabnagar.", tags: ["Priority Dispatch", "Engineer Line"] },
        { id: "customized", title: "Customized Connectivity", description: "Flexible bandwidth bursting, multi-homing setups, and tailored terms suited to institutional and SME budgets.", tags: ["Custom SLAs", "Burst Capacity"] },
      ],
    },
    network: {
      tag: "Infrastructure Topology",
      title: "Network Infrastructure",
      subtitle: "Designed for continuous uptime and stable fiber transmission from international upstreams straight to your home or office router.",
      badges: ["Multiple Upstream", "Underground Backbone", "Fiber Optic", "FTTH", "BDIX", "Network Reliability"],
      stageLabel: "Topology Stage",
      nodes: [
        { id: 0, title: "Global Internet", subtitle: "Tier-1 Transit", description: "Direct interconnection with international IP gateways ensuring rapid access to global CDNs, cloud providers, and international data centers." },
        { id: 1, title: "Multiple Upstream", subtitle: "Redundant Links", description: "Redundant upstream connections preventing downtime. If any upstream line experiences maintenance, traffic fails over seamlessly." },
        { id: 2, title: "Core Network", subtitle: "Badda / Metro POP", description: "High-throughput routing fabric managing low-latency BDIX routing, DNS resolution, and local IP allocation." },
        { id: 3, title: "Underground Backbone", subtitle: "Subterranean Fiber", description: "Physical underground optical fiber cables protected against extreme weather, utility works, and overhead cable disruption across Badda." },
        { id: 4, title: "Distribution Network", subtitle: "Sub-hub Routing", description: "Metro distribution fiber loops linking localized distribution boxes throughout residential blocks and commercial lanes." },
        { id: 5, title: "FTTH / OLT", subtitle: "Optical Line Terminal", description: "Carrier-grade Optical Line Terminals splitting passive optical signal directly into fiber strands without electrical degradation." },
        { id: 6, title: "Customer Premises", subtitle: "ONU / Wi-Fi Router", description: "Pure optical fiber terminates in the customer's ONU device, outputting high-speed buffer-free gigabit Ethernet and Wi-Fi." },
      ],
    },
    networkStatus: {
      tag: "Live Telemetry Dashboard",
      title: "Green Link Network Status",
      subtitle: "Real-time operational status across core telecommunications services in Badda.",
      verified: "Verified",
      refreshing: "Checking...",
      refreshBtn: "Refresh",
      operational: "Operational",
      latencyLabel: "Latency",
      uptimeLabel: "Uptime",
      footerNote: "NOC Telemetry Node GLN-CORE-01 • Monitored 24/7/365 • Engineered for 99% uptime compliance",
      systems: [
        { name: "Internet Gateway", scope: "Global Transit & Upstream Links" },
        { name: "BDIX Peering", scope: "Bangladesh Internet Exchange Interconnect" },
        { name: "Core Network", scope: "Underground Optical Backbone & Badda Core POP" },
        { name: "Customer Portal", scope: "Billing, Ticketing & Account Authentication" },
      ],
    },
    coverage: {
      tag: "Fiber Coverage Map",
      title: "Is Green Link Available in Your Area?",
      subtitle: "Check whether our underground FTTH optical backbone reaches your building in Badda, Aftabnagar, and neighboring sectors.",
      selectAreaLabel: "Select Area *",
      roadBlockLabel: "Road / Block / House *",
      roadBlockPlaceholder: "e.g., Road-02, Block-A or House-15",
      phoneLabel: "Your Phone Number *",
      checkBtn: "Check Availability",
      availableTitle: "Green Link Fiber is Available!",
      surveyTitle: "Feasibility Check Recommended",
      notYetTitle: "Not Available Yet — Request Coverage Expansion",
      availableMsg: (area) => `High-speed FTTH Optical Fiber is fully operational in ${area}! Our local Badda team can complete your installation within 24 to 48 hours.`,
      surveyMsg: (area) => `Your location in ${area} requires a quick optical distance feasibility check. Dedicated fiber connections are frequently provisioned here.`,
      notYetMsg: "Not available yet — Request a Connection so our network planning engineers can prioritize laying fiber on your street!",
      connectNowBtn: "Connect This Address Now",
      submitRequestBtn: "Submit Coverage Request",
      activeHubsTitle: "Active Fiber Hubs",
      activeHubsDesc: "Direct FTTH optical termination boxes deployed in all major residential & commercial roads:",
      corpPointNote: "Looking for Corporate Point-to-Point?",
      corpMetroAvail: "Metrowide Feasibility",
      inquiryLineTitle: "Direct Coverage Inquiry Line",
      callBtn: "Call",
    },
    publicIp: {
      tag: "Dedicated IPv4 Routing",
      title: "Need a Public IP?",
      subtitle: "Green Link provides dedicated, clean static IPv4 addresses routed directly to your home or office router. Perfect for advanced networking and seamless external connectivity.",
      boxTitle: "Add Static IP to Your Connection",
      boxDesc: "Can be added to any existing Green Link home or corporate broadband package.",
      benefit1: "Unfiltered 1:1 Static Public IPv4",
      benefit2: "Configured by our NOC engineers",
      benefit3: "Compatible with any standard GPON/ONU",
      requestBtn: "Request Public IP",
      useCases: [
        { title: "CCTV & Security NVR", description: "Stream live security footage from anywhere in the world without third-party cloud subscription delays." },
        { title: "Secure Office VPN", description: "Connect your remote staff directly to your office internal servers with dedicated encryption tunnels." },
        { title: "Remote Desktop (RDP)", description: "Seamless, secure connection to local workstations, POS machines, and storage servers." },
        { title: "Local Servers & Hosting", description: "Host your company web portals, staging environments, mail servers, and database nodes with clean static IP." },
        { title: "Business Applications", description: "Whitelisted static IP required for bank gateways, tax portals, ERP systems, and cloud API integrations." },
      ],
    },
    portal: {
      tag: "Subscriber Self-Service",
      title: "Everything You Need in One Place",
      subtitle: "Manage your Green Link Internet account, view live optical status, settle monthly bills, and track support tickets directly from our unified portal.",
      loginBtn: "Login to Customer Portal",
      previewTitle: "PORTAL DASHBOARD PREVIEW",
      currentPkgLabel: "Current Package",
      monthlyDueLabel: "Monthly Due:",
      paidStatus: "700 Tk (Paid)",
      rxPowerLabel: "Optical Signal (RX):",
      downloadInvoice: "Download Invoice",
      openTicket: "Open Ticket",
      integrationNote: "Integration ready for Green Link Radius / CRM Billing API.",
    },
    payment: {
      tag: "Convenient Billing",
      title: "Pay Your Internet Bill Easily",
      subtitle: "Settle your monthly Green Link subscription through your preferred Mobile Financial Service (MFS) or direct bank transfer.",
      howToPay: (name) => `How to Pay via ${name}`,
      detailsTitle: "Payment Details",
      merchantLabel: "Biller / Merchant Account:",
      referenceLabel: "Payment Reference:",
      referenceDesc: "Your Registered Client ID (e.g. GLN-XXXX) or Phone Number",
      counterLabel: "Counter Number (If prompted):",
      whatsappNote: "Need immediate payment confirmation? WhatsApp receipt to",
      footerNote: "Secure, direct MFS bill payment integration. Also accepted physically at our Aftabnagar & North Badda customer centers.",
    },
    support: {
      tag: "Dedicated Customer Care",
      title: "We're Here to Help",
      subtitle: "Whether you need urgent line restoration, Wi-Fi router optimization, or billing help, our localized support team in Badda is ready.",
      physicalTitle: "12 Hours Physical Field Support",
      physicalDesc: "9:00 AM – 9:00 PM (Everyday) • Rapid line repair in Badda",
      onlineTitle: "24/7 Online Support",
      onlineDesc: "Round-the-clock hotline, WhatsApp support & portal ticketing",
      cardCallTitle: "Call Support",
      cardCallDesc: "Speak directly with an on-duty technician or billing support executive in Badda.",
      cardCallBtn: "Call Hotline",
      cardWaTitle: "WhatsApp",
      cardWaDesc: "Send screenshots of router lights, payment slips, or fiber connection queries.",
      cardWaBtn: "Chat on WhatsApp",
      cardTicketTitle: "Submit Ticket",
      cardTicketDesc: "Create a formal technical support ticket with your client ID for priority dispatch.",
      cardTicketBtn: "Create Support Ticket",
      cardOfficeTitle: "Visit Office",
      cardOfficeDesc: "Walk into our Aftabnagar Head Office or North Badda Branch Office for in-person support.",
      cardOfficeBtn: "Find Office Locations",
      officeHours: "Open 9:00 AM – 9:00 PM",
      fastResponse: "Fast response from customer desk",
      trackedInPortal: "Tracked in Customer Portal",
    },
    speedtest: {
      tag: "Broadband Diagnostic Tool",
      title: "Test Your Internet Speed",
      subtitle: "Check your current download throughput, upload bandwidth, and roundtrip ping to the Badda metropolitan network gateway.",
      serverLabel: "Test Server:",
      serverName: "Green Link Core POP — Badda, Dhaka",
      statusLabel: "Status:",
      ready: "Ready to Test",
      complete: "Test Complete",
      measuring: "Measuring Connectivity...",
      testAgain: "Test Again",
      startBtn: "Start Speed Test",
      ping: "Ping",
      jitter: "Jitter",
      download: "Download",
      upload: "Upload",
      footerNote: "Direct browser latency benchmark • Ready for Green Link dedicated WebSocket speed daemon integration",
    },
    about: {
      tag: "About Green Link Network",
      headline: "Connecting People. Powering Businesses.",
      overview: "Green Internet (Green Link Network) provides broadband Internet service and has around 10 years of experience serving residential and corporate clients in Badda and adjacent neighborhoods. The company emphasizes quality service, dedicated network engineers, responsive administrative staff, and continuous enhancement of customer experience through optical fiber infrastructure.",
      missionTitle: "Our Mission",
      missionText: "Provide reliable and quality Internet connectivity that empowers our neighborhood communities, educational pursuits, and commercial enterprises.",
      visionTitle: "Our Vision",
      visionText: "Build a dependable fiber-based connectivity network for homes and businesses with consistent uptime, fast customer service, and modern telecommunication standards.",
      check1: "Dedicated network engineers, administrative staff, and field support teams.",
      check2: "Continuous modernization of optical fiber infrastructure and BDIX peering.",
      dualCenters: "Dual Operating Centers:",
      btrcNote: "BTRC Compliant Telecommunications Standards",
      milestonesTitle: "Verified Operational Milestones",
    },
    contact: {
      tag: "Office Locations & Dispatch Centers",
      title: "Contact Green Link Network",
      subtitle: "Visit our local operating offices in Badda or contact our direct support lines for immediate assistance.",
      addressLabel: "Physical Address:",
      phoneLabel: "Direct Telephone:",
      emailLabel: "Official Email:",
      hoursLabel: "Office Hours:",
      callOffice: "Call Office",
      whatsappOffice: "WhatsApp",
      emailOffice: "Email",
      openGmaps: "Open in Google Maps",
      mapTitle: (name) => `Map: ${name}`,
      mapFooter: "Local field technicians available for immediate site surveys and optical drop-cable termination.",
    },
    faq: {
      tag: "Got Questions?",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Green Link broadband connectivity, BDIX speeds, and technical support.",
      searchPlaceholder: "Search questions (e.g., FTTH, BDIX, Payment)...",
      catAll: "All Questions",
      catGeneral: "General",
      catTechnical: "Technical & Fiber",
      catBilling: "Billing & MFS",
      catCorporate: "Corporate",
      noResults: "No questions found matching your search.",
      resetFilters: "Reset filters",
      stillQuestion: "Still have a question?",
      stillHelp: "Contact our 24/7 Badda customer desk directly.",
      callHotline: "Call",
    },
    leadForm: {
      tag: "New Connection Request",
      title: "Get Connected Today",
      subtitle: "Fill out the quick form below. Our local Badda technical dispatch will verify optical line feasibility and schedule your fiber hookup within 24–48 hours.",
      fullNameLabel: "Full Name *",
      phoneLabel: "Phone Number *",
      areaLabel: "Area / Neighborhood *",
      packageLabel: "Preferred Package *",
      addressLabel: "Detailed Address (Road, House, Flat No.)",
      addressPlaceholder: "e.g., House-22, Road-04, Flat 3B",
      messageLabel: "Additional Instructions or Questions (Optional)",
      messagePlaceholder: "e.g., Do you have Public IP option? Or please call after 2 PM.",
      submitBtn: "Request Connection",
      submittingBtn: "Submitting Request...",
      noUpfrontNote: "No upfront online payment required. Pay only after fiber line is connected and verified.",
      successTitle: "Connection Request Received!",
      successMsg: (name, phone, pkg) => `Thank you, ${name}. Our customer coordinator in Badda will call you at ${phone} to confirm your optical fiber drop cable setup for ${pkg}.`,
      submitAnother: "Submit Another Request",
      callImmediate: "Call Immediate Support",
    },
    footer: {
      slogan: "Fast. Reliable. Connected.",
      description: "Delivering high-speed fiber-optic broadband, buffer-free BDIX peering, and enterprise connectivity solutions in Badda, Aftabnagar, and neighboring sectors of Dhaka.",
      connTitle: "Connectivity",
      assistTitle: "Assistance",
      officesTitle: "Badda Dispatch Offices",
      rights: "All rights reserved.",
      licensedNote: "Licensed Telecommunications Service Provider in Badda, Dhaka.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      top: "Top",
    },
  },
  bn: {
    topBar: {
      status: "ফাইবার নেটওয়ার্ক স্ট্যাটাস: সকল সিস্টেম সচল রয়েছে",
      servingAreas: "বাড্ডা, আফতাবনগর ও পার্শ্ববর্তী এলাকায় নিরবচ্ছিন্ন সেবা",
      aftabnagar: "আফতাবনগর",
      northBadda: "উত্তর বাড্ডা",
    },
    nav: {
      home: "হোম",
      internet: "ইন্টারনেট",
      packages: "প্যাকেজ",
      business: "কর্পোরেট / বিজনেস",
      network: "নেটওয়ার্ক",
      coverage: "কভারেজ",
      support: "সাপোর্ট",
      about: "আমাদের সম্পর্কে",
      customerPortal: "গ্রাহক পোর্টাল",
      getConnected: "সংযোগ নিন",
      connectBtn: "সংযোগ",
      hotline: "সাপোর্ট হটলাইন",
      ftpLiveTv: "এফটিপি / লাইভ টিভি",
    },
    hero: {
      pill: "বাড্ডায় অত্যাধুনিক এফটিটিএইচ (FTTH) অপটিক্যাল ফাইবার নেটওয়ার্ক",
      headlineStart: "বিশ্বকে এক্সপ্লোর করুন",
      brandName: "গ্রিন ইন্টারনেটের সাথে",
      subtitle: "বাসা, ব্যবসা ও প্রতিষ্ঠানের জন্য দ্রুতগতির, নির্ভরযোগ্য এবং উচ্চমানের অপটিক্যাল ফাইবার ইন্টারনেট। আন্ডারগ্রাউন্ড ব্যাকবোন ও সরাসরি বিডিআইএক্স (BDIX) সংযোগ দ্বারা পরিচালিত।",
      viewPackages: "প্যাকেজসমূহ দেখুন",
      checkCoverage: "বাড্ডায় কভারেজ চেক করুন",
      testSpeed: "স্পিড টেস্ট",
      statYears: "১০+",
      statYearsLabel: "বছরের অভিজ্ঞতা",
      statFtth: "পিওর FTTH",
      statFtthLabel: "অপটিক্যাল ফাইবার নেটওয়ার্ক",
      statSupport: "২৪/৭",
      statSupportLabel: "অনলাইন সাপোর্ট",
      consoleTitle: "গ্রিন লিংক এনওসি টেলিমেট্রি",
      consolePop: "পিওপি: বাড্ডা-আফতাবনগর কোর হাব",
      consoleActive: "সচল",
      tabBdix: "বিডিআইএক্স পিয়ারিং",
      tabGlobal: "গ্লোবাল ট্রানজিট",
      tabStreaming: "বাফারলেস সিডিএন",
      bdixPingLabel: "বিডিআইএক্স পিং লেটেন্সি:",
      bdixRouteLabel: "লোকাল এক্সচেঞ্জ রুট:",
      bdixDirectPeering: "সরাসরি পিয়ারিং সংযোগ",
      bdixPolicyLabel: "ব্যান্ডউইথ পলিসি:",
      bdixPipe: "হাই-ক্যাপাসিটি পাইপ",
      globalUpstreamLabel: "আপস্ট্রিম সংযোগসমূহ:",
      globalMultipleActive: "মাল্টিপল সচল আপস্ট্রিম",
      globalBackboneLabel: "ব্যাকবোন অবকাঠামো:",
      globalUnderground: "ভূগর্ভস্থ অপটিক্যাল ফাইবার",
      globalUptimeLabel: "কোর নেটওয়ার্ক প্রাপ্যতা:",
      streamingYoutubeLabel: "ইউটিউব স্ট্রিমিং:",
      streamingBufferFree: "বাফার-মুক্ত (লোকাল এজ ক্যাশড)",
      streamingFacebookLabel: "ফেসবুক / মেটা সিডিএন:",
      streamingDirectConnect: "ডিরেক্ট লোকাল ইন্টারকানেক্ট",
      streamingDataLabel: "ডেটা লিমিটেশন:",
      streamingUnlimited: "সম্পূর্ণ আনলিমিটেড অভিজ্ঞতা",
      undergroundTitle: "ফিজিক্যাল ফাইবার",
      undergroundDesc: "আন্ডারগ্রাউন্ড ব্যাকবোন",
      publicIpTitle: "পাবলিক IPv4",
      publicIpDesc: "অনুরোধে প্রদান করা হয়",
      setupTimeNote: "বাড্ডায় সংযোগ নিতে প্রস্তুত? গড় সংযোগ সময়: ২৪–৪৮ ঘন্টা",
    },
    trustStrip: {
      tag: "শক্তিশালী টেলিকম প্রকৌশলে পরিচালিত",
      title: "গ্রাহকরা কেন গ্রিন ইন্টারনেট বেছে নেন",
      cards: [
        { id: "upstream", title: "মাল্টিপল আপস্ট্রিম", description: "একাধিক আপস্ট্রিম সংযোগের মাধ্যমে নিরবচ্ছিন্ন ইন্টারনেট সেবা।" },
        { id: "underground", title: "আন্ডারগ্রাউন্ড ব্যাকবোন", description: "স্থিতিশীল সংযোগের জন্য পরিকল্পিত ভূগর্ভস্থ অপটিক্যাল ফাইবার ব্যাকবোন।" },
        { id: "uptime", title: "৯৯% আপটাইম", description: "রিডানড্যান্ট ফাইবার অবকাঠামোর উপর প্রতিষ্ঠিত ৯৯% নেটওয়ার্ক আপটাইম।" },
        { id: "support-team", title: "বিশাল সাপোর্ট টিম", description: "আপনার এলাকায় দ্রুততম সেবা নিশ্চিত করতে নিবেদিত দক্ষ টেকনিক্যাল টিম।" },
        { id: "online-support", title: "২৪/৭ অনলাইন সাপোর্ট", description: "টিকিট, হোয়াটসঅ্যাপ এবং হটলাইনের মাধ্যমে দিনরাত সার্বক্ষণিক অনলাইন সহায়তা।" },
        { id: "quality", title: "কোয়ালিটি সার্ভিস", description: "নির্ভরযোগ্য এবং গ্রাহকবান্ধব ইন্টারনেট সেবায় আপসহীন অগ্রাধিকার।" },
      ],
    },
    services: {
      tag: "টেলিকম সেবাসমূহ",
      title: "আমরা যা প্রদান করি",
      subtitle: "গৃহস্থালি গ্রাহক, শিক্ষা প্রতিষ্ঠান ও ব্যবসায়িক কর্পোরেটের জন্য পরিকল্পিত নির্ভরযোগ্য এবং উচ্চগতির অপটিক্যাল টেলিকম সেবা।",
      inquireBtn: "বিস্তারিত জানুন",
      cards: [
        {
          id: "corporate",
          title: "কর্পোরেট নেটওয়ার্ক সলিউশন",
          subtitle: "এন্টারপ্রাইজ গ্রেড",
          description: "কাস্টমাইজড রাউটিং এবং প্রায়োরিটি ব্যান্ডউইথ সহ ব্যবসা প্রতিষ্ঠান ও কর্পোরেটের জন্য পেশাদার সংযোগ ব্যবস্থা।",
          features: ["কাস্টমাইজড ব্যান্ডউইথ", "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার", "প্রায়োরিটি রাউটিং", "পয়েন্ট-টু-পয়েন্ট লিংক"],
        },
        {
          id: "dedicated-shared",
          title: "ডেডিকেটেড ও শেয়ার্ড কানেকশন",
          subtitle: "নমনীয় ব্যান্ডউইথ",
          description: "হোম পাওয়ার ইউজার থেকে শুরু করে ব্যবসা প্রতিষ্ঠানের বিভিন্ন চাহিদা অনুযায়ী ইন্টারনেট সংযোগের সুবিধা।",
          features: ["সিমেট্রিক্যাল স্পিড", "লো-লেটেন্সি রাউটিং", "ক্লিন আইপি বরাদ্ধ", "সহজ আপগ্রেড সুবিধা"],
        },
        {
          id: "ftth",
          title: "এফটিটিএইচ (FTTH) নেটওয়ার্ক",
          subtitle: "সরাসরি ফাইবার অপটিক",
          description: "সরাসরি আপনার রাউটার/ওএনইউ পর্যন্ত বিশুদ্ধ অপটিক্যাল ফাইবার সংযোগ, কোনো ইলেকট্রিক্যাল সিগন্যাল লস ছাড়াই।",
          features: ["পিওর অপটিক্যাল ফাইবার", "ওয়েদার ইন্টারফেয়ারেন্স নেই", "আল্ট্রা-লো লেটেন্সি", "গিগাবিট সক্ষম"],
        },
        {
          id: "wireless",
          title: "ওয়্যারলেস সলিউশন",
          subtitle: "প্রযোজ্য ক্ষেত্রে",
          description: "বিশেষ দূরবর্তী লিংক, ইভেন্ট কভারেজ এবং সংযোগহীন এলাকার জন্য প্রকৌশলগত ওয়্যারলেস কানেক্টিভিটি।",
          features: ["দ্রুত স্থাপন", "পয়েন্ট-টু-মাল্টিপয়েন্ট", "নিরাপদ এনক্রিপ্টেড লিংক", "ব্যাকআপ কানেক্টিভিটি"],
        },
      ],
    },
    whyChoose: {
      tag: "গ্রিন লিংকের বিশেষত্ব",
      title: "কেন বেছে নেবেন গ্রিন লিংক?",
      subtitle: "বাড্ডা এলাকায় আমাদের নিজস্ব ফাইবার অবকাঠামো সর্বনিম্ন প্যাকেট লস এবং দ্রুততম লোকাল সাপোর্টের নিশ্চয়তা দেয়।",
      supportBarTitle: "ফিজিক্যাল ও অনলাইন দ্বি-স্তরীয় গ্রাহক সেবা",
      supportBarDesc: "১২ ঘন্টা ফিজিক্যাল অন-সাইট ফিল্ড সাপোর্ট (সকাল ৯টা – রাত ৯টা) এবং ২৪ ঘন্টা অনলাইন হেল্পডেস্ক ও টিকিটিং।",
      hotline: "হটলাইন: ০১৬৭৬-৩৬৭৫০০",
      cards: [
        { id: "unlimited", title: "আনলিমিটেড প্যাকেজ", description: "কোনো গোপন ডেটা লিমিট বা ক্যাপ ছাড়া সাবলীল ব্রাউজিং সুবিধা।" },
        { id: "buffer-free", title: "বাফার-মুক্ত ব্রাউজিং", description: "দ্রুততম ওয়েবসাইট লোডিং, ৪কে (4K) স্ট্রিমিং ও মসৃণ গেমিং অভিজ্ঞতা।" },
        { id: "dedicated-ip", title: "ডেডিকেটেড পাবলিক আইপি", description: "সিসিটিভি, রিমোট অ্যাক্সেস, ভিপিএন ও সার্ভারের জন্য রিয়েল আইপি সুবিধা।" },
        { id: "fiber-network", title: "ফাইবার অপটিক নেটওয়ার্ক", description: "স্থানীয় সংযোগের জন্য আধুনিক পিওর FTTH অপটিক্যাল ফাইবার প্রযুক্তি।" },
        { id: "stable-connections", title: "স্থিতিশীল সংযোগ", description: "নির্ভরযোগ্যতার জন্য একাধিক ভূগর্ভস্থ আন্ডারগ্রাউন্ড ব্যাকবোন কানেকশন।" },
        { id: "customer-support", title: "২৪/৭ কাস্টমার সাপোর্ট", description: "১২ ঘন্টা সরাসরি ফিল্ড সাপোর্ট ও ২৪ ঘন্টা অনলাইন হটলাইন ও হেল্পডেস্ক।" },
      ],
    },
    packages: {
      tag: "স্বচ্ছ ও সাশ্রয়ী প্যাকেজ",
      title: "আপনার প্যাকেজ বেছে নিন",
      subtitle: "আপনার বাসা কিংবা অফিসের চাহিদামাফিক হাই-স্পিড অপটিক্যাল ফাইবার বেছে নিন। আনথ্রটেলড বিডিআইএক্স সহ পিওর FTTH।",
      tabHome: "হোম ইন্টারনেট",
      tabCorporate: "বিজনেস / কর্পোরেট",
      bandwidthLabel: "ব্যান্ডউইথ স্পিড:",
      monthUnit: "মাস",
      includedFeatures: "অন্তর্ভুক্ত সুবিধাসমূহ:",
      getPackageBtn: "প্যাকেজটি গ্রহণ করুন",
      popularBadge: "সর্বাধিক জনপ্রিয়",
      highSpeedBadge: "উচ্চ গতি",
      maxSpeedBadge: "সর্বোচ্চ গতি",
      residentialNote: "সকল আবাসিক প্যাকেজে শর্তসাপেক্ষে আনলিমিটেড ব্রাউজিং এবং ফাইবার অপটিক অবকাঠামোর সুবিধা প্রযোজ্য।",
      corpTag: "ডেডিকেটেড এন্টারপ্রাইজ সলিউশন",
      corpTitle: "কর্পোরেট ইন্টারনেট",
      corpDesc: "আপনার প্রতিষ্ঠানের সুনির্দিষ্ট চাহিদা অনুসারে ডেডিকেটেড কর্পোরেট সংযোগ। বাড্ডার সকল বাণিজ্যিক অফিস, আইটি ফার্ম ও প্রতিষ্ঠানের জন্য।",
      corpSpecTitle: "এন্টারপ্রাইজ ফিচারসমূহ:",
      corpPricingModel: "মূল্য নির্ধারণ",
      corpContactUs: "যোগাযোগ করুন",
      corpPricingNote: "ব্যান্ডউইথ ও রুটের উপর ভিত্তি করে নির্ধারিত",
      corpTalkBtn: "বিজনেস টিমের সাথে কথা বলুন",
      corpSurveyNote: "২৪ ঘন্টার মধ্যে কারিগরি পরিদর্শন ও সম্ভাব্যতা যাচাই সম্পন্ন করা হয়।",
      homeList: [
        {
          id: "pkg-1",
          name: "STARTER",
          speed: "৩০ এমবিপিএস",
          price: "৫০০",
          description: "দ্রুতগতির ফাইবার ব্রাউজিং, বাফারহীন ইউটিউব ও হাই-স্পিড বিডিআইএক্স।",
          features: [
            "ইউটিউব ভিডিও সাপোর্ট (বাফারহীন)",
            "বিডিআইএক্স কানেক্টেড (উচ্চগতি)",
            "অনলাইন টিভি সাপোর্ট (৫০+ চ্যানেল)",
            "এফটিপি ও মিডিয়া সার্ভার সুবিধা",
            "পিওর অপটিক্যাল ফাইবার ক্যাবল (FTTH)",
            "রিয়েল আইপি সুবিধা (প্রযোজ্য ক্ষেত্রে)",
            "২৪/৭ কাস্টমার সাপোর্ট",
          ],
        },
        {
          id: "pkg-2",
          name: "STANDARD",
          speed: "৫০ এমবিপিএস",
          price: "৮০০",
          description: "পারিবারিক ব্যবহার, ওয়ার্ক ফ্রম হোম এবং একাধিক ডিভাইসে মসৃণ স্ট্রিমিং।",
          features: [
            "ইউটিউব ভিডিও সাপোর্ট (বাফারহীন)",
            "বিডিআইএক্স কানেক্টেড (লো পিং)",
            "অনলাইন টিভি সাপোর্ট (৫০+ চ্যানেল)",
            "শক্তিশালী মিডিয়া সার্ভার / এফটিপি",
            "পিওর অপটিক্যাল ফাইবার ক্যাবল (FTTH)",
            "বাফারহীন ফেসবুক ও ৪কে স্ট্রিমিং",
            "রিয়েল আইপি সুবিধা (প্রযোজ্য ক্ষেত্রে)",
            "২৪/৭ প্রায়োরিটি কাস্টমার সাপোর্ট",
          ],
        },
        {
          id: "pkg-3",
          name: "PREMIUM",
          speed: "১০০ এমবিপিএস",
          price: "১০০০",
          description: "পাওয়ার ইউজার, কনটেন্ট ক্রিয়েটর ও ৪কে মাল্টি-স্ক্রিনের জন্য উচ্চ ব্যান্ডউইথ।",
          features: [
            "ইউটিউব ভিডিও সাপোর্ট (বাফারহীন)",
            "বিডিআইএক্স কানেক্টেড (গিগাবিট পিয়ারিং)",
            "অনলাইন টিভি সাপোর্ট (৫০+ চ্যানেল)",
            "শক্তিশালী মিডিয়া সার্ভার / এফটিপি",
            "পিওর অপটিক্যাল ফাইবার ক্যাবল (FTTH)",
            "আল্ট্রা-লো লেটেন্সি অনলাইন গেমিং",
            "রিয়েল আইপি অপশন সুবিধা",
            "ভিআইপি টেকনিক্যাল সাপোর্ট ২৪/৭",
          ],
        },
        {
          id: "pkg-4",
          name: "EXTREME",
          speed: "১৫০ এমবিপিএস",
          price: "১৫০০",
          description: "ভারী ডাউনলোড, অফিস ও ক্রিয়েটরদের জন্য আল্ট্রা-ফাস্ট ফাইবার সংযোগ।",
          features: [
            "আল্ট্রাফাস্ট ১৫০ এমবিপিএস ফাইবার স্পিড",
            "ইউটিউব ভিডিও সাপোর্ট (বাফারহীন)",
            "বিডিআইএক্স কানেক্টেড (ডিরেক্ট পিয়ারিং)",
            "অনলাইন টিভি সাপোর্ট (৫০+ চ্যানেল)",
            "শক্তিশালী মিডিয়া সার্ভার / এফটিপি",
            "পিওর অপটিক্যাল ফাইবার ক্যাবল (FTTH)",
            "রিয়েল / পাবলিক আইপি অপশন",
            "ডেডিকেটেড ভিআইপি কাস্টমার সাপোর্ট",
          ],
        },
      ],
    },
    business: {
      tag: "এন্টারপ্রাইজ টেলিকম ও কানেক্টিভিটি",
      title: "ব্যবসার জন্য নির্ভরযোগ্য কানেক্টিভিটি",
      subtitle: "বাড্ডা এবং আফতাবনগরে ব্যবসা প্রতিষ্ঠানগুলোকে ডেডিকেটেড ব্যান্ডউইথ, টেকসই ফাইবার অবকাঠামো ও অন-স্পট ইঞ্জিনিয়ারিং সহায়তা প্রদান।",
      talkBtn: "বিজনেস টিমের সাথে কথা বলুন",
      requestIpBtn: "পাবলিক আইপির আবেদন",
      inquireOffice: "অফিসের জন্য ইনকোয়ারি",
      surveyTitle: "বাড্ডায় সাইট সার্ভে প্রয়োজন?",
      surveyDesc: "আমাদের অপটিক্যাল নেটওয়ার্ক ইঞ্জিনিয়াররা সরাসরি আপনার ভবন পরিদর্শন করে রুট ও সংযোগের প্রস্তাবনা প্রদান করবেন।",
      callDeskBtn: "বিজনেস ডেস্কে কল করুন",
      services: [
        { id: "corp-internet", title: "কর্পোরেট ইন্টারনেট", description: "অফিস, কর্পোরেট হেডকোয়ার্টার ও একাধিক শাখার জন্য স্কেলেবল ডেডিকেটেড ফাইবার ইন্টারনেট।", tags: ["উচ্চ প্রাপ্যতা", "সিমেট্রিক্যাল"] },
        { id: "dedicated-internet", title: "ডেডিকেটেড ইন্টারনেট", description: "জরুরি এন্টারপ্রাইজ অ্যাপ্লিকেশন ও ইআরপির জন্য শতভাগ আনকন্টেন্ডেড ব্যান্ডউইথ।", tags: ["১:১ আনকন্টেন্ডেড", "ডিরেক্ট পাইপ"] },
        { id: "dedicated-ip", title: "ডেডিকেটেড / পাবলিক আইপি", description: "মেইল সার্ভার, সিসিটিভি ক্যামেরা ও ব্রাঞ্চ ভিপিএন হোস্ট করার জন্য স্ট্যাটিক রিয়েল IPv4।", tags: ["স্ট্যাটিক IPv4", "হোয়াইট-লিস্টেড"] },
        { id: "network-solutions", title: "কর্পোরেট নেটওয়ার্ক সলিউশন", description: "অভিজ্ঞ নেটওয়ার্ক ইঞ্জিনিয়ারদের দ্বারা স্ট্রাকচার্ড ল্যান ক্যাবলিং, ফায়ারওয়াল ও রাউটার সেটআপ।", tags: ["ম্যানেজড আইটি", "সুইচিং"] },
        { id: "p2p", title: "পয়েন্ট-টু-পয়েন্ট কানেক্টিভিটি", description: "মেট্রো ব্যাকবোনের মাধ্যমে দুই বা ততোধিক অফিসের মধ্যে সরাসরি প্রাইভেট ডেটা সংযোগ।", tags: ["মেট্রো P2P", "সিকিউর টানেল"] },
        { id: "business-support", title: "বিজনেস সাপোর্ট", description: "বাড্ডা ও আফতাবনগরের বাণিজ্যিক গ্রাহকদের জন্য সিনিয়র ইঞ্জিনিয়ারদের সরাসরি অগ্রাধিকার সাপোর্ট।", tags: ["প্রায়োরিটি ডিসপ্যাচ", "ইঞ্জিনিয়ার লাইন"] },
        { id: "customized", title: "কাস্টমাইজড কানেক্টিভিটি", description: "এসএমই এবং প্রাতিষ্ঠানিক বাজেটের সাথে সঙ্গতিপূর্ণ নমনীয় ব্যান্ডউইথ ও চুক্তি।", tags: ["কাস্টম এসএলএ", "বার্স্ট ক্যাপাসিটি"] },
      ],
    },
    network: {
      tag: "অবকাঠামো টপোলজি",
      title: "নেটওয়ার্ক অবকাঠামো",
      subtitle: "আন্তর্জাতিক আপস্ট্রিম থেকে শুরু করে সরাসরি আপনার বাসাবাড়ি বা অফিস রাউটার পর্যন্ত নিরবচ্ছিন্ন সেবা প্রদানে সক্ষম।",
      badges: ["মাল্টিপল আপস্ট্রিম", "আন্ডারগ্রাউন্ড ব্যাকবোন", "ফাইবার অপটিক", "এফটিটিএইচ (FTTH)", "বিডিআইএক্স (BDIX)", "নেটওয়ার্ক নির্ভরযোগ্যতা"],
      stageLabel: "টপোলজি স্তর",
      nodes: [
        { id: 0, title: "গ্লোবাল ইন্টারনেট", subtitle: "টিয়ার-১ ট্রানজিট", description: "আন্তর্জাতিক আইপি গেটওয়ের সাথে সরাসরি সংযোগ যা গ্লোবাল ক্লাউড ও ডেটাসেন্টারে দ্রুত অ্যাক্সেস নিশ্চিত করে।" },
        { id: 1, title: "মাল্টিপল আপস্ট্রিম", subtitle: "রিডানড্যান্ট লিংক", description: "একাধিক সক্রিয় আপস্ট্রিম সংযোগ যাতে একটি লাইনে মেইনটেন্যান্স চললেও সেবা বিঘ্নিত না হয়।" },
        { id: 2, title: "কোর নেটওয়ার্ক", subtitle: "বাড্ডা মেট্রো পিওপি", description: "বিডিআইএক্স রাউটিং, ডিএনএস রেজোলিউশন ও লোকাল আইপি নিয়ন্ত্রণের উচ্চ ক্ষমতাসম্পন্ন কোর রাউটিং।" },
        { id: 3, title: "আন্ডারগ্রাউন্ড ব্যাকবোন", subtitle: "ভূগর্ভস্থ ফাইবার", description: "ঝড়বৃষ্টি কিংবা রাস্তার ক্ষয়ক্ষতি থেকে সম্পূর্ণ সুরক্ষিত আধুনিক ভূগর্ভস্থ অপটিক্যাল ফাইবার।" },
        { id: 4, title: "ডিস্ট্রিবিউশন নেটওয়ার্ক", subtitle: "সাব-হাব রাউটিং", description: "আবাসিক ব্লক এবং গলির ডিস্ট্রিবিউশন বক্সগুলোর সাথে সংযুক্ত মেট্রো ফাইবার রিং।" },
        { id: 5, title: "এফটিটিএইচ / ওএলটি", subtitle: "অপটিক্যাল লাইন টার্মিনাল", description: "প্যাসিভ অপটিক্যাল ফাইবার সিগন্যাল বিভক্তকারী ক্যারিয়ার-গ্রেড ওএলটি হার্ডওয়্যার।" },
        { id: 6, title: "গ্রাহক প্রাঙ্গণ", subtitle: "ওএনইউ / ওয়াই-ফাই রাউটার", description: "গ্রাহকের ওএনইউ (ONU) ডিভাইসে ফাইবার টার্মিনেট হয়ে আল্ট্রা-ফাস্ট গিগাবিট ইন্টারনেট সরবরাহ করে।" },
      ],
    },
    networkStatus: {
      tag: "লাইভ টেলিমেট্রি ড্যাশবোর্ড",
      title: "গ্রিন লিংক নেটওয়ার্ক স্ট্যাটাস",
      subtitle: "বাড্ডার কোর টেলিকম সেবাসমূহের সার্বক্ষণিক রিয়েল-টাইম অপারেশনাল অবস্থা।",
      verified: "যাচাইকৃত",
      refreshing: "যাচাই হচ্ছে...",
      refreshBtn: "রিফ্রেশ",
      operational: "সচল",
      latencyLabel: "লেটেন্সি",
      uptimeLabel: "আপটাইম",
      footerNote: "এনওসি টেলিমেট্রি নোড GLN-CORE-01 • ২৪/৭/৩৬৫ দিন সার্বক্ষণিক মনিটরিং • ৯৯% আপটাইম কমপ্লায়েন্স",
      systems: [
        { name: "ইন্টারনেট গেটওয়ে", scope: "গ্লোবাল ট্রানজিট ও আপস্ট্রিম লিংক" },
        { name: "বিডিআইএক্স পিয়ারিং", scope: "বাংলাদেশ ইন্টারনেট এক্সচেঞ্জ ইন্টারকানেক্ট" },
        { name: "কোর নেটওয়ার্ক", scope: "আন্ডারগ্রাউন্ড অপটিক্যাল ব্যাকবোন ও বাড্ডা কোর পিওপি" },
        { name: "গ্রাহক পোর্টাল", scope: "বিলিং, টিকিটিং ও অ্যাকাউন্ট ভেরিফিকেশন" },
      ],
    },
    coverage: {
      tag: "ফাইবার কভারেজ ম্যাপ",
      title: "আপনার এলাকায় কি গ্রিন লিংক উপলব্ধ?",
      subtitle: "বাড্ডা, আফতাবনগর ও পার্শ্ববর্তী এলাকাগুলোতে আমাদের ভূগর্ভস্থ FTTH ফাইবার ব্যাকবোন পৌঁছেছে কিনা তা যাচাই করুন।",
      selectAreaLabel: "এলাকা নির্বাচন করুন *",
      roadBlockLabel: "রোড / ব্লক / বাড়ি নং *",
      roadBlockPlaceholder: "যেমন: রোড-০২, ব্লক-এ অথবা বাড়ি-১৫",
      phoneLabel: "আপনার ফোন নম্বর *",
      checkBtn: "উপলব্ধতা যাচাই করুন",
      availableTitle: "আপনার এলাকায় গ্রিন লিংক ফাইবার উপলব্ধ রয়েছে!",
      surveyTitle: "সম্ভাব্যতা যাচাই প্রয়োজন",
      notYetTitle: "আপাতত কভারেজ নেই — সংযোগের আবেদন করুন",
      availableMsg: (area) => `অভিনন্দন! ${area} এলাকায় আমাদের হাই-স্পিড FTTH অপটিক্যাল ফাইবার সম্পূর্ণ সক্রিয়। আমাদের লোকাল টিম ২৪ থেকে ৪৮ ঘন্টার মধ্যে সংযোগ সম্পন্ন করতে পারবে।`,
      surveyMsg: (area) => `${area} এলাকায় ফাইবার দূরত্বের সম্ভাব্যতা যাচাই প্রয়োজন। এই এলাকায় প্রায়ই ডেডিকেটেড সংযোগ দেওয়া হয়ে থাকে।`,
      notYetMsg: "আপনার ঠিকানায় এখনও লাইন পৌঁছেনি — এখনই আবেদন করে রাখুন যাতে আমাদের ইঞ্জিনিয়ারিং টিম দ্রুত ফাইবার লাইন সম্প্রসারণ করতে পারে!",
      connectNowBtn: "এই ঠিকানায় সংযোগ নিন",
      submitRequestBtn: "কভারেজ সম্প্রসারণের আবেদন",
      activeHubsTitle: "সক্রিয় ফাইবার হাবসমূহ",
      activeHubsDesc: "সকল প্রধান আবাসিক ও বাণিজ্যিক সড়কে স্থাপনকৃত সরাসরি FTTH ফাইবার বক্সসমূহ:",
      corpPointNote: "কর্পোরেট পয়েন্ট-টু-পয়েন্ট খুঁজছেন?",
      corpMetroAvail: "মেট্রোওয়াইড সুবিধা",
      inquiryLineTitle: "সরাসরি কভারেজ ইনকোয়ারি লাইন",
      callBtn: "কল",
    },
    publicIp: {
      tag: "ডেডিকেটেড IPv4 রাউটিং",
      title: "পাবলিক / রিয়েল আইপি প্রয়োজন?",
      subtitle: "গ্রিন লিংক সরাসরি আপনার রাউটারে ক্লিন স্ট্যাটিক পাবলিক IPv4 সরবরাহ করে। সিসিটিভি ও প্রাতিষ্ঠানিক কাজের জন্য অত্যন্ত উপযোগী।",
      boxTitle: "আপনার সংযোগে স্ট্যাটিক আইপি যুক্ত করুন",
      boxDesc: "যেকোনো গ্রিন লিংক হোম কিংবা কর্পোরেট প্যাকেজের সাথে সহজেই যুক্ত করা যায়।",
      benefit1: "আনফিল্টার্ড ১:১ স্ট্যাটিক পাবলিক IPv4",
      benefit2: "এনওসি ইঞ্জিনিয়ারদের দ্বারা কনফিগারেশন",
      benefit3: "যেকোনো স্ট্যান্ডার্ড GPON/ONU রাউটারে কাজ করে",
      requestBtn: "পাবলিক আইপির আবেদন",
      useCases: [
        { title: "সিসিটিভি ও সিকিউরিটি NVR", description: "বিশ্বের যেকোনো প্রান্ত থেকে সাবলীলভাবে লাইভ সিসিটিভি ক্যামেরা ফুটেজ পর্যবেক্ষণ।" },
        { title: "সিকিউর অফিস ভিপিএন", description: "বাসা বা দূর থেকে অফিসের সার্ভারে এনক্রিপ্টেড সংযোগ স্থাপন।" },
        { title: "রিমোট ডেস্কটপ (RDP)", description: "অফিসের ওয়ার্কস্টেশন, পিওএস মেশিন ও নেটওয়ার্ক স্টোরেজের সাথে নিরবচ্ছিন্ন সংযোগ।" },
        { title: "লোকাল সার্ভার ও হোস্টিং", description: "কোম্পানি ওয়েব পোর্টাল, মেইল সার্ভার ও ডেটাবেজ নোড নিজস্ব প্রাঙ্গণে হোস্ট করা।" },
        { title: "ব্যবসায়িক অ্যাপ্লিকেশন", description: "ব্যাংক গেটওয়ে, ট্যাক্স পোর্টাল ও ইআরপি সিস্টেমে অনুমোদিত স্ট্যাটিক আইপি সংহতকরণ।" },
      ],
    },
    portal: {
      tag: "গ্রাহক সেলফ-সার্ভিস",
      title: "সবকিছু এক ঠিকানায়",
      subtitle: "আপনার গ্রিন লিংক ইন্টারনেট অ্যাকাউন্ট পরিচালনা করুন, লাইভ অপটিক্যাল সিগন্যাল দেখুন, বিল পরিশোধ করুন এবং সাপোর্ট টিকিট ট্র্যাক করুন।",
      loginBtn: "কাস্টমার পোর্টালে লগইন করুন",
      previewTitle: "পোর্টাল ড্যাশবোর্ড প্রিভিউ",
      currentPkgLabel: "বর্তমান প্যাকেজ",
      monthlyDueLabel: "মাসিক প্রদেয় বিল:",
      paidStatus: "৭০০ টাকা (পরিশোধিত)",
      rxPowerLabel: "অপটিক্যাল সিগন্যাল (RX):",
      downloadInvoice: "ইনভয়েস ডাউনলোড",
      openTicket: "টিকেট খুলুন",
      integrationNote: "গ্রিন লিংক রেডিয়াস ও সিআরএম বিলিং এপিআই-এর সাথে সমন্বিত।",
    },
    payment: {
      tag: "সহজ বিল পরিশোধ",
      title: "সহজেই আপনার ইন্টারনেট বিল পরিশোধ করুন",
      subtitle: "বিকাশ, নগদ, রকেট কিংবা সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমে সহজেই আপনার মাসিক ইন্টারনেট বিল প্রদান করুন।",
      howToPay: (name) => `${name}-এর মাধ্যমে বিল প্রদানের নিয়ম`,
      detailsTitle: "পেমেন্ট বিবরণী",
      merchantLabel: "বিলার / মার্চেন্ট একাউন্ট:",
      referenceLabel: "রেফারেন্স নম্বর:",
      referenceDesc: "আপনার নিবন্ধিত ক্লায়েন্ট আইডি (যেমন: GLN-XXXX) অথবা ফোন নম্বর",
      counterLabel: "কাউন্টার নম্বর (প্রয়োজন হলে):",
      whatsappNote: "তাৎক্ষণিক পেমেন্ট নিশ্চিত করতে রসিদের স্ক্রিনশট পাঠান:",
      footerNote: "নিরাপদ সরাসরি এমএফএস বিলিং ইন্টিগ্রেশন। আমাদের আফতাবনগর ও উত্তর বাড্ডা অফিসেও সরাসরি বিল গ্রহণ করা হয়।",
    },
    support: {
      tag: "আন্তরিক গ্রাহক সেবা",
      title: "আমরা আছি আপনার সেবায়",
      subtitle: "জরুরি লাইন মেরামত, ওয়াই-ফাই রাউটার অপ্টিমাইজেশন কিংবা বিলিং সংক্রান্ত যেকোনো প্রয়োজনে বাড্ডায় প্রস্তুত আমাদের টিম।",
      physicalTitle: "১২ ঘন্টা ফিজিক্যাল ফিল্ড সাপোর্ট",
      physicalDesc: "সকাল ৯:০০টা – রাত ৯:০০টা (প্রতিদিন) • বাড্ডায় দ্রুততম সময়ে লাইনে পৌঁছানোর নিশ্চয়তা",
      onlineTitle: "২৪/৭ অনলাইন সাপোর্ট",
      onlineDesc: "সার্বক্ষণিক হেল্পডেস্ক হটলাইন, হোয়াটসঅ্যাপ এবং পোর্টাল টিকিটিং সেবা",
      cardCallTitle: "সরাসরি ফোন করুন",
      cardCallDesc: "বাড্ডার দায়িত্বরত টেকনিশিয়ান বা বিলিং প্রতিনিধির সাথে সরাসরি কথা বলুন।",
      cardCallBtn: "হটলাইনে কল করুন",
      cardWaTitle: "হোয়াটসঅ্যাপ চ্যাট",
      cardWaDesc: "রাউটারের লাইট বা পেমেন্ট রসিদের ছবি পাঠিয়ে দ্রুত সহায়তা নিন।",
      cardWaBtn: "হোয়াটসঅ্যাপে লিখুন",
      cardTicketTitle: "সাপোর্ট টিকিট জমা দিন",
      cardTicketDesc: "জরুরি ফিল্ড সার্ভিসের জন্য আপনার ক্লায়েন্ট আইডি দিয়ে টিকিট তৈরি করুন।",
      cardTicketBtn: "সাপোর্ট টিকেট খুলুন",
      cardOfficeTitle: "অফিসে আসুন",
      cardOfficeDesc: "আফতাবনগর প্রধান কার্যালয় কিংবা উত্তর বাড্ডা শাখা অফিসে সরাসরি সাক্ষাত করুন।",
      cardOfficeBtn: "অফিসের অবস্থান দেখুন",
      officeHours: "খোলা: সকাল ৯:০০ – রাত ৯:০০",
      fastResponse: "কাস্টমার ডেস্ক থেকে দ্রুত সাড়া",
      trackedInPortal: "গ্রাহক পোর্টালে ট্র্যাক করুন",
    },
    speedtest: {
      tag: "ব্রডব্যান্ড ডায়াগনস্টিক টুল",
      title: "আপনার ইন্টারনেট স্পিড পরীক্ষা করুন",
      subtitle: "বাড্ডা মেট্রোপলিটন নেটওয়ার্ক গেটওয়েতে আপনার বর্তমান ডাউনলোড, আপলোড এবং পিং লেটেন্সি যাচাই করুন।",
      serverLabel: "টেস্ট সার্ভার:",
      serverName: "গ্রিন লিংক কোর পিওপি — বাড্ডা, ঢাকা",
      statusLabel: "অবস্থা:",
      ready: "টেস্টের জন্য প্রস্তুত",
      complete: "টেস্ট সম্পন্ন",
      measuring: "স্পিড যাচাই হচ্ছে...",
      testAgain: "পুনরায় টেস্ট করুন",
      startBtn: "স্পিড টেস্ট শুরু করুন",
      ping: "পিং",
      jitter: "জিটার",
      download: "ডাউনলোড",
      upload: "আপলোড",
      footerNote: "সরাসরি ব্রাউজার লেটেন্সি পরিমাপ • গ্রিন লিংক ডেডিকেটেড স্পিড ডেমন সার্ভারের সাথে সমন্বিত",
    },
    about: {
      tag: "গ্রিন লিংক নেটওয়ার্ক সম্পর্কে",
      headline: "মানুষকে যুক্ত করছি, ব্যবসাকে এগিয়ে নিচ্ছি।",
      overview: "গ্রিন ইন্টারনেট (গ্রিন লিংক নেটওয়ার্ক) একটি অভিজ্ঞ ব্রডব্যান্ড ইন্টারনেট সেবাদাতা প্রতিষ্ঠান, যা বাড্ডা এবং সংলগ্ন এলাকায় প্রায় ১০ বছর ধরে সেবা দিয়ে আসছে। প্রতিষ্ঠানটি মানসম্পন্ন সেবা, নিবেদিত নেটওয়ার্ক ইঞ্জিনিয়ার, দক্ষ প্রশাসনিক কর্মী এবং অপটিক্যাল ফাইবার অবকাঠামোর মাধ্যমে নিরবচ্ছিন্ন গ্রাহকসেবা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।",
      missionTitle: "আমাদের লক্ষ্য (Mission)",
      missionText: "নির্ভরযোগ্য এবং গুণগত মানের ইন্টারনেট সংযোগ প্রদান করা যা আমাদের স্থানীয় সমাজ, শিক্ষা এবং ব্যবসাকে সমৃদ্ধ করে।",
      visionTitle: "আমাদের রূপকল্প (Vision)",
      visionText: "বাসাবাড়ি ও ব্যবসা প্রতিষ্ঠানের জন্য টেকসই ফাইবারভিত্তিক সংযোগ নেটওয়ার্ক গড়ে তোলা যাতে থাকে সর্বোচ্চ আপটাইম এবং আধুনিক টেলিযোগাযোগ মান।",
      check1: "নিবেদিত নেটওয়ার্ক ইঞ্জিনিয়ার, প্রশাসনিক কর্মকর্তা এবং স্থানীয় ফিল্ড সাপোর্ট টিম।",
      check2: "অপটিক্যাল ফাইবার অবকাঠামো এবং বিডিআইএক্স (BDIX) পিয়ারিংয়ের সার্বক্ষণিক আধুনিকায়ন।",
      dualCenters: "দুটি সমন্বিত কার্যালয়:",
      btrcNote: "বিটিআরসি (BTRC) অনুমোদিত টেলিযোগাযোগ মানদণ্ড পালনে অঙ্গীকারবদ্ধ",
      milestonesTitle: "যাচাইকৃত অপারেশনাল অর্জনসমূহ",
    },
    contact: {
      tag: "কার্যালয় ও সেবা কেন্দ্র",
      title: "গ্রিন লিংক নেটওয়ার্কের সাথে যোগাযোগ",
      subtitle: "বাড্ডায় অবস্থিত আমাদের স্থানীয় অফিসে সরাসরি আসুন অথবা তাৎক্ষণিক সেবার জন্য হটলাইনে ফোন করুন।",
      addressLabel: "ঠিকানা:",
      phoneLabel: "সরাসরি ফোন:",
      emailLabel: "অফিসিয়াল ইমেইল:",
      hoursLabel: "সেবার সময়সূচি:",
      callOffice: "কল করুন",
      whatsappOffice: "হোয়াটসঅ্যাপ",
      emailOffice: "ইমেইল",
      openGmaps: "গুগল ম্যাপে দেখুন",
      mapTitle: (name) => `ম্যাপ: ${name}`,
      mapFooter: "তাৎক্ষণিক সাইট পরিদর্শন ও ফাইবার কেবল সংযোগের জন্য প্রস্তুত স্থানীয় টেকনিশিয়ান।",
    },
    faq: {
      tag: "সাধারণ জিজ্ঞাসা",
      title: "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)",
      subtitle: "গ্রিন লিংক ব্রডব্যান্ড কানেকশন, বিডিআইএক্স স্পিড এবং টেকনিক্যাল সাপোর্ট সংক্রান্ত যাবতীয় তথ্যাবলী।",
      searchPlaceholder: "প্রশ্ন খুঁজুন (যেমন: FTTH, BDIX, বিল পরিশোধ)...",
      catAll: "সকল প্রশ্ন",
      catGeneral: "সাধারণ",
      catTechnical: "কারিগরি ও ফাইবার",
      catBilling: "বিলিং ও পেমেন্ট",
      catCorporate: "কর্পোরেট",
      noResults: "আপনার অনুসন্ধানের সাথে কোনো প্রশ্ন মেলেনি।",
      resetFilters: "ফিল্টার রিসেট করুন",
      stillQuestion: "অন্য কোনো প্রশ্ন আছে?",
      stillHelp: "বাড্ডায় আমাদের ২৪/৭ কাস্টমার ডেস্কে সরাসরি কল করুন।",
      callHotline: "কল",
    },
    leadForm: {
      tag: "নতুন সংযোগের আবেদন",
      title: "আজই নতুন সংযোগ নিন",
      subtitle: "নিচের ফর্মটি পূরণ করুন। বাড্ডায় আমাদের কারিগরি দল আপনার ফাইবার লাইনের সম্ভাব্যতা যাচাই করে ২৪-৪৮ ঘন্টার মধ্যে সংযোগ নিশ্চিত করবে।",
      fullNameLabel: "আপনার পূর্ণ নাম *",
      phoneLabel: "ফোন নম্বর *",
      areaLabel: "এলাকা / পাড়া *",
      packageLabel: "কাঙ্ক্ষিত প্যাকেজ *",
      addressLabel: "বিস্তারিত ঠিকানা (রোড, বাড়ি, ফ্ল্যাট নং)",
      addressPlaceholder: "যেমন: বাড়ি-২২, রোড-০৪, ফ্ল্যাট ৩বি",
      messageLabel: "অতিরিক্ত কোনো বার্তা বা প্রশ্ন (ঐচ্ছিক)",
      messagePlaceholder: "যেমন: পাবলিক আইপি প্রয়োজন কিনা বা কখন ফোন করলে ভালো হয়।",
      submitBtn: "সংযোগের আবেদন জমা দিন",
      submittingBtn: "আবেদন জমা হচ্ছে...",
      noUpfrontNote: "অনলাইনে কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই। লাইন সংযোগ ও যাচাইয়ের পর বিল প্রদান করুন।",
      successTitle: "আবেদন সফলভাবে গ্রহণ করা হয়েছে!",
      successMsg: (name, phone, pkg) => `ধন্যবাদ ${name}! বাড্ডায় আমাদের কাস্টমার সমন্বয়ক আপনার সাথে ${phone} নম্বরে যোগাযোগ করে ${pkg} সংযোগের শিডিউল নিশ্চিত করবেন।`,
      submitAnother: "আরেকটি আবেদন করুন",
      callImmediate: "জরুরি সহায়তায় কল করুন",
    },
    footer: {
      slogan: "দ্রুত। নির্ভরযোগ্য। সংযুক্ত।",
      description: "বাড্ডা, আফতাবনগর এবং পার্শ্ববর্তী এলাকায় উচ্চগতির অপটিক্যাল ফাইবার ব্রডব্যান্ড, বাফারহীন বিডিআইএক্স ও এন্টারপ্রাইজ কানেক্টিভিটি সমাধান।",
      connTitle: "কানেক্টিভিটি",
      assistTitle: "সহায়তা",
      officesTitle: "বাড্ডা সেবা কেন্দ্রসমূহ",
      rights: "সর্বস্বত্ব সংরক্ষিত।",
      licensedNote: "বাড্ডা, ঢাকায় অনুমোদিত টেলিযোগাযোগ ও ব্রডব্যান্ড সেবা প্রদানকারী।",
      terms: "শর্তাবলী ও নিয়মাবলী",
      privacy: "গোপনীয়তা নীতি",
      refund: "রিফান্ড নীতিমালা",
      top: "শীর্ষে",
    },
  },
};
