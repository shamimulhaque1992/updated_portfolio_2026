import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { siteConfig } from "@/lib/resume";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <div className="pt-28">
        <Hero
          greeting="Crafting elegant interfaces for modern web applications"
          name={siteConfig.name}
          role={siteConfig.role}
          summary={siteConfig.heroSummary}
          resumeUrl={siteConfig.resumeUrl}
        />
      </div>
    </main>
  );
}
