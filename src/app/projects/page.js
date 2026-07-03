import { Suspense } from "react";
import { ProjectsPageClient } from "./ProjectsPageClient";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Projects | Khandoker Shamimul Haque",
  description: "All projects by Khandoker Shamimul Haque — frontend developer.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Suspense fallback={null}>
        <ProjectsPageClient />
      </Suspense>
      <Footer />
    </main>
  );
}
