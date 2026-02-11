import { ArchivedProject } from "@/types/project";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Table({ projects }: { projects: ArchivedProject[] }) {
  return (
    <table className="w-full border-collapse text-left">
      <thead className="sticky top-0 z-10 border-b border-border bg-background">
        <tr>
          <th className="py-3 pr-6 text-sm font-semibold">Year</th>
          <th className="py-3 pr-6 text-sm font-semibold">Project</th>
          <th className="hidden lg:table-cell py-3 pr-6 text-sm font-semibold">Made at</th>
          <th className="hidden lg:table-cell py-3 pr-6 text-sm font-semibold">Built with</th>
          <th className="hidden sm:table-cell py-3 pr-6 text-sm font-semibold">Link</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((proj, idx) => (
          <tr
            key={idx}
            className="border-b border-border last:border-none hover:bg-accent/10 transition-colors"
          >
            <td className="py-3 pr-4 text-sm">{proj.year}</td>
            <td className="py-3 pr-4 text-sm font-medium">{proj.name}</td>
            <td className="hidden lg:table-cell py-3 pr-4 text-sm">{proj.madeAt}</td>
            <td className="hidden lg:table-cell py-3 pr-4">
              <ul className="flex flex-wrap gap-1">
                {proj.builtWith.map((tech, j) => (
                  <li
                    key={j}
                    className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </td>
            <td className="hidden sm:table-cell py-3">
              {proj.link.startsWith("http") ? (
                <Link
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-hover text-sm font-medium inline-flex items-center gap-1"
                >
                   {proj.link}
                  <FaExternalLinkAlt className="h-3 w-3 relative -top-px" />
                </Link>
              ) : (
                <span className="text-muted text-sm italic">
                  {proj.link}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
