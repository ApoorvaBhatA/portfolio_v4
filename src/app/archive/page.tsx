import ArchiveTable from "@/components/ArchiveTable";
import { ArchivedProject } from "@/types/project";
import Link from "next/link";
import project from "@/data/archivedProjects.json";

export default function ProjectsPage() {
  const projects = project.archivedProjects as ArchivedProject[];
  return (
    <div>
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center mb-6 font-semibold text-accent hover:text-hover"
      >
        ← Back to Home
      </Link>

      {/* Page title */}
      <h1 className="text-4xl font-bold tracking-tight mb-8">
        All Projects
      </h1>

      {/* Projects Table */}
      <ArchiveTable projects={projects} />
    </div>
  );
}
