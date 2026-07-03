export default function ProjectPage({ params }) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <p className="text-muted-foreground">Project details coming soon — {params.slug}</p>
    </main>
  );
}
