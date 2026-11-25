export interface NavSubItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  items: NavSubItem[];
}

export interface NavSpotlight {
  tag: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface NavItem {
  name: string;
  href: string;
  hasMegaMenu?: boolean;
  categories?: NavCategory[];
  spotlight?: NavSpotlight;
}

export const navigationItems: NavItem[] = [
  {
    name: "Services",
    href: "/services",
    hasMegaMenu: true,
    categories: [
      {
        title: "Digital Core & Cloud",
        items: [
          { name: "Cloud Transformation", href: "/services?tab=cloud", description: "Multi-cloud architecture & enterprise migration" },
          { name: "Application Modernization", href: "/services?tab=cloud", description: "Legacy system refactoring & microservices" },
          { name: "Enterprise Apps (ERP/CRM)", href: "/services?tab=enterprise-apps", description: "SAP, Salesforce, Oracle & Microsoft ecosystem" },
          { name: "Data Center Modernization", href: "/services?tab=cloud", description: "Hybrid cloud & edge infrastructure optimization" },
        ],
      },
      {
        title: "AI, Data & Automation",
        items: [
          { name: "Generative AI & Agentic Systems", href: "/services?tab=ai", description: "Enterprise LLM frameworks & autonomous agents", badge: "Trending" },
          { name: "Data Engineering & Analytics", href: "/services?tab=data", description: "Modern data fabric, lakes & predictive modeling" },
          { name: "Intelligent Automation", href: "/services?tab=ai", description: "RPA, cognitive process automation & workflow AI" },
          { name: "OveraTech Nexus AI", href: "/digital-transformation", description: "Our proprietary enterprise AI acceleration platform", badge: "Flagship" },
        ],
      },
      {
        title: "Engineering & Resilience",
        items: [
          { name: "Digital Product Engineering", href: "/services?tab=engineering", description: "Full-stack software, mobile & IoT product development" },
          { name: "Cybersecurity & Governance", href: "/services?tab=cybersecurity", description: "Zero-trust architecture, threat defense & SecOps" },
          { name: "Experience Design (UI/UX)", href: "/services?tab=experience", description: "Human-centric digital customer journeys" },
          { name: "Quality Engineering & Testing", href: "/services?tab=engineering", description: "Automated test suites & continuous assurance" },
        ],
      },
    ],
    spotlight: {
      tag: "Flagship Platform",
      title: "OveraTech Stratus Suite",
      description: "Accelerate your cloud-native journey by 45% with blueprint automation and governed multi-cloud orchestration.",
      href: "/digital-transformation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    name: "Industries",
    href: "/industries",
    hasMegaMenu: true,
    categories: [
      {
        title: "Financial & Commerce",
        items: [
          { name: "Banking & Capital Markets", href: "/industries?sector=banking", description: "Core banking modernization, payments & fraud AI" },
          { name: "Insurance & Wealth", href: "/industries?sector=insurance", description: "Automated underwriting, claims & policy management" },
          { name: "Retail & Consumer Goods", href: "/industries?sector=retail", description: "Omnichannel commerce & AI supply chain" },
        ],
      },
      {
        title: "Industrial & Resources",
        items: [
          { name: "Manufacturing & High-Tech", href: "/industries?sector=manufacturing", description: "Industry 4.0, smart factory & digital twins" },
          { name: "Energy, Utilities & ESG", href: "/industries?sector=energy", description: "Grid modernization & carbon footprint tracking" },
          { name: "Automotive & Mobility", href: "/industries?sector=automotive", description: "Connected vehicles, EV software & logistics" },
        ],
      },
      {
        title: "Healthcare & Public",
        items: [
          { name: "Life Sciences & Pharma", href: "/industries?sector=lifesciences", description: "Clinical trial analytics & drug discovery tech" },
          { name: "Healthcare Providers", href: "/industries?sector=healthcare", description: "Interoperable health data & patient engagement" },
          { name: "Communications & Media", href: "/industries?sector=telecom", description: "5G services, content streaming & network virtualization" },
        ],
      },
    ],
    spotlight: {
      tag: "Industry Impact",
      title: "Global Banking Transformation",
      description: "How Tier-1 bank slashed real-time transaction processing latency by 65% across 22 countries.",
      href: "/insights?filter=case-studies",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    name: "Digital Transformation",
    href: "/digital-transformation",
    hasMegaMenu: true,
    categories: [
      {
        title: "Transformation Engines",
        items: [
          { name: "OveraTech Nexus AI Suite", href: "/digital-transformation#nexus", description: "Enterprise generative AI accelerator & cognitive fabric", badge: "AI Core" },
          { name: "OveraTech Stratus Cloud", href: "/digital-transformation#stratus", description: "Zero-friction hybrid cloud ecosystem & migration tools" },
          { name: "CyberShield Zero Trust", href: "/digital-transformation#cybershield", description: "Continuous autonomous threat detection & compliance" },
        ],
      },
      {
        title: "Methodology & Frameworks",
        items: [
          { name: "Agile Enterprise Blueprint", href: "/digital-transformation#framework", description: "Scaled execution methodology for Fortune 500" },
          { name: "Digital Maturity Index", href: "/digital-transformation#maturity", description: "Benchmark your enterprise against industry peers", badge: "Interactive Tool" },
          { name: "Sustainable IT Architecture", href: "/digital-transformation#sustainability", description: "Green cloud & energy-optimized software compute" },
        ],
      },
    ],
    spotlight: {
      tag: "Interactive Assessment",
      title: "Assess Your Enterprise AI Readiness",
      description: "Take our 2-minute diagnostic tool to evaluate cloud, data maturity, and generative AI readiness.",
      href: "/digital-transformation#maturity",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    name: "Insights",
    href: "/insights",
    hasMegaMenu: true,
    categories: [
      {
        title: "OveraTech Knowledge Institute",
        items: [
          { name: "Executive Research Reports", href: "/insights?type=reports", description: "In-depth global market intelligence & strategic forecasts" },
          { name: "Technology Radar 2026-2027", href: "/insights?type=radar", description: "Next-frontier technology adoption curves & horizon trends" },
          { name: "Client Impact Stories", href: "/insights?type=case-studies", description: "Measurable outcomes delivered for enterprise clients" },
        ],
      },
      {
        title: "Featured Themes",
        items: [
          { name: "Generative AI in the Enterprise", href: "/insights?theme=ai", description: "From experimentation to production value at scale" },
          { name: "Cloud Economics & FinOps", href: "/insights?theme=cloud", description: "Optimizing multi-cloud spend without slowing velocity" },
          { name: "Future of Digital Work", href: "/insights?theme=workplace", description: "Autonomous agents, augmented developers & hybrid workforce" },
        ],
      },
    ],
    spotlight: {
      tag: "Flagship Report",
      title: "The 2026 Global AI Enterprise Report",
      description: "Survey of 1,200 CIOs: How leading global corporations generate 3.4x higher ROI through agentic AI architectures.",
      href: "/insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

