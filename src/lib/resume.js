export const navItems = [
  { id: 1, title: "Hero", slug: "homeIntro" },
  { id: 2, title: "About", slug: "aboutSection" },
  { id: 3, title: "Experience", slug: "experienceSection" },
  { id: 4, title: "Skills", slug: "skillsSection" },
  { id: 5, title: "Projects", slug: "landingProjects" },
  { id: 6, title: "Featured Work", slug: "featuredWork" },
  { id: 7, title: "Services", slug: "servicesSection" },
  { id: 8, title: "Education", slug: "educationSection" },
  { id: 9, title: "Awards & Certs", slug: "awardsSection" },
  { id: 10, title: "Contact", slug: "contactSection" },
];

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "Next.js",
        icon: "SiNextdotjs",
        tag: "Primary Framework",
        points: [
          "Built a full CRM SaaS, ecommerce platform, HRM, ticketing platform, and headless CMS with it.",
          "Leveraged App Router, Server Actions, and Server Components for performance and type safety.",
          "Owned the architecture end-to-end across multiple production apps.",
        ],
      },
      {
        name: "React.js",
        icon: "SiReact",
        tag: "Core Library",
        points: [
          "Deep understanding of component patterns, custom hooks, and context API.",
          "Optimized renders using memo, useCallback, and useMemo in data-heavy dashboards.",
          "Foundation of every frontend product I've shipped.",
        ],
      },
      {
        name: "Redux Toolkit",
        icon: "SiRedux",
        tag: "State Management",
        points: [
          "Managed complex global state in the CRM and ecommerce platform.",
          "Built RTK slices for cart, user session, filters, and multi-step flows.",
          "Used middleware for side effects and async logic.",
        ],
      },
      {
        name: "RTK Query",
        icon: "SiRedux",
        tag: "Data Fetching",
        points: [
          "API layer of choice for REST-heavy apps.",
          "Handled caching, invalidation, and optimistic updates in Aranya's product and order flows.",
          "Reduced boilerplate significantly compared to manual fetch logic.",
        ],
      },
      {
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        tag: "Styling",
        points: [
          "Used across all recent projects including this portfolio.",
          "Built full design systems with custom tokens, responsive layouts, and dark mode.",
          "Paired with CSS variables for theme-aware component styling.",
        ],
      },
      {
        name: "shadcn/ui",
        icon: "SiShadcnui",
        tag: "Component Library",
        points: [
          "Component system of choice for Websure internal app.",
          "Customized primitives to match brand identity.",
          "Built accessible forms, modals, command palettes, and data tables on top of it.",
        ],
      },
      {
        name: "Material UI",
        icon: "SiMui",
        tag: "Component Library",
        points: [
          "Built the full Aranya ecommerce storefront UI with MUI.",
          "Customized theme tokens for brand consistency across product, cart, and checkout.",
          "Used Grid, DataGrid, and Dialog components extensively.",
        ],
      },
      {
        name: "Ant Design",
        icon: "SiAntdesign",
        tag: "Component Library",
        points: [
          "Used in Mave CMS and Payrun HRM for data-dense dashboards.",
          "Leveraged Table, Form, DatePicker, and Tree components for complex workflows.",
          "Customized the design token system to match product branding.",
        ],
      },
      {
        name: "TypeScript",
        icon: "SiTypescript",
        tag: "Type Safety",
        points: [
          "Adopted across recent projects for type-safe props, API responses, and server actions.",
          "Significantly reduced runtime bugs in the Websure internal app.",
          "Used with Prisma and Express for end-to-end type safety.",
        ],
      },
      {
        name: "Vue.js",
        icon: "SiVuedotjs",
        tag: "Comfortable",
        points: [
          "Worked with Vue on internal tooling projects.",
          "Comfortable with the composition API and reactive state.",
          "Familiar with Vue Router and Pinia for state management.",
        ],
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Express.js",
        icon: "SiExpress",
        tag: "Server Framework",
        points: [
          "Built REST APIs structured with MVC patterns.",
          "Wrote custom middleware for auth, error handling, and request validation.",
          "Integrated with PostgreSQL via Prisma for full stack projects.",
        ],
      },
      {
        name: "PostgreSQL",
        icon: "SiPostgresql",
        tag: "Relational DB",
        points: [
          "Database of choice for structured, relational data.",
          "Designed schemas, wrote complex joins, and optimized queries for performance.",
          "Used with Prisma ORM for type-safe database access.",
        ],
      },
      {
        name: "Prisma",
        icon: "SiPrisma",
        tag: "ORM",
        points: [
          "Type-safe database access layer used with PostgreSQL.",
          "Handled migrations, relations, and seeding with a schema-first workflow.",
          "Reduced raw SQL errors and improved developer experience significantly.",
        ],
      },
      {
        name: "MongoDB",
        icon: "SiMongodb",
        tag: "NoSQL DB",
        points: [
          "Used for flexible, document-based data models on earlier projects.",
          "Comfortable with aggregation pipelines and index optimization.",
          "Paired with Mongoose for schema validation.",
        ],
      },
      {
        name: "GraphQL",
        icon: "SiGraphql",
        tag: "API Layer",
        points: [
          "Consumed GraphQL APIs extensively in Gain.io CRM and Payrun HRM.",
          "Wrote queries, mutations, and fragments for complex data requirements.",
          "Handled optimistic UI updates and cache management on the client.",
        ],
      },
    ],
  },
  {
    category: "DevOps",
    skills: [
      {
        name: "Git",
        icon: "SiGit",
        tag: "Version Control",
        points: [
          "Daily driver across all teams and projects.",
          "Managed feature branches, PRs, rebasing, and conflict resolution.",
          "Followed conventional commits and structured branching strategies.",
        ],
      },
      {
        name: "Docker",
        icon: "SiDocker",
        tag: "Containerization",
        points: [
          "Containerized development environments and production builds.",
          "Used Docker Compose for local multi-service setups.",
          "Ensured consistent environments across dev and production.",
        ],
      },
      {
        name: "DigitalOcean",
        icon: "SiDigitalocean",
        tag: "Cloud Platform",
        points: [
          "Deployed and managed production apps on Droplets and App Platform.",
          "Configured environment variables, domains, and SSL.",
          "Monitored server health and managed basic scaling.",
        ],
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Figma",
        icon: "SiFigma",
        tag: "Design",
        points: [
          "Used for design handoff and inspecting specs from designers.",
          "Built my own UI mockups before implementation.",
          "Comfortable translating Figma frames to pixel-perfect code.",
        ],
      },
      {
        name: "Canva",
        icon: "SiCanva",
        tag: "Visual Design",
        points: [
          "Created visual assets and presentations for internal use.",
          "Designed brand materials and social media content.",
          "Used for quick mockups and client-facing deliverables.",
        ],
      },
      {
        name: "SWR",
        icon: "SiVercel",
        tag: "Data Fetching",
        points: [
          "Used in Websure for client-side caching and revalidation.",
          "Implemented stale-while-revalidate pattern for real-time retainer hour tracking.",
          "Reduced redundant API calls with smart cache invalidation.",
        ],
      },
    ],
  },
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
        description:
          "An agency management platform with an integrated client portal.",
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
        description:
          "A CRM web application for managing customer relationships and business workflows.",
        bullets: [
          "Main engineer behind the CRM — owned the frontend architecture, component system, and end-to-end delivery for a multi-tenant SaaS platform.",
          "Implemented role-based access control for multi-tenant organizations, ensuring secure and scalable collaboration.",
          "Optimized front-end performance with Next.js and streamlined GraphQL APIs, improving speed and efficiency.",
          "Enhanced platform configurability with dynamic user management, billing, and notifications, reducing admin effort by 40%.",
        ],
        stack: ["Next.js", "GraphQL", "RBAC", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Payrun — HRM System",
        description:
          "A web-based HR management system for employee management, hiring, and leave approval.",
        bullets: [
          "Contributed to developing role-based access and employee management workflows using Next.js, GraphQL, and Ant Design, ensuring secure and scalable HR operations.",
          "Optimized front-end performance and data handling with Next.js and GraphQL, enabling fast time tracking, leave management, and insights dashboards.",
        ],
        stack: ["Next.js", "GraphQL", "Ant Design", "TypeScript"],
      },
      {
        name: "EasyDesk — Ticketing SaaS",
        description:
          "A web-based platform for simple and efficient customer support management.",
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
  bio: "I'm a Ai driven full stack engineer based in Dhaka, Bangladesh, with 3+ years of experience building production-grade web applications. My core is frontend — architecture, component systems, performance — but I'm equally comfortable on the backend with Express, PostgreSQL, Prisma, and TypeScript. I grew from a junior dev into the main engineer behind a full CRM SaaS front end part, owning the stack from UI to API.",
  highlights: [
    { value: "3+", label: "Years of Experience" },
    { value: "10+", label: "Products Shipped" },
    { value: "24/7", label: "Learning Mindset" },
    { value: "2", label: "Awards Won" },
  ],
  focus: [
    {
      title: "Frontend Architecture",
      description:
        "Building scalable component systems, design tokens, and modular codebases in Next.js and React — interfaces that perform and teams can grow with.",
    },
    {
      title: "Frontend Performance",
      description:
        "Code splitting, lazy loading, caching strategies, and render optimization — making sure every millisecond is accounted for before it hits production.",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Translating designs into pixel-perfect, accessible interfaces with smooth interactions — bridging the gap between what Figma shows and what users actually feel.",
    },
    {
      title: "Backend & API Architecture",
      description:
        "Structuring Express servers with clean separation of concerns, type-safe routes with TypeScript, and schemas that scale — built to last, not just to work.",
    },
    {
      title: "API Integration",
      description:
        "Connecting frontends to REST and GraphQL APIs with RTK Query, SWR, and custom hooks — handling auth, caching, error states, and real-time sync cleanly.",
    },
    {
      title: "AI-Driven Development",
      description:
        "Leveraging AI tooling to move faster, write better code, and solve problems that would otherwise take days — not as a shortcut, but as a force multiplier.",
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
  resumeUrl: "/khandoker_shamimul_haque_resume.pdf",
  heroSummary:
    "Over 3 years, I've gone from writing my first component to being the main engineer behind a CRM SaaS — owning the architecture, the decisions, and the delivery. Along the way, I built the full frontend of an ecommerce platform serving 1000+ daily users, led the core features of a headless CMS, and contributed meaningfully to an HRM and a ticketing platform. I care about code that scales, interfaces that feel right, and work that actually ships.",
  heroHighlights: ["Next.js", "PostgreSQL", "Express.js", "Prisma"],
  socialLinks: {
    github: "https://github.com/shamimulhaque1992",
    linkedin: "https://www.linkedin.com/in/khandoker-shamimul-haque/",
    twitter: "https://twitter.com/shamimul_hq1992",
    facebook: "https://www.facebook.com/khandokershamimulhaque.kashfee.58",
  },
};
