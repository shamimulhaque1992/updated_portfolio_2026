import websureThumb from "@/assets/images/projectImages/websure-internal/web_int_bnr.png";
import aranyaThumb from "@/assets/images/projectImages/aranya/aranya_shop_new-1-cut.png";
import gainThumb from "@/assets/images/projectImages/gain-io/gain_thumb.png";
import payrunThumb from "@/assets/images/projectImages/payrun/pay_thumb.png";
import easydeskThumb from "@/assets/images/projectImages/easy-desk/easy_thumb.png";
import gain_details_thumbnail_url from "@/assets/images/projectImages/gain-io/mockup-1.webp";
import payrun_details_thumbnail_url from "@/assets/images/projectImages/payrun/Browser.png.webp";
import easydesk_details_thumbnail_url from "@/assets/images/projectImages/easy-desk/More-Support-Requests-With-AI-Powered-Agents.webp";
import maveThumb from "@/assets/images/projectImages/mave/thumb-update.jpeg";
import uhlThumb from "@/assets/images/projectImages/uhl/landingImg.png";
import almuslimThumb from "@/assets/images/projectImages/al-muslim/landing.png";
import slicThumb from "@/assets/images/projectImages/slic/Home.png";
import aygazThumb from "@/assets/images/projectImages/aygaz/landing.png";
import umsThumb from "@/assets/images/projectImages/ums/ums-hat-tall.jpg";
import compThumb from "@/assets/images/projectImages/cs-compsolution/landing.png";

export const projects = [
  {
    slug: "websure",
    title: "Websure Internal App",
    category: "Agency Management Platform",
    period: "April 2026 – Present",
    liveUrl: null,
    githubUrl: null,
    description:
      "An internal agency management platform with session-based auth, RBAC-driven UI, Clockify integration for retainer tracking, and a centralized proxy layer for route protection.",
    thumb: websureThumb,
    points: [
      "Session-based auth with RBAC-driven UI access control across internal and client portal surfaces.",
      "Clockify API integration for real-time retainer hour tracking with SWR-based caching.",
      "Centralized proxy layer for audience-aware route protection.",
      "Built reusable component system with shadcn/ui, cutting UI development time across the platform.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "SWR",
      "RBAC",
      "Server Actions",
      "shadcn/ui",
    ],
  },

  {
    slug: "gain-io",
    title: "Gain.io — CRM SaaS",
    category: "CRM Platform",
    period: "Apr 2025 – Mar 2026",
    liveUrl: "https://gain.io/",
    githubUrl: null,
    description:
      "A multi-tenant CRM SaaS with RBAC, dynamic billing, user management, and notification modules — built with GraphQL and owned end-to-end as the main frontend developer.",
    thumb: gainThumb,
    details_thumbnail_url: gain_details_thumbnail_url,
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
    githubUrl: null,
    description:
      "An HRM platform with role-based access for employees, managers, and HR admins — covering leave management, time tracking, hiring pipelines, and insights dashboards via GraphQL.",
    thumb: payrunThumb,
    details_thumbnail_url: payrun_details_thumbnail_url,
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
    githubUrl: null,
    description:
      "A customer support ticketing SaaS with Canned Responses, Knowledge Base, and Feedback Management modules — built to improve support team efficiency and response quality.",
    thumb: easydeskThumb,
    details_thumbnail_url: easydesk_details_thumbnail_url,
    points: [
      "Built Canned Responses and Knowledge Base, improving team reply efficiency by 30%.",
      "Feedback Management module for tracking, prioritizing, and assigning user feedback.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "aranya",
    title: "Aranya — B2C Ecommerce",
    category: "Ecommerce Platform",
    period: "Oct 2022 – Apr 2025",
    liveUrl: "https://aranya.com.bd",
    githubUrl: null,
    description:
      "Developed an engaging e-commerce platform for Aranya, a renowned Bangladesh clothing brand. Leveraged Next.js, Material UI, Redux, and Firebase for front-end, with Laravel and MySQL for robust back-end functionality. Seamlessly integrates sales of men's, women's, children's clothing, and jewelry.",
    thumb: aranyaThumb,
    points: [
      "Full frontend ownership for a clothing brand serving 1000+ daily active users.",
      "Multi-currency support, eCourier & DHL shipping integrations, and geolocation.",
      "Secure payment flow that boosted checkout conversion by 25%.",
    ],
    stack: ["Next.js", "Redux", "RTK Query", "Material UI", "Firebase"],
  },
  {
    slug: "mave-cms",
    title: "Mave CMS",
    category: "Headless CMS",
    period: "Dec 2023 – Ongoing",
    liveUrl: "https://mave.etherstaging.xyz/",
    githubUrl: null,
    description:
      "Introducing our headless CMS built on Next.js and Ant Design for sleek front-end experiences. Powered by Laravel and MySQL on the back end for seamless content management. Simplify your workflow and elevate your web projects with our powerful solution.",
    thumb: maveThumb,
    points: [
      "Upload media items like images, videos, PDFs, etc.",
      "Create custom components like sliders, cards, navbar, and menu items.",
      "Create events selecting multiple cards or sliders.",
      "Create custom pages for any type of portfolio website.",
      "Create forms to collect user data and display them in the dashboard.",
    ],
    stack: ["Next.js", "React Context API", "Ant Design", "Axios"],
  },
  {
    slug: "united-hospital",
    title: "United Hospital Limited",
    category: "Medical & Healthcare Website",
    period: "Nov 2022 – Ongoing",
    liveUrl: "https://uhlbd.com/",
    githubUrl: null,
    description:
      "Crafted an intuitive medical website for United Hospital Limited, Bangladesh, using React.js with Bootstrap for frontend excellence. Integrated Swiper.js for dynamic content display and AOS for captivating animations, ensuring a seamless and engaging user experience.",
    thumb: uhlThumb,
    points: [
      "Department selection via interactive male/female body diagrams.",
      "Appointment scheduling with specific doctors and online payment integration.",
      "User dashboard with checkup reports, prescriptions, and appointment history.",
      "Emergency services request — ambulance and home service.",
    ],
    stack: ["React.js", "Bootstrap", "Swiper.js", "AOS", "Firebase", "Axios"],
  },
  {
    slug: "al-muslim-group",
    title: "Al Muslim Group",
    category: "Corporate Website",
    period: "Mar 2024 – Apr 2024",
    liveUrl: null,
    githubUrl: null,
    description:
      "Crafted a dynamic website for Al Muslim Group, integrating Next.js and Bootstrap for seamless UI/UX. Employed AOS and React-animate-on-scroll for engaging animations. Delivered a modern digital presence with Next.js proficiency at the forefront.",
    thumb: almuslimThumb,
    points: [
      "Company profile, certificates, machinery, trusted partners, audit, training, CSR, sister concerns, and gallery.",
      "Smooth transitions and animations for a visually appealing user experience.",
      "Responsive design for seamless viewing across devices.",
    ],
    stack: ["Next.js", "Bootstrap", "AOS", "SwiperJS"],
  },
  {
    slug: "slic",
    title: "Sandhani Life Insurance",
    category: "Financial Services Website",
    period: "Feb 2023 – Apr 2023",
    liveUrl: null,
    githubUrl: null,
    description:
      "Crafted a user-friendly insurance website integrating Next.js, Material UI, and SwiperJS. Developed a precise premium calculator for accurate insurance estimations. Included sections for company details, board members, partners, and policies.",
    thumb: slicThumb,
    points: [
      "Premium calculator for accurate insurance amount estimations based on user input.",
      "Company details, board members, partners, trust committee, investors, and policies.",
      "Notices, updates, and announcements sections.",
      "Responsive design optimized for fast loading across devices.",
    ],
    stack: ["Next.js", "Material UI", "SwiperJS", "Axios"],
  },
  {
    slug: "aygaz",
    title: "United Aygaz LPG",
    category: "Corporate Website",
    period: "Oct 2022 – May 2023",
    liveUrl: "https://unitedaygaz.com/",
    githubUrl: null,
    description:
      "Design and develop UnitedAygaz's dual-language website using Next.js, Redux, and Bootstrap, featuring product details, order management, dealership forms, and a user-friendly interface for optimal performance.",
    thumb: aygazThumb,
    points: [
      "Dual-language support (English & Bengali) for wider accessibility.",
      "Product details, pricing, and delivery options for cylinder gas, auto gas, and bulk gas.",
      "Order management system and dealer request form.",
      "CMS integration for dynamic content updates.",
    ],
    stack: ["Next.js", "Redux", "Material UI", "SwiperJS", "Axios"],
  },
  {
    slug: "university-management-system",
    title: "University Management System",
    category: "API Server (Back-end)",
    period: "May 2023 – Dec 2023",
    liveUrl:
      "https://university-auth-service-backend-server.vercel.app/api/v1/students",
    githubUrl:
      "https://github.com/shamimulhaque1992/university_managemetn_system_AUTH_service/tree/main",
    description:
      "This university management system API, built with Express.js, MongoDB, Mongoose, and TypeScript, provides a robust backend for managing students, faculty, courses, and administrative tasks. Leverages secure endpoints for CRUD operations, ensuring type safety and scalability.",
    thumb: umsThumb,
    points: [
      "Creation and management of users as students, faculty, and administrators.",
      "Academic semesters, faculty, and department management.",
      "Authentication and authorization with role permission management.",
      "Transactions and rollbacks for multi-document operations.",
      "Schema validation using Zod and Mongoose schemas.",
    ],
    stack: ["TypeScript", "Express.js", "MongoDB", "Mongoose", "Zod", "JWT"],
  },
  {
    slug: "cs-compsolution",
    title: "Comp-Solution",
    category: "Full Stack B2B Website",
    period: "May 2022 – Sep 2022",
    liveUrl: "https://comp-solution-ab5ea.web.app/",
    githubUrl:
      "https://github.com/shamimulhaque1992/CompSolution_client_fullstack-react-node/tree/main",
    description:
      "Cs - Compsolution represents a comprehensive approach to PC component retail, leveraging React.js, Express.js, MongoDB, Tailwind, and Firebase. The platform ensures seamless user experience and robust backend support, providing customers with the latest in hardware solutions.",
    thumb: compThumb,
    points: [
      "Firebase authentication with Google login and JWT for email login.",
      "Stripe payment processing for secure transactions.",
      "Admin dashboard for order management and product management.",
      "User profile with order history and status tracking.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],
  },
];

// ── Case study content per project ──────────────────────────────────────────
export const caseStudies = {
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
