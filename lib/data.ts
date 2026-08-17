export const COMPANY_NAME = "TechRynex";
export const COMPANY_TAGLINE =
  "From Licensing to Infrastructure. We've Got IT Covered.";
export const COMPANY_PHONE = "+1 (555) 234-7890";
export const COMPANY_PHONE_DIGITS = "+15552347890";
export const COMPANY_EMAIL = "info@techrynex.com";
export const COMPANY_ADDRESS = "[Street Address, City, ST 00000]";
export const COMPANY_HOURS = "Mon – Fri, 9:00 AM – 6:00 PM";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/partners", label: "Our Partners" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceItem = {
  slug: string;
  number: string;
  icon: "FileText" | "Server" | "ShieldCheck" | "Cloud";
  title: string;
  short: string;
  description: string;
  highlights: [string, string];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "software-licensing",
    number: "01",
    icon: "FileText",
    title: "Software Licensing & Renewals",
    short:
      "Stay compliant and ahead of renewal deadlines with proactive licensing management across every major vendor.",
    description:
      "We track entitlements, renewal dates, and true-up requirements across your entire software estate, so nothing lapses and nothing is over-purchased. Our team benchmarks pricing against the market before every renewal to make sure you're getting the best available terms.",
    highlights: [
      "Renewal tracking with 90/60/30-day alerts",
      "License true-up and compliance audits",
    ],
  },
  {
    slug: "hardware-procurement",
    number: "02",
    icon: "Server",
    title: "Hardware Procurement",
    short:
      "Source servers, laptops, networking gear, and peripherals at competitive, pre-negotiated pricing.",
    description:
      "From single workstations to full data center refreshes, we manage sourcing, configuration, and delivery logistics with trusted global manufacturers, so your hardware arrives ready to deploy, on schedule and on budget.",
    highlights: [
      "Volume pricing through vendor partnerships",
      "Configuration, staging & delivery coordination",
    ],
  },
  {
    slug: "cybersecurity",
    number: "03",
    icon: "ShieldCheck",
    title: "Cybersecurity Solutions",
    short:
      "Protect your business with layered security, from endpoint protection to zero-trust network architecture.",
    description:
      "We design and deploy security programs that match your risk profile, combining endpoint protection, identity and access management, and network segmentation into a single, manageable framework.",
    highlights: [
      "Zero-trust architecture design & rollout",
      "Endpoint detection & response deployment",
    ],
  },
  {
    slug: "cloud-solutions",
    number: "04",
    icon: "Cloud",
    title: "Cloud Solutions",
    short:
      "Migrate, manage, and optimize your infrastructure across Microsoft 365, Azure, and hybrid environments.",
    description:
      "Whether you're moving your first workload to the cloud or optimizing an existing multi-cloud footprint, we plan the migration, manage the cutover, and stay on as your long-term cloud operations partner.",
    highlights: [
      "Migration planning & zero-downtime cutovers",
      "Ongoing cost optimization & monitoring",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We audit your current environment, contracts, and goals.",
  },
  {
    step: "02",
    title: "Proposal",
    description: "You receive a clear, itemized plan and competitive quote.",
  },
  {
    step: "03",
    title: "Delivery",
    description: "We manage procurement, configuration, and deployment.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Your dedicated account team stays on for the long run.",
  },
] as const;


export const VALUE_PROPS = [
  {
    icon: "Building2",
    title: "Enterprise IT Solutions",
    description:
      "End-to-end technology sourcing built for organizations of every size — from a single department refresh to a multi-site infrastructure rollout. We scope the requirement, source the right hardware and software, and manage delivery so your team isn't stitching together five different vendor relationships.",
    highlights: [
      "Hardware, software, cloud, and security under one roof",
      "Scales from single-site to multi-location deployments",
    ],
  },
  {
    icon: "DollarSign",
    title: "Competitive Pricing",
    description:
      "Our vendor relationships translate into real savings on every order, not just the first one. We benchmark pricing against the market at renewal time and flag opportunities to consolidate licenses or right-size hardware before you pay for capacity you don't need.",
    highlights: [
      "Market benchmarking on every renewal",
      "No markup surprises — transparent, itemized quotes",
    ],
  },
  {
    icon: "Globe",
    title: "Trusted Global Brands",
    description:
      "We hold authorized reseller status with the manufacturers your business already relies on, so every product you receive is genuine, warrantied, and backed by the vendor — never gray-market or unverified hardware.",
    highlights: [
      "Authorized reseller status across major manufacturers",
      "Full manufacturer warranty on every order",
    ],
  },
  {
    icon: "Zap",
    title: "Fast Quotes & Support",
    description:
      "A dedicated account team that responds in hours, not days. When a renewal deadline is approaching or a server goes down, you get a direct line to someone who already knows your environment — not a ticket queue.",
    highlights: [
      "Dedicated account team, not a support queue",
      "Quotes typically turned around within one business day",
    ],
  },
] as const;

export const SOLUTIONS_WE_OFFER = [
  {
    title: "Enterprise Servers & Storage",
    icon: "Server",
    description:
      "Rack, tower, and blade servers plus scalable storage arrays, sized and configured for your workloads.",
  },
  {
    title: "Business Laptops & Desktops",
    icon: "Laptop",
    description:
      "Fleet procurement and lifecycle refreshes for growing teams, with imaging and asset tagging available.",
  },
  {
    title: "Cloud & Microsoft 365",
    icon: "Cloud",
    description:
      "Licensing, migration, and management for Microsoft 365, Azure, and hybrid cloud environments.",
  },
  {
    title: "Cybersecurity",
    icon: "ShieldCheck",
    description:
      "Endpoint protection, identity management, and network security designed around your risk profile.",
  },
  {
    title: "Software Licensing",
    icon: "FileText",
    description:
      "Renewal tracking, compliance audits, and vendor-neutral guidance across your entire software estate.",
  },
  {
    title: "Backup & Disaster Recovery",
    icon: "RefreshCcw",
    description:
      "Resilient backup architecture and tested recovery plans that keep your business running.",
  },
] as const;

export const PARTNERS = [
  "Logitech",
  "APC",
  "Samsung",
  "LG",
  "ESET",
  "Kingston",
  "VMware",
  "Veeam",
  "Eaton",
  "Broadcom",
  "Barracuda",
  "Aruba Networks",
  "Ubiquiti",
  "Apple",
  "HP",
  "Dell Technologies",
  "Fortinet",
  "Adobe",
  "Microsoft",
] as const;

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: string;
  description: string;
  highlights: [string, string];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "manufacturing-server-refresh",
    client: "Ferrowest Manufacturing Co.",
    title: "Enterprise Server Refresh",
    category: "Hardware Procurement",
    description:
      "A full data center refresh across three facilities, completed without disrupting production schedules.",
    highlights: [
      "40% reduction in hardware spend vs. prior refresh",
      "Zero unplanned downtime during cutover",
    ],
  },
  {
    slug: "healthcare-zero-trust",
    client: "Brightfield Healthcare Network",
    title: "Zero-Trust Security Rollout",
    category: "Cybersecurity",
    description:
      "Enterprise-wide zero-trust architecture deployed across 12 clinical sites to meet compliance requirements.",
    highlights: [
      "100% of endpoints brought under EDR coverage",
      "Passed compliance audit on first review",
    ],
  },
  {
    slug: "financial-cloud-migration",
    client: "Ashgrove Financial Group",
    title: "Cloud Migration to Microsoft 365",
    category: "Cloud Solutions",
    description:
      "Migrated 800+ mailboxes and legacy file shares to Microsoft 365 with a phased, zero-downtime cutover.",
    highlights: [
      "800+ users migrated with no data loss",
      "22% reduction in annual IT overhead",
    ],
  },
  {
    slug: "retail-hardware-rollout",
    client: "Northgate Retail Group",
    title: "Multi-Site Hardware Rollout",
    category: "Hardware Procurement",
    description:
      "Standardized POS and networking hardware deployed across 60 store locations on a compressed timeline.",
    highlights: [
      "60 locations outfitted in under 8 weeks",
      "Single point of contact for the entire rollout",
    ],
  },
];

export const AWARDS = [
  "Top IT Reseller, 2025",
  "Best Channel Partner",
  "Customer Service Excellence",
  "Fastest Growing MSP",
  "Vendor Partner of the Year",
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Facebook", href: "#" },
] as const;
