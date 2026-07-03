import websureThumb  from "@/assets/images/projectImages/websure-internal/web_int_bnr.png";
import aranyaThumb   from "@/assets/images/projectImages/aranya/aranya_shop_new-1-cut.png";
import gainThumb     from "@/assets/images/projectImages/gain-io/mockup-1.webp";
import payrunThumb   from "@/assets/images/projectImages/payrun/Browser.png.webp";
import easydeskThumb from "@/assets/images/projectImages/easy-desk/More-Support-Requests-With-AI-Powered-Agents.webp";

export const projects = [
  {
    slug: "websure",
    title: "Websure Internal App",
    category: "Agency Management Platform",
    period: "April 2026 – Present",
    liveUrl: null,
    thumb: websureThumb,
    points: [
      "Session-based auth with RBAC-driven UI access control across internal and client portal surfaces.",
      "Clockify API integration for real-time retainer hour tracking with SWR-based caching.",
      "Centralized proxy layer for audience-aware route protection.",
      "Built reusable component system with shadcn/ui, cutting UI development time across the platform.",
    ],
    stack: ["Next.js", "TypeScript", "SWR", "RBAC", "Server Actions", "shadcn/ui"],
  },
  {
    slug: "aranya",
    title: "Aranya — B2C Ecommerce",
    category: "Ecommerce Platform",
    period: "Oct 2022 – Apr 2025",
    liveUrl: "https://aranya.com.bd",
    thumb: aranyaThumb,
    points: [
      "Full frontend ownership for a clothing brand serving 1000+ daily active users.",
      "Multi-currency support, eCourier & DHL shipping integrations, and geolocation.",
      "Secure payment flow that boosted checkout conversion by 25%.",
    ],
    stack: ["Next.js", "Redux", "RTK Query", "Material UI"],
  },
  {
    slug: "gain-io",
    title: "Gain.io — CRM SaaS",
    category: "CRM Platform",
    period: "Apr 2025 – Mar 2026",
    liveUrl: "https://gain.io/",
    thumb: gainThumb,
    points: [
      "Main developer — owned frontend architecture and end-to-end delivery for a multi-tenant SaaS.",
      "RBAC for multi-tenant orgs with dynamic billing, user management, and notifications.",
      "Reduced admin effort by 40% through platform configurability improvements.",
    ],
    stack: ["Next.js", "GraphQL", "TypeScript", "Tailwind CSS", "RBAC"],
  },
  {
    slug: "payrun",
    title: "Payrun — HRM System",
    category: "HR Management",
    period: "Apr 2025 – Mar 2026",
    liveUrl: "https://payrun.app/",
    thumb: payrunThumb,
    points: [
      "Role-based access and employee management workflows for scalable HR operations.",
      "Fast time tracking, leave management, and insights dashboards via GraphQL.",
    ],
    stack: ["Next.js", "GraphQL", "Ant Design", "TypeScript"],
  },
  {
    slug: "easydesk",
    title: "EasyDesk — Ticketing SaaS",
    category: "Customer Support Platform",
    period: "Apr 2025 – Mar 2026",
    liveUrl: "https://easydesk.app/",
    thumb: easydeskThumb,
    points: [
      "Built Canned Responses and Knowledge Base, improving team reply efficiency by 30%.",
      "Feedback Management module for tracking, prioritizing, and assigning user feedback.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
