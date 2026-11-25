export interface IndustryData {
  id: string;
  slug: string;
  title: string;
  heroHeadline: string;
  description: string;
  image: string;
  iconName: string;
  stats: { value: string; label: string }[];
  challenges: string[];
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
  accelerators: string[];
  caseStudy: {
    title: string;
    metrics: string;
    summary: string;
    quote: string;
    author: string;
  };
}

export const industriesData: IndustryData[] = [
  {
    id: "banking",
    slug: "banking",
    title: "Financial Services & Banking",
    heroHeadline: "Architecting the Future of Resilient, Intelligent Banking",
    description: "Empowering leading global banks, wealth managers, and payment networks with real-time fraud mitigation, core banking modernization, autonomous wealth advisory, and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    iconName: "Landmark",
    stats: [
      { value: "14 of 25", label: "Top Global Banks Partnered" },
      { value: "$4.8B", label: "Fraud Attempted Losses Prevented" },
      { value: "450M+", label: "Daily Digital Transactions Processed" },
    ],
    challenges: [
      "Legacy core mainframe systems impeding real-time fintech integration",
      "Mounting regulatory compliance demands (Basel IV, DORA, Open Banking)",
      "Skyrocketing consumer expectations for instant, hyper-personalized financial insights",
      "Sophisticated cyber attacks and synthetic identity fraud threats",
    ],
    solutions: [
      {
        title: "Next-Gen Core Modernization",
        description: "Decouple core banking ledger systems through event-driven microservices without core outage risks.",
        icon: "Cpu",
      },
      {
        title: "Autonomous Fraud & AML Intelligence",
        description: "Graph neural networks detecting laundering rings and payment anomalies under 12 milliseconds.",
        icon: "ShieldAlert",
      },
      {
        title: "Hyper-Personalized Wealth Engines",
        description: "AI-driven portfolio rebalancing, tax-loss harvesting, and conversational robo-advisory.",
        icon: "TrendingUp",
      },
    ],
    accelerators: [
      "OveraTech FinCore Microservices Accelerator",
      "Zero-Day Fraud Detection Engine",
      "Automated Regulatory Reporting Framework (ARRF)",
    ],
    caseStudy: {
      title: "Real-time payment transformation for Tier-1 Pan-European Bank",
      metrics: "65% latency reduction & 99.999% SLA uptime",
      summary: "Migrated 80 million consumer accounts to a resilient hybrid cloud architecture capable of handling 25,000 TPS during peak holiday cycles.",
      quote: "OveraTech transformed our payment rails without an hour of service disruption. Our digital transaction capability is now best-in-class across Europe.",
      author: "Chief Operating Officer, European Banking Group",
    },
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    heroHeadline: "Human-Centric Digital Health and Accelerated Life Sciences",
    description: "Bridging the gap between patient care, clinical data interoperability, drug development pipelines, and secure hospital ecosystem connectivity.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    iconName: "Stethoscope",
    stats: [
      { value: "12M+", label: "Patient Records Unified" },
      { value: "35%", label: "Faster Clinical Trial Recruitment" },
      { value: "100%", label: "HIPAA & GDPR Compliance" },
    ],
    challenges: [
      "Fragmented electronic health records (EHR) trapped in siloed legacy systems",
      "Prolonged clinical trial recruitment timelines slowing lifesaving therapies",
      "Provider burnout resulting from arduous administrative and documentation burdens",
      "Strict data privacy regulations requiring confidential computing safeguards",
    ],
    solutions: [
      {
        title: "FHIR-Native Interoperability Fabric",
        description: "Unify hospital EHR, genomic, and wearable sensor streams into a secure, real-time longitudinal patient record.",
        icon: "Activity",
      },
      {
        title: "Clinical Trial AI Optimization",
        description: "Predictive cohort matching and decentralized trial telemetry monitoring to accelerate drug trials.",
        icon: "Dna",
      },
      {
        title: "Clinician Ambient AI Assistants",
        description: "Natural conversation transcription and automated clinical note generation reducing charting hours by 60%.",
        icon: "Headphones",
      },
    ],
    accelerators: [
      "OveraTech HealthMesh Interoperability Engine",
      "TrialPredict Protocol Optimizer",
      "HIPAA-Compliant Confidential Compute Enclave",
    ],
    caseStudy: {
      title: "Consolidated health data platform for 38-hospital regional network",
      metrics: "40% reduction in clinician charting time & $22M savings",
      summary: "Integrated disparate hospital clinical databases into a unified cloud-native EHR data lakehouse, enabling instant patient chart access across care teams.",
      quote: "Our physicians spend less time clicking screens and significantly more time with patients, directly lifting care satisfaction scores.",
      author: "Chief Medical Information Officer",
    },
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail & Consumer Packaged Goods",
    heroHeadline: "Reinventing Omnichannel Commerce and Intelligent Supply Chains",
    description: "Empowering global retailers and brands to deliver frictionless shopping journeys, AI-driven inventory optimization, and dynamic hyper-personalization.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    iconName: "ShoppingBag",
    stats: [
      { value: "+28%", label: "Average E-Commerce Conversion Lift" },
      { value: "40%", label: "Reduction in Out-of-Stock Events" },
      { value: "120M+", label: "Shoppers Engaged Daily" },
    ],
    challenges: [
      "Volatile consumer demand leading to either overstocking or costly stockouts",
      "Disjointed customer journeys between physical store experiences and digital apps",
      "Rising customer acquisition costs demanding higher retention through loyalty",
      "Complex global supply chains vulnerable to transport disruptions",
    ],
    solutions: [
      {
        title: "Predictive Demand & Inventory AI",
        description: "Machine learning models forecasting SKU-level demand by store based on weather, trends, and promotions.",
        icon: "Boxes",
      },
      {
        title: "Unified Composable Commerce",
        description: "Headless commerce architecture enabling rapid deployment of web, mobile app, and in-store interactive kiosks.",
        icon: "Store",
      },
      {
        title: "Real-Time Personalization Engines",
        description: "Dynamic product recommendation carousels and tailored promotions driven by real-time shopper behavior.",
        icon: "Sparkles",
      },
    ],
    accelerators: [
      "OveraTech RetailCore Headless Commerce Starter",
      "SupplyOptima Real-Time Inventory Orchestrator",
      "OmniSense In-Store Digital Twin Platform",
    ],
    caseStudy: {
      title: "Next-gen headless commerce replatforming for global fashion brand",
      metrics: "3.2x faster page loads & 41% surge in mobile conversions",
      summary: "Replaced a monolithic legacy commerce stack with a composable Next.js and microservices architecture serving 14 international markets.",
      quote: "OveraTech gave us the agility to launch new digital shopping campaigns in hours rather than weeks.",
      author: "VP of Global Digital Experience",
    },
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing & High-Tech",
    heroHeadline: "Industry 4.0: Connected Factories and Autonomous Operations",
    description: "Powering smart manufacturing with industrial IoT, computer vision quality assurance, digital twins, and resilient predictive maintenance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    iconName: "Factory",
    stats: [
      { value: "32%", label: "Reduction in Machine Unplanned Downtime" },
      { value: "99.4%", label: "Defect Detection Accuracy via Vision AI" },
      { value: "480+", label: "Smart Manufacturing Facilities Connected" },
    ],
    challenges: [
      "Unplanned equipment downtime costing millions in lost assembly productivity",
      "Quality inspection bottlenecks relying on manual human sample checks",
      "Disconnected plant floor legacy OT (Operational Tech) systems isolated from corporate IT",
      "Pressure to hit net-zero factory emission targets and reduce scrap waste",
    ],
    solutions: [
      {
        title: "Industrial IoT & Edge Telemetry",
        description: "Plug-and-play edge gateways collecting vibration, acoustic, and temperature metrics from shop floor machinery.",
        icon: "Radio",
      },
      {
        title: "Automated Vision Quality Inspection",
        description: "High-speed camera feeds analyzed with computer vision models running at 60 FPS to detect surface imperfections.",
        icon: "Eye",
      },
      {
        title: "Plant Digital Twins",
        description: "Interactive 3D factory representations simulating bottleneck scenarios and assembly line reconfigurations.",
        icon: "Boxes",
      },
    ],
    accelerators: [
      "OveraTech FactoryLink Edge Framework",
      "VisionInspect Deep Learning QA Suite",
      "TwinSync Industrial Simulation Engine",
    ],
    caseStudy: {
      title: "Smart factory rollout across 22 automotive assembly plants",
      metrics: "$58M annual cost reduction & 28% defect reduction",
      summary: "Deployed connected edge vibration sensors and predictive maintenance algorithms across 1,400 CNC robots, predicting failures up to 96 hours before stoppage.",
      quote: "We shifted from emergency reactive repairs to precision scheduled maintenance, dramatically stabilizing our output.",
      author: "Chief Manufacturing Officer",
    },
  },
  {
    id: "energy",
    slug: "energy",
    title: "Energy, Utilities & Sustainability",
    heroHeadline: "Decarbonization, Smart Grids, and Next-Gen Energy Networks",
    description: "Modernizing utilities with intelligent grid monitoring, renewable energy integration, carbon accounting platforms, and asset health analytics.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    iconName: "Zap",
    stats: [
      { value: "3.4 GW", label: "Renewable Energy Managed" },
      { value: "24%", label: "Grid Outage Restoration Speed Boost" },
      { value: "1.2M Tons", label: "CO2e Emission Tracking Under Management" },
    ],
    challenges: [
      "Intermittent renewable generation (solar/wind) straining legacy distribution grids",
      "Extreme weather events triggering wide-scale infrastructure outages",
      "Mandatory Scope 1, 2, and 3 ESG reporting standards requiring granular audit trails",
      "Aging pipeline and transmission tower physical assets requiring proactive monitoring",
    ],
    solutions: [
      {
        title: "Smart Grid Distributed Energy Management (DERMS)",
        description: "AI-driven real-time power balancing between renewable inputs, battery storage, and consumer demand.",
        icon: "SunMedium",
      },
      {
        title: "Enterprise ESG & Carbon Telemetry Platform",
        description: "Automated emissions accounting across supply chains, operational facilities, and corporate cloud usage.",
        icon: "Leaf",
      },
      {
        title: "Drone & Satellite Asset Inspection",
        description: "Computer vision analyzing thousands of miles of high-voltage transmission lines for vegetation encroachment.",
        icon: "Crosshair",
      },
    ],
    accelerators: [
      "OveraTech GridMind DERMS Platform",
      "GreenPulse Enterprise ESG Ledger",
      "SkyInspect Autonomous Utility Drone Suite",
    ],
    caseStudy: {
      title: "Predictive smart grid modernization for regional power utility",
      metrics: "35% faster storm restoration time & 18% peak load shaving",
      summary: "Modernized dispatch operations using smart meter telemetry and weather forecast models across 3.2 million household customers.",
      quote: "During major weather emergencies, OveraTech's grid intelligence platform helped us restore power to critical infrastructure faster than ever before.",
      author: "SVP of Grid Operations",
    },
  },
  {
    id: "telecom",
    slug: "telecom",
    title: "Communications, Media & Technology",
    heroHeadline: "Next-Gen 5G Services, Cloud Networks, and Immersive Media",
    description: "Accelerating telco-to-techco transitions with Open RAN orchestration, self-healing networks, generative customer service, and streaming platforms.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    iconName: "Antenna",
    stats: [
      { value: "50M+", label: "Active Mobile Subscribers Served" },
      { value: "70%", label: "Faster 5G Slice Provisioning" },
      { value: "99.999%", label: "Core Telecom Network Reliability" },
    ],
    challenges: [
      "Stagnating voice and data ARPU demanding new enterprise B2B service monetization",
      "High CAPEX in 5G infrastructure requiring faster payback through network slicing",
      "High customer churn due to complex billing and fragmented support channels",
      "Heavy compute overhead for high-definition streaming and low-latency gaming",
    ],
    solutions: [
      {
        title: "Autonomous Self-Healing Networks",
        description: "Zero-touch network operations automatically redirecting bandwidth during sudden traffic spikes and fiber cuts.",
        icon: "Cpu",
      },
      {
        title: "B2B 5G Network Slicing Marketplace",
        description: "Digital portals enabling enterprises to provision dedicated guaranteed low-latency slices on demand.",
        icon: "Wifi",
      },
      {
        title: "Next-Gen Telco Customer Experience",
        description: "Conversational AI resolving 65% of customer billing queries, SIM swaps, and roaming setups without human agent handoff.",
        icon: "MessageSquare",
      },
    ],
    accelerators: [
      "OveraTech NetZero Self-Healing Telecom Suite",
      "SliceForge On-Demand 5G Provisioning Engine",
      "TelcoGenie Autonomous Customer Support Swarm",
    ],
    caseStudy: {
      title: "Autonomous 5G core network automation for Tier-1 Carrier",
      metrics: "72% reduction in manual network ticketing & $30M OPEX saved",
      summary: "Integrated AI-based network anomaly detection across 12,000 cell towers and edge nodes, preventing major consumer outages before impact.",
      quote: "OveraTech transformed our network operations center from a room full of reactive alarms into a proactive, autonomous operation.",
      author: "Chief Technology Officer",
    },
  },
];

