export interface JobListing {
  id: string;
  title: string;
  department: "Engineering" | "AI & Data Science" | "Cloud Architecture" | "Consulting & Strategy" | "Cybersecurity";
  location: string;
  type: "Full-Time" | "Remote Friendly" | "Hybrid";
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "lead-ai-agent-architect",
    title: "Lead AI & Autonomous Agent Architect",
    department: "AI & Data Science",
    location: "San Francisco, CA / Hybrid",
    type: "Full-Time",
    experience: "8+ years",
    description: "Lead the architectural design and deployment of enterprise-grade multi-agent autonomous swarms and LLM governance pipelines for Fortune 500 clients.",
    responsibilities: [
      "Architect multi-agent cognitive frameworks integrating LangChain, LlamaIndex, and custom vector search engines.",
      "Collaborate with client executive leadership to translate operational bottlenecks into governed AI agent workflows.",
      "Establish LLMOps best practices, synthetic test evaluation benchmarks, and hallucination guardrails.",
    ],
    qualifications: [
      "MS or PhD in Computer Science, Machine Learning, or related field.",
      "Proven track record deploying production LLM or distributed autonomous agent systems at scale.",
      "Proficiency in Python, PyTorch, LangChain, vector databases (Pinecone/Milvus), and cloud container platforms.",
    ],
  },
  {
    id: "principal-cloud-architect",
    title: "Principal Multi-Cloud Architect",
    department: "Cloud Architecture",
    location: "New York, NY / Hybrid",
    type: "Full-Time",
    experience: "10+ years",
    description: "Drive large-scale enterprise cloud modernization initiatives across AWS, Azure, and Google Cloud environments.",
    responsibilities: [
      "Design zero-downtime migration blueprints for mission-critical core banking and retail applications.",
      "Implement Infrastructure-as-Code (Terraform) pipelines and GitOps deployment workflows.",
      "Conduct FinOps cloud cost optimization and architectural governance audits.",
    ],
    qualifications: [
      "Senior certifications in AWS (Solutions Architect Professional) and/or Azure / GCP.",
      "Deep expertise in Kubernetes, service meshes (Istio), microservices design, and network security.",
    ],
  },
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Product Engineer",
    department: "Engineering",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experience: "5+ years",
    description: "Craft ultra-performant, accessible digital customer portals and modern web platforms using Next.js, React, and TypeScript.",
    responsibilities: [
      "Build modular, responsive frontend architectures with state-of-the-art UI/UX fidelity.",
      "Integrate RESTful and GraphQL microservice endpoints with robust error boundary handling.",
      "Mentor junior software engineers and champion automated testing standards.",
    ],
    qualifications: [
      "Expert-level TypeScript, Next.js, React, and Tailwind CSS capability.",
      "Experience with high-traffic enterprise applications and modern web performance optimization (Core Web Vitals).",
    ],
  },
  {
    id: "zero-trust-security-director",
    title: "Director of Zero-Trust Cyber Resilience",
    department: "Cybersecurity",
    location: "Frankfurt, Germany / Hybrid",
    type: "Full-Time",
    experience: "12+ years",
    description: "Spearhead cybersecurity posture design, threat response automation, and regulatory compliance for global financial and industrial clients.",
    responsibilities: [
      "Architect identity-first zero-trust network access frameworks across distributed multi-cloud footprints.",
      "Oversee automated incident response runbooks and continuous penetration testing campaigns.",
      "Ensure adherence to NIS2, GDPR, DORA, and ISO 27001 mandates.",
    ],
    qualifications: [
      "CISSP, CISM, or equivalent executive cyber resilience accreditation.",
      "Extensive experience advising C-suite leaders during complex security transformations.",
    ],
  },
  {
    id: "principal-strategy-consultant",
    title: "Principal Enterprise Transformation Consultant",
    department: "Consulting & Strategy",
    location: "Singapore / Hybrid",
    type: "Full-Time",
    experience: "8+ years",
    description: "Partner with C-suite executives to shape digital roadmaps, operating model reinventions, and value realization frameworks.",
    responsibilities: [
      "Conduct digital maturity assessments and benchmark enterprise capabilities against industry peers.",
      "Structure multi-year digital transformation business cases and change management programs.",
      "Lead cross-functional client workshops and executive steerco presentations.",
    ],
    qualifications: [
      "MBA from a top business school or equivalent corporate strategy consulting experience.",
      "Demonstrated ability to drive $50M+ digital transformation programs to successful execution.",
    ],
  },
];

