export interface ServicePractice {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  keyStats: { value: string; label: string }[];
  capabilities: {
    title: string;
    description: string;
  }[];
  businessOutcomes: string[];
  techStack: string[];
  clientStory: {
    client: string;
    industry: string;
    headline: string;
    result: string;
  };
}

export const servicesData: ServicePractice[] = [
  {
    id: "ai",
    slug: "ai",
    title: "AI, Data & Agentic Automation",
    tagline: "Unlocking enterprise intelligence from core to edge",
    shortDescription: "Deploy governed enterprise generative AI, autonomous agentic workflows, and predictive analytics that transform decision-making and operational agility.",
    fullDescription: "OveraTech's AI practice empowers Fortune 500 enterprises to transition from reactive analytics to proactive, autonomous systems. Leveraging our proprietary OveraTech Nexus platform, we orchestrate fine-tuned large language models, enterprise retrieval-augmented generation (RAG), and domain-specific agent swarms with enterprise-grade guardrails.",
    iconName: "BrainCircuit",
    badge: "High Growth",
    keyStats: [
      { value: "40%", label: "Faster time-to-insight" },
      { value: "3.5x", label: "Average operational ROI" },
      { value: "100%", label: "Responsible AI compliance" },
    ],
    capabilities: [
      {
        title: "Enterprise Generative AI & LLMOps",
        description: "Custom fine-tuning, domain prompt architectures, governance telemetry, and vector store integration for enterprise data.",
      },
      {
        title: "Autonomous Agentic Workflows",
        description: "Multi-agent systems executing complex cross-departmental operations with human-in-the-loop oversight.",
      },
      {
        title: "Intelligent Process Automation (IPA)",
        description: "Combining cognitive vision, natural language comprehension, and robotic automation for zero-touch processing.",
      },
      {
        title: "Data Fabric & Lakehouse Architecture",
        description: "Modern unified data platform architectures ensuring high-quality, real-time data delivery to AI models.",
      },
    ],
    businessOutcomes: [
      "Accelerated customer resolution times by up to 70%",
      "Automated 80% of repetitive operational workflows",
      "Rigorous governance protecting proprietary IP and data privacy",
    ],
    techStack: ["PyTorch", "Hugging Face", "LangChain", "OpenAI / Claude APIs", "Snowflake", "Databricks", "Kafka"],
    clientStory: {
      client: "Global Tier-1 Insurer",
      industry: "Financial Services",
      headline: "Autonomous claims triage and document verification",
      result: "Reduced average claim processing latency from 4.5 days to 18 minutes while improving fraud detection accuracy by 32%.",
    },
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "Cloud & Infrastructure Modernization",
    tagline: "Resilient, secure, and cost-optimized multi-cloud foundations",
    shortDescription: "End-to-end cloud strategy, cloud-native replatforming, and automated infrastructure that scale seamlessly across AWS, Azure, and Google Cloud.",
    fullDescription: "Modern enterprises require resilient, scalable, and automated cloud infrastructure to outpace disruption. OveraTech Stratus enables zero-downtime workload migrations, microservices architectures, serverless frameworks, and integrated FinOps governance to cut cloud waste and maximize agility.",
    iconName: "Cloud",
    keyStats: [
      { value: "45%", label: "Reduction in TCO" },
      { value: "99.99%", label: "Infrastructure availability" },
      { value: "60%", label: "Faster release velocity" },
    ],
    capabilities: [
      {
        title: "Multi-Cloud Strategy & Migration",
        description: "Automated discovery, workload classification, and rapid wave-based migrations to public and hybrid clouds.",
      },
      {
        title: "Cloud-Native & Container Orchestration",
        description: "Kubernetes, service meshes, and microservices design for hyper-scalable distributed applications.",
      },
      {
        title: "FinOps & Cloud Economics",
        description: "Continuous real-time cost transparency, rightsizing recommendations, and automated budget guardrails.",
      },
      {
        title: "Edge Computing & Hybrid Infrastructure",
        description: "Low-latency distributed computing nodes for manufacturing plants, retail stores, and remote hubs.",
      },
    ],
    businessOutcomes: [
      "Eliminated legacy data center technical debt across 14 facilities",
      "Achieved automated infrastructure provisioning in minutes instead of weeks",
      "Realized 38% sustained reduction in monthly cloud expenditure",
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker", "ArgoCD"],
    clientStory: {
      client: "International Retail Conglomerate",
      industry: "Retail & Consumer",
      headline: "Multi-region hybrid cloud migration for peak black-friday scale",
      result: "Zero seconds of downtime during 12x traffic surge while trimming annual infrastructure operational expenditure by 34%.",
    },
  },
  {
    id: "engineering",
    slug: "engineering",
    title: "Digital Product Engineering",
    tagline: "Engineering tomorrow's high-performance digital software",
    shortDescription: "Architecting, developing, and continuously optimizing modern software products, web platforms, mobile ecosystems, and connected IoT solutions.",
    fullDescription: "From visionary product concept to enterprise-scale deployment, OveraTech brings elite software craftsmanship and modern engineering practices. We build resilient, accessible, and delightful digital products that captivate users and drive market leadership.",
    iconName: "Code2",
    keyStats: [
      { value: "300+", label: "Digital products launched" },
      { value: "2.8x", label: "Developer productivity boost" },
      { value: "99.8%", label: "First-pass release quality" },
    ],
    capabilities: [
      {
        title: "Modern Web & Mobile Platforms",
        description: "High-performance React, Next.js, Flutter, and native mobile applications with intuitive UI/UX design.",
      },
      {
        title: "API Ecosystems & Event Architectures",
        description: "Composable MACH architectures (Microservices, API-first, Cloud-native, Headless) for seamless enterprise integration.",
      },
      {
        title: "IoT & Embedded Software",
        description: "Firmware, edge telemetry collectors, and real-time sensor processing pipelines for connected hardware.",
      },
      {
        title: "Continuous Assurance & Automated Testing",
        description: "Shift-left test automation, performance stress testing, and continuous quality gates embedded in CI/CD pipelines.",
      },
    ],
    businessOutcomes: [
      "Accelerated feature cycle time from quarters to daily deployments",
      "Delivered 4.9-star consumer mobile experience across 10M+ active users",
      "Reduced defect escape rate to near-zero with automated verification",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Go", "Python", "React Native", "GraphQL"],
    clientStory: {
      client: "Global Telecommunications Provider",
      industry: "Telecom",
      headline: "Unified omnichannel self-service customer portal",
      result: "Increased digital self-service adoption to 84%, deflecting 12M annual support calls and boosting customer CSAT by 28 points.",
    },
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity & Enterprise Resilience",
    tagline: "Proactive, zero-trust protection for modern distributed enterprises",
    shortDescription: "Safeguard enterprise assets with threat intelligence, zero-trust network access, cloud security posture management, and 24/7 autonomous SecOps.",
    fullDescription: "In an era of hyper-connected supply chains and sophisticated threats, cyber resilience is a foundational business imperative. OveraTech CyberShield combines zero-trust architecture, automated threat detection, DevSecOps, and regulatory compliance into a unified defense ecosystem.",
    iconName: "ShieldCheck",
    keyStats: [
      { value: "99.99%", label: "Threat mitigation rate" },
      { value: "< 5 min", label: "Mean incident response time" },
      { value: "100%", label: "Audit & compliance readiness" },
    ],
    capabilities: [
      {
        title: "Zero-Trust Architecture & IAM",
        description: "Identity-driven micro-segmentation, multi-factor verification, and least-privilege governance.",
      },
      {
        title: "Cloud Security Posture Management (CSPM)",
        description: "Continuous posture evaluation, misconfiguration remediation, and compliance audits across clouds.",
      },
      {
        title: "Autonomous Security Operations (SecOps)",
        description: "AI-driven threat correlation, telemetry anomaly detection, and automated containment response.",
      },
      {
        title: "Application Security & DevSecOps",
        description: "SAST/DAST scanning, software bill of materials (SBOM) tracking, and vulnerability prioritization.",
      },
    ],
    businessOutcomes: [
      "Zero breach incidents across protected enterprise environments",
      "Passed SOC 2 Type II, ISO 27001, and HIPAA compliance without findings",
      "Unified visibility over 180,000 endpoint devices and 1,200 cloud accounts",
    ],
    techStack: ["CrowdStrike", "Palo Alto Networks", "Splunk", "HashiCorp Vault", "Wiz", "Okta", "Snyk"],
    clientStory: {
      client: "Premier Healthcare System",
      industry: "Healthcare",
      headline: "Zero-Trust transformation across 42 hospitals and clinics",
      result: "Protected 8M+ electronic health records (EHR) with zero-compromise security posture and instantaneous audit compliance reporting.",
    },
  },
  {
    id: "enterprise-apps",
    slug: "enterprise-apps",
    title: "Enterprise Applications & ERP/CRM",
    tagline: "Modernize mission-critical enterprise workflows and ecosystems",
    shortDescription: "Strategic consulting, implementation, and managed services across SAP S/4HANA, Salesforce, Oracle Cloud, Workday, and Microsoft Dynamics.",
    fullDescription: "Core enterprise platforms represent the operational backbone of business. OveraTech optimizes and transforms legacy ERP and CRM ecosystems into intelligent, composable digital backbones that connect finance, supply chain, human capital, and customer relationships.",
    iconName: "Layers",
    keyStats: [
      { value: "250+", label: "ERP/CRM implementations" },
      { value: "35%", label: "Faster implementation cycles" },
      { value: "99.5%", label: "Data migration integrity" },
    ],
    capabilities: [
      {
        title: "SAP S/4HANA Transformation",
        description: "Greenfield and brownfield migrations, RISE with SAP implementations, and clean core architectural governance.",
      },
      {
        title: "Salesforce & Customer 360",
        description: "Sales, Service, and Marketing Cloud deployments integrated with real-time enterprise customer data.",
      },
      {
        title: "Supply Chain Orchestration",
        description: "End-to-end supply chain visibility, predictive inventory allocation, and supplier collaboration portals.",
      },
      {
        title: "Human Capital Management (HCM)",
        description: "Workday and SuccessFactors implementations driving modern employee experiences and workforce planning.",
      },
    ],
    businessOutcomes: [
      "Streamlined global financial closing from 14 days down to 3 days",
      "Consolidated 7 disparate legacy CRM systems into single unified 360 view",
      "Reduced supply chain order fulfillment lead time by 42%",
    ],
    techStack: ["SAP S/4HANA", "Salesforce", "Oracle Cloud", "Workday", "Microsoft Dynamics 365", "MuleSoft"],
    clientStory: {
      client: "Automotive Industrial Manufacturer",
      industry: "Manufacturing",
      headline: "Global SAP S/4HANA clean-core migration across 18 countries",
      result: "Unified financial and inventory operations, providing board-level real-time visibility and generating $45M in annual operational savings.",
    },
  },
  {
    id: "experience",
    slug: "experience",
    title: "Experience Design & Digital Consulting",
    tagline: "Connecting human emotion with enterprise digital technology",
    shortDescription: "Human-centered design, customer journey mapping, brand experience strategies, and design systems that scale across enterprise products.",
    fullDescription: "Technology succeeds when it resonates with humans. OveraTech's Experience Design studio fuses qualitative human research, behavioral science, and world-class design systems to create products that engage employees, delight customers, and drive loyalty.",
    iconName: "Sparkles",
    keyStats: [
      { value: "45+", label: "Global design awards" },
      { value: "+38%", label: "Average conversion lift" },
      { value: "120+", label: "Enterprise design systems" },
    ],
    capabilities: [
      {
        title: "Human-Centered Research & Strategy",
        description: "Ethnographic interviews, persona definition, journey mapping, and value proposition design.",
      },
      {
        title: "Design Systems & Token Architecture",
        description: "Scalable, accessible multi-brand design systems for cross-platform enterprise product suites.",
      },
      {
        title: "Omnichannel Commerce Experience",
        description: "Frictionless checkout journeys, personalization engines, and unified digital storefronts.",
      },
      {
        title: "Accessibility & Inclusive Design",
        description: "WCAG 2.2 AAA compliant UX architectures ensuring universal usability and brand equity.",
      },
    ],
    businessOutcomes: [
      "Boosted digital customer retention rates by 26%",
      "Cut frontend design-to-development cycle times in half with design tokens",
      "Achieved 100% digital accessibility compliance across public portals",
    ],
    techStack: ["Figma", "Storybook", "Tailwind CSS", "Design Tokens", "Usertesting", "Hotjar", "WCAG 2.2"],
    clientStory: {
      client: "Global Wealth Management Firm",
      industry: "Financial Services",
      headline: "Next-generation investor portal and mobile advisory app",
      result: "Increased mobile active portfolio management by 115% while earning the Digital Wealth UX Innovation Award.",
    },
  },
];

