export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  quote: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: string;
}

export const leadershipData: Leader[] = [
  {
    name: "Dr. Vikram Singhal",
    role: "Chief Executive Officer & Managing Director",
    bio: "Over 25 years of global enterprise leadership spearheading digital transformation for Fortune 100 organizations across North America, Europe, and Asia.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "Our mission is to help our enterprise clients continuously navigate their digital next with trust, speed, and uncompromising engineering excellence.",
  },
  {
    name: "Sarah Jenkins",
    role: "President & Chief Operating Officer",
    bio: "Pioneered agile delivery networks across 45 delivery hubs worldwide. Former VP of Global Operations at leading enterprise cloud providers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote: "Operational agility is the superpower that allows our clients to turn technological disruption into lasting competitive advantage.",
  },
  {
    name: "Kenji Sato",
    role: "Chief Technology Officer",
    bio: "Internationally recognized technologist specializing in distributed cloud systems, LLM alignment architectures, and micro-edge computing platforms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "We don't just adopt technology—we pioneer the open frameworks and high-assurance architectures that define the next decade of enterprise software.",
  },
  {
    name: "Aria Thorne",
    role: "Chief Information Security & Trust Officer",
    bio: "Recognized industry voice in zero-trust cyber resilience, AI safety protocols, and cross-border digital governance regulations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    quote: "In a world of perimeter-less architectures, trust must be mathematically verifiable at every micro-interaction.",
  },
];

export const companyMilestones: Milestone[] = [
  {
    year: "2012",
    title: "Founding & Digital Core Inception",
    description: "OveraTech established by a team of visionary systems architects focused on high-scale distributed enterprise engineering.",
  },
  {
    year: "2016",
    title: "Global Delivery Expansion",
    description: "Inaugurated state-of-the-art innovation hubs across Silicon Valley, London, Frankfurt, Singapore, and Bengaluru.",
  },
  {
    year: "2019",
    title: "Launch of OveraTech Stratus",
    description: "Introduced our flagship multi-cloud acceleration suite, adopted by over 100 Global 2000 enterprises.",
  },
  {
    year: "2023",
    title: "OveraTech Nexus AI Platform Debut",
    description: "Launched our cognitive enterprise engine, democratizing governed generative AI and agentic workflows.",
  },
  {
    year: "2026",
    title: "Global Digital Vanguard",
    description: "Surpassed 120,000 global technologists across 54 countries delivering over $3.2B in validated client enterprise value.",
  },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Client-Obsessed Value Creation",
    description: "We measure our success purely by the tangible, audited business outcomes and competitive differentiation we create for our clients.",
    iconName: "Target",
  },
  {
    title: "Uncompromising Engineering Rigor",
    description: "We treat code and system architecture as high-assurance crafts. We build for resilience, zero-downtime scale, and generational longevity.",
    iconName: "Shield",
  },
  {
    title: "Continuous Learning & Curiosity",
    description: "Through our OveraTech Academy, we champion perpetual reinvention, empowering our global workforce to master next-horizon technologies.",
    iconName: "GraduationCap",
  },
  {
    title: "Ethical & Responsible Innovation",
    description: "We are committed to carbon-neutral operations, equitable digital inclusion, and responsible AI governance with human dignity at the center.",
    iconName: "HeartHandshake",
  },
];

