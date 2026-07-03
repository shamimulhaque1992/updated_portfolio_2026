import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

export default function ProjectSlugPage({ params }) {
  const exists = projects.find((p) => p.slug === params.slug);
  redirect(`/projects?project=${exists ? params.slug : projects[0].slug}`);
}
