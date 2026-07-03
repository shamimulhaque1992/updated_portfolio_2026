import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/sections/featured-projects/FeaturedProjects";
import { siteConfig, aboutData, experienceData, skillsData } from "@/lib/resume";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero
        greeting="Crafting elegant interfaces for modern web applications"
        name={siteConfig.name}
        role={siteConfig.role}
        summary={siteConfig.heroSummary}
        resumeUrl={siteConfig.resumeUrl}
      />
      <About
        bio={aboutData.bio}
        highlights={aboutData.highlights}
        focus={aboutData.focus}
        currentRole={aboutData.currentRole}
        availability={aboutData.availability}
      />
      <Experience experiences={experienceData} />
      <Skills skills={skillsData} />
      <FeaturedProjects />
    </main>
  );
}
