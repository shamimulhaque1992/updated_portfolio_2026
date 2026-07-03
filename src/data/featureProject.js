export const gainioProject = {
  slug: "gain-io",
  title: "Gain.io",
  tagline: "CRM SaaS Platform",
  category: "Multi-Tenant CRM SaaS",
  role: "Main Frontend Developer",
  period: "April 2025 – March 2026",
  company: "Gain Solutions",
  liveUrl: "https://gain.io",
  stack: [
    "Next.js 15", "React 19", "Apollo Client", "GraphQL",
    "Redux Toolkit", "Ant Design 6", "Tailwind CSS",
    "Stripe", "TypeScript", "i18next", "PostHog", "RxJS",
  ],
  overview: "Gain.io is a full-featured multi-tenant CRM SaaS platform built for managing customer relationships, sales pipelines, and business workflows. I was the main frontend developer — responsible for the architecture, component system, and end-to-end delivery of the entire frontend.",
  highlights: [
    {
      title: "Multi-Tenant Architecture",
      points: [
        "Subdomain-based tenant isolation — each organization runs on its own *.gain.io subdomain.",
        "RBAC-driven UI access control with role and permission-aware component rendering.",
        "Dynamic organization switching with context-aware state management via Redux Toolkit.",
      ],
    },
    {
      title: "Core CRM Modules",
      points: [
        "Contacts module — Persons & Organizations with table, card, and kanban views.",
        "Deals pipeline — drag-and-drop Kanban board with customizable deal stages.",
        "Tasks & Calendar — full event and task management with reminders and push notifications.",
        "Emails — compose, reply, label management, and threaded conversation UI.",
        "Notes — rich text editor with file attachments and contact linking.",
        "Offers — proposal builder with customizable templates and PDF export.",
      ],
    },
    {
      title: "Platform & Billing",
      points: [
        "Stripe integration for subscription management, plan upgrades, and invoice history.",
        "Trial status banners, feature gating, and subscription expiry modals.",
        "Dynamic billing and user management reducing admin effort by 40%.",
      ],
    },
    {
      title: "Performance & DX",
      points: [
        "Apollo Client with GraphQL for efficient, cache-aware data fetching across all modules.",
        "Optimized renders with infinite scroll, lazy loading, and skeleton states.",
        "i18next multi-language support with dynamic backend resource loading.",
        "PostHog analytics integration for user behavior tracking.",
        "Husky + ESLint + Prettier enforced on pre-commit and pre-push hooks.",
      ],
    },
  ],
};


