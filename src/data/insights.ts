export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  category: "Research Report" | "Executive Viewpoint" | "Case Study" | "Tech Radar" | "Whitepaper";
  theme: "AI & Automation" | "Cloud" | "Cybersecurity" | "Sustainability" | "Digital Workplace";
  description: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
  keyTakeaways: string[];
  content: string[];
}

export const insightsData: InsightItem[] = [
  {
    id: "global-ai-enterprise-2026",
    slug: "global-ai-enterprise-2026",
    title: "The 2026 Global AI Enterprise Report: From Pilot Paralysis to Agentic Scale",
    category: "Research Report",
    theme: "AI & Automation",
    description: "An extensive survey of 1,200 Global 2000 CIOs and CTOs revealing why 74% of enterprises are moving from static copilots to multi-agent autonomous swarms.",
    publishedDate: "November 2026",
    readTime: "12 min read",
    featured: true,
    author: {
      name: "Dr. Elena Vance",
      role: "Head of OveraTech Knowledge Institute",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "Enterprises deploying autonomous multi-agent systems achieve 3.4x higher ROI compared to standard chatbot pilots.",
      "Data governance and prompt security remain the number one blocker for production AI adoption across 68% of surveyed firms.",
      "Organizations with unified data fabrics deploy new domain models in 14 days versus 112 days for siloed peers.",
    ],
    content: [
      "The era of generative AI experimentation is officially closing. In its place rises an urgent mandate: transforming speculative prototypes into mission-critical, governed agentic workflows that deliver measurable enterprise value.",
      "Our 2026 study underscores a stark divergence between two tiers of organizations: the AI Leaders who have embedded autonomous agents into their core ERP, CRM, and supply chain systems, and the Explorers who remain stuck in localized experimentation.",
      "Crucially, the differentiator is not access to frontier foundation models—which have become broadly commoditized—but rather the depth and quality of the enterprise data fabric, accompanied by zero-trust guardrails that prevent hallucination and data leakage.",
    ],
  },
  {
    id: "cloud-finops-modern-era",
    slug: "cloud-finops-modern-era",
    title: "Cloud Economics & FinOps: Squeezing Exponential Value from Multi-Cloud Sprawl",
    category: "Executive Viewpoint",
    theme: "Cloud",
    description: "How leading CFOs and engineering leaders are aligning cloud unit metrics with business revenue rather than blunt cost-cutting.",
    publishedDate: "October 2026",
    readTime: "8 min read",
    featured: false,
    author: {
      name: "Marcus Vance",
      role: "Managing Director, Cloud Transformation",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Over 30% of multi-cloud operational spend is wasted on idle containers and unindexed object storage.",
      "Shifting from cost-center thinking to unit-cost per business transaction unlocks true FinOps maturity.",
      "Automated policy enforcement reduces compute drift by 82% within the first 90 days.",
    ],
    content: [
      "As enterprise multi-cloud footprints continue to expand across AWS, Azure, and Google Cloud, traditional IT financial management approaches are cracking under the pressure of continuous micro-billing.",
      "FinOps must evolve from a quarterly spreadsheet reconciliation ritual into an automated, real-time feedback loop directly accessible by engineers during CI/CD pipelines.",
    ],
  },
  {
    id: "zero-trust-cyber-resilience",
    slug: "zero-trust-cyber-resilience",
    title: "Autonomous Cyber Defense in the Post-Perimeter Era",
    category: "Whitepaper",
    theme: "Cybersecurity",
    description: "Designing self-healing identity fabrics and AI-augmented security operations centers (SOC) capable of sub-second threat containment.",
    publishedDate: "October 2026",
    readTime: "10 min read",
    featured: false,
    author: {
      name: "Aria Thorne",
      role: "Chief Information Security Strategist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Attacker dwell time has shrunk from 21 days in 2020 to under 4 hours in 2026.",
      "Traditional signature-based SIEM systems fail to detect 54% of zero-day credential stuffing vectors.",
      "Micro-segmentation coupled with behavioral biometrics drops lateral movement risk to near-zero.",
    ],
    content: [
      "The perimeter is no longer merely porous—it has effectively dissolved into billions of micro-transactions executed by mobile employees, IoT nodes, and autonomous cloud APIs.",
      "To survive modern threat actors, enterprise security architectures must operate on an assumption of continuous breach, relying on machine-speed mitigation rather than human triage.",
    ],
  },
  {
    id: "future-of-work-augmented-engineer",
    slug: "future-of-work-augmented-engineer",
    title: "The Augmented Developer: Redefining Software Engineering Velocity with AI Swarms",
    category: "Tech Radar",
    theme: "Digital Workplace",
    description: "Why developer velocity metrics are pivoting from lines of code to architectural verification and orchestration speed.",
    publishedDate: "September 2026",
    readTime: "7 min read",
    featured: false,
    author: {
      name: "Kenji Sato",
      role: "VP of Product Engineering",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Engineers spend 58% less time writing boilerplate and test scaffolding.",
      "System design and domain architectural understanding become the paramount engineering skills.",
      "Automated verification test suites are essential to maintain software quality in an AI-generated codebase.",
    ],
    content: [
      "Software engineering is undergoing its most profound paradigm shift since the invention of high-level programming languages.",
      "Developers are transitioning from manual syntax typists to conductors of specialized code generation, verification, and deployment swarms.",
    ],
  },
  {
    id: "sustainable-it-netzero",
    slug: "sustainable-it-netzero",
    title: "Green Software Engineering: Cutting Cloud Carbon Footprints by 40%",
    category: "Executive Viewpoint",
    theme: "Sustainability",
    description: "Actionable frameworks for optimizing code execution efficiency, scheduling batch workloads to green energy windows, and meeting Scope 3 standards.",
    publishedDate: "September 2026",
    readTime: "6 min read",
    featured: false,
    author: {
      name: "Sophia Martinez",
      role: "Global Director of ESG & Sustainability",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Cloud computing contributes to approximately 3.2% of global greenhouse emissions.",
      "Optimizing query algorithms and adopting Rust/Go microservices cuts server energy draw by up to 50%.",
      "Dynamic workload shifting to regions with active solar/wind output slashes carbon intensity without latency penalties.",
    ],
    content: [
      "Sustainability in technology is no longer an optional corporate marketing slide—it has become a core engineering metric tied directly to investor scrutiny and capital access.",
      "Green computing principles must be baked into every architectural decision from algorithm choice to server geography.",
    ],
  },
  {
    id: "case-study-pan-euro-bank",
    slug: "case-study-pan-euro-bank",
    title: "Case Study: Scaling Real-Time Settlement for 80M European Bank Customers",
    category: "Case Study",
    theme: "Cloud",
    description: "How OveraTech engineered an ultra-resilient hybrid-cloud settlement engine handling 25,000 transactions per second with sub-10ms latency.",
    publishedDate: "August 2026",
    readTime: "9 min read",
    featured: false,
    author: {
      name: "Marcus Vance",
      role: "Managing Director, Cloud Transformation",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "99.999% availability sustained across three consecutive peak holiday shopping seasons.",
      "65% reduction in cross-border transaction settlement times.",
      "Fully compliant with European Banking Authority (EBA) resilience standards.",
    ],
    content: [
      "In modern banking, milliseconds translate directly to millions of dollars in customer confidence and counterparty risk.",
      "OveraTech partnered with the banking group to replace brittle legacy batch settlement pipelines with a modern event-sourced microservices architecture.",
    ],
  },
];

