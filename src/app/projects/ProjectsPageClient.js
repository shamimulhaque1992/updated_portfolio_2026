"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";

// ── Case study content per project ──────────────────────────────────────────
const caseStudies = {
  websure: {
    responsibilities: [
      "Owned the full frontend architecture of the internal app from scratch, making key decisions on component structure, data-fetching strategy, and auth flow.",
      "Implemented session-based authentication and RBAC-driven UI, ensuring each user role sees only the relevant surfaces and actions.",
      "Integrated Clockify API with SWR-based caching to display real-time retainer hour tracking without hammering the external API.",
      "Built a centralized proxy layer for audience-aware route protection, separating internal staff routes from client portal routes.",
      "Developed reusable UI components with shadcn/ui, establishing a consistent design system across the platform.",
      "Wrote type-safe Server Actions for all data mutations, maintaining a clean boundary between server and client code.",
    ],
    challenges: [
      "Implementing session-based authentication that works seamlessly across both internal staff and external client portal surfaces without duplicating auth logic.",
      "Building RBAC-driven UI where components conditionally render based on user roles, requiring a robust permission system that scales with new roles.",
      "Integrating Clockify API for real-time retainer hour tracking while keeping the UI responsive — the external API had rate limits that required careful caching strategies.",
      "Enforcing audience-aware route protection through a centralized proxy layer to prevent unauthorized access between internal and client-facing routes.",
      "Ensuring type-safe data mutations with Next.js Server Actions while maintaining a clean separation between server and client code.",
    ],
    improvements: [
      "Introduce WebSocket or Server-Sent Events for live retainer hour updates instead of polling.",
      "Expand the RBAC system to support custom permission sets per client organization.",
      "Add an audit log feature to track all mutations performed via Server Actions for compliance.",
      "Implement offline support with optimistic UI updates using SWR's mutation capabilities.",
      "Build a mobile-responsive client portal view for on-the-go access.",
    ],
  },

  "gain-io": {
    responsibilities: [
      "Served as the main frontend developer, owning the architecture and end-to-end delivery of the multi-tenant CRM SaaS platform.",
      "Designed and implemented the RBAC system for multi-tenant organizations, ensuring isolated data and role configurations per org.",
      "Built dynamic billing, user management, and notification modules that adapt to each tenant's configuration.",
      "Optimized GraphQL queries using fragments and memoization to prevent over-fetching across complex relational CRM data.",
      "Collaborated closely with backend teams to align on GraphQL schema changes without breaking existing frontend queries.",
      "Improved platform configurability, reducing admin effort by 40% through self-service settings and dynamic UI.",
    ],
    challenges: [
      "Designing a multi-tenant RBAC system where each organization has isolated data and role configurations without performance degradation.",
      "Streamlining GraphQL queries to avoid over-fetching in a CRM with complex relational data — required careful query design and fragment reuse.",
      "Building dynamic billing and notification modules that adapt to each tenant's configuration without hardcoded logic.",
      "Ensuring the UI remained performant as the number of tenants and users scaled, requiring memoization and lazy loading strategies.",
      "Coordinating with backend teams to align GraphQL schema changes without breaking existing frontend queries.",
    ],
    improvements: [
      "Introduce real-time CRM activity feeds using GraphQL subscriptions.",
      "Add AI-powered customer insights and lead scoring within the dashboard.",
      "Build a self-service onboarding flow for new tenant organizations.",
      "Implement advanced analytics and reporting with exportable data.",
      "Add mobile app support via React Native for field sales teams.",
    ],
  },
  payrun: {
    responsibilities: [
      "Built role-based access views for employees, managers, and HR admins, ensuring each persona sees the correct data and actions.",
      "Developed leave approval workflows with multi-level manager hierarchies, handling edge cases like rejections and re-applications.",
      "Integrated real-time time tracking with GraphQL subscriptions, syncing data across employee dashboards without excessive re-renders.",
      "Built the hiring pipeline UI covering job postings, applications, offer management, and position closures.",
      "Optimized the insights dashboard GraphQL queries that aggregate data across many employees and time periods.",
      "Ensured the platform scales gracefully for large HR teams through lazy loading and memoization strategies.",
    ],
    challenges: [
      "Building complex leave approval workflows with multi-level manager hierarchies while keeping the UI intuitive for HR admins.",
      "Integrating time tracking with real-time data sync across employee dashboards without causing excessive re-renders.",
      "Designing role-based views where employees, managers, and HR admins see different data and actions on the same pages.",
      "Handling edge cases in hiring workflows such as offer rejections, re-applications, and position closures gracefully in the UI.",
      "Optimizing GraphQL queries for the insights dashboard which aggregates data across many employees and time periods.",
    ],
    improvements: [
      "Add automated payroll calculation based on time tracking and leave data.",
      "Introduce a mobile-first employee self-service portal for leave requests and time logging.",
      "Build predictive analytics for workforce planning using historical HR data.",
      "Integrate with third-party job boards for streamlined hiring pipeline management.",
      "Add document management for employee contracts and compliance records.",
    ],
  },
  easydesk: {
    responsibilities: [
      "Built the Canned Responses module with rich text formatting and variable placeholder support, improving team reply efficiency by 30%.",
      "Developed the Knowledge Base with a hierarchical category structure navigable by both support agents and end customers.",
      "Implemented the Feedback Management module for tracking, prioritizing, and assigning user feedback across the support team.",
      "Ensured real-time ticket assignment updates are reflected across all agent dashboards simultaneously.",
      "Collaborated with the product team to balance feature richness with simplicity for non-technical users.",
      "Maintained consistent TypeScript types across all modules to prevent runtime errors in the support workflow.",
    ],
    challenges: [
      "Building a canned responses system that supports rich text formatting and variable placeholders while remaining fast to search and insert during live support sessions.",
      "Designing the knowledge base with a hierarchical category structure that is easy to navigate for both support agents and end customers.",
      "Implementing feedback prioritization logic that accounts for multiple factors (severity, recency, customer tier) without overwhelming the UI.",
      "Ensuring real-time ticket assignment updates are reflected across all agent dashboards simultaneously.",
      "Balancing feature richness with simplicity — the platform needed to be powerful enough for support teams but simple enough for non-technical users.",
    ],
    improvements: [
      "Add AI-powered response suggestions based on ticket content and historical canned responses.",
      "Introduce SLA tracking and automated escalation for overdue tickets.",
      "Build a customer-facing self-service portal integrated with the knowledge base.",
      "Add sentiment analysis on feedback to automatically flag negative trends.",
      "Implement multi-channel support (email, chat, social) within a unified inbox.",
    ],
  },
  aranya: {
    responsibilities: [
      "My responsibility was to design and develop the front end of that website including the integration of the payment gateway and Facebook pixel integration.",
      "The website showcases a diverse collection of clothing options, from trendy casual wear to elegant formal attire. Customers can also explore accessories including handbags, footwear, and jewelry.",
      "Implemented multi-currency pricing, eCourier and DHL shipping integrations, and geolocation-based currency detection.",
      "Built the cart and checkout flow with SSLCOMMERZ payment gateway integration, boosting checkout conversion by 25%.",
      "Managed state with Redux Toolkit and RTK Query, handling complex cart variants (color, size combinations) persisted across sessions.",
      "Ensured a seamless shopping experience with user-friendly navigation, secure payment options, and prompt delivery services.",
    ],
    challenges: [
      "Implementing multi-currency pricing that recalculates in real time across cart, checkout, and order history without stale values.",
      "Integrating eCourier and DHL shipping APIs with dynamic rate calculation based on product weight and destination.",
      "Managing a large product catalog with pagination, lazy loading, and infinite scroll simultaneously without performance degradation.",
      "Handling complex cart state with multiple product variants (color, size combinations) persisted across sessions.",
      "Synchronizing payment status from SSLCOMMERZ with order state in real time to prevent order fulfillment errors.",
    ],
    improvements: [
      "Introduce a wishlist-to-cart conversion funnel with email reminders for abandoned wishlists.",
      "Add AI-powered product recommendations based on browsing and purchase history.",
      "Build a mobile app using React Native to extend the shopping experience.",
      "Implement a loyalty points system to improve customer retention.",
      "Add real-time inventory tracking to prevent overselling on high-demand items.",
    ],
  },
  "mave-cms": {
    responsibilities: [
      "Spearheaded the development of a versatile headless CMS using Next.js and Ant Design, tailored for companies to manage their portfolio websites efficiently.",
      "Crafted the front-end including essential features such as a dynamic page builder and custom component creation like cards and sliders.",
      "Ensured seamless data synchronization with the server, prioritizing logical functionalities for an intuitive user experience.",
      "Implemented robust functionalities for updating page data and managing component data, along with seamless media uploads including images, videos, and PDFs.",
      "Provided businesses complete control over their website content, empowering them to showcase their portfolios with ease and sophistication.",
    ],
    challenges: [
      "Creating multiple sections to build a complete page and persisting changes during the page-building process without data loss.",
      "Updating and deleting the exact same component and the exact same element of the component without side effects.",
      "Managing different types of data to create different types of components dynamically.",
      "Handling multiple file uploads and maintaining the correct order for each respective component.",
      "Providing multi-language content features while synchronizing with existing and deleted data to avoid bugs.",
    ],
    improvements: [
      "Add a drag-and-drop page builder interface for more intuitive component arrangement.",
      "Introduce version history and rollback for page content changes.",
      "Build a live preview mode that renders the page as it would appear on the frontend.",
      "Add collaborative editing support for multiple users working on the same page.",
      "Implement a component marketplace for sharing reusable components across projects.",
    ],
  },
  "united-hospital": {
    responsibilities: [
      "Developed some of the major pages of the website and resolved critical bugs across the platform.",
      "Implemented department selection via interactive male and female body diagrams, mapping body parts to the correct hospital departments.",
      "Built appointment scheduling with real-time slot synchronization for individual doctors using the existing ERP API.",
      "Developed the user dashboard showing checkup reports, previous and upcoming appointments, and prescriptions.",
      "Integrated SSLCOMMERZ payment gateway for online appointment booking.",
      "Implemented emergency services request flow for ambulance and home service.",
    ],
    challenges: [
      "Showing the correct department according to the selected body parts from interactive diagrams.",
      "Integrating the existing ERP API with the web app while handling inconsistent data formats.",
      "Synchronizing available appointment slots for a particular doctor in real time.",
      "Handling requests for unavailable slots gracefully without breaking the booking flow.",
      "Displaying uncertain health checkup reports and prescriptions correctly in the user dashboard.",
    ],
    improvements: [
      "Add telemedicine support for virtual consultations directly within the platform.",
      "Introduce push notifications for appointment reminders and report availability.",
      "Build a mobile app for patients to access their health records on the go.",
      "Add AI-powered symptom checker to guide patients to the right department.",
      "Implement real-time bed availability tracking for emergency admissions.",
    ],
  },
  "al-muslim-group": {
    responsibilities: [
      "Led the development of a dynamic website using Next.js, Bootstrap, AOS, and SwiperJS to showcase company profile, certificates, machinery, and more.",
      "Designed and developed custom components tailored to display company information, certificates, machinery details, and sister concerns.",
      "Ensured seamless integration of media items such as images and videos for enhanced visual appeal.",
      "Implemented intuitive navigation and user interface elements for effortless exploration of website content.",
      "Synchronized data with the server to ensure real-time updates and consistency across all sections.",
    ],
    challenges: [
      "Organizing and presenting diverse content sections like company profile, certificates, and machinery effectively within the website's structure.",
      "Ensuring seamless integration of media items such as images and videos within the website.",
      "Maintaining consistency in design and layout across various sections of the website.",
      "Optimizing website performance for smooth loading and browsing experience.",
      "Implementing user-friendly navigation for easy exploration of different sections.",
    ],
    improvements: [
      "Add a product catalog with filtering and search for B2B buyers.",
      "Introduce a sustainability dashboard showcasing CSR initiatives and environmental metrics.",
      "Build a multilingual version to reach international buyers.",
      "Add an inquiry and quotation request system for potential partners.",
      "Implement a news and updates section with CMS integration.",
    ],
  },
  slic: {
    responsibilities: [
      "Led the development of a dynamic insurance website using Next.js, Material UI, SwiperJS, and Axios.",
      "Designed and implemented the premium calculator feature to provide users with accurate insurance estimates based on various input factors.",
      "Developed components to display company details, board members, partners, trust committee, investors, policies, notices, and updates.",
      "Ensured seamless integration of data from external sources and APIs for dynamic content population.",
      "Optimized website performance and user experience for enhanced usability across devices.",
      "Conducted testing and debugging to ensure the website's functionality and reliability.",
    ],
    challenges: [
      "Developing a robust premium calculator that accurately calculates insurance amounts based on various factors.",
      "Integrating data from multiple sources such as APIs and databases to populate dynamic content.",
      "Designing an intuitive user interface for easy navigation and information retrieval.",
      "Ensuring data security and privacy compliance for sensitive information like user details and policies.",
      "Implementing dynamic updates for notices and announcements while maintaining website performance.",
    ],
    improvements: [
      "Add an online policy purchase and renewal flow.",
      "Introduce a customer portal for policyholders to track claims and payments.",
      "Build a mobile app for agents to manage client portfolios on the go.",
      "Add a chatbot for instant answers to common insurance queries.",
      "Implement document upload for claim submissions directly on the website.",
    ],
  },
  aygaz: {
    responsibilities: [
      "Led the front-end development of the UnitedAygaz website, collaborating with the team to ensure project success.",
      "Designed and developed a user-friendly interface for showcasing products, pricing, and delivery options for cylinder gas, auto gas, and bulk gas.",
      "Integrated dual-language feature supporting both English and Bengali for wider accessibility.",
      "Implemented the order management system and dealer request form to facilitate user interactions.",
      "Collaborated with the team to design and develop the front end of the CMS for the website.",
      "Ensured seamless integration of data from the CMS to provide dynamic content updates.",
    ],
    challenges: [
      "Integrating dual-language support for seamless switching between English and Bengali content.",
      "Designing a user-friendly interface that caters to both individual consumers and industrial clients.",
      "Implementing an intuitive order management system to handle product orders efficiently.",
      "Handling dynamic content updates and synchronization between front end and CMS.",
      "Optimizing website performance for handling heavy traffic during peak times.",
    ],
    improvements: [
      "Add real-time order tracking for cylinder gas deliveries.",
      "Introduce a dealer portal for managing dealership applications and communications.",
      "Build a mobile app for field agents to manage orders and deliveries.",
      "Add a safety information hub with downloadable guides and videos.",
      "Implement a customer loyalty program for repeat orders.",
    ],
  },
  "university-management-system": {
    responsibilities: [
      "Designed and implemented RESTful APIs for user creation and management with proper role-based access control and permission management.",
      "Developed and managed schemas for academic entities like semesters, faculties, and departments using Mongoose with Zod validation.",
      "Implemented authentication and authorization mechanisms including JWT tokens to securely handle user login and role-based access.",
      "Ensured smooth transactions and rollback mechanisms across multiple MongoDB collections to maintain data integrity.",
      "Handled custom error scenarios gracefully and provided meaningful error messages to the client for better debugging.",
      "Configured CORS and set up environment variables using dotenv for secure and scalable configuration management.",
    ],
    challenges: [
      "Ensuring consistent schema validation between Zod and Mongoose across different parts of the application.",
      "Managing complex role-based access control for diverse user types like students, faculty, and admins.",
      "Implementing atomic transactions and rollbacks in MongoDB to maintain data integrity.",
      "Handling custom error scenarios effectively and providing meaningful error messages.",
      "Maintaining synchronization between academic entities like semesters, faculties, and departments.",
    ],
    improvements: [
      "Build a frontend dashboard for students and faculty to interact with the API.",
      "Add real-time notifications for academic events using WebSockets.",
      "Introduce a course registration and grading system.",
      "Implement a fee management and payment integration module.",
      "Add comprehensive API documentation with Swagger UI.",
    ],
  },
  "cs-compsolution": {
    responsibilities: [
      "Designed and implemented the front-end interface using ReactJS, ensuring intuitive navigation and seamless user interaction with a focus on responsiveness.",
      "Developed robust back-end functionalities with Node.js, including user authentication, session management, and data processing.",
      "Integrated Firebase authentication for user management, configuring Google login and JWT for email login.",
      "Implemented Stripe payment processing for secure and efficient transactions.",
      "Built the admin dashboard for order management, product management, and user oversight.",
      "Ensured compliance with security standards and protocols, especially regarding sensitive user data and payment processing.",
    ],
    challenges: [
      "Integrating Firebase authentication seamlessly with the backend while ensuring secure communication between frontend and backend components.",
      "Managing user sessions and permissions effectively with multiple authentication options to prevent unauthorized access.",
      "Implementing robust error handling and validation mechanisms for user inputs across various application functionalities.",
      "Managing and securing sensitive user data during payment processing with Stripe.",
      "Balancing the complexity of administrative functionalities with user-friendly interfaces.",
    ],
    improvements: [
      "Add a product comparison feature for side-by-side hardware spec comparisons.",
      "Introduce a review and rating system for products.",
      "Build a recommendation engine based on purchase history and browsing behavior.",
      "Add inventory management with low-stock alerts for admins.",
      "Implement a loyalty rewards program for repeat customers.",
    ],
  },
};

// ── Sidebar tab ──────────────────────────────────────────────────────────────
function SidebarTab({ project, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full text-left rounded-xl border transition-all duration-200 overflow-hidden group",
        isActive
          ? "border-[var(--primary)]/50 bg-[var(--primary)]/8 shadow-sm"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5",
      ].join(" ")}
    >
      {/* thumbnail */}
      <div className="relative w-full h-32 overflow-hidden">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="300px"
          placeholder="blur"
        />
        {isActive && (
          <div className="absolute inset-0 bg-[var(--primary)]/10" />
        )}
      </div>

      {/* meta */}
      <div className="p-3 space-y-2">
        {/* title + active indicator */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
            {project.title}
          </h3>
          {isActive && (
            <ChevronRight className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[var(--primary)]" />
          )}
        </div>

        {/* short description */}
        <p className="text-[11px] leading-5 text-[var(--foreground-muted)] line-clamp-2">
          {project.description ?? project.category}
        </p>

        {/* tech pills */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[9px] font-medium text-[var(--foreground-muted)]"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[9px] font-medium text-[var(--foreground-muted)]">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ── Detail panel ─────────────────────────────────────────────────────────────
function DetailPanel({ project }) {
  const cs = caseStudies[project.slug] ?? { challenges: [], improvements: [] };

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-10"
    >
      {/* Header */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] font-medium">
          {project.category}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
          {project.title}
        </h1>
        <p className="text-sm text-[var(--foreground-muted)]">
          {project.period}
        </p>
      </div>

      {/* Hero image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-[var(--border)]"
        style={{ aspectRatio: "16/7" }}
      >
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 65vw"
          placeholder="blur"
          priority
        />
      </div>

      {/* Tech stack */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)] font-medium">
          Main Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)] transition-colors hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Brief description */}
      {project.description && (
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)] font-medium">
            Brief Description
          </h2>
          <p className="text-sm leading-7 text-[var(--foreground-muted)]">
            {project.description}
          </p>
        </div>
      )}

      {/* Bullet points */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)] font-medium">
          Key Highlights
        </h2>
        <ul className="space-y-2.5">
          {project.points.map((pt, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm leading-6 text-[var(--foreground-muted)]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]/60" />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[#0077c0] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0069a8] dark:bg-[#697565] dark:text-[#ECDFCC] dark:hover:bg-[#5a6357]"
            >
              <ExternalLink className="h-4 w-4" />
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--foreground-muted)] transition hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="h-px w-full bg-[var(--border)]" />

      {/* Case Study */}
      <div className="space-y-8">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Case Study
        </h2>

        {/* Challenges */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Challenges Faced
            </h3>
          </div>
          <ul className="space-y-3">
            {cs.challenges.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground-muted)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/70" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-[var(--primary)] shrink-0" />
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Potential Improvements & Future Plans
            </h3>
          </div>
          <ul className="space-y-3">
            {cs.improvements.map((imp, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground-muted)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]/60" />
                {imp}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        {cs.responsibilities?.length > 0 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-emerald-500 shrink-0" />
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                My Responsibilities
              </h3>
            </div>
            <ul className="space-y-3">
              {cs.responsibilities.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground-muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main page client ──────────────────────────────────────────────────────────
export function ProjectsPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const detailRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const initialSlug = searchParams.get("project") ?? projects[0].slug;
  const [activeSlug, setActiveSlug] = useState(
    projects.find((p) => p.slug === initialSlug)
      ? initialSlug
      : projects[0].slug,
  );

  const activeProject =
    projects.find((p) => p.slug === activeSlug) ?? projects[0];

  const handleSelect = (slug) => {
    setActiveSlug(slug);
    router.replace(`/projects?project=${slug}`, { scroll: false });
    if (window.innerWidth < 1024 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-24 pb-20">
      <Container>
        {/* back link */}
        <Link
          href="/#landingProjects"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* heading */}
        <div className="mb-10 space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--primary)] font-medium">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            All Projects
          </h1>
        </div>

        {/* layout: sidebar + detail */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-start">
          {/* ── Sidebar ── */}
          <div
            data-lenis-prevent
            className="w-full lg:w-[280px] xl:w-[300px] shrink-0 lg:sticky lg:top-28 overflow-y-auto scrollbar-thin pr-1"
            style={{ maxHeight: "calc(100vh - 8rem)" }}
          >
            <div className="space-y-3">
              {projects.map((p) => (
                <SidebarTab
                  key={p.slug}
                  project={p}
                  isActive={p.slug === activeSlug}
                  onClick={() => handleSelect(p.slug)}
                />
              ))}
            </div>
          </div>

          {/* ── Detail panel ── */}
          <div ref={detailRef} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <DetailPanel key={activeSlug} project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
