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

export const experienceData = [
  {
    id: 1,
    company: "Websure",
    role: "Front End Developer",
    period: "April 2026 – Present",
    location: "London Area, United Kingdom",
    type: "Remote",
    projects: [
      {
        name: "Websure Internal App",
        description: "An agency management platform with an integrated client portal.",
        bullets: [
          "Implemented session-based authentication with RBAC-driven UI access control and leveraged Next.js Server Actions for secure, type-safe data mutations across internal and client portal surfaces.",
          "Integrated Clockify API for real-time retainer hour tracking and sync, optimized performance with SWR-based client-side caching, and enforced audience-aware route protection via a centralized proxy layer.",
        ],
        stack: ["Next.js", "TypeScript", "SWR", "RBAC", "Server Actions"],
      },
    ],
  },
  {
    id: 2,
    company: "Gain Solutions",
    role: "Front End Developer",
    period: "April 2025 – March 2026",
    location: "Mirpur-12, Dhaka",
    type: "On-site",
    projects: [
      {
        name: "Gain.io — CRM SaaS",
        description: "A CRM web application for managing customer relationships and business workflows.",
        bullets: [
          "Main developer behind the CRM — owned the frontend architecture, component system, and end-to-end delivery for a multi-tenant SaaS platform.",
          "Implemented role-based access control for multi-tenant organizations, ensuring secure and scalable collaboration.",
          "Optimized front-end performance with Next.js and streamlined GraphQL APIs, improving speed and efficiency.",
          "Enhanced platform configurability with dynamic user management, billing, and notifications, reducing admin effort by 40%.",
        ],
        stack: ["Next.js", "GraphQL", "RBAC", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Payrun — HRM System",
        description: "A web-based HR management system for employee management, hiring, and leave approval.",
        bullets: [
          "Contributed to developing role-based access and employee management workflows using Next.js, GraphQL, and Ant Design, ensuring secure and scalable HR operations.",
          "Optimized front-end performance and data handling with Next.js and GraphQL, enabling fast time tracking, leave management, and insights dashboards.",
        ],
        stack: ["Next.js", "GraphQL", "Ant Design", "TypeScript"],
      },
      {
        name: "EasyDesk — Ticketing SaaS",
        description: "A web-based platform for simple and efficient customer support management.",
        bullets: [
          "Contributed to Canned Responses and Knowledge Base, helping the team reply faster to common queries and access solutions easily, improving efficiency by 30%.",
          "Worked on Feedback Management, streamlining how user feedback is tracked, prioritized, and assigned, increasing responsiveness and team alignment.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  {
    id: 3,
    company: "EtherTech",
    role: "Junior Front End Developer",
    period: "October 2022 – April 2025",
    location: "Gulshan-1, Dhaka",
    type: "On-site",
    projects: [
      {
        name: "Aranya — B2C Ecommerce",
        description: "A B2C ecommerce web app for a clothing brand.",
        bullets: [
          "Took full responsibility of the frontend using Next.js, Material UI, Redux, and RTK Query, delivering a seamless shopping experience used by 1000+ daily users.",
          "Implemented multi-currency support, shipping integrations (eCourier, DHL), geolocation, and secure payments, improving checkout efficiency and boosting conversion rates by 25%.",
        ],
        stack: ["Next.js", "Redux", "RTK Query", "Material UI"],
      },
      {
        name: "Mave CMS — Headless CMS SaaS",
        description: "A headless CMS solution for dynamic websites.",
        bullets: [
          "Led core features — built frontend and core logic for dynamic website building using Next.js and Ant Design, enabling users to create fully customized websites.",
          "Built interactive components (pages, menus, cards, sliders, forms) for a personalized and responsive user experience, improving content management efficiency.",
        ],
        stack: ["Next.js", "Ant Design", "TypeScript"],
      },
      {
        name: "United Hospital Ltd",
        description: "A healthcare medical website.",
        bullets: [
          "Developed a user-centric medical website with real-time appointment scheduling and profile management, enhancing patient engagement and accessibility.",
          "Integrated ERP API and payment processing, streamlining hospital operations and reducing appointment booking friction by 30%.",
        ],
        stack: ["Next.js", "ERP API", "Payment Gateway"],
      },
    ],
  },
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
