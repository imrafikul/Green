export interface PackageItem {
  id: string;
  packageNumber?: string;
  name: string;
  speed: string;
  speedValue: number;
  price: string;
  billingPeriod: string;
  badge?: string;
  popular?: boolean;
  highlightTags?: string[];
  features: string[];
  description?: string;
}

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags?: string[];
}

export interface OfficeLocation {
  name: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  landmark?: string;
  mapQuery: string;
  hours: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'billing' | 'technical' | 'corporate';
}

export interface ReviewItem {
  id: string;
  name: string;
  area: string;
  package: string;
  rating: number;
  comment: string;
  date: string;
  isVerifiedPlaceholder: boolean;
}

export const SITE_CONFIG = {
  companyName: "Green Link Network",
  brandName: "Green Internet",
  positioning: "Premium Internet Service Provider in Badda",
  tagline: "Explore the World with Green Internet",
  subtitle: "Fast, reliable and high-quality fiber-optic Internet for homes, businesses and organizations.",
  experienceYears: "10+",
  uptimeClaim: "99%",
  supportOnline: "24/7",
  supportPhysical: "12 Hours Physical Support (9:00 AM – 9:00 PM)",
  ftpLiveTvUrl: "https://jatrabari.com/",
  
  emails: {
    primary: "info@greenlink-network.com",
    support: "support@greenlink-network.com",
  },
  
  phones: {
    aftabnagar: "+8801676367500",
    northBadda: "+8801827688677",
    hotline: "+8801676367500",
  },

  offices: [
    {
      name: "Aftabnagar Head Office",
      phone: "+8801676367500",
      phoneDisplay: "+880 1676-367500",
      address: "House-22, Road-02, Block-A, Aftabnagar, Badda, Dhaka-1212",
      landmark: "Near East West University & Main Gate",
      mapQuery: "House-22+Road-02+Block-A+Aftabnagar+Dhaka+1212",
      hours: "9:00 AM - 9:00 PM (Daily)",
    },
    {
      name: "North Badda Branch Office",
      phone: "+8801827688677",
      phoneDisplay: "+880 1827-688677",
      address: "House-50, Comillapara, Badda, Dhaka-1212",
      landmark: "Comillapara, North Badda",
      mapQuery: "House-50+Comillapara+Badda+Dhaka+1212",
      hours: "9:00 AM - 9:00 PM (Daily)",
    },
  ] as OfficeLocation[],

  socialLinks: {
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/8801676367500",
    youtube: "https://youtube.com",
  },

  trustStripCards: [
    {
      id: "upstream",
      title: "Multiple Upstream",
      description: "Reliable Internet connectivity through multiple upstream connections.",
      icon: "Network",
    },
    {
      id: "underground",
      title: "Underground Backbone",
      description: "Underground fiber backbone designed for stable connectivity.",
      icon: "Layers",
    },
    {
      id: "uptime",
      title: "99% Uptime",
      description: "Proven high reliability backed by redundant fiber infrastructure.",
      icon: "ShieldCheck",
    },
    {
      id: "support-team",
      title: "Big Support Team",
      description: "Dedicated technical and customer support team ready in your neighborhood.",
      icon: "Users",
    },
    {
      id: "online-support",
      title: "24/7 Online Support",
      description: "Online support available around the clock through ticket, WhatsApp and hotline.",
      icon: "Headphones",
    },
    {
      id: "quality",
      title: "Quality Service",
      description: "Focus on reliable and customer-oriented Internet service with zero compromise.",
      icon: "Sparkles",
    },
  ],

  services: [
    {
      id: "corporate",
      title: "Corporate Network Solutions",
      subtitle: "Enterprise Grade",
      description: "Professional connectivity solutions for businesses and organizations with customized routing and prioritized throughput.",
      icon: "Building2",
      features: ["Customized Bandwidth", "Dedicated Account Manager", "Priority Routing", "Point-to-Point Links"],
    },
    {
      id: "dedicated-shared",
      title: "Dedicated & Shared Connection",
      subtitle: "Flexible Bandwidth",
      description: "Internet connectivity options tailored to diverse customer requirements, from home power users to growing companies.",
      icon: "Zap",
      features: ["Symmetrical Speed", "Low Latency Routing", "Clean IP Allocation", "Flexible Upgrades"],
    },
    {
      id: "ftth",
      title: "FTTH Network",
      subtitle: "Direct Fiber Optic",
      description: "Fiber-to-the-Home broadband connectivity delivering pure optical signals straight to your GPON/EPON ONU router.",
      icon: "Cpu",
      features: ["Pure Optical Fiber", "High Resistance to Interference", "Ultra Low Latency", "Gigabit Ready"],
    },
    {
      id: "wireless",
      title: "Wireless Solutions",
      subtitle: "Where Applicable",
      description: "Wireless connectivity solutions engineered for specialized links, event coverage, and challenging deployment zones.",
      icon: "Radio",
      features: ["Rapid Deployment", "Point-to-Multipoint", "Secure Encrypted Links", "Backup Redundancy"],
    },
  ],

  whyChooseFeatures: [
    {
      id: "unlimited",
      title: "Unlimited Package",
      description: "No data cap or hidden restrictions, subject to actual service terms.",
      icon: "Infinity",
    },
    {
      id: "buffer-free",
      title: "Buffer-Free Browsing",
      description: "Fast and smooth browsing, 4K streaming, and gaming experience.",
      icon: "PlayCircle",
    },
    {
      id: "dedicated-ip",
      title: "Dedicated IP",
      description: "Public / Dedicated IP address availability for CCTV, servers & remote work.",
      icon: "Globe",
    },
    {
      id: "fiber-network",
      title: "Fiber Optic Network",
      description: "Optical fiber for local connectivity and modern FTTH network.",
      icon: "Cpu",
    },
    {
      id: "stable-connections",
      title: "Stable Connections",
      description: "Multiple underground backbone connections designed for reliability and stability.",
      icon: "Activity",
    },
    {
      id: "customer-support",
      title: "24/7 Customer Support",
      description: "12 hours physical support and 24 hours online support, based on verified operations.",
      icon: "Headphones",
    },
  ],

  homePackages: [
    {
      id: "pkg-1",
      packageNumber: "Package 1",
      name: "STARTER",
      speed: "30 Mbps",
      speedValue: 30,
      price: "500",
      billingPeriod: "Month",
      description: "Fast fiber browsing, YouTube streaming & BDIX local connectivity.",
      highlightTags: ["YouTube", "BDIX", "Online TV"],
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
      packageNumber: "Package 2",
      name: "STANDARD",
      speed: "50 Mbps",
      speedValue: 50,
      price: "800",
      billingPeriod: "Month",
      popular: true,
      badge: "Most Popular",
      description: "Best for families, work from home & seamless multi-device streaming.",
      highlightTags: ["50 Mbps", "BDIX", "Online TV", "Media Server"],
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
      packageNumber: "Package 3",
      name: "PREMIUM",
      speed: "100 Mbps",
      speedValue: 100,
      price: "1000",
      billingPeriod: "Month",
      badge: "High Speed",
      description: "High bandwidth for power users, content creators & 4K multi-screens.",
      highlightTags: ["100 Mbps", "BDIX Turbo", "Online TV", "4K Ultra"],
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
      packageNumber: "Package 4",
      name: "EXTREME",
      speed: "150 Mbps",
      speedValue: 150,
      price: "1500",
      billingPeriod: "Month",
      badge: "Maximum Speed",
      description: "Ultra-fast connection engineered for heavy downloads, offices & creators.",
      highlightTags: ["150 Mbps", "VIP Support", "Online TV", "Gigabit"],
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
  ] as PackageItem[],

  corporatePackage: {
    id: "pkg-corporate",
    name: "CORPORATE",
    speed: "Custom Bandwidth",
    price: "Contact Us",
    billingPeriod: "Custom Agreement",
    description: "Dedicated corporate connectivity engineered to your enterprise requirements.",
    features: [
      "Dedicated 1:1 Bandwidth Available",
      "Public / Dedicated IP Allocation",
      "BDIX Direct Peering",
      "Point-to-Point Local Loop",
      "Dedicated Account Manager",
      "Priority Physical & Online Support",
      "Customized Routing Solutions",
    ],
  },

  businessServices: [
    {
      id: "corp-internet",
      title: "Corporate Internet",
      description: "Dedicated and scalable fiber connectivity tailored for offices, corporate headquarters, and multi-branch organizations.",
      iconName: "Building2",
      tags: ["High Availability", "Symmetrical"],
    },
    {
      id: "dedicated-internet",
      title: "Dedicated Internet",
      description: "Guaranteed uncontended bandwidth for critical enterprise applications, CRM, ERP, and latency-sensitive operations.",
      iconName: "ShieldCheck",
      tags: ["Uncontended", "Direct Pipe"],
    },
    {
      id: "dedicated-ip",
      title: "Dedicated / Public IP",
      description: "Static IPv4 routing for hosting mail servers, local PBX, web applications, and remote CCTV camera feeds.",
      iconName: "Globe",
      tags: ["Static IPv4", "White-listed"],
    },
    {
      id: "network-solutions",
      title: "Corporate Network Solutions",
      description: "Complete structured LAN, fiber patching, firewall integration, and managed routing designed by experienced network engineers.",
      iconName: "Network",
      tags: ["Managed IT", "Switching"],
    },
    {
      id: "p2p",
      title: "Point-to-Point Connectivity",
      description: "Private fiber connectivity between two distant physical offices or data centers within our metro backbone area.",
      iconName: "ArrowLeftRight",
      tags: ["Metro P2P", "Secure Tunnel"],
    },
    {
      id: "business-support",
      title: "Business Support",
      description: "Direct access to senior network engineers and rapid field dispatch for commercial subscribers in Badda and Aftabnagar.",
      iconName: "Headphones",
      tags: ["Priority Dispatch", "Engineer Line"],
    },
    {
      id: "customized",
      title: "Customized Connectivity",
      description: "Flexible bandwidth bursting, multi-homing setups, and tailored terms suited to institutional and SME budgets.",
      iconName: "Sliders",
      tags: ["Custom SLAs", "Burst Capacity"],
    },
  ] as BusinessServiceItem[],

  networkArchitectureNodes: [
    { id: "internet", name: "Global Internet", description: "Global Tier-1 IP Transit connectivity via international gateways" },
    { id: "upstream", name: "Multiple Upstream", description: "Redundant upstream connections preventing single points of failure" },
    { id: "core", name: "Core Network", description: "High-capacity BGP routing and traffic distribution fabric" },
    { id: "underground", name: "Underground Backbone", description: "Physical subterranean optical fiber backbone protected against weather & road disruption" },
    { id: "dist", name: "Distribution Network", description: "Metro fiber distribution hubs and aggregation switches" },
    { id: "ftth", name: "FTTH / OLT", description: "Optical Line Terminals feeding pure passive optical fiber (PON)" },
    { id: "customer", name: "Customer Premises", description: "Optical Network Unit (ONU) providing gigabit speed to subscriber" },
  ],

  networkStatus: {
    lastChecked: "Just now",
    services: [
      { name: "Internet Gateway", status: "Operational", ping: "8ms", uptime: "99.9%" },
      { name: "BDIX Peering", status: "Operational", ping: "2ms", uptime: "100%" },
      { name: "Core Network", status: "Operational", ping: "1ms", uptime: "99.95%" },
      { name: "Customer Portal", status: "Operational", ping: "14ms", uptime: "100%" },
    ],
  },

  coverageAreas: [
    { name: "Aftabnagar (Block A - M)", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "North Badda (Comillapara & surround)", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "Middle Badda", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "South Badda", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "Merul Badda", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "DIT Project, Badda", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "Gopi Para", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "Adarshanagar", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "Purba Badda", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
    { name: "Gulshan Link Road (Adjoining)", status: "Contact Us", type: "Survey Required", speed: "Corporate Available" },
    { name: "Rampura Bridge Side", status: "Available", type: "FTTH Ready", speed: "Up to 100 Mbps" },
  ],

  publicIPUseCases: [
    { title: "CCTV & Security NVR", description: "Stream live security footage from anywhere in the world without third-party cloud subscription delays.", icon: "Camera" },
    { title: "Secure Office VPN", description: "Connect your remote staff directly to your office internal servers with dedicated encryption tunnels.", icon: "ShieldCheck" },
    { title: "Remote Desktop (RDP)", description: "Seamless, secure connection to local workstations, POS machines, and storage servers.", icon: "Monitor" },
    { title: "Local Servers & Hosting", description: "Host your company web portals, staging environments, mail servers, and database nodes with clean static IP.", icon: "Server" },
    { title: "Business Applications", description: "Whitelisted static IP required for bank gateways, tax portals, ERP systems, and cloud API integrations.", icon: "Briefcase" },
  ],

  paymentMethods: [
    {
      id: "bkash",
      name: "bKash",
      logoText: "bKash",
      type: "MFS App & USSD",
      description: "Pay via bKash App Merchant Pay / Bill Pay or dial *247# directly.",
      merchantNumber: "01676367500",
      counter: "1",
      steps: [
        "Open bKash App & tap 'Pay Bill' or dial *247#",
        "Search or enter 'Green Link Network' / Merchant",
        "Enter your Client ID or Registered Phone Number",
        "Enter monthly bill amount and your bKash PIN to confirm",
      ],
    },
    {
      id: "nagad",
      name: "Nagad",
      logoText: "Nagad",
      type: "MFS App & USSD",
      description: "Fast bill payment through Nagad App or dialing *167#.",
      merchantNumber: "01827688677",
      counter: "1",
      steps: [
        "Open Nagad App or dial *167#",
        "Select 'Bill Pay' / 'Merchant Pay'",
        "Enter Green Link Merchant Account Number",
        "Reference your Client ID and complete with PIN",
      ],
    },
    {
      id: "rocket",
      name: "Rocket (DBBL)",
      logoText: "Rocket",
      type: "Dutch-Bangla Bank MFS",
      description: "Convenient payment through Rocket app or *322# bill pay.",
      merchantNumber: "01676367500",
      counter: "1",
      steps: [
        "Dial *322# or open Rocket app",
        "Select 'Bill Pay' and enter Biller code",
        "Enter Client ID and Bill Amount",
        "Confirm with your Rocket Secret PIN",
      ],
    },
    {
      id: "bank",
      name: "Bank Transfer",
      logoText: "Bank",
      type: "EFT / BEFTN / NPSB",
      description: "Direct bank deposit or corporate electronic fund transfer for corporate and long-term plans.",
      merchantNumber: "Account details on invoice",
      counter: "Office Account",
      steps: [
        "Collect company bank account details from monthly invoice",
        "Transfer via NPSB / BEFTN / Internet Banking",
        "Share deposit slip / transaction ID with billing department",
      ],
    },
  ],

  portalFeatures: [
    { title: "View Current Package", description: "Check active bandwidth, renewal date, and live connection state." },
    { title: "Check Bill & Dues", description: "Instant access to current monthly bill balance with zero confusion." },
    { title: "Payment History", description: "Complete record of past payments, dates, and MFS transaction IDs." },
    { title: "Download Invoices", description: "Official PDF bills and receipts ready for home budgeting or tax records." },
    { title: "Connection Status", description: "Live ONU optical signal power indicator and line status." },
    { title: "Submit Support Ticket", description: "Direct ticket dispatch to on-duty technical personnel in Badda." },
    { title: "Complaint History", description: "Track ticket progress and resolution notes transparently." },
  ],

  aboutContent: {
    headline: "Connecting People. Powering Businesses.",
    overview: "Green Internet (Green Link Network) provides broadband Internet service and has around 10 years of experience serving residential and corporate clients in Badda and adjacent neighborhoods. The company emphasizes quality service, dedicated network engineers, responsive administrative staff, and continuous enhancement of customer experience through optical fiber infrastructure.",
    mission: "Provide reliable and quality Internet connectivity that empowers our neighborhood communities, educational pursuits, and commercial enterprises.",
    vision: "Build a dependable fiber-based connectivity network for homes and businesses with consistent uptime, fast customer service, and modern telecommunication standards.",
  },

  companyStats: [
    { value: "10+", label: "Years Experience", description: "Serving Badda & Aftabnagar since our establishment" },
    { value: "99%", label: "Network Uptime", description: "Verified uptime backed by redundant backbone architecture" },
    { value: "24/7", label: "Online Support", description: "Round-the-clock helpdesk, ticketing, and hotline assistance" },
    { value: "FTTH", label: "Fiber Network", description: "Pure fiber-to-the-home optical connectivity throughout our coverage" },
  ],

  faqs: [
    {
      id: "faq-1",
      category: "general",
      question: "How can I get a Green Link connection?",
      answer: "You can request a connection directly through our website lead form, by calling our hotlines (+8801676367500 / +8801827688677), or by visiting our Aftabnagar or North Badda offices. Our field team will inspect fiber line availability at your building and complete installation within 24 to 48 hours.",
    },
    {
      id: "faq-2",
      category: "general",
      question: "What Internet packages are available?",
      answer: "We offer home broadband packages starting from 20 Mbps (BASIC at 500 Tk/month) up to 100 Mbps (ELITE at 1000 Tk/month). All home packages feature bufferless YouTube, bufferless Facebook, and high-speed BDIX routing. Corporate packages with dedicated bandwidth and customized features are available upon inquiry.",
    },
    {
      id: "faq-3",
      category: "technical",
      question: "Is FTTH available?",
      answer: "Yes, Green Link Network delivers Fiber-to-the-Home (FTTH) broadband. An optical fiber cable connects directly from our local OLT hub to an ONU (Optical Network Unit) router inside your premises, guaranteeing stable latency and immunity to weather noise.",
    },
    {
      id: "faq-4",
      category: "technical",
      question: "Do you provide BDIX connectivity?",
      answer: "Yes, all Green Link Internet packages include high-speed BDIX (Bangladesh Internet Exchange) peering. This ensures ultra-fast local content routing, fast download speeds from Bangladeshi servers, and low latency for local services.",
    },
    {
      id: "faq-5",
      category: "technical",
      question: "Do you provide Public / Dedicated IP?",
      answer: "Yes, we provide Dedicated / Public static IPv4 addresses for residential and business subscribers who need remote CCTV access, secure VPN tunnels, internal servers, gaming hosts, or banking integrations. You can request a public IP when ordering your package or through customer support.",
    },
    {
      id: "faq-6",
      category: "billing",
      question: "How can I pay my bill?",
      answer: "You can pay your bill easily via bKash, Nagad, Rocket, or direct bank transfer. You can use the 'Pay Bill' option on MFS apps with your Client ID or pay directly through our Customer Portal. Cash payments are also accepted at our Aftabnagar and North Badda branch offices.",
    },
    {
      id: "faq-7",
      category: "technical",
      question: "How can I report a connection problem?",
      answer: "We offer 24/7 online support and 12 hours physical on-site support (9:00 AM to 9:00 PM). You can call our hotline (+8801676367500), send a WhatsApp message, or submit a support ticket via the Customer Portal. Our local technical crew in Badda will address physical fiber issues promptly.",
    },
    {
      id: "faq-8",
      category: "general",
      question: "Is Green Link available in my area?",
      answer: "Green Link covers all major sectors in Badda, including Aftabnagar (Blocks A through M), North Badda (Comillapara, Gopi Para, Adarshanagar), Middle Badda, South Badda, Merul Badda, DIT Project, and Purba Badda. Use our Coverage Checker on this page to verify your road or block.",
    },
    {
      id: "faq-9",
      category: "corporate",
      question: "Do you provide corporate Internet?",
      answer: "Yes, we provide dedicated corporate Internet, point-to-point data links, multi-office intranet solutions, and managed networking for corporate offices, schools, colleges, institutions, and SMEs in Badda. Contact our business team for a custom quote and route feasibility survey.",
    },
    {
      id: "faq-10",
      category: "general",
      question: "What support options are available?",
      answer: "We provide phone hotline support, WhatsApp quick chat, online portal ticket submission, and in-person walk-in support at our two offices in Aftabnagar and North Badda.",
    },
  ] as FAQItem[],

  testimonials: [
    {
      id: "rev-1",
      name: "Tanvir Ahmed",
      area: "Aftabnagar, Block B",
      package: "STANDARD (40 Mbps)",
      rating: 5,
      comment: "Having used Green Internet for over 2 years in Aftabnagar, the stability is commendable. BDIX speed is great and support responds quickly whenever there is a neighborhood line maintenance.",
      date: "Verified Home Subscriber",
      isVerifiedPlaceholder: true,
    },
    {
      id: "rev-2",
      name: "Nusrat Jahan",
      area: "North Badda (Comillapara)",
      package: "PREMIUM (80 Mbps)",
      rating: 5,
      comment: "As a freelance video editor, high upload bandwidth and low ping are essential for my clients. The FTTH connection has been remarkably consistent without random disconnections.",
      date: "Verified Freelance Subscriber",
      isVerifiedPlaceholder: true,
    },
    {
      id: "rev-3",
      name: "Md. Kamrul Hasan",
      area: "Merul Badda",
      package: "ELITE (100 Mbps)",
      rating: 5,
      comment: "Switched from another local ISP. Bufferless YouTube and HD streaming across four smart TVs simultaneously work without a glitch. Bill payment via bKash is also effortless.",
      date: "Verified Residential Client",
      isVerifiedPlaceholder: true,
    },
    {
      id: "rev-4",
      name: "Nexus Design & Tech",
      area: "Badda Main Road",
      package: "Corporate Dedicated Link",
      rating: 5,
      comment: "Green Link provides our 25-workstation office with dedicated fiber connectivity and a static IP. Their local engineering team responds in person within minutes if needed.",
      date: "Verified Corporate Subscriber",
      isVerifiedPlaceholder: true,
    },
  ] as ReviewItem[],
};
