export const navItems = [
  { id: 1,  title: "Hero",                  slug: "homeIntro" },
  { id: 2,  title: "About",                 slug: "aboutSection" },
  { id: 3,  title: "Experience",            slug: "experienceSection" },
  { id: 4,  title: "Skills",                slug: "skillsSection" },
  { id: 5,  title: "Projects",              slug: "landingProjects" },
  { id: 6,  title: "Featured Work",         slug: "featuredWork" },
  { id: 7,  title: "Services",              slug: "servicesSection" },
  { id: 8,  title: "Education",             slug: "educationSection" },
  { id: 9,  title: "Awards & Certs",        slug: "awardsSection" },
  { id: 10, title: "Contact",               slug: "contactSection" },
];

export const aboutData = {
  bio: "I'm a frontend-focused full stack developer based in Dhaka, Bangladesh, with 3+ years of experience building production-grade web applications. My core is frontend — architecture, component systems, performance — but I'm equally comfortable on the backend with Express, PostgreSQL, Prisma, and TypeScript. I grew from a junior dev into the main developer behind a full CRM SaaS, owning the stack from UI to API.",
  highlights: [
    { value: "3+",    label: "Years of Experience" },
    { value: "6+",    label: "Products Shipped" },
    { value: "1000+", label: "Daily Active Users" },
    { value: "2",     label: "Awards Won" },
  ],
  focus: [
    {
      title: "Frontend Architecture",
      description: "Building scalable component systems, design tokens, and modular codebases in Next.js and React — interfaces that perform and teams can grow with.",
    },
    {
      title: "Frontend Performance",
      description: "Code splitting, lazy loading, caching strategies, and render optimization — making sure every millisecond is accounted for before it hits production.",
    },
    {
      title: "UI/UX Implementation",
      description: "Translating designs into pixel-perfect, accessible interfaces with smooth interactions — bridging the gap between what Figma shows and what users actually feel.",
    },
    {
      title: "Backend & API Architecture",
      description: "Structuring Express servers with clean separation of concerns, type-safe routes with TypeScript, and schemas that scale — built to last, not just to work.",
    },
    {
      title: "API Integration",
      description: "Connecting frontends to REST and GraphQL APIs with RTK Query, SWR, and custom hooks — handling auth, caching, error states, and real-time sync cleanly.",
    },
    {
      title: "AI-Driven Development",
      description: "Leveraging AI tooling to move faster, write better code, and solve problems that would otherwise take days — not as a shortcut, but as a force multiplier.",
    },
  ],
  currentRole: "Front End Developer at Websure, London",
  availability: "Open to remote opportunities",
};

export const siteConfig = {
  name: "Khandoker Shamimul Haque",
  role: "AI driven full stack software engineer",
  location: "Uttar Badda, Dhaka, Bangladesh",
  email: "khandokershamimulhaque@gmail.com",
  phone: "+880 1779-312970",
  resumeUrl: "/assets/data/khandoker_shamimul_haque_resume.pdf",
  heroSummary:
    "Over 3 years, I've gone from writing my first component to being the main developer behind a CRM SaaS — owning the architecture, the decisions, and the delivery. Along the way, I built the full frontend of an ecommerce platform serving 1000+ daily users, led the core features of a headless CMS, and contributed meaningfully to an HRM and a ticketing platform. I care about code that scales, interfaces that feel right, and work that actually ships.",
  heroHighlights: ["Next.js", "PostgreSQL", "Express.js", "Prisma"],
  socialLinks: {
    github: "#",
    linkedin: "#",
    facebook: "#",
  },
};
